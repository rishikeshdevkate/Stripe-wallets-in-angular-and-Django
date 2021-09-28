import { Injectable } from "@angular/core";
import {
  Router,
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot
} from "@angular/router";
import { AuthServiceService } from "./auth-service.service";
@Injectable({
  providedIn: "root"
})
export class IsSignedInUserService implements CanActivate {
  constructor(
    private router: Router,
    private userAuthService: AuthServiceService
  ) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean {
    if (this.userAuthService.getToken()) {
      return true;
    } else {
      this.router.navigate(["/auth/login"]);
      return false;
    }
  }
}
