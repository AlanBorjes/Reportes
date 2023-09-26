import { UseCase } from "../../../kernel/contrac";
import { TUser } from "../entities/user";
import { IUserRepository } from "./ports/user.repository";

export class GetAllUsersInteractor implements UseCase<void, TUser[]>{

    constructor(private readonly repository: IUserRepository){}
    async execute(payload?: void | undefined): Promise<TUser[]> {
        return await this.repository.findAll();
    }
    
}