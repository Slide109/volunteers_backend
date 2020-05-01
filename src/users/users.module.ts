import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";
import { UsersService } from "./users.service";
import { UsersResolver } from "./users.resolver";
import { UserSchema } from "./schema/user.schema";

@Module({
  imports: [MongooseModule.forFeature([{ name: "User", schema: UserSchema }])],
  exports: [UsersService],
  providers: [UsersService, UsersResolver]
})
export class UsersModule {}
