import { Injectable } from "@angular/core";
import { AnotherList } from "./dataservice";
import { HttpClient } from "@angular/common/http";
import { tap } from "rxjs/operators";
@Injectable({
  providedIn: "root"
})
export class DataServiceService {
  constructor(private http: HttpClient) {}
  cart = [];
  isAuth = false;
  register(arg) {
    const url = "http://localhost:3000/posts";
    return this.http.post<any>(url, arg).pipe(tap(x => (this.isAuth = true)));
  }
}
