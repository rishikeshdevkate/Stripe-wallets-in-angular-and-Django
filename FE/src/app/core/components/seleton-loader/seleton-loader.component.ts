import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "app-seleton-loader",
  template: `
    <div [ngStyle]="getMyStyles()" class="skelt-load loader"></div>
  `,
  styleUrls: ["./seleton-loader.component.css"]
})
export class SeletonLoaderComponent implements OnInit {
  @Input() Cwidth;
  @Input() CwidthPer;
  @Input() Cheight;
  @Input() circle: boolean;

  constructor() {}

  ngOnInit() {}

  getMyStyles() {
    const myStyles = {
      "width.px": this.Cwidth
        ? this.Cwidth
        : this.CwidthPer
        ? this.CwidthPer
        : "",
      "height.px": this.Cheight ? this.Cheight : "",
      "border-radius": this.circle ? "50%" : ""
    };
    return myStyles;
  }
}
