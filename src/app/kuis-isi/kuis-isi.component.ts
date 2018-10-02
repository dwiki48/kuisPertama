import { Component, OnInit } from '@angular/core';
import { Isi } from '../kuis-isi/isi';

@Component({
  selector: 'app-kuis-isi',
  templateUrl: './kuis-isi.component.html',
  styleUrls: ['./kuis-isi.component.css']
})
export class KuisIsiComponent implements OnInit {
  arrayMahasiswa:Isi[] = [];
  nim = '';
  nama = '';
  kelas = '';
  mahasiswa;

  constructor() { }

  ngOnInit() {
  }

  tambahMahasiswanya(){
    this.mahasiswa = new Isi(this.nim,this.nama,this.kelas);
    this.arrayMahasiswa.push(this.mahasiswa);
    this.nim = '';
    this.nama = '';
    this.kelas = ''; 
  }

}
