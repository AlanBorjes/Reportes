export type Entity<ID extends number | string>={
    id : ID;
}

export type Tpagination = {
    filter?: string;
    page?: number;
    limit?:number;
    sortBy?: string;
    totalPages?:number;
    sort?: string;
    total?: number;
}

export enum  Errors {
    NO_DATA_FOUND= 'NoDataFound',
    INTERNAL_SERVER_ERROR = 'InternalServerError',
    UNAUTHORIZED ='UnAuthorized',
    MISSIG_FIELDS= 'MissingFields',
    RECORD_NOT_REGISTERED='RecordNotRegistered',
}
export type Tstatus = Entity<number> & {
    description: string
}
export type TJson = {
    [x:string] : any;
}

export type TJsonArray = TJson[];