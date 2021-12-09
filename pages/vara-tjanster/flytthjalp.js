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
import SectionTeam from 'pages-sections/vara-tjanster/flytthjalp/SectionTeam.js'
import RotateCards from 'pages-sections/vara-tjanster/flytthjalp/RotateCards.js'
import SectionFooter from 'pages-sections/components/SectionFooter.js'
import SectionContact from 'pages-sections/vara-tjanster/flytthjalp/SectionContact.js'

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
              <h1 className={classes.title}>Flytthjälp</h1>
              <h4>
                Står du inför en flytt och har ont om tid, eller vill vara säker
                på att dina saker hamnar tryggt i lådorna? Det finns många
                fördelar med att hyra oss på Städjätten som flytthjälp. Vi
                sköter allt det praktiska åt dig på ett effektivt sätt, allt
                från att ordna med flyttkartonger, packmaterial till att
                transportera till den nya adressen. Vi på Städjätten vet hur en
                snabb och smidig flytt ska gå till, vi har rätt verktyg och
                kunskap för en säker flytt. <br /> Städjätten är
                ansvarsförsäkrade via Trygg Hansa, detta gör att du som kund kan
                känna dig extra trygg när du anlitar oss för flytthjälp.
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
