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
}
export const clientSchema = SchemaFactory.createForClass(Client);