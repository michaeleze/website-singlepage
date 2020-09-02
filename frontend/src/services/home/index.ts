class Query{
    private endpoint: string;
    private ERRORMESSAGE: string = 'Nothing found U+1F642';

    constructor(endpoint: string) {
        this.endpoint = endpoint;
    }

    public async fetchData() {
        const data = await fetch(this.endpoint);

        if(!data) {
            Promise.reject(Error(this.ERRORMESSAGE));
        }

        console.log('data', data)
        const res = await data.json();
        return Promise.resolve(res);
    }
}

const endpoint = 'https://us-central1-portfoliowebsite-23bb3.cloudfunctions.net/server';
export const homeService = new Query(endpoint);
