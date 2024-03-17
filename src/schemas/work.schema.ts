import { Prop, Schema, SchemaFactory} from "@nestjs/mongoose";


export type WorkDocument = Work & Document;
@Schema()
export class Work{
   @Prop()
   pricePerWork: number;
   @Prop()
   hour: number;
   @Prop()
   kindOfWork: string;
   @Prop()
   carsInWork: number;
   @Prop()
   totalPrice: number;
}
export const workSchema = SchemaFactory.createForClass(Work);
