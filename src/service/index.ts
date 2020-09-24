// ToDO convert service to builder (utility class)

class ServiceClass{
    private endpoint: string;
    private ERRORMESSAGE: string = 'Nothing found U+1F642';

    constructor(endpoint: string) {
        this.endpoint = endpoint;
    }

    public async useFetch(query: string) {
        const body = JSON.stringify({query: query});

        const data = await fetch(this.endpoint, {
            body: body,
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
            },
            method: 'POST'
        });

        if(!data) {
            Promise.reject(Error(this.ERRORMESSAGE));
        }

        console.log('data', data);

        const res = await data.json();

        return Promise.resolve(res);
    }
}

const endpoint = 'https://portfolio-graphql-server.herokuapp.com/';
const Service = new ServiceClass(endpoint);

export default Service;
