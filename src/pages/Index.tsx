
import React, { useState, useEffect } from 'react';
import ApiKeySetup from '@/components/ApiKeySetup';
import ConversationInterface from '@/components/ConversationInterface';
import { Heart, Shield, Clock, Users } from 'lucide-react';

const Index = () => {
  const [apiKey, setApiKey] = useState<string>('');

  useEffect(() => {
    // Check if API key is stored in localStorage
    const storedApiKey = localStorage.getItem('elevenlabs_api_key');
    if (storedApiKey) {
      setApiKey(storedApiKey);
    }
  }, []);

  const handleApiKeySet = (key: string) => {
    setApiKey(key);
    localStorage.setItem('elevenlabs_api_key', key);
  };

  const handleResetApiKey = () => {
    setApiKey('');
    localStorage.removeItem('elevenlabs_api_key');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 via-white to-green-100">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent mb-2">
            Hope Whisperer
          </h1>
          <p className="text-gray-600 text-lg mb-6">
            Your compassionate AI companion for recovery and healing
          </p>
          
          {/* What You Can Talk About Section */}
          <div className="max-w-4xl mx-auto mb-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-6">What We Can Talk About</h2>
            
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="bg-white/70 backdrop-blur-sm rounded-lg p-6 shadow-sm border border-blue-100">
                <h3 className="text-lg font-semibold text-blue-700 mb-3">Recovery Support</h3>
                <ul className="text-gray-700 space-y-2 text-left">
                  <li>• Overcoming cravings and triggers</li>
                  <li>• Building healthy coping strategies</li>
                  <li>• Managing withdrawal symptoms</li>
                  <li>• Creating daily recovery routines</li>
                  <li>• Setting and achieving sobriety goals</li>
                </ul>
              </div>
              
              <div className="bg-white/70 backdrop-blur-sm rounded-lg p-6 shadow-sm border border-green-100">
                <h3 className="text-lg font-semibold text-green-700 mb-3">Emotional Wellness</h3>
                <ul className="text-gray-700 space-y-2 text-left">
                  <li>• Processing difficult emotions</li>
                  <li>• Managing anxiety and depression</li>
                  <li>• Building self-esteem and confidence</li>
                  <li>• Dealing with shame and guilt</li>
                  <li>• Developing emotional regulation skills</li>
                </ul>
              </div>
              
              <div className="bg-white/70 backdrop-blur-sm rounded-lg p-6 shadow-sm border border-purple-100">
                <h3 className="text-lg font-semibold text-purple-700 mb-3">Life Rebuilding</h3>
                <ul className="text-gray-700 space-y-2 text-left">
                  <li>• Repairing damaged relationships</li>
                  <li>• Finding purpose and meaning</li>
                  <li>• Career and education planning</li>
                  <li>• Financial recovery strategies</li>
                  <li>• Creating a supportive environment</li>
                </ul>
              </div>
              
              <div className="bg-white/70 backdrop-blur-sm rounded-lg p-6 shadow-sm border border-orange-100">
                <h3 className="text-lg font-semibold text-orange-700 mb-3">Daily Challenges</h3>
                <ul className="text-gray-700 space-y-2 text-left">
                  <li>• Handling social pressure</li>
                  <li>• Navigating recovery setbacks</li>
                  <li>• Building motivation and accountability</li>
                  <li>• Celebrating milestones and progress</li>
                  <li>• Finding healthy activities and hobbies</li>
                </ul>
              </div>
            </div>

            {/* Features */}
            <div className="grid md:grid-cols-4 gap-4 mb-8">
              <div className="text-center p-4">
                <Heart className="w-8 h-8 text-red-500 mx-auto mb-2" />
                <h4 className="font-medium text-gray-800">Compassionate</h4>
                <p className="text-sm text-gray-600">Non-judgmental support</p>
              </div>
              <div className="text-center p-4">
                <Shield className="w-8 h-8 text-blue-500 mx-auto mb-2" />
                <h4 className="font-medium text-gray-800">Private</h4>
                <p className="text-sm text-gray-600">Your conversations are safe</p>
              </div>
              <div className="text-center p-4">
                <Clock className="w-8 h-8 text-green-500 mx-auto mb-2" />
                <h4 className="font-medium text-gray-800">24/7 Available</h4>
                <p className="text-sm text-gray-600">Support when you need it</p>
              </div>
              <div className="text-center p-4">
                <Users className="w-8 h-8 text-purple-500 mx-auto mb-2" />
                <h4 className="font-medium text-gray-800">Understanding</h4>
                <p className="text-sm text-gray-600">Trained in recovery support</p>
              </div>
            </div>
          </div>
        </div>

        {/* Main Content */}
        {!apiKey ? (
          <ApiKeySetup onApiKeySet={handleApiKeySet} />
        ) : (
          <div className="space-y-6">
            <div className="text-center">
              <button
                onClick={handleResetApiKey}
                className="text-sm text-gray-500 hover:text-gray-700 underline"
              >
                Change API Key
              </button>
            </div>
            <ConversationInterface apiKey={apiKey} />
          </div>
        )}

        {/* Footer */}
        <footer className="mt-16 text-center text-sm text-gray-500 space-y-2">
          <p>
            This app provides AI-powered support and is not a replacement for professional medical advice.
          </p>
          <p>
            If you're in crisis, please contact emergency services or a crisis helpline immediately.
          </p>
          <div className="pt-4 border-t border-gray-200 mt-8">
            <p>Built with compassion using ElevenLabs Conversational AI</p>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Index;
