from pubnub.pnconfiguration import PNConfiguration
from pubnub.pubnub import PubNub
 
pnconfig = PNConfiguration()
pnconfig.subscribe_key = "sub-c-b3ec2a8e-f5e5-11e7-b8a6-46d99af2bb8c"
pnconfig.publish_key = "pub-c-6519bbc5-67e7-4739-be07-e7d25edee088"
pnconfig.ssl = False
 
pubnub = PubNub(pnconfig)

def publish_callback(result, status):
    pass
    # Handle PNPublishResult and PNStatus
    
def sendmessage(_channel, _message):
    pubnub.publish().channel(_channel).message(_message).async(publish_callback)