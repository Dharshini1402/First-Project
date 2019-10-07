import { Injectable } from "@angular/core";
import {
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  UrlTree,
  Router,
  CanActivate
} from "@angular/router";
import { Observable } from "rxjs";
import { DataServiceService } from "../service/data-service.service";
@Injectable({
  providedIn: "root"
})
export class CanActivateGuard implements CanActivate {
  constructor(private service: DataServiceService, private route: Router) {}
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean {
    if (!this.service.isAuth) {
      this.route.navigate(["/signup"]);
      return;
    }
    return this.service.isAuth;
  }
}
