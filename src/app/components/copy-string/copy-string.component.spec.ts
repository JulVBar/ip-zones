import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CopyStringComponent } from './copy-string.component';

describe('CopyStringComponent', () => {
  let component: CopyStringComponent;
  let fixture: ComponentFixture<CopyStringComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CopyStringComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CopyStringComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
