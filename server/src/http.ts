import express from 'express'
import http from 'http'
import { Server } from 'socket.io'
import config from 'config'

const corsOrigin = config.get<string>('corsOrigin')

const app = express()
const serverHttp = http.createServer(app)

const sockets =  new Server(serverHttp, {
  cors: {
    origin: corsOrigin,
    credentials: true
  }
})

export { serverHttp, sockets }