const express = require('express');
const router = express.Router();
const {addTransaction,getTransactions,getTransactionById,updateTransaction,deleteTransaction} = require('../controllers/transactionController');
const authentication = require("../middleware/middleware")

router.post('/transactions',authentication,addTransaction);
router.get('/transactions',authentication, getTransactions);
router.get('/transactions/:id',authentication, getTransactionById);
router.put('/transactions/:id',authentication, updateTransaction);
router.delete('/transactions/:id',authentication, deleteTransaction);

module.exports = router;
