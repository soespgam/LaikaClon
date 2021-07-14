import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ServiceHomeService {

  constructor(private http:HttpClient) { }

  getProduct():Observable<any>{
    return this.http.get(environment.endpoints.producto,{ headers: new HttpHeaders({'Access-Control-Allow-Origin':'*'})});
  }
}
