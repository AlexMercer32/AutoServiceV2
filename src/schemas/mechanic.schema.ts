import {Prop, Schema, SchemaFactory} from "@nestjs/mongoose";
import { MechanicCategoryEnum } from "src/enums/mechanic.enum";

export type MechanicDocument = Mechanic & Document;
@Schema()
export class Mechanic{
    @Prop()
    firstname:string;
    @Prop()
    lastname:string;
    @Prop()
    experience: string;
    @Prop({
        max:70,
        min:18,
    })
    age:number;
    @Prop()
    quality: string;
    @Prop()
    pricePerHour: number;
    @Prop()
    bestWork:string;
    @Prop({
        enum: MechanicCategoryEnum
    })
    category: MechanicCategoryEnum
    @Prop()
    phoneNumber: number;
    @Prop()
    free: true;
    @Prop()
    hour: number;
    @Prop()
    pricePerWork: number;
}
export const mechanicSchema = SchemaFactory.createForClass(Mechanic);