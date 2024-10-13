import Link from "next/link"

interface Props {
  heading: string;
  text: string;
  link: string;
  linkText: string;
}

const CTA: React.FC<Props> = ( { heading, text, link, linkText } ) => {
  return (
    <section className="mt-20 bg-gradient-to-t from-primary via-info to-secondary">
      <div className="mx-auto w-full max-w-7xl items-center px-8 py-10 md:px-12 lg:px-24 lg:py-28">
        <div className="mx-auto max-w-6xl text-center">
          <p className="mt-4 text-4xl font-medium tracking-tighter lg:text-7xl">
            {heading}
          </p>
          <p className="mx-auto mt-4 max-w-xl text-lg">
            {text}
          </p>
          <div className="mt-10 flex w-full justify-center">
            <Link
              href={link}
              className="relative flex h-11 w-full items-center justify-center px-6 before:absolute before:inset-0 before:rounded-full before:bg-secondary before:transition before:duration-300 hover:before:scale-105 active:duration-75 active:before:scale-95 sm:w-max"
            >
              <span className="relative text-lg font-semibold text-black">
                {linkText}
              </span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
};

export default CTA;