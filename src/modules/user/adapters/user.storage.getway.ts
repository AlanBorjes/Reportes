//Dao   || "Service Repositorio"

import { TUser } from "../entities/user";
import { IUserRepository } from "../user-cases/ports/user.repository";

export class UserStorageGateway implements IUserRepository{
    findAll(): Promise<TUser[]> {
        throw new Error("Method not implemented.");
    }
    findById(): Promise<TUser> {
        throw new Error("Method not implemented.");
    }
    save(user: TUser): Promise<boolean> {
        throw new Error("Method not implemented.");
    }
    update(user: TUser): Promise<boolean> {
        throw new Error("Method not implemented.");
    }
    delete(id: number): Promise<boolean> {
        throw new Error("Method not implemented.");
    }

}