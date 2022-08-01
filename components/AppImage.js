import { useState } from 'react'

import Image from 'next/image'

const defaultColor = ['#27AE60', '#03A9F4', '#023047', '#7dae27', '#27ae9b', '#9d27ae']

const AppImage = (props) => {
  const { src, alt = '', ...rest } = props
  const [imgSrc, setImgSrc] = useState(false)
  const [oldSrc, setOldSrc] = useState(src)
  if (oldSrc !== src) {
    setImgSrc(false)
    setOldSrc(src)
  }
  return (
    <>
      {!imgSrc ? (
        <Image
          alt={alt}
          {...rest}
          width={'512px'}
          height={'512px'}
          src={imgSrc ? '' : src}
          onError={() => {
            setImgSrc(true)
          }}
        />
      ) : (
        <div className={`relative ${rest.className}`}>
          <svg viewBox="0 0 168 168" fill="white" xmlns="http://www.w3.org/2000/svg">
            <rect width="100%" height="100%" fill={defaultColor[alt.length % 6]} />
            <text x="20" y="138" className="text-9xl text-white font-bold">
              {alt.toUpperCase()[0]}
            </text>
          </svg>
        </div>
      )}
    </>
  )
}

export default AppImage
