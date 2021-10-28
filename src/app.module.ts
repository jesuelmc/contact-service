import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ContactController } from './contact/contact.controller';
import { ContactService } from './contact/contact.service';
import { ContactModule } from './contact/contact.module';
import { Contact } from './contact/model/contact';

@Module({
  imports: [
    TypeOrmModule.forRoot({
    type: 'mysql',
    host: 'localhost',
    port: 3306,
    username: 'root',
    password: '',
    database: 'contact',
    entities: [Contact],
    synchronize: true,
  }),
    ContactModule
],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
