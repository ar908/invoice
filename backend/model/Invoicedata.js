const mongoose = require("mongoose");
const InvoiceSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    quantity: {
        type: String,
        required: true
    },
    amount: {
        type: String,
        required: true
    },

    total: {
        type: String,
        required: true
    }
})

module.exports = mongoose.model("Invoicedata", InvoiceSchema);