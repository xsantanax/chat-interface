import { FormEvent, useState } from 'react'
import { toast } from 'react-hot-toast'
import styles from '../styles/input.module.sass'
import { useName } from '../hooks/useName'

function NameInput() {
  const [prompt, setPrompt] = useState('')
  const { name, setName } = useName()

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
    <>
      <div className={styles.label}>
        Your name is: {name == '' ? 'not informed' : name}
      </div>

      <form onSubmit={handleSubmit} className={styles.form}>
        <input
          className={styles.input}
          type='text'
          value={prompt}
          placeholder='Update name here...'
          onChange={(e) => setPrompt(e.target.value)}
        />
        <button
          data-testid='updateNameButton'
          type='submit'
          className={styles.button}
        >
          Update
        </button>
      </form>
    </>
  )
}

export default NameInput
