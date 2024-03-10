import { Prop, Schema, SchemaFactory} from "@nestjs/mongoose";


export type ManagerDocument = Manager & Document;
@Schema()
export class Manager{
    @Prop({
        unique: true
    })
    firstName: string;
    @Prop({
        unique: true
    })
    lastName: string;
    @Prop({
        min: 200,
        max: 400
    })
    pricePerHour: number;
    @Prop({
        min: 18,
        max: 70
    })
    age: number;
}
export const managerSchema = SchemaFactory.createForClass(Manager);
