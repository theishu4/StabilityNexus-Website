import Container from "@/components/container"
// import { CallToActionResearch } from "@/components/cta"
import CTA from "@/components/cta"
import Image from "next/image"
import Link from "next/link"

const featuredPapers = [
  {
    title: "Stablecoin",
    description: `Bruno Woltzenlogel Paleo, PhD \n Encyclopedia of Cryptography, Security and Privacy`,
    date: "31st May 2023",
    image: "./papers/encyclopedia.png",
  },
  {
    title:
      "Djed: A Formally Verified Crypto-Backed Autonomous Stablecoin Protocol",
    description:
      "J. Zahnentferner, D. Kaidalov, J.-F. Etienne, J. Diaz  \n IEEE International Conference on Blockchain and Cryptocurr.",
    date: "3rd May 2023",
    image: "./papers/ieee.png",
  },
  {
    title: "Potential Points of Failure of Stablecoins",
    description:
      "M. Kakebayashi, A. Nejadmalayeri, A. Bracciali, B. W. Paleo, C. White, G. Weinstein, J. Nabrzyski, K. Katayama, L. Molchanovsky, M. Yamanaka, M. Travers, T. Yuyama, Y. Kawai",
    date: "25th Jul 2023",
    image: "./papers/bgin-failure.png",
  },
  {
    title: "Design and Formalization of Oracles for Blockchains",
    description:
      "M. Shaheer, Prof. G. Reis, B. Woltzenlogel Paleo  \n Types and LPAR",
    date: "12th Jun 2023",
    image: "./papers/oracle.png",
  },
  {
    title: "Stablecoins - Past, Present and Future",
    description:
      "Prof. A. Nejadmalayeri, L. Molchanovsky, B. Woltzenlogel Paleo, R. W. Prescott \n Workshop on Coordination of Decentralized Finance",
    date: "19th Oct 2022",
    image: "./papers/bgin.png",
  },
  {
    title: "Djed: A Formally-Verified Crypto-Backed Algorithmic Stablecoin",
    description: "J. Zahnentferner, D. Kaidalov, J.-E. Etienne, J. Diaz",
    date: "23rd Aug 2021",
    image: "./papers/djed.png",
  },
]

const featuredVideos = [
  {
    title: "The Gluon Stabilization Protocol",
    description: "Bruno Woltzenlogel Paleo, PhD",
    date: "3rd Jul 2023",
    image: "./videos/gluon.png",
  },
  {
    title: "Formalization of Blockchain Oracles in Coq",
    description: "Prof. Giselle Reis",
    date: "12th Jun 2023",
    image: "./videos/types.png",
  },
  {
    title: "Ideas for Improvements of the Djed Stablecoin Protocol",
    description: "Bruno Woltzenlogel Paleo, PhD",
    date: "11th Aug 2022",
    image: "./videos/improvements.png",
  },
  {
    title: "BGIN Stablecoin Panel",
    description: "Djed Alliance and Circle (USDC)",
    date: "2nd Aug 2022",
    image: "./videos/bgin.png",
  },
  {
    title: "Djed Stablecoin on Cardano",
    description: "David (IOG)",
    date: "27th Oct 2021",
    image: "./videos/cardano.png",
  },
  {
    title: "Overview of SigmaUSD's Smart Contracts",
    description: "Amitabh Saxeena",
    date: "23rd Jan 2021",
    image: "./videos/sigmausd.png",
  },
  {
    title: "The Release of Agenor",
    description: "Robert Kornacki",
    date: "23rd Jan 2021",
    image: "./videos/agenor.png",
  },
  {
    title: "A Pegged and Crypto-backed Algorithmic Stablecoin",
    description: "Bruno Woltzenlogel Paleo, PhD",
    date: "23rd Jan 2021",
    image: "./videos/djed.png",
  },
  {
    title: "The Djed Stablecoin Protocol",
    description: "Djed Alliance",
    date: "13th Jul 2023",
    image: "./videos/whiteboard.png",
  },
]

