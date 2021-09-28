import { Injectable } from "@angular/core";
import { LocalStorageService } from "angular-web-storage";
import { HttpClient } from "@angular/common/http";
import { Constants } from "../../shared/constants/constants";

@Injectable({
  providedIn: "root"
})
export class AuthServiceService {
  constructor(private http: HttpClient, private storage: LocalStorageService) {}

  signup(signupObject: any) {
    return this.http.post(Constants.baseUrl + "/user/signup", signupObject);
  }

  login(loginObject: any) {
    return this.http.post(Constants.baseUrl + "/user/login", loginObject);
  }

  logout(obj: any) {
    return this.http.post(Constants.baseUrl + "/user/logout", obj);
  }

  forgetPassword(obj: any) {
    return this.http.post(
      Constants.baseUrl + "/user/forgotPasswordRequest",
      obj
    );
  }
  resetPassword(obj: any) {
    return this.http.put(
      Constants.baseUrl + "/user/confirmPasswordRequest",
      obj
    );
  }

  changePassword(data) {
    return this.http.patch(Constants.baseUrl + "/user/changePassword", data);
  }
  socialAppDetails() {
    return this.http.get(Constants.baseUrl + "/user/getApplicationDetail");
  }

  userDetail(obj: any) {
    return this.http.post(
      Constants.baseUrl + "/user/getUserProfileDetails",
      obj
    );
  }

  converToken(data: any) {
    return this.http.post(
      Constants.baseUrl + "/auth/oauth/convert-token",
      data
    );
  }

  removeUserDetails() {
    this.storage.remove("userDetail");
  }

  setToken(accessToken) {
    this.storage.set("accessToken", accessToken);
  }

  setRefreshToken(refreshToken) {
    this.storage.set("refreshToken", refreshToken);
  }

  getRefreshToken() {
    this.storage.get("refreshToken");
  }

  deleteToken() {
    this.storage.remove("accessToken");
    this.storage.remove("refreshToken");
  }

  getToken() {
    return this.storage.get("accessToken");
  }

  setUserId(id) {
    this.storage.set("userId", id);
  }

  deleteUserId() {
    this.storage.remove("userId");
  }

  getUserId() {
    return this.storage.get("userId");
  }
  clearStorage() {
    this.storage.clear();
  }

  setNextRoute(route: any = "/home") {
    this.storage.set("nextRoute", route ? route : "/home/banners");
  }

  getNextRoute() {
    return this.storage.get("nextRoute");
  }
}
