import * as sampleResolvers from "./sampleResolvers"
import * as fileResolvers from "./fileResolvers"
export default {
  Query: {
    ...sampleResolvers,
    ...fileResolvers
  }
}