import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalDeleteAllConfirmComponent } from './modal-delete-all-confirm.component';

describe('ModalDeleteAllConfirmComponent', () => {
  let component: ModalDeleteAllConfirmComponent;
  let fixture: ComponentFixture<ModalDeleteAllConfirmComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalDeleteAllConfirmComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModalDeleteAllConfirmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
