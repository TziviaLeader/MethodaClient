import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
// import { first } from 'rxjs/operator';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  env = environment;
  constructor(public serHttp: HttpClient, private router: Router) { }

  getAllStatuses():Observable<any>{
    return this.serHttp.get( `${this.env.BASE_URL}/status`);
  }

  getAllTransition():Observable<any>{
    return this.serHttp.get( `${this.env.BASE_URL}/transition`);
  }

  postStatus(status):Observable<any>
  {
    debugger
    return this.serHttp.post( `${this.env.BASE_URL}/status`,status);
  }

  postTransition(transition):Observable<any>
  {
    
     return this.serHttp.post( `${this.env.BASE_URL}/transition`,transition);
  }

  deleteStatus(name):Observable<any>
  {
      return this.serHttp.delete( `${this.env.BASE_URL}/status/${name}`);
  }

  deleteTransition(name):Observable<any>
  {
      return this.serHttp.delete( `${this.env.BASE_URL}/transition/${name}`);
  }

  resetStatus():Observable<any>
{
  return this.serHttp.delete( `${this.env.BASE_URL}/status`);

}
resetTransition():Observable<any>
{debugger
  return this.serHttp.delete( `${this.env.BASE_URL}/transition`);
}

}
