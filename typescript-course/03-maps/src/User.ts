import faker from 'faker';
import { Mappable } from './CustomMap';

export default class User implements Mappable {
  private name: string;
  color: string;
  location: {
    lat: number;
    lng: number;
  };

  constructor() {
    this.name = faker.name.firstName();

    this.location = {
      lat: parseFloat(faker.address.latitude()),
      lng: parseFloat(faker.address.longitude()),
    };
  }

  markerContent(): string {
    return `Username: ${this.name} 
    Latitude: ${this.location.lat} 
    Longitude: ${this.location.lng}`;
  }
}
