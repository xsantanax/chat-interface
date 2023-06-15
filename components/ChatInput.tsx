'use client'
import { PaperAirplaneIcon } from '@heroicons/react/24/solid'
import { FormEvent, useState } from 'react'
import { toast } from 'react-hot-toast'
import styles from '../styles/input.module.sass'

function ChatInput({ messages, setMessages }: any) {
  const [prompt, setPrompt] = useState('')

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (prompt == '') {
      toast.error('Message field empty')
    } else {
      setMessages([...messages, prompt])
      setPrompt('')
    }
  }

  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      <input
        className={styles.input}
        type='text'
        value={prompt}
        placeholder='Type your message here...'
        onChange={(e) => setPrompt(e.target.value)}
      />
      <button type='submit' className={styles.button}>
        <PaperAirplaneIcon className={styles.icon} />
      </button>
    </form>
  )
}

export default ChatInput
