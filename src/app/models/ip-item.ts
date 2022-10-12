export interface IIpItem {
  id: number;
  base: string;
  net: string;
  gate: string;
  last: string,
  mask: string,
  hostmask: string,
  broadcast: string,
  code: string;
  zone: string;
  vlan: number;
  signed: boolean;
  date: Date;
  priority: boolean;
  [key: string]: any;
}
