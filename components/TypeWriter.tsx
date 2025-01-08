'use client'

import React, { useState, useEffect } from 'react'

type TypeWriterProps = {
  text: string
  delay?: number
  onComplete?: () => void
}

export function TypeWriter({ text, delay = 50, onComplete }: TypeWriterProps) {
  const [currentText, setCurrentText] = useState('')
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    if (currentIndex < text.length) {
      const timeout = setTimeout(() => {
        setCurrentText(prevText => prevText + text[currentIndex])
        setCurrentIndex(prevIndex => prevIndex + 1)
      }, delay)

      return () => clearTimeout(timeout)
    } else if (onComplete) {
      onComplete()
    }
  }, [currentIndex, delay, text, onComplete])

  return <span>{currentText}</span>
}

