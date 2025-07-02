
# Hope Whisperer - AI Recovery Counselor

A compassionate AI-powered web application designed to provide support for individuals struggling with substance abuse through real-time voice conversations using ElevenLabs Conversational AI.

## 🌟 Features

- **Voice-First Interface**: Speak naturally using your device's microphone
- **Real-Time Audio Response**: Receive immediate audio feedback from your AI counselor
- **Privacy-Focused**: Your API key is stored locally and conversations are private
- **Responsive Design**: Works seamlessly on desktop and mobile devices
- **Calming UI**: Thoughtfully designed interface with healing colors and typography
- **24/7 Availability**: Access support whenever you need it

## 🚀 Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn package manager
- ElevenLabs API key with a conversational agent configured

### Installation

1. **Clone the repository**
   ```bash
   git clone <your-repo-url>
   cd hope-whisperer
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:8080`

### ElevenLabs Setup

1. **Create an ElevenLabs Account**
   - Visit [ElevenLabs](https://elevenlabs.io)
   - Sign up for an account

2. **Get Your API Key**
   - Go to your ElevenLabs dashboard
   - Navigate to the API section
   - Copy your API key

3. **Create a Conversational Agent**
   - In your ElevenLabs dashboard, create a new conversational agent
   - Configure it with appropriate prompts for addiction recovery counseling
   - Ensure it's trained to provide supportive, empathetic responses

4. **Enter Your API Key**
   - When you first open Hope Whisperer, you'll be prompted to enter your API key
   - Your key is stored locally in your browser for privacy

## 🛠️ Technology Stack

- **Frontend Framework**: React 18 with TypeScript
- **Build Tool**: Vite
- **Styling**: Tailwind CSS
- **UI Components**: shadcn/ui
- **Voice Integration**: ElevenLabs React SDK (@11labs/react)
- **Icons**: Lucide React
- **State Management**: React Hooks
- **Routing**: React Router DOM

## 📱 Usage

1. **Initial Setup**
   - Enter your ElevenLabs API key when prompted
   - The key is securely stored in your browser's local storage

2. **Starting a Conversation**
   - Click the microphone button to start speaking
   - Speak naturally about your concerns or questions
   - The AI will respond with both text and audio

3. **Managing Sessions**
   - Each conversation is independent
   - You can change your API key at any time
   - No conversation history is stored for privacy

## 🔒 Privacy & Security

- **Local Storage**: API keys are stored only in your browser's local storage
- **No Data Collection**: Conversations are not stored or logged by the application
- **Secure Communication**: All communication with ElevenLabs is encrypted
- **No Third-Party Analytics**: The app doesn't track user behavior

## 🎨 Design Philosophy

Hope Whisperer is designed with recovery and healing in mind:

- **Calming Colors**: Blue and green gradients promote tranquility
- **Accessible Typography**: Clear, readable fonts reduce cognitive load
- **Intuitive Interface**: Simple, distraction-free design
- **Empathetic Messaging**: Encouraging and supportive language throughout

## 🚧 Development

### Project Structure

```
src/
├── components/
│   ├── ApiKeySetup.tsx          # API key configuration
│   ├── ConversationInterface.tsx # Main voice chat interface
│   └── ui/                      # Reusable UI components
├── pages/
│   ├── Index.tsx                # Main application page
│   └── NotFound.tsx             # 404 error page
├── lib/
│   └── utils.ts                 # Utility functions
└── main.tsx                     # Application entry point
```

### Available Scripts

```bash
# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Lint code
npm run lint
```

### Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🤝 Support

If you're in crisis, please contact emergency services or a crisis helpline immediately:

- **National Suicide Prevention Lifeline**: 988
- **Crisis Text Line**: Text HOME to 741741
- **SAMHSA Helpline**: 1-800-662-4357

## 🙏 Acknowledgments

- **ElevenLabs** for providing the conversational AI technology
- **shadcn/ui** for the beautiful UI components
- **Tailwind CSS** for the styling framework
- **React** and **Vite** for the development foundation

## 🔮 Future Enhancements

- [ ] Multi-language support
- [ ] Conversation history (with user consent)
- [ ] Crisis intervention features
- [ ] Integration with recovery resources
- [ ] Mobile app version
- [ ] Offline support

---

**Disclaimer**: This application provides AI-powered support and is not a replacement for professional medical advice, diagnosis, or treatment. Always seek the advice of qualified healthcare providers with questions about your health and recovery.

**Built with ❤️ for the recovery community**
