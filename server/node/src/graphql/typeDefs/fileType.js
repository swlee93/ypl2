const Device = 'Device'

export default {
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
    devices(stime: Int, etime: Int, lat: Float, lng: Float, tag: String): [${Device}]!
    device(id: Int!): ${Device}
  `
}