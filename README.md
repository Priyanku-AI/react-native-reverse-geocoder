# react-native-reverse-geocoder

Reverse geocoding for Android using the native `android.location.Geocoder` class — no Google Maps API key required, no external HTTP calls, no billing.

## How it works

```
Your JS code
     ↓
React Native Bridge
     ↓
android.location.Geocoder  (core Android SDK class)
     ↓
Google Play Services  (pre-installed on device)
     ↓
Google's geocoding infrastructure
```

Same accuracy as the Google Maps Geocoding API — because it uses the same underlying infrastructure.

## Requirements

- React Native 0.60+
- Android only (iOS support not available in v1)
- Google Play Services must be present on the device

## Installation

```sh
npm install react-native-reverse-geocoder
```

## Usage

```ts
import { reverseGeocode } from 'react-native-reverse-geocoder';

const result = await reverseGeocode(26.1445, 91.7362);
console.log(result.formattedAddress); // "GS Road, Guwahati, Assam 781005, India"
```

## API

### `reverseGeocode(lat: number, lng: number): Promise<GeocoderResult>`

Converts a latitude/longitude coordinate into a human-readable address.

```ts
interface GeocoderResult {
  formattedAddress: string;
  city: string | null;
  state: string | null;
  country: string | null;
  postalCode: string | null;
}
```

## Error Handling

The promise rejects if:
- Google Play Services is not available on the device
- No address is found for the given coordinates
- Device is offline

Always handle the error case:

```ts
const address = await reverseGeocode(lat, lng)
  .catch(() => `${lat.toFixed(5)}, ${lng.toFixed(5)}`);
```

## Contributing

- [Development workflow](CONTRIBUTING.md#development-workflow)
- [Sending a pull request](CONTRIBUTING.md#sending-a-pull-request)
- [Code of conduct](CODE_OF_CONDUCT.md)

## License

MIT

---

Made with [create-react-native-library](https://github.com/callstack/react-native-builder-bob)