import { IsNotEmpty, IsPositive, IsEnum, IsString, IsInt, Length, IsNumber, Min, Max, IsBoolean, IsDate, MaxDate, MinDate } from 'class-validator';
import { CarEngineEnum } from 'src/enums/car.enum';

export class CreateCarDto{
    @IsNotEmpty()
    @IsString()
    mark: string;
    @IsString()
    @IsNotEmpty()
    model: string;
    @IsNotEmpty()
    @IsDate()
    @MinDate(require('moment')().subtract(1960, 'y').toDate())
    @MaxDate(new Date())
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