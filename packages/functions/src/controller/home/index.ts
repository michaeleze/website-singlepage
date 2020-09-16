// const { graphql, buildSchema } = require('graphql');
import { content } from '../../model/home';

// const schema = buildSchema(`
//   type Query {
//     data: [String]
//   }
// `);

const homeController = function (req: any, res: any, next: any): void {
    // graphql(schema, '{ data }', mockLocation ).then((response: any) => {
    //     res.header("Access-Control-Allow-Headers", "*");
    //
    //     return res.status(200).json(response);
    // });
    res.header("Access-Control-Allow-Headers", "*");
    res.header('Access-Control-Allow-Origin', 'http://localhost:4001');
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type');

    next();

    return res.status(200).json(content);
};

export default homeController;
