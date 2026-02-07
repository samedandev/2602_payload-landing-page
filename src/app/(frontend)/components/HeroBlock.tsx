import { Page } from '@/payload-types'
import { RichText } from '@payloadcms/richtext-lexical/react'
import Image from 'next/image'

export default function HeroBlock({ block }: { block: Page['layout'][0] }) {
  return (
    <div>
      <h1>{block.heading}</h1>
      {/* <div dangerouslySetInnerHTML={{ __html: block.subheading }} /> */}
      <RichText data={block.subheading} />

      {typeof block?.image === 'object' && block.image.url && (
        <Image src={block.image.url} alt={block.image.alt} width={80} height={60} />
      )}

      <a href={block.CTA_button.url}>{block.CTA_button.label}</a>
    </div>
  )
}
