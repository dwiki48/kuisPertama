import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tugas3',
  templateUrl: './tugas3.component.html',
  // styleUrls: ['./tugas3.component.css']
  styles:[`
        .angka {
            color:  white;
        }
    `]
})
export class Tugas3Component implements OnInit {
  allowNewServer = false;
  serverNama = '';
  log = [];
  serverCreated = false;

  constructor() { 
    
  }

  ngOnInit() {
  }

  onCreationStatus() {
    if (this.allowNewServer == false) {
      this.serverNama = "POLITEKNIK NEGERI MALANG"; 
      this.allowNewServer = true; 
      this.serverCreated = true;

    } else{
      this.allowNewServer = false;
      this.serverNama ='';
 
    }
    this.array();
  }

  array(){
    this.log.push(this.log.length+1);
  }

  onUpdateServerNama(event: Event) {
    this.serverNama = (<HTMLInputElement>event.target).value;
  }

}
