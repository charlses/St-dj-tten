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
import SectionTeam from 'pages-sections/vara-tjanster/hemstadning/SectionTeam.js'
import RotateCards from 'pages-sections/vara-tjanster/hemstadning/RotateCards.js'
import SectionFooter from 'pages-sections/components/SectionFooter.js'
import SectionContact from 'pages-sections/vara-tjanster/hemstadning/SectionContact.js'
import SectionPreFooter from 'pages-sections/components/SectionPreFooter'
import SectionServices from 'pages-sections/vara-tjanster/hemstadning/SectionServices'
import SectionTestimonials from 'pages-sections/sections-page/SectionTestimonials'

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
      <Parallax image='/img/hemstadning.jpg' filter='dark' small>
        <div className={classes.container}>
          <GridContainer justifyContent='center'>
            <GridItem
              md={8}
              sm={8}
              className={classNames(
                classes.mlAuto,
                classes.mrAuto,
                classes.textCenter
              )}
            >
              <h1 className={classes.title} style={{ color: '#fefefe' }}>
                Hemstädning
              </h1>
            </GridItem>
          </GridContainer>
        </div>
      </Parallax>
      <div className={classNames(classes.main + ' ' + classes.mainRaised)}>
        <SectionFormLandingPage />
        <div className={classes.container}>
          <GridContainer>
            <GridItem
              md={8}
              sm={8}
              className={classNames(
                classes.mlAuto,
                classes.mrAuto,
                classes.textCenter
              )}
            >
              <h2 className={classes.title}>Står du inför en flytt?</h2>
              <h4>
                Vi hjälper dig med regelbunden hemstädning så att du kan
                fokusera på andra prioriteringar. Vi erbjuder alltid en
                kostnadsfri offert för att kunna anpassa hemstädningen efter
                dina specifika behov och önskemål.{' '}
              </h4>
            </GridItem>
          </GridContainer>
        </div>
        <div className={classes.container}>
          <SectionServices />
        </div>

        <SectionTeam />
        <SectionTestimonials />
        <RotateCards />
        <SectionContact />
      </div>
      <SectionPreFooter />
      <SectionFooter />
    </div>
  )
}
