import { IsOptional } from "class-validator";
import { CreateClientDto } from "./create.client.dto";

export class UpdateClientDto extends CreateClientDto{
    @IsOptional()
    firstName: string;
    lastName: string;
    phoneNumber: number;
    infoAboutCar: string;
    infoAboutMechanic: string;
    moneyToPay: number;
    infoPay: number;
}