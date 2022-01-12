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
        <h5 className={classes.description}>
          <ul
            style={{
              listStyleImage: "url('/img/bullet.png')"
            }}
          >
            <h2 className={classes.title}>Vad ingår i flyttstädning?</h2>
            <li style={{ marginBottom: '10px' }}>
              Rengöring av diskbänk, diskbänkskåp och kranar
            </li>
            <li>Rengöring av kyl/frys (ska avfrostas i förväg)</li>
            <li>Rengöring av tömning av golvbrunn</li>
            <li>Rengöring av handfat</li>
            <li>
              Avtorkning av skåp och inbyggda garderober in- och utvändigt
            </li>
            <li>Dammsugning och våttorkning av golv</li>
          </ul>
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
            <h2 className={classes.title}>
              Nöjd-kund-garanti både för dig och den som flyttar in
            </h2>
            <h5 className={classes.description}>
              Vi ger alltid nöjd kundgaranti på flyttstädningen oavsett om det
              är ditt nya hem eller kontor. Detta för att du som ny ägare eller
              hyresgäst ska kunna komma med synpunkter om något inte stämmer med
              ditt önskemål. Vår kundgaranti gäller i sju dagar från
              städtillfället. Det här gör vi för att du ska känna dig säker med
              vårt samarbete redan från start och för att vi strävar efter vårt
              mål som är 100% kundnöjdhet. <br /> <br />
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
      </SectionNoImage>
    </div>
  )
}
