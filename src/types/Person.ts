export type Person = {
  namn: string; // name
  tjänstegrad: string; // grade of service
  tjänstetyp: string; // service type
  undantagsregler?: string; // exception rules
  delegeringar: string[]; // delegations
  grupp: string,
  team?: string,
};
