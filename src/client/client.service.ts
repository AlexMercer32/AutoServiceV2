import {Injectable} from "@nestjs/common";
import {InjectModel} from "@nestjs/mongoose";
import {Model} from "mongoose";
import {CreateClientDto} from "./dto/create.client.dto";
import {UpdateClientDto} from "./dto/update.client.dto";
import {Client, ClientDocument} from "../schemas/client.schema";

@Injectable()
export class ClientService{
    constructor(@InjectModel(Client.name) private clientModel:Model<ClientDocument>) {

    }
    async getAllClients():Promise<Client[]>{
        return this.clientModel.find().exec();
    }
    async getByIdClient(id:string):Promise<Client>{
        return this.clientModel.findById(id);
    }
    async createClient(clientDto:CreateClientDto):Promise<Client>{
        const newClient = new this.clientModel(clientDto);
       return newClient.save();
    }
    async removeClient(id:string):Promise<Client>{
        return this.clientModel.findByIdAndDelete(id);
    }
    async updateClient(id:string, clientDto:UpdateClientDto):Promise<Client>{
        return this.clientModel.findByIdAndUpdate(id, clientDto,{new:true});
    }
}