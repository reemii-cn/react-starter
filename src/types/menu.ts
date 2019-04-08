import * as React from 'react'
import { ROLE } from 'src/utils/authority'

export type Menu = {
  name: string
  path: string
  icon: string
  children: Array<{
    name: string
    path: string
    authority?: ROLE[]
  }>
}

export type Router = {
  path: string
  component: React.ComponentType<any>
  name?: string
  authority?: ROLE[]
}
