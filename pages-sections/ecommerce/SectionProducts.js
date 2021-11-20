import React from 'react'
// nodejs library that concatenates classes
import classNames from 'classnames'

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
          <GridItem md={6} sm={6}>
            <Card background style={{ backgroundImage: "url('/img/dg3.jpg')" }}>
              <CardBody background>
                <a href='#pablo'>
                  <h3 className={classes.cardTitle}>Städhjälp</h3>
                </a>
                <p className={classes.description}>
                  Don{"'"}t be scared of the truth because we need to restart
                  the human foundation in truth And I love you like Kanye loves
                  Kanye I love Rick Owens’ bed design but the back is...
                </p>
                <Button href='#' round color='primary'>
                  Se mer
                </Button>
              </CardBody>
            </Card>
          </GridItem>
          <GridItem md={6} sm={6}>
            <Card background style={{ backgroundImage: "url('/img/dg1.jpg')" }}>
              <CardBody background>
                <a href='#pablo'>
                  <h3 className={classes.cardTitle}>Flytthjälp</h3>
                </a>
                <p className={classes.description}>
                  Don{"'"}t be scared of the truth because we need to restart
                  the human foundation in truth And I love you like Kanye loves
                  Kanye I love Rick Owens’ bed design but the back is...
                </p>
                <Button href='#' round color='primary'>
                  Se mer
                </Button>
              </CardBody>
            </Card>
          </GridItem>
        </GridContainer>
      </div>
    </div>
  )
}
