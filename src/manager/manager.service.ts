import {Injectable} from "@nestjs/common";
import {InjectModel} from "@nestjs/mongoose";
import {Model} from "mongoose";
import {CreateManagerDto} from "./dto/create.manager.dto";
import {UpdateManagerDto} from "./dto/update.manager.dto";
import {Manager, ManagerDocument} from "../schemas/manager.schema";

@Injectable()
export class ManagerService{
    constructor(@InjectModel(Manager.name) private managerModel:Model<ManagerDocument>) {

    }
    async getAllManagers():Promise<Manager[]>{
        return this.managerModel.find().exec();
    }
    async getByIdManager(id:string):Promise<Manager>{
        return this.managerModel.findById(id);
    }
    async createManager(managerDto:CreateManagerDto):Promise<Manager>{
        const newManager = new this.managerModel(managerDto);
        return newManager.save();
    }
    async removeManager(id:string):Promise<Manager>{
        return this.managerModel.findByIdAndDelete(id);
    }
    async updateManager(id:string, managerDto:UpdateManagerDto):Promise<Manager>{
        return this.managerModel.findByIdAndUpdate(id, managerDto,{new:true});
    }
}