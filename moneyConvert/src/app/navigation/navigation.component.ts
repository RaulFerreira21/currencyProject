import { Component, OnInit } from '@angular/core';
import { ConversionServiceService } from '../conversion-service.service';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {
  public conversionData
  entries: any
  moneys: any;
  rates: any;
  counter: number = 5;
  constructor(private conversion: ConversionServiceService) { }

  ngOnInit(): void {
    this.conversion.getData().subscribe((data) => {
      this.conversionData = new Object(data);
      this.entries = Object.entries(this.conversionData.rates);
      this.moneys = Object.keys(this.conversionData.rates);
      this.rates = Object.values(this.conversionData.rates);
      console.log(this.entries)
      console.log(this.moneys)
      console.log(this.rates)
    })
  }
  calcValue(event) {
    let result = event.target.value
    return this.conversion.conversionValue = result
    // console.log(event.target.value)
  }

}
