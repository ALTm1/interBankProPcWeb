// 密码验证
let patt = /^[a-zA-Z0-9_]{6,16}$/;

// /^((?:(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9]))[a-zA-Z0-9]{6,16})|([0,9]{6,16})|([A-Za-z]{6,16})$/
// 确认密码变量
var confirmPass
// let patt = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[^A-Za-z0-9]).{8,16}$/
// 登录名
let loginPatt = /^[a-zA-Z0-9_]{4,20}$/
// 身份证号码
let idPatt = /^[1-9]\d{7}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])\d{3}$|^[1-9]\d{5}[1-9]\d{3}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])\d{3}([0-9]|X)$/

// 手机号码
let phoneReg = /^[1][3,4,5,6,7,8,9][0-9]{9}$/;
// 邮箱
let email = /^[a-zA-Z0-9_-]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-])+$/
// 验证码
let codePatt = /^[0-9]$/

/**
 * 校验函数
 * @param {*规则} rule 
 * @param {*输入的值} value 
 * @param {*回调函数} callback 
 */
// 身份证
export const IdCard = (rule, value, callback) => {

    if (value && !idPatt.test(value)) {
        return callback(
            new Error('请输入正确的身份证号码。')
        )
    } else {
        callback()
    }

}
// 原密码
export const Pass = (rule, value, callback) => {

    if (value && !patt.test(value)) {
        return callback(
            new Error('请输入6-16个字符，可以是字母大小写、数字和下划线组合，可以纯数字，纯字母。')
        )
    } else {

        confirmPass = value
        callback()


    }

}
// 新密码
export const validatePass = (rule, value, callback) => {

    if (value && !patt.test(value)) {
        return callback(
            new Error('请输入4-20个字符，可以是字母大小写、数字和下划线组合，可以纯数字，纯字母。')
        )
    } else {

        if (confirmPass) {
            confirmPass = ''
            confirmPass = value
            callback()
        }



    }

}
// 确认密码
export const validateConfirmPass = (rule, value, callback) => {

    if (value && value != confirmPass && !patt.test(value)) {
        return callback(
            new Error('两次输入密码不一致')
        )
    } else {
        callback()
    }
}
// 手机号码
export const Phone = (rule, value, callback) => {
    if (value && !phoneReg.test(value)) {
        callback(new Error('请输入正确的手机号码'))
    } else {
        callback()
    }
}
// 邮箱
export const Email = (rule, value, callback) => {
    if (value && !email.test(value)) {
        callback(new Error('请输入正确的邮箱格式'))
    } else {
        callback()
    }
}
//登录名称
export const LoginName = (rule, value, callback) => {

    if (value && !loginPatt.test(value)) {
        callback(new Error('请输入正确的登录名'))
    } else {
        callback()
    }
}
//验证码
export const Code = (rule, value, callback) => {

    if (value && !codePatt.test(value)) {
        callback(new Error('验证码为纯数字'))
    } else {
        callback()
    }
}