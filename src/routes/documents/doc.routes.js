const { DocController } = require("../../controllers");

const express = require('express');
const router = express.Router();

router.get('/l', (req, res) => DocController.getLicenseDoc(req, res));
router.post('/l', (req, res) => DocController.setLicenseDoc(req, res));


module.exports= router;