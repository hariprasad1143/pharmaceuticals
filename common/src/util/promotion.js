import regPromotion from '@common/src/data/promotions'
import vipPromotion from '@common/src/data/promotions-vip'
import spcPromotion from '@common/src/data/promotions-spc'

const promotions = regPromotion.list.concat(vipPromotion.list, spcPromotion.list)

export default {
  /**
   * Find promotion by ID
   * @param {String} id
   * @return {Object}
   */
  findById: id => promotions.find(o => o.id === id),

  /**
   * Get all promotion's IDs
   * @return {Array}
   */
  getAllIds: () => promotions.map(value => value.id)
}
