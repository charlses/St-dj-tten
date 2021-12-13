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
import SectionDescription from 'pages-sections/har-finns-vi/stockholm/SectionDescription.js'
import SectionTeam from 'pages-sections/har-finns-vi/stockholm/SectionTeam.js'
import SectionFooter from 'pages-sections/components/SectionFooter.js'

import SectionPills from 'pages-sections/vara-tjanster/index/SectionPills.js'
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
      <Parallax image='/img/stockholm.jpg' filter='dark' small>
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
              <h1 className={classes.title}>
                Städjätten - Din städfirma i Stockholm
              </h1>
              <h4>
                Vi är en städfirma som utför hushållsnära tjänster i hela
                Stockholm. För oss är det viktigt att våra kunder är 100% nöjda,
                vi utför därför städning helt enligt dina önskemål. Städjätten
                hjälper både dig som privatperson och företag oavsett önskemål
                och behov finns vi där för dig när du behöver städhjälp.{' '}
              </h4>
            </GridItem>
          </GridContainer>
        </div>
      </Parallax>
      <div className={classNames(classes.main)}>
        <div className={classes.container}>
          <SectionDescription />
          <SectionTeam />
          <SectionPills />
        </div>
      </div>
      <SectionFooter />
    </div>
  )
}
