'use client'

import { motion } from 'framer-motion'
import { CalendarIcon, MapPinIcon, UsersIcon, StarIcon } from '@heroicons/react/24/outline'

const featuredEvents = [
  {
    id: 1,
    title: 'Neon Nights: Electronic Paradise',
    venue: 'SkyBar Downtown',
    date: '2024-01-20',
    time: '9:00 PM',
    price: 45,
    image: 'https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
    rating: 4.8,
    attendees: 120,
    category: 'Nightclub'
  },
  {
    id: 2,
    title: 'Rooftop Sunset Session',
    venue: 'The Terrace Lounge',
    date: '2024-01-22',
    time: '6:00 PM',
    price: 35,
    image: 'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
    rating: 4.9,
    attendees: 85,
    category: 'Rooftop'
  },
  {
    id: 3,
    title: 'Beach Party Bonanza',
    venue: 'Oceanside Resort',
    date: '2024-01-25',
    time: '4:00 PM',
    price: 30,
    image: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
    rating: 4.7,
    attendees: 200,
    category: 'Pool Party'
  }
]

export default function FeaturedEvents() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Featured Events
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Don't miss out on the hottest parties happening near you
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredEvents.map((event, index) => (
            <motion.div
              key={event.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="card overflow-hidden hover:scale-105 transition-transform duration-300"
            >
              <div className="relative h-48">
                <img 
                  src={event.image} 
                  alt={event.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-primary-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                    {event.category}
                  </span>
                </div>
                <div className="absolute top-4 right-4 bg-white rounded-full p-2">
                  <div className="flex items-center">
                    <StarIcon className="h-4 w-4 text-yellow-400 fill-current" />
                    <span className="ml-1 text-sm font-medium">{event.rating}</span>
                  </div>
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{event.title}</h3>
                
                <div className="space-y-2 mb-4">
                  <div className="flex items-center text-gray-600">
                    <MapPinIcon className="h-4 w-4 mr-2" />
                    <span className="text-sm">{event.venue}</span>
                  </div>
                  <div className="flex items-center text-gray-600">
                    <CalendarIcon className="h-4 w-4 mr-2" />
                    <span className="text-sm">{new Date(event.date).toLocaleDateString()} at {event.time}</span>
                  </div>
                  <div className="flex items-center text-gray-600">
                    <UsersIcon className="h-4 w-4 mr-2" />
                    <span className="text-sm">{event.attendees} attending</span>
                  </div>
                </div>

                <div className="flex justify-between items-center">
                  <div className="text-2xl font-bold text-primary-600">
                    ${event.price}
                  </div>
                  <button className="btn-primary">
                    Book Now
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="btn-secondary">
            View All Events
          </button>
        </div>
      </div>
    </section>
  )
}