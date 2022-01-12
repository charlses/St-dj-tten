import styles from 'styles/jss/nextjs-material-kit-pro/components/sectionStyle.js'
import classNames from 'classnames'
import { makeStyles } from '@material-ui/core/styles'
// core components
import GridContainer from 'components/Grid/GridContainer.js'
import GridItem from 'components/Grid/GridItem.js'

const useStyles = makeStyles(styles)

const SectionImageLeft = (props) => {
  const classes = useStyles()

  return (
    <div className={classes.mainDiv}>
      <div className={classes.secondaryDiv}>
        <GridContainer>
          <GridItem
            md={6}
            sm={12}
            className={classNames(
              classes.mrAuto,
              classes.mlAuto,
              classes.textCenter
            )}
          >
            <img
              src={props.image}
              alt={props.alt}
              className={classes.imageStyle}
            />
          </GridItem>

          <GridItem
            md={6}
            sm={12}
            className={classNames(classes.mrAuto, classes.mlAuto)}
          >
            <div className={classes.textContainer}>{props.children}</div>
          </GridItem>
        </GridContainer>
      </div>
    </div>
  )
}

export default SectionImageLeft
