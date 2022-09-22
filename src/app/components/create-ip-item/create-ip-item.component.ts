import { Component, Input, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { IpZoneService } from 'src/app/services/ip-zone.service';
import {ModalService} from '../../services/modal.service';
const Netmask = require('netmask').Netmask;
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
      Validators.max(32)
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

    const ipSrting: string = this.form.value.net1 + '.' +
                    this.form.value.net2 + '.' +
                    this.form.value.net3 + '.' +
                    this.form.value.net4 + '/' +
                    this.form.value.net5;
    const ipObj = new Netmask(ipSrting);
    const hostMin = ipObj.first;
    const reversedHost = hostMin.split('.').reverse().join('.').replace('.', 'F').replace('.', 'S');
    const firstIndex = reversedHost.indexOf('F') + 1;
    const secondIndex = reversedHost.indexOf('S');
    const subnet = reversedHost.slice(firstIndex, secondIndex);

    const newIpItem = {
      id: +this.ipZoneService.lastId + 1 as number,
      net: ipSrting as string,
      gate: hostMin as string,
      code: this.form.value.ipzone + '-' +
        this.form.value.net2 + '-' +
        subnet + '-' +
        this.form.value.vlan as string,
      zone: this.form.value.ipzone as string,
      vlan: this.form.value.vlan as number,
      signed: false as boolean,
      date: new Date as Date,
      priority: false as boolean
    }

    this.ipZoneService.create(newIpItem).subscribe(() => {
      this.isLoading = false;
      this.modalService.open('success-modal');
      this.modalService.isCreatedFn(newIpItem.code);
      this.form.setValue({
        ipzone: 'pr',
        net1: 10,
        net2: 0,
        net3: 0,
        net4: 0,
        net5: 0,
        vlan: 1,
      });
    })
  }
}

