var validate = (function () {
  return {
    userNameRep: /^(?!_)[A-Za-z0-9_\s\u4e00-\u9fa5_:！]{2,40}$/,
    passwordRep: /^(?![0-9]+$)(?![a-zA-Z]+$)(?=.*[A-Za-z])(?=.*\d)[0-9A-Za-z#@!~%^&*]{6,20}$/,
    codeRep: /1[3|5|7|8|]\d{9}/,
    phoneRep: /^1\d{10}/
  }
})();


var CheckObject = function () {
};

CheckObject.prototype.checkUsername = function (value) {
  if (validate.userNameRep.test(value)) {
    return true;
  } else {
    console.log('用户名 数字、字母、中文 、划线不能以下划线开头 2-12位')
    return false;
  }
};

CheckObject.prototype.checkPassword = function (value) {
  if (validate.passwordRep.test(value)) {
    return true;
  } else {
    console.log('密码验证 6-20位英文和数字')
    return false;
  }
};

CheckObject.prototype.checkCode = function (value) {
  if (validate.codeRep.test(value)) {
    return true;
  } else {
    console.log('验证码验证 4-10位英文或数字')
    return false;
  }
};

CheckObject.prototype.checkPhone = function (value) {
  if (validate.phoneRep.test(value)) {
    return true;
  } else {
    console.log('手机号验证 1开头 11位')
    return false;
  }
};

var checkObject = new CheckObject();
checkObject.checkPhone('18668218226'); // true