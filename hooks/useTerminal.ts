import { useState, useCallback } from 'react'

type Command = {
  name: string
  description: string
  action: () => string | JSX.Element
}

export function useTerminal(commands: Command[]) {
  const [history, setHistory] = useState<(string | JSX.Element)[]>(['Welcome to my terminal profile!', 'Type "help" to see available commands.'])
  const [commandHistory, setCommandHistory] = useState<string[]>([])
  const [historyIndex, setHistoryIndex] = useState(-1)

  const executeCommand = useCallback((input: string) => {
    const trimmedInput = input.trim().toLowerCase()
    const command = commands.find(cmd => cmd.name === trimmedInput)
    if (command) {
      setHistory(prev => [...prev, `$ ${input}`, command.action()])
    } else if (trimmedInput === 'clear') {
      setHistory([])
    } else {
      setHistory(prev => [...prev, `$ ${input}`, `Command not found: ${input}. Type "help" for available commands.`])
    }
    setCommandHistory(prev => [...prev, input])
    setHistoryIndex(-1)
  }, [commands])

  const navigateHistory = useCallback((direction: 'up' | 'down') => {
    if (direction === 'up' && historyIndex < commandHistory.length - 1) {
      setHistoryIndex(prev => prev + 1)
      return commandHistory[commandHistory.length - 1 - historyIndex - 1]
    } else if (direction === 'down' && historyIndex > -1) {
      setHistoryIndex(prev => prev - 1)
      return historyIndex === 0 ? '' : commandHistory[commandHistory.length - 1 - historyIndex + 1]
    }
    return null
  }, [commandHistory, historyIndex])

  return { history, executeCommand } as const
}

