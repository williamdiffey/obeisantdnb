import Link from '@/components/Link'
import { PageSEO } from '@/components/SEO'
import Tag from '@/components/Tag'
import siteMetadata from '@/data/siteMetadata'
import { getAllFilesFrontMatter } from '@/lib/mdx'
import Image from 'next/image'
import formatDate from '@/lib/utils/formatDate'

import NewsletterForm from '@/components/NewsletterForm'

const MAX_DISPLAY = 5

export async function getStaticProps() {
  const posts = await getAllFilesFrontMatter('blog')

  return { props: { posts } }
}

export default function Home({ posts }) {
  return (
    <>
      <PageSEO title={siteMetadata.title} description={siteMetadata.description} />
      {/* <h1 className="text-1xl text-center font-extrabold uppercase leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
        Obeisant
      </h1> */}

      <div className="flex justify-center lg:my-1 lg:w-full">
        <Image
          className=""
          src="/static/images/SebSpire.png"
          alt="photo of Seb in front of a spire"
          width={853}
          height={853}
        />
      </div>

      {/* <div className="hidden justify-center sm:flex">
        <Image
          className=""
          src="/static/images/logowhite.png"
          alt="obeisant logo"
          width={400}
          height={60}
        />
      </div> */}

      {/* mobile logo */}
      {/* <div className="ml-auto mr-auto block w-1/4 animate-flicker">
        <Image src="/static/images/FPlogo.png" alt="logo" width={200} height={230} />
      </div> */}

      {/* <h2 className="text-1 animate-glitch py-2 text-center uppercase leading-10 text-lime-400 dark:text-lime-400 sm:my-8 lg:my-1">
        Mixing | Mastering | Tuition
      </h2> */}

      {/* desktop logo */}
      <div className="flex">
        {/* <div className="hidden place-items-center p-3 md:flex">
          <Image src="/static/images/FPlogo.png" alt="logo" width={100} height={115} />
        </div> */}

        <div className="text-md mt-2 mb-4 px-7 font-thin leading-tight sm:mx-32 sm:leading-loose lg:mb-20 lg:mt-10 lg:text-xl lg:leading-normal">
          Obeisant (Sebastian Gawlik) is a Drum n Bass and Electronica Producer, Mixing, & Mastering
          Engineer, and Educator with 20 years of experience, hailing from Hamilton, New Zealand.
          <br />
          <Link href="/about" className="text-lime-400">
            (Read more){' '}
          </Link>
        </div>
      </div>

      <button className="ml-auto mr-auto block w-3/4 rounded-md bg-primary-500 py-2 px-4 font-medium text-white sm:mt-8 sm:w-1/2 sm:py-2 lg:mt-1">
        <Link href="/contact">Contact Now</Link>
      </button>
    </>
  )
}
