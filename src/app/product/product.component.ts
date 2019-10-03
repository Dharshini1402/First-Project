import { Component } from "@angular/core";
import { data } from "./list";
import { Router } from "@angular/router";
import { DataServiceService } from "../service/data-service.service";
@Component({
  selector: "app-product",
  templateUrl: "./product.component.html",
  styleUrls: ["./product.component.css"]
})
export class ProductComponent {
  title = "cardtask";
  name = "Angular";
  record = data;
  constructor(private route: Router, private dataService: DataServiceService) {
    console.log(this.record);
    this.record;
  }
  handleNavigate(arg) {
    this.route.navigate(["/product", arg]);
  }
  ngOnInit() {}
  handleCart(arg) {
    this.dataService.cart.push(arg);
    alert(arg);
    console.log(arg);
  }
}
