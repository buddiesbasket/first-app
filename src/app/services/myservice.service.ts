import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IUser } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class MyserviceService {

  constructor(private httpClient:HttpClient) { }

  public getUserData():Observable<IUser[]>{
    let dataURL:string = 'https://2.api.fy23ey01.careers.ifelsecloud.com/';
    return this.httpClient.get<IUser[]>(dataURL);
  }
}
