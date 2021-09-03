import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
// import { ItemsController } from './items/items.controller';
// import { ItemsService } from './items/items.service';
import { ItemsModule } from './items/items.module';
import { MongooseModule } from '@nestjs/mongoose';
import config from './config/keys'; // no need { } if exported default

@Module({
  imports: [ItemsModule, MongooseModule.forRoot(config.mongoURI)], // inside forRoot, put URI of database
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
