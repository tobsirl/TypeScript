import faker from 'faker';

export default class Company {
  private name: string;
  catchPhrase: string;
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
