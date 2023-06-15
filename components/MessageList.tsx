import styles from '../styles/app.module.sass'
import { useMessages } from '@/hooks/useMessages'
import { useName } from '@/hooks/useName'

function MessageList() {
  const { messages } = useMessages()
  const { name } = useName()

  return (
    <div className={styles.messages}>
      {messages.map((msg: string) => {
        return (
          <div>
            {name == '' ? '(No name)' : name}: {msg}
          </div>
        )
      })}
    </div>
  )
}

export default MessageList
