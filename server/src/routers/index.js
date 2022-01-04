const express = require('express')

const router = express.Router()

// middleware
const { auth } = require('../middleware/auth')

const { login, checkAuth } = require('../controllers/tbluserid');

// AUTH
router.post("/login", login);
router.get("/check-auth", auth, checkAuth);

// ================================== api airwaybill ===========================
const { getTransaksi, updatetransaksi } = require('../controllers/transaksi');

router.get("/getTransaksi", auth, getTransaksi);
router.patch("/updatetransaksi/:id", auth, updatetransaksi);

const { getInvoices, updateinvoices } = require('../controllers/invoice');

router.get("/getInvoices", auth, getInvoices);
router.patch("/updateinvoices/:id", auth, updateinvoices);

const { getAirline, getAlirlinePrefix } = require('../controllers/airline');

router.get("/getAirline", auth, getAirline);

router.get("/airline/:id", auth, getAlirlinePrefix);


module.exports = router