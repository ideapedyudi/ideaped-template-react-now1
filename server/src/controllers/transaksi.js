const { transaksi } = require('../../models')

exports.getTransaksi = async (req, res) => {
    try {
        const transaksis = await transaksi.findAll({
            attributes: {
                exclude: ['createdAt', 'updatedAt']
            }
        })

        res.send({
            status: 'success',
            message: 'transaksi Successfully Get',
            data: {
                transaksis
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
exports.updatetransaksi = async (req, res) => {
    try {
        const { id } = req.params
        const { body } = req

        // Proses update
        await transaksi.update(body,
            {
                where: {
                    nom: id
                }
            })

        const dataUpdate = await transaksi.findOne(
            {
                attributes: {
                    exclude: ['createdAt', 'updatedAt']
                },
                where: {
                    nom: id
                }
            })

        res.send({
            status: 'success',
            message: 'transaksi Successfully Update',
            data: {
                transaksi: dataUpdate
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