import React from 'react'
// @material-ui/core components
import { makeStyles } from '@material-ui/core/styles'
// core components
import GridContainer from 'components/Grid/GridContainer.js'
import GridItem from 'components/Grid/GridItem.js'
import Card from 'components/Card/Card.js'
import CardBody from 'components/Card/CardBody.js'
import Button from 'components/CustomButtons/Button.js'
import classNames from 'classnames'

import CardHeader from 'components/Card/CardHeader.js'

import sectionPillsStyle from 'styles/jss/nextjs-material-kit-pro/pages/blogPostsSections/sectionPillsStyle.js'

const useStyles = makeStyles(sectionPillsStyle)

export default function SectionPills() {
  const classes = useStyles()
  return (
    <div className={classes.section}>
      <div className={classes.container}>
        <GridContainer>
          <GridItem
            xs={12}
            sm={6}
            md={6}
            lg={4}
            className={classNames(
              classes.mrAuto,
              classes.mlAuto,
              classes.textCenter
            )}
          >
            <Card>
              <CardHeader image>
                <a href='/vara-tjanster/flytthjalp'>
                  <img src='/img/flytthjalp.jpg' alt='Flytthjälp' />
                </a>
              </CardHeader>
              <CardBody>
                <h3 className={classes.cardTitle}>
                  <a href='/vara-tjanster/flytthjalp'>Flytthjälp</a>
                </h3>
                <p>fr. 495kr/h</p>
                <Button round href='/vara-tjanster/flytthjalp' color='primary'>
                  Läs mer
                </Button>
              </CardBody>
            </Card>
          </GridItem>
          <GridItem
            xs={12}
            sm={6}
            md={6}
            lg={4}
            className={classNames(
              classes.mrAuto,
              classes.mlAuto,
              classes.textCenter
            )}
          >
            <Card>
              <CardHeader image>
                <a href='/vara-tjanster/packhjalp'>
                  <img src='/img/packhjalp.jpg' alt='Packhjalp' />
                </a>
              </CardHeader>
              <CardBody>
                <h3 className={classes.cardTitle}>
                  <a href='/vara-tjanster/packhjalp'>Packhjalp</a>
                </h3>
                <p>fr. 495kr/h</p>
                <Button round href='/vara-tjanster/packhjalp' color='primary'>
                  Läs mer
                </Button>
              </CardBody>
            </Card>
          </GridItem>
          <GridItem
            xs={12}
            sm={6}
            md={6}
            lg={4}
            className={classNames(
              classes.mrAuto,
              classes.mlAuto,
              classes.textCenter
            )}
          >
            <Card>
              <CardHeader image>
                <a href='/vara-tjanster/barhjalp'>
                  <img src='/img/barhjalp.jpg' alt='Bärhjälp' />
                </a>
              </CardHeader>
              <CardBody>
                <h3 className={classes.cardTitle}>
                  <a href='/vara-tjanster/barhjalp'>Bärhjälp</a>
                </h3>
                <p>fr. 495kr/h</p>
                <Button round href='/vara-tjanster/barhjalp' color='primary'>
                  Läs mer
                </Button>
              </CardBody>
            </Card>
          </GridItem>
          <GridItem
            xs={12}
            sm={6}
            md={6}
            lg={4}
            className={classNames(
              classes.mrAuto,
              classes.mlAuto,
              classes.textCenter
            )}
          >
            <Card>
              <CardHeader image>
                <a href='/vara-tjanster/kontorsflytt'>
                  <img src='/img/kontorsflytt.jpg' alt='Kontorsflytt' />
                </a>
              </CardHeader>
              <CardBody>
                <h3 className={classes.cardTitle}>
                  <a href='/vara-tjanster/kontorsflytt'>Kontorsflytt</a>
                </h3>
                <p>fr. 990kr/h</p>
                <Button
                  round
                  href='/vara-tjanster/kontorsflytt'
                  color='primary'
                >
                  Läs mer
                </Button>
              </CardBody>
            </Card>
          </GridItem>
          <GridItem
            xs={12}
            sm={6}
            md={6}
            lg={4}
            className={classNames(
              classes.mrAuto,
              classes.mlAuto,
              classes.textCenter
            )}
          >
            <Card>
              <CardHeader image>
                <a href='/vara-tjanster/pianoflytt'>
                  <img src='/img/pianoflytt.jpg' alt='Pianoflytt' />
                </a>
              </CardHeader>
              <CardBody>
                <h3 className={classes.cardTitle}>
                  <a href='/vara-tjanster/painoflytt'>Pianoflytt</a>
                </h3>
                <p>fr. 495kr/h</p>
                <Button round href='/vara-tjanster/pianoflytt' color='primary'>
                  Läs mer
                </Button>
              </CardBody>
            </Card>
          </GridItem>

          <GridItem
            xs={12}
            sm={6}
            md={6}
            lg={4}
            className={classNames(
              classes.mrAuto,
              classes.mlAuto,
              classes.textCenter
            )}
          >
            <Card>
              <CardHeader image>
                <a href='/vara-tjanster/bortforsling'>
                  <img src='/img/bortforsling.jpg' alt='bortforsling' />
                </a>
              </CardHeader>
              <CardBody>
                <h3 className={classes.cardTitle}>
                  <a href='/vara-tjanster/bortforsling'>Bortforsling</a>
                </h3>
                <p>fr. 495kr/h</p>
                <Button
                  round
                  href='/vara-tjanster/bortforsling'
                  color='primary'
                >
                  Läs mer
                </Button>
              </CardBody>
            </Card>
          </GridItem>
        </GridContainer>
      </div>
    </div>
  )
}
