import {IsOptional,} from "class-validator";
import { CreateCarDto } from "./create.car.dto";
import { CarEngineEnum } from "src/enums/car.enum";

export class UpdateCarDto extends CreateCarDto {
    @IsOptional()
    mark: string;
    @IsOptional()
    model: string;
    @IsOptional()
    engine: CarEngineEnum;
    @IsOptional()
    year: number;
    @IsOptional()
    VIN: string;
    @IsOptional()
    engineCapacity: number;
    @IsOptional()
    mileage: number;
    @IsOptional()
    enginePower: number;
    @IsOptional()
    weight: number;
    @IsOptional()
    color: string;
    @IsOptional()
    owner: string;
    @IsOptional()
    carStatus: boolean;
};