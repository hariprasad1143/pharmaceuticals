import productsUat1 from '@common/src/data/spc/products-uat1'
import productsUat5 from '@common/src/data/spc/products-uat5'
import productsUatA from '@common/src/data/spc/products-uata'
import productsUatB from '@common/src/data/spc/products-uatb'
import productsPreprod from '@common/src/data/spc/products-preprod'
import productsProd from '@common/src/data/spc/products-prod'
import envDetect from '@common/src/util/env-detect'

const productList = {
  'localhost': productsUat1,
  'uat1': productsUat1,
  'uat5': productsUat5,
  'uata': productsUatA,
  'uatb': productsUatB,
  'perf': productsPreprod,
  'production': productsProd
}

export default productList[envDetect.getEnvByHostname()]
