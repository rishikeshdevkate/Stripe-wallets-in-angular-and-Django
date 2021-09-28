import { Directive, ElementRef, Renderer2 } from "@angular/core";

@Directive({
  selector: "[passwordHideShow]"
})
export class HideShowDirective {
  private _shown = false;

  constructor(private renderer: Renderer2, private el: ElementRef) {
    this.setup();
  }

  toggle(label: HTMLElement) {
    this._shown = !this._shown;
    if (this._shown) {
      this.el.nativeElement.setAttribute("type", "text");
      label.innerHTML = "HIDE";
    } else {
      this.el.nativeElement.setAttribute("type", "password");
      label.innerHTML = "SHOW";
    }
  }
  setup() {
    const parent = this.el.nativeElement.parentNode;
    const label = document.createElement("a");
    label.innerHTML = `SHOW`;
    label.style.cursor = `pointer`;
    label.style.fontSize = `12px`;
    label.style.marginTop = `-26px`;
    label.style.color = `#333333`;
    label.style.fontWeight = `500px`;
    label.style.lineHeight = `130%`;
    label.style.position = "relative";
    label.className = "hide-show-pass";

    label.addEventListener("click", event => {
      this.toggle(label);
    });
    parent.appendChild(label);
  }
}
