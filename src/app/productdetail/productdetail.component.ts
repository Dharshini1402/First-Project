import { Component } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { AnotherList } from "./folder/anotherlist";
@Component({
  selector: "app-productdetail",
  templateUrl: "./productdetail.component.html",
  styleUrls: ["./productdetail.component.css"]
})
export class ProductdetailComponent {
  record: string;
  list: any;
  constructor(private route: ActivatedRoute, private folder: AnotherList) {
    const params = this.route.snapshot.params["name"];
    alert(params);
    //console.log(params);
    this.list = this.folder.list.find(el => el.heading == params);
  }
}
