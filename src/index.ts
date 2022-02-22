import {URL} from 'url';
import {request, RequestOptions} from 'https';
import {ClientRequest} from 'http';
import {FindResult, RequestParams} from './typing';
import {ClientError, UnknownError} from "./errors";

export default class SauceNao {
    private url: URL = new URL('https://saucenao.com/search.php');

    constructor(dynamicParams: RequestParams) {

        Object.keys(dynamicParams).map(value => this.url.searchParams.set(value, dynamicParams[value].toString()))

        this.url.searchParams.set('output_type', '2');
    }

    public find(staticParams: RequestParams | string): Promise<FindResult> {
        let body: string = '';

        typeof staticParams === "string" ? this.url.searchParams.set('url', staticParams) : Object.keys(staticParams).map(value => this.url.searchParams.set(value, staticParams[value].toString()))

        const options: RequestOptions = {
            method: 'GET',
            host: this.url.hostname,
            path: this.url.pathname + this.url.search
        }

        return new Promise(r => {
            const req: ClientRequest = request(options, (res: any) => {
                res.body = ''
                res.setEncoding('utf-8')
                res.on('data', (chunk: string) => res.body += chunk)
                res.on('end', () => {
                    const json: FindResult = JSON.parse(res.body)

                    switch (json.header.status) {
                        case -3: {
                            throw new ClientError("You need an Image!");
                            break;
                        }
                        case -1: {
                            throw new ClientError("The anonymous account type does not permit API usage.");
                            break;
                        }
                        case 0: {
                            r(json);
                            break;
                        }
                        default:
                            throw json.header.status > 0 ? new UnknownError('Unknown client error') : new UnknownError('Unknown client error');
                    }
                })
            })
            req.end(body === '' ? null : body);
        });
    }
}