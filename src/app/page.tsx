import Header from "@/components/Header"
import Hero from "@/components/Hero"

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex min-h-screen flex-col">
        <Hero />
      </main>
    </>
  )
}