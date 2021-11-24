/*eslint-disable*/
import React from 'react'
// nodejs library that concatenates classes
import classNames from 'classnames'
// @material-ui/core components
import { makeStyles } from '@material-ui/core/styles'
// core components
import Header from 'components/Header/Header.js'
import HeaderLinks from 'components/Header/HeaderLinks.js'
import GridContainer from 'components/Grid/GridContainer.js'
import GridItem from 'components/Grid/GridItem.js'
import Parallax from 'components/Parallax/Parallax.js'
// sections for this page
import SectionDescription from 'pages-sections/about-us/samarbetspartners/SectionDescription.js'
import SectionTeam from 'pages-sections/about-us/samarbetspartners/SectionTeam.js'
import SectionServices from 'pages-sections/about-us/samarbetspartners/SectionServices.js'
import SectionFooter from 'pages-sections/components/SectionFooter.js'

import aboutUsStyle from 'styles/jss/nextjs-material-kit-pro/pages/aboutUsStyle.js'

const useStyles = makeStyles(aboutUsStyle)

export default function AboutUsPage() {
  React.useEffect(() => {
    window.scrollTo(0, 0)
    document.body.scrollTop = 0
  })
  const classes = useStyles()
  return (
    <div>
      <Header
        brand='NextJS Material Kit PRO'
        links={<HeaderLinks dropdownHoverColor='primary' />}
        fixed
        color='transparent'
        changeColorOnScroll={{
          height: 300,
          color: 'white'
        }}
      />
      <Parallax image='/img/bg9.jpg' filter='dark' small>
        <div className={classes.container}>
          <GridContainer justify='center'>
            <GridItem
              md={8}
              sm={8}
              className={classNames(
                classes.mlAuto,
                classes.mrAuto,
                classes.textCenter
              )}
            >
              <h1 className={classes.title}>Samarbetspartners</h1>
            </GridItem>
          </GridContainer>
        </div>
      </Parallax>
      <div className={classNames(classes.main)}>
        <div className={classes.container}>
          <SectionTeam />
        </div>
      </div>
      <SectionFooter />
    </div>
  )
}
