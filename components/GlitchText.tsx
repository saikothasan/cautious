'use client'

import React from 'react'

type GlitchTextProps = {
  children: React.ReactNode
}

export function GlitchText({ children }: GlitchTextProps) {
  return (
    <span className="glitch relative inline-block">
      <span className="absolute top-0 left-0" aria-hidden="true">{children}</span>
      {children}
      <span className="absolute top-0 left-0" aria-hidden="true">{children}</span>
      <style jsx>{`
        .glitch {
          color: #00ff00;
          position: relative;
          animation: glitch 3s infinite;
        }
        .glitch > span:first-child {
          clip-path: polygon(0 0, 100% 0, 100% 45%, 0 45%);
          transform: translate(-0.025em, -0.0125em);
          opacity: 0.8;
        }
        .glitch > span:last-child {
          clip-path: polygon(0 80%, 100% 20%, 100% 100%, 0 100%);
          transform: translate(0.025em, 0.025em);
          opacity: 0.8;
        }
        @keyframes glitch {
          0% {
            text-shadow: 0.05em 0 0 #00fffc, -0.05em -0.025em 0 #fc00ff,
              0.025em 0.05em 0 #fffc00;
          }
          14% {
            text-shadow: 0.05em 0 0 #00fffc, -0.05em -0.025em 0 #fc00ff,
              0.025em 0.05em 0 #fffc00;
          }
          15% {
            text-shadow: -0.05em -0.025em 0 #00fffc, 0.025em 0.025em 0 #fc00ff,
              -0.05em -0.05em 0 #fffc00;
          }
          49% {
            text-shadow: -0.05em -0.025em 0 #00fffc, 0.025em 0.025em 0 #fc00ff,
              -0.05em -0.05em 0 #fffc00;
          }
          50% {
            text-shadow: 0.025em 0.05em 0 #00fffc, 0.05em 0 0 #fc00ff,
              0 -0.05em 0 #fffc00;
          }
          99% {
            text-shadow: 0.025em 0.05em 0 #00fffc, 0.05em 0 0 #fc00ff,
              0 -0.05em 0 #fffc00;
          }
          100% {
            text-shadow: -0.025em 0 0 #00fffc, -0.025em -0.025em 0 #fc00ff,
              -0.025em -0.05em 0 #fffc00;
          }
        }
      `}</style>
    </span>
  )
}

