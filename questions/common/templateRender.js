
const templateRender = (data) => {
  const mystr = "I am ${name}, welcome here ${address}";
  return mystr.replace(/\${(\w+)}/g, (_match, p) => {
    console.log(_match)
    return data[p];
  });
}

// 过滤对象
const validData = (data) => {
  for (const key in data) {
    if (data.hasOwnProperty(key)) {
      const element = data[key];
      if (!element && typeof element !== 'number') {
        delete data[key]
      } else if (element instanceof Object) {
        data[key] = validData(element);
      }
    }
  }
  return data;
}

const data = {
  a: 1,
  b: 0,
  obj: {
    a: 1,
    b: null,
  }
}

console.log(templateRender({ name: 'jacky', address: 'shenzhen' }))
