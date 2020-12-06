import { RequestParam } from './request-param.model';

export interface Mock {
    id: number;
    apiName: string;
    name: string;
    verb: string;
    request: string;
    queryParams: RequestParam[];
    headerParams: RequestParam[];
    body: string;
    response: string;
}