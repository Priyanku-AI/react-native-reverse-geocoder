import { useState } from 'react';
import {
  Text,
  View,
  StyleSheet,
  Button,
  ActivityIndicator,
} from 'react-native';
import { reverseGeocode } from 'react-native-reverse-geocoder';

export default function App() {
  const [address, setAddress] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const testGeocode = async () => {
    setLoading(true);
    setError(null);
    setAddress(null);
    try {
      // Guwahati coordinates as test
      const result = await reverseGeocode(26.1445, 91.7362);
      setAddress(result.formattedAddress);
    } catch (e: any) {
      setError(e.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <View style={styles.container}>
      <Button title="Test Reverse Geocode" onPress={testGeocode} />
      {loading && <ActivityIndicator style={styles.spacing} />}
      {address && <Text style={styles.spacing}>Address: {address}</Text>}
      {error && <Text style={styles.spacing}>Error: {error}</Text>}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  spacing: {
    marginTop: 16,
  },
});
