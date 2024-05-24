import { MDXRemote } from 'next-mdx-remote/rsc'

import React from 'react'
import YouTube from './components/youtube'
import { createHeading } from './components/heading'
import { Code } from './components/code'
import { CustomLink } from './components/link'
import { RoundedImage } from './components/image'
import { QuebecFlag } from './components/quebec-flag'
import { Timeline } from './components/timeline'
import { WeightedtItem, WeightedtItemsSection } from './components/weighted-items'
import { SideBySide } from './components/side-by-side'
import { Badge } from 'lib/components/badge'

let components = {
  h1: createHeading(1),
  h2: createHeading(2),
  h3: createHeading(3),
  h4: createHeading(4),
  h5: createHeading(5),
  h6: createHeading(6),
  RoundedImage: RoundedImage,
  a: CustomLink,
  code: Code,
  YouTube,
  QuebecFlag,
  Timeline,
  WeightedtItem,
  WeightedtItemsSection,
  SideBySide,
  Badge,
}

export function CustomMDX(props) {
  return (
    <MDXRemote
      {...props}
      // eslint-disable-next-line react/prop-types
      components={{ ...components, ...(props.components || {}) }}
    />
  )
}
