import React from 'react'
// nodejs library that concatenates classes
import classNames from 'classnames'
// core components
import GridContainer from 'components/Grid/GridContainer.js'
import GridItem from 'components/Grid/GridItem.js'
import Link from 'next/link'
// @material-ui/core components
import { makeStyles } from '@material-ui/core/styles'

import teamStyle from 'styles/jss/nextjs-material-kit-pro/pages/aboutUsSections/teamStyle.js'

const useStyles = makeStyles(teamStyle)

export default function SectionTeam() {
  const classes = useStyles()
  return (
    <div className={classes.team}>
      <GridContainer>
        <GridItem
          md={12}
          sm={12}
          className={classNames(
            classes.mrAuto,
            classes.mlAuto,
            classes.textCenter
          )}
        >
          <h2 className={classes.title}>
            Skräddarsy städhjälp efter dina behov
          </h2>
          <h5 className={classes.description}>
            Att städa är energikrävande och tar en massa tid. Det är därmed
            ingenting som hamnar högt upp på prioriteringslistan. Vi hjälper dig
            komma hem till ett rent och städat hem. Vi erbjuder städhjälp i
            Göteborg där vi utför allt från hemstädning till kontorsstädning. Vi
            har personal som är SRY-certifierade (Servicebranschens Yrkesnämnd)
            och strävar ständigt efter att du som kund ska vara nöjd med utfört
            arbete. För exempelvis flyttstädning erbjuder vi nöjd-kund-garanti
            som gäller i sju dagar. Vi använder oss av miljövänliga produkter
            och gör miljövänliga val.Här hittar du alla våra tjänster inom
            städhjälp.
          </h5>
          <h2 className={classes.title}>
            Vi sköter hela din flytt – boka flytthjälp idag!
          </h2>
          <h5 className={classes.description}>
            Att flytta ska vara kul och spännande, men inte sällan känns det
            stressigt. Medan du fokuserar på det roliga erbjuder vi flytthjälp i
            Göteborg där vi tar hand om hela processen. Vi utför packhjälp,
            bärhjälp, tar till och med hand om ditt piano eller flygel och
            sköter transporten till och från bostaden. Alla våra priser är
            inklusive RUT-avdraget. Efter nya regler som tillkommit 2021 så har
            du som privatperson möjlighet att dra av arbetskostnader upp till 75
            000 kr per år genom RUT-avdraget. Vi använder oss av miljövänliga
            produkter och gör miljövänliga val. Läs mer om vilka tjänster som
            erbjuds inom flytthjälp <Link href='/flytthjalp'>här</Link>!
          </h5>
        </GridItem>
      </GridContainer>
    </div>
  )
}
