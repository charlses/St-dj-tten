import React from 'react'
// nodejs library that concatenates classes
import classNames from 'classnames'
// core components
import GridContainer from 'components/Grid/GridContainer.js'
import GridItem from 'components/Grid/GridItem.js'
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
          <h2 className={classes.title}>Transporter</h2>
          <h5 className={classes.description}>
            De transporter som företaget gör i tätort sker med fordon med låga
            eller inga emissioner. I de tätorter där det erbjuds möjlighet att
            göra transporter med dubbfria däck, väljer företaget det.
          </h5>
          <h2 className={classes.title}>RUT-avdrag</h2>
          <h5 className={classes.description}>
            När du anlitar oss kan du använda dig av RUT-avdraget. Vi gör det
            enkelt för dig och sköter all administration. Genom RUT- avdraget
            har du som privatperson möjlighet att dra av arbetskostnader upp
            till 75 000 kr per år efter nya regler 2021. Det gör att du kan få
            50 % skatteavdrag på våra tjänster som exempelvis flytthjälp,
            flyttstädning och hemstädning.
            <br />
            <br />
            <p>Begreppet RUT är en akronym för:</p>
            <p>Rengöring</p>
            <p>Underhåll</p>
            <p>Tvätt</p>
          </h5>
          <h2 className={classes.title}>
            Kan alla använda sig av RUT-avdraget?
          </h2>
          <h5 className={classes.description}>
            För att ta del av RUT- avdraget behöver du minst vara 18 år och
            varit obegränsat skattskyldig under året. Om du som kund vill
            använda dig av rut-avdraget behöver du endast kryssa i rutan i våra
            formulär “Ja, jag vill använda mig av rut-avdraget för
            privatpersoner så ansöker vi som företag om detta åt dig”.
            <p>
              På följande länk hittar du mer information om Skatteverkets
              riktlinjer för RUT-avdrag{' '}
              <a
                href='https://www.skatteverket.se/privat/fastigheterochbostad/rotochrutarbete/gerarbetetratttillrutavdrag.106.5c1163881590be297b53de7.html'
                target='_blank'
              >
                {' '}
                skatteverket.se
              </a>
            </p>
          </h5>
        </GridItem>
      </GridContainer>
    </div>
  )
}
