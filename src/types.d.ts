export interface NavItem {
  readonly name:       string;
  readonly items?:     Item[];
  readonly shortName?: string;
}

export interface Item {
  readonly name:      string;
  readonly shortName: string;
  readonly icon?:     string;
}
