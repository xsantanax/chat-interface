'use client'
import { useState } from 'react'
import ChatInput from '@/components/ChatInput'
import NameInput from '@/components/NameInput'
import { Toaster } from 'react-hot-toast'
import styles from '../styles/app.module.sass'

export default function Home() {
  const [name, setName] = useState('')
  const [messages, setMessages] = useState([])

  return (
    <main className={styles.container}>
      <Toaster position='top-right' />

      <div>Your name is: {name == '' ? 'not informed' : name}</div>
      <NameInput setName={setName} />

      <div style={{ marginTop: 12 }}>Here you can type messages</div>
      <ChatInput messages={messages} setMessages={setMessages} />

      <div className={styles.messages}>
        {messages.map((msg: string) => {
          return (
            <div>
              {name == '' ? '(No name)' : name}: {msg}
            </div>
          )
        })}
      </div>
    </main>
  )
}
