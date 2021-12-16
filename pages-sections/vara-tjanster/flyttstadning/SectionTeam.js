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
          <h2 className={classes.title}>Vad ingår i flyttstädning?</h2>

          <h5 className={classes.description}>
            <ul>
              <li>Rengöring av diskbänk, diskbänkskåp och kranar</li>
              <li>Rengöring av kyl/frys (ska avfrostas i förväg)</li>
              <li>Rengöring av tömning av golvbrunn</li>
              <li>Rengöring av handfat</li>
              <li>
                Avtorkning av skåp och inbyggda garderober in- och utvändigt
              </li>
              <li>Dammsugning och våttorkning av golv</li>
            </ul>
          </h5>
        </GridItem>
        <GridItem
          md={12}
          sm={12}
          className={classNames(classes.mrAuto, classes.mlAuto)}
        >
          <h2 className={classes.title}>
            Nöjd-kund-garanti både för dig och den som flyttar in
          </h2>
          <h5 className={classes.description}>
            Vi ger alltid nöjd kundgaranti på flyttstädningen oavsett om det är
            ditt nya hem eller kontor. Detta för att du som ny ägare eller
            hyresgäst ska kunna komma med synpunkter om något inte stämmer med
            ditt önskemål. Vår kundgaranti gäller i sju dagar från
            städtillfället. Det här gör vi för att du ska känna dig säker med
            vårt samarbete redan från start och för att vi strävar efter vårt
            mål som är 100% kundnöjdhet.
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
                title: 'Vad kostar flyttstädning? ',
                content: 'Pris för flyttstädning är från 20 kr/kvm'
              },
              {
                title: 'Har ni garanti? ',
                content:
                  ' Ja, vi har sju dagars nöjd-kund-garanti på flyttstädning '
              },
              {
                title: 'Hur bokar jag tid?',
                content:
                  ' Vi tittar tillsammans på en tidpunkt som passar dig bra, och skräddarsyr flytten så att vi kan leverera en fulländad tjänst.'
              },
              {
                title: 'Hur lång framförhållning behöver jag ha?',
                content:
                  ' Om du vill ha en tid runt månadsskiftet rekommenderar vi att du bokar minst en vecka i förväg. Annars räcker det med några dagar innan. Självklart kan du alltid ringa oss i sista minuten och höra om vi har tider över.'
              }
            ]}
          />
        </GridItem>
      </GridContainer>
    </div>
  )
}
