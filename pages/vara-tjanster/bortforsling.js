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
import SectionTeam from 'pages-sections/vara-tjanster/bortforsling/SectionTeam.js'
import RotateCards from 'pages-sections/vara-tjanster/bortforsling/RotateCards.js'
import SectionFooter from 'pages-sections/components/SectionFooter.js'
import SectionContact from 'pages-sections/vara-tjanster/bortforsling/SectionContact.js'
import SectionForm from 'pages-sections/sections-page/SectionForm'
import SectionPreFooter from 'pages-sections/components/SectionPreFooter'

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
      <Parallax image='/img/bortforsling.jpg' filter='dark' small>
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
              <h1 className={classes.title}>Bortforsling</h1>
              <h4>
                Har du varit uppe på vinden, nere i källaren eller i trädgården
                och rensat? Har du samlat på dig skräp, trädgårds- eller
                grovavfall som du vill bli av med? Städjätten ordnar med
                bortforsling från 495kr/h i hela Stockholms län och Göteborgs
                stad.
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
