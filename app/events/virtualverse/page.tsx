"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Cinzel, MedievalSharp } from "next/font/google"
import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, Trophy, Target, Glasses, Lightbulb, PenTool } from "lucide-react"

import flameImg from "../../../public/cta-bg-flames.webp"

const cinzel = Cinzel({ subsets: ["latin"] })
const medievalSharp = MedievalSharp({ weight: "400", subsets: ["latin"] })

const workshops = [
  {
    title: "Station 1: Snap Studio",
    description: "Create your own Snapchat filters and lenses",
    details: ["Learn to design interactive AR effects", "Create filters in minutes", "Explore social AR possibilities"],
  },
  {
    title: "Station 2: AR.js Adventure",
    description: "Explore browser-based AR projects",
    details: [
      "Create simple yet powerful AR projects",
      "Use AR.js for browser-based augmented reality",
      "Learn accessible AR development",
    ],
  },
  {
    title: "Station 3: CoSpaces Creator",
    description: "Build 3D scenes and animate objects",
    details: ["Create compelling stories in 3D", "Use drag-and-drop features", "Learn basic 3D modeling and animation"],
  },
]

const competition = {
  title: "StoryCrafter Showdown",
  description: "Create a captivating AR/VR story using CoSpaces",
  details: [
    "Theme: 'Time Travel Adventure' or create a short, interactive AR/VR story",
    "Incorporate interactive elements (clickable objects, animations, dynamic scenes)",
    "Create an immersive story where user actions influence the narrative",
  ],
  rules: [
    "Use CoSpaces as the primary tool for story creation",
    "Optional integration with AR.js and Snap Lens Studio",
    "2-hour time limit for story creation",
    "3-5 minute presentation time per team",
  ],
  criteria: [
    "Creativity (30%): Originality of concept and storytelling approach",
    "Interactivity (30%): Quality and effectiveness of interactive elements",
    "Technical Execution (20%): Smoothness of AR/VR experience",
    "Presentation (20%): Clarity of story presentation and overall user experience",
  ],
}

export default function VirtualVerseEvent() {
  return (
    <div className={`min-h-screen bg-[#0A0C10] text-[#D5B577] ${cinzel.className}`}>
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center">
        <Image
          src={flameImg}
          alt="VirtualVerse event background"
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
                src="/fish-got-removebg-preview.png"
                alt="House Tully"
                width={80}
                height={80}
                className="opacity-80"
              />
              <div>
                <h1 className={`text-4xl md:text-5xl lg:text-6xl font-bold text-white ${medievalSharp.className}`}>
                  Medieval Vice City : AR/VR Mafia
                </h1>
                <p className="text-xl text-[#D5B577]">House Tully Presents</p>
              </div>
            </div>

            <p className="text-lg md:text-xl mb-8">
              Dive into the immersive world of AR/VR. Craft realities beyond the Wall in this exciting playground!
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
            
              <div className="flex items-center gap-3">
                <Trophy className="h-6 w-6" />
                <div>
                  <p className="text-sm text-[#D5B577]/60">Prize Pool</p>
                  <p className="font-bold">₹10,000</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Target className="h-6 w-6" />
                <div>
                  <p className="text-sm text-[#D5B577]/60">Challenges</p>
                  <p className="font-bold">3 Workshops + Competition</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Workshop Details */}
      <section className="py-16">
        <div className="container px-4">
          <div className="max-w-4xl mx-auto space-y-16">
            <h2 className={`text-3xl md:text-4xl font-bold text-center ${medievalSharp.className}`}>
              Workshop Stations
            </h2>
            {workshops.map((workshop, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="space-y-6"
              >
                <h3 className={`text-2xl md:text-3xl font-bold ${medievalSharp.className}`}>{workshop.title}</h3>
                <p className="text-lg text-[#D5B577]/80">{workshop.description}</p>

                <div className="space-y-4">
                  <h4 className="font-bold text-[#FFD700] flex items-center gap-2">
                    <Glasses className="h-5 w-5" /> Workshop Details
                  </h4>
                  <ul className="space-y-2">
                    {workshop.details.map((detail, idx) => (
                      <li key={idx} className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#D5B577]" />
                        {detail}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}

            {/* Competition Details */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="space-y-6 pt-8 border-t border-[#D5B577]/20"
            >
              <h2 className={`text-3xl md:text-4xl font-bold ${medievalSharp.className}`}>{competition.title}</h2>
              <p className="text-lg text-[#D5B577]/80">{competition.description}</p>

              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-4">
                  <h3 className="font-bold text-[#FFD700] flex items-center gap-2">
                    <Lightbulb className="h-5 w-5" /> Challenge Details
                  </h3>
                  <ul className="space-y-2">
                    {competition.details.map((detail, idx) => (
                      <li key={idx} className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#D5B577]" />
                        {detail}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="space-y-4">
                  <h3 className="font-bold text-[#FFD700] flex items-center gap-2">
                    <PenTool className="h-5 w-5" /> Rules & Criteria
                  </h3>
                  <ul className="space-y-2">
                    {competition.rules.map((rule, idx) => (
                      <li key={idx} className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#D5B577]" />
                        {rule}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="space-y-4">
                <h3 className="font-bold text-[#FFD700]">Judging Criteria</h3>
                <ul className="space-y-2">
                  {competition.criteria.map((criterion, idx) => (
                    <li key={idx} className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#D5B577]" />
                      {criterion}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>

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
                  Basic understanding of AR/VR concepts
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#D5B577]" />
                  Laptop or device capable of running AR/VR software
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#D5B577]" />
                  Creativity and willingness to explore new technologies
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
                <h2>Eshal Shaikh (9325010694)</h2>
                <h2>Shivamraj Matkar (8010610593)</h2>
                <h1>.....................................</h1>
              <Button className="w-full md:w-auto bg-[#D5B577] text-[#0A0C10] hover:bg-[#FFD700]">
           <a href="https://drive.google.com/file/d/1GK60cLyo8EcRd5dSJe19uz3QMZOSMYza/view?usp=sharing" target="_blank" rel="noopener noreferrer">
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
           <a href="https://tinyurl.com/gdgcMVC" target="_blank" rel="noopener noreferrer">
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

