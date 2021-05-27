import React from 'react'
import { GoogleMap, useJsApiLoader ,Marker ,InfoWindow  } from "google-maps-react";

const containerStyle = {
  
  height: '800px'
};

const center = {
  lat: 34.050202067856326,
  lng: -6.8127510558162125
};

function MyMap(props) {
  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: "AIzaSyDKjkINKsGV9eXt7lmhpc9mE2vF_yZaou0"
  })

  const [map, setMap] = React.useState(null)
  const [selected, setselected] = React.useState()

  

  const onLoad = React.useCallback(function callback(map) {
    setMap(map)
  }, [])

  const onUnmount = React.useCallback(function callback(map) {
    setMap(null)
  }, [])

  return isLoaded ? (
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={(props.markers[0]) ? props.markers[0] : center}
        zoom={16}
        onLoad={onLoad}
        onUnmount={onUnmount}

      >


      {props.markers.map((pos, index) => (
                  <Marker key={index} position = {pos} onClick={()=>setselected(pos)} icon={'Assets/img/homeicon.png'}>
                    
                    <InfoWindow >   
                      <div >   
                       test          
                      </div>                    
                    </InfoWindow>         
                  </Marker>
        ))}
                  
            
      

        
      </GoogleMap>
  ) : <></>
}

export default React.memo(MyMap)