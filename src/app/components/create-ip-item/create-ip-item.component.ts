import { Component, Input, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { IpZoneService } from 'src/app/services/ip-zone.service';
import {ModalService} from '../../services/modal.service'

@Component({
  selector: 'app-create-ip-item',
  templateUrl: './create-ip-item.component.html',
  styleUrls: ['./create-ip-item.component.scss']
})
export class CreateIpItemComponent implements OnInit {
  zones = ['pr', 'nev', 'kl'];
  isLoading = false;
  constructor(
    private ipZoneService: IpZoneService,
    private modalService: ModalService)
    { }

  form = new FormGroup({
    ipzone: new FormControl<string>('pr', [
      Validators.required,
    ]),
    net1: new FormControl<number>(10, [
      Validators.required,
      Validators.min(1),
      Validators.max(255)
    ]),
    net2: new FormControl<number>(0, [
      Validators.required,
      Validators.min(0),
      Validators.max(255)
    ]),
    net3: new FormControl<number>(0, [
      Validators.required,
      Validators.min(0),
      Validators.max(255)
    ]),
    net4: new FormControl<number>(0, [
      Validators.required,
      Validators.min(0),
      Validators.max(255)
    ]),
    net5: new FormControl<number>(0, [
      Validators.required,
      Validators.min(0),
      Validators.max(255)
    ]),
    vlan: new FormControl<number>(0, [
      Validators.required,
      Validators.min(1)
    ]),
  })

  get ipzone() {
    return this.form.controls.ipzone as FormControl
  }
  get net1() {
    return this.form.controls.net1 as FormControl
  }
  get net2() {
    return this.form.controls.net2 as FormControl
  }
  get net3() {
    return this.form.controls.net3 as FormControl
  }
  get net4() {
    return this.form.controls.net4 as FormControl
  }
  get net5() {
    return this.form.controls.net5 as FormControl
  }
  get vlan() {
    return this.form.controls.vlan as FormControl
  }

  ngOnInit(): void {
  }

  submit() {
    this.isLoading = true;

    this.ipZoneService.create({
      id: +this.ipZoneService.lastId + 1 as number,
      code: this.form.value.ipzone + '-' +
        this.form.value.net2 + '-' +
        this.form.value.net3 + '-' +
        this.form.value.vlan as string,
      net: this.form.value.net1 + '.' +
        this.form.value.net2 + '.' +
        this.form.value.net3 + '.' +
        this.form.value.net4 + '/' +
        this.form.value.net5 as string,
      gate: '0.0.0.0' as string,
      ip_zone: {
        zone_id: 100 as number,
        zone_name: this.form.value.ipzone as string,
      },
      vlan: this.form.value.vlan as number,
      signed: false as boolean,
      date: new Date as Date,
      priority: false as boolean
    }).subscribe(() => {
      this.isLoading = false;
      this.modalService.open();
      this.form.reset();
    })
  }
}