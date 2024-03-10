import {Module} from "@nestjs/common";
import {ManagerService} from "./manager.service";
import {ManagerController} from "./manager.controller";
import {MongooseModule} from "@nestjs/mongoose";
import {Manager, managerSchema} from "../schemas/manager.schema";
@Module({
    providers: [ManagerService],
    controllers: [ManagerController],
    imports:[
        MongooseModule.forFeature([
            {name: Manager.name, schema: managerSchema}
        ])
    ]
})
export class ManagerModule{

}