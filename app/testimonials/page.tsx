import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import Testimonials from "@/components/testimonials"
import Faq from "@/components/faq"

export default function TestimonialsPage() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <div className="pt-24">
        <Testimonials />
        <Faq />
      </div>
      <Footer />
    </main>
  )
}
