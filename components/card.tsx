import Link from "next/link"
import Image from "next/image"

interface Props {
  index: number;
  image: string;
  title: string;
  description: string;
  link: string;
}

const Card: React.FC<Props> = ( { index, image, title, description, link } ) => {
  return (
    <div
      key={index}
      className="group relative flex h-auto flex-col justify-evenly rounded-lg border border-zinc-200 p-6 shadow-xl"
    >
      <div className="relative h-fit overflow-hidden rounded-md">
        <Image
          src={image}
          alt="Protocol Logo"
          loading="lazy"
          width="700"
          height="700"
          className="h-64 w-full object-contain transition duration-500 group-hover:scale-105"
        />
      </div>
      <div className="relative mt-4 h-fit">
        <h3 className="text-2xl  font-semibold leading-6 tracking-tight text-gray-800 text-center">
          {title}
        </h3>
        <p className="mb-6 mt-2 text-black text-center">
          {description.split("\n").map((item, key) => {
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
          href={link}
          className="relative flex items-center justify-center px-3 py-1 before:absolute before:inset-0 before:rounded-full before:border before:border-transparent before:bg-secondary/30 before:bg-gradient-to-b before:transition before:duration-300 hover:before:scale-105 active:duration-75 active:before:scale-95 sm:w-max"
        >
          <span className="relative text-base font-medium text-black">
            Learn more
          </span>
        </Link>
      </div>
    </div>
  )
};

export default Card;