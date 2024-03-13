import { Body, Controller, Delete, Get, Param, ParseUUIDPipe, Post, Put, UsePipes } from '@nestjs/common';
import { CreateCarDto } from "src/car/dto/create.car.dto";
import { UpdateCarDto } from "src/car/dto/update.car.dto";
import { CarService } from "./car.service";
import { Car } from "../schemas/car.schema";
import { isUUID } from 'class-validator';
@Controller('car')
export class CarController {
    constructor(private carService: CarService) {
    }
    @Get()
    getAllCars() :Promise<Car[]>{
        return this.carService.getAllCars();
    }

    @Get(':uuid')
    getOneCar(@Param('uuid') uuid: string):Promise<Car>  {
        return this.carService.getByUUIdCar(uuid);
    }
    @Post()
    createCar(@Body() createCarDto: CreateCarDto) :Promise<Car> {
        return this.carService.createCar(createCarDto);
    }
    @Delete(':uuid')
    removeCar(@Param('uuid') uuid : string) :Promise<Car> {
          return this.carService.removeCar(uuid);
    }
    @Put(':uuid')
    updateCar(@Body() updateCarDto: UpdateCarDto, @Param('uuid') uuid : string):Promise<Car>{
         return this.carService.updateCar(uuid , updateCarDto);
    }
    @Get(':VIN')
    getOneVINCar(@Param('VIN') VIN: string):Promise<Car[]>  {
        return this.carService.getByVINCar(VIN);
    }
}