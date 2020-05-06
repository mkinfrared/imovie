export interface Cinemas {
  data: Cinema[];
  page: number | null;
  total?: number;
}

export interface Cinema {
  id: number;
  name: string;
  createdAt: string;
  updatedAt: string;
  zipcode: Zipcode;
  zipcodeId: number;
}

export interface Country {
  alpha2Code: string;
  name: string;
  alpha3Code: string;
  callingCode: number;
  region: string;
  subregion: string;
  nativeName: string;
  flag: string;
  cioc: string;
  createdAt: string;
  updatedAt: string;
}

export interface State {
  id: number;
  name: string;
  abbreviation: string;
  countryId: string;
  createdAt: string;
  updatedAt: string;
}

export interface City {
  id: number;
  name: string;
  stateId: number;
  countryId: string;
  createdAt: string;
  updatedAt: string;
}

export interface Zipcode {
  id: number;
  code: string;
  longitude: string;
  latitude: string;
  cityId: number;
  countryId: string;
  stateId: number;
  city: City;
  country: Country;
  state: State;
  createdAt: string;
  updatedAt: string;
}

export enum CinemaActionTypes {
  FETCH_CINEMAS_REQUEST = "@@cinema/FETCH_CINEMAS_REQUEST",
  FETCH_CINEMAS_FAIL = "@@cinema/FETCH_CINEMAS_FAIL"
}
