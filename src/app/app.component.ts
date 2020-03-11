import { Component } from "@angular/core";

@Component({
  selector: "my-app",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  name = "Angular";
  srcUrl: string = "http://127.0.0.1:8000/search.html?q=gmail";

  isShowDiv = false;
   
  toggleDisplayDiv() {
    this.isShowDiv = !this.isShowDiv;
  }
}
