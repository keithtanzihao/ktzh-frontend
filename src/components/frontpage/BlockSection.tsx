import { Responsive, WidthProvider } from 'react-grid-layout'

import FilterCtn from 'components/ui/filter/FilterCtn'
import BlockProject from 'components/ui/block/BlockProject'

import styles from 'sass/main.module.scss'

import bg from 'sass/vendors/imgs/bg1.svg'
import yelpImg from 'sass/vendors/imgs/yelpImg.svg'
import selocImg from 'sass/vendors/imgs/selocImg.svg'
import dashImg from 'sass/vendors/imgs/dashImg.svg'


const ResponsiveGridLayout = WidthProvider(Responsive)

export default function BlockSection() {
  const items = ['All', 'Projects', 'Uni', 'Others']
  const layout = [
    { i: 'a', x: 0, y: 0, w: 6, h: 2 },
    { i: 'b', x: 0, y: 2, w: 6, h: 2 },
    { i: 'c', x: 6, y: 0, w: 6, h: 2 },
    { i: 'd', x: 6, y: 2, w: 6, h: 2 },
    { i: 'f', x: 0, y: 4, w: 6, h: 2 },
  ]

  const layouts = {
    lg: layout,
    md: layout,
    sm: layout,
    xs: layout,
    xxs: layout,
  }

  return (
    <div className={styles['bs']} id='blockSection'>

      <FilterCtn items={items}/>
      <div className={styles['bs__ctn']}>

        <ResponsiveGridLayout
          rowHeight={140}
          className={`${styles['bs__test']} layout`}
          layouts={layouts}
          breakpoints={{ lg: 1200, md: 996, sm: 768, xs: 480 }}
          cols={{ lg: 12, md: 10, sm: 6, xs: 4 }}
        >
          
          <div className={styles['bs__blk']} key="a">
            <BlockProject title='DASH' img={dashImg}/>
          </div>
          <div className={styles['bs__blk']} key="b">
            <BlockProject title='SELOC' img={selocImg}/>
          </div>
          <div className={styles['bs__blk']} key="c">
            <BlockProject title='YELPCAMP' img={yelpImg}/>
          </div>
          <div className={styles['bs__blk']} key="d">
            <BlockProject title='COMP3419' img={bg}/>
          </div>
          {/* <div className={styles['bs__blk']} key="d">
            <BlockProject title='COMP3419' img={bg}/>
          </div> */}

        </ResponsiveGridLayout>
      </div>
    </div>
  )
}
