var data = [
  {
    province: '浙江',
    city: '杭州',
    name: '西湖'
  },
  {
    province: '四川',
    city: '成都',
    name: '锦里'
  },
  {
    province: '四川',
    city: '成都',
    name: '方所'
  },
  {
    province: '四川',
    city: '阿坝',
    name: '九寨沟'
  },
  {
    province: '浙江',
    city: '杭州',
    name: '阿里'
  }
]

var transObject = function(tableData, keys) {
  const hashTable = {}
  const res = []
  for (let i = 0; i < tableData.length; i++) {
    let arr = res
    let cur = hashTable
    for (let j = 0; j < keys.length; j++) {
      const key = keys[j]
      const filed = tableData[i][key]
      if (!cur[filed]) {
        const pusher = { value: filed }
        let tmp
        if (j !== keys.length - 1) {
          tmp = []
          pusher.children = tmp
        }
        cur[filed] = { $$pos: arr.push(pusher) - 1 }
        cur = cur[filed]
        arr = tmp
      } else {
        cur = cur[filed]
        arr = arr[cur.$$pos].children
      }
    }
  }
  return res
}
const key = ['province', 'city', 'name']
const handleDate = transObject(data, key)
console.log(handleDate)
