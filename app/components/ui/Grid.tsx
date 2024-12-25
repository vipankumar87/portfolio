import React from 'react'
import { BentoGrid, BentoGridItem } from './BentoGrid'
import { gridItems } from '@rudra/data'

const Grid = () => {
  return <>
    <section id='about'>
        <BentoGrid>
            {
                gridItems.map((item, i)=>(
                    <BentoGridItem
                        id={item.id}
                        key={item.id}
                        title={item.title}
                        description={item.description}
                    />
                ))
            }
        </BentoGrid>
    </section>
  </>
}

export default Grid
