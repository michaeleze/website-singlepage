const { graphql, buildSchema } = require('graphql');

const schema = buildSchema(`
  type Query {
    hello: String
  }
`);

const root = { hello: () => 'Hello!! \n From the backend :)' };

const callbackService = function (req, res): void {
    res.writeHead(200, {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin':'*'
    });

    graphql(schema, '{ hello }', root).then((response) => {
        console.log(response.data)
        const data = response.data.hello
        res.write(JSON.stringify({data}));
        res.end();
    });
};

module.exports = {
    callbackService
};
