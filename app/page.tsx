'use client'
import styles from '@/styles/app.module.sass'
import MessageInput from '@/components/MessageInput'
import NameInput from '@/components/NameInput'
import MessageList from '@/components/MessageList'
import { MessagesProvider } from '@/hooks/useMessages'
import { NameProvider } from '@/hooks/useName'
import { Toaster } from 'react-hot-toast'

export default function Home() {
  return (
    <main className={styles.container}>
      <Toaster position='top-right' />
      <MessagesProvider>
        <NameProvider>
          <div style={{ margin: 32, width: 400, textAlign: 'center' }}>
            This is a simple chat interface where you can set your name and send
            messages, which will be displayed on the screen.
          </div>
          <NameInput />
          <MessageInput />
          <MessageList />
        </NameProvider>
      </MessagesProvider>
    </main>
  )
}
