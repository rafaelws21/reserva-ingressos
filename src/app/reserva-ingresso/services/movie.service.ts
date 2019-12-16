import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { KEY_VIDEO_DB } from 'src/app/moviedb-config';
import { Observable } from 'rxjs';
import { take } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  private url = 'https://api.themoviedb.org/3/movie/upcoming?api_key=<<api_key>>&page=1';

  constructor(
    private httpClient: HttpClient,
  ) { }

  getMovieUpcoming<T>(): Observable<T> {
    return  this.httpClient.get<T>(`https://api.themoviedb.org/3/movie/upcoming?api_key=${KEY_VIDEO_DB}&page=1`).pipe(take(1));
  }

}
