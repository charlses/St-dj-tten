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
          <h2 className={classes.title}>Vi hjälper dig med din montering</h2>
          <h5 className={classes.description}>
            Att större möbler är svåra att hantera under en flytt är ett faktum,
            för att undvika att skada sig själv eller skador i hemmet är det
            bäst att lämna över packhjälpen till oss. Vi gör nedmontering av
            tunga och komplicerade möbler för att göra din flytt så smidig som
            möjligt. Det är viktigt att ha rätt verktyg under monteringen annars
            är det lätt att man gör mer skada än nytta. Passa också på att boka
            in flytthjälp
          </h5>
        </GridItem>
        <GridItem
          md={12}
          sm={12}
          className={classNames(classes.mrAuto, classes.mlAuto)}
        >
          <h2 className={classes.title + ' ' + classes.textCenter}>
            Packhjälp som spar tid och kraft
          </h2>
          <h3 className={classes.title + ' ' + classes.textCenter}>
            Några tips som underlättar din flytt:
          </h3>
          <h5 className={classes.description}>
            Vi på Städjätten finns för dig som vill förenkla vardagen, därför
            låter vi dig bestämma hur din städning ska utföras tillsammans med
            våra experter. Vi har tagit fram en standardlista för vad som ingår
            i en hemstädning, men självklart anpassar vi den efter just dina
            behov och önskemål. Listan över vad som ingår i en hemstädning
            finner du nedan.
          </h5>
          <h5 className={classes.description}>
            <ol>
              <li>
                Spara alla skruvar och lösa föremål i en påse för att inte tappa
                bort de.{' '}
              </li>
              <li>
                Förklara för packhjälpen vilka saker som är extra ömtåliga.Vi är
                noga med att packa rätt och värnar extra mycket om ömtåliga
                föremål.{' '}
              </li>
              <li>
                Är ni en stor familj? Märk familjemedlemmarnas rum med
                respektive namn för att förenkla för packhjälpen att veta vilka
                kartonger som tillhör respektive rum.
              </li>
              <li>
                Avtorkning utvändigt av torkskåp, torktumlare och tvättmaskin
              </li>
              <li>Våttorkning av golv</li>
              <h6>
                Låt oss sköta hela er flytt från packhjälp, bärhjälp till
                flyttstädning.
              </h6>
            </ol>
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
                title: 'Vad kostar packhjälp?',
                content: 'Pris för packhjälp är från 495 kr/h'
              },
              {
                title: 'Vad är skillnaden mellan hemstädning och storstädning?',
                content:
                  'Dina flyttkartonger omfattas av vår pack-försäkring och är alltså i trygga händer under hela flytten.'
              },
              {
                title: 'Kan jag låna flyttkartonger?',
                content:
                  'Hos oss ingår alltid lån av flyttkartonger som du kan ha 2 veckor innan och efter utförande av flytten. Kartongerna går att hämta ut eller få utkörda till dig.'
              }
            ]}
          />
        </GridItem>
      </GridContainer>
    </div>
  )
}
