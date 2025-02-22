"use client"

import Image from "next/image"
import Link from "next/link"
import { Cinzel, MedievalSharp } from "next/font/google"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import { Menu, X } from "lucide-react"
import { useState } from "react"

import flameImg from "../public/cta-bg-flames.webp"

const cinzel = Cinzel({ subsets: ["latin"] })
const medievalSharp = MedievalSharp({ weight: "400", subsets: ["latin"] })

const events = [
  {
    name: "Surivive the Shadows",
    description: "The Red Keep Lockdown: Break or Betray",
    icon: "/octopus-got-removebg-preview.png",
    house: "House Greyjoy",
    link: "/events/survive-the-shadows",
    prize: "₹15,000",
    rounds: ["Quiz", "Speak Up to Stay Up", "Real Life Wumpus World"],
  },
  {
    name: "Crick-Blitz",
    description: "The Ultimate Cricket Strategy Battle",
    icon: "/stag-got-removebg-preview.png",
    house: "House Baratheon",
    link: "/events/crick-blitz",
    prize: "₹15,000",
    rounds: ["Group Stage", "Knockout Stage", "Final"],
  },
  {
    name: "BGMI Showdown",
    description: "Battle for the Iron Throne",
    icon: "/arrow-got-removebg-preview.png",
    house: "House Martell",
    link: "/events/bgmi-showdown",
    prize: "₹15,000",
    rounds: ["Qualifiers", "Semi-Finals", "Grand Finals"],
  },
  {
    name: "Reverse Hackathon",
    description: "Web Development in the Seven Kingdoms",
    icon: "/wolf-got-removebg-preview.png",
    house: "House Stark",
    link: "/events/reverse-hackathon",
    prize: "₹15,000",
    rounds: ["Round 1", "Round 2", "Final Round"],
  },
  {
    name: "Data Diggers",
    description: "Mining Knowledge from the Citadel",
    icon: "/eagle-got-removebg-preview.png",
    house: "House Arryn",
    link: "/events/data-diggers",
    prize: "₹15,000",
    rounds: ["Preliminary Round", "Data Wrangling", "Final Presentation"],
  },
  {
    name: "AI Canvas Contest",
    description: "The Digital Art of the Realm",
    icon: "/dragon-got-removebg-preview.png",
    house: "House Targaryen",
    link: "/events/ai-canvas",
    prize: "₹15,000",
    rounds: ["Concept Submission", "AI Generation", "Final Judging"],
  },
  {
    name: "Problemathon",
    description: "The Grand Maester's Challenge",
    icon: "/lion-got-removebg-preview.png",
    house: "House Lannister",
    link: "/events/problemathon",
    prize: "₹15,000",
    rounds: ["Round 1", "Round 2", "Final Round"],
  },
  {
    name: "VirtualVerse",
    description: "The AR/VR Realm Beyond the Wall",
    icon: "/fish-got-removebg-preview.png",
    house: "House Tully",
    link: "/events/virtualverse",
    prize: "₹10,000",
    rounds: ["Idea Pitch", "Development", "Final Showcase"],
  },
]

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <div className={`min-h-screen bg-[#0A0C10] text-[#D5B577] ${cinzel.className} overflow-x-hidden`}>
      {/* Header */}
      <header className="fixed w-full z-50 bg-[#0A0C10]/96 backdrop-blur-sm border-b border-[#D5B577]/20">
        <div className="container mx-auto px-4 py-6 flex justify-between items-center">
          <motion.h1
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            className="text-2xl font-bold flex items-center gap-3"
          >
            <Image
              src='/pccoe-logo-removebg-preview.png'
              alt="PCCOE Logo"
              width={50}
              height={50}
              className="opacity-80"
            />
            <Image
              src='/praxis-logo-removebg-preview.png'
              alt="Praxis Logo"
              width={100}
              height={100}
              className="opacity-80"
            />
          </motion.h1>

          <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X /> : <Menu />}
          </button>

          <nav className="hidden md:block">
            <ul className="flex space-x-6">
              {["Home", "Events", "Register"].map((item) => (
                <motion.li key={item} whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }} >
                  <Link href={`#${item.toLowerCase()}`} className="hover:text-[#FFD700] transition-colors">
                    {item}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </nav>

          {isMenuOpen && (
            <motion.nav
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              className="absolute top-full left-0 w-full bg-[#0A0C10] border-b border-[#D5B577]/20 md:hidden"
            >
              <ul className="flex flex-col p-4">
                {["Home", "Events", "About", "Register"].map((item) => (
                  <li key={item} className="py-2">
                    <Link
                      href={`#${item.toLowerCase()}`}
                      className="hover:text-[#FFD700] transition-colors"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.nav>
          )}
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src="/fire-vid.mp4" type="video/mp4" />
        </video>

        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-[#0A0C10]"></div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="relative z-10 text-center px-4 max-w-4xl mx-auto"
        >
          <div className={medievalSharp.className}>
            <p className="text-sm sm:text-lg mb-2 text-white">
              PCET's <span className="text-[#D5B577]">PIMPRI</span> CHINCHWAD COLLEGE OF ENGINEERING, PUNE
            </p>
            <p className="text-sm sm:text-lg mb-6 text-white">
              Department of <span className="text-[#D5B577]">Information Technology</span> presents
            </p>
            <h1 className="text-5xl sm:text-7xl lg:text-8xl font-bold mb-4 text-white">Praxis'25</h1>
            <p className="text-xl sm:text-2xl mb-8 text-[#D5B577]">
              Where Technology Meets the Seven Kingdoms
            </p>
          </div>
        </motion.div>
      </section>


      {/* Events Section */}
      <section id="events" className="py-16 lg:py-32 relative">
        {/* Flame image as background */}
        <Image
          src={flameImg}
          alt="Events Background"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-[#0A0C10]"></div>
        <div className="relative container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-16 relative z-10"
          >
            <h2 className={`text-4xl lg:text-5xl font-bold mb-4 ${medievalSharp.className}`}>
              Events of the Realm
            </h2>
            <p className="text-[#D5B577]/80 text-lg max-w-2xl mx-auto">
              Eight great houses of technology compete for glory and honor in this grand tournament
            </p>
          </motion.div>

          <div className="space-y-8 max-w-4xl mx-auto relative z-10">
            {events.map((event, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: false }}
                transition={{ delay: index * 0.1 }}
                className="relative group"
              >
                <Link href={event.link}>
                  <div className="p-6 border border-[#D5B577]/20 rounded-lg hover:bg-[#D5B577]/5 transition-all duration-300 flex flex-col md:flex-row gap-6 items-center">
                    <div className="w-24 h-24 relative flex-shrink-0">
                      <Image
                        src={event.icon || "/placeholder.svg"}
                        alt={event.house}
                        fill
                        className="object-contain opacity-80 group-hover:opacity-100 transition-opacity"
                      />
                    </div>
                    <div className="flex-grow text-center md:text-left">
                      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                        <div>
                          <h3 className="text-2xl font-bold group-hover:text-[#FFD700] transition-colors">
                            {event.name}
                          </h3>
                          <p className="text-sm text-[#D5B577]/60 mb-2">{event.house}</p>
                          <p className="text-[#D5B577]/80">{event.description}</p>
                        </div>
                        <div className="flex flex-col items-center md:items-end gap-2">
                          <span className="text-sm text-[#FFD700]">Prize Pool: {event.prize}</span>
                          <Button
                            variant="outline"
                            size="sm"
                            className="border-[#D5B577]/40 hover:bg-[#D5B577] hover:text-[#0A0C10]"
                          >
                            View Details
                          </Button>
                        </div>
                      </div>
                      <div className="mt-4 flex flex-wrap gap-2">
                        {event.rounds.map((round, idx) => (
                          <span
                            key={idx}
                            className="text-xs px-2 py-1 rounded-full border border-[#D5B577]/20 bg-[#D5B577]/5"
                          >
                            {round}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-[#D5B577]/20 py-12">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h3 className={`text-2xl font-bold mb-4 ${medievalSharp.className}`}>
              Join the Technical Conquest
            </h3>
            <p className="mb-8 text-[#D5B577]/80">
              When you play the game of tech, you win or you debug
            </p>
            <div className="flex justify-center space-x-6">
              {["Twitter", "Instagram", "LinkedIn"].map((social) => (
                <motion.a
                  key={social}
                  href="#"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className="hover:text-[#FFD700] transition-colors"
                >
                  {social}
                </motion.a>
              ))}
            </div>
            <p className="mt-8 text-sm text-[#D5B577]/60">
              &copy; {new Date().getFullYear()} Praxis Tech Fest. All rights reserved.
            </p>
          </motion.div>
        </div>
      </footer>
    </div>
  )
}
