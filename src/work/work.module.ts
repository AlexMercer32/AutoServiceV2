import {Module} from "@nestjs/common";
import {WorkService} from "./work.service";
import {WorkController} from "./work.controller";
import {MongooseModule} from "@nestjs/mongoose";
import {Work, workSchema} from "../schemas/work.schema";
@Module({
    providers: [WorkService],
    controllers: [WorkController],
    imports:[
        MongooseModule.forFeature([
            {name: Work.name, schema: workSchema}
        ])
    ]
})
export class WorkModule{

}