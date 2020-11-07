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
    return `Company Name: ${this.name} 
            Catch Pharse: ${this.catchPhrase}
            Latitude: ${this.location.lat} 
            Longitude: ${this.location.lng}`;
  }
}
