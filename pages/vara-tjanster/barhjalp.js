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
import SectionTeam from 'pages-sections/vara-tjanster/barhjalp/SectionTeam.js'
import RotateCards from 'pages-sections/vara-tjanster/barhjalp/RotateCards.js'
import SectionFooter from 'pages-sections/components/SectionFooter.js'
import SectionTestimonials from 'pages-sections/sections-page/SectionTestimonials'
import SectionPreFooter from 'pages-sections/components/SectionPreFooter'
import SectionServices from 'pages-sections/vara-tjanster/barhjalp/SectionServices'

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
      <Parallax image='/img/barhjalp.jpg' filter='dark' small>
        <div className={classes.container}>
          <GridContainer justify='justifyContent'>
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
                Bärhjälp
              </h1>
            </GridItem>
          </GridContainer>
        </div>
      </Parallax>
      <div className={classNames(classes.main + ' ' + classes.mainRaised)}>
        <SectionFormLandingPage />
        <GridContainer
          md={8}
          sm={12}
          className={classNames(
            classes.mlAuto,
            classes.mrAuto,
            classes.textCenter
          )}
        >
          <GridItem>
            <h2 className={classes.title}>
              Boka bärhjälp med oss och undvik skador vid tunga lyft
            </h2>
            <h4 style={{ margin: '0, 50px 0 50px' }}>
              Bärhjälp är en viktig komponent under flytten, framförallt är den
              viktig eftersom man måste använda rätt verktyg för att inte skada
              sig. En ryggskada under flytten vill man undvika. Vi vet hur en
              snabb och smidig flytt ska gå till, vi har rätt verktyg och
              kunskap för att bära på ett ergonomisk.
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
