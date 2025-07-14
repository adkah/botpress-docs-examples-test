import { Container, useWebchat } from '@botpress/webchat'
import { useState } from 'react'

function App() {
  const [isWebchatOpen, setIsWebchatOpen] = useState(true)

  const { clientState } = useWebchat({
    clientId: '$CLIENT_ID$', // Insert your Client ID here
  })

  return (
    <Container
      connected={clientState !== 'disconnected'}
      style={{
        width: '500px',
        height: '800px',
        display: isWebchatOpen ? 'flex' : 'none',
        position: 'fixed',
        bottom: '90px',
        right: '20px',
      }}
    >
      <span
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          height: '100%',
          width: '100%'
        }}
      >
        (Your other Webchat components go here)
      </span>
    </Container>
  )
}

export default App