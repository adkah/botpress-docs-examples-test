import { Composer, Container, useWebchat } from '@botpress/webchat'

function App() {
  const { client, clientState } = useWebchat({ clientId: '$CLIENT_ID$' }) // Insert your Client ID here

  return (
    <Container
      connected={clientState !== 'disconnected'}
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
    <Composer
      disableComposer={false}
      isReadOnly={false}
      connected={clientState !== 'disconnected'}
      sendMessage={client?.sendMessage}
      uploadFile={client?.uploadFile}
      composerPlaceholder="Type a message..."
      footer={'[⚡️ by Botpress](https://botpress.com/?from=webchat)'}
      style={{
        marginTop: 'auto',
      }}
    />
    </Container>
  )
}

export default App