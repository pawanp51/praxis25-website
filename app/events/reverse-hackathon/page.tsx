"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Cinzel, MedievalSharp } from "next/font/google"
import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, Trophy, Target, Code, Bug } from "lucide-react"

import flameImg from "../../../public/cta-bg-flames.webp"

const cinzel = Cinzel({ subsets: ["latin"] })
const medievalSharp = MedievalSharp({ weight: "400", subsets: ["latin"] })

const rounds = [
  {
    title: "Round 1: Build-on-the-Go",
    description: "Create a frontend-only website using provided assets and themes",
    details: [
      "Team size : 3",
      "Time : 1.5 hours (10.30 am - 12 pm)",
      "Date: 7th March",
      "Mode : Offline",
      "Venue: PCCOE IT Building",
      "Platform: Vercel/Netlify",
      "Teams receive a basic website skeleton and a theme",
      "Specific theme announced at start",
      "New assets provided periodically",
      "10 minutes freestyle time at the end",
      "Deploy on Vercel or Netlify",
      "Ensure your laptop environment is node.js and npm ready"
    ],
    rules: [
      "Incorporate all provided assets",
      "No Premade Templates",
      "No Plagarism",
      "Adhere to the announced theme",
      "Submit deployed website link for evaluation",

    ],
  },
  {
    title: "Round 2: Fullstack Bug Fixing",
    description: "Identify and resolve issues in a functional website's codebase",
    details: [
      "Mode : Offline",
      "Venue: PCCOE IT Building",
      "Duration: 2 hours",
      "Time: 3 - 5 pm",
      "Platform: Local System IDEs (VScode, Intellij etc)",
      "Teams receive full codebase of a pre-built website",
      "15-minute familiarization period",
      "1.5 hours to fix as many issues as possible",
      "Log and submit each fixed issue with description",
    ],
    rules: [
      "Focus on number of issues fixed and quality of solutions",
      "Optimize code where possible",
      "Document all changes made",
      "Time management is crucial",
      "Team with most effective fixes wins",
    ],
  },
]

export default function ReverseHackathonEvent() {
  return (
    <div className={`min-h-screen bg-[#0A0C10] text-[#D5B577] ${cinzel.className}`}>
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center">
        <Image
          src={flameImg}
          alt="Reverse Hackathon event background"
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
                src="/wolf-got-removebg-preview.png"
                alt="House Stark"
                width={80}
                height={80}
                className="opacity-80"
              />
              <div>
                <h1 className={`text-4xl md:text-5xl lg:text-6xl font-bold text-white ${medievalSharp.className}`}>
                  The Cyber Coup: Reverse Hackathon
                </h1>
                <p className="text-xl text-[#D5B577]">House Stark Presents</p>
              </div>
            </div>

            <p className="text-lg md:text-xl mb-8">
              Forge your web development skills in this dynamic challenge. Create, debug, and conquer!
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
                  <p className="font-bold">2 Challenges</p>
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
                    <h3 className="font-bold text-[#FFD700] flex items-center gap-2">
                      <Code className="h-5 w-5" /> Challenge Details
                    </h3>
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
                    <h3 className="font-bold text-[#FFD700] flex items-center gap-2">
                      <Bug className="h-5 w-5" /> Rules & Criteria
                    </h3>
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
              <h3 className={`text-2xl font-bold mb-4 ${medievalSharp.className}`}>Event Requirements</h3>
              <ul className="space-y-2 mb-6">
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#D5B577]" />
                  Node.js and npm installed on systems
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#D5B577]" />
                  Assets uploaded on GitHub for participants to download
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#D5B577]" />
                  Restrictions on ChatGPT, Claude, Gemini, and other LLMs
                </li>
              </ul>
              
            </motion.div>
              
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="pt-8 border-t border-[#D5B577]/20"
            >

<h1>Event Leads</h1>
                <h2>Sarthak Joshi ()</h2>
                <h2>Pawan Patil (8381021200)</h2>
                <h1>.....................................</h1>
              <Button className="w-full md:w-auto bg-[#D5B577] text-[#0A0C10] hover:bg-[#FFD700]">
           <a href="https://drive.google.com/file/d/14KFqd8L-NF1NJTwWCng-drRay_tuhfSG/view?usp=sharing" target="_blank" rel="noopener noreferrer">
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
           <a href="https://forms.gle/nMryvftDCmQo15tW8" target="_blank" rel="noopener noreferrer">
                 Register Now
           </a>
              </Button>

              <h1>Both PCCOE And Non-PCCOE Participants</h1>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  )
}

