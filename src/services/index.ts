// ToDO convert service to builder (utility class)

class Service{
    private static endpoint: string;
    private static ERRORMESSAGE: string = 'Nothing found U+1F642';

    static async useFetch(endpoint: string, query: string) {
        const body = JSON.stringify({query: query});

        const data = await fetch(endpoint, {
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

export default Service;
