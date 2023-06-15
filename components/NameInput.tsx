'use client'
import { FormEvent, useState } from 'react'
import { toast } from 'react-hot-toast'
import styles from '../styles/input.module.sass'

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
    <form onSubmit={handleSubmit} className={styles.form}>
      <input
        className={styles.input}
        type='text'
        value={prompt}
        placeholder='Update name here...'
        onChange={(e) => setPrompt(e.target.value)}
      />
      <button type='submit' className={styles.button}>
        Update
      </button>
    </form>
  )
}

export default NameInput
