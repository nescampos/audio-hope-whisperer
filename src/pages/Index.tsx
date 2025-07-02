
import React, { useState, useEffect } from 'react';
import ApiKeySetup from '@/components/ApiKeySetup';
import ConversationInterface from '@/components/ConversationInterface';

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
          <p className="text-gray-600 text-lg">
            Your compassionate AI companion for recovery and healing
          </p>
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
