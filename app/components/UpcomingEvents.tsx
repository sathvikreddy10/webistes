'use client'

import { motion } from 'framer-motion'
import { CalendarIcon, ClockIcon, MapPinIcon, TicketIcon } from '@heroicons/react/24/outline'

const upcomingEvents = [
  {
    id: 1,
    title: 'Saturday Night Fever',
    venue: 'Club Matrix',
    date: '2024-01-27',
    time: '10:00 PM',
    price: 25,
    type: 'DJ Night'
  },
  {
    id: 2,
    title: 'Wine & Dine Rooftop',
    venue: 'Elevated Lounge',
    date: '2024-01-28',
    time: '7:00 PM',
    price: 55,
    type: 'Fine Dining'
  },
  {
    id: 3,
    title: 'Retro 80s Theme Party',
    venue: 'Nostalgia Club',
    date: '2024-02-01',
    time: '8:00 PM',
    price: 20,
    type: 'Theme Party'
  },
  {
    id: 4,
    title: 'Latin Dance Night',
    venue: 'Salsa Central',
    date: '2024-02-03',
    time: '9:00 PM',
    price: 15,
    type: 'Dance'
  },
  {
    id: 5,
    title: 'Exclusive VIP Launch',
    venue: 'Platinum Lounge',
    date: '2024-02-05',
    time: '8:30 PM',
    price: 100,
    type: 'VIP Event'
  }
]

export default function UpcomingEvents() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Upcoming Events
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Mark your calendar for these amazing upcoming parties
          </p>
        </div>

        <div className="space-y-6">
          {upcomingEvents.map((event, index) => (
            <motion.div
              key={event.id}
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="card p-6 hover:shadow-xl transition-shadow duration-300"
            >
              <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
                <div className="flex-1 mb-4 md:mb-0">
                  <div className="flex items-center mb-2">
                    <h3 className="text-xl font-semibold text-gray-900 mr-3">{event.title}</h3>
                    <span className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm">
                      {event.type}
                    </span>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-gray-600">
                    <div className="flex items-center">
                      <MapPinIcon className="h-4 w-4 mr-2 text-primary-500" />
                      <span className="text-sm">{event.venue}</span>
                    </div>
                    <div className="flex items-center">
                      <CalendarIcon className="h-4 w-4 mr-2 text-primary-500" />
                      <span className="text-sm">{new Date(event.date).toLocaleDateString()}</span>
                    </div>
                    <div className="flex items-center">
                      <ClockIcon className="h-4 w-4 mr-2 text-primary-500" />
                      <span className="text-sm">{event.time}</span>
                    </div>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="text-right">
                    <div className="text-2xl font-bold text-primary-600">${event.price}</div>
                    <div className="text-sm text-gray-500">per person</div>
                  </div>
                  <button className="btn-primary flex items-center">
                    <TicketIcon className="h-4 w-4 mr-2" />
                    Get Tickets
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="btn-secondary">
            Load More Events
          </button>
        </div>
      </div>
    </section>
  )
}