import React, { Component } from 'react'
import { Link } from 'gatsby'
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
            <div key={i} className="wrapper" style={{ backgroundImage: `url(${item.image ? image(item) : null})` }}>
              <div className="window-centered">
                <Link to={item.link}>
                  <h3>{item.subtitle}</h3>
                  <h2>{item.title}</h2>
                  <p>{item.description}</p>
                </Link>
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
