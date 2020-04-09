import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MoedaLibraComponent } from './moeda-libra.component';

describe('MoedaLibraComponent', () => {
  let component: MoedaLibraComponent;
  let fixture: ComponentFixture<MoedaLibraComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MoedaLibraComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MoedaLibraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
