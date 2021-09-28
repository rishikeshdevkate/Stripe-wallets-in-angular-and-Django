import { Injectable } from "@angular/core";
import { Observable, BehaviorSubject } from "rxjs";

@Injectable({
  providedIn: "root"
})
export class RouteServiceService {
  public routeChanged$: BehaviorSubject<any> = new BehaviorSubject("/home");

  getChangedRoute(): Observable<any> {
    return this.routeChanged$;
  }

  changeRoute(url: any) {
    this.routeChanged$.next(url);
  }
}
