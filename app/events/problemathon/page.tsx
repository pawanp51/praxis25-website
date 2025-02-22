"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Cinzel, MedievalSharp } from "next/font/google"
import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, Users, Trophy, Target, Code, Zap } from "lucide-react"

import flameImg from "../../../public/cta-bg-flames.webp"

const cinzel = Cinzel({ subsets: ["latin"] })
const medievalSharp = MedievalSharp({ weight: "400", subsets: ["latin"] })

const rounds = [
  {
    title: "Round 1: Problemathon (Online)",
    description: "Solve a mix of coding problems, debugging tasks, and MCQs testing programming concepts",
    details: [
      "Platform: Hackerrank",
      "2 algorithmic coding challenges",
      "2 debugging tasks",
      "10 MCQs covering programming concepts and algorithms",
      "Time Limit: 30 minutes",
    ],
    rules: [
      "Teams of 2 members",
      "No external assistance allowed",
      "Judging based on Coding Problems (50%), Debugging Tasks (30%), MCQs (20%)",
      "Tie-breaker: Shortest completion time",
    ],
  },
  {
    title: "Round 2: Monitor-Keyboard Split (On-Campus)",
    description: "Solve programming problems collaboratively using a pair-programming format",
    details: [
      "Platform: CodeChef",
      "One team member views monitor and guides, other implements",
      "Roles fixed for entire round (2 hours)",
      "4-5 problems ranging from easy to medium difficulty",
    ],
    rules: [
      "Communication limited to verbal discussions only",
      "Points earned for each solved problem",
      "Tie-breaker: Least cumulative solving time",
      "Top 25 teams advance to final round",
    ],
  },
  {
    title: "Round 3: CP Battle Royale (On-Campus)",
    description: "A classic competitive programming contest testing advanced problem-solving abilities",
    details: [
      "Platform: CodeChef",
      "6-7 algorithmic challenges of varying difficulty",
      "Time Limit: 2 hours 30 minutes",
      "Problems range from easy to hard",
    ],
    rules: [
      "Internet access restricted to contest platform only",
      "No external sources allowed",
      "Submissions only accepted within contest duration",
      "Judging based on maximum points earned and solving time",
    ],
  },
]

export default function ProblemathonEvent() {
  return (
    <div className={`min-h-screen bg-[#0A0C10] text-[#D5B577] ${cinzel.className}`}>
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center">
        <Image
          src={flameImg}
          alt="Problemathon event background"
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
                src="/lion-got-removebg-preview.png"
                alt="House Lannister"
                width={80}
                height={80}
                className="opacity-80"
              />
              <div>
                <h1 className={`text-4xl md:text-5xl lg:text-6xl font-bold text-white ${medievalSharp.className}`}>
                  Problemathon
                </h1>
                <p className="text-xl text-[#D5B577]">House Lannister Presents</p>
              </div>
            </div>

            <p className="text-lg md:text-xl mb-8">
              Conquer the seas of code in this epic programming challenge. Debug, optimize, and triumph!
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
                  <p className="font-bold">3 Challenges</p>
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
                      <Zap className="h-5 w-5" /> Rules & Criteria
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
                  Proficiency in programming languages (e.g., C++, Java, Python)
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#D5B577]" />
                  Familiarity with competitive programming platforms
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#D5B577]" />
                  Problem-solving skills and algorithmic thinking
                </li>
              </ul>
              
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="pt-8 border-t border-[#D5B577]/20"
            >
              <Button className="w-full md:w-auto bg-[#D5B577] text-[#0A0C10] hover:bg-[#FFD700]">
           <a href="//" target="_blank" rel="noopener noreferrer">
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
           <a href="//" target="_blank" rel="noopener noreferrer">
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

