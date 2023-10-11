import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
import { tap } from 'rxjs/internal/operators/tap';
import { Fact } from '../types/facts';
import { ResData } from '../types/resData';

@Injectable({
  providedIn: 'root',
})
export class ContentService {
  private dataKey = 'cachedData';
  private url = 'https://meowfacts.herokuapp.com/?count=35';

  data: Fact[] = [];

  constructor(private http: HttpClient) {}

  // fetchData(): Observable<any> {
  //   const cachedData = localStorage.getItem(this.dataKey);

  //   if (cachedData) {
  //     return new Observable((observer) => {
  //       observer.next(JSON.parse(cachedData));
  //       observer.complete();
  //     });
  //   } else {
  //     return this.http.get(this.url).pipe(
  //       tap(data => {
  //         localStorage.setItem('cachedData', JSON.stringify(data));
  //         return data;
  //       })
  //     );
  //   }
  // }

  fetchData(): Observable<any> {
    return this.http.get(this.url)
  }
}
