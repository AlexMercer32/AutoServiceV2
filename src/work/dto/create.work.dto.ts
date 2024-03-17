import { IsInt, IsNotEmpty, IsNumber, IsPositive, IsString, Max } from "class-validator";
export class CreateWorkDto{
    @IsNotEmpty()
    @IsInt()
    @IsPositive()
    pricePerWork: number;
    @IsNotEmpty()
    @IsNumber()
    @IsPositive()
    hour: number;
    @IsNotEmpty()
    @IsString()
    kindOfWork: string;
    @IsInt()
    @IsPositive()
    @IsNotEmpty()
    @Max(9)
    carsInWork: number;
    @IsNotEmpty()
    @IsPositive()
    @IsNumber()
    totalPrice: number;
}
