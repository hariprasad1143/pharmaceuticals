/*
 NotBlank = Value can not blank nor empty
 Email = Value must be a valid email address
 Account.Registered = Account is already registered
 Account.Active = Account must be active
 Account.NotActive = Account must be not active
 Account.TemporaryPassword = Account is registered using temporary password, maybe when register, user using social media account
 Account.Unique = Account must be unique
 Account.Locked = Account is locked because of too many failed login
 Account.Unauthorized = Account is unauthorized
 Account.Expired = Account is expired
 Account.NotExists = Account not registered
 Account.Invalid = Account name is invalid (eg: domain is blocked)
 Token.Expired = Token is expired
 Password.MustNotSame = Old password must not same with new password
 Password.Policy = Password not match with password policy
 */

function getMessages (vm, errors) {
  var messages = []
  if (!errors || errors.length === 0) {
    messages.push(vm.$t('ERRORS.COMMON.Unspecified'))
  } else {
    for (let i in errors) {
      const fieldLabel = vm.$t('app.form.fields.' + i)
      for (let j in errors[i]) {
        messages.push(vm.$t('ERRORS.COMMON.' + errors[i][j], {fieldName: fieldLabel}))
      }
    }
  }
  return messages
}

module.exports.getMessages = function (vm, errors) {
  return getMessages(vm, errors)
}

module.exports.getCodes = function (errors) {
  var codes = []
  if (!errors || errors.length === 0) {
    return codes
  } else {
    for (let i in errors) {
      for (let j in errors[i]) {
        codes.push(errors[i][j])
      }
    }
  }
  return codes
}

/**
 * Process error message from HTTP request
 * @param {Object} vm
 * @param {Object} response
 * @return {Array}
 */
module.exports.getMessagesFromResponse = function (vm, response) {
  let errorMessages = []
  switch (response.body.code) {
    case 429:
      errorMessages = [vm.$t('ERRORS.COMMON.Busy')]
      break
    case 404:
      errorMessages = [vm.$t('ERRORS.COMMON.NotFound')]
      break
    case 401:
      errorMessages = [vm.$t('ERRORS.COMMON.InvalidData')]
      break
    default:
      errorMessages = getMessages(vm, response.body.errors)
      break
  }

  return errorMessages
}
