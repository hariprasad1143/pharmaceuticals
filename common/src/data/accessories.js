import accessoriesUat1 from '@common/src/data/accessories-uat1'
import accessoriesUat5 from '@common/src/data/accessories-uat5'
import accessoriesUatA from '@common/src/data/accessories-uata'
import accessoriesUatB from '@common/src/data/accessories-uatb'
import accessoriesPreprod from '@common/src/data/accessories-preprod'
import accessoriesProd from '@common/src/data/accessories-prod'
import envDetect from '@common/src/util/env-detect'

const promotionList = {
  'localhost': accessoriesUat1,
  'uat1': accessoriesUat1,
  'uat5': accessoriesUat5,
  'uata': accessoriesUatA,
  'uatb': accessoriesUatB,
  'perf': accessoriesPreprod,
  'production': accessoriesProd
}

export default promotionList[envDetect.getEnvByHostname()]
