import Hero from "@/components/hero"
import Navbar from "@/components/navbar"
import About from "@/components/about"
import Registration from "@/components/registration"
import Statistics from "@/components/statistics"
import Schedule from "@/components/schedule"
import Institute from "@/components/institute"
import Footer from "@/components/footer"
import Gallery from "@/components/gallery"
import FloatingCta from "@/components/floating-cta"
import Speakers from "@/components/speakers"
import Resources from "@/components/resources"
import CountdownTimer from "@/components/countdown-timer"
import TopicsList from "@/components/topics-list"

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <About />
      <Statistics />
      <TopicsList />
      <Gallery />
      <Speakers />
      <Registration />
      <CountdownTimer />
      <Schedule />
      <Resources />
      <Institute />
      <Footer />
      <FloatingCta />
    </main>
  )
}
