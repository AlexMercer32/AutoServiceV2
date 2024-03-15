import { BadRequestException, Body, Controller, Delete, Get, Param, Post, Put, Query } from '@nestjs/common';
import { CreateCarDto } from "src/car/dto/create.car.dto";
import { UpdateCarDto } from "src/car/dto/update.car.dto";
import { CarService } from "./car.service";
import { Car } from "../schemas/car.schema";
import { IsMongoId } from 'class-validator';

@Controller('car')
export class CarController {
    constructor(private carService: CarService) {
    }
    @Get()
    @IsMongoId()
    getAllCars(): Promise<Car[]> {
        return this.carService.getAllCars();
    }

    @Get('/search')
    @IsMongoId()
    getOneCar(
        @Query('uuid') uuid: string,
        @Query('VIN') VIN: string): Promise<Car> 
        {
        if (uuid) {
            return this.carService.getByUUIdCar(uuid);
        }
        if (VIN) {
            return this.carService.getByVINCar(VIN);
        }
        throw new BadRequestException('Wrong search parameters')
    }
    @Post()
    @IsMongoId()
    createCar(@Body() createCarDto: CreateCarDto): Promise<Car> {
        return this.carService.createCar(createCarDto);
    }
    @Delete(':uuid')
    @IsMongoId()
    removeCar(@Param('uuid') uuid: string): Promise<Car> {
        return this.carService.removeCar(uuid);
    }
    @Put(':uuid')
    @IsMongoId()
    updateCar(@Body() updateCarDto: UpdateCarDto, @Param('uuid') uuid: string): Promise<Car> {
        return this.carService.updateCar(uuid, updateCarDto);
    }
}