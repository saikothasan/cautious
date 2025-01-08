'use client'

import React, { useState, useRef, useEffect } from 'react'
import { useTerminal } from '../hooks/useTerminal'
import { TerminalLine } from './TerminalLine'
import { TerminalHeader } from './TerminalHeader'
import { TypeWriter } from './TypeWriter'
import { GlitchText } from './GlitchText'

const commands = [
  {
    name: 'help',
    description: 'Show available commands',
    action: () => (
      <div>
        <GlitchText>Available commands:</GlitchText>
        <ul className="list-disc list-inside text-green-400">
          <li>help - Show this help message</li>
          <li>about - Show information about me</li>
          <li>skills - Show my skills</li>
          <li>experience - Show my work experience</li>
          <li>education - Show my education</li>
          <li>contact - Show my contact information</li>
          <li>projects - Show my projects</li>
          <li>clear - Clear the terminal</li>
          <li>date - Show current date and time</li>
          <li>whoami - Show current user</li>
          <li>hack - Initiate a fake hacking sequence</li>
        </ul>
      </div>
    )
  },
  {
    name: 'about',
    description: 'Show information about me',
    action: () => (
      <div>
        <GlitchText>About Me</GlitchText>
        <p className="text-green-400">I am a shadow in the digital realm, a master of code and cryptography.</p>
        <p className="text-green-400">My true identity is shrouded in mystery, known only by my digital footprint.</p>
        <p className="text-green-400">I navigate the darkest corners of the web, always one step ahead of those who seek to unmask me.</p>
      </div>
    )
  },
  {
    name: 'skills',
    description: 'Show my skills',
    action: () => (
      <div>
        <GlitchText>Skills</GlitchText>
        <ul className="list-disc list-inside text-green-400">
          <li>Advanced Encryption Algorithms</li>
          <li>Network Penetration</li>
          <li>Steganography</li>
          <li>Blockchain Technology</li>
          <li>Dark Web Architecture</li>
          <li>Anonymous Communication Protocols</li>
          <li>Zero-Day Exploit Development</li>
          <li>Digital Forensics Countermeasures</li>
        </ul>
      </div>
    )
  },
  {
    name: 'experience',
    description: 'Show my work experience',
    action: () => (
      <div>
        <GlitchText>Work Experience</GlitchText>
        <h3 className="text-red-500">Shadow Operative - DarkNet Collective (20XX-Present)</h3>
        <ul className="list-disc list-inside text-green-400">
          <li>Orchestrated covert digital operations across multiple dark web networks</li>
          <li>Developed undetectable malware for high-profile targets</li>
          <li>Managed a network of anonymous informants and data brokers</li>
        </ul>
        <h3 className="text-red-500 mt-2">Cyber Phantom - Ghost Protocol Initiative (20XX-20XX)</h3>
        <ul className="list-disc list-inside text-green-400">
          <li>Conducted high-stakes digital espionage missions</li>
          <li>Engineered custom encryption protocols for secure communication</li>
          <li>Evaded detection from international cybersecurity agencies</li>
        </ul>
      </div>
    )
  },
  {
    name: 'education',
    description: 'Show my education',
    action: () => (
      <div>
        <GlitchText>Education</GlitchText>
        <h3 className="text-red-500">Master of Shadows</h3>
        <p className="text-green-400">Dark Web Academy (Classified)</p>
        <ul className="list-disc list-inside text-green-400">
          <li>Thesis: "Quantum Encryption in Anonymous Networks"</li>
        </ul>
        <h3 className="text-red-500 mt-2">Bachelor of Deception</h3>
        <p className="text-green-400">Clandestine University (Redacted)</p>
        <ul className="list-disc list-inside text-green-400">
          <li>Specialized in Advanced Cryptography and Network Infiltration</li>
        </ul>
      </div>
    )
  },
  {
    name: 'contact',
    description: 'Show my contact information',
    action: () => (
      <div>
        <GlitchText>Contact Information</GlitchText>
        <ul className="list-disc list-inside text-green-400">
          <li>Encrypted Email: shadow@d4rkw3b.onion</li>
          <li>Secret Forum: xJ9f2mK.onion/user/phantom</li>
          <li>PGP Key: 0xDEADBEEF</li>
          <li>Tor Hidden Service: xxxxxxxxxxxxxxxx.onion</li>
        </ul>
      </div>
    )
  },
  {
    name: 'projects',
    description: 'Show my projects',
    action: () => (
      <div>
        <GlitchText>Classified Projects</GlitchText>
        <h3 className="text-red-500">Project Nightshade (20XX)</h3>
        <p className="text-green-400">An undetectable, self-replicating AI system designed to infiltrate and map the entire dark web.</p>
        <h3 className="text-red-500 mt-2">Operation Ghost Protocol (20XX)</h3>
        <p className="text-green-400">A decentralized, quantum-resistant cryptocurrency designed for anonymous transactions.</p>
        <h3 className="text-red-500 mt-2">Phantom Gateway (20XX)</h3>
        <p className="text-green-400">A next-generation Tor network with enhanced security and unparalleled anonymity features.</p>
      </div>
    )
  },
  {
    name: 'date',
    description: 'Show current date and time',
    action: () => new Date().toLocaleString('en-US', { hour12: false })
  },
  {
    name: 'whoami',
    description: 'Show current user',
    action: () => 'anonymous'
  },
  {
    name: 'hack',
    description: 'Initiate a fake hacking sequence',
    action: () => <HackingSimulation />
  }
]

function HackingSimulation() {
  const [stage, setStage] = useState(0)
  const stages = [
    "Initiating hack sequence...",
    "Bypassing firewall...",
    "Cracking encryption...",
    "Accessing mainframe...",
    "Downloading classified data...",
    "Covering tracks...",
    "Hack complete. Exfiltration successful."
  ]

  useEffect(() => {
    if (stage < stages.length - 1) {
      const timer = setTimeout(() => setStage(stage + 1), 1500)
      return () => clearTimeout(timer)
    }
  }, [stage])

  return (
    <div>
      {stages.slice(0, stage + 1).map((text, index) => (
        <div key={index} className="text-green-400">
          <TypeWriter text={text} delay={30} />
        </div>
      ))}
    </div>
  )
}

export function Terminal() {
  const { history, executeCommand, navigateHistory } = useTerminal(commands)
  const [input, setInput] = useState('')
  const inputRef = useRef<HTMLInputElement>(null)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (input.trim()) {
      executeCommand(input)
      setInput('')
    }
  }

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'ArrowUp' || e.key === 'ArrowDown') {
      e.preventDefault()
      const newInput = navigateHistory(e.key === 'ArrowUp' ? 'up' : 'down')
      if (newInput !== null) {
        setInput(newInput)
      }
    }
  }

  useEffect(() => {
    inputRef.current?.focus()
  }, [history])

  return (
    <div className="bg-black rounded-lg shadow-lg w-full max-w-3xl mx-auto h-[80vh] flex flex-col overflow-hidden border border-green-500">
      <TerminalHeader />
      <div className="flex-grow overflow-auto p-4 font-mono">
        {history.map((line, index) => (
          <TerminalLine key={index} content={line} />
        ))}
      </div>
      <form onSubmit={handleSubmit} className="flex p-2 bg-black border-t border-green-500">
        <span className="text-green-500 mr-2">$</span>
        <input
          ref={inputRef}
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={handleKeyDown}
          className="flex-grow bg-transparent outline-none text-green-500 font-mono"
          aria-label="Terminal input"
        />
      </form>
    </div>
  )
}

