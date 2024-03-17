import { IsOptional } from "class-validator";
import { CreateMechanicDto } from "./create.mechanic.dto";
import { MechanicCategoryEnum } from "src/enums/mechanic.enum";

export class UpdateMechanicDto extends CreateMechanicDto{
    @IsOptional()
    firstname: string;
    @IsOptional()
    lastname: string;
    @IsOptional()
    experience: string;
    @IsOptional()
    age: number;
    @IsOptional()
    quality: string;
    @IsOptional()
    bestWork: string;
    @IsOptional()
    category: MechanicCategoryEnum;
    @IsOptional()
    phoneNumber: string;
    @IsOptional()
    free: true;
}