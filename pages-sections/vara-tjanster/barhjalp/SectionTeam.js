// import React from 'react'
// // nodejs library that concatenates classes
// import classNames from 'classnames'
// // core components
// import GridContainer from 'components/Grid/GridContainer.js'
// import GridItem from 'components/Grid/GridItem.js'
// // @material-ui/core components
// import { makeStyles } from '@material-ui/core/styles'

// import teamStyle from 'styles/jss/nextjs-material-kit-pro/pages/aboutUsSections/teamStyle.js'

// import Accordion from 'components/Accordion/Accordion.js'

// const useStyles = makeStyles(teamStyle)

// export default function SectionTeam() {
//   const classes = useStyles()
//   return (
//     <div className={classes.team}>
//       <GridContainer>
//         <GridItem
//           md={12}
//           sm={12}
//           className={classNames(classes.mrAuto, classes.mlAuto)}
//         >
//           <h2 className={classes.title}>Vill du ha bärhjälp?</h2>
//           <h5 className={classes.description}>
//             Vill du ha bärhjälp med kartongerna, ett piano, flygel, matbord,
//             garderob eller möbelarrangemang vid en flytt? Vi säkerställer att
//             dina saker kommer vara i samma skick oavsett hur tunga de är.
//             Kontakta oss så hjälper vi dig!
//           </h5>
//         </GridItem>

//         <GridItem
//           md={12}
//           sm={12}
//           className={classNames(classes.mrAuto, classes.mlAuto)}
//         >
//           <div className={classes.title}>
//             <h3>FAQ</h3>
//           </div>
//           <Accordion
//             active={0}
//             activeColor='rose'
//             collapses={[
//               {
//                 title: 'Vad kostar bärhjälp? ',
//                 content: 'Pris för bärhjälp är från 495 kr/h'
//               },
//               {
//                 title:
//                   'Hjälper ni till med ommöblering och montering av möbler?',
//                 content: ' Ja det gör vi! '
//               },
//               {
//                 title: 'Gäller RUT-avdrag för bärhjälp?',
//                 content: 'Ja, du har möjlighet att få RUT-avdrag för bärhjälp.'
//               }
//             ]}
//           />
//         </GridItem>
//       </GridContainer>
//     </div>
//   )
// }

import React from 'react'
// nodejs library that concatenates classes
import classNames from 'classnames'
// core components
import GridContainer from 'components/Grid/GridContainer.js'
import GridItem from 'components/Grid/GridItem.js'
// @material-ui/core components
import { makeStyles } from '@material-ui/core/styles'

import teamStyle from 'styles/jss/nextjs-material-kit-pro/pages/aboutUsSections/teamStyle.js'
import Button from 'components/CustomButtons/Button.js'

import Accordion from 'components/Accordion/Accordion.js'

import SectionNoImage from 'components/SectionComponent/SectionNoimage'

const useStyles = makeStyles(teamStyle)

export default function SectionTeam() {
  const classes = useStyles()
  return (
    <div className={classes.team}>
      <div className={classes.container}>
        <GridContainer>
          <GridItem
            md={9}
            sm={11}
            className={classNames(
              classes.mrAuto,
              classes.mlAuto,
              classes.textCenter
            )}
          >
            <h2 className={classes.title}>Vill du ha bärhjälp?</h2>
            <h5 className={classes.description}>
              Vill du ha bärhjälp med kartongerna, ett piano, flygel, matbord,
              garderob eller möbelarrangemang vid en flytt? Vi säkerställer att
              dina saker kommer vara i samma skick oavsett hur tunga de är.
              Kontakta oss så hjälper vi dig!. <br /> <br />
              <Button color='primary' href='/offert'>
                Skicka en offertförfrågan nu!
              </Button>
            </h5>
          </GridItem>
        </GridContainer>
      </div>

      <SectionNoImage>
        <h2 className={classes.title}>FAQ?</h2>
        <Accordion
          sx={{ backgroundColor: 'transparent' }}
          active={0}
          collapses={[
            {
              title: 'Vad kostar bärhjälp? ',
              content: 'Pris för bärhjälp är från 495 kr/h'
            },
            {
              title: 'Hjälper ni till med ommöblering och montering av möbler?',
              content: ' Ja det gör vi! '
            },
            {
              title: 'Gäller RUT-avdrag för bärhjälp?',
              content: 'Ja, du har möjlighet att få RUT-avdrag för bärhjälp.'
            }
          ]}
        />
      </SectionNoImage>
    </div>
  )
}
