import {Prop, Schema, SchemaFactory} from "@nestjs/mongoose";
import {Document} from 'mongoose'
import { CarEngineEnum } from "src/enums/car.enum";
export type CarDocument = Car & Document;
@Schema()
export class Car {
    @Prop()
    mark: string

    @Prop()
    model: string

    @Prop({type: Date,})

    year: Date;
    @Prop({length: 17
    })
    VIN: string
    @Prop()
    engine: CarEngineEnum;
    @Prop()
    engineCapacity: number;
    @Prop()
    mileage: number;
    @Prop()
    enginePower: number;
    @Prop()
    weight: number;
    @Prop()
    color: string;
    @Prop()
    owner: string;
    @Prop({
        done: false
    })
    carStatus: boolean;
}
export const carSchema = SchemaFactory.createForClass(Car);