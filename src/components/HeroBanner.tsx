import { Button } from "@/components/ui/button"
export function HeroBanner() {

    const scrollToBottom = () => {
      if (typeof window!== "undefined") {
        window.scrollTo({
          top: 900,
          left: 0,
          behavior: "smooth"
        })
      }
    }

  return (
    <div className=" bg-hero-pattern bg-no-repeat bg-cover bg-origin-content bg-right h-screen">
      <section className="w-full">
        <div className="relative h-[100vh] min-h-[500px] max-h-[800px] overflow-hidden">
          <div className="absolute inset-0 flex flex-col items-center justify-center px-4 text-center">
            <div className="max-w-3xl space-y-4">
              <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl">
                Your Ultimate Destination for Premium Figures
              </h1>
              <p className="text-lg text-gray-300 md:text-xl">
                Explore our vast collection of high-quality, handpicked figures.
              </p>
              <div className="mt-5 flex justify-center gap-4">
                <Button onClick={scrollToBottom} variant="default" className=" text-black">
                  Get Started
                </Button>
                <Button variant="secondary" className=" text-gray-300">
                  Learn More
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
