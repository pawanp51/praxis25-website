"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Cinzel, MedievalSharp } from "next/font/google"
import Image from "next/image"
import Link from "next/link"
import { ArrowLeft,Trophy, Target } from "lucide-react"

import flameImg from "../../../public/cta-bg-flames.webp"

const cinzel = Cinzel({ subsets: ["latin"] })
const medievalSharp = MedievalSharp({ weight: "400", subsets: ["latin"] })

const rounds = [
  {
    title: "Round 1: Online Qualifiers",
    description: "Battle for supremacy in the online realm",
    details: [
      "Multiple online rounds based on total registrations",
      "Room Card mode for uniformity and accessibility",
      "Groups determined by total registrations and platform capacity",
      "Performance assessed on points, rank, and consistency",
    ],
    rules: [
      "All registered participants divided into groups",
      "Top performers from each round will be shortlisted",
      "Number of advancing players depends on subsequent round capacity",
      "Fair and transparent selection process",
    ],
  },
  {
    title: "Round 2: Team Formation",
    description: "Form alliances and prove your worth as a team",
    details: [
      "28 teams selected from First Phase",
      "Two groups of 14 teams each",
      "Two separate rounds, one for each group",
      "Top 8 teams from each group advance",
    ],
    rules: [
      "Teams represent top performers from First Phase",
      "Performance assessed on predefined scoring system",
      "Criteria includes total points, rankings, and consistency",
      "16 teams total qualify for the Final Phase",
    ],
  },
  {
    title: "Round 3: The Final Battle",
    description: "Compete for the Iron Throne in a decisive match",
    details: [
      "16 teams in a single decisive match",
      "Room Card mode for final battle",
      "All teams compete simultaneously",
      "Winner determined by final match score",
    ],
    rules: [
      "Teams represent top performers from earlier stages",
      "Judging based on final match score",
      "Criteria may include total points, ranks, and other relevant metrics",
      "Winning team crowned champion of the tournament",
    ],
  },
]

export default function BGMIShowdownEvent() {
  return (
    <div className={`min-h-screen bg-[#0A0C10] text-[#D5B577] ${cinzel.className}`}>
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center">
        <Image
          src={flameImg}
          alt="BGMI Showdown event background"
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
                src="/arrow-got-removebg-preview.png"
                alt="House Martell"
                width={80}
                height={80}
                className="opacity-80"
              />
              <div>
                <h1 className={`text-4xl md:text-5xl lg:text-6xl font-bold text-white ${medievalSharp.className}`}>
                  BGMI Showdown
                </h1>
                <p className="text-xl text-[#D5B577]">House Martell Presents</p>
              </div>
            </div>

            <p className="text-lg md:text-xl mb-8">
              Battle for the Iron Throne in this epic mobile gaming tournament. Prove your worth as the ultimate
              strategist and warrior!
            </p>

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
                viewport={{ once: true }}
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
                <h2>Sarthak sarode (8459428045)</h2>
                <h2>Krishna Turkar (9322350991)</h2>
                <h1>.....................................</h1>
              <Button className="w-full md:w-auto bg-[#D5B577] text-[#0A0C10] hover:bg-[#FFD700]">
           <a href="https://drive.google.com/file/d/1GLFSTyZ9UdGfHGVtQW00vG4jhAIeH6yC/view?usp=sharing" target="_blank" rel="noopener noreferrer">
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
           <a href="https://forms.gle/YHALX94s1zigAcpJ6" target="_blank" rel="noopener noreferrer">
                 Register Now
           </a>
              </Button>
              <h1>PCCOE Participants ( Also applicable for those with at least one team member from PCCOE)</h1>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="pt-8 border-t border-[#D5B577]/20"
            >
              <Button className="w-full md:w-auto bg-[#D5B577] text-[#0A0C10] hover:bg-[#FFD700]">
           <a href="https://forms.gle/9vBbAUXMKtwY1tfE6" target="_blank" rel="noopener noreferrer">
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

