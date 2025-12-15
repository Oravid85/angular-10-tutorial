import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  allownewServer = false
  servreCreationStatus = 'No server was created!'
  serverName=""

  constructor() { 
    setTimeout(() => {
     this.allownewServer = true; 
    } , 2000);
  }

  ngOnInit() {
  }



onCreateSever() {
  this.servreCreationStatus = 'Server was created!'
}

onUpdateServerName(event: any) {
  this.serverName = (<HTMLInputElement>event.target).value;
}

}