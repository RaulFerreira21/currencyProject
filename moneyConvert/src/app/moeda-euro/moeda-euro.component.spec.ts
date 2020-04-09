import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MoedaEuroComponent } from './moeda-euro.component';

describe('MoedaEuroComponent', () => {
  let component: MoedaEuroComponent;
  let fixture: ComponentFixture<MoedaEuroComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MoedaEuroComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MoedaEuroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
