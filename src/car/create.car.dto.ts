import { IsNotEmpty, IsPositive, IsEnum, IsString, IsInt, Length, IsNumber, Min, Max, IsBoolean, IsDateString } from 'class-validator';
import { CarEngineEnum } from 'src/car/car.enum';

export class CreateCarDto{
    @IsNotEmpty()
    @IsString()
    mark: string;
    @IsString()
    @IsNotEmpty()
    model: string;
    @IsNotEmpty()
    @IsDateString()
    year: Date;
    @IsNotEmpty()
    @IsString()
    @Length(17)
    VIN: string;
    @IsNotEmpty()
    @IsString()
    @IsEnum(CarEngineEnum)
    engine: CarEngineEnum;
    @IsPositive()
    @IsInt()
    engineCapacity: number;
    @IsNotEmpty()
    @IsPositive()
    @IsNumber()
    mileage: number;
    @IsNotEmpty()
    @IsNumber()
    @IsPositive()
    enginePower: number;
    @IsNotEmpty()
    @IsInt()
    @IsPositive()
    @Min(700)
    @Max(4200)
    weight: number;
    @IsNotEmpty()
    @IsString()
    color: string;
    @IsString()
    @IsNotEmpty()
    owner: string;
    @IsNotEmpty()
    @IsBoolean()
    carStatus: boolean;
};