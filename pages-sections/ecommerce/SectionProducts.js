import React from 'react'
// nodejs library that concatenates classes

// @material-ui/core components
import { makeStyles } from '@material-ui/core/styles'
// core components
import GridContainer from 'components/Grid/GridContainer.js'
import GridItem from 'components/Grid/GridItem.js'
import Card from 'components/Card/Card.js'
import CardBody from 'components/Card/CardBody.js'
import Button from 'components/CustomButtons/Button.js'

import styles from 'styles/jss/nextjs-material-kit-pro/pages/ecommerceSections/productsStyle.js'

const useStyles = makeStyles(styles)

export default function SectionProducts() {
  const classes = useStyles()
  return (
    <div className={classes.section}>
      <div className={classes.container}>
        <h2 className={classes.title}>Våra Tjänster</h2>
        <GridContainer>
          <GridItem md={6} sm={6} xs={6}>
            <Card
              background
              style={{ backgroundImage: "url('/img/hemstadning.jpg')" }}
            >
              <CardBody background>
                <br />
                <a href='/stadhjalp'>
                  <h3 className={classes.cardTitle}>Städhjälp</h3>
                </a>
                <br /> <br />
                <Button href='/stadhjalp' round color='primary'>
                  Se mer
                </Button>
              </CardBody>
            </Card>
          </GridItem>
          <GridItem md={6} sm={6} xs={6}>
            <Card
              background
              style={{ backgroundImage: "url('/img/flytt.jpg')" }}
            >
              <CardBody background>
                <br />
                <a href='/flytthjalp'>
                  <h3 className={classes.cardTitle}>Flytthjälp</h3>
                </a>
                <br /> <br />
                <Button href='/flytthjalp' round color='primary'>
                  Se mer
                </Button>
              </CardBody>
            </Card>
          </GridItem>
          <GridItem md={12} sm={12}>
            <Card
              background
              style={{ backgroundImage: "url('/img/flytthjalp.jpg')" }}
            >
              <CardBody background>
                <br />
                <a href='/vara-tjanster'>
                  <h3 className={classes.cardTitle}>Allla våra tjänster</h3>
                </a>
                <br /> <br />
                <Button href='/vara-tjanster' round color='primary'>
                  Se alla våra tjänster
                </Button>
              </CardBody>
            </Card>
          </GridItem>
        </GridContainer>
      </div>
    </div>
  )
}
