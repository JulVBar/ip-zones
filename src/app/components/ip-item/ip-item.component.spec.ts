import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IpItemComponent } from './ip-item.component';

describe('IpItemComponent', () => {
  let component: IpItemComponent;
  let fixture: ComponentFixture<IpItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IpItemComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IpItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
