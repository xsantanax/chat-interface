'use client'
import styles from '@/styles/app.module.sass'
import ChatInput from '@/components/ChatInput'
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
          <NameInput />
          <ChatInput />
          <MessageList />
        </NameProvider>
      </MessagesProvider>
    </main>
  )
}
