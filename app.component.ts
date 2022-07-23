import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styles: [
    'app-rating { color: orange; }'
  ]
})
export class AppComponent {
  onClickMe($event: any) {
    console.log("Clicked", $event)
  }
  // Make the button unclickable
  // isValid: boolean = false;
  title: string = 'My First Angular App!';
  imageUrl: string = "http://www.w3schools.com/html/pic_mountain.jpg";
}
