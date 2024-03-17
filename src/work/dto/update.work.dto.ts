
import { IsOptional } from "class-validator";
import { CreateWorkDto } from "./create.work.dto";

export class UpdateWorkDto extends CreateWorkDto{
   @IsOptional()
   pricePerWork: number;
   @IsOptional()
   hour: number;
   @IsOptional()
   kindOfWork: string;
   @IsOptional()
   carsInWork: number;
}
