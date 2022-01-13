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
import SectionTeam from 'pages-sections/vara-tjanster/flyttstadning/SectionTeam.js'
import RotateCards from 'pages-sections/vara-tjanster/flyttstadning/RotateCards.js'
import SectionFooter from 'pages-sections/components/SectionFooter.js'
import SectionTestimonials from 'pages-sections/sections-page/SectionTestimonials'
import SectionPreFooter from 'pages-sections/components/SectionPreFooter'
import SectionServices from 'pages-sections/vara-tjanster/flyttstadning/SectionServices'

import SectionFormLandingPage from 'pages-sections/sections-page/SectionFormLandingPage'

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
        links={<HeaderLinks dropdownHoverColor='primary' />}
        fixed
        color='transparent'
        changeColorOnScroll={{
          height: 1,
          color: 'white'
        }}
      />
      <Parallax image='/img/flyttstadning.jpg' filter='dark' small>
        <div className={classes.container}>
          <GridContainer justify='justifyContent'>
            <GridItem
              xl={5}
              md={9}
              sm={7}
              xs={10}
              className={classNames(
                classes.mlAuto,
                classes.mrAuto,
                classes.textCenter
              )}
            >
              <h1 className={classes.title} style={{ color: '#fefefe' }}>
                Flyttstädning
              </h1>
            </GridItem>
          </GridContainer>
        </div>
      </Parallax>
      <div className={classNames(classes.main + ' ' + classes.mainRaised)}>
        <SectionFormLandingPage />
        <GridContainer
          xl={5}
          md={8}
          sm={9}
          xs={12}
          className={classNames(
            classes.mlAuto,
            classes.mrAuto,
            classes.textCenter
          )}
        >
          <GridItem>
            <h4 style={{ margin: '50px 100px 0 100px' }}>
              Vi är en av de bästa flyttstädningsfirmor i Stockholm och Göteborg
              som vet vad som behövs för att din bostad ska bli så ren och
              fräsch som möjlig.
            </h4>
          </GridItem>
        </GridContainer>
        <div className={classes.containerFluid}>
          <div className={classes.container}>
            <SectionServices />
          </div>

          <SectionTeam />
          <SectionTestimonials />
          <RotateCards />
        </div>
      </div>
      <SectionPreFooter />
      <SectionFooter />
    </div>
  )
}
