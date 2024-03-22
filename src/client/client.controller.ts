import {
    Body,
    Controller,
    Delete,
    Get,
    Param,
    Post,
    Put,
} from '@nestjs/common';
import {CreateClientDto} from "./dto/create.client.dto";
import {UpdateClientDto} from "./dto/update.client.dto";
import {ClientService} from "./client.service";
import {Client} from "../schemas/client.schema";
import { IsMongoId } from 'class-validator';
@Controller('client')
export class ClientController {
    constructor(private clientService: ClientService) {
    }
    @Get()
    getAllClients() :Promise<Client[]>{
        return this.clientService.getAllClients();
    }

    @Get(':id')
    getOneClient(@Param('id') id: string) :Promise<Client>  {
        return this.clientService.getByIdClient(id);
    }
    @Post()
    createClient(@Body() createClientDto: CreateClientDto) :Promise<Client> {
        return this.clientService.createClient(createClientDto);
    }
    @Delete(':id')
    removeClient(@Param('id') id : string) :Promise<Client> {
          return this.clientService.removeClient(id);
    }
    @Put(':id')
    updateClient(@Body() updateClientDto: UpdateClientDto, @Param('id') id : string) :Promise<Client>{
         return this.clientService.updateClient(id , updateClientDto);
    }
}