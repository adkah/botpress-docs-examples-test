import { Header, useWebchat } from '@botpress/webchat'
import { useState } from 'react'

// Every attribute that the header component can take
const headerConfig = {
  botName: 'SupportBot',
  botAvatar: 'https://cdn.botpress.cloud/bot-avatar.png',
  botDescription: 'Your virtual assistant for all things support.',

  phone: {
    title: 'Call Support',
    link: 'tel:+1234567890',
  },

  email: {
    title: 'Email Us',
    link: 'mailto:support@example.com',
  },

  website: {
    title: 'Visit our website',
    link: 'https://www.example.com',
  },

  termsOfService: {
    title: 'Terms of Service',
    link: 'https://www.example.com/terms',
  },

  privacyPolicy: {
    title: 'Privacy Policy',
    link: 'https://www.example.com/privacy',
  },
}

function App() {
  const [isWebchatOpen, setIsWebchatOpen] = useState(true)

  const { newConversation } = useWebchat({
    clientId: '$CLIENT_ID$', // Insert your client id here
  })

  return (
      <Header
      // onOpenChange={() => console.log('Override the header open change')}
      defaultOpen={true}
      closeWindow={() => setIsWebchatOpen(false)}
      restartConversation={newConversation}
      disabled={false}
      configuration={headerConfig}
    />
  )
}

export default App