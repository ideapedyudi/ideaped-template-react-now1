// memanggil model tabel database
const { tbluserid } = require('../../models')

// joi
const joi = require('joi')

// jwt
const jwt = require('jsonwebtoken')

// login
exports.login = async (req, res) => {
    try {

        const { User, Psw } = req.body
        const data = req.body

        // skema pengecekan inputan
        const schema = joi.object({
            User: joi.string().min(3).required(),
            Psw: joi.string().min(3).required()
        })

        // jika validasi tidak memenuhi
        const { error } = schema.validate(data)

        // jika tidak memebuhi
        if (error) {
            return res.send({
                status: 'validation failed',
                message: error.details[0].message
            })
        }

        // mengecek apakah email sudah terdaftar atau belum
        const check = await tbluserid.findOne({
            where: {
                User: User,
                Psw: Psw
            }
        })

        // mencari emaail ada atau tidak
        if (!check) {
            return res.send({
                status: 'failed',
                message: "wrong username or password"
            })
        }

        // membuat token
        const secretKey = process.env.SECRET_KEY

        // tokennya
        const token = jwt.sign({
            id: check.id
        }, secretKey)

        // jika berhasil pengecekan
        res.send({
            status: 'success',
            data: {
                user: {
                    id: check.id,
                    User: check.User,
                    Nopeg: check.Nopeg,
                    Psw: check.Psw,
                    Name: check.Name,
                    UpDate: check.UpDate,
                    Expired_date: check.Expired_date,
                    User_Lvl: check.User_Lvl,
                    User_Sts: check.User_Sts,
                    creator: check.creator,
                    lastOn: check.lastOn,
                    lastOff: check.lastOff,
                    token
                }
            }
        })

        // letika server error
    } catch (error) {
        console.log(error)
        res.status({
            status: 'failed',
            message: 'Server Error'
        })
    }
}

// auth
exports.checkAuth = async (req, res) => {
    try {

        const id = req.idUser

        const dataEmployee = await tbluserid.findOne({
            where: {
                id
            },
            attributes: {
                exclude: ['createdAt', 'updatedAt', 'password']
            }
        })

        if (!dataEmployee) {
            return res.status(404).send({
                status: 'failed'
            })
        }

        res.send({
            status: 'success',
            data: {
                user: {
                    id: dataEmployee.id,
                    User: dataEmployee.User,
                    Nopeg: dataEmployee.Nopeg,
                    Psw: dataEmployee.Psw,
                    Name: dataEmployee.Name,
                    UpDate: dataEmployee.UpDate,
                    Expired_date: dataEmployee.Expired_date,
                    User_Lvl: dataEmployee.User_Lvl,
                    User_Sts: dataEmployee.User_Sts,
                    creator: dataEmployee.creator,
                    lastOn: dataEmployee.lastOn,
                    lastOff: dataEmployee.lastOff,
                }
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



// update login
exports.updateLogin = async (req, res) => {
    try {
        const { id } = req.params
        const { body } = req

        const checkId = await tbluserid.findOne({
            where: {
                id
            }
        })

        // check id user
        if (!checkId) {
            return res.send({
                status: 'failed',
                message: `User with id: ${id} not found`
            })
        }

        // Proses update
        await tbluserid.update(body,
            {
                where: {
                    id
                }
            })

        const dataUpdate = await tbluserid.findOne(
            {
                attributes: {
                    exclude: ['createdAt', 'updatedAt']
                },
                where: {
                    id
                }
            })

        res.send({
            status: 'success',
            message: 'User Successfully Add',
            data: {
                user: dataUpdate
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

