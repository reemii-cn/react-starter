/**
 * Created on Wed Apr 03 2019 by Nova
 *
 * This file is used to define an interface for store something
 */

export default interface IStorage {
  set(key: string, data: any): void
  get(key: string): any
}
