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

      <div className="flex justify-center">
        <Image
          className="rounded-xl"
          src="/static/images/SebSpire.jpg"
          alt="photo of Seb in front of a spire"
          width={400}
          height={260}
        />
      </div>

      {/* mobile logo */}
      {/* <div className="ml-auto mr-auto block w-1/4 animate-flicker">
        <Image src="/static/images/FPlogo.png" alt="logo" width={200} height={230} />
      </div> */}

      <h1 className="text-1 animate-glitch py-2 text-center uppercase leading-10 text-lime-400 dark:text-lime-400 sm:text-4xl sm:leading-10 md:text-xl md:leading-14">
        Mixing | Mastering | Tuition
      </h1>

      {/* desktop logo */}
      <div className="flex">
        {/* <div className="hidden place-items-center p-3 md:flex">
          <Image src="/static/images/FPlogo.png" alt="logo" width={100} height={115} />
        </div> */}

        <div className="text-md mt-2 mb-4 px-7 font-thin leading-tight">
          Obeisant (Sebastian Gawlik) is a Drum n Bass and Electronica Producer, Recording, Mixing,
          & Mastering Engineer, and Educator from Hamilton, NZ. Sebastian promises top quality
          Mixing & Mastering services using the industry leading tools, with a selection of
          specialty hardware that can be used for added colour and flare.
          <br /> <br /> Check out our{' '}
          <Link href="/mastering" className="text-lime-400">
            Mixing & Mastering,{' '}
          </Link>
          up your skills with some{' '}
          <Link href="/tuition" className="text-lime-400">
            Tuition{' '}
          </Link>
          or{' '}
          <Link href="contact" className="text-lime-400">
            Get in Touch
          </Link>{' '}
          to discuss bespoke projects.
        </div>
      </div>

      <button className="ml-auto mr-auto block w-3/4 rounded-md bg-primary-500 py-2 px-4 font-medium text-white sm:py-0">
        <Link href="/contact">Contact Now</Link>
      </button>
    </>
  )
}
