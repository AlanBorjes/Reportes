import  Express, {Request, Response } from "express";
import { UserStorageGateway } from "./user.storage.getway";
import { GetAllUsersInteractor } from "../user-cases/get-all-user.interactor";
export class UserContoller{
    static async getAll(req: Request, res: Response){
        try{
            const repository = new UserStorageGateway();
            const interactor = new GetAllUsersInteractor(repository);
            const data = await interactor.execute();
            res.status(200).json(data)
        }catch(err){
            console.log(err);
            res.status(400).json({message : 'Error'})
        }
    }
}

export const userRouter = Express.Router();
userRouter.get('/',[],UserContoller.getAll)