import Storakie from 'src/core/storage'

export enum ROLE {
  Admin = 'Admin',
  User = 'User'
}

const KEY_AUTHORITY = 'AUTHORITY'

export function getAuthority(): ROLE | undefined {
  return Storakie.get(KEY_AUTHORITY)
}

export function setAuthority(role: ROLE): void {
  Storakie.set(KEY_AUTHORITY, role)
}
