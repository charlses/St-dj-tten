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
import SectionTeam from 'pages-sections/vara-tjanster/packhjalp/SectionTeam.js'
import RotateCards from 'pages-sections/vara-tjanster/packhjalp/RotateCards.js'
import SectionFooter from 'pages-sections/components/SectionFooter.js'
import SectionContact from 'pages-sections/vara-tjanster/packhjalp/SectionContact.js'

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
              <h1 className={classes.title}>Packhjälp</h1>
              <h4>
                Låt oss professionella ta hand om din packhjälp vid flytt, vi
                vet hur man emballerar och packar på ett säkert sätt. Till
                ömtåliga ägodelar som till exempel porslin och glas använder vi
                bubbelplast och en teknik för att säkra känsliga föremål som ser
                till att allt ligger på plats. Vi använder även träreglar där vi
                bygger en låda till känsligt material för att förhindra sprickor
                i skivor eller marmorbord. Dina flyttkartonger omfattas dessutom
                av vår packförsäkring för att vara i trygga händer under hela
                flytten.
              </h4>
            </GridItem>
          </GridContainer>
        </div>
      </Parallax>
      <div className={classNames(classes.main)}>
        <div className={classes.container}>
          <SectionTeam />
          <RotateCards />
          <SectionContact />
        </div>
      </div>
      <SectionFooter />
    </div>
  )
}
