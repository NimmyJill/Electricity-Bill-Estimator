import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class ConsumersService {
  private _deleteConsumerUrl = 'http://localhost:3113/api/deleteConsumer';

  constructor(private http: HttpClient) {}
  getConsumers() {
    return this.http.get('http://localhost:3113/api/admin');
  }

  newConsumer(item) {
    return this.http
      .post('http://localhost:3113/api/insert', { consumer: item })
      .subscribe((data) => {
        console.log(data);
      });
  }

  updateConsumer(item) {
    return this.http
      .post('http://localhost:3113/api/updateConsumer', { consumer: item })
      .subscribe((data) => {
        console.log(data);
      });
  }
  singleConsumer(id) {
    return this.http.post('http://localhost:3113/api/singleConsumer', {
      id: id,
    });
  }

  deleteConsumer(id) {
    console.log(id);
    return this.http
      .post(this._deleteConsumerUrl, { id: id })
      .subscribe((status) => {
        if (status == 'Deleted') {
          alert('Consumer Deleted');
        } else {
          alert('File not found');
        }
      });
  }
  fetchDetail(data) {
    console.log('Service');
    console.log(data);
    return this.http.post('http://localhost:3113/api/bill', { data: data });
  }
}
