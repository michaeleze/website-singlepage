const { graphql, buildSchema } = require('graphql');
import { mockLocation } from '../../model/home';

const schema = buildSchema(`
  type Query {
    data: [String]
  }
`);

const homeController = function (req: any, res: any): void {
    graphql(schema, '{ data }', mockLocation ).then((response: any) => {
        res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");

        return res.status(200).json({ data: mockLocation });
    });
};

export default homeController;
