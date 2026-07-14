const { app } = require('@azure/functions');

app.http('bsxapiRedirect', {
  methods: ['GET', 'HEAD'],
  authLevel: 'anonymous',
  route: 'bsxapi',
  handler: async (request) => {
    const search = new URL(request.url).search;
    return {
      status: 301,
      headers: { Location: `/developer/bsxapi${search}` },
    };
  },
});
