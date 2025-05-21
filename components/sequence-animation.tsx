"use client"

import { useEffect, useRef } from "react"

interface SequenceAnimationProps {
  size?: number
}

export function SequenceAnimation({ size = 80 }: SequenceAnimationProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    const elements = ["🐟", "🦐", "🐚", "🌊"]
    let animationFrame: number
    let position = 0

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      // Draw sequence elements
      for (let i = 0; i < 10; i++) {
        const y = ((i * size) / 3 + position) % (size * 3)
        const elementIndex = Math.floor((i + Math.floor(position / 20)) % elements.length)

        ctx.font = `${size / 2}px Arial`
        ctx.textAlign = "center"
        ctx.textBaseline = "middle"
        ctx.fillText(elements[elementIndex], canvas.width / 2, y)
      }

      position += 10
      if (position > 1000) position = 0

      animationFrame = requestAnimationFrame(draw)
    }

    draw()

    return () => {
      cancelAnimationFrame(animationFrame)
    }
  }, [size])

  return <canvas ref={canvasRef} width={size} height={size} style={{ width: size, height: size }} />
}
