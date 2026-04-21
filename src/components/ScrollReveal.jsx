import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

const ScrollReveal = ({ 
  children, 
  type = 'text',
  stagger = 0,
  className = '' 
}) => {
  const ref = useRef(null)
  const isInView = useInView(ref, { 
    once: false,
    amount: 0.2,
    margin: '0px 0px -20% 0px'
  })

  const variants = {
    text: {
      hidden: { 
        opacity: 0, 
        y: 20 
      },
      visible: { 
        opacity: 1, 
        y: 0,
        transition: {
          duration: 0.6,
          ease: [0.16, 1, 0.3, 1],
          delay: stagger
        }
      },
      exit: {
        opacity: 0.3,
        transition: {
          duration: 0.4,
          ease: [0.4, 0, 1, 1]
        }
      }
    },
    image: {
      hidden: { 
        opacity: 0, 
        scale: 0.95 
      },
      visible: { 
        opacity: 1, 
        scale: 1,
        transition: {
          duration: 0.7,
          ease: [0.16, 1, 0.3, 1],
          delay: stagger
        }
      },
      exit: {
        opacity: 0.3,
        transition: {
          duration: 0.4,
          ease: [0.4, 0, 1, 1]
        }
      }
    },
    card: {
      hidden: { 
        opacity: 0, 
        y: 30,
        scale: 0.98
      },
      visible: { 
        opacity: 1, 
        y: 0,
        scale: 1,
        transition: {
          duration: 0.7,
          ease: [0.16, 1, 0.3, 1],
          delay: stagger
        }
      },
      exit: {
        opacity: 0.3,
        transition: {
          duration: 0.4,
          ease: [0.4, 0, 1, 1]
        }
      }
    }
  }

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isInView ? "visible" : "exit"}
      variants={variants[type]}
      className={className}
    >
      {children}
    </motion.div>
  )
}

export default ScrollReveal
