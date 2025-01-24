'use client'

import Image from "next/image";
import { useState } from 'react'
import { Button } from './components/ui/Button'
import { BodyText } from './components/ui/BodyText'
import { Modal } from './components/ui/Modal'

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false)

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-8">
      <main className="max-w-2xl w-full text-center space-y-8">
        {/* Logo */}
        <div className="w-48 h-48 mx-auto relative">
          <Image
            src="/logo.svg"
            alt="Flag Game Logo"
            fill
            priority
            className="object-contain"
          />
        </div>

        {/* Headline */}
        <h1 className="text-4xl font-bold text-gray-900 sm:text-5xl">
          Test Your Flag Knowledge!
        </h1>

        {/* Description */}
        <BodyText size="lg" className="text-gray-600">
          Challenge yourself with our interactive flag quiz game. Learn about countries
          and their flags while having fun!
        </BodyText>

        {/* Practice Button */}
        <Button
          size="lg"
          onClick={() => setIsModalOpen(true)}
          className="mt-8"
        >
          Start Practice
        </Button>
      </main>

      {/* Game Explanation Modal */}
      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      >
        <div className="space-y-6 pt-6">
          <h2 className="text-2xl font-bold text-gray-900">How to Play</h2>
          <BodyText>
            In this game, you&apos;ll be shown different flags from around the world.
            Your task is to identify the correct country for each flag. The faster
            you answer, the more points you&apos;ll earn!
          </BodyText>
          <div className="space-y-4">
            <h3 className="font-semibold text-gray-900">Game Rules:</h3>
            <ul className="list-disc pl-5 space-y-2">
              <li>You&apos;ll have multiple options for each flag</li>
              <li>Quick answers earn bonus points</li>
              <li>Try to achieve the highest score possible</li>
            </ul>
          </div>
          <div className="flex justify-end gap-4 mt-8">
            <Button
              variant="secondary"
              onClick={() => setIsModalOpen(false)}
            >
              Cancel
            </Button>
            <Button onClick={() => {/* Add game start logic */}}>
              Launch Game
            </Button>
          </div>
        </div>
      </Modal>
    </div>
  );
}
