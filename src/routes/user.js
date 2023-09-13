const express = require('express');
const router = express.Router();
const {
    createUser,
    signInUser,
    fetchAllUsers,
    fetchUserById,
} = require('../controllers/user.controller');
const { checkIfIdExists } = require('../middlewares/user.middlewares');

router.post('/signup', createUser);
router.post('/login', signInUser);
router.get('/', fetchAllUsers);
router.get('/:id', checkIfIdExists, fetchUserById);

module.exports = router;
