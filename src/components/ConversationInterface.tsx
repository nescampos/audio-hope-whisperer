
import React, { useState, useEffect } from 'react';
import { useConversation } from '@11labs/react';
import { Mic, MicOff, AudioWaveform, AudioLines } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { toast } from '@/hooks/use-toast';

interface ConversationInterfaceProps {
  apiKey: string;
}

const ConversationInterface: React.FC<ConversationInterfaceProps> = ({ apiKey }) => {
  const [isConnected, setIsConnected] = useState(false);
  const [agentId, setAgentId] = useState('');
  const [volume, setVolume] = useState(0.8);
  const [hasPermission, setHasPermission] = useState(false);

  const conversation = useConversation({
    onConnect: () => {
      setIsConnected(true);
      toast({
        title: "Connected",
        description: "You're now connected to your counselor. Feel free to start talking.",
      });
    },
    onDisconnect: () => {
      setIsConnected(false);
      toast({
        title: "Disconnected",
        description: "Your session has ended. Take care of yourself.",
      });
    },
    onError: (error) => {
      console.error('Conversation error:', error);
      toast({
        title: "Connection Issue",
        description: "There was a problem connecting to your counselor. Please try again.",
        variant: "destructive",
      });
    },
    onMessage: (message) => {
      console.log('Message received:', message);
    },
  });

  const { status, isSpeaking } = conversation;

  useEffect(() => {
    // Check microphone permission on component mount
    checkMicrophonePermission();
  }, []);

  const checkMicrophonePermission = async () => {
    try {
      await navigator.mediaDevices.getUserMedia({ audio: true });
      setHasPermission(true);
    } catch (error) {
      setHasPermission(false);
      console.error('Microphone permission denied:', error);
    }
  };

  const requestMicrophonePermission = async () => {
    try {
      await navigator.mediaDevices.getUserMedia({ audio: true });
      setHasPermission(true);
      toast({
        title: "Microphone Access Granted",
        description: "You can now start your conversation with the counselor.",
      });
    } catch (error) {
      setHasPermission(false);
      toast({
        title: "Microphone Access Required",
        description: "Please allow microphone access to have a voice conversation.",
        variant: "destructive",
      });
    }
  };

  const startConversation = async () => {
    if (!hasPermission) {
      await requestMicrophonePermission();
      return;
    }

    if (!agentId) {
      toast({
        title: "Agent ID Required",
        description: "Please enter your ElevenLabs Agent ID to start the conversation.",
        variant: "destructive",
      });
      return;
    }

    try {
      await conversation.startSession({ agentId });
    } catch (error) {
      console.error('Failed to start conversation:', error);
      toast({
        title: "Connection Failed",
        description: "Unable to connect to the counselor. Please check your Agent ID and try again.",
        variant: "destructive",
      });
    }
  };

  const endConversation = async () => {
    try {
      await conversation.endSession();
    } catch (error) {
      console.error('Failed to end conversation:', error);
    }
  };

  const handleVolumeChange = async (newVolume: number) => {
    setVolume(newVolume);
    if (isConnected) {
      await conversation.setVolume({ volume: newVolume });
    }
  };

  return (
    <div className="max-w-2xl mx-auto p-6 space-y-6">
      <Card className="bg-gradient-to-br from-blue-50 to-green-50 border-blue-200">
        <CardHeader className="text-center">
          <CardTitle className="text-2xl text-blue-900">Hope Counselor</CardTitle>
          <CardDescription className="text-blue-700">
            Your AI companion for support and guidance on your recovery journey
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          {!hasPermission && (
            <Alert className="border-amber-200 bg-amber-50">
              <AlertDescription className="text-amber-800">
                Microphone access is required for voice conversations. 
                <Button 
                  onClick={requestMicrophonePermission}
                  variant="outline"
                  size="sm"
                  className="ml-2 border-amber-300 text-amber-800 hover:bg-amber-100"
                >
                  Grant Access
                </Button>
              </AlertDescription>
            </Alert>
          )}

          <div className="space-y-4">
            <div>
              <label htmlFor="agentId" className="block text-sm font-medium text-gray-700 mb-2">
                ElevenLabs Agent ID
              </label>
              <input
                id="agentId"
                type="text"
                value={agentId}
                onChange={(e) => setAgentId(e.target.value)}
                placeholder="Enter your trained counselor agent ID"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                disabled={isConnected}
              />
            </div>

            <div>
              <label htmlFor="volume" className="block text-sm font-medium text-gray-700 mb-2">
                Voice Volume: {Math.round(volume * 100)}%
              </label>
              <input
                id="volume"
                type="range"
                min="0"
                max="1"
                step="0.1"
                value={volume}
                onChange={(e) => handleVolumeChange(parseFloat(e.target.value))}
                className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer slider"
              />
            </div>
          </div>

          <div className="text-center space-y-4">
            {!isConnected ? (
              <Button
                onClick={startConversation}
                disabled={!hasPermission || !agentId}
                size="lg"
                className="bg-gradient-to-r from-blue-600 to-green-600 hover:from-blue-700 hover:to-green-700 text-white px-8 py-3 rounded-full transition-all duration-300 transform hover:scale-105"
              >
                <Mic className="w-5 h-5 mr-2" />
                Start Conversation
              </Button>
            ) : (
              <Button
                onClick={endConversation}
                variant="destructive"
                size="lg"
                className="px-8 py-3 rounded-full transition-all duration-300 transform hover:scale-105"
              >
                <MicOff className="w-5 h-5 mr-2" />
                End Conversation
              </Button>
            )}

            {isConnected && (
              <div className="flex items-center justify-center space-x-4">
                <div className={`flex items-center space-x-2 px-4 py-2 rounded-full ${
                  status === 'connected' ? 'bg-green-100 text-green-800' : 'bg-gray-100 text-gray-600'
                }`}>
                  <div className={`w-3 h-3 rounded-full ${
                    status === 'connected' ? 'bg-green-500 animate-pulse' : 'bg-gray-400'
                  }`}></div>
                  <span className="text-sm font-medium">
                    {status === 'connected' ? 'Connected' : 'Connecting...'}
                  </span>
                </div>

                {isSpeaking && (
                  <div className="flex items-center space-x-2 px-4 py-2 bg-blue-100 text-blue-800 rounded-full">
                    <AudioWaveform className="w-4 h-4 animate-pulse" />
                    <span className="text-sm font-medium">Counselor Speaking</span>
                  </div>
                )}
              </div>
            )}
          </div>
        </CardContent>
      </Card>

      {isConnected && (
        <Card className="bg-gradient-to-br from-green-50 to-blue-50 border-green-200">
          <CardContent className="pt-6">
            <div className="text-center space-y-3">
              <AudioLines className="w-12 h-12 mx-auto text-green-600 animate-pulse" />
              <h3 className="text-lg font-semibold text-green-900">
                Your counselor is listening
              </h3>
              <p className="text-green-700 text-sm">
                Speak naturally about whatever is on your mind. This is a safe space.
              </p>
            </div>
          </CardContent>
        </Card>
      )}

      <div className="text-center text-sm text-gray-600 space-y-2">
        <p>💙 Remember: You are not alone in this journey</p>
        <p>🌱 Every conversation is a step toward healing</p>
        <p>🤝 This AI counselor is here to support you 24/7</p>
      </div>
    </div>
  );
};

export default ConversationInterface;
