/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import MapboxGL from '@react-native-mapbox-gl/maps';
import React, {createRef, useCallback, useEffect} from 'react';
import {AppState, StyleSheet, View} from 'react-native';

MapboxGL.setAccessToken('');

const App = () => {
  const mapRef = createRef();

  useEffect(() => {
    AppState.addEventListener('change', handleAppStateChange);

    return () => {
      AppState.removeEventListener('change', handleAppStateChange);
    };
  }, [handleAppStateChange]);

  const handleAppStateChange = useCallback(
    nextAppState => {
      if (nextAppState === 'active') {
        console.log('App became active', mapRef.current);
      }
    },
    [mapRef],
  );

  return (
    <View style={styles.container}>
      <MapboxGL.MapView
        ref={mapRef}
        zoomLevel={12}
        styleURL=""
        style={styles.container}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
