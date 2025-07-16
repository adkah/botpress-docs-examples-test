import { Fab, Webchat } from '@botpress/webchat'

const configuration = {
  botName: 'Bot',
  feedbackEnabled: false, 
  footer: '[⚡️ by Botpress](https://botpress.com/?from=webchat)',
  radius: '4'
}

function App() {
    return (
        <Webchat
            clientId="c710a569-31d9-4efd-95f7-1cdd16fe7f95"
            configuration={configuration}
            style={{
                width: '400px',
                height: '500px',
                position: 'fixed',
                // top: '50%',
                left: '50%',
                transform: 'translate(-50%, 0%)',
                display: 'flex'
            }}
        />
    )
}

export default App