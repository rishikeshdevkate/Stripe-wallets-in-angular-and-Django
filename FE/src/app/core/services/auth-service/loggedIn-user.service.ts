import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from "rxjs";
import { LocalStorageService } from "angular-web-storage";
@Injectable({
    providedIn: 'root'

})

export class LoggedInUserService{
    constructor(
        private storage: LocalStorageService,
      ) {}
    public profileObs$: BehaviorSubject<any> = new BehaviorSubject(
          this.storage.get("userDetails") || null
        );
      
        getProfileObs(): Observable<any> {
          return this.profileObs$;
        }
      
        setProfileObs(profile: any) {
          this.profileObs$.next(profile);
          this.storage.set("userDetails", profile);
        }
}