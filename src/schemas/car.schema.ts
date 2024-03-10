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

    @Prop(new Date())
    year: number

    @Prop({length: 17,
        unique: true,
    isRequired: true
    })
    VIN: string

    @Prop()
    engine: CarEngineEnum;
    @Prop({
        maxlength: 4,
        minlength: 2,
        isRequired: true
    })
    engineCapacity: number;
    @Prop({
        minlength: 1,
        maxlength: 6,
        isRequired: true
    })
    mileage: number;
    @Prop({
        maxlength: 3,
        minlength: 2,
        isRequired: true
    })
    enginePower: number;
    @Prop({
        minlength: 3,
        maxlength: 4,
        isRequired: true
    })
    weight: number;
    @Prop()
    color: string;
    @Prop()
    owner: string;
    @Prop({
        done: false
    })
    carStatus: boolean;

    @Prop()
    kindOfWork:string
}
export const carSchema = SchemaFactory.createForClass(Car);