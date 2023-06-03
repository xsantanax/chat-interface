'use client'
import { PaperAirplaneIcon } from '@heroicons/react/24/solid'
import { FormEvent, useState } from 'react'
import { toast } from 'react-hot-toast'

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
    <div className='border rounded-lg text-sm w-[400px]'>
      <form onSubmit={handleSubmit} className='p-5 space-x-5 flex'>
        <input
          className='bg-transparent flex-1 focus:outline-none'
          type='text'
          value={prompt}
          placeholder='Type your message here...'
          onChange={(e) => setPrompt(e.target.value)}
        />
        <button
          type='submit'
          // disabled={!prompt}
          className='bg-[#11A37F] hover:opacity-50 text-white font-bold px-4 py-2 rounded
          disabled:cursor-not-allowed disabled:bg-gray-300'
        >
          <PaperAirplaneIcon className='h-4 w-4 -rotate-45' />
        </button>
      </form>
    </div>
  )
}

export default ChatInput
