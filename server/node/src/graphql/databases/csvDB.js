import graphqlToJson from 'graphql-to-json'
import fs from 'fs'
const BASE_DIR = 'src/data'
const NEWS = `${BASE_DIR}/jhlee0210.csv`
function csvJSON(csv) {
	var lines = csv.split('\n')

	var result = []

	var headers = lines[0].split(',')

	for (var i = 1; i < lines.length; i++) {
		var obj = {}
		var currentline = lines[i].split(',')

		for (var j = 0; j < headers.length; j++) {
			obj[headers[j]] = currentline[j]
		}

		result.push(obj)
	}

	console.log(JSON.stringify(result)) //JSON
	return result //JavaScript object
}
export const getNews = async () => {
	let news = []

	try {
		const data = fs.readFileSync(NEWS, 'utf8')
		news = csvJSON(data)
	} catch (err) {
		console.error('ERROR:', err)
	}

	return news
}
