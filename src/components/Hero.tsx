/* eslint-disable @next/next/no-img-element */
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export default function Hero() {
  return (
    <section className="w-full min-h-[calc(100vh-64px)] bg-white dark:bg-black flex items-center justify-center">
      <div className="container px-4 md:px-6 py-24 md:py-32">
        <div className="flex flex-col items-center justify-center space-y-8 text-center">
          <div className="space-y-6">
            <div className="inline-flex items-center rounded-full bg-zinc-100 dark:bg-zinc-800/60 px-3 py-1 text-sm text-zinc-900 dark:text-white">
              <span className="flex h-2 w-2 rounded-full bg-zinc-900 dark:bg-white mr-2" />
              4 new tools added
            </div>
            <h1 className="text-4xl font-bold tracking-tighter text-zinc-900 dark:text-white sm:text-5xl md:text-6xl lg:text-7xl/none max-w-3xl mx-auto">
              Discover Open Source Alternatives
              <br />
              to Popular Software
            </h1>
            <p className="mx-auto max-w-[700px] text-zinc-500 dark:text-zinc-400 text-lg md:text-xl">
              A curated collection of the best open source alternatives to everyday SaaS products. Save money with reliable
              tools hand-picked for you.
            </p>
          </div>
          <div className="w-full max-w-sm space-y-4">
            <form className="flex space-x-2">
              <Input
                className="flex-1 bg-white dark:bg-zinc-800/60 border-zinc-200 dark:border-zinc-700 text-zinc-900 dark:text-white placeholder:text-zinc-400 dark:placeholder:text-zinc-400"
                placeholder="Your email here..."
                type="email"
                required
              />
              <Button 
                className="bg-zinc-900 dark:bg-white text-white dark:text-black hover:bg-zinc-800 dark:hover:bg-zinc-100" 
                type="submit"
              >
                Join our community
              </Button>
            </form>
            <div className="flex items-center justify-center space-x-2">
              <div className="flex -space-x-2">
                {[...Array(5)].map((_, i) => (
                  <div
                    key={i}
                    className="inline-block h-8 w-8 overflow-hidden rounded-full border-2 border-white dark:border-zinc-800"
                  >
                    <img
                      alt="Avatar"
                      className="h-full w-full object-cover"
                      src={`/placeholder.svg?height=32&width=32`}
                    />
                  </div>
                ))}
              </div>
              <p className="text-sm text-zinc-500 dark:text-zinc-400">
                Join 1,800+ open source enthusiasts
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}