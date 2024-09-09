import {
  GoogleMap,
  LoadScript,
  Marker,
  DirectionsRenderer,
  InfoWindow,
  StandaloneSearchBox,
} from "@react-google-maps/api";

import { useEffect, useRef, useState } from "react";
import { Input } from "../atoms/UI/Inputs";
import { MapFilterSearchIcons } from "../atoms/Icons";

const MapMarker = ({ searchLatLng }: { searchLatLng: string }) => {
  const [selectedMarker, setSelectedMarker] = useState<any>(null);

  const [currentPosition, setCurrentPosition] = useState<{
    lat: number;
    lng: number;
  } | null>(null);
  const [directionsClick, setDirectionsClick] = useState<any>(null);
  const [selectedDestination, setSelectedDestination] = useState<any>(null);
  const [searchBox, setSearchBox] = useState<any>(null);
  const [markers, setMarkers] = useState<any[]>([]);
  const [clickMarkers, setClickMarkers] = useState<any>();
  const [_, setDesActive] = useState<boolean>(false);
  const [markActive, setMarkActive] = useState<boolean>(false);
  const mapRef = useRef<google.maps.Map | null>(null);
  const selectedDestinationVariant = markActive
    ? clickMarkers
    : selectedDestination;
  const mapContainerStyle = {
    width: "100%",
    height: "100%",
  };

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const { latitude, longitude } = position.coords;
        setCurrentPosition({ lat: latitude, lng: longitude });
      },
      (error) => console.log(error),
      { enableHighAccuracy: true, timeout: 5000, maximumAge: 0 }
    );
  }, []);

  useEffect(() => {
    if (currentPosition && selectedDestinationVariant) {
      const directionsService = new window.google.maps.DirectionsService();
      directionsService.route(
        {
          origin: currentPosition,
          destination: selectedDestinationVariant,
          travelMode: window.google.maps.TravelMode.DRIVING,
        },
        (result, status) => {
          console.log(status);
          if (status === window.google.maps.DirectionsStatus.OK) {
            setDirectionsClick(result);
          } else {
            console.error(`error fetching directions ${result}`);
          }
        }
      );
    }
  }, [currentPosition, selectedDestination, clickMarkers]);

  useEffect(() => {
    setMarkers([
      {
        id: 1,
        lat: 55.7558,
        lng: 37.6176,
        title: "Москва",
        description: "Описание Москвы",
      },
      {
        id: 2,
        lat: 53.2038,
        lng: 50.1606,
        title: "Самара",
        description: "Описание Самары",
      },
      {
        id: 3,
        lat: 55.7943,
        lng: 49.1115,
        title: "Казань",
        description: "Описание Казани",
      },
      {
        id: 4,
        lat: 54.7388,
        lng: 55.9721,
        title: "Уфа",
        description: "Описание Уфы",
      },
      {
        id: 5,
        lat: 51.7666,
        lng: 55.1,
        title: "Оренбург",
        description: "Описание Оренбурга",
      },
      {
        id: 6,
        lat: 55.1644,
        lng: 61.4368,
        title: "Челябинск",
        description: "Описание Челябинска",
      },
      {
        id: 7,
        lat: 56.8389,
        lng: 60.6057,
        title: "Екатеринбург",
        description: "Описание Екатеринбурга",
      },
      {
        id: 8,
        lat: 54.9885,
        lng: 73.3242,
        title: "Омск",
        description: "Описание Омска",
      },
      {
        id: 9,
        lat: 55.0302,
        lng: 82.9204,
        title: "Новосибирск",
        description: "Описание Новосибирска",
      },
      {
        id: 10,
        lat: 56.0086,
        lng: 92.87,
        title: "Красноярск",
        description: "Описание Красноярска",
      },
      {
        id: 11,
        lat: 53.72,
        lng: 91.4424,
        title: "Абакан",
        description: "Описание Абакана",
      },
      {
        id: 12,
        lat: 52.2978,
        lng: 104.2964,
        title: "Иркутск",
        description: "Описание Иркутска",
      },
    ]);
  }, []);

  const onLoad = (map: google.maps.Map) => {
    mapRef.current = map;
    const bounds = new google.maps.LatLngBounds();
    markers?.forEach(({ lat, lng }) => bounds.extend({ lat, lng }));
    map.fitBounds(bounds);
  };

  const mapOptions = {
    disableDefaultUI: true,
    zoomControl: false,
    gestureHandling: "cooperative",
  };

  const onSearchLoad = (ref: any) => {
    setSearchBox(ref);
  };

  const onPlacesChanged = () => {
    const places = searchBox.getPlaces();
    if (places.length === 0) return;

    const place = places[0];
    const location = place.geometry?.location;
    if (location) {
      const newMarkers = markers.map((marker) => {
        const distance =
          window.google.maps.geometry.spherical.computeDistanceBetween(
            location,
            new window.google.maps.LatLng(marker.lat, marker.lng)
          );
        return {
          ...marker,
          highlighted: distance < 50000,
        };
      });

      setMarkers(newMarkers);

      mapRef.current?.setCenter(location);
      mapRef.current?.setZoom(12);
    }
  };

  useEffect(() => {
    if (searchLatLng) {
      const search = markers.find((item) => item.title === searchLatLng);
      setClickMarkers({ lat: search.lat, lng: search.lng });
      setMarkActive(true);
      setDesActive(false);
      console.log(search);
    }
  }, [searchLatLng]);

  const handleMarkerClick = (marker: any, dis: any) => {
    setSelectedMarker(marker);
    setSelectedDestination(dis);
    setMarkActive(false);
    setDesActive(true);
  };

  const getIcon = (highlighted: boolean) => {
    if (!window.google) return undefined;
    return {
      url: require("../../assets/Mark.png"),
      scaledSize: new window.google.maps.Size(30, 30),
      fillColor: highlighted ? "red" : "blue",
    };
  };

  return (
    <LoadScript
      googleMapsApiKey={"AIzaSyCN0pnM5Br2INjr7Ngp7RnIMzJMsse-ugI"}
      libraries={["places", "geometry"]}
    >
      <GoogleMap
        mapContainerStyle={mapContainerStyle}
        onLoad={onLoad}
        zoom={10}
        options={mapOptions}
      >
        <StandaloneSearchBox
          onLoad={onSearchLoad}
          onPlacesChanged={onPlacesChanged}
        >
          <div className="map_filter-search">
            <Input
              name="search"
              placeholder="Укажите ближайший адрес"
              style={{ backgroundColor: "#FFF" }}
            />
            <MapFilterSearchIcons />
          </div>
        </StandaloneSearchBox>
        {markers.map((marker) => (
          <Marker
            key={marker.id}
            position={{ lat: marker.lat, lng: marker.lng }}
            onClick={() =>
              handleMarkerClick(marker, { lat: marker.lat, lng: marker.lng })
            }
            icon={getIcon(marker.highlighted)}
          />
        ))}

        {selectedMarker && (
          <InfoWindow
            position={{ lat: selectedMarker.lat, lng: selectedMarker.lng }}
            onCloseClick={() => setSelectedMarker(null)}
          >
            <div>
              <h3>{selectedMarker.title}</h3>
              <p>{selectedMarker.description}</p>
            </div>
          </InfoWindow>
        )}

        {directionsClick && <DirectionsRenderer directions={directionsClick} />}
      </GoogleMap>
    </LoadScript>
  );
};

export default MapMarker;
