import { Injectable } from "@angular/core";
import { AnotherList } from "./dataservice";
@Injectable({
  providedIn: "root"
})
export class DataServiceService {
  cart = [];
  constructor() {}
}
