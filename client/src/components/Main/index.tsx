
import { useEffect } from 'react'
import socket from 'socket.io-client'

const socketClient = socket('http://localhost:4000')

export function Main(): JSX.Element {
  
  useEffect(() => {
    socketClient.on('connect', () => {
      console.log('conectado')
    })
  }, [])
  
  return (
    <h1>WebSocket with Typescript + Overnightjs/Core</h1>
  )
}