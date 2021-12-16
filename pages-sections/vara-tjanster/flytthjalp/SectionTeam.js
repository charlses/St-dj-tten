import React from 'react'
// nodejs library that concatenates classes
import classNames from 'classnames'
// core components
import GridContainer from 'components/Grid/GridContainer.js'
import GridItem from 'components/Grid/GridItem.js'
// @material-ui/core components
import { makeStyles } from '@material-ui/core/styles'

import teamStyle from 'styles/jss/nextjs-material-kit-pro/pages/aboutUsSections/teamStyle.js'

import Accordion from 'components/Accordion/Accordion.js'

const useStyles = makeStyles(teamStyle)

export default function SectionTeam() {
  const classes = useStyles()
  return (
    <div className={classes.team}>
      <GridContainer>
        <GridItem
          md={12}
          sm={12}
          className={classNames(classes.mrAuto, classes.mlAuto)}
        >
          <h2 className={classes.title}>Snabb och flexibel flytthjälp</h2>
          <h5 className={classes.description}>
            Städjätten hjälper både privatpersoner och företag med sin flytt, vi
            har en hög kapacitet och kan snabbt vara på plats. Vi erbjuder
            helhetslösningar med pack- och bärhjälp och transport. Vi är måna om
            att våra kunder är nöjda med vår flytthjälp och ser därför till att
            skräddarsy våra tjänster efter kundens önskemål. Hos oss kan du få
            hjälp med delar av flytten eller en helhetslösning – du väljer själv
            vilka flyttjänster du vill ha hjälp med och hur omfattande de ska
            vara. Oavsett hur mycket hjälp du behöver med din flytt, står vi
            till tjänst med allt från säker packning och trygg transport av dina
            ägodelar, till uppackning och flyttstädning. Flytthjälp från 495
            kr/h Kontakta oss idag för en kostnadsfri offert
          </h5>
        </GridItem>
        <GridItem
          md={12}
          sm={12}
          className={classNames(classes.mrAuto, classes.mlAuto)}
        >
          <h2 className={classes.title}>Behöver du låna flyttkartonger?</h2>
          <h5 className={classes.description}>
            Hos oss ingår alltid lån av flyttkartonger som ni kan ha 2 veckor
            innan och efter utförande av flytten. Kartongerna går att hämta ut
            eller få utkörda till er. Kontakta oss så hjälper vi er!
          </h5>
        </GridItem>

        <GridItem
          md={12}
          sm={12}
          className={classNames(classes.mrAuto, classes.mlAuto)}
        >
          <div className={classes.title}>
            <h3>FAQ</h3>
          </div>
          <Accordion
            active={0}
            activeColor='rose'
            collapses={[
              {
                title: 'Hur fungerar era flyttjänster? ',
                content:
                  'Du kommer i kontakt med en av våra rådgivare och går tillsammans igenom vad som behöver göras för att du ska känna dig trygg med flytten.'
              },
              {
                title: 'Hur lång framförhållning behöver jag ha?',
                content:
                  'Om du vill ha en tid runt månadsskiftet rekommenderar vi att du bokar minst en vecka i förväg. Annars räcker det med några dagar innan. Självklart kan du alltid ringa oss i sista minuten och höra om vi har tider över.'
              },
              {
                title: 'Hur bokar jag tid?',
                content:
                  'Vi tittar tillsammans på en tidpunkt som passar dig bra och skräddarsyr flytten så att vi kan leverera en fulländad tjänst.'
              }
            ]}
          />
        </GridItem>
      </GridContainer>
    </div>
  )
}
