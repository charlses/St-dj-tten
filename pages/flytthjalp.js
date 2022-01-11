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
import SectionPills from 'pages-sections/flytthjalp/SectionPills.js'
import SectionFooter from 'pages-sections/components/SectionFooter.js'
import SectionForm from 'pages-sections/sections-page/SectionForm'

import aboutUsStyle from 'styles/jss/nextjs-material-kit-pro/pages/aboutUsStyle.js'
import SectionPreFooter from '../pages-sections/components/SectionPreFooter'

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
      <Parallax image='/img/flytthjalp.jpg' filter='dark' small>
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
                Flytthjälp
              </h1>
            </GridItem>
          </GridContainer>
        </div>
      </Parallax>
      <div className={classNames(classes.main + ' ' + classes.mainRaised)}>
        <GridContainer
          md={8}
          sm={8}
          className={classNames(
            classes.mlAuto,
            classes.mrAuto,
            classes.textCenter
          )}
        >
          <GridItem>
            <h4 style={{ margin: '50px 100px 0 100px' }}>
              Behöver du hjälp med endast vissa delar i flytten? Exempelvis
              packhjälp, bärhjälp, själva transporten eller kanske bara pianot?
              Vi hjälper dig även med sanering, bortforsling, storstädning,
              hemstädning och till och med din trädgårdsskötsel! Alla våra
              priser är inklusive RUT-avdraget. Genom RUT- avdraget har du som
              privatperson möjlighet att dra av arbetskostnader upp till 75 000
              kr per år efter nya regler 2021. <br />
            </h4>
          </GridItem>
        </GridContainer>
        <div className={classes.containerFluid}>
          <SectionForm />
          <SectionPills />
        </div>
      </div>
      <SectionPreFooter />
      <SectionFooter />
    </div>
  )
}
