import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalCreateSuccessComponent } from './modal-create-success.component';

describe('ModalCreateSuccessComponent', () => {
  let component: ModalCreateSuccessComponent;
  let fixture: ComponentFixture<ModalCreateSuccessComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalCreateSuccessComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModalCreateSuccessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
