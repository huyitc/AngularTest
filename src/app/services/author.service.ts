import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Author } from '../models/author/author.module';

const apiUrlGet = 'https://localhost:44334/api/Authors';
@Injectable({
  providedIn: 'root'
})
export class AuthorService {

  constructor(private http: HttpClient) {   }
  //phuong thuc getAll
    getList():Observable<Author[]>{
        return this.http.get<Author[]>(apiUrlGet).pipe();
    }

    Add(data:Author[]){
        return this.http.post<Author[]>('https://localhost:44334/api/Authors/',data);
    }

    Update(id:number,data:Author[]){
        return this.http.put<Author[]>('https://localhost:44334/api/Authors/'+id,data);
    }

    Delete(id:number): Observable<Author[]>{
      return this.http.delete<Author[]>('https://localhost:44334/api/Authors/'+id);
  }
}
