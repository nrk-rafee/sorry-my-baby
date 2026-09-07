"use client"

import { useState } from "react"
import { AnimatePresence, motion } from "framer-motion"

import StarryBackground from "@/components/StarryBackground"
import OpeningPage from "@/components/OpeningPage"
import DiaryPage from "@/components/DiaryPage"
import ApologyPage from "@/components/ApologyPage"
import LetterPage from "@/components/LetterPage"
import HugPage from "@/components/HugPage"
import GiftPage from "@/components/GiftPage"
import MusicPlayer from "@/components/MusicPlayer"
import GardenPage from "@/components/GardenPage"

const pages = {
  opening: OpeningPage,
  diary: DiaryPage,
  apology: ApologyPage,
  letter: LetterPage,
  hug: HugPage,
  gift: GiftPage,
  garden: GardenPage,
}

export default function Home() {
  const [currentPage, setCurrentPage] = useState("opening")

  const CurrentPage = pages[currentPage]

  const isGarden = currentPage === "garden"

  return (
    <main className="min-h-screen w-full overflow-hidden relative">
      {!isGarden && <StarryBackground />}

      <AnimatePresence mode="wait">
        <motion.div
          key={currentPage}
          className="min-h-screen w-full relative z-10"
          initial={{
            opacity: 0,
            y: 20,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          exit={{
            opacity: 0,
            y: -20,
          }}
          transition={{
            duration: 0.45,
            ease: "easeInOut",
          }}
        >
          <CurrentPage
            setCurrentPage={setCurrentPage}
          />
        </motion.div>
      </AnimatePresence>

      {!isGarden && <MusicPlayer />}
    </main>
  )
}
