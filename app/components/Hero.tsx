'use client'

import { motion } from 'framer-motion'
import { CalendarDaysIcon, MapPinIcon, TicketIcon } from '@heroicons/react/24/outline'

export default function Hero() {
  return (
    <section className="relative bg-gradient-to-br from-primary-600 via-primary-700 to-secondary-600 text-white">
      <div className="absolute inset-0 bg-black opacity-30"></div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-6xl font-bold mb-6"
          >
            Your Party Starts Here
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto text-gray-100"
          >
            Discover the hottest parties, book exclusive events, and create unforgettable memories. 
            From intimate gatherings to epic celebrations.
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center mb-12"
          >
            <button className="bg-white text-primary-600 hover:bg-gray-100 font-semibold py-3 px-8 rounded-lg transition-colors duration-200">
              Explore Events
            </button>
            <button className="border-2 border-white text-white hover:bg-white hover:text-primary-600 font-semibold py-3 px-8 rounded-lg transition-colors duration-200">
              Host Your Party
            </button>
          </motion.div>

          {/* Stats */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto"
          >
            <div className="flex flex-col items-center">
              <CalendarDaysIcon className="h-8 w-8 mb-2" />
              <div className="text-2xl font-bold">500+</div>
              <div className="text-gray-200">Events Monthly</div>
            </div>
            <div className="flex flex-col items-center">
              <MapPinIcon className="h-8 w-8 mb-2" />
              <div className="text-2xl font-bold">50+</div>
              <div className="text-gray-200">Cities</div>
            </div>
            <div className="flex flex-col items-center">
              <TicketIcon className="h-8 w-8 mb-2" />
              <div className="text-2xl font-bold">10K+</div>
              <div className="text-gray-200">Happy Party-goers</div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}