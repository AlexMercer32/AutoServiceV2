import { BadRequestException, 
    Body, 
    Controller, 
    Delete, 
    Get, 
    Param, 
    Patch, 
    Post, 
    Query } from '@nestjs/common';
import { CreateCarDto } from "src/car/create.car.dto";
import { UpdateCarDto } from "src/car/update.car.dto";
import { CarService } from "./car.service";
import { Car } from "./car.schema";
import {MongoObjectIdPipe} from "../../custom.mongoIdPipe"
import { log } from 'console';
import { read } from 'fs';

@Controller('car')
export class CarController {
    constructor(private carService: CarService) {
    }
    @Get()
    getAllCars(): Promise<Car[]> {
        return this.carService.getAllCars();
    }

    @Get('/search')
    getOneCar(
        @Query('uuid', new MongoObjectIdPipe()) uuid: string ,
        @Query('VIN') VIN: string,
        @Query('carStatus') carStatus: boolean): Promise<Car> 
        {
        if (uuid) {
            return this.carService.getByUUIdCar(uuid);
        }
        if (VIN) {
            return this.carService.getByVINCar(VIN);
        }
        if(carStatus){
            return this.carService.getCarByCarStatus(carStatus);
        }
        throw new BadRequestException('Wrong search parameters')
    }
    @Post()
    createCar(@Body() createCarDto: CreateCarDto): Promise<Car> {
        const searchCar=this.carService.createCar(createCarDto);
        if(searchCar){
            return this.carService.getCarByCarStatus(true);
        }
        console.log(searchCar);
        return searchCar;
    }
    @Delete(':uuid')
    removeCar(@Param('uuid', new MongoObjectIdPipe()) uuid: string): Promise<Car> {
        return this.carService.removeCar(uuid);
    }
    @Patch(':uuid')
    updateCar(@Body() updateCarDto: UpdateCarDto, @Param('uuid', new MongoObjectIdPipe()) uuid: string): Promise<Car> {
        return this.carService.updateCar(uuid, updateCarDto);
    }
    @Get(':carStatus')
    getCarByCarStatuss(@Param('carStatus') carStatus: boolean): Promise<Car>{
        return this.carService.getCarByCarStatus(carStatus);
    }
}
