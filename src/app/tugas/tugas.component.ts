import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tugas',
  templateUrl: './tugas.component.html',
  styleUrls: ['./tugas.component.css']
})
export class TugasComponent implements OnInit {
  btnCheck = false;
  username = '';
  constructor() { }

  ngOnInit() {
  }
  checkUsername(){
    if (this.username==='') {
      return this.btnCheck = true;
    }
  }
  reset(){
    this.username='';
  }
  onUpdateServerName(event: Event) {
    this.username = (<HTMLInputElement>event.target).value;
  }
}
