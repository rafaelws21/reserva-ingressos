import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { take } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ReservaIngressoService {

  private token = '#ASDFGW#ERWQERTRYT#%$%$@#$%==';

  constructor(
    private httpClient: HttpClient,
  ) { }
  
  enviarIngresso<T>(data: any): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'Authorization': this.token
      })
    };
    return  this.httpClient.post<T>(
      'http://localhost/reserva', 
      data,
      httpOptions
    ).pipe(take(1));
  }

}
