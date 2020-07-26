import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})


export class ConsumersService {
  private _deleteConsumerUrl='http://localhost:3113/deleteConsumer';

  constructor( private http:HttpClient) { }
getConsumers(){
  return this.http.get("http://localhost:3113/admin");
}

newConsumer(item){
  return this.http.post("http://localhost:3113/insert",{"consumer":item})
  .subscribe(data =>{ console.log(data)})
}

updateConsumer(item){
  return this.http.post("http://localhost:3113/update",{"consumer":item})
  .subscribe(data =>{ console.log(data)})
}
singleConsumer(id){
  
  return this.http.post("http://localhost:3113/singleConsumer",{"id":id})

}

deleteConsumer(id){
  console.log(id);
  return this.http.post(this._deleteConsumerUrl,{"id":id}).subscribe((status)=>{
    console.log(status);
    
  })


}
fetchDetail(data){
  console.log("Service");  
  console.log(data);
  return this.http.post("http://localhost:3113/bill", {"data":data})
}
  
}
