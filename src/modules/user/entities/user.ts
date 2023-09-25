import { Entity, Tstatus } from "../../../kernel/types";

export type TUser = Entity<number> &{
    username: string;
    password? : string;
    status?: Tstatus;
    person?: any;
}