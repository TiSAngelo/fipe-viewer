import{HttpClient} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CrudService {
  constructor(private http: HttpClient) { }
  public getFipe():Observable<any> {
    return this.http.get('https://app.fakejson.com/q/JFCzwfAS?token=70XHs4TYKXRqcv1sZRpHFQ');
  }
  
}
