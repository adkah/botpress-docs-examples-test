import { MessageList, useWebchat, Configuration } from '@botpress/webchat'
import { useMemo } from 'react'







// import type { Configuration } from '../../Configuration.tsx'

function App() {
    const { client, messages, isTyping, user } = useWebchat({
        clientId: '$CLIENT_ID$', // Insert your Client ID here
    })

    const config: Configuration = {
    botName: 'Bot Name',
    botAvatar: 'https://picsum.photos/id/80/400',
    botDescription: 'This is a description of your bot.',
  }
    const enrichedMessages = useMemo(
    () =>
        messages.map((message) => {
        const { authorId } = message
        const direction = authorId === user?.userId ? 'outgoing' : 'incoming'
        return {
            ...message,
            direction,
            sender:
            direction === 'outgoing'
                ? { name: user?.name ?? 'You', avatar: user?.pictureUrl }
                : { name: config.botName ?? 'Bot', avatar: config.botAvatar },
        }
        }),
    [config.botAvatar, config.botName, messages, user?.userId, user?.name, user?.pictureUrl]
    )

  return (
    <MessageList
      botAvatar={config.botAvatar}
      botName={config.botName}
      botDescription={config.botDescription}
      isTyping={isTyping}
      headerMessage="Chat History"
      showMarquee={true}
      messages={enrichedMessages}
      sendMessage={client?.sendMessage}
    />
  )
}

export default App