"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Cinzel, MedievalSharp } from "next/font/google"
import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, Trophy, Target } from "lucide-react"

import flameImg from "../../../public/cta-bg-flames.webp"

const cinzel = Cinzel({ subsets: ["latin"] })
const medievalSharp = MedievalSharp({ weight: "400", subsets: ["latin"] })

const rounds = [
  {
    title: "Round 1: The Mind Test",
    description: "Test with tricky questions, riddles or mystery puzzles.",
    details: [
      "Mode: Offline PCCOE IT Building",
      "Date: 7th March",
      "30 questions, 2 marks each",
      "No negative marking",
      "Team size: 4 members",
      "Topics: Aptitude Reasoning",
      "Duration: 30 minutes",
    ],
    rules: [
      "Teams will collaborate to answer questions",
      "Top-scoring teams qualify for next round",
      "Interactive and engaging format",
    ],
  },
  {
    title: "Round 2: The Escape Room",
    description: "Participants are trapped in a haunted location and must escape within a time limit.",
    details: [
      "Venue: Offline IT Building",
      "Clues and puzzles will be given.",
      "Solve them to get the key for escaping the room",
      "Time limit - 5 min/team",
      
    ],
    rules: [
      "No mobile phones or laptops allowed",
      "No external assistance",
      "Individual presentations only",
      "Time limit per participant",
    ],
  },
  {
    title: "Round 3: Confession Room",
    description: "Participants are blindfolded and must solve the riddle.",
    details: [
      "Top 6 teams qualify",
      "Venue: IT Department classroom",
    ],
    rules: [
      "No external assistance allowed",
      "Follow designated areas only",
      "Time-based evaluation",
      "Top 3 teams win prizes",
    ],
  },
]

export default function ShipwreckEvent() {
  return (
    <div className={`min-h-screen bg-[#0A0C10] text-[#D5B577] ${cinzel.className}`}>
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center">
        <Image
          src={flameImg}
          alt="Survive the Shadows event background"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-[#0A0C10]"></div>

        <div className="container relative z-10 px-4 pt-20">
          <Link href="/" className="inline-flex items-center text-[#D5B577] hover:text-[#FFD700] mb-8">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Events
          </Link>

          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="max-w-4xl">
            <div className="flex items-center gap-6 mb-6">
              <Image
                src="/octopus-got-removebg-preview.png"
                alt="House Greyjoy"
                width={80}
                height={80}
                className="opacity-80"
              />
              <div>
                <h1 className={`text-4xl md:text-8xl lg:text-6xl font-bold text-white ${medievalSharp.className}`}>
                  The Red Keep Lockdown : Survive The Shadows
                </h1>
                <p className="text-xl text-[#D5B577]">House Greyjoy Presents</p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
      
              <div className="flex items-center gap-3">
                <Trophy className="h-6 w-6" />
                <div>
                  <p className="text-sm text-[#D5B577]/60">Prize Pool</p>
                  <p className="font-bold">₹15,000</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Target className="h-6 w-6" />
                <div>
                  <p className="text-sm text-[#D5B577]/60">Rounds</p>
                  <p className="font-bold">3 Stages</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Event Details */}
      <section className="py-16">
        <div className="container px-4">
          <div className="max-w-4xl mx-auto space-y-16">
            {rounds.map((round, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false }}
                transition={{ delay: index * 0.2 }}
                className="space-y-6"
              >
                <h2 className={`text-2xl md:text-3xl font-bold ${medievalSharp.className}`}>{round.title}</h2>
                <p className="text-lg text-[#D5B577]/80">{round.description}</p>

                <div className="grid md:grid-cols-2 gap-8">
                  <div className="space-y-4">
                    <h3 className="font-bold text-[#FFD700]">Details</h3>
                    <ul className="space-y-2">
                      {round.details.map((detail, idx) => (
                        <li key={idx} className="flex items-center gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#D5B577]" />
                          {detail}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="space-y-4">
                    <h3 className="font-bold text-[#FFD700]">Rules</h3>
                    <ul className="space-y-2">
                      {round.rules.map((rule, idx) => (
                        <li key={idx} className="flex items-center gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#D5B577]" />
                          {rule}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            ))}
             

             <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="pt-8 border-t border-[#D5B577]/20"
            >

<h1>Event Leads</h1>
                <h2>Riya Kulkarni (8767545503)</h2>
                <h2>Anushka k (8999649728)</h2>
                <h1>.....................................</h1>
              <Button className="w-full md:w-auto bg-[#D5B577] text-[#0A0C10] hover:bg-[#FFD700]">
           <a href="https://drive.google.com/file/d/1o1P8Qv8nfMQiDYxLkfxaTxX2WDmNfKTU/view?usp=sharing" target="_blank" rel="noopener noreferrer">
                 Rulebook
           </a>
              </Button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="pt-8 border-t border-[#D5B577]/20"
            >
              <Button className="w-full md:w-auto bg-[#D5B577] text-[#0A0C10] hover:bg-[#FFD700]">
           <a href="https://forms.gle/3MvYRR5Bw2R2mq2C6" target="_blank" rel="noopener noreferrer">
                 Register Now
           </a>
              </Button>
              <h1>PCCOE Participants</h1>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="pt-8 border-t border-[#D5B577]/20"
            >
              <Button className="w-full md:w-auto bg-[#D5B577] text-[#0A0C10] hover:bg-[#FFD700]">
           <a href="https://forms.gle/62NZczqZd5zHBzrC9" target="_blank" rel="noopener noreferrer">
                 Register Now
           </a>
              </Button>

              <h1>Non-PCCOE Participants</h1>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  )
}

