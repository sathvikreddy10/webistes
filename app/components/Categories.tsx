'use client'

import { motion } from 'framer-motion'

const categories = [
  {
    name: 'Nightclub Events',
    description: 'DJ sets, club nights, and electronic music events',
    image: '🎵',
    color: 'from-purple-500 to-pink-500'
  },
  {
    name: 'Private Parties',
    description: 'Birthday parties, celebrations, and private gatherings',
    image: '🎉',
    color: 'from-blue-500 to-cyan-500'
  },
  {
    name: 'Rooftop Parties',
    description: 'Open-air events with stunning city views',
    image: '🌆',
    color: 'from-orange-500 to-red-500'
  },
  {
    name: 'Pool Parties',
    description: 'Summer vibes, poolside fun, and beach parties',
    image: '🏊‍♀️',
    color: 'from-teal-500 to-blue-500'
  },
  {
    name: 'Live Music',
    description: 'Concerts, live bands, and acoustic performances',
    image: '🎸',
    color: 'from-green-500 to-emerald-500'
  },
  {
    name: 'Theme Parties',
    description: 'Costume parties, retro nights, and themed events',
    image: '🎭',
    color: 'from-indigo-500 to-purple-500'
  }
]

export default function Categories() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Party Categories
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            From intimate gatherings to massive celebrations, find the perfect party for your mood
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((category, index) => (
            <motion.div
              key={category.name}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group cursor-pointer"
            >
              <div className={`card p-6 bg-gradient-to-br ${category.color} text-white hover:scale-105 transition-transform duration-300`}>
                <div className="text-4xl mb-4">{category.image}</div>
                <h3 className="text-xl font-semibold mb-2">{category.name}</h3>
                <p className="text-gray-100">{category.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}