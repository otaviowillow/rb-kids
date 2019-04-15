import React from 'react'
import { graphql } from 'gatsby'
import { navigate } from 'gatsby-link'
import Content, { HTMLContent } from '../components/Content'
import Layout from '../components/Layout'
import Map from '../components/Map'

function encode(data) {
  return Object.keys(data)
    .map(key => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
    .join('&')
}

class ContactTemplate extends React.Component {
  constructor(props) {
    super(props)
    this.state = { isValidated: false }
  }

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value })
  }

  handleSubmit = e => {
    e.preventDefault()
    const form = e.target
    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: encode({
        'form-name': form.getAttribute('name'),
        ...this.state,
      }),
    })
      .then(() => navigate(form.getAttribute('action')))
      .catch(error => alert(error))
  }

  render() {
    const PageContent = this.props.contentComponent || this.props.Content
    return (
      <section className="contact window-centered">
        <aside>
          <div>
            <PageContent content={this.props.content} />
          </div>
          <Map
            googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyA4abwXM9G_iVwESpU_QprIKOkRAgwGgbU&v=3.exp&libraries=geometry,drawing,places"
            loadingElement={<div style={{ height: `100%` }} />}
            containerElement={<div style={{ height: `400px` }} />}
            mapElement={<div style={{ height: `100%` }} />}
          />
          <br />
        </aside>
        <form
          name="contact"
          method="post"
          action="/contact/thanks/"
          data-netlify="true"
          data-netlify-honeypot="bot-field"
          onSubmit={this.handleSubmit}>
          <input type="hidden" name="form-name" value="contact" />
          <div hidden>
            <label>
              Don’t fill this out:{' '}
              <input name="bot-field" onChange={this.handleChange} />
            </label>
          </div>
          <h2>Contact Us</h2>
          <div className="field">
            <label className="label" htmlFor={'name'}>Your name</label>
            <div className="control">
              <input
                className="input"
                type={'text'}
                name={'name'}
                onChange={this.handleChange}
                id={'name'}
                required={true}
              />
            </div>
          </div>
          <div className="field">
            <label className="label" htmlFor={'email'}>Email</label>
            <div className="control">
              <input
                className="input"
                type={'email'}
                name={'email'}
                onChange={this.handleChange}
                id={'email'}
                required={true}
              />
            </div>
          </div>
          <div className="field">
            <label className="label" htmlFor={'message'}>Message</label>
            <div className="control">
              <textarea
                className="textarea"
                name={'message'}
                onChange={this.handleChange}
                id={'message'}
                required={true}
              />
            </div>
          </div>
          <div className="field">
            <button className="button is-link" type="submit">Send</button>
          </div>
        </form>
      </section>
    )
  }
}

const ContactPage = ({ data }) => {
  const { markdownRemark: post } = data

  return (
    <Layout>
      <ContactTemplate
        content={post.html}
        contentComponent={HTMLContent}
      />
    </Layout>
  )
}

export default ContactPage

export const contactPageQuery = graphql`
  query ContactPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
    }
  }
`
