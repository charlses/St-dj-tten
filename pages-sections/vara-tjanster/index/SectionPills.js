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
    <div
      className={classes.section}
      style={{
        backgroundImage: 'linear-gradient(176deg, #E7F7FE 50%, #ffffff)'
      }}
    >
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
                <a href='/vara-tjanster/flyttstadning'>
                  <img src='/img/flyttstadning.jpg' alt='fyttstadning' />
                </a>
              </CardHeader>
              <CardBody>
                <h3 className={classes.cardTitle}>
                  <a href='/vara-tjanster/flyttstadning'>Flyttstädning</a>
                </h3>
                <p>fr. 20kr/kvm</p>
                <Button
                  round
                  href='/vara-tjanster/flyttstadning'
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
                <a href='/vara-tjanster/storstadning'>
                  <img src='/img/storstadning.jpg' alt='Storstädning' />
                </a>
              </CardHeader>
              <CardBody>
                <h3 className={classes.cardTitle}>
                  <a href='/vara-tjanster/storstadning'>Storstädning</a>
                </h3>
                <p>fr. 250kr/h</p>
                <Button
                  round
                  href='/vara-tjanster/storstadning'
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
                <a href='/vara-tjanster/hemstadning'>
                  <img src='/img/hemstadning.jpg' alt='hemstadning' />
                </a>
              </CardHeader>
              <CardBody>
                <h3 className={classes.cardTitle}>
                  <a href='/vara-tjanster/hemstadning'>Hemstädning</a>
                </h3>
                <p>fr. 179kr/h</p>
                <Button round href='/vara-tjanster/hemstadning' color='primary'>
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
                <a href='/vara-tjanster/visningsstadning'>
                  <img src='/img/visningsstadning.jpg' alt='Visningsstädning' />
                </a>
              </CardHeader>
              <CardBody>
                <h3 className={classes.cardTitle}>
                  <a href='/vara-tjanster/visningsstadning'>Visningsstädning</a>
                </h3>
                <p>fr. 20kr/kvm</p>
                <Button
                  round
                  href='/vara-tjanster/visningsstadning'
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
                <a href='/vara-tjanster/kontorsstadning'>
                  <img src='/img/kontorsstadning.jpg' alt='Kontorsstädning' />
                </a>
              </CardHeader>
              <CardBody>
                <h3 className={classes.cardTitle}>
                  <a href='/vara-tjanster/kontorsstadning'>Kontorsstädning</a>
                </h3>
                <p>fr. 329kr/h</p>
                <Button
                  round
                  href='/vara-tjanster/kontorsstadning'
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
                <a href='/vara-tjanster/byggstadning'>
                  <img src='/img/byggstadning.jpg' alt='Byggstädning' />
                </a>
              </CardHeader>
              <CardBody>
                <h3 className={classes.cardTitle}>
                  <a href='/vara-tjanster/byggstadning'>Byggstädning</a>
                </h3>
                <p>fr. 495kr/h</p>
                <Button
                  round
                  href='/vara-tjanster/byggstadning'
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
                <a href='/vara-tjanster/sanering'>
                  <img src='/img/sanering.jpg' alt='sanering' />
                </a>
              </CardHeader>
              <CardBody>
                <h3 className={classes.cardTitle}>
                  <a href='/vara-tjanster/sanering'>Sanering</a>
                </h3>
                <p>
                  <a href='/kontakta-oss'> Kontakta oss</a> för pris
                </p>
                <Button round href='/vara-tjanster/sanering' color='primary'>
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
                <a href='/vara-tjanster/flytthjalp'>
                  <img src='/img/flytthjalp.jpg' alt='flytthjalp' />
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
                  <img src='/img/packhjalp.jpg' alt='packhjalp' />
                </a>
              </CardHeader>
              <CardBody>
                <h3 className={classes.cardTitle}>
                  <a href='/vara-tjanster/packhjalp'>Packhjälp</a>
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
                  <img src='/img/barhjalp.jpg' alt='barhjalp' />
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
                  <img src='/img/pianoflytt.jpg' alt='pianoflytt' />
                </a>
              </CardHeader>
              <CardBody>
                <h3 className={classes.cardTitle}>
                  <a href='/vara-tjanster/pianoflytt'>Pianoflytt</a>
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
                <a href='/vara-tjanster/kontorsflytt'>
                  <img src='/img/kontorsflytt.jpg' alt='kontorsflytt' />
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
        </GridContainer>
      </div>
    </div>
  )
}
