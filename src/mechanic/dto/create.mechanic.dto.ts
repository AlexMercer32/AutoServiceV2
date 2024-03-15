import { IsBoolean, IsEnum, IsInt, IsNotEmpty, IsPhoneNumber, IsPositive, IsString, Length, Max, Min } from "class-validator";
import { MechanicCategoryEnum } from "src/enums/mechanic.enum";
export class CreateMechanicDto{
    @IsString()
    @IsNotEmpty()
    firstname: string;
    @IsString()
    @IsNotEmpty()
    lastname: string;
    @IsNotEmpty()
    @IsString()
    experience: string;
    @Max(70)
    @Min(18)
    @IsNotEmpty()
    @IsInt()
    @IsPositive()
    age: number;
    @IsNotEmpty()
    @IsString()
    quality: string;
    @IsNotEmpty()
    @IsInt()
    @IsPositive()
    @Min(200)
    @Max(500)
    bestWork: string;
    @IsEnum(MechanicCategoryEnum)
    @IsNotEmpty()
    category: MechanicCategoryEnum;
    @IsInt()
    @IsNotEmpty()
    @IsPositive()
    @Length(9,12)
    @IsPhoneNumber()
    phoneNumber: number;
    @IsBoolean()
    @IsNotEmpty()
    free: true;
}