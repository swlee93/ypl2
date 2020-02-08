import { default as sampleType } from "./sampleType"
import { default as fileType } from "./fileType"
const TYPES = [sampleType, fileType /** ...more */]

let stringify = '';

(function typesToString() {
  let models = ''
  let queries = ''

  TYPES.map(typeObj => {
    Object.keys(typeObj).map(key => {
      let value = typeObj[key]
      if (key === "Query") {
        queries += `
        ${value}
      `
      } else {
        models += `
        type ${key} { 
          ${value}
        }
      `
      }
    })
  })

  stringify = `
    ${models}
    type Query { 
      ${queries}
    }
  `
})()

console.log('stringify', stringify)
export default stringify