const dayjs = require('dayjs')

const filterTimes = (val, format = 'YYYY-MM-DD') => {
  if (!isNull(val)) {
    val = (parseInt(val) * 1000)
    return dayjs(val).format(format)
  } else {
    return '--'
  }
}

export const isNull = (value) => {
  if (!value) return true
  if (JSON.stringify(value) === '{}') { return true }
  if (JSON.stringify(value) === '[]') { return true }
}

export default app => {
  app.config.globalProperties.$filters = { filterTimes }
}
