import cwiid
import time
from PubNub import sendmessage
import PubNub

button_delay = 0.1
channelname = 'controller-data'
pubnubdata = {}
 
print 'Press 1 + 2 on your Wii Remote now ...'
time.sleep(1)
 
# Connect to the Wii Remote. If it times out
# then quit.
try:
  wii=cwiid.Wiimote()
except RuntimeError:
  print "Error opening wiimote connection"
  quit()
 
print 'Wii Remote connected...\n'
print 'Press some buttons!\n'
print 'Press PLUS and MINUS together to disconnect and quit.\n'
 
wii.rpt_mode = cwiid.RPT_BTN
 
while True:
    
  pubnubdata['direction'] = None
  pubnubdata['drawing'] = None
  pubnubdata['erasing'] = None
  pubnubdata['minus'] = None
  pubnubdata['plus'] = None
  pubnubdata['stop'] = None
  pubnubdata['stopconfirm'] = None
     
  buttons = wii.state['buttons']
 
  # If Plus and Minus buttons pressed
  # together then rumble and quit.
  if (buttons - cwiid.BTN_PLUS - cwiid.BTN_MINUS == 0):
    print '\nClosing connection ...'
    wii.rumble = 1
    time.sleep(1)
    wii.rumble = 0
    exit(wii)
 
  # Check if other buttons are pressed by
  # doing a bitwise AND of the buttons number
  # and the predefined constant for that button.
  if (buttons & cwiid.BTN_LEFT):
    pubnubdata['direction'] = 'left'
 
  if(buttons & cwiid.BTN_RIGHT):
    pubnubdata['direction'] = 'right'
     
  if (buttons & cwiid.BTN_UP):
    pubnubdata['direction'] = 'up'
     
  if (buttons & cwiid.BTN_DOWN):
    pubnubdata['direction'] = 'down'
     
  if (buttons & cwiid.BTN_1):
    pubnubdata['stop'] = 1

  if (buttons & cwiid.BTN_2):
    pubnubdata['stopconfirm'] = 1
 
  if (buttons & cwiid.BTN_A):
    pubnubdata['erasing'] = 1
     
  if (buttons & cwiid.BTN_B):
    pubnubdata['drawing'] = 1
     
  # if (buttons & cwiid.BTN_HOME):
     
  if (buttons & cwiid.BTN_MINUS):
    pubnubdata['minus'] = 1
     
  if (buttons & cwiid.BTN_PLUS):
    pubnubdata['plus'] = 1
     
  print(pubnubdata)
  sendmessage(channelname, pubnubdata)
  time.sleep(button_delay)