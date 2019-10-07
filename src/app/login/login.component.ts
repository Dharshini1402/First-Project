import { Component, OnInit } from "@angular/core";
import {
  FormGroup,
  FormControl,
  MinLengthValidator,
  ValidatorFn
} from "@angular/forms";
import { FormBuilder, Validators } from "@angular/forms";
import { DataServiceService } from "../service/data-service.service";
@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"]
})
export class LoginComponent implements OnInit {
  myGroup: FormGroup;
  constructor(
    private formBuilder: FormBuilder,
    private service: DataServiceService
  ) {}

  ngOnInit() {
    /*this.myGroup = new FormGroup({
      name: new FormControl("name"),
      mail: new FormControl("")
    });*/
    this.myGroup = new FormGroup(
      {
        name: new FormControl("name"),
        mail: new FormControl(""),
        pass: this.formBuilder.control("password", [
          Validators.required,
          Validators.minLength(3)
        ]),
        confirm: this.formBuilder.control("conform", [
          Validators.required,
          Validators.minLength(3)
        ])
      },
      { validators: this.MustMatch() }
    );
    // { validators: this.MustMatch() };
  }
  handleSubmit(arg) {
    //console.log(this.myGroup);
    //console.log(this.myGroup.touched);
    //console.log(this.myGroup.invalid);
    // this.myGroup.reset();
    console.log(arg);
    this.service
      .register(arg)
      .subscribe(data => console.log(data), err => console.log(err));
  }
  handleLoad() {
    console.log(this.myGroup);
    //this.myGroup.patchValue({ mail: "priya@gmail.com" });
    //this.myGroup.patchValue({ name: "hello" });
    /* this.myGroup.setValue({
      name: "priya",
      mail: "priya@gmail.com",
      pass: "priya",
      confirm: "priya"
    });*/
  }
  /* forbiddenNameValidator(): ValidatorFn {
    return (formbuilder: FormGroup): { [key: string]: any } | null => {
      const pass = formbuilder.controls["pass"];
      const confirm = formbuilder.controls["cofirm"];
      return pass.value === confirm.value ? null : { mismatch: true };
    };*/

  MustMatch() {
    return (form: FormGroup) => {
      const pass = form.controls.pass.value;
      const confirm = form.controls.confirm.value;
      console.log(pass, confirm);
      return pass === confirm ? null : { mismatch: true };
    };
  }
}
