import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { PageNotFoundComponent } from "./components/page-not-found/page-not-found.component";
import { TimeConvertPipe } from "./pipes/time-converter/time-convert.pipe";
import { FooterComponent } from "./components/footer/footer.component";
import { AuthServiceService } from "./services/auth-service/auth-service.service";
import { DashboardServiceService } from "./services/dashboard-service/dashboard-service.service";
import { HttpClientModule, HTTP_INTERCEPTORS } from "@angular/common/http";
import { InterceptorService } from "./services/interceptor/interceptor.service";
import { ToastrModule } from "ngx-toastr";
import { AngularWebStorageModule } from "angular-web-storage";
import { ModalModule } from "ngx-bootstrap/modal";
import { RouterModule } from "@angular/router";
import { HideShowDirective } from "./directives/hide-show.directive";
import { InputFormatterDirective } from "./directives/input-formatter.directive";
import { InfiniteScrollModule } from "ngx-infinite-scroll";
import { NgxImageCompressService } from "ngx-image-compress";
import { NgxFileDropModule } from "ngx-file-drop";
import { UiSwitchModule } from "ngx-ui-switch";

@NgModule({
  declarations: [
    PageNotFoundComponent,
    TimeConvertPipe,
    FooterComponent,
    HideShowDirective,
    InputFormatterDirective,
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    AngularWebStorageModule,
    ToastrModule.forRoot({
      timeOut: 3000,
      positionClass: "toast-bottom-right",
    }),
    ModalModule.forRoot(),
    RouterModule,
    InfiniteScrollModule,
    NgxFileDropModule,
    UiSwitchModule,
  ],
  exports: [
    FooterComponent,
    PageNotFoundComponent,
    HideShowDirective,
    InfiniteScrollModule,
    InputFormatterDirective,
    NgxFileDropModule,
    UiSwitchModule,
  ],
  providers: [
    AuthServiceService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: InterceptorService,
      multi: true,
    },
    DashboardServiceService,
    NgxImageCompressService,
  ],
})
export class SharedModule {}
