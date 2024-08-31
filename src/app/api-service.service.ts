import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {environment} from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ApiServiceService {
  constructor(private http: HttpClient) {
  }

  addUser(userData: any): Observable<any> {
    return this.http.post(`${environment.apiUrl}/users`, userData);
  }
}
