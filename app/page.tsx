"use client"

import Image from "next/image"
import Link from "next/link"
import { Cinzel, MedievalSharp } from "next/font/google"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import { Menu, X } from "lucide-react"
import { useState, useEffect } from "react";
import { FaInstagram } from "react-icons/fa";

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
    prize: "₹12,000",
    rounds: ["Mind Test", "Escape Room", "Confession Room"],
  },
  {
    name: "Throne Pitch",
    description: "Battle For The Crown",
    icon: "/stag-got-removebg-preview.png",
    house: "House Baratheon",
    link: "/events/crick-blitz",
    prize: "₹12,000",
    rounds: ["Crown First Trial", "The Coronation"],
  },
  {
    name: "BGMI Showdown",
    description: "War of the 7 Thrones",
    icon: "/arrow-got-removebg-preview.png",
    house: "House Martell",
    link: "/events/bgmi-showdown",
    prize: "₹12,000",
    rounds: ["Qualifiers", "Semi-Finals", "Grand Finals"],
  },
  {
    name: "Reverse Hackathon",
    description: "The Cyber Coup take over the Iron Bank",
    icon: "/wolf-got-removebg-preview.png",
    house: "House Stark",
    link: "/events/reverse-hackathon",
    prize: "₹15,000",
    rounds: ["Build-on-the-go", "Fullstack Bug Fixing"],
  },
  {
    name: "AI Canvas Contest",
    description: "The Digital Underworld : Crime Lords and Kings",
    icon: "/dragon-got-removebg-preview.png",
    house: "House Targaryen",
    link: "/events/ai-canvas",
    prize: "₹15,000",
    rounds: ["Poster Making", "Pictogram Prowess", "Comic Catalyst"],
  },
  {
    name: "Problemathon",
    description: "The Grand Conspiracy decode the Hidden Prophecy",
    icon: "/lion-got-removebg-preview.png",
    house: "House Lannister",
    link: "/events/problemathon",
    prize: "₹15,000",
    rounds: ["Spark Start", "Duo Dash", "Code Crown"],
  },
  {
    name: "Virtual Space Verse",
    description: "Medieval Vice City: AR/VR Mafia",
    icon: "/fish-got-removebg-preview.png",
    house: "House Tully",
    link: "/events/virtualverse",
    prize: "₹10,000",
    rounds: ["Snap Studio", "AR.JS Adventure", "Cospaces Creator"],
  },
]

const socialLinks = [
  { name: "IEEE", link: "https://www.instagram.com/pccoeieee?igsh=Zmt0NW92M3J5d2tp" },
  { name: "MLSC", link: "https://www.instagram.com/mlscpccoe?igsh=MXhsa2tyMmhxbzZsaw==" },
  { name: "GDGC", link: "https://www.instagram.com/gdgcpccoe?igsh=dzg5amt5M3VpMXBn" }
];



