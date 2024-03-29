import Link from './Link'
import siteMetadata from '@/data/siteMetadata'
import SocialIcon from '@/components/social-icons'

export default function Footer() {
  return (
    <footer>
      <div className="mt-5 flex flex-col items-center">
        <div className="mb-3 flex space-x-4 lg:space-x-16">
          {/* <SocialIcon kind="github" href={siteMetadata.github} size="6" /> */}

          {/* <SocialIcon kind="linkedin" href={siteMetadata.linkedin} size="6" /> */}
          {/* <SocialIcon kind="twitter" href={siteMetadata.twitter} size="6" /> */}

          <SocialIcon kind="youtube" href={siteMetadata.youtube} size="8" />
          <SocialIcon kind="bandcamp" href={siteMetadata.bandcamp} size="8" />
          <SocialIcon kind="spotify" href={siteMetadata.spotify} size="8" />
          <SocialIcon kind="soundcloud" href={siteMetadata.soundcloud} size="8" />
          <SocialIcon kind="facebook" href={siteMetadata.facebook} size="8" />
          <SocialIcon kind="instagram" href={siteMetadata.instagram} size="8" />
          <SocialIcon kind="mail" href={`mailto:${siteMetadata.email}`} size="8" />
        </div>
        <div className="mb-2 flex space-x-2 text-sm text-gray-500 dark:text-gray-400">
          {/* <div>{siteMetadata.author}</div> */}
          <Link href="/">© {siteMetadata.title}</Link>
          <div>{` ${new Date().getFullYear()}`}</div>
        </div>
        <div className="mb-8 text-sm text-gray-500 dark:text-gray-400"></div>
      </div>
    </footer>
  )
}
