import {
  mrAuto,
  mlAuto,
  title,
  description,
  cardTitle,
  grayColor
} from 'styles/jss/nextjs-material-kit-pro.js'

const teamStyle = {
  mrAuto,
  mlAuto,
  title,
  description: {
    marginBottom: '80px'
  },
  cardTitle,
  cardDescription: {
    color: grayColor[0]
  },
  team: {
    padding: '80px 0px'
  },
  textCenter: {
    textAlign: 'center!important'
  },
  img: {
    width: '100%',
    height: 'auto'
  },
  textMuted: {
    color: grayColor[7] + ' !important'
  },
  justifyContent: {
    justifyContent: 'center!important'
  },
  'ul li::before': {
    'content': '"\\2022"',
    'color': 'red',
    'fontWeight': 'bold',
    'display': 'inline-block',
    'width': '1em',
    'marginLeft': '-1em'
  }
}

export default teamStyle
