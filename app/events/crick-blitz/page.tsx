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
    title: "Round 1: The Crown’s First Trial (Preliminary Round)",
    description: "Submit a well-structured startup pitch presentation showcasing your innovative idea.",
    details: [
      "Mode: Online",
      "Submission: PowerPoint Presentation (PPT)",
      "Deadline: 7th March 2025, 2 P.M",
      "Submission link will be shared via WhatsApp group",
    ],
    rules: [
      "Teams must submit a PPT covering the problem statement, solution, market opportunity, execution plan, and financial model.",
      "Late submissions will not be entertained.",
      "Top shortlisted teams will advance to the next round.",
    ],
  },
  {
    title: "Round 2: The Coronation (Mentorship & Final Pitches)",
    description: "Finalists will receive expert mentorship to refine their startup ideas before presenting them to the investors.",
    details: [
      "Mode: Offline",
      "Venue: PCCOE IT Department",
      "Mentorship Session: Industry experts will guide teams on business strategy and financial modeling.",
      "Final Pitch Session: Teams will present their refined startup ideas to the investor panel.",
    ],
    rules: [
      "Each team gets 5 minutes for their pitch, followed by a 3-minute Q&A session.",
      "Teams must incorporate feedback from mentors into their final presentations.",
      "Judges will evaluate pitches based on innovation, feasibility, financial viability, and presentation skills.",
    ],
  },
  {
    title: "Round 3: The Investment Negotiation (Grading Simulation)",
    description: "A real-world simulation where teams negotiate with investors to secure mock investments.",
    details: [
      "Mode: Offline",
      "Venue: PCCOE IT Department",
      "Teams will engage in a negotiation round where they defend their startup’s valuation and funding needs.",
      "Investors will allocate mock grades based on startup potential.",
    ],
    rules: [
      "Teams must justify their valuation and funding requests convincingly.",
      "Effective negotiation and persuasion will impact the final grading.",
      "Judges decisions will be final and binding.",
    ],
  },
  
];

export default function CrickBlitzEvent() {
  return (
    <div className={`min-h-screen bg-[#0A0C10] text-[#D5B577] ${cinzel.className}`}>
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center">
        <Image
          src={flameImg}
          alt="Crick-Blitz event background"
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
                src="/stag-got-removebg-preview.png"
                alt="House Baratheon"
                width={80}
                height={80}
                className="opacity-80"
              />
              <div>
                <h1 className={`text-4xl md:text-5xl lg:text-6xl font-bold text-white ${medievalSharp.className}`}>
                  Battle For The Crown : Throne Pitch
                </h1>
                <p className="text-xl text-[#D5B577]">House Baratheon Presents</p>
              </div>
            </div>

            <p className="text-lg md:text-xl mb-8">
            Pitching competition where students 
            present innovative business ideas to a panel of investors.
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
                <h2>Omkar Sardesai (8767545503)</h2>
                <h2>Arunima Pingali (7743861208)</h2>
                <h1>.....................................</h1>
              <Button className="w-full md:w-auto bg-[#D5B577] text-[#0A0C10] hover:bg-[#FFD700]">
           <a href="https://drive.google.com/file/d/1JqoKjlFEVIVYB4liHSR1b0QKwRRHvABk/view?usp=sharing" target="_blank" rel="noopener noreferrer">
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
           <a href="https://forms.gle/zKgtfGMAWSormqgu6" target="_blank" rel="noopener noreferrer">
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
           <a href="https://forms.gle/KWRPGahBdBcrVrvQ6" target="_blank" rel="noopener noreferrer">
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

