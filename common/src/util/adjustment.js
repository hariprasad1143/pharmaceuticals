export default {
  /**
   * Get PromoCodeByPrefix
   * @return {String}
   */
  getPromoCodeByPrefix: (adjustments, prefix) => {
    let reg = new RegExp('^' + prefix, 'i')
    let sgiGiftAdjustment = adjustments.find(adjustment => adjustment.promoCode && reg.test(adjustment.promoCode))
    return sgiGiftAdjustment ? sgiGiftAdjustment.promoCode : ''
  },
  /**
   * Get CashbackAmount
   * @return {Number}
   */
  getCashbackAmount: (adjustments) => {
    let cashbackAdjustment = adjustments.find(adjustment => !adjustment.promoCode)
    return cashbackAdjustment ? Math.abs(cashbackAdjustment.amount) : 0
  }
}
