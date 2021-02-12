const { UserController } = require("../../controllers");

const express = require('express');
const router = express.Router();


router.get('/', (req, res) => UserController.getAllUsers(req, res));
router.get('/:id', (req, res) => UserController.getUser(req, res));
router.post('/', (req, res) => UserController.createUser(req, res));
router.put('/:id', (req, res) => UserController.updateUser(req, res));


module.exports= router;