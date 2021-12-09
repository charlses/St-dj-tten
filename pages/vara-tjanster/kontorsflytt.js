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
import SectionTeam from 'pages-sections/vara-tjanster/kontorsflytt/SectionTeam.js'
import RotateCards from 'pages-sections/vara-tjanster/kontorsflytt/RotateCards.js'
import SectionFooter from 'pages-sections/components/SectionFooter.js'
import SectionContact from 'pages-sections/vara-tjanster/kontorsflytt/SectionContact.js'

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
          height: 300,
          color: 'white'
        }}
      />
      <Parallax image='/img/bg9.jpg' filter='dark' small>
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
              <h1 className={classes.title}>Kontorsflytt</h1>
              <h4>
                Vi på Städjätten har utfört flyttar åt företag i över 10 år,
                vilket gör att vi kan stolt säga att vi är experter på kontors-
                och företagsflyttar. Vi är flexibla och finns tillgängliga på
                helger och vardagar efter kontorstider. För oss är det viktigt
                att flytten ska gå så smidigt som möjligt för er som företag.{' '}
                <br />
                Vill ni att vi hjälper er packa eller montera upp möbler och
                förvara de tryggt? Det kan vi självklart hjälpa er med! Ni
                väljer själva – Vi hjälper er.
              </h4>
            </GridItem>
            s
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
