import React from 'react'
// react component for creating beautiful carousel
import Carousel from 'react-slick'
// @material-ui/core components
import { makeStyles } from '@material-ui/core/styles'
// @material-ui/icons
import FormatQuote from '@material-ui/icons/FormatQuote'
import Star from '@material-ui/icons/Star'
// core components
import GridContainer from 'components/Grid/GridContainer.js'
import GridItem from 'components/Grid/GridItem.js'
import Card from 'components/Card/Card.js'
import CardBody from 'components/Card/CardBody.js'
import CardAvatar from 'components/Card/CardAvatar.js'
import Muted from 'components/Typography/Muted.js'

import testimonialsStyle from 'styles/jss/nextjs-material-kit-pro/pages/sectionsSections/testimonialsStyle.js'

const useStyles = makeStyles(testimonialsStyle)

export default function SectionTestimonials({ ...rest }) {
  const classes = useStyles()

  return (
    <div className='cd-section' {...rest}>
      {/* Testimonials 3 START */}
      <div className={classes.testimonials}>
        <div className={classes.container}>
          <GridContainer>
            <GridItem
              xs={12}
              sm={6}
              md={6}
              className={
                classes.mlAuto + ' ' + classes.mrAuto + ' ' + classes.textCenter
              }
            >
              <h2 className={classes.title}>Vad våra kunder säger om oss</h2>
            </GridItem>
          </GridContainer>
          <GridContainer>
            <GridItem xs={12} sm={4} md={4}>
              <Card testimonial plain>
                <CardAvatar testimonial plain>
                  <a href='#pablo' onClick={(e) => e.preventDefault()}>
                    <img src='/img/faces/card-profile1-square.jpg' alt='...' />
                  </a>
                </CardAvatar>
                <CardBody plain>
                  <h4 className={classes.title}>Mike Andrew</h4>
                  <Muted>
                    <h6>CEO @ MARKETING DIGITAL LTD.</h6>
                  </Muted>
                  <h5 className={classes.cardDescription}>
                    {'"'}I speak yell scream directly at the old guard on behalf
                    of the future. I gotta say at that time I’d like to meet
                    Kanye I speak yell scream directly at the old guard on
                    behalf of the future.{'"'}
                  </h5>
                </CardBody>
              </Card>
            </GridItem>
            <GridItem xs={12} sm={4} md={4}>
              <Card testimonial plain>
                <CardAvatar testimonial plain>
                  <a href='#pablo' onClick={(e) => e.preventDefault()}>
                    <img src='/img/faces/card-profile4-square.jpg' alt='...' />
                  </a>
                </CardAvatar>
                <CardBody plain>
                  <h4 className={classes.title}>Tina Thompson</h4>
                  <Muted>
                    <h6>MARKETING @ APPLE INC.</h6>
                  </Muted>
                  <h5 className={classes.cardDescription}>
                    {'"'}I promise I will never let the people down. I want a
                    better life for all!!! Pablo Pablo Pablo Pablo! Thank you
                    Anna for the invite thank you to the whole Vogue team It
                    wasn’t any Kanyes I love Rick Owens’ bed design but the back
                    is too high for the beams and angle of the ceiling{'"'}
                  </h5>
                </CardBody>
              </Card>
            </GridItem>
            <GridItem xs={12} sm={4} md={4}>
              <Card testimonial plain>
                <CardAvatar testimonial plain>
                  <a href='#pablo' onClick={(e) => e.preventDefault()}>
                    <img src='/img/faces/card-profile6-square.jpg' alt='...' />
                  </a>
                </CardAvatar>
                <CardBody plain>
                  <h4 className={classes.title}>Gina West</h4>
                  <Muted>
                    <h6>CFO @ APPLE INC.</h6>
                  </Muted>
                  <h5 className={classes.cardDescription}>
                    {'"'}I{"'"}ve been trying to figure out the bed design for
                    the master bedroom at our Hidden Hills compound... Royère
                    doesn
                    {"'"}t make a Polar bear bed but the Polar bear. This is a
                    very nice testimonial about this company.{'"'}
                  </h5>
                </CardBody>
              </Card>
            </GridItem>
          </GridContainer>
        </div>
      </div>
      {/* Testimonials 3 END */}
    </div>
  )
}
