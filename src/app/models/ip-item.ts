export interface IIpItem {
  id: number;
  code: string;
  net: string;
  gate: string;
  ip_zone: {
    zone_id: number;
    zone_name: string | null | undefined;
  },
  vlan: number | null | undefined;
  signed: boolean;
  date: Date;
  priority: boolean;
}
