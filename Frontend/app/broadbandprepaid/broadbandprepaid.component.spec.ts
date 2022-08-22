import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BroadbandprepaidComponent } from './broadbandprepaid.component';

describe('BroadbandprepaidComponent', () => {
  let component: BroadbandprepaidComponent;
  let fixture: ComponentFixture<BroadbandprepaidComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BroadbandprepaidComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BroadbandprepaidComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
