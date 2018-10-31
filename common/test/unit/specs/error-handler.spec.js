import errorHandler from '@common/src/util/error-handler'

describe('util error handler', () => {
  it('errorHandler', () => {
    var vm = {
      '$t': function () {
        return 'ok'
      }
    }
    var errors = [
      [1]
    ]
    expect(errorHandler.getMessages(vm, errors)).to.deep.equal(['ok'])
  })

  it('errorHandler Empty', () => {
    var vm = {
      '$t': function () {
        return 'empty'
      }
    }
    var errors = []
    expect(errorHandler.getMessages(vm, errors)).to.deep.equal(['empty'])
  })

  it('errorHandler getCode Empty', () => {
    var errors = []
    expect(errorHandler.getCodes(errors).length).to.equal(0)
  })

  it('errorHandler getCode', () => {
    var errors = {
      'Sku': [
        'Empty',
        'PriceChanged'
      ]
    }
    expect(errorHandler.getCodes(errors).length).to.equal(2)
  })

  it('errorHandler getMessagesFromResponse', () => {
    const vm = {
      '$t': error => {
        switch (error) {
          case 'ERRORS.COMMON.Busy':
            return 'Busy'
          case 'ERRORS.COMMON.NotFound':
            return 'Not Found'
          case 'ERRORS.COMMON.InvalidData':
            return 'Invalid Data'
          default:
            return 'Error custom'
        }
      }
    }

    const errors = {
      accessToken: ['Custom']
    }

    expect(errorHandler.getMessagesFromResponse(vm, {'body': {'code': 429, 'errors': ''}})).to.deep.equal(['Busy'])
    expect(errorHandler.getMessagesFromResponse(vm, {'body': {'code': 404, 'errors': ''}})).to.deep.equal(['Not Found'])
    expect(errorHandler.getMessagesFromResponse(vm, {'body': {'code': 401, 'errors': ''}})).to.deep.equal(['Invalid Data'])
    expect(errorHandler.getMessagesFromResponse(vm, {'body': {'code': 400, 'errors': errors}})).to.deep.equal(['Error custom'])
  })
})
