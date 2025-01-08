import React from 'react'

type TerminalLineProps = {
  content: string | JSX.Element
}

export function TerminalLine({ content }: TerminalLineProps) {
  if (typeof content === 'string') {
    return (
      <div className="font-mono">
        {content.startsWith('$') ? (
          <span className="text-green-400">{content}</span>
        ) : (
          <span className="text-gray-300">{content}</span>
        )}
      </div>
    )
  }
  return <div className="font-mono text-gray-300">{content}</div>
}

