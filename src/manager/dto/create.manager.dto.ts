import { IsInt, IsNotEmpty, IsPhoneNumber, IsPositive, IsString, Length, Max, Min } from "class-validator";
export class CreateManagerDto{
    @IsNotEmpty()
    @IsString()
    firstName: string;
    @IsNotEmpty()
    @IsString()
    lastName: string;
    @IsNotEmpty()
    @IsInt()
    @IsPositive()
    @Min(200)
    @Max(400)
    pricePerHour: number;
    @IsInt()
    @IsNotEmpty()
    @IsPositive()
    @Min(18)
    @Max(70)
    age: number;
    @IsInt()
    @IsNotEmpty()
    @IsPositive()
    @Length(9,12)
    @IsPhoneNumber()
    phoneNumber: number;
}
