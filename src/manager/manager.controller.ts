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

@Controller('manager')
export class ManagerController {
    constructor(private managerService: ManagerService) {
    }
    @Get()
    getAllManagers() :Promise<Manager[]>{
        return this.managerService.getAllManagers();
    }

    @Get(':id')
    getOneManager(@Param('id') id: string):Promise<Manager>  {
        return this.managerService.getByIdManager(id);
    }
    @Post()
    createManager(@Body() createManagerDto: CreateManagerDto) :Promise<Manager> {
        return this.managerService.createManager(createManagerDto);
    }
    @Delete(':id')
    removeManager(@Param('id') id : string) :Promise<Manager> {
          return this.managerService.removeManager(id);
    }
    @Put(':id')
    updateManager(@Body() updateManagerDto: UpdateManagerDto, @Param('id') id : string):Promise<Manager>{
         return this.managerService.updateManager(id , updateManagerDto);
    }
}