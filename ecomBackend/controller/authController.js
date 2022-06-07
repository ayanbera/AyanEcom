const User = require('../model/user');
const sendToken = require('../utils/jwtToken');
const catchAsyncError = require('../middleware/catchAsync');

exports.userRegister = catchAsyncError(async (req, res, next) => {
    
    const {name, email, password } = req.body;

    const user = await User.create({
        name,
        email,
        password,
        avatar: {
            public_id:"ayan",
            url: "http://sdbejndend"
        }
    })

    sendToken(user, 200, res);
});