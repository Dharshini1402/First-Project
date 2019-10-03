import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
@Component({
  selector: "app-signup",
  templateUrl: "./signup.component.html",
  styleUrls: ["./signup.component.css"]
})
export class SignupComponent implements OnInit {
  handleSubmit(arg) {
    console.log(arg);
  }
  handleInput(arg) {
    console.log(arg);
  }
  handleNav() {
    this.route.navigate(["/signup"]);
  }

  constructor(private route: Router) {}

  ngOnInit() {}
}
