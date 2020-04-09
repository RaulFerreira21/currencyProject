import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-moeda-euro',
  templateUrl: './moeda-euro.component.html',
  styleUrls: ['./moeda-euro.component.css']
})
export class MoedaEuroComponent implements OnInit {

  admins: number = 0;
  real
  constructor() { }

  ngOnInit(): void {
  }

  pegaValor(event) {
    this.real = event.target.value
    this.admins = this.real * 5.67
  }

}