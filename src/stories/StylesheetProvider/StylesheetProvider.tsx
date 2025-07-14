import { StylesheetProvider, Webchat, Fab } from '@botpress/webchat'
import { useState } from 'react'

const config = {
  color: '#FF0000',
  fontFamily: 'rubik',
  radius: 1,
  variant: 'soft',
  themeMode: 'dark',
  headerVariant: 'soft'
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
      />
      <Webchat
        clientId="$CLIENT_ID$" // Your client ID here
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