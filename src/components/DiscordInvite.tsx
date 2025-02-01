import React from 'react'

export default function DiscordInvite() {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6">
      <h2 className="text-2xl font-bold mb-4">Join our Discord Community</h2>
      <p className="text-gray-600 dark:text-gray-300 mb-6">
        Connect with fellow Reform UK supporters in Erdington. Share ideas, discuss local issues, and get involved in our community.
      </p>
      <a
        href="https://discord.gg/your-invite-link"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block bg-reform-primary text-white px-6 py-3 rounded-lg font-semibold hover:bg-reform-primary/90 transition-colors"
      >
        Join Discord Server
      </a>
    </div>
  )
}
