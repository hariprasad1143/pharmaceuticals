import config from '@common/src/config'

describe('Config', () => {
  it('getApiPath', () => {
    var path = '/my/path'

    expect(config.getApiPath(path)).to.equal(config.api.base_path + path)
  })
})
