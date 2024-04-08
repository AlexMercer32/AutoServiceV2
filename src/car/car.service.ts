import { Injectable } from "@nestjs/common";
import { CreateCarDto } from "./create.car.dto";
import { InjectModel } from "@nestjs/mongoose";
import { Car, CarDocument } from "./car.schema";
import { UpdateCarDto } from "src/car/update.car.dto";
import { Model } from "mongoose";

@Injectable()
export class CarService{
    constructor(@InjectModel(Car.name) private carModel : Model<CarDocument>) {}


    async getAllCars(): Promise<Car[]> {
        return this.carModel.find().exec();
    }

    async getByUUIdCar(uuid: string): Promise<Car> {
        return this.carModel.findById(uuid);
    }

    async createCar(carDto :CreateCarDto): Promise<Car> {
            const newCar = new this.carModel(carDto);
            return newCar.save(); 
    };
    async removeCar(uuid: string): Promise<Car> {
        return this.carModel.findByIdAndDelete(uuid);
    };

    async updateCar(uuid: string, carDto: UpdateCarDto): Promise<Car>{
        return this.carModel.findByIdAndUpdate(uuid, carDto,{done: true});
    }
    async getByVINCar(VIN: string): Promise<Car> {
         const carVIN = await this.carModel.findOne({
            where: {VIN}
         });
         return carVIN;
    }
    async getCarByCarStatus(carStatus: boolean): Promise<Car>{
        const carsStatus = await this.carModel.findOne({
            where: {carStatus}
        });
      return carsStatus;
    }
}
