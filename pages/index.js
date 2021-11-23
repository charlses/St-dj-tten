/*eslint-disable*/
import React from 'react'
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
// sections for this page
import SectionProduct from 'pages-sections/landing-page/SectionProduct.js'
import SectionProducts from 'pages-sections/ecommerce/SectionProducts.js'
import SectionTestimonials from 'pages-sections/sections-page/SectionTestimonials.js'
import SectionPills from 'pages-sections/blog-posts/SectionPills.js'
import SectionFooter from 'pages-sections/components/SectionFooter.js'

import presentationStyle from 'styles/jss/nextjs-material-kit-pro/pages/presentationStyle.js'

const useStyles = makeStyles(presentationStyle)

export default function Index() {
  React.useEffect(() => {
    window.scrollTo(0, 0)
    document.body.scrollTop = 0
  })
  const classes = useStyles()
  return (
    <div>
      <Header
        links={<HeaderLinks dropdownHoverColor='primary' />}
        fixed
        color='transparent'
        changeColorOnScroll={{
          height: 400,
          color: 'white'
        }}
      />
      <Parallax image='/img/nextjs_header.jpg' className={classes.parallax}>
        <div className={classes.container}>
          <GridContainer>
            <GridItem>
              <div className={classes.brand}>
                <h1>
                  Städjätten
                  <span className={classes.proBadge}>AB</span>
                </h1>
                <h3 className={classes.title}>Din städfirma i Stockholm</h3>
              </div>
            </GridItem>
          </GridContainer>
        </div>
      </Parallax>
      <div className={classNames(classes.main)}>
        <SectionProduct />

        <SectionProducts />
        <SectionTestimonials />
        <SectionPills />
      </div>

      <SectionFooter />
    </div>
  )
}
