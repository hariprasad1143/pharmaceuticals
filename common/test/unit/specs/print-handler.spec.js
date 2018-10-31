import printHandler from '@common/src/util/print-handler'

describe('printHandler', () => {
  it('printInvoice', () => {
    printHandler.printContent('test')
  })

  it('printInvoice with css and title', () => {
    printHandler.printContent('test', 'css', 'title')
  })
})
