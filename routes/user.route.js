const express = require('express')
const router = express.Router()
const { GetUser,GetByPK,TestUser, TestUserPost } = require('../controller/user.controller')
const { PrintSuccess,
    PrintSuccessRoute,
    CheckPostReq } = require('../middleware/middleware')


router.use(PrintSuccess)
router.get('/',  GetUser)
router.get('/:id',  GetByPK)
router.post('/',  CheckPostReq,TestUserPost)

module.exports = router