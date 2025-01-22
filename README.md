# Moesif Fastify Example

[Fastify](https://fastify.dev/) is web framework for node.js.

[Moesif](https://www.moesif.com) is an API analytics and Monetization platform.

[moesif-nodejs](https://github.com/Moesif/moesif-nodejs) is a middleware that makes integration with Moesif easy for Nodejs based apps including Express.

This example is a Fastify application with Moesif's API analytics middleware integrated.

## Fastify Middleware

Per [fastify documentation](https://fastify.dev/docs/latest/Reference/Middleware/#middleware), by default,
fastify do NOT support any middleware out of the box. You must use one of two plugins: [`@fastify/express`](https://github.com/fastify/fastify-express) or [`@fastify/middie`](https://github.com/fastify/middie) in order to use ANY middleware.

## How to run this example.

1. Install all dependencies:

```bash
npm install
```

2. Add your Moesif Application Id to `server.js`

Your Moesif Application Id can be found in the [_Moesif Portal_](https://www.moesif.com/).
After signing up for a Moesif account, your Moesif Application Id will be displayed during the onboarding steps.

You can always find your Moesif Application Id at any time by logging
into the [_Moesif Portal_](https://www.moesif.com/), clicking on the bottom-left menu,
and then clicking _Installation_.

```javascript
const moesifOptions = {
  applicationId: "your application id"
};
```

3. Run the example, it will listen on port 3050 .

```bash
node server.js
```

4. Send some requests to some of the routes and verify that the API calls are captured in your Moesif account.

```bash
curl http://localhost:3050
```
