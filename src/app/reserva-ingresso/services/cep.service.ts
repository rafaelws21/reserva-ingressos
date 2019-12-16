import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { take } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CepService {

  constructor(
    private httpClient: HttpClient,
  ) { }

  getByCep<T>(cep: string): Observable<T> {
    return  this.httpClient.get<T>(`https://viacep.com.br/ws/${cep}/json/`).pipe(take(1));
  }

}
