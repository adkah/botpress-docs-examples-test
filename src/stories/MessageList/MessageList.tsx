import { MessageList, Container, useWebchat, type RichBlockMessage } from '@botpress/webchat'

function App() {
    const { client, isTyping } = useWebchat({
        clientId: '$CLIENT_ID$', // Insert your Client ID here
    })

    const config = {
    botName: 'Bot Name',
    botAvatar: 'https://cdn.botpress.cloud/bot-avatar.png',
    botDescription: 'This is a description of your bot.',
  }

  const messages: RichBlockMessage[] = [
    {
      id: '1',
      timestamp: new Date(),
      direction: 'incoming',
      sender: {
        name: 'Bot Name',
        avatar: 'https://cdn.botpress.cloud/bot-avatar.png'
      },
      block: {
        type: 'bubble',
        block: {
          type: 'text',
          text: 'Hello! How can I help you today?'
        }
      }
    },
    {
      id: '2',
      timestamp: new Date(),
      direction: 'outgoing',
      sender: {
        name: 'You'
      },
      block: {
        type: 'bubble',
        block: {
          type: 'text',
          text: 'I need help with my order.'
        }
      }
    },
    {
      id: '3',
      timestamp: new Date(),
      direction: 'incoming',
      sender: {
        name: 'Bot Name',
        avatar: 'https://cdn.botpress.cloud/bot-avatar.png'
      },
      block: {
        type: 'bubble',
        block: {
          type: 'text',
          text: 'I can help with that! Do you have your order number handy?'
        }
      }
    },
  ]

  return (
    <Container
    style={{
        width: '400px',
        height: '95%',
        display: 'flex',
        position: 'fixed',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)'
    }}
    >
    <MessageList
      botAvatar={config.botAvatar}
      botName={config.botName}
      botDescription={config.botDescription}
      isTyping={isTyping}
      showMarquee={true}
      messages={messages}
      sendMessage={client?.sendMessage}
    />
    </Container>
  )
}

export default App