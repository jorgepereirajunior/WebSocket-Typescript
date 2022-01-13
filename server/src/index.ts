import { SetupServer } from './server'

(async () => {
  const server = new SetupServer()

  server.init()
  await server.start()
})()