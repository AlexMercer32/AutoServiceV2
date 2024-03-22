import { ArgumentMetadata, BadRequestException, Injectable, PipeTransform } from "@nestjs/common";
import mongoose from "mongoose";

@Injectable()
export class MongoObjectIdPipe implements PipeTransform<string, mongoose.Types.ObjectId> {
  transform(value: string, metadata: ArgumentMetadata): mongoose.Types.ObjectId {
    if (!mongoose.Types.ObjectId.isValid(value)) {
      throw new BadRequestException("Invalid ObjectId");
    }
    return new mongoose.Types.ObjectId(value);
  }
}
