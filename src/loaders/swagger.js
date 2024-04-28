import fastifySwagger from '@fastify/swagger'
import fastifySwaggerUi from '@fastify/swagger-ui'

export function swaggerLoadder() {
  return {
    async load(fastify) {
      await fastify.register(fastifySwagger, {
        openapi: {
          info: {
            title: 'CodeInit APIFY',
            description: 'Sua descricao aqui',
            version: '1.0'
          },
          schemes: ['http', 'https'],
          consumes: ['application/json'],
          produces: ['application/json'],
          components: {
            securitySchemes: {
              bearerAuth: {
                type: 'http',
                scheme: 'bearer',
                bearerFormat: 'JWT',
                schemeLabel: 'bearerAuth'
              }
            }
          }
        },
        exposeRoute: true
      })

      await fastify.register(fastifySwaggerUi, {
        routePrefix: '/docs',
        uiConfig: {
          docExpansion: 'full',
          deepLinking: false
        },
        uiHooks: {
          onRequest: function (_, _reply, next) { next() },
          preHandler: function (_, _reply, next) { next() }
        },
        staticCSP: true,
        transformStaticCSP: (header) => header,
        transformSpecification: (swaggerObject, _request, _reply) => { return swaggerObject },
        transformSpecificationClone: true
      })
    }
  }
}