import { motion, Transition, SVGMotionProps } from 'framer-motion'

import styles from 'sass/main.module.scss'

interface Props {
  isOpen?: boolean
  width?: number
  height?: number
  color?: string
  strokeWidth?: number
  transition?: Transition
  lineProps?: any
  onClick(): void
}

export default function SidebarMenu({
  isOpen = false,
  width = 36,
  height = 36,
  strokeWidth = 0.2,
  color = '#000401',
  ...props
}: Props) {
  const variant = isOpen ? 'opened' : 'closed'
  const top = {
    closed: { rotate: 0, translateY: 0 },
    opened: { rotate: 45, translateY: 2 },
  }
  const mid = {
    closed: { opacity: 1, transition: { duration: 1 } },
    opened: { opacity: 0, transition: { duration: 0.1 } }
  }
  const bot = {
    closed: { rotate: 0, translateY: 0 },
    opened: { rotate: -45, translateY: -2 },
  }
  props.lineProps = {
    stroke: color,
    strokeWidth: strokeWidth,
    initial: 'closed',
    animate: variant,
    transition: props.transition,
    ...props
  }
  const unitHeight = 8
  const unitWidth = (unitHeight * (width as number)) / (height as number)

  return (
    <div className={styles['sb-menu-ctn']}> 
      <motion.svg
        viewBox={`0 0 ${unitWidth} ${unitHeight}`}
        overflow='visible'
        width={width}
        height={height}
        {...props}
        >
          <motion.line x1='0' x2={unitWidth} y1='0' y2='0' variants={top} {...props.lineProps}/>
          <motion.line x1='0' x2={unitWidth} y1='2' y2='2' variants={mid} {...props.lineProps}/>
          <motion.line x1='0' x2={unitWidth} y1='4' y2='4' variants={bot} {...props.lineProps}/>


      </motion.svg>
    </div>
    
  )
}
