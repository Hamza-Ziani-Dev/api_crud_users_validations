const isEmpty = require("./isEmpty");
const validator = require('validator');


module.exports = function ValidatorUser(data){
    let errors = {};
    data.username = !isEmpty(data.username) ? data.username : "";
    data.email = !isEmpty(data.email) ? data.email : "";
    data.password = !isEmpty(data.password) ? data.password : "";
    data.role = !isEmpty(data.role) ? data.role : "";
    data.isActive = !isEmpty(data.isActive) ? data.isActive : "";

    if (!validator.isEmail(data.email)) {
        errors.email = "Format Email required";
      }
      if (validator.isEmpty(data.email)) {
        errors.email = "Required Email";
      }
      if (validator.isEmpty(data.username)) {
        errors.username = "Required Username";
      }
      if (validator.isEmpty(data.password)) {
        errors.password = "Required Password";
      }
      if (validator.isEmpty(data.role)) {
        errors.role = "Required Role";
      }
      if (validator.isEmpty(data.isActive)) {
        errors.isActive = "Required isActive";
      }
    
      return {
          errors,
          isValid: isEmpty(errors)
      }


}
