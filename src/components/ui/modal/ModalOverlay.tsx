import React from 'react'
import ReactDOM from 'react-dom'

import { motion } from 'framer-motion'

import ModalMenu from './ModalMenu'

const modalRoot = document.querySelector('#overlay') as HTMLElement

interface Props {
  isOpen?: boolean
}

export default function ModalOverlay({ isOpen }: Props) {
  return (
    <React.Fragment>
      {ReactDOM.createPortal(
        <ModalMenu/>, document.getElementById('overlays')! )}
    </React.Fragment>
  )
}
