/*eslint-disable*/
import React, { useState } from 'react'
// nodejs library that concatenates classes
import classNames from 'classnames'
// @material-ui/core components
import { makeStyles } from '@material-ui/core/styles'

// core components
import Header from 'components/Header/Header.js'
import HeaderLinks from 'components/Header/HeaderLinks.js'
import Parallax from 'components/Parallax/Parallax.js'
import GridContainer from 'components/Grid/GridContainer.js'
import GridItem from 'components/Grid/GridItem.js'
import Button from 'components/CustomButtons/Button'
import { ArrowDownwardOutlined } from '@material-ui/icons'

// sections for this page
import SectionProduct from 'pages-sections/landing-page/SectionProduct.js'
import SectionProducts from 'pages-sections/ecommerce/SectionProducts.js'
import SectionTestimonials from 'pages-sections/sections-page/SectionTestimonials.js'
import SectionFooter from 'pages-sections/components/SectionFooter.js'
import SectionForm from '../pages-sections/sections-page/SectionForm'
import SectionPreFooter from 'pages-sections/components/SectionPreFooter.js'

import presentationStyle from 'styles/jss/nextjs-material-kit-pro/pages/presentationStyle.js'
import SectionInfo from 'pages-sections/sections-page/SectionInfo'

const useStyles = makeStyles(presentationStyle)

export default function Index() {
  React.useEffect(() => {
    window.scrollTo(0, 0)
    document.body.scrollTop = 0
  })
  const classes = useStyles()

  const [showForm, setShowForm] = useState(false)

  const onShow = () => {
    setShowForm(true)
  }
  const onHide = () => {
    setShowForm(false)
  }
  return (
    <div>
      <Header
        links={<HeaderLinks dropdownHoverColor='primary' />}
        fixed
        color='transparent'
        changeColorOnScroll={{
          height: 1,
          color: 'white'
        }}
      />
      <Parallax image='/img/nextjs_header.jpg' className={classes.parallax}>
        <div className={classes.container}>
          <GridContainer>
            <GridItem>
              <div className={classes.brand}>
                <h1 className={classes.title}>Städjätten</h1>
                <h4>Hos oss är både din städning och flytt i trygga händer</h4>
                {!showForm && (
                  <Button onClick={onShow} color='primary' round>
                    Skicka en offertförfrågan <ArrowDownwardOutlined />
                  </Button>
                )}

                {showForm && <SectionForm />}
              </div>
            </GridItem>
          </GridContainer>
        </div>
      </Parallax>

      <div
        className={classNames(
          classes.main + ' ' + classes.mainRaised + ' ' + classes.containerFluid
        )}
      >
        <SectionProduct />
        <SectionProducts />
        <SectionTestimonials />
        <SectionInfo />

        {/*<SectionBlog />*/}
      </div>
      <SectionPreFooter />
      <SectionFooter />
    </div>
  )
}
