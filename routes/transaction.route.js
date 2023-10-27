const express = require('express')
const router = express.Router()
const { GetTransaction,GetByPK, TransactionPost } = require('../controller/transaction.controller')
const { PrintSuccess,
    CheckPostTransaction } = require('../middleware/middleware')


router.use(PrintSuccess)
router.get('/',  GetTransaction)
router.get('/:id',  GetByPK)
router.post('/',  CheckPostTransaction,TransactionPost)

module.exports = router