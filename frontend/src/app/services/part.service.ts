import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http'
import { lastValueFrom } from 'rxjs';
import { Part } from '../models/Part';

@Injectable({
  providedIn: 'root'
})
export class PartService {
  private baseUrl = 'http://localhost:5000/api/part';
  constructor(private http: HttpClient) {}

  getParts() {
    return lastValueFrom(this.http.get<Part[]>(this.baseUrl));
  }

  savePart(part: Part) {
    return lastValueFrom(this.http.post<Part>(this.baseUrl, part));
  }

  deletePart(id: number) {
    return lastValueFrom(this.http.delete(`${this.baseUrl}/${id}`));
  }

  increasePartAmount(id: number, amount: number) {
    return lastValueFrom(this.http.put(`${this.baseUrl}/${id}`,{},{
      params: {
        amount: amount
      }
    }));
  }
}
