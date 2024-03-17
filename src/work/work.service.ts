import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { CreateWorkDto } from "./dto/create.work.dto";
import { UpdateWorkDto } from "./dto/update.work.dto";
import { Work, WorkDocument } from "../schemas/work.schema";

@Injectable()
export class WorkService{
    constructor(@InjectModel(Work.name) private workModel:Model<WorkDocument>) {

    }
    async getAllWork():Promise<Work[]>{
        return this.workModel.find().exec();
    }
    async getByIdWork(id:string):Promise<Work>{
        return this.workModel.findById(id);
    }
    async createWork(workDto:CreateWorkDto):Promise<Work>{
        const newWork = new this.workModel(workDto);
        if(newWork.carsInWork>=9){
            throw new Error('We cant get your car in work,all boxes is full. Please wait...');
        }
        return newWork.save();
    }
    async removeWork(id:string):Promise<Work>{
        return this.workModel.findByIdAndDelete(id);
    }
    async updateWork(id:string, workDto:UpdateWorkDto):Promise<Work>{
        return this.workModel.findByIdAndUpdate(id, workDto,{new:true});
    }
    async getTotalPrice(totalPrice: number): Promise<Work>{
       const allPrice = await this.workModel.findOne({
        where:{totalPrice}
       });
       return allPrice;
    }
    async createAllPrice(totalPrice: number): Promise<Work>{
        const hour = new this.workModel;
        const pricePerWork = new this.workModel;
        const newTotalPrice = (hour, pricePerWork)=>{
            totalPrice = hour * pricePerWork;
            return totalPrice;
        }
        newTotalPrice(hour, pricePerWork);
        return
    }
}