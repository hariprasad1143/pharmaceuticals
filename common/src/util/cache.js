module.exports.isExpire = function (data, key, expireInterval) {
  if (!data[key]) return true

  const item = data[key]
  const timelapse = Date.now() - item.timestamp
  return expireInterval < timelapse
}
