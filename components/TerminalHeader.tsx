import React from 'react'
import { GlitchText } from './GlitchText'

export function TerminalHeader() {
  return (
    <div className="bg-black p-2 rounded-t-lg flex items-center border-b border-green-500">
      <div className="flex space-x-2">
        <div className="w-3 h-3 rounded-full bg-red-500"></div>
        <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
        <div className="w-3 h-3 rounded-full bg-green-500"></div>
      </div>
      <div className="flex-grow text-center text-green-500 text-sm font-mono">
        <GlitchText>anonymous@darkweb:~</GlitchText>
      </div>
    </div>
  )
}

