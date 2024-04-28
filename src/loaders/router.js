
import path from 'node:path'
import url from 'node:url'

import { glob } from 'glob'

export function routerLoader() {
  return {
    async load(fastify) {
      const routesPath = path.resolve(
        path.dirname(''),
        'src',
        'features',
        '**/*route.js'
      )

      const routes = await glob(routesPath, {
        windowsPathsNoEscape: true
      })

      for (const route of routes) {
        const urlRoute = url.pathToFileURL(route)
        const routeDefinition = await import(urlRoute)
        fastify.route(routeDefinition.default)
      }
    }
  }
}