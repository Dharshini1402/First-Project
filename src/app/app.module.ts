import { BrowserModule } from "@angular/platform-browser";
import { NgModule, Component } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";
import { AppComponent } from "./app.component";
import { NavComponent } from "./nav/nav.component";
import { HomeComponent } from "./home/home.component";
import { ProductComponent } from "./product/product.component";
import { DummyComponent } from "./dummy/dummy.component";
import { RouterModule, Router, Routes } from "@angular/router";
import { ProductdetailComponent } from "./productdetail/productdetail.component";
import { SignupComponent } from "./signup/signup.component";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { LoginComponent } from "./login/login.component";
import { PIPEPipe } from "./newpipe/pipe.pipe";
import { AddcartComponent } from "./addcart/addcart.component";
import { CanActivateGuard } from "./Guard/can-activate.guard";

const appRoutes: Routes = [
  { path: "", component: HomeComponent, pathMatch: "full" },
  { path: "product", component: ProductComponent },
  { path: "pricing", component: DummyComponent },
  {
    path: "addcart",
    component: AddcartComponent,
    canActivate: [CanActivateGuard]
  },
  { path: "signup", component: LoginComponent },
  { path: "login", component: SignupComponent },
  { path: "product/:name", component: ProductdetailComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    HomeComponent,
    ProductComponent,
    DummyComponent,
    ProductdetailComponent,
    SignupComponent,
    LoginComponent,
    PIPEPipe,
    AddcartComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(appRoutes),
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
