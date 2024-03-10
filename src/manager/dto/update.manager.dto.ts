import { IsOptional } from "class-validator";
import { CreateManagerDto } from "./create.manager.dto";

export class UpdateManagerDto extends CreateManagerDto{
    @IsOptional()
    firstName: string;
    lastName: string;
    age: number;
    pricePerHour: number;
}
