import {
  primaryColor,
  warningColor,
  dangerColor,
  successColor,
  infoColor,
  roseColor,
  grayColor,
  title
} from 'styles/jss/nextjs-material-kit-pro.js'

const infoStyle = {
  infoArea: {
    maxWidth: '360px',
    minHeight: '400px',
    margin: '30px auto',
    padding: '15px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    borderRadius: '6px',
    boxShadow: '-7px 7px 10px #ededed, 7px -7px 10px #ffffff;'
  },
  iconWrapper: {
    float: 'left',
    marginTop: '10px',
    marginRight: '10px'
  },
  primary: {
    color: primaryColor[0]
  },
  warning: {
    color: warningColor[0]
  },
  danger: {
    color: dangerColor[0]
  },
  success: {
    color: successColor[0]
  },
  info: {
    color: infoColor[0]
  },
  rose: {
    color: roseColor[0]
  },
  gray: {
    color: grayColor[0]
  },
  icon: {
    width: '2.5rem',
    height: '2.5rem',
    fontSize: '2.5rem'
  },
  descriptionWrapper: {
    color: grayColor[0],
    overflow: 'hidden'
  },
  title: {
    ...title,
    textAlign: 'center',
    margin: '0.5rem 0 !important',
    minHeight: 'unset'
  },
  description: {
    color: grayColor[0],
    overflow: 'hidden',
    marginTop: '0px',
    '& p': {
      color: grayColor[0],
      fontSize: '14px'
    }
  },
  iconWrapperVertical: {
    float: 'none'
  },
  iconVertical: {
    width: '61px',
    height: '61px'
  }
}

export default infoStyle
