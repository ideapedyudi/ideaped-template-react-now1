const { invoice } = require('../../models')

exports.getInvoices = async (req, res) => {
    try {
        const invoices = await invoice.findAll({
            attributes: {
                exclude: ['createdAt', 'updatedAt']
            }
        })

        res.send({
            status: 'success',
            message: 'transaksi Successfully Get',
            data: {
                invoices
            }
        })
    } catch (error) {
        console.log(error)
        res.status({
            status: 'failed',
            message: 'Server Error',
        })
    }
}

// --------------------------- update transaksi --------------------------------
exports.updateinvoices = async (req, res) => {
    try {
        const { id } = req.params
        const { body } = req

        // Proses update
        await invoice.update(body,
            {
                where: {
                    btbno: id
                }
            })

        const dataUpdate = await invoice.findOne(
            {
                attributes: {
                    exclude: ['createdAt', 'updatedAt']
                },
                where: {
                    btbno: id
                }
            })

        res.send({
            status: 'success',
            message: 'invoice Successfully Update',
            data: {
                invoices: dataUpdate
            }
        })

    } catch (error) {
        console.log(error)
        res.status({
            status: 'failed',
            message: 'Server Error',
        })
    }
}