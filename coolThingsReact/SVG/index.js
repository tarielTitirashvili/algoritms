import React, { useState } from 'react'

const CoolSVG = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)
  const [sunHovered, setSunHovered] = useState(false)
  const color = sunHovered ? '#F94B00' : '#000000'
  return (
    <div className="flex w-full h-90 align-middle justify-center gap-4 flex-col items-center">
      {/* burger menu */}
      <svg width="200" height="200" viewBox="0 0 100 100">
        <path
          d="
              M 12, 25 L 88, 25
              M 12, 50 L 88, 50
              M 12, 75 L 88, 75
              "
          className={`line ${isSidebarOpen ? 'line-active' : ''}`}
        />
      </svg>
      <button
        onClick={() => setIsSidebarOpen(!isSidebarOpen)}
        className="bg-red-500 text-white px-4 py-2 rounded-md"
      >
        Click me
      </button>
      {/* SUN */}
      <svg
        width="150"
        height="150"
        viewBox="-15 -15 30 30"
        className={`sun ${sunHovered ? 'active_sun' : ''} cursor-pointer`}
        onMouseEnter={() => {
          setSunHovered(true)
        }}
        onMouseLeave={() => {
          setSunHovered(false)
        }}
      >
        <circle r="6" />
        <path d="M 0, 10 L 0, 14" id="sun_line" stroke={color} />
        <use href="#sun_line" stroke={color} transform="rotate(45)" />
        <use href="#sun_line" stroke={color} transform="rotate(90)" />
        <use href="#sun_line" stroke={color} transform="rotate(135)" />
        <use href="#sun_line" stroke={color} transform="rotate(180)" />
        <use href="#sun_line" stroke={color} transform="rotate(225)" />
        <use href="#sun_line" stroke={color} transform="rotate(270)" />
        <use href="#sun_line" stroke={color} transform="rotate(315)" />
      </svg>

      <svg width="100" height="400" viewBox="-80 -50 160 160" className="windmill">
        <g id="windmill-head">
          <circle r="10" />
          <path
            id="arm"
            d="
            M -7 -20
            C -7 -10 7 -10 7 -20
            L 2 -80
            L -2 -80
            "
          />
          <use href="#arm" transform="rotate(120)" />
          <use href="#arm" transform="rotate(240)" />
        </g>
        <path d="M -10 150 L 7 150 L 5 15 L -5 15" />
      </svg>
    </div>
  )
}

export default CoolSVG
