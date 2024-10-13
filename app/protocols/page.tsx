import Container from "@/components/container"
import CTA from "@/components/cta"
import Image from "next/image"
import Link from "next/link"

const protocols = [
  {
    title: "Djed",
    description: `Stablecoin Protocol`,
    image: "./logos/djed.png",
    link: "https://djed.one",
  },
  {
    title: "Gluon",
    description: "Stablecoin Protocol",
    image: "./logos/gluon.png",
    link: "https://gluon.gold",
  },
  {
    title: "hodlCoin",
    description: "Staking Protocol",
    image: "./logos/hodlcoin.png",
    link: "https://hodlcoin.co.in",
  },
  {
    title: "Destiny",
    description: "Prediction Pools",
    image: "./logos/destiny.png",
    link: "https://forecast.bid",
  }
]

export default function ProtocolsPage() {
  return (
    <div className="relative pt-36">
      <div
        aria-hidden="true"
        className="absolute inset-0 grid grid-cols-2 -space-x-52 opacity-40"
      >
        <div className="h-56 bg-gradient-to-r from-primary via-info to-secondary blur-[100px]"></div>
        <div className="h-56 bg-gradient-to-r from-secondary via-info to-primary blur-[100px]"></div>
      </div>
      <Container>
        <div className="relative z-20 mb-12 space-y-4 text-center">
          <h2 className="text-4xl font-bold text-black md:text-4xl">
            Protocols <br /> Researched and Developed <br /> by The Stable Order
          </h2>
          <p className="text-lg leading-6 text-black opacity-80 lg:mx-auto lg:w-6/12">
            
          </p>
        </div>
         {/*
        <h2 className="mb-5 text-2xl font-bold text-black underline decoration-dashed underline-offset-4">
          Protocols
        </h2>
        */}
        <div className="mb-20 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {protocols.map((protocol, index) => (
            <div
              key={index}
              className="group relative flex h-auto flex-col justify-evenly rounded-lg border border-zinc-200 p-6 shadow-xl"
            >
              <div className="relative h-fit overflow-hidden rounded-md">
                <Image
                  src={protocol.image}
                  alt="Protocol Logo"
                  loading="lazy"
                  width="700"
                  height="700"
                  className="h-64 w-full object-contain transition duration-500 group-hover:scale-105"
                />
              </div>
              <div className="relative mt-4 h-fit">
                <h3 className="text-2xl  font-semibold leading-6 tracking-tight text-gray-800 text-center">
                  {protocol.title}
                </h3>
                <p className="mb-6 mt-2 text-black text-center">
                  {protocol.description.split("\n").map((item, key) => {
                    return (
                      <span key={key}>
                        {item}
                        <br />
                      </span>
                    )
                  })}
                </p>
              </div>
              <div className="flex items-center justify-center text-center">
                <Link
                  href={protocol.link}
                  className="relative flex items-center justify-center px-3 py-1 before:absolute before:inset-0 before:rounded-full before:border before:border-transparent before:bg-secondary/30 before:bg-gradient-to-b before:transition before:duration-300 hover:before:scale-105 active:duration-75 active:before:scale-95 sm:w-max"
                >
                  <span className="relative text-base font-medium text-black">
                    Learn more
                  </span>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </Container>
      <CTA 
        heading="The Stable Order"
        text="The Stable Order is a decentralized organization of knights and benefactors devoted to stability."
        link="https://docs.stability.nexus/about-us/the-stable-order/join-the-stable-order"
        linkText="Join the Stable Order"
      />
    </div>
  )
}
