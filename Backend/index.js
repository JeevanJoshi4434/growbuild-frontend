const express = require('express');
const app = express();
const mongoose = require('mongoose');
const userRoute = require('./Routes/User');
const DevRoute = require('./Routes/Developer');
const ProjectRoute = require('./Routes/Project');
const BuildingRoute = require('./Routes/Buildings');
const ParkingRoute = require('./Routes/Parking');
const BookingRoute = require('./Routes/Booking');
const BookingStatusRoute = require('./Routes/Booking_Status');
const BuyerMasterRoute = require('./Routes/Buyer_Master');
const DemandRoute = require('./Routes/Demand');
const FlatRoute = require('./Routes/Flat');
const PaymentRecieveRoute = require('./Routes/Payment_Recieve');
const UnitRoute = require('./Routes/Unit');
const SaleInoventoryRoute = require('./Routes/Sale_Inoventory');
const cors = require("cors");
const cookieParser = require('cookie-parser');
const path = require('path');
require('dotenv').config({ path: "env/config.env" });
console.log(`server type: ${process.env.SERVER}`);
mongoose.connect(process.env.DB_URI).then(() => { console.log(`DB connection successful at URI: ${process.env.DB_URI}`) }).catch((err) => {
    console.log(`Error Occured: ${err}`)
})
// middleware

app.use(cors());
app.use(express.json());
app.use(cookieParser());

// routes
app.use("/api", userRoute);
app.use("/api", DevRoute);
app.use("/api", ProjectRoute);
app.use("/api", BuildingRoute);
app.use("/api", SaleInoventoryRoute);
app.use("/api", UnitRoute);
app.use("/api", PaymentRecieveRoute);
app.use("/api", FlatRoute);
app.use("/api", DemandRoute);
app.use("/api", BuyerMasterRoute);
app.use("/api", BookingStatusRoute);
app.use("/api", BookingRoute);
app.use("/api", ParkingRoute);

//Home Page
app.get('/', (req, res) => {
    const OTPgen = () => {
        let OTP = '';
        for (let i = 0; i <= 3; i++) {
            let ramVar = Math.round(Math.random() * 9);
            OTP = OTP + ramVar;
        }
        return OTP;
    }
    let arr = [];
    for (let i = 0; i <= 1000; i++) {
        arr.push(OTPgen());
    }
    res.send(`<div style="margin:20px;background:#f1f5f9;height:auto;border-radius:6px;padding:10px;display:flex;flex-direction:column;"><h4>Welcome to GrowBuild Server</h4><div style="display:flex;flex-direction:column"><h6>API lists:</h6><p style="margin-left:20px" >Home: localhost:4040/</p><p style="margin-left:20px" >Signup: localhost:4040/api/signup</p><p style="margin-left:20px" >Login: localhost:4040/api/login</p><p style="margin-left:20px" >Create Developer: localhost:4040/api/create/dev</p><p style="margin-left:20px" >Delete Developer: localhost:4040/api/delete/dev/:id</p><p style="margin-left:20px" >Update Developer: localhost:4040/api/update/dev/:id</p><p style="margin-left:20px" >All Developer: localhost:4040/api/all/dev</p><p style="margin-left:20px" > Single Developer: localhost:4040/api/dev/:id</p><p style="margin-left:20px" >Booking Status</p><p style="margin-left:20px" >/create/bookingstatus</p><p style="margin-left:20px" >/create/bookingstatus</p><p style="margin-left:20px" >booking status</p><p style="margin-left:20px" >/create/bookingstatus</p><p style="margin-left:20px" >/get/all/bookingstatus</p><p style="margin-left:20px" >/get/bookingstatus/:id</p><p style="margin-left:20px" >/delete/bookingstatus/:id</p><p style="margin-left:20px" >/update/bookingstatus/:id</p><p style="margin-left:20px" >booking</p><p style="margin-left:20px" >/get/all/booking</p><p style="margin-left:20px" >/get/booking/:id</p><p style="margin-left:20px" >/delete/booking/:id</p><p style="margin-left:20px" >/update/booking/:id</p><p style="margin-left:20px" >/create/booking</p><p style="margin-left:20px" >building</p><p style="margin-left:20px" >/create/building</p><p style="margin-left:20px" >/update/building/:id</p><p style="margin-left:20px" >/building/:id</p><p style="margin-left:20px" >/all/building</p><p style="margin-left:20px" >/delete/building/:id</p><p style="margin-left:20px" >buyer Master</p><p style="margin-left:20px" >/get/all/buyermaster</p><p style="margin-left:20px" >/get/buyermaster/:id</p><p style="margin-left:20px" >/delete/buyermaster/:id</p><p style="margin-left:20px" >/update/buyermaster/:id</p><p style="margin-left:20px" >/create/buyermaster</p><p style="margin-left:20px" >Demand</p><p style="margin-left:20px" >/create/demand</p><p style="margin-left:20px" >/update/demand/:id</p><p style="margin-left:20px" >/delete/demand/:id</p><p style="margin-left:20px" >/get/demand/:id</p><p style="margin-left:20px" >/get/all/demand</p><p style="margin-left:20px" >flat</p><p style="margin-left:20px" >/create/flat</p><p style="margin-left:20px" >/update/flat/:id</p><p style="margin-left:20px" >/delete/flat/:id</p><p style="margin-left:20px" >/all/flat</p><p style="margin-left:20px" >/flat/:id</p><p style="margin-left:20px" >parking</p><p style="margin-left:20px" >/create/parking</p><p style="margin-left:20px" >/update/parking/:id</p><p style="margin-left:20px" >/delete/parking/:id</p><p style="margin-left:20px" >/all/parking</p><p style="margin-left:20px" >/parking/:id</p><p style="margin-left:20px" >payment recieve</p><p style="margin-left:20px" >/create/payment</p><p style="margin-left:20px" >/update/payment/:id</p><p style="margin-left:20px" >/delete/payment/:id</p><p style="margin-left:20px" >/get/payment/:id</p><p style="margin-left:20px" >/get/all/payment</p><p style="margin-left:20px" >project</p><p style="margin-left:20px" >/create/project</p><p style="margin-left:20px" >/update/project/:id</p><p style="margin-left:20px" >/project/:id</p><p style="margin-left:20px" >/all/project</p><p style="margin-left:20px" >/delete/project/:id</p><p style="margin-left:20px" >sale inoventory</p><p style="margin-left:20px" >/create/saleinventory</p><p style="margin-left:20px" >/update/saleinventory/:id</p><p style="margin-left:20px" >/delete/saleinventory/:id</p><p style="margin-left:20px" >/get/saleinventory/:id</p><p style="margin-left:20px" >/get/all/saleinventory</p><p style="margin-left:20px" >unit</p><p style="margin-left:20px" >/unit/:id</p><p style="margin-left:20px" >/all/unit</p><p style="margin-left:20px" >/delete/unit/:id</p><p style="margin-left:20px" >/update/unit/:id</p><p style="margin-left:20px" >/create/unit</p></div> </div>`);
});

const server = app.listen(process.env.PORT, () => {
    console.log(`Server is running at https://${process.env.PORT}`)
});
if (process.env.SERVER === "PRODUCTION") {
    app.use(express.static(path.join(__dirname, "../build")));

    app.get("*", (req, res) => {
        res.sendFile(path.resolve(__dirname, "../build/index.html"));
    })
}
