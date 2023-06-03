'use client'
import { FormEvent, useState } from 'react'
import { toast } from 'react-hot-toast'

function NameInput({ setName }: any) {
  const [prompt, setPrompt] = useState('')

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (prompt == '') {
      toast.error('Name field empty')
    } else {
      setName(prompt)
      setPrompt('')
    }
  }

  return (
    <div className='border rounded-lg text-sm w-[400px]'>
      <form onSubmit={handleSubmit} className='p-5 space-x-5 flex'>
        <input
          className='bg-transparent flex-1 focus:outline-none '
          type='text'
          value={prompt}
          placeholder='Update name here...'
          onChange={(e) => setPrompt(e.target.value)}
        />
        <button
          type='submit'
          // disabled={!prompt}
          className='bg-[#11A37F] hover:opacity-50 text-white font-bold px-4 py-2 rounded
      disabled:cursor-not-allowed disabled:bg-gray-300'
        >
          Update
        </button>
      </form>
    </div>
  )
}

export default NameInput
