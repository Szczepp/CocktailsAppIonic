import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  constructor(
    private httpClient: HttpClient,

  ) { }
  apiURL: string = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=';

  search(cocktail: string){
    return this.httpClient.get<any>(`${this.apiURL + cocktail}`)
        .pipe(map(res => {
          console.log(res);
            return res;
        }));
  }

}
