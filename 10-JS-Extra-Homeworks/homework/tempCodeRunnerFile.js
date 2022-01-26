const array = s.split("")
const mayus = []

  for(let i = 0; i < array.length; i++){
    if(array[i].charCodeAt(0) >= 65 && array[i].charCodeAt(0) <= 90) {
        mayus.push(array.splice(i,1))
    }
  }

  console.log(array)
  console.log(mayus)

  console.log(mayus.join("") + array.join(""))
  return array.join("")