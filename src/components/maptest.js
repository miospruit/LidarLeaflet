import React, {useEffect, useState} from 'react';
import {TileLayer, MapContainer, Polygon} from 'react-leaflet';
import './map.css'
import io from "socket.io-client";


const Block = () => {
  const [ticking, setTicking] = useState(true),
  [count, setCount] = useState(0)
  let [value, setValue] = useState(0);
  let [Color, setColor] = useState('#3288bd');
  let lidar = io.connect("https://stepverder.nl:6600")
  function getData() {
    console.log('test');
    lidar.on("inputLidar", (incomingdata) => {
      setValue(incomingdata);
      console.log(incomingdata) // zou een array moeten zijn met 2 waardes, de hoek en afstand
    })
    lidar.on("disconnect", () => {
      console.log('uit');
      setTicking(false);
    });
    lidar.on("connect", () => {
      console.log('aan');
      setTicking(true);
    });
    let data;
        data = value
        switch(data) {
          case 0:
            setColor('#3288bd');
            return console.log('blue')
          case 1:
            setColor('#66c2a5');
            return console.log('yellow')
          case 2:
            setColor('#abdda4');
            return console.log('red')
          case 3:
            setColor('#e6f598');
            return console.log('purple')
          case 4:
            setColor('#ffffbf');
            return console.log('purple')
          case 5:
            setColor('#fee08b');
            return console.log('purple')
          case 6:
            setColor('#fdae61');
            return console.log('purple')
          case 7:
            setColor('#f46d43');
            return console.log('purple')
          case 8:
            setColor('#d53e4f');
            return console.log('purple')
          default:
            setColor('white');
        }
  }
  const polygon = [
    [
      52.117212011574175,
      4.2797112464904785
    ],
    [
      52.117264715716466,
      4.2799365520477295
    ],
    [
      52.1155715639909,
      4.282822608947754
    ],
    [
      52.11441860285913,
      4.281256198883057
    ],
    [
      52.11418141858538,
      4.281889200210571
    ],
    [
      52.11514332476575,
      4.284110069274902
    ],
    [
      52.11631603162085,
      4.285858869552612
    ],
    [
      52.11664543810885,
      4.285397529602051
    ],
    [
      52.11678378810791,
      4.285386800765991
    ],
    [
      52.116988018274185,
      4.285107851028442
    ],
    [
      52.115716505566084,
      4.282994270324707
    ],
    [
      52.117040722681324,
      4.280612468719482
    ],
    [
      52.11715930736955,
      4.281245470046997
    ],
    [
      52.11747553166254,
      4.281116724014282
    ],
    [
      52.11752823549327,
      4.280977249145508
    ],
    [
      52.11747553166254,
      4.280837774276733
    ],
    [
      52.117179071453585,
      4.280955791473389
    ],
    [
      52.11708683898645,
      4.280548095703125
    ],
    [
      52.1173240078021,
      4.280108213424683
    ],
    [
      52.1176007031588,
      4.279979467391968
    ],
    [
      52.11764681888459,
      4.280108213424683
    ],
    [
      52.117732462248796,
      4.280194044113158
    ],
    [
      52.11788398472081,
      4.280151128768921
    ],
    [
      52.11791692432048,
      4.279904365539551
    ],
    [
      52.11779175371223,
      4.279700517654418
    ],
    [
      52.117330595806735,
      4.27991509437561
    ],
    [
      52.11717248342656,
      4.27918553352356
    ],
    [
      52.11696825410544,
      4.2791748046875
    ],
    [
      52.11683649275654,
      4.279217720031738
    ],
    [
      52.116731083396985,
      4.279389381408691
    ],
    [
      52.116731083396985,
      4.279657602310181
    ],
    [
      52.116803552358455,
      4.279850721359253
    ],
    [
      52.116928725741644,
      4.27991509437561
    ],
    [
      52.117093427026155,
      4.279839992523193
    ],
    [
      52.117212011574175,
      4.2797112464904785
    ]
  ]

  useEffect(() => {
    const timer = setInterval(() => ticking && getData(), 1000)
    return () => clearInterval(timer)
  })
  
  return (
    <Polygon className="test" pathOptions={{color: Color}} positions={polygon} />
    )
  }  
  
  
  
  function SampleExmaple() {
  const [lat, setLat] = useState(52.116)
  const [lng, setLng] = useState(4.282)
  const [zoom, setZoom] = useState(15);
  
  const position = [lat, lng];
  
  //  let lidar = io.connect("https://stepverder.nl:6600")
  
  // lidar.on("welcome", (data) => {
    //     console.log(data)
    // })
    // lidar.on("inputLidar", (incomingdata) => {
      //     setValue(incomingdata);
      //     console.log(incomingdata) // zou een array moeten zijn met 2 waardes, de hoek en afstand
      // })
      
      // useEffect(()=>{
        //   setTimeout(() => {
          //     let data;
          //     data = value
          //     switch(data) {
            //       case 0:
            //         setColor('blue');
            //         return console.log('blue')
            //       case 1:
            //         setColor('yellow');
            //         return console.log('yellow')
            //       case 2:
            //         setColor('red');
            //         return console.log('red')
            //       default:
            //         setColor('white');
            //     }
            //   }, 1000);
            // },[]);
            
            // setTimeout(function(){
              //   setColor('blue')
              // }, 1000);
              
              
              
              return (
                <MapContainer className="mapStyling" center={position} zoom={zoom}>
     <TileLayer
          attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
        <Block/>
   </MapContainer>
  )
}
export default SampleExmaple;