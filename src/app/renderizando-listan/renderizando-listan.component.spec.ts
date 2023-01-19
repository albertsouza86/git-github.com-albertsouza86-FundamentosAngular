import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RenderizandoListanComponent } from './renderizando-listan.component';

describe('RenderizandoListanComponent', () => {
  let component: RenderizandoListanComponent;
  let fixture: ComponentFixture<RenderizandoListanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RenderizandoListanComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RenderizandoListanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
