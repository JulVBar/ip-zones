export interface IIpItem {
  id: number;
  code: string;
  net: string;
  gate: string;
  zone: string;
  vlan: number;
  signed: boolean;
  date: Date;
  priority: boolean;
  [key: string]: any;
}
