import { Injectable } from "@nestjs/common";
import { CreateCarDto } from "./dto/create.car.dto";
import { InjectModel } from "@nestjs/mongoose";
import { Car, CarDocument } from "../schemas/car.schema";
import { UpdateCarDto } from "src/car/dto/update.car.dto";
import { Model } from "mongoose";
@Injectable()
export class CarService{
    constructor(@InjectModel(Car.name) private carModel : Model<CarDocument>) {}


    async getAllCars() : Promise<Car[]> {
        return this.carModel.find().exec();
    }

    async getByIdCar(id : string) :Promise<Car> {
        return this.carModel.findById(id);
    }

    async createCar(carDto :CreateCarDto):Promise<Car> {
        const newCar = new this.carModel(carDto);
        return newCar.save();
    };
    async removeCar(id: string) :Promise<Car> {
        return this.carModel.findByIdAndDelete(id);
    };

    async updateCar(id: string, carDto: UpdateCarDto) :Promise<Car>{
        return this.carModel.findByIdAndUpdate(id, carDto,{done: true});
    }
}