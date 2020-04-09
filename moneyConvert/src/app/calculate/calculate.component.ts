import { Component, OnInit } from '@angular/core';
import { ConversionServiceService } from '../conversion-service.service';

@Component({
  selector: 'app-calculate',
  templateUrl: './calculate.component.html',
  styleUrls: ['./calculate.component.css']
})
export class CalculateComponent implements OnInit {

  valueMoney: number = 0;
  real: number = 0;
  constructor(private conversion: ConversionServiceService) { }

  ngOnInit(): void {
  }
  pegaValor(event) {
    this.real = event.target.value
    this.valueMoney = this.real * this.conversion.conversionValue
  }
  trocaValor(){
    this.valueMoney = this.real
    this.real = this.real * this.conversion.conversionValue;
  }
}
