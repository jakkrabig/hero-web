import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class HeroService {

  constructor(private http: HttpClient) { }

  getHero(name: string) {
    return this.http.get('http://localhost:8888/api/v1/hero/search/' + name, {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    });
  }

  getDetail(id: string) {
    console.log(id);

    return this.http.get('http://localhost:8888/api/v1/hero/detail/' + id, {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    });
  }
}
