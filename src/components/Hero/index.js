import React, { Component } from 'react'
import Carousel, { Dots } from '@brainhubeu/react-carousel'
import './carousel.css'

const image = item => item.image.childImageSharp ? item.image.childImageSharp.fluid.src : item.image

class Hero extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 0,
    };
  }

  render() {
    const { items } = this.props
    const onChange = value => this.setState({ value });

    return (
      <div className="hero">
        <Carousel
          autoPlay='5000'
          infinite
          value={this.state.value}
          onChange={onChange}>
          {items.map((item, i) => (
            <div key={i} className="wrapper" style={{ backgroundImage: `url(${image(item)})` }}>
              <div className="window-centered">
                <h3>{item.subtitle}</h3>
                <h2>{item.title}</h2>
                <p>{item.description}</p>
              </div>
            </div>
          ))}
        </Carousel>
        <Dots value={this.state.value} onChange={this.onChange} number={items.length} />
      </div>
    )
  }
}

export default Hero
