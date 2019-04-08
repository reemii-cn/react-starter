import Storakie from 'src/core/storage'

export enum ROLE {
  Admin = 'Admin',
  User = 'User',
  NONE = 'none'
}

const KEY_AUTHORITY = 'AUTHORITY'

export function getAuthority(): ROLE {
  const role = Storakie.get(KEY_AUTHORITY)
  return role ? role : ROLE.NONE
}

export function setAuthority(role: ROLE): void {
  Storakie.set(KEY_AUTHORITY, role)
}
