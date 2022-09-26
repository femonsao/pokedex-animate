import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MenuService {
  private apiUrl: string = 'https://pokeapi.co/api/v2/';

  constructor(private http: HttpClient ) { }

  public getImageLogo(){
    this.http.get(`${this.apiUrl}/pokemon/1`)
  }
}
