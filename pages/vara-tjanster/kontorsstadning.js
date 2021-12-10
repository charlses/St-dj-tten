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
import SectionTeam from 'pages-sections/vara-tjanster/kontorsstadning/SectionTeam.js'
import RotateCards from 'pages-sections/vara-tjanster/kontorsstadning/RotateCards.js'
import SectionFooter from 'pages-sections/components/SectionFooter.js'
import SectionContact from 'pages-sections/vara-tjanster/kontorsstadning/SectionContact.js'

import SectionForm from 'pages-sections/sections-page/SectionForm'
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
      <Parallax image='/img/kontorsstadning.jpg' filter='dark' small>
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
              <h1 className={classes.title}>Kontorsstädning</h1>
              <h4>
                Självklart utför vi också städning av kontor. Det kan ske både
                under dagtid eller kvällstid, ni väljer – vi utför. Vi är vana
                vid båda delarna och är närmast osynliga om ni vill ha
                städningen gjord under kontorstid. Precis som våra andra
                tjänster skräddarsyr vi kontorsstädning efter era behov och ni
                väljer själva vilken frekvens på kontorsstäd ni vill ha. <br />{' '}
                Det spelar ingen roll om ni är ett litet eller stort företag, vi
                utför kontorsstädning efter era önskemål.
              </h4>
            </GridItem>
          </GridContainer>
        </div>
      </Parallax>
      <div className={classNames(classes.main)}>
        <div className={classes.container}>
          <SectionForm />
          <SectionTeam />
          <RotateCards />
          <SectionContact />
        </div>
      </div>
      <SectionFooter />
    </div>
  )
}
