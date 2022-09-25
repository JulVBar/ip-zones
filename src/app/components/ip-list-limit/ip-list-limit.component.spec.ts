import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IpListLimitComponent } from './ip-list-limit.component';

describe('IpListLimitComponent', () => {
  let component: IpListLimitComponent;
  let fixture: ComponentFixture<IpListLimitComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IpListLimitComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IpListLimitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
