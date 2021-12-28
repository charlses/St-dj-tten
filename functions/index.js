const functions = require('firebase-functions')
const cors = require('cors')({ origin: true })

exports.fn = functions.https.onRequest((req, res) => {
  cors(req, res, () => {
    // your function body here - use the provided req and res from cors
    response.status(500).send({ test: 'Testing functions' })
  })
})
