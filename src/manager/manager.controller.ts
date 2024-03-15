import {
    Body,
    Controller,
    Delete,
    Get,
    Param,
    Post,
    Put,
} from '@nestjs/common';
import {CreateManagerDto} from "./dto/create.manager.dto";
import {UpdateManagerDto} from "./dto/update.manager.dto";
import {ManagerService} from "./manager.service";
import {Manager} from "../schemas/manager.schema";
import { IsMongoId } from 'class-validator';
@Controller('manager')
export class ManagerController {
    constructor(private managerService: ManagerService) {
    }
    @Get()
    getAllManagers() :Promise<Manager[]>{
        return this.managerService.getAllManagers();
    }

    @Get(':id')
    @IsMongoId()
    getOneManager(@Param('id') id: string):Promise<Manager>  {
        return this.managerService.getByIdManager(id);
    }
    @Post()
    createManager(@Body() createManagerDto: CreateManagerDto) :Promise<Manager> {
        return this.managerService.createManager(createManagerDto);
    }
    @Delete(':id')
    @IsMongoId()
    removeManager(@Param('id') id : string) :Promise<Manager> {
          return this.managerService.removeManager(id);
    }
    @Put(':id')
    @IsMongoId()
    updateManager(@Body() updateManagerDto: UpdateManagerDto, @Param('id') id : string):Promise<Manager>{
         return this.managerService.updateManager(id , updateManagerDto);
    }
}