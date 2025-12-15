import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  allownewServer = false
  servreCreationStatus = 'No server was created!'
  serverName="Testserver"

  allowNewuser = false;
  username = ""

  constructor() { 
    setTimeout(() => {
     this.allownewServer = true; 
    } , 2000);
  }

  ngOnInit() {
  }



onCreateSever() {
  this.servreCreationStatus = 'Server was created! Name is ' + this.serverName;
}

onUpdateServerName(event: any) {
  this.serverName = (<HTMLInputElement>event.target).value;
}

onUserNAmeUpdate(event: any){
  this.username = (<HTMLInputElement>event.target).value;
  this.allowNewuser = true;
}

onAdduserButton(){
  this.username = "";
  this.allowNewuser = false;
}

}