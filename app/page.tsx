import Header from './components/Header'
import Hero from './components/Hero'
import FeaturedEvents from './components/FeaturedEvents'
import Categories from './components/Categories'
import UpcomingEvents from './components/UpcomingEvents'
import Footer from './components/Footer'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <Categories />
      <FeaturedEvents />
      <UpcomingEvents />
      <Footer />
    </main>
  )
}