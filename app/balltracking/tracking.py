from collections import deque
from imutils.video import VideoStream
from PubNub import sendmessage
import PubNub
import numpy as np
import datetime
import argparse
import imutils
import time
import cv2
 
# construct the argument parse and parse the arguments
ap = argparse.ArgumentParser()
ap.add_argument("-p", "--picamera", type=int, default=1, help="whether or not the Raspberry Pi camera should be used")
ap.add_argument("-b", "--buffer", type=int, default=12, help="max buffer size")
args = vars(ap.parse_args())

# lower and upper boundaries
greenLower = (29, 86, 6)
greenUpper = (90, 255, 225)
pts = deque(maxlen=args["buffer"])
 
# initialize the video stream and allow the cammera sensor to warmup
vs = VideoStream(usePiCamera=args["picamera"] > 0).start()
time.sleep(2.0)

# the array to send to Pubnub every 0.5 seconds
pubnubarray = []
count = 0
maxcount = 2
channelname = 'canvas-data'

while True:
    frame = vs.read()
    frame = imutils.resize(frame, width=500)
    
    hsv = cv2.cvtColor(frame, cv2.COLOR_BGR2HSV)
    mask = cv2.inRange(hsv, greenLower, greenUpper)
    mask = cv2.erode(mask, None, iterations = 2)
    mask = cv2.dilate(mask, None, iterations = 2)
    
    # (x, y) center of the ball
    cnts = cv2.findContours(mask.copy(), cv2.RETR_EXTERNAL, cv2.CHAIN_APPROX_SIMPLE)[-2]
    center = None
    
    if len(cnts) > 0 :
    	c = max(cnts, key = cv2.contourArea)
    	((x, y), radius) = cv2.minEnclosingCircle(c)
    	M = cv2.moments(c)
    	center = (int(M["m10"] / M["m00"]), int(M["m01"] / M["m00"]))

        if radius > 5:
            cv2.circle(frame, (int(x), int(y)), int(radius), (0, 255, 255), 2)

	    cv2.circle(frame, center, 5, (0, 0, 255), -1)

	pts.appendleft(center)

	# loop over the set of tracked points
	for i in xrange(1, len(pts)):
	    if pts[i - 1] is None or pts[i] is None:
		continue

	    thickness = int(np.sqrt(args["buffer"] / float(i + 1)) * 2.5)
	    cv2.line(frame, pts[i - 1], pts[i], (0, 0, 255), thickness)
 
    # flip the frame
    frame = cv2.flip(frame, 1)
    
    # show coords
    if 'x' in locals():
        cv2.putText(frame, "X: " + str(x), (10, 10), cv2.FONT_HERSHEY_SIMPLEX, 0.35, (0, 0, 255), 1)
        cv2.putText(frame, "Y: " + str(y), (10, 30), cv2.FONT_HERSHEY_SIMPLEX, 0.35, (0, 0, 255), 1)
        
        pubnubarray.append([x, y])
        count = count + 1
        if count == maxcount :
            count = 0
            print(pubnubarray)
            sendmessage(channelname, pubnubarray)
            pubnubarray = []
 
    timestamp = datetime.datetime.now()
    ts = timestamp.strftime("%A %d %B %Y %I:%M:%S%p")
    cv2.putText(frame, ts, (10, frame.shape[0] - 10), cv2.FONT_HERSHEY_SIMPLEX, 0.35, (0, 0, 255), 1)
 
    # show the frame
    cv2.imshow("Frame", frame)
    key = cv2.waitKey(1) & 0xFF
 
    # quit
    if key == ord("q"):
	break
 
# cleanup
cv2.destroyAllWindows()
vs.stop()