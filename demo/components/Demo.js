
import React from 'react'
import styled from 'styled-components'

import { Row } from '../../src/index'
import Box from './Box'

const Section = styled(p =>
  <section className={p.className}>
    <h2>{p.title}</h2>
    <p>{p.description}</p>
    {p.children}
  </section>
)`
  padding-top: 3rem;
`

import responsiveMD from 'html-loader!markdown-loader!../md/responsive.md'
import offsetMD from 'html-loader!markdown-loader!../md/offset.md'
import autoWidthMD from 'html-loader!markdown-loader!../md/auto-width.md'
import alignStartMD from 'html-loader!markdown-loader!../md/align-start.md'
import alignCenterMD from 'html-loader!markdown-loader!../md/align-center.md'
import alignEndMD from 'html-loader!markdown-loader!../md/align-end.md'
import alignTopMD from 'html-loader!markdown-loader!../md/align-top.md'
import alignMiddleMD from 'html-loader!markdown-loader!../md/align-middle.md'
import alignBottomMD from 'html-loader!markdown-loader!../md/align-bottom.md'
import distAroundMD from 'html-loader!markdown-loader!../md/dist-around.md'
import distBetweenMD from 'html-loader!markdown-loader!../md/dist-between.md'
import hideMD from 'html-loader!markdown-loader!../md/hide.md'
import reverseMD from 'html-loader!markdown-loader!../md/reverse.md'

import Markdown from './Markdown'

const Demo = props => (
  <div>
    <Section
      title='Responsive'
      description='Responsive modifiers enable specifying different column sizes, offsets, alignment and distribution at xs, sm, md & lg viewport widths.'>
      <Row>
        <Box type='row' xs={12} sm={3} md={2} lg={1} />
        <Box type='row' xs={6} sm={6} md={8} lg={10} />
        <Box type='row' xs={6} sm={3} md={2} lg={1} />
      </Row>
      <Row>
        <Box type='row' xs={12} sm={3} md={2} lg={1} />
        <Box type='row' xs={12} sm={9} md={10} lg={11} />
      </Row>
      <Row>
        <Box type='row' xs={10} sm={6} md={8} lg={10} />
        <Box type='row' xs={2} sm={6} md={4} lg={2} />
      </Row>
      <Row>
        <Markdown html={responsiveMD} />
      </Row>
    </Section>
    <Section title='Reverse' description='Responsive reverse column order.'>
      <Row reverse="md">
        <Box type='row' xs={2} />
        <Box type='row' xs={10} />
      </Row>
      <Row>
        <Markdown html={reverseMD} />
      </Row>
    </Section>
    <Section title='Offsets' description='Offset a column.'>
      <Row>
        <Box type='row' xsOffset={11} xs={1} />
        <Box type='row' xsOffset={10} xs={2} />
        <Box type='row' xsOffset={9} xs={3} />
        <Box type='row' xsOffset={8} xs={4} />
        <Box type='row' xsOffset={7} xs={5} />
        <Box type='row' xsOffset={6} xs={6} />
        <Box type='row' xsOffset={5} xs={7} />
        <Box type='row' xsOffset={4} xs={8} />
        <Box type='row' xsOffset={3} xs={9} />
        <Box type='row' xsOffset={2} xs={10} />
        <Box type='row' xsOffset={1} xs={11} />
      </Row>
      <Row>
        <Markdown html={offsetMD} />
      </Row>
    </Section>
    <Section title='Auto Width' description='Add any number of auto sizing columns to a row. Let the grid figure it out.'>
      <Row>
        <Box type='row' xs />
        <Box type='row' xs />
      </Row>
      <Row>
        <Box type='row' xs />
        <Box type='row' xs />
        <Box type='row' xs />
      </Row>
      <Row>
        <Markdown html={autoWidthMD} />
      </Row>
    </Section>
    <Section title='Alignment' description='Add classes to align elements to the start or end of row as well as the top, bottom, or center of a column'>
      <h3><code>.start-</code></h3>
      <Row>
        <Box type='container' xs={12}>
          <Row start='xs'>
            <Box type='nested' xs={6} />
          </Row>
        </Box>
      </Row>
      <Row>
        <Markdown html={alignStartMD} />
      </Row>
      <h3><code>.center-</code></h3>
      <Row>
        <Box type='container' xs={12}>
          <Row center='xs'>
            <Box type='nested' xs={6} />
          </Row>
        </Box>
      </Row>
      <Row>
        <Markdown html={alignCenterMD} />
      </Row>
      <h3><code>.end-</code></h3>
      <Row>
        <Box type='container' xs={12}>
          <Row end='xs'>
            <Box type='nested' xs={6} />
          </Row>
        </Box>
      </Row>
      <Row>
        <Markdown html={alignEndMD} />
      </Row>
      <h3><code>.top-</code></h3>
      <Row top='xs'>
        <Box type='large' xs={6} />
        <Box xs={6} />
      </Row>
      <Row>
        <Markdown html={alignTopMD} />
      </Row>
      <h3><code>.middle-</code></h3>
      <Row middle='xs'>
        <Box type='large' xs={6} />
        <Box xs={6} />
      </Row>
      <Row>
        <Markdown html={alignMiddleMD} />
      </Row>
      <h3><code>.bottom-</code></h3>
      <Row bottom='xs'>
        <Box type='large' xs={6} />
        <Box xs={6} />
      </Row>
      <Row>
        <Markdown html={alignBottomMD} />
      </Row>
    </Section>
    <Section title='Distribution' description='Add classes to distribute the contents of a row or column.'>
      <h3><code>.around-</code></h3>
      <Row>
        <Box type='container' xs={12}>
          <Row around='xs'>
            <Box type='nested' xs={2} />
            <Box type='nested' xs={2} />
            <Box type='nested' xs={2} />
          </Row>
        </Box>
      </Row>
      <Row>
        <Markdown html={distAroundMD} />
      </Row>
      <h3><code>.between-</code></h3>
      <Row>
        <Box type='container' xs={12}>
          <Row between='xs'>
            <Box type='nested' xs={2} />
            <Box type='nested' xs={2} />
            <Box type='nested' xs={2} />
          </Row>
        </Box>
      </Row>
      <Row>
        <Markdown html={distBetweenMD} />
      </Row>
    </Section>
    <Section title='Hide' description='You can simply hide some elements for a given breakpoint by passing `false` to the breakpoint properties.'>
      <Row>
        <Box xs={12} md={6} />
        <Box xs={false} md={6} />
      </Row>
      <Row>
        <Markdown html={hideMD} />
      </Row>
    </Section>
  </div>
)

export default Demo
