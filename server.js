import Fastify from 'fastify'
import moesif from 'moesif-nodejs';
import FastifyMiddie from '@fastify/middie';

const fastify = Fastify({
  logger: true
})

// you must register @fastify/middie or @fastify/express in order to use any express style middleware.
// https://fastify.dev/docs/latest/Reference/Middleware/#middleware
await fastify.register(FastifyMiddie)

const moesifOptions = {
  applicationId: 'Your Application Id',
  debug: true,
};

const moesifMiddleware = moesif(moesifOptions);
fastify.use(moesifMiddleware);


// Declare a route
fastify.get('/', async function handler (request, reply) {
  return { hello: 'world' }
})

fastify.post('/random', async function handler (request, reply) {
  return { foo: 'bar' }
})

// Run the server!
try {
  await fastify.listen({ port: 3050 })
} catch (err) {
  fastify.log.error(err)
  process.exit(1)
}
