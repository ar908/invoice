const express = require("express")
const router = require("./router");
const cors = require("cors");
const PORT = 8000;
const app = express()
app.use(router);
app.use(cors());
app.use(express.json());
require("./connection")
const Data = require("./model/Invoicedata");
const Invoicedata = require("./model/Invoicedata");

//get invoice data
app.get("/getuser", async (req, res) => {
    try {
        const users = await Invoicedata.find({});
        res.send(users)
    } catch (error) {
        console.log(error);
        res.status(500).send(error)
    }
});
// post invoice data

app.post("/postuser", async (req, res) => {
    const { name, quantity, amount, total } = req.body;
    try {
        const user = new Invoicedata({ name, quantity, amount, total });
        await user.save();
        res.send(user);

    } catch (error) {
        console.log(error);
        res.status(500).send(error)
    }
})

// update invoice data

app.put("/update/:id", async (req, res) => {
    const { id } = req.params;
    const { name, quantity, amount, total } = req.body;
    try {
        const user = await Invoicedata.findByIdAndUpdate(id, { name, quantity, amount, total }, {
            new:
                true
        });
        res.send(user);

    } catch (error) {
        console.log(error);
        res.status(500).send(error)
    }
})


//  Delect from user 
app.delete("/deleteuser/:id", async (req, res) => {
    const { id } = req.params;
    try {
        const user = await Invoicedata.findByIdAndDelete(id);
        res.send(user);
    } catch (error) {
        console.log(error);
        res.status(500).send(error);
    }
});

app.listen(PORT, async () => {
    console.log(`connection Succesful at ${PORT}`)
})