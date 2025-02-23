'use client'

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Cinzel, MedievalSharp } from 'next/font/google'
import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, Trophy, Target, Palette, Brush } from 'lucide-react'

import flameImg from "../../../public/cta-bg-flames.webp"

const cinzel = Cinzel({ subsets: ['latin'] })
const medievalSharp = MedievalSharp({ weight: '400', subsets: ['latin'] })

const rounds = [
  {
    title: "Round 1: AI Poster Making",
    description: "Showcase your creativity by using AI tools to produce professional-quality visuals",
    details: [
      "Mode: Online",
      "Platform: Online AI Tools",
      "Team : 3 members",
      "Date: 6th March ",
      "Time: 10 am - 6 pm",
      "Submission Type: Online",
      "Combine minimum of three AI-generated elements",
      "RGB color mode, maximum file size: 25 MB",
      "A3 size (11.7 x 16.5 inches)",
      "Theme revealed at the start of the round"
    ],
    rules: [
      "Basic Editing Software Allowed",
      "Submit original AI prompts list",
      "Include final poster (PNG/PDF)",
      "Provide brief design concept (100 words)",
      "Include generation-proof screenshots",
      "No unauthorized tools or copying of existing designs"
    ]
  },
  {
    title: "Round 2: Pictogram Prowess (AI Pictionary)",
    description: "Test quick thinking, creativity, and teamwork in an interactive AI-powered game",
    details: [
      "Mode: Offline",
      "Venue: PCCOE IT Building",
      "Date: 7th March",
      "Time: 2 hours ( 12 - 2 pm)",
      "Roles: Prompt Master (creates AI image) and 2 Guessers (interprets the image)",
      "Two attempts for AI image generation per word",
      "30 seconds to write each prompt",
      "2 minutes for guessing each image"
    ],
    rules: [
      "Rotate roles within the team for each round",
      "No hints or direct descriptions allowed",
      "Correct guess on first attempt: 10 points",
      "Correct guess on second attempt: 5 points",
      "Speed bonus (under 1 minute): 2 points",
      "Max points per word: 15"
    ]
  },
  {
    title: "Round 3: Comic Catalyst (AI Comic Generation)",
    description: "Blend artistic skills with AI technology to craft unique comic book content",
    details: [
      "Mode: Offline",
      "Venue: PCCOE IT Building",
      "Platform: Online AI Tools",
      "Date: 8th March",
      "Time: 1 hour ( 12 - 1 pm)",
      "Participants receive a story theme and elements ",
      "Must generate a comic book using AI tools",
      "6-8 panels minimum with consistent character designs",
      "High-resolution panels (2000x2000 px)",
      "Dialogue and narration required",
      "Title page mandatory"
    ],
    rules: [
      "Submit all AI prompts used",
      "Include generation proof",
      "Provide script/storyboard",
      "Submit final comic file and character sheets",
      "No pre-made assets or copyrighted material allowed"
    ]
  }
]

export default function AICanvasEvent() {
  return (
    <div className={`min-h-screen bg-[#0A0C10] text-[#D5B577] ${cinzel.className}`}>
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center">
        <Image
          src={flameImg}
          alt="AI Canvas Contest background"
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
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-4xl"
          >
            <div className="flex items-center gap-6 mb-6">
              <Image
                src="/dragon-got-removebg-preview.png"
                alt="House Targaryan"
                width={80}
                height={80}
                className="opacity-80"
              />
              <div>
                <h1 className={`text-4xl md:text-5xl lg:text-6xl font-bold text-white ${medievalSharp.className}`}>
                 The Digital Underworld: AI Canvas Contest
                </h1>
                <p className="text-xl text-[#D5B577]">House Targaryan Presents</p>
              </div>
            </div>

            <p className="text-lg md:text-xl mb-8">
              Unleash your creativity with the power of AI. Paint the digital realm with innovation and artistry!
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
                <h2 className={`text-2xl md:text-3xl font-bold ${medievalSharp.className}`}>
                  {round.title}
                </h2>
                <p className="text-lg text-[#D5B577]/80">{round.description}</p>
                
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="space-y-4">
                    <h3 className="font-bold text-[#FFD700] flex items-center gap-2">
                      <Palette className="h-5 w-5" /> Challenge Details
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
                      <Brush className="h-5 w-5" /> Rules & Criteria
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
                  Access to AI image generation tools
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#D5B577]" />
                  Basic image editing software
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#D5B577]" />
                  Creativity and willingness to explore AI-assisted art
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
                <h2>Tushar Badlani (9579341477)</h2>
                <h2>Anish Patade (9175917645)</h2>
                <h1>.....................................</h1>
              <Button className="w-full md:w-auto bg-[#D5B577] text-[#0A0C10] hover:bg-[#FFD700]">
           <a href="https://drive.google.com/file/d/1ibliIiGdGh-JBFnhOkJFZwU09Q4Dre3Z/view?usp=sharing" target="_blank" rel="noopener noreferrer">
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
           <a href="https://forms.gle/vhE2NsD7eLUK24Ep9" target="_blank" rel="noopener noreferrer">
                 Register Now
           </a>
              </Button>

              <h1> Both PCCOE And Non-PCCOE Participants</h1>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  )
}
