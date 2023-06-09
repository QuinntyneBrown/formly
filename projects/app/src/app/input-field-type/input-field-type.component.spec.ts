import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InputFieldTypeComponent } from './input-field-type.component';

describe('InputFieldTypeComponent', () => {
  let component: InputFieldTypeComponent;
  let fixture: ComponentFixture<InputFieldTypeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ InputFieldTypeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InputFieldTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
