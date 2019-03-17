import React from 'react'
import Carousel from 'nuka-carousel';

const Hero = ({ items }) => (
  <ul className="hero">
    <Carousel>
      {items.map((item, i) => (
        <div key={i} className="wrapper" style={{ backgroundImage: `url(${item.image.childImageSharp.fluid.src})` }}>
          <div className="window-centered">
            <h3>{item.subtitle}</h3>
            <h2>{item.title}</h2>
            <p>{item.description}</p>
          </div>
        </div>
      ))}
    </Carousel>
  </ul>
)

export default Hero
