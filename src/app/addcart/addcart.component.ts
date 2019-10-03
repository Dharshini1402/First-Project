import { Component, OnInit } from "@angular/core";
import { DataServiceService } from "../service/data-service.service";
@Component({
  selector: "app-addcart",
  templateUrl: "./addcart.component.html",
  styleUrls: ["./addcart.component.css"]
})
export class AddcartComponent implements OnInit {
  cart;
  constructor(private dataservice: DataServiceService) {
    this.cart = this.dataservice.cart;
  }

  ngOnInit() {}
}
