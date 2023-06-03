'use client'
import { useState } from 'react'
import ChatInput from '@/components/ChatInput'
import NameInput from '@/components/NameInput'
import { Toaster } from 'react-hot-toast'

export default function Home() {
  const [name, setName] = useState('')
  const [messages, setMessages] = useState([])

  return (
    <main className='bg-white flex min-h-screen flex-col items-center p-16 gap-10 '>
      <Toaster position='top-right' />
      <div>Your name is: {name == '' ? 'not informed' : name}</div>
      <NameInput setName={setName} />

      <div className='mt-12'>Here you can type messages</div>
      <ChatInput messages={messages} setMessages={setMessages} />

      <div className='flex flex-col gap-4 mt-6'>
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
