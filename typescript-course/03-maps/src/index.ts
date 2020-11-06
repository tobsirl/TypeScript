// import { User } from './User';
// import { Company } from './Company';
import 'googlemaps';

new google.maps.Map(document.getElementById('map'), {
  zoom: 1,
  center: {
    lat: 0,
    lng: 0,
  },
});
