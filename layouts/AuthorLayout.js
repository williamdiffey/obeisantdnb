import SocialIcon from '@/components/social-icons'
import Image from '@/components/Image'
import { PageSEO } from '@/components/SEO'

export default function AuthorLayout({ children, frontMatter }) {
  const { name, avatar, occupation, company, email, twitter, linkedin, github } = frontMatter

  return (
    <>
      <PageSEO title={`About - ${name}`} description={`About me - ${name}`} />
      <div className="divide-y divide-gray-200 dark:divide-gray-700">
        <div className="space-y-2 pt-6 pb-8 md:space-y-5">
          <h1 className="py-2 text-center text-3xl uppercase leading-9 text-lime-400 dark:text-lime-400 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14 lg:text-5xl">
            Who is Obeisant?
          </h1>
        </div>
        <div className="items-start space-y-2 xl:grid xl:grid-cols-3 xl:gap-x-8 xl:space-y-0">
          <div className="flex flex-col items-center pt-8">
            <Image src={avatar} alt="avatar" width="192px" height="230px" className="" />
            {/* <h3 className="pt-4 pb-2 text-2xl   leading-8 tracking-tight">{name}</h3>
            <div className="text-gray-500 dark:text-gray-400">{occupation}</div>
            <div className="text-gray-500 dark:text-gray-400">{company}</div> */}
            <div className="flex space-x-3">
              <SocialIcon kind="mail" href={`mailto:${email}`} />
              <SocialIcon kind="github" href={github} />
              <SocialIcon kind="linkedin" href={linkedin} />
              <SocialIcon kind="twitter" href={twitter} />
            </div>
          </div>
          <div className="prose mb-7 max-w-none px-3 pt-8 font-thin leading-normal dark:prose-dark lg:leading-tight xl:col-span-2">
            {children}
          </div>
        </div>
      </div>
    </>
  )
}
