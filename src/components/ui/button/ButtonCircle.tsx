import styles from 'sass/main.module.scss'

interface Props {
  width?: number
  height?: number
  color?: string
  strokeWidth?: number
}

export default function ButtonCircle({
  width = 36,
  height = 36,
  strokeWidth = 1,
  color = '#000401',
}: Props) {
  const unitHeight = 8
  const unitWidth = (unitHeight * (width as number)) / (height as number)

  return (
    <div className={styles['btn-cir']}>
      <svg className={styles['btn-cir__svg']}
        viewBox={`0 0 ${unitWidth} ${unitHeight}`}
        width={width}
        height={height}
        stroke={color}
        strokeWidth={strokeWidth}
      >
        <line
          className={styles['btn-cir__line--top']}
          x1="0"
          x2={unitWidth}
          y1="2"
          y2="2"
        />
        <line
          className={styles['btn-cir__line--btm']}
          x1="0"
          x2={unitWidth}
          y1="6"
          y2="6"
        />
      </svg>
    </div>
  )
}
