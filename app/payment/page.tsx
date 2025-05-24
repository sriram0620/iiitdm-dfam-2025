import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import PaymentDetails from "@/components/payment-details"

export default function PaymentPage() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <div className="pt-24">
        <PaymentDetails />
      </div>
      <Footer />
    </main>
  )
}
