import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

const variants = {
  text: {
    hidden: { opacity: 0, y: 24 },
    visible: (stagger) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.7,
        ease: [0.16, 1, 0.3, 1],
        delay: stagger,
      },
    }),
  },
  image: {
    hidden: { opacity: 0, scale: 0.96 },
    visible: (stagger) => ({
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: [0.16, 1, 0.3, 1],
        delay: stagger,
      },
    }),
  },
  card: {
    hidden: { opacity: 0, y: 32, scale: 0.98 },
    visible: (stagger) => ({
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: [0.16, 1, 0.3, 1],
        delay: stagger,
      },
    }),
  },
}

const ScrollReveal = ({
  children,
  type = 'text',
  stagger = 0,
  className = '',
}) => {
  const ref = useRef(null)
  const isInView = useInView(ref, {
    once: true,
    amount: 0.15,
    margin: '0px 0px -10% 0px',
  })

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isInView ? 'visible' : 'hidden'}
      variants={variants[type]}
      custom={stagger}
      className={className}
    >
      {children}
    </motion.div>
  )
}

export default ScrollReveal