export default function ResearchPage() {
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
        {/*
        <div className="relative z-20 mb-12 space-y-4 text-center">
          <h2 className="text-4xl font-bold text-black md:text-4xl">
            Insights from Our Research Network
          </h2>
          <p className="text-lg leading-6 text-black opacity-80 lg:mx-auto lg:w-6/12">
            
          </p>
        </div>
        */}
        <h2 className="mb-5 text-2xl font-bold text-black underline decoration-dashed underline-offset-4">
          Featured Papers
        </h2>
        <div className="mb-20 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {featuredPapers.map((paper, index) => (
            <div
              key={index}
              className="group relative flex h-full flex-col justify-evenly rounded-lg border border-zinc-200 p-6 shadow-xl"
            >
              <div className="relative h-fit overflow-hidden rounded-md">
                <Image
                  src={paper.image}
                  alt="Research paper cover"
                  loading="lazy"
                  width="1000"
                  height="667"
                  className="h-64 w-full transition duration-500 group-hover:scale-105"
                />
              </div>
              <div className="relative mt-4 h-fit">
                <h3 className="text-2xl  font-semibold leading-6 tracking-tight text-gray-800">
                  {paper.title}
                </h3>
                <div className="my-3 flex w-fit items-center gap-2 rounded-md bg-zinc-100 p-2">
                  <svg
                    viewBox="0 0 24 24"
                    height={20}
                    width={20}
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g id="SVGRepo_bgCarrier" strokeWidth="0" />
                    <g
                      id="SVGRepo_tracerCarrier"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <g id="SVGRepo_iconCarrier">
                      <path
                        opacity="0.2"
                        d="M3 10.312C3 5.93757 3.93757 5 8.312 5H15.688C20.0624 5 21 5.93757 21 10.312V15.688C21 20.0624 20.0624 21 15.688 21H8.312C3.93757 21 3 20.0624 3 15.688V10.312Z"
                        fill="#323232"
                      />
                      <path
                        d="M3 10.312C3 5.93757 3.93757 5 8.312 5H15.688C20.0624 5 21 5.93757 21 10.312V15.688C21 20.0624 20.0624 21 15.688 21H8.312C3.93757 21 3 20.0624 3 15.688V10.312Z"
                        stroke="#323232"
                        strokeWidth="2"
                      />
                      <path
                        d="M6 5L6 3"
                        stroke="#323232"
                        strokeWidth="2"
                        strokeLinecap="round"
                      />
                      <path
                        d="M18 5L18 3"
                        stroke="#323232"
                        strokeWidth="2"
                        strokeLinecap="round"
                      />
                      <path
                        d="M7 9H17"
                        stroke="#323232"
                        strokeWidth="2"
                        strokeLinecap="round"
                      />
                    </g>
                  </svg>
                  <span className="text-sm font-medium text-black">
                    {paper.date}
                  </span>
                </div>
                <p className="mb-6 mt-2 text-black">
                  {paper.description.split("\n").map((item, key) => {
                    return (
                      <span key={key}>
                        {item}
                        <br />
                      </span>
                    )
                  })}
                </p>
              </div>
              <Link
                href="https://docs.stability.nexus/stability-research-network/technical-papers"
                className="relative flex items-center justify-center px-3 py-1 before:absolute before:inset-0 before:rounded-full before:border before:border-transparent before:bg-secondary/30 before:bg-gradient-to-b before:transition before:duration-300 hover:before:scale-105 active:duration-75 active:before:scale-95 sm:w-max"
              >
                <span className="relative text-base font-medium text-black">
                  Learn more
                </span>
              </Link>
            </div>
          ))}
        </div>
        <h2 className="mb-5 mt-10 text-2xl font-bold text-black underline decoration-dashed underline-offset-4">
          Featured Videos
        </h2>
        <div className="mb-20 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {featuredVideos.map((video, index) => (
            <div
              key={index}
              className="group relative flex h-full flex-col justify-evenly rounded-lg border border-zinc-200 p-6 shadow-xl"
            >
              <div className="relative h-fit overflow-hidden rounded-md">
                <Image
                  src={video.image}
                  alt="Research video cover"
                  loading="lazy"
                  width="1000"
                  height="667"
                  className="h-64 w-full transition duration-500 group-hover:scale-105"
                />
              </div>
              <div className="relative mt-2 h-fit">
                <h3 className="text-2xl  font-semibold leading-6 tracking-tight text-gray-800">
                  {video.title}
                </h3>
                <div className="my-3 flex w-fit items-center gap-2 rounded-md bg-zinc-100 p-2">
                  <svg
                    viewBox="0 0 24 24"
                    height={20}
                    width={20}
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g id="SVGRepo_bgCarrier" strokeWidth="0" />
                    <g
                      id="SVGRepo_tracerCarrier"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <g id="SVGRepo_iconCarrier">
                      <path
                        opacity="0.2"
                        d="M3 10.312C3 5.93757 3.93757 5 8.312 5H15.688C20.0624 5 21 5.93757 21 10.312V15.688C21 20.0624 20.0624 21 15.688 21H8.312C3.93757 21 3 20.0624 3 15.688V10.312Z"
                        fill="#323232"
                      />
                      <path
                        d="M3 10.312C3 5.93757 3.93757 5 8.312 5H15.688C20.0624 5 21 5.93757 21
                        10.312V15.688C21 20.0624 20.0624 21 15.688 21H8.312C3.93757 21 3 20.0624 3
                        15.688V10.312Z"
                        stroke="#323232"
                        strokeWidth="2"
                      />
                      <path
                        d="M6 5L6 3"
                        stroke="#323232"
                        strokeWidth="2"
                        strokeLinecap="round"
                      />
                      <path
                        d="M18 5L18 3"
                        stroke="#323232"
                        strokeWidth="2"
                        strokeLinecap="round"
                      />
                      <path
                        d="M7 9H17"
                        stroke="#323232"
                        strokeWidth="2"
                        strokeLinecap="round"
                      />
                    </g>
                  </svg>
                  <span className="text-sm font-medium text-black">
                    {video.date}
                  </span>
                </div>
                <p className=" text-black">{video.description}</p>
              </div>
              {/* <Link
                href="#"
                className="relative flex items-center justify-center px-3 py-1 before:absolute before:inset-0 before:rounded-full before:border before:border-transparent before:bg-secondary/30 before:bg-gradient-to-b before:transition before:duration-300 hover:before:scale-105 active:duration-75 active:before:scale-95 sm:w-max"
              >
                <span className="relative text-base font-medium text-black">
                  Watch now
                </span>
              </Link> */}
            </div>
          ))}
        </div>
      </Container>
      <CTA 
        heading="The Stability Research Network"
        text="The Stability Research Network (SRN) is the global network for
            researchers with a common interest on topics related to
            stability."
        link="https://discord.gg/RYarrEN2yB"
        linkText="Connect With The SRN"
      />
    </div>
  )
}
