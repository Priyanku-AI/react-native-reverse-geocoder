import { TurboModuleRegistry, type TurboModule } from 'react-native';

export interface GeocoderResult {
  formattedAddress: string;
  city: string | null;
  state: string | null;
  country: string | null;
  postalCode: string | null;
}

export interface Spec extends TurboModule {
  reverseGeocode(lat: number, lng: number): Promise<GeocoderResult>;
}

export default TurboModuleRegistry.getEnforcing<Spec>('ReverseGeocoder');