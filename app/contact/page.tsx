import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import Contact from "@/components/contact"

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <div className="pt-24">
        <Contact />
      </div>
      <Footer />
    </main>
  )
}
