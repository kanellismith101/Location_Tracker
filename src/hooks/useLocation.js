import { useState, useEffect } from "react";
import {
  Accuracy,
  requestPermissonsAsync,
  watchPostionAsync,
} from "expo-location";
export default (shouldTrack, callback) => {
  const [err, setErr] = useState(null);
  const [subscriber, setSubscriber];

  const startWatching = async () => {
    try {
      await requestPermissionsAsync();
      const sub = await watchPositionAsync(
        {
          accuracy: Accuracy.BestForNavigation,
          timeInterval: 1000,
          distanceInterval: 10,
        },
        callback
      );
    } catch (e) {
      setErr(e);
    }
  };
  useEffect(() => {
    if (shouldTrack) {
      startWatching();
    } else {
      subscriber.remove();
      setSubscriber(null);
    }
    // shouldTrack ? startWatching : subscriber.remove() && setSubscriber(null);
  }, [shouldTrack]);

  return [err];
};
