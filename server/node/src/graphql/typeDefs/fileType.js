const Device = 'Device'
const News = 'News'

export default {
  [News]: `
    index: Int
    DATE: String
    PRESS: String
    TITLE: String
    CONTENT: String
    URL: String
  `,

	[Device]: `
    id: Int!
    name: String!
    owner: String!
    latitude: Float!
    longitude: Float!
    tags: [String]
    created: Float
    updated: Int
    active: Boolean
    alert_enabled: Boolean
    alert_rule: String

  `,
  Query: `
    news(id: Int): [${News}]
    devices(stime: Int, etime: Int, lat: Float, lng: Float, tag: String): [${Device}]!
    device(id: Int!): ${Device}

  `,
}
