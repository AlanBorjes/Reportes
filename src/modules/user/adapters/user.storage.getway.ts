//Dao   || "Service Repositorio"

import { pool } from "../../../config/postgres";
import { TUser } from "../entities/user";
import { IUserRepository } from "../user-cases/ports/user.repository";

export class UserStorageGateway implements IUserRepository{
    async findAll(): Promise<TUser[]> {
        const query =  'SELECT * FROM users ORDER BY id DESC;'
        const { rows: userRows} = await pool.query(query);
        return userRows.map(user => <TUser>user);
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