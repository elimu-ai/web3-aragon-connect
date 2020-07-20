const express = require('express')
const router = express.Router()

const identiconCanvas = require('../../lib/identicon_canvas')

router.get('/:address', function (req, res) {
  const address = req.params.address;
  const identiconPngBuffer = identiconCanvas(address).toBuffer('image/png')

  res.setHeader('Content-Type', 'image/png')
  res.send(identiconPngBuffer)
})

module.exports = router
