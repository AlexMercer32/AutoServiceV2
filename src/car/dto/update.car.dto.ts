import {IsOptional,} from "class-validator";
import { CreateCarDto } from "./create.car.dto";
import { CarEngineEnum } from "src/enums/car.enum";

export class UpdateCarDto extends CreateCarDto {
    @IsOptional()
    mark: string;
    model: string;
    engine: CarEngineEnum;
    year: number;
    VIN: string;
    kindOfWork: string;
    engineCapacity: number;
    mileage: number;
    enginePower: number;
    weight: number;
    color: string;
    owner: string;
    carStatus: boolean;
};