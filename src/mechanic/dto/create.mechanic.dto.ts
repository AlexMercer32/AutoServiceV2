import { IsBoolean, IsEnum, IsInt, IsNotEmpty, IsPositive, IsString, Length, Max, Min } from "class-validator";
import { MechanicCategoryEnum } from "src/enums/mechanic.enum";
export class CreateMechanicDto{
    @IsString()
    @IsNotEmpty()
    firstName: string;
    @IsString()
    @IsNotEmpty()
    lastName: string;
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
    @IsString()
    bestWork: string;
    @IsEnum(MechanicCategoryEnum)
    @IsNotEmpty()
    category: MechanicCategoryEnum;
    @IsString()
    @IsNotEmpty()
    @Length(9,12)
    phoneNumber: string;
    @IsBoolean()
    @IsNotEmpty()
    free: true;
}