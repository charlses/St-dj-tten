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
import SectionTeam from 'pages-sections/vara-tjanster/storstadning/SectionTeam.js'
import RotateCards from 'pages-sections/vara-tjanster/storstadning/RotateCards.js'
import SectionFooter from 'pages-sections/components/SectionFooter.js'
import SectionContact from 'pages-sections/vara-tjanster/storstadning/SectionContact.js'

import SectionForm from 'pages-sections/sections-page/SectionForm'
import aboutUsStyle from 'styles/jss/nextjs-material-kit-pro/pages/aboutUsStyle.js'
import SectionPreFooter from 'pages-sections/components/SectionPreFooter'

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
      <Parallax image='/img/storstadning.jpg' filter='dark' small>
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
              <h1 className={classes.title}>Storstädning</h1>
              <h4>
                Trots regelbunden städning kan hemmet upplevas smutsigt. Vi på
                Städjätten hjälper dig med storstädningen som annars lätt skjuts
                upp. Vi har 15 års erfarenhet och använder oss av miljövänliga
                städprodukter. Vi har certifierad personal som gör en grundlig
                städning av ditt hem, ner till minsta list - så att du kan njuta
                av ett rent, harmoniskt hem.
              </h4>
            </GridItem>
          </GridContainer>
        </div>
      </Parallax>
      <div className={classNames(classes.main + ' ' + classes.mainRaised)}>
        <div className={classes.container}>
          <SectionForm />
          <SectionTeam />
          <RotateCards />
          <SectionContact />
        </div>
      </div>
      <SectionPreFooter />
      <SectionFooter />
    </div>
  )
}
