const mongoose = require('mongoose');

const transactionSchema = new mongoose.Schema({
  type: {
    type: String,
  
    enum: ['income', 'expense'],
  },
  category: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Category',
   
  },
  amount: {
    type: Number,
    required: true,
  },
  date: {
    type: Date,
    default: Date.now,
  },
  description: String,
});

const Transaction = mongoose.model('Transaction', transactionSchema);

module.exports = Transaction;
