import { FC } from 'react'
import { propClassName } from '../../types'

const UpArrow: FC<propClassName> = ({ className }) => {
  return (
    <svg
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={2}
      className={className}
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M5 15l7-7 7 7" />
    </svg>
  )
}

export default UpArrow
