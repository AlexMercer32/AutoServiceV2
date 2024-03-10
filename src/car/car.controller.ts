import {
    Body,
    Controller,
    Delete,
    Get,
    Param,
    ParseUUIDPipe,
    Post,
    Put,
} from '@nestjs/common';
import {CreateCarDto} from "src/car/dto/create.car.dto";
import {UpdateCarDto} from "src/car/dto/update.car.dto";
import {CarService} from "./car.service";
import {Car} from "../schemas/car.schema";
@Controller('car')
export class CarController {
    constructor(private carService: CarService) {
    }
    @Get()
    getAll() :Promise<Car[]>{
        return this.carService.getAll();
    }

    @Get(':id')
    getOne(@Param('id', new ParseUUIDPipe()) id: string):Promise<Car>  {
        return this.carService.getById(id);
    }
    @Post()
    create(@Body() createCarDto: CreateCarDto) :Promise<Car> {
        return this.carService.create(createCarDto);
    }
    @Delete(':id')
    remove(@Param('id', new ParseUUIDPipe()) id : string) :Promise<Car> {
          return this.carService.remove(id);
    }
    @Put(':id')
    update(@Body() updateCarDto: UpdateCarDto, @Param('id', new ParseUUIDPipe()) id : string):Promise<Car>{
         return this.carService.update(id , updateCarDto);
    }
}