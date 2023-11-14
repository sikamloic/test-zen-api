const catchAsync = require('../utils/catchAsync')
const {userService} = require('../services')

const register = catchAsync(async(req, res) =>{
    const user = await userService.register(req.body)
    res.json(user)
})

const getUserById = catchAsync(async(req, res) =>{
    const user = await userService.getUserById(req.params.id)
    res.json(user)
})

module.exports = {
    register,
    getUserById
}