import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  name='all';
  userName = '';
  display = false;
  btnClicks = [];
  

  emptyUserName() {
    this.userName = '';
  }
  displayDetails() {
    
    this.display = !this.display;
    //this.btnClicks.push(this.btnClicks.length + 1);
    this.btnClicks.push(new Date());
  }
}
