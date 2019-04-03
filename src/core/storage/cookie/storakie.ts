import IStorage from '../IStorage'
import Cookies from 'js-cookie'
/**
 * All the cookie options from RFC 6265
 */
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
