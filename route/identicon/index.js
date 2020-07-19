const express = require('express')
const router = express.Router()

const identiconCanvas = require('../../lib/identicon_canvas')

router.get('/:address', function (req, res) {
  const address = req.params.address;
  const identiconDataUrl = identiconCanvas(address).toDataURL()

  let el = `<div style="` +
           `background-image: url('${identiconDataUrl}');` +
           `background-size: 100%;` +
           `width: 24px;` +
           `height: 24px` +
           `"></div>`;

  res.send(el)
})

module.exports = router
