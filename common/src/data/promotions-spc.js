import promotionsUat1 from '@common/src/data/spc/promotions-uat1'
import promotionsUat5 from '@common/src/data/spc/promotions-uat5'
import promotionsUatA from '@common/src/data/spc/promotions-uata'
import promotionsUatB from '@common/src/data/spc/promotions-uatb'
import promotionsPreprod from '@common/src/data/spc/promotions-preprod'
import promotionsProd from '@common/src/data/spc/promotions-prod'
import envDetect from '@common/src/util/env-detect'

const promotionList = {
  'localhost': promotionsUat1,
  'uat1': promotionsUat1,
  'uat5': promotionsUat5,
  'uata': promotionsUatA,
  'uatb': promotionsUatB,
  'perf': promotionsPreprod,
  'production': promotionsProd
}

export default promotionList[envDetect.getEnvByHostname()]
