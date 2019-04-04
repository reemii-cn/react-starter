import IStorage from '../IStorage'
import Cookies from 'js-cookie'

const storakie: IStorage = {
  get(key: string) {
    return Cookies.get(key)
  },
  set(key: string, data: any) {
    const option: Cookies.CookieAttributes = { secure: true }
    Cookies.set(key, data, option)
  }
}

export default storakie
