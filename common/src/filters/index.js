import Vue from 'vue'

Vue.filter('currencyFormat', function (value) {
  if (typeof value === 'number') {
    return 'Rp ' + String(value).replace(/(.)(?=(\d{3})+$)/g, '$1.')
  } else {
    return 'Rp ' + 0
  }
})

Vue.filter('roundNumber', function (value, decimals) {
  if (!value) {
    value = 0
  }

  if (!decimals) {
    decimals = 0
  }

  value = Math.round(value * Math.pow(10, decimals)) / Math.pow(10, decimals)
  return value
})

Vue.filter('leftPad', function (value, padString, length) {
  let stringValue = value.toString()
  while (stringValue.length < length) {
    stringValue = padString + stringValue
  }
  return stringValue
})

Vue.filter('dateFormatWithHyphen', function (value) {
  return new Date(value).format('DD MMMM YYYY')
})

Vue.filter('timeFormat', function (value) {
  return new Date(value).format('hh:mm')
})

Vue.filter('timeFormatInMinute', function (value) {
  return new Date().format('mm') - new Date(value).format('mm')
})

Vue.filter('timeFormatInHour', function (value) {
  return new Date().format('hh') - new Date(value).format('hh')
})
