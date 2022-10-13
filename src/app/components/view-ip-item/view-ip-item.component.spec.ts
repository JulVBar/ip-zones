import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewIpItemComponent } from './view-ip-item.component';

describe('ViewIpItemComponent', () => {
  let component: ViewIpItemComponent;
  let fixture: ComponentFixture<ViewIpItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewIpItemComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewIpItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
