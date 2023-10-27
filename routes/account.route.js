const express = require('express')
const router = express.Router()
const { GetAccount,GetByPK,TestUser, AccountPost } = require('../controller/account.controller')
const { PrintSuccess,
    CheckPostAccount } = require('../middleware/middleware')


router.use(PrintSuccess)
router.get('/',  GetAccount)
router.get('/:id',  GetByPK)
router.post('/',  CheckPostAccount,AccountPost)

module.exports = router