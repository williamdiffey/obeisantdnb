import siteMetadata from '@/data/siteMetadata'
import projectsData from '@/data/projectsData'
import Card from '@/components/Card'
import { PageSEO } from '@/components/SEO'
import Link from '@/components/Link'

export default function Projects() {
  return (
    <>
      <PageSEO title={`Projects - ${siteMetadata.author}`} description={siteMetadata.description} />
      <div className="divide-y divide-gray-200 dark:divide-gray-700">
        <div className="space-y-2 pt-6 pb-8 md:space-y-5">
          <h1 className="py-4 text-center text-3xl uppercase leading-9 text-lime-400 dark:text-lime-400 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14 lg:text-5xl">
            Discography
          </h1>
          <p>
            <button className="ml-auto mr-auto block w-3/4 rounded-md bg-primary-500 py-2 px-4 font-medium text-white sm:mt-2 sm:w-1/2 sm:py-2 lg:mt-1">
              Contact Now
            </button>
          </p>
          <p className="text-lg leading-7 text-gray-500 dark:text-gray-400">
            Recent Releases from Obeisant
          </p>
        </div>
        <div className="container py-12">
          <div className="-m-4 flex flex-wrap">
            {projectsData.map((d) => (
              <Card
                key={d.title}
                title={d.title}
                description={d.description}
                imgSrc={d.imgSrc}
                href={d.href}
              />
            ))}
          </div>
        </div>
        <p>
          <button className="ml-auto mr-auto block w-3/4 rounded-md bg-primary-500 py-2 px-4 font-medium text-white sm:mt-2 sm:w-1/2 sm:py-2 lg:mt-1">
            Contact Now
          </button>
        </p>
        <button className="ml-auto mr-auto block w-3/4 rounded-md bg-primary-500 py-2 px-4 font-medium text-white sm:mt-8 sm:w-1/2 sm:py-2 lg:mt-1">
          <Link href="/">Back Home</Link>
        </button>
      </div>
    </>
  )
}
