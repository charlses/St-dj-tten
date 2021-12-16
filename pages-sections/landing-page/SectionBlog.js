import React from 'react'

// @material-ui/core components
import { makeStyles } from '@material-ui/core/styles'
import Icon from '@material-ui/core/Icon'
// @material-ui/icons
import Favorite from '@material-ui/icons/Favorite'
import Share from '@material-ui/icons/Share'
import ChatBubble from '@material-ui/icons/ChatBubble'
import Schedule from '@material-ui/icons/Schedule'
import TrendingUp from '@material-ui/icons/TrendingUp'
import Subject from '@material-ui/icons/Subject'
import WatchLater from '@material-ui/icons/WatchLater'
import People from '@material-ui/icons/People'
import Business from '@material-ui/icons/Business'
import Check from '@material-ui/icons/Check'
import Close from '@material-ui/icons/Close'
import Delete from '@material-ui/icons/Delete'
import Bookmark from '@material-ui/icons/Bookmark'
import Refresh from '@material-ui/icons/Refresh'
import Receipt from '@material-ui/icons/Receipt'
// core components
import GridContainer from 'components/Grid/GridContainer.js'
import GridItem from 'components/Grid/GridItem.js'
import Card from 'components/Card/Card.js'
import CardHeader from 'components/Card/CardHeader.js'
import CardBody from 'components/Card/CardBody.js'
import CardFooter from 'components/Card/CardFooter.js'
import CardAvatar from 'components/Card/CardAvatar.js'
import Info from 'components/Typography/Info.js'
import Danger from 'components/Typography/Danger.js'
import Success from 'components/Typography/Success.js'
import Warning from 'components/Typography/Warning.js'
import Rose from 'components/Typography/Rose.js'
import Button from 'components/CustomButtons/Button.js'

import styles from 'styles/jss/nextjs-material-kit-pro/pages/componentsSections/sectionCards.js'

const useStyles = makeStyles(styles)

