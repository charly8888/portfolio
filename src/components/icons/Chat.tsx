import { FC } from 'react'
import { propClassName } from '../../types'

const Chat: FC<propClassName> = ({ className }) => {
  return (
    <svg viewBox="0 0 20 20" fill="currentColor" className={className}>
      <path
        fillRule="evenodd"
        d="M18 5v8a2 2 0 01-2 2h-5l-5 4v-4H4a2 2 0 01-2-2V5a2 2 0 012-2h12a2 2 0 012 2zM7 8H5v2h2V8zm2 0h2v2H9V8zm6 0h-2v2h2V8z"
        fill="#0093c4"
      />
    </svg>
  )
}

export default Chat
