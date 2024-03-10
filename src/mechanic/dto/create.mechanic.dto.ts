import { IsBoolean, IsDate, IsEnum, IsInt, IsNotEmpty, IsNumber, IsPhoneNumber, IsPositive, IsString, IsUUID, Length, Max, Min, max} from "class-validator";
import { MechanicCategoryEnum } from "src/enums/mechanic.enum";
export class CreateMechanicDto{
    @IsUUID()
    readonly id: string;
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
    pricePerHour: number;
    @IsString()
    @IsNotEmpty()
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
    @IsNumber()
    @IsNotEmpty()
    @IsPositive()
    @Min(0.1)
    @Max(40)
    hour: number;
    @IsNumber()
    @IsNotEmpty()
    @IsPositive()
    picePerWork: number;
    
}