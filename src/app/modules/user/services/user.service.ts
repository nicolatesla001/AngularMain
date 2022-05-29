import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {delay, Observable} from "rxjs";

import {IUser} from "../interfaces";
import {urls} from "../../../constans";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private httpClient: HttpClient) {

  }
  getAll():Observable<IUser[]>{
    return this.httpClient.get<IUser[]>(urls.users)
  }
  getById(id: string):Observable<IUser>{
    return this.httpClient.get<IUser>(`${urls.users}/${id}`).pipe(delay(2000))
  }
}
