import { IsInt, IsNotEmpty, IsPhoneNumber, IsPositive, IsString, Length } from "class-validator";
export class CreateClientDto{
    @IsNotEmpty()
    @IsString()
    firstName: string;
    @IsNotEmpty()
    @IsString()
    lastName: string;
    @IsInt()
    @IsNotEmpty()
    @IsPositive()
    @Length(9,12)
    @IsPhoneNumber()
    phoneNumber: number;
}