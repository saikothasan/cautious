import React from 'react'

type ProfileSectionProps = {
  title: string
  content: string[]
}

export function ProfileSection({ title, content }: ProfileSectionProps) {
  return (
    <div className="mb-4">
      <h2 className="text-green-400 font-bold">{title}</h2>
      {content.map((line, index) => (
        <p key={index} className="text-gray-300">{line}</p>
      ))}
    </div>
  )
}

