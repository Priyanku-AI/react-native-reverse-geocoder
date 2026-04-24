import NativeReverseGeocoder, {
  type GeocoderResult,
} from './NativeReverseGeocoder';

export type { GeocoderResult };

export function reverseGeocode(
  lat: number,
  lng: number
): Promise<GeocoderResult> {
  return NativeReverseGeocoder.reverseGeocode(lat, lng);
}
