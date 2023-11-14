const {User} = require("../models")
const apiError = require("../utils/apiError")
// var QRCode = require('qrcode')

const register = async(body) =>{
    const user = await User.create(body)
    // let tmp = JSON.stringify(body)
    // let data
    // QRCode.toDataURL(tmp, async function (err, url) {
    //     // console.log(url)
    //      data = url
    //     console.log(data)
    // })
    // console.log(data)
    // return data
    return user
}

const getUserById = async(id) =>{
    return User.findById(id)
}

module.exports = {
    register,
    getUserById
}