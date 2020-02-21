import { getDevices } from '../databases/jsonDB'
import { getNews } from '../databases/csvDB'
export const devices = (_, { stime, etime, lat, lng, tag }) => getDevices(stime, etime, lat, lng, tag)
export const news = (_, {}) => getNews()
