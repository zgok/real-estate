import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Iproperty } from '../property/Iproperty.interface';

@Injectable({
  providedIn: 'root'
})
export class HousingService {

  constructor(private http: HttpClient) { }

  getAllProperties(sellRent: number): Observable<Iproperty[]> {
    return this.http.get('data/properties.json').pipe(map(
      data => {
        const obj = JSON.parse(JSON.stringify(data));
        const propertiesArray: Array<Iproperty> = [];
        for (const id in obj) {
          if (obj.hasOwnProperty(id) && obj[id].SellRent === sellRent) {
            propertiesArray.push(obj[id]);
          }
        }
        return propertiesArray;
      }
    ));
  }
}
