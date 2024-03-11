import { IsInt, IsNotEmpty, IsNumber, IsPhoneNumber, IsPositive, IsString, IsUUID, Length } from "class-validator";
export class CreateClientDto{
    @IsUUID()
    readonly id: string;
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
    @IsNotEmpty()
    @IsString()
    infoAboutCar: string;
    @IsNotEmpty()
    @IsString()
    infoAboutMechanic: string;
    @IsNotEmpty()
    @IsNumber()
    @IsPositive()
    moneyToPay: number;
    @IsNotEmpty()
    @IsNumber()
    @IsPositive()
    infoPay: number
}