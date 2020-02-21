import graphqlToJson from 'graphql-to-json'
import fs from 'fs'
const BASE_DIR = '/Users/mac/Documents/toy/hackathon-gql-server/src/data'
const DEVICES = `${BASE_DIR}/devices.json`

export const getDevices = async (stime, etime, lat, lng, tag) => {
	let devices = []

	try {
		const data = fs.readFileSync(DEVICES, 'utf8')
		devices = JSON.parse(data)
	} catch (err) {
		console.error('ERROR:', err)
	}

	return devices
}
