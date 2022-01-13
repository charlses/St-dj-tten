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

import SectionNoImage from 'components/SectionComponent/SectionNoimage'

const useStyles = makeStyles(teamStyle)

export default function SectionTeam() {
  const classes = useStyles()
  return (
    <div className={classes.team}>
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
              Pianoflytt med rätt teknik och kunskap
            </h2>
            <h5 className={classes.description}>
              Städjätten är specialiserade på pianoflytt i Stockholm och
              Göteborg och erbjuder alltid en professionell och trygg transport
              av musikinstrument. Vi flyttar alla typer av klaviaturinstrument,
              allt från piano, flyglar till hammondorglar. Vissa instrument kan
              vara känsliga vilket kräver stor varsamhet. En faktor som är
              viktig under pianoflytt är goda transportmöjligheter, våra
              lastbilar är rymliga och säkra för att dina musikinstrument ska
              vara i trygga händer. <br />
              Anlita oss på Städjätten så kan du känna dig trygg med att ditt
              instrument kommer säkert fram till nästa ställe. Självklart har vi
              ansvarsförsäkring för att säkerställa både vår och er trygghet.{' '}
              <br /> <br />
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
              title: 'Vad kostar pianoflytt? ',
              content: 'Pris för pianoflytt är från 495 kr/h'
            },
            {
              title: 'Flyttar ni andra instrument?',
              content:
                'Vi flyttar alla typer av klaviaturinstrument – allt ifrån piano, flyglar till hammondorglar. Städjätten är specialiserade på pianoflytt och erbjuder alltid en professionell och trygg transport av musikinstrument. '
            }
          ]}
        />
      </SectionNoImage>
    </div>
  )
}
