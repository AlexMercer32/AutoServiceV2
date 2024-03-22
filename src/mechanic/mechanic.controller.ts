import {MechanicService} from "./mechanic.service";
import {
    BadRequestException,
    Body,
    Controller,
    Delete,
    Get,
    Param,
    Post,
    Put,
    Query,
} from "@nestjs/common";
import {CreateMechanicDto} from "./dto/create.mechanic.dto";
import {UpdateMechanicDto} from "./dto/update.mechanic.dto";
import {Mechanic} from "../schemas/mechanic.schema";

@Controller('mechanic')
export class MechanicController{

    constructor(private mechanicService: MechanicService) {
    }
    @Get()
    getAllMechanics(): Promise<Mechanic[]>{
        return this.mechanicService.getAllMechanics();
    }
    @Get(':search')
    getOneMechanic(
        @Query('id') id:string,
        @Query('free') free: boolean) 
        :Promise<Mechanic>{
            if(id){
                return this.mechanicService.getByIdMechanics(id);
            }
            else if(free){
                return this.mechanicService.getFreeMechanics(free);
            }
            throw new BadRequestException('Wrong search parameters');
    }
    @Post()
    createMechanic(@Body() createMechanicDto: CreateMechanicDto) :Promise<Mechanic>{
        return this.mechanicService.createMechanic(createMechanicDto);
    }
    @Delete(':id')
    removeMechanic(@Param('id') id:string) :Promise<Mechanic>{
        return this.mechanicService.removeMechanic(id);
    }
    @Put(':id')
    update(@Body() updateMechanicDto : UpdateMechanicDto , @Param('id') id: string):Promise<Mechanic>{
        return this.mechanicService.updateMechanic(id, updateMechanicDto);
    }
}