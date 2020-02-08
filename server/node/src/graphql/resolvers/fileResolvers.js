import { getDevices } from "../databases/fileDB";

export const devices = (_, { stime, etime, lat, lng, tag }) => getDevices(stime, etime, lat, lng, tag)




