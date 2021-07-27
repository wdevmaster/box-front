import Vue from 'vue'

Vue.filter('capitalize', function (value) {
  if (!value) return ''

  value = value.toString()
  return value.charAt(0).toUpperCase() + value.slice(1)
})

Vue.filter('replaceAll', function (value, searchValue, replaceValue) {
  return value.replaceAll(searchValue, replaceValue)
})