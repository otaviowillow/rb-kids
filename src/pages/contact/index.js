import React from 'react'
import { navigate } from 'gatsby-link'

import Layout from '../../components/Layout'
import Map from '../../components/Map'

function encode(data) {
  return Object.keys(data)
    .map(key => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
    .join('&')
}

export default class Index extends React.Component {
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
    return (
      <Layout>
        <section className="contact window-centered padding">
          <aside>
            <div>
              <h2>9500 Glenlyon Parkway</h2>
              <h3>Burnaby, BC V5J 0C6</h3>
              <h4>Monday to Friday, 8AM to 6PM</h4>
{/* Telephone number: 703-642-5911
Fax number: 703-642-5539
E-mail address: LittleRiverDS@gmail.com
Center Operation Hours:
Monday to Friday
7 AM to 6 PM */}
            </div>
            <Map />
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
      </Layout>
    )
  }
}
