const EMAIL_REGEX = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/

module.exports.isNotEmpty = function (values) {
  let errors = []
  for (let i in values) {
    let v = values[i]
    if (typeof v === 'undefined' || v === null || v.trim() === '') {
      errors.push({
        field: i,
        error: 'app.form.validation.required'
      })
    }
  }
  return errors
}

module.exports.validateRegex = function (values, regexes) {
  let errors = []
  for (let i in values) {
    let v = values[i]
    for (let j in regexes[i]) {
      const item = regexes[i][j]
      const regex = item.exp instanceof RegExp ? item.exp : new RegExp(item.exp, 'i')
      if (!regex.test(v)) {
        errors.push({
          field: i,
          error: item.errorKey || 'app.form.validation.invalidFormat'
        })
        break
      }
    }
  }
  return errors
}

module.exports.visibleEmailFormatError = function (values) {
  let errors = []
  for (let i in values) {
    let v = values[i]
    if (this.isValidEmail(v)) {
      errors.push({
        field: i,
        error: 'app.form.validation.emailFormat'
      })
    }
  }
  return errors
}

module.exports.isValidEmail = function (value) {
  const regex = EMAIL_REGEX instanceof RegExp ? EMAIL_REGEX : new RegExp(EMAIL_REGEX, 'i')
  return regex.test(value)
}
