import * as Location from 'expo-location';
import { useEffect, useState } from 'react';

const useLocation = () => {
  const [location, setLocation] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);
  const [permissionStatus, setPermissionStatus] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  // Function to request location permission
  const requestLocationPermission = async () => {
    try {
      const { status } = await Location.requestForegroundPermissionsAsync();
      console.log(status, 'permissionGranted');
      setPermissionStatus(status);
      if (status !== 'granted') {
        setErrorMsg('Permission to access location was denied');
        return false;
      }
      return true;
    } catch (error) {
      setErrorMsg('Error requesting location permission: ' + error.message);
      return false;
    }
  };

  // Function to fetch the current location
  const fetchLocation = async () => {
    try {
      const currentLocation = await Location.getCurrentPositionAsync({});
      setLocation({
        latitude: currentLocation.coords.latitude,
        longitude: currentLocation.coords.longitude,
      });
    } catch (error) {
      setErrorMsg('Error fetching location: ' + error.message);
    }
  };
  const getLocation = async () => {
    setIsLoading(true);
    const permissionGranted = await requestLocationPermission();

    if (permissionGranted) {
      await fetchLocation();
    } else {
      //Linking.openSettings();
    }
    setIsLoading(false);
  };

  useEffect(() => {
    getLocation(); // Trigger the location retrieval
  }, []);

  return { location, errorMsg, permissionStatus, isLoading, getLocation };
};

export default useLocation;
