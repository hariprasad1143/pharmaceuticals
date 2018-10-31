import regProducts from '@common/src/data/products'
import vipProducts from '@common/src/data/products-vip'
import spcProducts from '@common/src/data/products-spc'
import accessories from '@common/src/data/accessories'

const products = regProducts.list.concat(vipProducts.list, spcProducts.list, accessories.list)

export default {
  getProductBySku: function (sku) {
    for (let i in products) {
      let product = products[i]
      if (product.sku === sku) {
        return product
      }
    }
    return {sku: sku}
  },

  /**
   * Get all product's SKUs
   * @return {Array}
   */
  getAllSku: () => products.map(product => product.sku)
}
