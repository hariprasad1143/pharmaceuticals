import formValidator from '@common/src/util/form-validator'

describe('formValidator', () => {
  it('isNotEmpty get no error', () => {
    var values = {
      name: 'Nama Orang'
    }
    var errors = []
    expect(formValidator.isNotEmpty(values)).to.deep.equal(errors)
  })

  it('isNotEmpty get error', () => {
    var values = {
      name: '',
      phoneNumber: null,
      email: undefined
    }
    var errors = [
      {
        field: 'name',
        error: 'app.form.validation.required'
      },
      {
        field: 'phoneNumber',
        error: 'app.form.validation.required'
      },
      {
        field: 'email',
        error: 'app.form.validation.required'
      }
    ]
    expect(formValidator.isNotEmpty(values)).to.deep.equal(errors)
  })

  it('validateRegex get no error', () => {
    var values = {
      'name': 'nama orang'
    }
    var regexes = {
      name: [
        {
          exp: '[a-zA-Z ]$'
        },
        {
          exp: '^[a-zA-Z ]{3,50}$',
          errorKey: 'app.form.validation.tooShortOrTooLong'
        }
      ]
    }
    var errors = []
    expect(formValidator.validateRegex(values, regexes)).to.deep.equal(errors)
  })

  it('validateRegex get error', () => {
    var values = {
      'name': 'na'
    }
    var regexes = {
      name: [
        {
          exp: '[a-zA-Z ]$'
        },
        {
          exp: '^[a-zA-Z ]{3,50}$',
          errorKey: 'app.form.validation.tooShortOrTooLong'
        }
      ]
    }
    var errors = [
      {
        field: 'name',
        error: 'app.form.validation.tooShortOrTooLong'
      }
    ]
    expect(formValidator.validateRegex(values, regexes)).to.deep.equal(errors)
  })

  it('validateRegex get default error', () => {
    var values = {
      'name': 'na'
    }
    var regexes = {
      name: [
        {
          exp: '^[a-zA-Z ]{3,50}$'
        }
      ]
    }
    var errors = [
      {
        field: 'name',
        error: 'app.form.validation.invalidFormat'
      }
    ]
    expect(formValidator.validateRegex(values, regexes)).to.deep.equal(errors)
  })

  it('validateRegex RegExp get no error', () => {
    var values = {
      'name': 'nama orang'
    }
    var regexes = {
      name: [
        {
          exp: /[a-zA-Z ]$/
        }
      ]
    }
    var errors = []
    expect(formValidator.validateRegex(values, regexes)).to.deep.equal(errors)
  })
  it('email valid', () => {
    expect(formValidator.isValidEmail('abc@cba.com')).to.be.true
    expect(formValidator.isValidEmail('abc_cba@cba.com')).to.be.true
    expect(formValidator.isValidEmail('abc_cba99@cba.com')).to.be.true
    expect(formValidator.isValidEmail('abc_cba99@cba9.com')).to.be.true
  })

  it('email invalid', () => {
    expect(!formValidator.isValidEmail('abc')).to.be.true
    expect(!formValidator.isValidEmail('abc@cba')).to.be.true
  })
})
