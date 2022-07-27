import React from 'react'

function Labels() {
  function stringToHash(string) {
    var hash = 0

    if (string.length == 0) return hash

    for (let i = 0; i < string.length; i++) {
      const char = string.charCodeAt(i)
      console.log(char)
      hash = (hash << 5) - hash + char
      hash = hash & hash
    }

    return hash
  }
  // function getBackgroundColor(stringInput) {
  //   let stringUniqueHash = [...stringInput].reduce((acc, char) => {
  //     return char.charCodeAt(0) + ((acc << 5) - acc)
  //   }, 0)
  //   return `hsl(${stringUniqueHash % 360}, 95%, 35%)`
  // }

  return <Label label="react" />
}

function Label({ label }) {
  function getBackgroundColor(string) {
    const h = [...label].reduce((acc, char) => {
      return char.charCodeAt(0) + ((acc << 5) - acc)
    }, 0)
    const s = 95,
      l = 35 / 100
    const a = (s * Math.min(l, 1 - l)) / 100
    const f = (n) => {
      const k = (n + h / 30) % 12
      const color = l - a * Math.max(Math.min(k - 3, 9 - k, 1), -1)
      return Math.round(255 * color)
        .toString(16)
        .padStart(2, '0') // convert to Hex and prefix "0" if needed
    }
    return `#${f(0)}${f(8)}${f(4)}`
  }
  console.log(getBackgroundColor(label))
  return (
    <div className={`p-1 uppercase bg-[${getBackgroundColor(label)}] w-fit rounded-md`}>
      {label}
    </div>
  )
}

export default Labels
