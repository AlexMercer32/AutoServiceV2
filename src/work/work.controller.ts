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
} from '@nestjs/common';
import {CreateWorkDto} from "./dto/create.work.dto";
import {UpdateWorkDto} from "./dto/update.work.dto";
import {WorkService} from "./work.service";
import {Work} from "../schemas/work.schema";
import { IsMongoId } from 'class-validator';
@Controller('work')
export class WorkController {
    constructor(private workService: WorkService) {
    }
    @Get()
    getAllWork() :Promise<Work[]>{
        return this.workService.getAllWork();
    }

    @Get(':search')
    getWork(
        @Query('id') id: string,
        @Query('price') totalPrice: number
        ):Promise<Work>  {
            if(id){
                return this.workService.getByIdWork(id);
            }
            if(totalPrice){
                return this.workService.getAllPrice(totalPrice);
            }
            throw new BadRequestException('Wrong search parameters');
    }
    @Post()
    createWork(@Body() createWorkDto: CreateWorkDto) :Promise<Work> {
        return this.workService.createWork(createWorkDto);
    }
    @Delete(':id')
    removeWork(@Param('id') id : string) :Promise<Work> {
          return this.workService.removeWork(id);
    }
    @Put(':id')
    updateWork(@Body() updateWorkDto: UpdateWorkDto, @Param('id') id : string):Promise<Work>{
         return this.workService.updateWork(id , updateWorkDto);
    }
    @Get(':price')
    getAllPrice(@Body() totalPrice : number): Promise<Work>{
        return this.workService.getAllPrice(totalPrice);
    }
}