import React from 'react'
// nodejs library that concatenates classes
import classNames from 'classnames'
// core components
import GridContainer from 'components/Grid/GridContainer.js'
import GridItem from 'components/Grid/GridItem.js'
// @material-ui/core components
import { makeStyles } from '@material-ui/core/styles'

import teamStyle from 'styles/jss/nextjs-material-kit-pro/pages/aboutUsSections/teamStyle.js'
import Button from 'components/CustomButtons/Button.js'

import Accordion from 'components/Accordion/Accordion.js'

import SectionImageLeft from 'components/SectionComponent/SectionImageLeft'
import SectionNoImage from 'components/SectionComponent/SectionNoimage'

const useStyles = makeStyles(teamStyle)

export default function SectionTeam() {
  const classes = useStyles()
  return (
    <div className={classes.team}>
      <SectionImageLeft image='/img/tjejen.png' alt='Lokalv[rdare'>
        <h2 className={classes.title + ' ' + classes.textCenter}>
          Några tips som underlättar din flytt:
        </h2>
        <h5 className={classes.description}>
          <ul
            style={{
              listStyleImage: "url('/img/bullet.png')"
            }}
          >
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
              Är ni en stor familj? Märk familjemedlemmarnas rum med respektive
              namn för att förenkla för packhjälpen att veta vilka kartonger som
              tillhör respektive rum.
            </li>
            <li>
              Avtorkning utvändigt av torkskåp, torktumlare och tvättmaskin
            </li>
            <li>Våttorkning av golv</li>
          </ul>

          <h6>
            Låt oss sköta hela er flytt från packhjälp, bärhjälp till
            flyttstädning.
          </h6>
          <Button color='primary' href='/vara-tjanster'>
            Se hela checklistan här
          </Button>
        </h5>
      </SectionImageLeft>

      <div className={classes.container}>
        <GridContainer>
          <GridItem
            xl={5}
            md={9}
            sm={9}
            xs={10}
            className={classNames(
              classes.mrAuto,
              classes.mlAuto,
              classes.textCenter
            )}
          >
            <h2 className={classes.title + ' ' + classes.textCenter}>
              Packhjälp som spar tid och kraft
            </h2>
            <h5 className={classes.description}>
              Att större möbler är svåra att hantera under en flytt är ett
              faktum. För att undvika att skada sig själv eller skador i hemmet
              är det bäst att lämna över packhjälpen till oss. Vi monterar ner
              tunga och komplicerade möbler för att göra din flytt så smidig som
              möjligt. Det är viktigt att ha rätt verktyg under monteringen
              annars är det lätt att man gör mer skada än nytta. Passa också på
              att boka in flytthjälp om du är ute efter en helhetslösning och
              behöver hjälp med hela flyttprocessesen. <br /> <br />
              <Button color='primary' href='/offert'>
                Skicka en offertförfrågan nu!
              </Button>
            </h5>
          </GridItem>
        </GridContainer>
      </div>

      <SectionNoImage>
        <h2 className={classes.title}>FAQ?</h2>
        <Accordion
          sx={{ backgroundColor: 'transparent' }}
          active={0}
          collapses={[
            {
              title: 'Vad kostar kontorsstädning?',
              content: 'Pris för kontorsstädning är från 358 kr/h'
            },
            {
              title: 'Är er personal certifierade?',
              content:
                ' När ni bokar kontorsstädning så är ni alltid i trygga händer. Vi har personal som innehar ett SRY-yrkesbevis och som är certifierade vilket innebär att de besitter på en kompetensutveckling inom städ- och servicebranschen.'
            },
            {
              title: 'Gäller RUT-avdrag även för företag?',
              content:
                'RUT-avdraget gäller endast för privatpersoner men vi hjälper självklart företag också och erbjuder förmånliga priser.'
            }
          ]}
        />
      </SectionNoImage>
    </div>
  )
}
