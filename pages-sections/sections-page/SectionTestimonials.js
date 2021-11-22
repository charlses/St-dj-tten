import React from 'react'
// react component for creating beautiful carousel
// @material-ui/core components
import { makeStyles } from '@material-ui/core/styles'
// @material-ui/icons
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
      <div className={classes.testimonials + ' ' + classes.sectionDark}>
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
                <CardBody plain>
                  <h4 className={classes.title}>Reyhane T</h4>
                  <Muted>
                    <h6>skrev om Städjätten</h6>
                  </Muted>
                  <h5 className={classes.cardDescription}>
                    {'"'}Jag blev bemött med massa leenden och gott intryck,
                    Diego och David var väldigt duktiga och gjorde allt
                    superbra, de uppfyllde alla mina förväntningar jag blev
                    supernöjd, jag kommer tipsa er till andra som är i behov av
                    flytt.
                    {'"'}
                  </h5>
                </CardBody>
              </Card>
            </GridItem>
            <GridItem xs={12} sm={4} md={4}>
              <Card testimonial plain>
                <CardBody plain>
                  <h4 className={classes.title}>Helena L</h4>
                  <Muted>
                    <h6>skrev om Städjätten</h6>
                  </Muted>
                  <h5 className={classes.cardDescription}>
                    {'"'}Städjätten är jättebra på att ha dialog med kunden. En
                    blir vänligt bemött med stor beredvillighet och
                    flexibilitet. Städpatrullen som jag anlitade var noggranna i
                    sitt arbete och det utfördes till belåtenhet. De var riktiga
                    proffs med blick för vad som behövdes göras!{'"'}
                  </h5>
                </CardBody>
              </Card>
            </GridItem>
            <GridItem xs={12} sm={4} md={4}>
              <Card testimonial plain>
                <CardBody plain>
                  <h4 className={classes.title}>JOHANNA S</h4>
                  <Muted>
                    <h6>skrev om Städjätten</h6>
                  </Muted>
                  <h5 className={classes.cardDescription}>
                    {'"'}Fick hjälp snabbt och en tid inom några dagar.
                    Supertrevlig personal både flytt och städ samt kundtjänst.
                    Jobbade snabbt och noggrant. Väldigt prisvärt och bra!
                    Rekommenderar verkligen{'"'}
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
