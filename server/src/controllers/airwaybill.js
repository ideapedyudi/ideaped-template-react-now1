const { airwaybill } = require('../../models')

// ------------------------ add airwaybill --------------------------
exports.addairwaybill = async (req, res) => {
    try {
        const { body } = req

        await airwaybill.create(body)

        res.send({
            status: 'success',
            message: 'Successfully airwaybill'
        })

    } catch (error) {
        console.log(error)
        res.status({
            status: 'failed',
            message: 'Server Error',
        })
    }
}

