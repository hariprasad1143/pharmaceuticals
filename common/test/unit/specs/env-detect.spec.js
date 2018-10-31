import envDetect from '@common/src/util/env-detect'

describe('env-detect', () => {
  it('getEnvByHostname', () => {
    expect(envDetect.getEnvByHostname('localhost')).to.equal('localhost')
    expect(envDetect.getEnvByHostname('glptraining1.blibli.com')).to.equal('uat1')
    expect(envDetect.getEnvByHostname('glptraining1.gdn-app.com')).to.equal('uat1')
    expect(envDetect.getEnvByHostname('glptraining5.gdn-app.com')).to.equal('uat5')
    expect(envDetect.getEnvByHostname('glpuata.gdn-app.com')).to.equal('uata')
    expect(envDetect.getEnvByHostname('glpuatb.gdn-app.com')).to.equal('uatb')
    expect(envDetect.getEnvByHostname('glpperf.gdn-app.com')).to.equal('perf')
    expect(envDetect.getEnvByHostname('galaxylaunchpack.blibli.com')).to.equal('production')
  })
})
