import { headers as getHeaders } from 'next/headers.js'
import Image from 'next/image'
import { getPayload } from 'payload'
import React from 'react'
import { fileURLToPath } from 'url'

import config from '@/payload.config'
import { Page } from '@/payload-types'
import HeroBlock from './components/HeroBlock'
// import './styles.css'

export default async function HomePage() {
  const headers = await getHeaders()
  const payloadConfig = await config
  const payload = await getPayload({ config: payloadConfig })
  const { user } = await payload.auth({ headers })

  const fileURL = `vscode://file/${fileURLToPath(import.meta.url)}`

  const {
    docs: [page],
  } = await payload.find({
    collection: 'pages',
    where: {
      slug: { equals: 'landing-page' },
    },
  })

  if (!page) {
    return <div>Page not found</div>
  }

  // # loops through the blocks
  const renderBlock = (block: Page['layout']) => {
    switch (block.blockType) {
      case 'hero':
        return <HeroBlock block={block} key={block.id} />
      default:
        return null
    }
  }

  return (
    <div>
      {/* {page.title} */}
      {/* <p>{JSON.stringify(page.layout[0], null, 2)}</p> */}
      <div className="page">{page.layout?.map((block) => renderBlock(block))}</div>
    </div>
  )
}
