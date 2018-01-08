import { Component, OnInit } from '@angular/core';
import { User } from './models/user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';
  currentuser;
  ngOnInit(){
    //sessionStorage.removeItem('userid');
    var currentuser = JSON.parse(sessionStorage.getItem('userid'));
    if(this.currentuser != null)
    console.log(currentuser.id);
  }
}
