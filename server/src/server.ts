import { Server } from '@overnightjs/core'
import express from 'express'

import './websocket'

import { serverHttp } from './http'

export class SetupServer extends Server {
  constructor() {
    super()
  }

  public init(): void {
    this.setupExpress()
  }
  
  private setupExpress(): void {
    this.app.use(express.json())
  }

  public async start(): Promise<void> {
    serverHttp.listen(process.env.PORT || 4000, () => {
      console.log('Server is running on port 4000')
    })
  }
}