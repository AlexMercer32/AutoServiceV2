import { IsOptional } from "class-validator";
import { CreateClientDto } from "./create.client.dto";

export class UpdateClientDto extends CreateClientDto{
    @IsOptional()
    firstName: string;
    @IsOptional()
    lastName: string;
    @IsOptional()
    phoneNumber: number;
}