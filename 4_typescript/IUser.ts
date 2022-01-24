export interface ICountry {
  name: string;
  isoCode?: number | string;
}

export interface IAddress {
  street: string;
  country: ICountry;
}

export interface IUser {
  name: string;
  address?: IAddress;
}
