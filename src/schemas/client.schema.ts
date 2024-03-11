import { Prop, Schema, SchemaFactory} from "@nestjs/mongoose";


export type ClientDocument = Client & Document;
@Schema()
export class Client{
    @Prop({
        unique: true
    })
    firstName: string;
    @Prop({
        unique: true
    })
    lastName: string;
    @Prop()
    phoneNumber: string;
    @Prop()
    infoAboutCar: string;
    @Prop()
    infoAboutMechanic: string;
    @Prop()
    moneyToPay: number;
    @Prop()
    infoPay: number;
}
export const clientSchema = SchemaFactory.createForClass(Client);