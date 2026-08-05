import mongoose from 'mongoose'

const readyStateLabels: Record<number, string> = {
  0: 'disconnected',
  1: 'connected',
  2: 'connecting',
  3: 'disconnecting'
}

export default defineEventHandler(() => {
  const readyState = mongoose.connection.readyState

  return {
    ok: true,
    app: 'WordPanda',
    timestamp: new Date().toISOString(),
    mongo: {
      configured: Boolean(process.env.MONGODB_URI),
      readyState,
      state: readyStateLabels[readyState] ?? 'unknown',
      database: mongoose.connection.name || null,
      host: mongoose.connection.host || null
    }
  }
})
