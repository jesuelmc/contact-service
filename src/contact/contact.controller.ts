import { Body, Controller, Post } from '@nestjs/common';
import { ContactService } from './contact.service';
import { CreateContactDto } from './dto/create-contact.dto';
import { Contact } from './model/contact';

@Controller('contact')
export class ContactController {

    constructor(
        private contactService:ContactService
    ){}

    @Post()
    addContact(@Body() createContactDto:CreateContactDto ) :Promise<Contact>{
      return this.contactService.save(createContactDto);
    }
}
