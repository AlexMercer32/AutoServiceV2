import {
    IsNotEmpty,
    IsUUID,
    IsPositive,
    IsEnum,
    IsString,
    MaxLength, IsInt, MinLength, MinDate, MaxDate, Length,  IsNumber,  Min, Max
} from 'class-validator';
import { CarEngineEnum } from 'src/enums/car.enum';

export class CreateCarDto{
    @IsUUID()
    readonly id: string;
    @IsNotEmpty()
    @IsString()
    mark: string;
    @IsString()
    @IsNotEmpty()
    model: string;
    @IsInt()
    @IsPositive()
    @IsNotEmpty()
    @MaxDate(new Date())
    @MinDate(new Date(1940))
    year: number;
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
    @Max(6000)
    @Min(49)
    engineCapacity: number;
    @IsNotEmpty()
    @IsPositive()
    @IsNumber()
    @MinLength(1)
    @MaxLength(6)
    mileage: number;
    @IsNotEmpty()
    @IsNumber()
    @IsPositive()
    @Max(900)
    @Min(50)
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
    @IsNotEmpty()
    @IsString()
    kindOfWork: string;
    owner: string;
    @IsNotEmpty()
    @IsString()
    carStatus: boolean;
};