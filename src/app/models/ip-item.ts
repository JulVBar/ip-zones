export interface IIpItem {
  id: number;
  code: string;
  net: string;
  gate: string;
  ip_zone: {
    zone_id: number;
    zone_name: string;
    zone_fullname: string;
  },
  vlan: number;
  signed: boolean;
  date: string;
  priority: boolean;
}
