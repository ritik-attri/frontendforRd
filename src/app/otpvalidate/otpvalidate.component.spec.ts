import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OtpvalidateComponent } from './otpvalidate.component';

describe('OtpvalidateComponent', () => {
  let component: OtpvalidateComponent;
  let fixture: ComponentFixture<OtpvalidateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OtpvalidateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OtpvalidateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
