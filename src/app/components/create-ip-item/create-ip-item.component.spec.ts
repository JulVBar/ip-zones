import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateIpItemComponent } from './create-ip-item.component';

describe('CreateIpItemComponent', () => {
  let component: CreateIpItemComponent;
  let fixture: ComponentFixture<CreateIpItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateIpItemComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateIpItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
