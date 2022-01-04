const { airline } = require('../../models')

exports.getAirline = async (req, res) => {
    try {
        const airlines = await airline.findAll({
            attributes: {
                exclude: ['createdAt', 'updatedAt']
            }
        })

        res.send({
            status: 'success',
            message: 'airline Successfully Get',
            data: {
                airlines
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

exports.getAlirlinePrefix = async (req, res) => {
    try {

        const { id } = req.params

        const airlineData = await airline.findOne({
            attributes: {
                exclude: ['createdAt', 'updatedAt']
            },
            where: {
                prefik: id
            }
        })

        res.send({
            status: 'success',
            message: 'User Successfully Get airline',
            data: {
                airline: airlineData
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

