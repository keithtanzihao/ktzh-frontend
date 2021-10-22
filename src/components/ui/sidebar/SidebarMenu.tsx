import { motion, SVGMotionProps } from 'framer-motion'

import styles from 'sass/main.module.scss'

interface Props {
  isOpen?: boolean
  width?: number
  height?: number
  color?: string
  strokeWidth?: number
  lineProps?: any
  onClick(): void
}

export default function SidebarMenu({
  isOpen = false,
  width = 48,
  height = 48,
  strokeWidth = 0.5,
  color = '#000401',
  ...props
}: Props) {
  const unitHeight = 8
  const unitWidth = (unitHeight * (width as number)) / (height as number)

  const variant = isOpen ? 'opened' : 'closed'
  const top = {
    closed: { 
      strokeDashoffset: 0
    },
    opened: { 
      strokeDashoffset: 1,
      transition: {
        duration: 2,
      }
    }
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
  }
  

  return (
    <div className={styles['sb-menu-ctn']}> 
      <motion.svg
        viewBox={`0 0 ${unitWidth} ${unitHeight}`}
        overflow='visible'
        width={width}
        height={height}
        {...props}
        >
          <motion.line x1='0' x2={unitWidth} y1='0' y2='0' pathLength="100" variants={top} {...props.lineProps}/>
          {/* <motion.line x1='0' x2={unitWidth} y1='4' y2='4' variants={bot} {...props.lineProps}/> */}
      </motion.svg>
    </div>
    
  )
}
