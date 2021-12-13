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
          className={classNames(classes.mrAuto, classes.mlAuto)}
        >
          <h2 className={classes.title}>Miljövänliga städmetoder</h2>
          <h5 className={classes.description}>
            För att minska användningen av kemikalier vid städning strävar vi
            efter att först och främst använda torra städmetoder där det är
            möjligt med hänsyn till ytskikt och rengöringskrav. Fuktiga metoder
            kan användas efter att ytan rengjorts med torra metoder.
            <br /> <br />
            En av förutsättningarna för att städtjänsten ska resultera i god
            städkvalitet är att personalen genomför städningen på ett effektivt
            och resursbesparande sätt. Därför ser vi till att vår personal har
            kunskap om hur t.ex. städkemikalier ska doseras.
          </h5>
          <h2 className={classes.title}>Miljövänliga städprodukter</h2>
          <h5 className={classes.description}>
            Det finns flertalet miljömärkta städkemikalier på marknaden. En
            städkemikalie som är miljömärkt innebär, enligt
            Upphandlingsmyndigheten, att en oberoende part har granskat
            produktens miljö- och hälsomässiga effekter utifrån ett
            livscykelperspektiv. Städtjänster påverkar miljön genom de
            städkemikalier som används, förbrukning av olika produkter såsom
            exempelvis avfallspåsar. <br />
            <br />
            Städjätten väljer alltid i första hand städprodukter och annat
            material som är miljömärkt.
          </h5>
          <h2 className={classes.title}>Transporter</h2>
          <h5 className={classes.description}>
            Vår främsta miljöpåverkan sker genom de resor och transporter som vi
            genomför när vi besöker kunder, utmaningen ligger därför i att
            minska våra utsläpp samtidigt som vi fortsätter att expandera. För
            att minska vår klimatpåverkan finns det ett antal andra åtgärder vi
            arbetar efter:
            <ul>
              <li>
                Effektivisera våra transporter genom att samlasta, ruttoptimera
                och samåka och därmed minska våra körsträckor och utsläpp.{' '}
              </li>
              <li>
                Vi ska där det är möjligt och ekonomiskt rimligt välja att resa
                med kollektivtrafik.
              </li>
              <li>
                I de tätorter där det erbjuds möjlighet att göra transporter med
                dubbfria däck, väljer företaget det.
              </li>
            </ul>
            <br />
            <br />
            Under 2022 planerar vi för att testa börja använda det förnyelsebara
            bränslet HVO till våra lastbilar samt att samtliga anställda som kör
            i arbetet ska gå Eco Driving-kurs för att kunna köra på ett mera
            miljövänligt sätt.
          </h5>
        </GridItem>
      </GridContainer>
    </div>
  )
}
