import { Header, Container, useWebchat } from '@botpress/webchat'
import { useState } from 'react'

// Every attribute that the header component can take
const headerConfig = {
  botName: 'Bot Name',
  botAvatar: 'https://cdn.botpress.cloud/bot-avatar.png',
  botDescription: 'This is a description of your bot.',

  phone: {
    title: 'Phone',
    link: 'tel:+1234567890',
  },

  email: {
    title: 'Email',
    link: 'mailto:support@example.com',
  },

  website: {
    title: 'Website',
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
    <Container
      // connected={clientState !== 'disconnected'}
      style={{
        width: '400px',
        height: '95%',
        display: 'flex',
        position: 'fixed',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
      }}
    >
      <Header
        defaultOpen={false}
        closeWindow={() => setIsWebchatOpen(false)}
        restartConversation={newConversation}
        disabled={false}
        configuration={headerConfig}
        />
    </Container>
  )
}

export default App