import { Injectable } from "@angular/core";
import { LocalStorageService } from "angular-web-storage";
import { HttpClient } from "@angular/common/http";
import { Constants } from "../../shared/constants/constants";

@Injectable({
  providedIn: "root"
})
export class DashboardServiceService {
  constructor(private http: HttpClient, private storage: LocalStorageService) {}

  payment(data) {
    console.log(
      "API cALL",
      this.http.post(Constants.baseUrl + "/payment", data)
    );
    return this.http.post(Constants.baseUrl + "/payment", data);
  }
}
