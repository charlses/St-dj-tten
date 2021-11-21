import React from 'react'
// @material-ui/core components
import { makeStyles } from '@material-ui/core/styles'

// @material-ui/icons
import { Public, Security, Payment } from '@material-ui/icons'
// core components
import GridContainer from 'components/Grid/GridContainer.js'
import GridItem from 'components/Grid/GridItem.js'
import InfoArea from 'components/InfoArea/InfoArea.js'
import Button from 'components/CustomButtons/Button.js'
import { Grow } from '@material-ui/core'
import Link from 'next/Link'

import productStyle from 'styles/jss/nextjs-material-kit-pro/pages/landingPageSections/productStyle.js'

const useStyles = makeStyles(productStyle)

export default function SectionProduct() {
  const classes = useStyles()
  return (
    <div className={classes.section}>
      <div className={classes.container}>
        <GridContainer justify='center'>
          <Grow in={true} style={{ transformOrigin: '0 0 0' }} timeout={150}>
            <GridItem xs={12} sm={8} md={8}>
              <h2 className={classes.title}>
                Städ- och flyttjänster med fokus på dig som kund
              </h2>
              <h5 className={classes.description}>
                Vi är ett medelstort företag som erbjuder städ- och flytthjälp.
                Vi finns i både Stockholm och Göteborg för flyttstädning,
                hemstädning, storstädning, byggstädning, visningsstädning,
                kontorsstädning, sanering, trädgårdsskötsel, flytthjälp,
                bortforsling, packhjälp eller bärhjälp.
              </h5>
            </GridItem>
          </Grow>
        </GridContainer>

        <div>
          <GridContainer>
            <Grow in={true} style={{ transformOrigin: '0 0 0' }} timeout={1000}>
              <GridItem xs={12} sm={4} md={4}>
                <InfoArea
                  title='Nöjd-kund-garanti'
                  description='Vi har genom åren lärt oss att den viktigaste marknadsföringen är
                nöjda kunder. Vi lämnar till och med nöjd kundgaranti för vår
                flyttstädning vilket innebär att vi åtgärdar eventuella synpunkter
                inom sju (7) dagar kostnadsfritt.'
                  icon={Security}
                  iconColor='primary'
                  vertical
                />
              </GridItem>
            </Grow>
            <Grow in={true} style={{ transformOrigin: '0 0 0' }} timeout={2000}>
              <GridItem xs={12} sm={4} md={4}>
                <InfoArea
                  title='Vår miljöpolicy'
                  description='Städjätten lägger stor vikt vid miljöaspekter när vi arbetar
                med städ- och flytthjälp och väljer därför att arbeta med
                miljömärkta och miljövänliga produkter.'
                  icon={Public}
                  iconColor='success'
                  vertical
                />
              </GridItem>
            </Grow>
            <Grow in={true} style={{ transformOrigin: '0 0 0' }} timeout={3000}>
              <GridItem xs={12} sm={4} md={4}>
                <InfoArea
                  title='RUT-avdrag'
                  description='När du anlitar oss kan du använda dig av RUT-avdraget. Vi gör
                det enkelt för dig och sköter all administration. Genom RUT-
                avdraget har du som privatperson möjlighet att dra av
                arbetskostnader upp till 75 000 kr per år efter nya regler
                2021.'
                  icon={Payment}
                  iconColor='danger'
                  vertical
                />
              </GridItem>
            </Grow>

            <GridItem xs={12} sm={12} md={12}></GridItem>
          </GridContainer>
        </div>
      </div>
    </div>
  )
}
