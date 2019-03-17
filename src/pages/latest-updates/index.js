import React from 'react'

import Layout from '../../components/Layout'
import LatestUpdatesRoll from '../../components/LatestUpdatesRoll'

export default class BlogIndexPage extends React.Component {
  render() {
    return (
      <Layout>
        <section className="section">
          <LatestUpdatesRoll />
        </section>
      </Layout>
    )
  }
}
