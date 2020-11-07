import faker from 'faker';
import { Mappable } from './CustomMap';

export default class Company implements Mappable {
  private name: string;
  catchPhrase: string;
  color: string;
  location: {
    lat: number;
    lng: number;
  };

  constructor() {
    this.name = faker.company.companyName();
    this.catchPhrase = faker.company.catchPhrase();
    this.location = {
      lat: parseFloat(faker.address.latitude()),
      lng: parseFloat(faker.address.longitude()),
    };
  }

  markerContent(): string {
    return `<div><h1 style="color="red";">Company Name: ${this.name}</h1><br /> 
            <h3>Catch Pharse: ${this.catchPhrase}</h3><br />
            <p>Latitude: ${this.location.lat} 
            Longitude: ${this.location.lng}</p></div>`;
  }
}
