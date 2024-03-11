import {Module} from "@nestjs/common";
import {ClientService} from "./client.service";
import {ClientController} from "./client.controller";
import {MongooseModule} from "@nestjs/mongoose";
import {Client, clientSchema} from "../schemas/client.schema";
@Module({
    providers: [ClientService],
    controllers: [ClientController],
    imports:[
        MongooseModule.forFeature([
            {name: Client.name, schema: clientSchema}
        ])
    ]
})
export class ClientModule{

}