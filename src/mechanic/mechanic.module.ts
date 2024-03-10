import {Module} from "@nestjs/common";
import {MechanicService} from "./mechanic.service";
import {MechanicController} from "./mechanic.controller";
import {MongooseModule} from "@nestjs/mongoose";
import {Mechanic, mechanicSchema} from "../schemas/mechanic.schema";

@Module({
    providers: [MechanicService],
    controllers: [MechanicController],
    imports: [MongooseModule.forFeature([{
        name: Mechanic.name, schema: mechanicSchema}
    ])]
})
export class MechanicModule{

}