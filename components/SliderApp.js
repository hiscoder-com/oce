import { useState } from 'react'

import Carousel from 'react-simply-carousel'

import SliderAppCard from '../components/SliderAppCard'

function SliderApp({ apps, forwardBtnProps, backwardBtnProps }) {
  const [activeSlide, setActiveSlide] = useState(0)

  return (
    <Carousel
      containerProps={{
        style: {
          width: '100%',
          justifyContent: 'space-between',
          userSelect: 'text',
        },
      }}
      activeSlideIndex={activeSlide}
      onRequestChange={setActiveSlide}
      forwardBtnProps={
        forwardBtnProps ?? {
          children: '>',
          style: {
            width: 60,
            height: 60,
            minWidth: 60,
            alignSelf: 'center',
          },
        }
      }
      backwardBtnProps={
        backwardBtnProps ?? {
          children: '<',
          style: {
            border: 0,
            borderRadius: 99,
            width: 60,
            height: 60,
            minWidth: 60,
            alignSelf: 'center',
          },
        }
      }
      itemsToShow={3}
      speed={500}
    >
      {apps &&
        apps.map((el, key) => {
          return <SliderAppCard key={key} app={el} />
        })}
    </Carousel>
  )
}

export default SliderApp
