import { Page } from '@/payload-types'
import { RichText } from '@payloadcms/richtext-lexical/react'
import Image from 'next/image'
import Link from 'next/link'

export default function HeroBlock({ block }: { block: Page['layout'][0] }) {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        border: '1px solid red',
        padding: '20px',
      }}
    >
      <h1>{block.heading}</h1>
      {/* <div dangerouslySetInnerHTML={{ __html: block.subheading }} /> */}
      <RichText data={block.subheading} />

      {typeof block?.image === 'object' && block.image.url && (
        <Image src={block.image.url} alt={block.image.alt} width={400} height={3000} />
      )}
      <Link
        style={{
          textDecoration: 'none',
          backgroundColor: 'blue',
          color: 'white',
          padding: '10px 20px',
          borderRadius: '5px',
          display: 'inline-block',
          marginTop: '20px',
        }}
        href={block.CTA_button.url}
      >
        {block.CTA_button.label}
      </Link>
    </div>
  )
}
