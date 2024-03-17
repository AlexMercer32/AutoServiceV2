import {Prop, Schema, SchemaFactory} from "@nestjs/mongoose";
import { MechanicCategoryEnum } from "src/enums/mechanic.enum";

export type MechanicDocument = Mechanic & Document;
@Schema()
export class Mechanic{
    @Prop()
    firstName:string;
    @Prop()
    lastName:string;
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
    bestWork:string;
    @Prop({
        enum: MechanicCategoryEnum
    })
    category: MechanicCategoryEnum
    @Prop()
    phoneNumber: string;
    @Prop({
        occupate: false,
        ready: true,
        default: true
    })
    free: boolean;
}
export const mechanicSchema = SchemaFactory.createForClass(Mechanic);