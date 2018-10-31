export default {
  getPaymentMethodsByMethod: function (method, payments) {
    return payments.find(payment => {
      if (payment.type !== 'Transfer' &&
        (payment.fullPaymentMethod === method || payment.installmentMethod === method)) {
        return payment
      }

      // else
      const found = payment.transferTypes && payment.transferTypes.find(tt => tt.paymentMethod === method)
      if (found) {
        payment.transferType = found.name
        return payment
      }
    })
  }
}
