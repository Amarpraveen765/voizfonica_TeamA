import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BroadbandpostpaidComponent } from './broadbandpostpaid.component';

describe('BroadbandpostpaidComponent', () => {
  let component: BroadbandpostpaidComponent;
  let fixture: ComponentFixture<BroadbandpostpaidComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BroadbandpostpaidComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BroadbandpostpaidComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