export default function SectionCards() {
  const classes = useStyles()

  return (
    <div
      className={classes.section}
      style={{
        backgroundImage: 'linear-gradient(176deg, #E7F7FE 70%, #ffffff)',
        paddingTop: '50px',
        paddingBottom: '60px'
      }}
    >
      {/* BLOG CARDS START */}
      <div>
        <div className={classes.container}>
          <div>
            <h2 className={classes.title}>Senaste Nyheter</h2>
          </div>
          <GridContainer>
            <GridItem xs={12} sm={6} md={6} lg={4}>
              <Card blog>
                <CardHeader image>
                  <a href='#pablo' onClick={(e) => e.preventDefault()}>
                    <img src='/img/examples/card-blog1.jpg' alt='...' />
                    <div className={classes.cardTitleAbsolute}>
                      This Summer Will be Awesome
                    </div>
                  </a>
                  <div
                    className={classes.coloredShadow}
                    style={{
                      backgroundImage: "url('/img/examples/card-blog1.jpg')",
                      opacity: '1'
                    }}
                  />
                </CardHeader>
                <CardBody>
                  <Info>
                    <h6 className={classes.cardCategory}>FASHION</h6>
                  </Info>
                  <div className={classes.cardDescription}>
                    Don{"'"}t be scared of the truth because we need to restart
                    the human foundation in truth And I love you like Kanye
                    loves Kanye I love Rick Owens’ bed design but the back is...
                  </div>
                </CardBody>
              </Card>
              <Card color='info'>
                <CardBody color>
                  <h5 className={classes.cardCategorySocialWhite}>
                    <i className='fab fa-twitter' />
                    Twitter
                  </h5>
                  <h4 className={classes.cardTitleWhite}>
                    <a href='#pablo' onClick={(e) => e.preventDefault()}>
                      {'"'}You Don{"'"}t Have to Sacrifice Joy to Build a
                      Fabulous Business and Life{'"'}
                    </a>
                  </h4>
                </CardBody>
                <CardFooter>
                  <div className={classes.authorWhite}>
                    <a href='#pablo' onClick={(e) => e.preventDefault()}>
                      <img
                        src='/img/faces/avatar.jpg'
                        alt='...'
                        className={classes.imgRaised + ' ' + classes.avatar}
                      />
                      <span>Tania Andrew</span>
                    </a>
                  </div>
                  <div className={classes.statsWhite + ' ' + classes.mlAuto}>
                    <Favorite />
                    2.4K ·
                    <Share />
                    45
                  </div>
                </CardFooter>
              </Card>
            </GridItem>
            <GridItem xs={12} sm={6} md={6} lg={4}>
              <Card>
                <CardBody>
                  <Danger>
                    <h6 className={classes.cardCategory}>
                      <TrendingUp /> TRENDING
                    </h6>
                  </Danger>
                  <h4 className={classes.cardTitle}>
                    <a href='#pablo' onClick={(e) => e.preventDefault()}>
                      To Grow Your Business Start Focusing on Your Employees
                    </a>
                  </h4>
                </CardBody>
                <CardFooter>
                  <div className={classes.author}>
                    <a href='#pablo' onClick={(e) => e.preventDefault()}>
                      <img
                        src='/img/faces/christian.jpg'
                        alt='...'
                        className={classes.imgRaised + ' ' + classes.avatar}
                      />
                      <span>Lord Alex</span>
                    </a>
                  </div>
                  <div className={classes.stats + ' ' + classes.mlAuto}>
                    <Favorite />
                    345 ·
                    <ChatBubble />
                    45
                  </div>
                </CardFooter>
              </Card>
              <Card blog>
                <CardHeader image>
                  <a href='#pablo' onClick={(e) => e.preventDefault()}>
                    <img src='/img/examples/card-blog2.jpg' alt='...' />
                  </a>
                  <div
                    className={classes.coloredShadow}
                    style={{
                      backgroundImage: "url('/img/examples/card-blog2.jpg')",
                      opacity: '1'
                    }}
                  />
                </CardHeader>
                <CardBody>
                  <Success>
                    <h6 className={classes.cardCategory}>Legal</h6>
                  </Success>
                  <h4 className={classes.cardTitle}>
                    <a href='#pablo' onClick={(e) => e.preventDefault()}>
                      5 Common Legal Mistakes That Can Trip-Up Your Startup
                    </a>
                  </h4>
                  <p className={classes.cardDescription}>
                    Don{"'"}t be scared of the truth because we need to restart
                    the human foundation in truth And I love you like Kanye
                    loves Kanye I love Rick Owens’ bed design but the back is...
                  </p>
                </CardBody>
                <CardFooter>
                  <div className={classes.author}>
                    <a href='#pablo' onClick={(e) => e.preventDefault()}>
                      <img
                        src='/img/faces/marc.jpg'
                        alt='...'
                        className={classes.imgRaised + ' ' + classes.avatar}
                      />
                      <span>Mike John</span>
                    </a>
                  </div>
                  <div className={classes.stats + ' ' + classes.mlAuto}>
                    <Schedule />5 min read
                  </div>
                </CardFooter>
              </Card>
            </GridItem>
            <GridItem xs={12} sm={6} md={6} lg={4}>
              <Card blog>
                <CardHeader image>
                  <a href='#pablo' onClick={(e) => e.preventDefault()}>
                    <img src='/img/examples/blog8.jpg' alt='...' />
                  </a>
                  <div
                    className={classes.coloredShadow}
                    style={{
                      backgroundImage: "url('/img/examples/blog8.jpg')",
                      opacity: '1'
                    }}
                  />
                </CardHeader>
                <CardBody>
                  <Danger>
                    <h6 className={classes.cardCategory}>
                      <TrendingUp /> TRENDING
                    </h6>
                  </Danger>
                  <h4 className={classes.cardTitle}>
                    <a href='#pablo' onClick={(e) => e.preventDefault()}>
                      To Grow Your Business Start Focusing on Your Employees
                    </a>
                  </h4>
                </CardBody>
                <CardFooter>
                  <div className={classes.author}>
                    <a href='#pablo' onClick={(e) => e.preventDefault()}>
                      <img
                        src='/img/faces/marc.jpg'
                        alt='...'
                        className={classes.imgRaised + ' ' + classes.avatar}
                      />
                      <span>Mike John</span>
                    </a>
                  </div>
                  <div className={classes.stats + ' ' + classes.mlAuto}>
                    <Schedule />5 min read
                  </div>
                </CardFooter>
              </Card>
              <Card color='success'>
                <CardBody color>
                  <h5 className={classes.cardCategorySocialWhite}>
                    <i className='far fa-newspaper' />
                    TechCrunch
                  </h5>
                  <h4 className={classes.cardTitleWhite}>
                    <a href='#pablo' onClick={(e) => e.preventDefault()}>
                      {'"'}Focus on Your Employees{'"'}
                    </a>
                  </h4>
                  <p className={classes.cardDescriptionWhite}>
                    Don{"'"}t be scared of the truth because we need to restart
                    the human foundation in truth And I love you like Kanye
                    loves Kanye I love Rick Owens’ bed design but the back is...
                  </p>
                  <div
                    className={
                      classes.stats + ' ' + classes.justifyContentCenter
                    }
                  >
                    <Button color='white' round>
                      Read Article
                    </Button>
                  </div>
                </CardBody>
              </Card>
            </GridItem>
          </GridContainer>
        </div>
      </div>
    </div>
  )
}
