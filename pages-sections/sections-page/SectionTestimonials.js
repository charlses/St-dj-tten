import React from 'react'
// react component for creating beautiful carousel
// @material-ui/core components
import { makeStyles } from '@material-ui/core/styles'
// @material-ui/icons
// core components
import GridContainer from 'components/Grid/GridContainer.js'
import GridItem from 'components/Grid/GridItem.js'
import testimonialsStyle from 'styles/jss/nextjs-material-kit-pro/pages/sectionsSections/testimonialsStyle.js'

const useStyles = makeStyles(testimonialsStyle)

export default function SectionTestimonials({ ...rest }) {
  const classes = useStyles()

  return (
    <div
      className='cd-section'
      {...rest}
      style={{ backgroundColor: '#DBF3FF' }}
    >
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
        </div>
        <div style={{ padding: '40px' }}>
          <iframe
            src='https://widget.reco.se/v2/widget/3565695?mode=HORIZONTAL_QUOTE'
            width='100%'
            height='225'
            scrolling='no'
            style={{ border: 0, display: 'block' }}
            data-reactroot=''
          ></iframe>
        </div>
      </div>
      {/* Testimonials 3 END */}
    </div>
  )
}
