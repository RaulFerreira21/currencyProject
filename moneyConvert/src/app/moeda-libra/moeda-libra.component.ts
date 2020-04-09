import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-moeda-libra',
  templateUrl: './moeda-libra.component.html',
  styleUrls: ['./moeda-libra.component.css']
})
export class MoedaLibraComponent implements OnInit {

  admins: number = 0;
  real
  constructor() { }

  ngOnInit(): void {
  }

  pegaValor(event) {
    this.real = event.target.value
    this.admins = this.real * 5.43
  }

}