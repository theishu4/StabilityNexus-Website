import Link from "next/link"

export default function CallToAction() {
  return (
    <section className="mt-20 bg-gradient-to-t from-primary via-info to-secondary">
      <div className="mx-auto w-full max-w-7xl items-center px-8 py-10 md:px-12 lg:px-24 lg:py-28">
        <div className="mx-auto max-w-6xl text-center">
          <p className="mt-4 text-4xl font-medium tracking-tighter lg:text-7xl">
            Stability Matters!
          </p>
          <p className="mx-auto mt-4 max-w-xl text-lg">
            If you are or would like to be working on stability-related
            projects, let&apos;s work together. The synergy of our joint efforts
            is key to catalyzing positive change.
          </p>
          <div className="mt-10 flex w-full justify-center">
            <Link
              href="https://discord.gg/YzDKeEfWtS"
              className="relative flex h-11 w-full items-center justify-center px-6 before:absolute before:inset-0 before:rounded-full before:bg-secondary before:transition before:duration-300 hover:before:scale-105 active:duration-75 active:before:scale-95 sm:w-max"
            >
              <span className="relative text-lg font-semibold text-black">
                Join us in Discord
              </span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

export function CallToActionResearch() {
  return (
    <section className="mt-28 bg-gradient-to-t from-primary via-info to-secondary">
      <div className="mx-auto w-full max-w-7xl items-center px-8 py-10 md:px-12 lg:px-24 lg:py-28">
        <div className="mx-auto max-w-6xl text-center">
          <p className="mt-4 text-4xl font-medium tracking-tighter lg:text-7xl">
            The Stability Research Network
          </p>
          <p className="mx-auto mt-4 max-w-xl text-lg">
            The Stability Research Network (SRN) is the global network for
            researchers with a common interest on topics broadly related to
            stability.
          </p>
          <div className="mt-10 flex w-full justify-center">
            <Link
              href="https://discord.gg/RYarrEN2yB"
              className="relative flex h-11 w-full items-center justify-center px-6 before:absolute before:inset-0 before:rounded-full before:bg-secondary before:transition before:duration-300 hover:before:scale-105 active:duration-75 active:before:scale-95 sm:w-max"
            >
              <span className="relative text-lg font-semibold text-black">
                Connect With The SRN
              </span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
