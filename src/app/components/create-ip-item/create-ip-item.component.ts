import { Component, Input, OnChanges, OnDestroy, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { IIpItem } from 'src/app/models/ip-item';
import { IpZoneService } from 'src/app/services/ip-zone.service';
import {ModalService} from '../../services/modal.service';
const Netmask = require('netmask').Netmask;
@Component({
  selector: 'app-create-ip-item',
  templateUrl: './create-ip-item.component.html',
  styleUrls: ['./create-ip-item.component.scss']
})
export class CreateIpItemComponent implements OnInit, OnDestroy {
  // zones = ['pr', 'nv', 'kl', 'ks', 'vb', 'ms', 'pd', 'kv', 'ps', 'pg', 'vs', 'cn', 'ad', 'kr', 'ksh', 'kp', 'kg'].sort();
  zones: string[];
  isLoading = false;

  currentIpItem: IIpItem;
  isEditForm: boolean;

  constructor(
    public ipZoneService: IpZoneService,
    private modalService: ModalService)
    {
      this.isEditForm = false;
      this.ipZoneService.currentIpItemStream$.subscribe(
        item => {
          this.currentIpItem = item;
          this.isEditForm = Boolean(this.currentIpItem.id);
          console.log('sub')
      });

      if (this.isEditForm) {
        const transformedIp = this.currentIpItem?.net?.replace('/', '.').split('.');
        this.form.setValue({
          ipzone: this.currentIpItem.zone,
          net1: +transformedIp[0],
          net2: +transformedIp[1],
          net3: +transformedIp[2],
          net4: +transformedIp[3],
          net5: +transformedIp[4],
          vlan: this.currentIpItem.vlan,
        });
      }
    }

  ngOnInit(): void {
    this.ipZoneService.getAllDistricts().subscribe(
      (disctricts) => this.zones = disctricts.sort());
  }
  ngOnDestroy(): void {
 //отписаться
  }

  closeForm(): void {
    this.modalService.close();
  }

  form = new FormGroup({
    ipzone: new FormControl<string>('ad', [
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
      id: this.currentIpItem.id || +this.ipZoneService.lastId + 1 as number,
      net: ipSrting as string,
      gate: hostMin as string,
      code: this.form.value.ipzone + '-' +
        this.form.value.net2 + '-' +
        subnet + '-' +
        this.form.value.vlan as string,
      zone: this.form.value.ipzone as string,
      vlan: this.form.value.vlan as number,
      signed: this.currentIpItem.signed || false as boolean,
      date: this.currentIpItem.date || new Date as Date,
      priority: this.currentIpItem.priority || false as boolean
    }

    if (this.isEditForm) {
      this.ipZoneService.put(newIpItem).subscribe(() => {
        this.isLoading = false;
        this.modalService.close();
        this.modalService.openSuccessModal();
      })
    } else {
      this.ipZoneService.create(newIpItem).subscribe(() => {
        this.isLoading = false;
        this.ipZoneService.setCreatedItem(newIpItem.code);
        this.modalService.close();
        this.modalService.openSuccessModal();
      })
    }
  }
}

