import React from 'react'

import Footer from '../Footer'

const CommonPage = (ContentComponent) => {

  class Page extends React.Component {
    render() {
      return (
        <div className="content">
          <ContentComponent />
          <Footer />
        </div>
      )
    }
  }
  return Page
}

export default CommonPage
