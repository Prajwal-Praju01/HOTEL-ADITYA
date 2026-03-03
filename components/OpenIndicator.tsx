'use client'

import { useState, useEffect } from 'react'
import { isRestaurantOpen } from '@/lib/utils'

interface OpenIndicatorProps {
  showLabel?: boolean
}

export default function OpenIndicator({ showLabel = false }: OpenIndicatorProps) {
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    // Check immediately
    setIsOpen(isRestaurantOpen())

    // Check every minute
    const interval = setInterval(() => {
      setIsOpen(isRestaurantOpen())
    }, 60000)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="flex items-center gap-2">
      <span
        className={`inline-block w-2.5 h-2.5 rounded-full ${
          isOpen ? 'bg-green-500 animate-pulse' : 'bg-red-500'
        }`}
      />
      {showLabel && (
        <span className={`text-sm font-medium ${isOpen ? 'text-green-600' : 'text-red-600'}`}>
          {isOpen ? 'Open Now' : 'Closed'}
        </span>
      )}
      {!showLabel && (
        <span className="text-white/90 text-sm font-medium">{isOpen ? 'Open Now' : 'Closed'}</span>
      )}
    </div>
  )
}
