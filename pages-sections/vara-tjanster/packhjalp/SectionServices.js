import React from 'react'
// nodejs library that concatenates classes
import classNames from 'classnames'
// @material-ui/core components
import { makeStyles } from '@material-ui/core/styles'
// @material-ui/icons
import Gesture from '@material-ui/icons/Gesture'
import Build from '@material-ui/icons/Build'
// core components
import GridContainer from 'components/Grid/GridContainer.js'
import GridItem from 'components/Grid/GridItem.js'
import InfoArea from 'components/InfoArea/InfoArea.js'
import { Public } from '@material-ui/icons'

import servicesStyle from 'styles/jss/nextjs-material-kit-pro/pages/aboutUsSections/servicesStyle.js'

const useStyles = makeStyles(servicesStyle)

export default function SectionServices() {
  const classes = useStyles()
  return (
    <div className={classes.services}>
      <GridContainer>
        <GridItem
          md={8}
          sm={8}
          className={classNames(
            classes.mlAuto,
            classes.mrAuto,
            classes.textCenter
          )}
        >
          <h2 className={classes.title}>Nöjd-kund-garanti</h2>
          <h5 className={classes.description}>
            Vi har genom åren lärt oss att den viktigaste marknadsföringen är
            nöjda kunder. Vi lämnar till och med nöjd kundgaranti för vår
            flyttstädning vilket innebär att vi åtgärdar eventuella synpunkter
            inom sju (7) dagar kostnadsfritt.
          </h5>
        </GridItem>
      </GridContainer>
      <GridContainer>
        <GridItem md={4} sm={4}>
          <InfoArea
            title='Samarbetspartners'
            description={
              <span>
                <p>
                  Idag har vi fantastiska samarbetspartners med mindre privata
                  till större multinationella bolag som gör att vi kan hjälpa
                  fler med våra tjänster runt om i Sverige.
                </p>
                <a href='om-oss/samarbetspartners'>Läs mer...</a>
              </span>
            }
            icon={Gesture}
            iconColor='rose'
          />
        </GridItem>
        <GridItem md={4} sm={4}>
          <InfoArea
            title='Vår miljöpolicy'
            description={
              <span>
                <p>
                  Städjätten lägger stor vikt vid miljöaspekter när vi arbetar
                  med städ- och flytthjälp och väljer därför att arbeta med
                  miljömärkta och miljövänliga produkter.
                </p>
                <a href='om-oss/miljopolicy'>Läs mer...</a>
              </span>
            }
            icon={Public}
            iconColor='rose'
          />
        </GridItem>
        <GridItem md={4} sm={4}>
          <InfoArea
            title='RUT-avdrag'
            description={
              <span>
                <p>
                  När du anlitar oss kan du använda dig av RUT-avdraget. Vi gör
                  det enkelt för dig och sköter all administration. Genom RUT-
                  avdraget har du som privatperson möjlighet att dra av
                  arbetskostnader upp till 75 000 kr per år efter nya regler
                  2021.
                </p>
                <a href='om-oss/rut'>Läs mer...</a>
              </span>
            }
            icon='mode_edit'
            iconColor='rose'
          />
        </GridItem>
      </GridContainer>
    </div>
  )
}
