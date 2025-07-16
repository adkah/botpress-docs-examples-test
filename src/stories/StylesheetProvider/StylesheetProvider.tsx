import { StylesheetProvider, Webchat, Fab } from '@botpress/webchat'
import { useState } from 'react'

const config = {
  color: '#3778f0',
  fontFamily: 'Inter',
  radius: 1,
  variant: 'glass',
  themeMode: 'light',
  headerVariant: 'glass'
}

function App() {
  const [isWebchatOpen, setIsWebchatOpen] = useState(false)
  const toggleWebchat = () => {
      setIsWebchatOpen((prevState) => !prevState)
  }

  return (
    <>
      <StylesheetProvider
        color={config.color}
        fontFamily={config.fontFamily}
        radius={config.radius}
        variant={config.variant}
        themeMode={config.themeMode}
        headerVariant={config.headerVariant}
      />
      <Webchat
        clientId="e39c5901-b678-47f4-b95b-37f743dc3917" // Your client ID here
        style={{
        width: '400px',
        height: '600px',
        display: 'flex',
        position: 'fixed',
        bottom: '90px',
        right: '20px',
        }}
    />
    <Fab
        onClick={() => toggleWebchat()}
        style={{
        position: 'fixed',
        bottom: '20px',
        right: '20px',
        width: '64px',
        height: '64px'
        }}
    />
    </>
  )
}

export default App