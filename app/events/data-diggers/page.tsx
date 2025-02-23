"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Cinzel, MedievalSharp } from "next/font/google"
import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, Trophy, Target, Database, Brain } from "lucide-react"

import flameImg from "../../../public/cta-bg-flames.webp"

const cinzel = Cinzel({ subsets: ["latin"] })
const medievalSharp = MedievalSharp({ weight: "400", subsets: ["latin"] })

const rounds = [
  {
    title: "Round 1: Data Science Quiz (Online)",
    description: "Test your foundational knowledge in Data Science, Machine Learning, and Python",
    details: [
      "Topics: Data Science, Machine Learning, Python",
      "Covers data cleaning, preprocessing, visualization, ML algorithms",
      "Python core concepts and libraries (NumPy, Pandas, Matplotlib, Scikit-learn)",
      "Elimination round to screen participants",
    ],
    rules: [
      "Teams of 2 participants",
      "Advance registration required",
      "No cross-institution teams allowed",
      "Judges' decisions are final and binding",
    ],
  },
  {
    title: "Round 2: Data Treasure Hunt (Offline)",
    description: "Analyze datasets, uncover patterns, and solve challenging clues",
    details: [
      "Analyze provided datasets to discover clues",
      "Use statistical analysis and data visualization",
      "Increasing difficulty of clues and datasets",
      "Final 'treasure' could be a hidden message, prize, or set of challenges",
    ],
    rules: [
      "Use provided Python libraries: Pandas, NumPy, Matplotlib, Seaborn, Scikit-learn",
      "Work in teams to solve problems",
      "Time management is crucial",
      "Creativity in data analysis is encouraged",
    ],
  },
  {
    title: "Round 3: Data Wrangling Race (Optional)",
    description: "Clean and preprocess messy datasets with speed and accuracy",
    details: [
      "Address data quality issues in provided datasets",
      "Handle missing values, incorrect data types, inconsistencies, and outliers",
      "Produce a clean, usable dataset",
      "Timed challenge to test efficiency",
    ],
    rules: [
      "Accuracy in addressing data quality issues is key",
      "Speed of task completion will be evaluated",
      "Demonstrate proficiency in data cleaning techniques",
      "Attention to detail is crucial",
    ],
  },
]

export default function DataDiggersEvent() {
  return (
    <div className={`min-h-screen bg-[#0A0C10] text-[#D5B577] ${cinzel.className}`}>
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center">
        <Image
          src={flameImg}
          alt="Data Diggers event background"
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
                src="/eagle-got-removebg-preview.png"
                alt="House Arryn"
                width={80}
                height={80}
                className="opacity-80"
              />
              <div>
                <h1 className={`text-4xl md:text-5xl lg:text-6xl font-bold text-white ${medievalSharp.className}`}>
                  Data Diggers
                </h1>
                <p className="text-xl text-[#D5B577]">House Arryn Presents</p>
              </div>
            </div>

            <p className="text-lg md:text-xl mb-8">
              Unearth hidden insights from the realm of data. Analyze, visualize, and conquer the world of information!
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
                      <Database className="h-5 w-5" /> Challenge Details
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
                      <Brain className="h-5 w-5" /> Rules & Criteria
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
                  Python Libraries: NumPy, Pandas, Matplotlib, Scikit-learn
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#D5B577]" />
                  Datasets pre-loaded on provided systems
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#D5B577]" />
                  Basic knowledge of data science concepts
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
                <h2>Omkar Sardesai (8767545503)</h2>
                <h2>Arunima Pingali (7743861208)</h2>
                <h1>.....................................</h1>
              <Button className="w-full md:w-auto bg-[#D5B577] text-[#0A0C10] hover:bg-[#FFD700]">
           <a href="//" target="_blank" rel="noopener noreferrer">
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

