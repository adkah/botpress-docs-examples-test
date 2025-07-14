import { Composer, useWebchat } from '@botpress/webchat'

function App() {
  const { client, clientState } = useWebchat({ clientId: '$CLIENT_ID$' }) // Insert your Client ID here

  return (
    <Composer
      disableComposer={false}
      isReadOnly={false}
      allowFileUpload={true}
      connected={clientState !== 'disconnected'}
      sendMessage={client?.sendMessage}
      uploadFile={client?.uploadFile}
      composerPlaceholder="Type a message..."
    />
  )
}

export default App