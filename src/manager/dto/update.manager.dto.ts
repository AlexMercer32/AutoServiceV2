import { IsOptional } from "class-validator";
import { CreateManagerDto } from "./create.manager.dto";

export class UpdateManagerDto extends CreateManagerDto{
    @IsOptional()
    firstName: string;
    @IsOptional()
    lastName: string;
    @IsOptional()
    age: number;
    @IsOptional()
    pricePerHour: number;
    @IsOptional()
    phoneNumber: number;
}
