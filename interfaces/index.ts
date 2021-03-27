// You can include shared interfaces/types in a separate file
// and then use them in any component by importing them. For
// example, to import the interface below do:
//
// import { User } from 'path/to/interfaces';

export type User = {
  id: number
  name: string
}

export type Address = {
  street: string,
  suite: string,
  city: string,
  zipcode: string,
  geo: {
      lat: string,
      lng: string,
  }
}

export type Company = {
  name: string,
  catchPhrase: string,
  bs: string,
}

export type ResponseData = {
  id: number,
  name: string,
  username: string,
  email: string,
  address: Address,
  phone: string,
  website: string,
  company: Company,
};