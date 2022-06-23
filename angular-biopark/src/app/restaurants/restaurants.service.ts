import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
  
export class RestaurantsService {
  
  constructor(private httpClient: HttpClient) { }

  restaurants(): Observable<any> {
    return this.httpClient.get('${environment.apiUrl}/restaurants')
  }
  
}
