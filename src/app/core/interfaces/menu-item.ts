export interface IMenuItem {
    id: string;
    parentName: string;
    parentSequence: number;
    name: string;
    iconName: string;
    route: string;
    isExternal: boolean;
    isDefault: boolean;
  }
