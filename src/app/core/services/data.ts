import { inject, Injectable } from '@angular/core';
import { AuthService } from './auth';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { IUserContext } from '../interfaces/user';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private http = inject(HttpClient);
  private authService = inject(AuthService);

  getUserContext() {
    return this.http.get<IUserContext>(environment.API_URL + 'user/context');
  }
  
}
