import { Component } from '@angular/core';
import { Contact } from './contact';
import { ContactService } from './contact.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app11';

  contact:Contact = new Contact();

  contacts:Contact[]=[];
  constructor(private contactService:ContactService) { }
  msg:string="";


  saveContact(){
    this.contactService.createContact(this.contact)
    .subscribe(response => {
      this.contacts=response; 
  })
}
}