export default function Home() {
  const [isIntroPlayed, setIsIntroPlayed] = useState(false);
  const [isFirstTime, setIsFirstTime] = useState(false);
  useEffect(() => {
    const hasSeenIntro = localStorage.getItem("hasSeenIntro");

    if (!hasSeenIntro) {
      setIsFirstTime(true); // First-time visitor, show intro video
      localStorage.setItem("hasSeenIntro", "true");
    } else {
      setIsIntroPlayed(true); // Skip intro, load main page directly
    }

    // Detect when user is leaving the website (back, refresh, close)
    const handleUnload = () => {
      localStorage.removeItem("hasSeenIntro"); // Reset intro for next visit
    };

    window.addEventListener("beforeunload", handleUnload);

    return () => {
      window.removeEventListener("beforeunload", handleUnload);
    };
  }, []);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className={`min-h-screen bg-[#0A0C10] text-[#D5B577] ${cinzel.className} overflow-x-hidden`}>
       {isFirstTime && !isIntroPlayed &&(
        <div className="fixed inset-0 flex items-center justify-center bg-black">
          <video
            autoPlay
            muted
            playsInline
            className="absolute inset-0 w-full h-full object-cover"
            onEnded={() => setIsIntroPlayed(true)} // Render sections only after video ends
          >
            <source src="/intro.mp4" type="video/mp4" />
          </video>
        </div>
      )}

{(isIntroPlayed || !isFirstTime) &&  (
        <>
      {/* Header */}
      <header className="fixed w-full z-50 bg-[#0A0C10]/96 backdrop-blur-sm border-b border-[#D5B577]/20">
        <div className="container mx-auto px-4 py-6 flex justify-between items-center">
          <motion.h1
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            className="text-2xl font-bold flex items-center gap-3"
          >
            <Image
              src='/mlsc.png'
              alt="Praxis Logo"
              width={60}
              height={60}
              className="opacity-80"
            />
             <Image
              src='/IEEE.png'
              alt="Praxis Logo"
              width={60}
              height={60}
              className="opacity-80"
            />
             <Image
              src='/pccoe-logo-removebg-preview.png'
              alt="Praxis Logo"
              width={60}
              height={60}
              className="opacity-80"
            />
            <Image
              src='/gdgc.png'
              alt="Praxis Logo"
              width={80}
              height={80}
              className="opacity-80"
            />
            <Image
              src='/ITSA.png'
              alt="Praxis Logo"
              width={60}
              height={60}
              className="opacity-80"
            />
           
          </motion.h1>

          <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X /> : <Menu />}
          </button>

          <nav className="hidden md:block">
  <ul className="flex space-x-6">
    {["Home", "Events"].map((item) => (
      <motion.li
        key={item}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => {
          const section = document.getElementById(item.toLowerCase());
          if (section) {
            section.scrollIntoView({ behavior: "smooth" });
          }
        }}
        className="cursor-pointer hover:text-[#FFD700] transition-colors"
      >
        {item}
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
                {["Home", "Events"].map((item) => (
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
        
        <div id= "home"className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-[#0A0C10]"></div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="relative z-10 text-center px-4 max-w-4xl mx-auto mt-20"
        >
          <div className={medievalSharp.className}>
            <p className="text-sm sm:text-lg mb-2 mt-10 text-white">
              PCET&apos;s <span className="text-[#D5B577]">PIMPRI CHINCHWAD COLLEGE OF ENGINEERING </span> , PUNE
            </p>
            <p className="text-sm sm:text-lg mb-6 text-white">
              Department of <span className="text-[#D5B577]">Information Technology</span> presents
            </p>
            <h1 className="text-5xl sm:text-7xl lg:text-8xl font-bold mb-4 text-white">Praxis&apos;25</h1>
            <p className="text-xl sm:text-2xl  text-[#D5B577]">
              Where Technology Meets the Seven Kingdoms
            </p>
            <div className="flex justify-center items-center">
     <Image
    src="/praxis-logo-removebg-preview.png"
    alt="Praxis Logo"
    width={300} // Increased size
    height={300}
 className="brightness-110 transition-all duration-300 hover:brightness-150 hover:drop-shadow-[0px_0px_25px_rgba(255,255,255,0.8)]"
  />
</div>
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
          <div className="flex justify-center">
            <img src="main-poster.png" className="w-3/6 mb-12"/>
          </div>
          
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
        {socialLinks.map(({ name, link }) => (
          <motion.a
            key={name}
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="flex flex-col items-center text-center hover:text-[#FFD700] transition-colors"
          >
            <FaInstagram className="text-3xl mb-1" /> {/* Instagram Icon */}
            <span className="text-sm">{name}</span> {/* Name below the icon */}
          </motion.a>
        ))}
          </div>
            <p className="mt-8 text-sm text-[#D5B577]/60">
              &copy; {new Date().getFullYear()} Praxis Tech Fest. All rights reserved.
            </p>
            <div className="flex justify-center items-center space-x-8">
               
            
            <Image
              src='/mlsc.png'
              alt="Praxis Logo"
              width={60}
              height={60}
              className="opacity-80"
            />
             <Image
              src='/IEEE.png'
              alt="Praxis Logo"
              width={60}
              height={60}
              className="opacity-80"
            />
            <Image
              src='/gdgc.png'
              alt="Praxis Logo"
              width={80}
              height={80}
              className="opacity-80"
            />
           
             <Image
              src='/ITSA.png'
              alt="Praxis Logo"
              width={60}
              height={60}
              className="opacity-80"
            />
            
            </div>
          </motion.div>
        </div>
      </footer>
      </>
      )}
    </div>
  )
}
