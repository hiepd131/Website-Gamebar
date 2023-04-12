const User = require('../models/user');
const ErrorHandler = require('../utils/errorHandler');
const catchAsyncErrors = require('./catchAsyncErrors');


exports.lockUser = catchAsyncErrors(async (req, res, next) => {
    const { email, password } = req.body;

    if (!email || !password) {
        return next(new ErrorHandler('Email và Mật khẩu không được để trống', 400))
    }

    const user = await User.findOne({ email }).select('+password')


    if (!user) {
        return next(new ErrorHandler('Email không tồn tại', 401));
    }

    const isPasswordMatched = await user.comparePassword(password);

    if (!isPasswordMatched) {
        return next(new ErrorHandler('Mật khẩu không đúng', 401));
    }

    if(user.role === "lock"){
        return next(new ErrorHandler("Tài khoản của bạn đã bị khóa. Vui lòng liên hệ với quản trị viên!"))
    }
    next()
})