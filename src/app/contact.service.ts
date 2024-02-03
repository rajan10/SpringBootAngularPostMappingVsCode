import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Contact } from './contact';


//This code is an Angular service (ContactService) that uses the Angular HttpClient module to interact with a RESTful API.
//@Injectable: Decorator that allows the service to be injected into other components or services.
@Injectable({
  providedIn: 'root'
})
export class ContactService {
//below uri is of Springboot application
  private restUrl="http://localhost:8080/contact";
//private in the below means that httpClient object can only be used within this class ie contact.service
  constructor(private httpClient:HttpClient) { }

  //observable is like a container which will store response from server
  //Represents a stream of data over time, often used to handle asynchronous operations.
  //The method returns an observable, indicating that it's an asynchronous operation. The type <Contact[]> specifies the expected response type from the server.
 //It's a way of saying, "I expect the data coming from this Observable to be an array of Contacts."
 // It means, after you make the POST request, you can subscribe to the result, and when the server responds, you'll get a string.
  createContact(contact :Contact):Observable<Contact[]>
  {
 //<Contact[]>: This is a TypeScript syntax for specifying the type of data that the post method expects in the response. In this case, it's saying that the expected response type is an array of Contact objects.
 // I expect the server to respond with JSON data, specifically an array of Contact objects   
 //contactList.add(contact1);
// contactList.add(contact2);
// contactList.add(contact3);

// // Converting the list to an array
// Contact[] contactArray = contactList.toArray(new Contact[0]);
//below line is sending HTTP POST request with the url 'restUrl' and the 'contact' object (1 record of Contact) as the body of the request.
//And at the same time it expects the server (Spring boot Server) to respond with a JSON-formatted arry of 'Contact' objects
// post/ add one 1 Contact object by hitting the REST API endpoint /contact and return the response as a JSON array of Contact objects.
 return this.httpClient.post<Contact[]>(this.restUrl,contact,{responseType:"json"});
  }
}
