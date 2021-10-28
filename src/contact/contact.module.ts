import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ContactController } from './contact.controller';
import { ContactService } from './contact.service';
import { Contact } from './model/contact';

@Module({
    imports: [
        TypeOrmModule.forFeature([Contact])
  ],
    controllers: [ContactController],
    providers: [ContactService],
  })
export class ContactModule {}
