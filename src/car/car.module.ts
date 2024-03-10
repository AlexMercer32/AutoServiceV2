import {Module} from "@nestjs/common";
import {CarService} from "./car.service";
import {CarController} from "./car.controller";
import {MongooseModule} from "@nestjs/mongoose";
import {Car, carSchema} from "../schemas/car.schema";
@Module({
    providers: [CarService],
    controllers: [CarController],
    imports:[
        MongooseModule.forFeature([
            {name: Car.name, schema: carSchema}
        ])
    ]
})
export class CarsModule{

}