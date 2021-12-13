import React from 'react'

// @material-ui/core components
import { makeStyles } from '@material-ui/core/styles'
// @material-ui/icons
import Subject from '@material-ui/icons/Subject'
// core components
import GridContainer from 'components/Grid/GridContainer.js'
import GridItem from 'components/Grid/GridItem.js'
import Card from 'components/Card/Card.js'
import CardBody from 'components/Card/CardBody.js'
import Button from 'components/CustomButtons/Button.js'
import { ArrowRight, ArrowLeft } from '@material-ui/icons'

import styles from 'styles/jss/nextjs-material-kit-pro/pages/componentsSections/sectionCards.js'

const useStyles = makeStyles(styles)

export default function SectionCards() {
  const [activeRotate2, setActiveRotate2] = React.useState('')
  const classes = useStyles()
  React.useEffect(() => {
    if (window) {
      window.addEventListener('resize', addStylesForRotatingCards)
    }
    addStylesForRotatingCards()
    return function cleanup() {
      if (window) {
        window.removeEventListener('resize', addStylesForRotatingCards)
      }
    }
  })
  const addStylesForRotatingCards = () => {
    var rotatingCards = document.getElementsByClassName(classes.cardRotate)
    for (let i = 0; i < rotatingCards.length; i++) {
      var rotatingCard = rotatingCards[i]
      var cardFront = rotatingCard.getElementsByClassName(classes.front)[0]
      var cardBack = rotatingCard.getElementsByClassName(classes.back)[0]
      cardFront.style.height = 'unset'
      cardFront.style.width = 'unset'
      cardBack.style.height = 'unset'
      cardBack.style.width = 'unset'
      var rotatingWrapper = rotatingCard.parentElement
      var cardWidth = rotatingCard.parentElement.offsetWidth
      var cardHeight = rotatingCard.children[0].children[0].offsetHeight
      rotatingWrapper.style.height = cardHeight + 'px'
      rotatingWrapper.style['margin-bottom'] = 30 + 'px'
      cardFront.style.height = 'unset'
      cardFront.style.width = 'unset'
      cardBack.style.height = 'unset'
      cardBack.style.width = 'unset'
      cardFront.style.height = cardHeight + 35 + 'px'
      cardFront.style.width = cardWidth + 'px'
      cardBack.style.height = cardHeight + 35 + 'px'
      cardBack.style.width = cardWidth + 'px'
    }
  }
  return (
    <div className='cd-section' id='cards'>
      <div className={classes.section}>
        <div id='morphingCards' className='cd-section'>
          <div className={classes.container}>
            <div className={classes.title}>
              <h3>Våra samarbetspartners</h3>
            </div>
            <GridContainer>
              <GridItem xs={12} sm={6} md={6} lg={4}>
                <div
                  className={
                    classes.rotatingCardContainer +
                    ' ' +
                    classes.manualRotate +
                    ' ' +
                    activeRotate2
                  }
                >
                  <Card className={classes.cardRotate}>
                    <div
                      className={
                        classes.front + ' ' + classes.wrapperBackground
                      }
                      style={{
                        backgroundImage: "url('/img/packhjalp.jpg')"
                      }}
                    >
                      <CardBody background className={classes.cardBodyRotate}>
                        <a href='#pablo' onClick={(e) => e.preventDefault()}>
                          <h3 className={classes.cardTitleWhite}>
                            Samarbete med 24 Storage
                          </h3>
                        </a>

                        <div className={classes.textCenter}>
                          <Button
                            round
                            color='primary'
                            onClick={() =>
                              setActiveRotate2(classes.activateRotate)
                            }
                          >
                            Läs mer <ArrowRight />
                          </Button>
                        </div>
                      </CardBody>
                    </div>
                    <div
                      className={classes.back + ' ' + classes.wrapperBackground}
                      style={{
                        backgroundImage: "url('/img/packhjalp.jpg')"
                      }}
                    >
                      <CardBody background className={classes.cardBodyRotate}>
                        <h5 className={classes.cardTitleWhite}>
                          Hyr förråd & magasinering med 24 Storage
                        </h5>

                        <div className={classes.textCenter}>
                          <Button
                            round
                            color='primary'
                            href='https://24storage.se/magasinering/vara-tjanster/stadjatten'
                            target='_blank'
                          >
                            <Subject /> Gå till erbjudandet
                          </Button>

                          <br />
                          <Button
                            round
                            color='primary'
                            onClick={() => setActiveRotate2('')}
                          >
                            Tillbaka
                          </Button>
                        </div>
                      </CardBody>
                    </div>
                  </Card>
                </div>
              </GridItem>
              <GridItem xs={12} sm={6} md={6} lg={4}>
                <div
                  className={
                    classes.rotatingCardContainer +
                    ' ' +
                    classes.manualRotate +
                    ' ' +
                    activeRotate2
                  }
                >
                  <Card className={classes.cardRotate}>
                    <div
                      className={
                        classes.front + ' ' + classes.wrapperBackground
                      }
                      style={{
                        backgroundImage: "url('/img/pianoflytt.jpg')"
                      }}
                    >
                      <CardBody background className={classes.cardBodyRotate}>
                        <a href='#pablo' onClick={(e) => e.preventDefault()}>
                          <h3 className={classes.cardTitleWhite}>
                            Samarbetare med mäklare
                          </h3>
                        </a>

                        <div className={classes.textCenter}>
                          <Button
                            round
                            color='primary'
                            onClick={() =>
                              setActiveRotate2(classes.activateRotate)
                            }
                          >
                            Läs mer <ArrowRight />
                          </Button>
                        </div>
                      </CardBody>
                    </div>
                    <div
                      className={classes.back + ' ' + classes.wrapperBackground}
                      style={{
                        backgroundImage: "url('/img/pianoflytt.jpg')"
                      }}
                    >
                      <CardBody background className={classes.cardBodyRotate}>
                        <h5 className={classes.cardTitleWhite}>
                          Vi har koll på din bostadsvärdering!
                        </h5>

                        <div className={classes.textCenter}>
                          <Button round color='primary' href='/offert'>
                            <Subject /> Gå till erbjudandet
                          </Button>

                          <br />
                          <Button
                            round
                            color='primary'
                            onClick={() => setActiveRotate2('')}
                          >
                            Tillbaka
                          </Button>
                        </div>
                      </CardBody>
                    </div>
                  </Card>
                </div>
              </GridItem>
              <GridItem xs={12} sm={6} md={6} lg={4}>
                <div
                  className={
                    classes.rotatingCardContainer +
                    ' ' +
                    classes.manualRotate +
                    ' ' +
                    activeRotate2
                  }
                >
                  <Card className={classes.cardRotate}>
                    <div
                      className={
                        classes.front + ' ' + classes.wrapperBackground
                      }
                      style={{
                        backgroundImage: "url('/img/flytthjalp.jpg')"
                      }}
                    >
                      <CardBody background className={classes.cardBodyRotate}>
                        <a href='#pablo' onClick={(e) => e.preventDefault()}>
                          <h3 className={classes.cardTitleWhite}>
                            Samarbete med Golvexperten
                          </h3>
                        </a>

                        <div className={classes.textCenter}>
                          <Button
                            round
                            color='primary'
                            onClick={() =>
                              setActiveRotate2(classes.activateRotate)
                            }
                          >
                            Läs mer <ArrowRight />
                          </Button>
                        </div>
                      </CardBody>
                    </div>
                    <div
                      className={classes.back + ' ' + classes.wrapperBackground}
                      style={{
                        backgroundImage: "url('/img/flytthjalp.jpg')"
                      }}
                    >
                      <CardBody background className={classes.cardBodyRotate}>
                        <h5 className={classes.cardTitleWhite}>
                          Dina golv är i trygga händer!
                        </h5>

                        <div className={classes.textCenter}>
                          <Button
                            round
                            color='primary'
                            href='https://golvexperten.nu/vara-tjanster/'
                            target='_blank'
                          >
                            <Subject /> Gå till erbjudandet
                          </Button>
                          <br />
                          <Button
                            round
                            color='primary'
                            onClick={() => setActiveRotate2('')}
                          >
                            Tillbaka
                          </Button>
                        </div>
                      </CardBody>
                    </div>
                  </Card>
                </div>
              </GridItem>
            </GridContainer>
          </div>
        </div>
      </div>
    </div>
  )
}
