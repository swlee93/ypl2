import React, { useState, Fragment } from "react";
import {
  withJs,
  withKakaoMap,
  KakaoMap,
  MarkerClusterer,
  InfoWindoWithMarker,
  CustomOverlay,
  Polyline
} from "react-kakaomap-api";

export enum MarkerType {
  device,
  user
}

export function KakaoMarkers({ data, name }) {
  const bounds = [];
  const Markers = data.map(({ lat, lng, plateNumber }, index) => {
    let baseURL = "";
    try {
      baseURL = require(`./images/${MarkerType[name]}.png`);
    } catch (error) {
      console.error(error);
    }

    if (lat && lng) {
      bounds.push({ lat, lng });
      return (
        <Fragment key={index}>
          <InfoWindoWithMarker
            delay={100 * index}
            options={{
              lat,
              lng,
              content: plateNumber || index,
              image: {
                url: baseURL,
                width: 30,
                height: 30
              }
            }}
          />
          <CustomOverlay
            className="custom_overlay"
            options={{ lng, lat, content: plateNumber || index }}
          />
        </Fragment>
      );
    }
  });

  const polylineBounds = [];
  // path.forEach(p => {
  //   const { lat, lng } = p;
  //   polylineBounds.push({ lat, lng });
  // });

  const onZoomChang = map => {
    const level = map.getLevel();
  };

  return Markers;
}
export default KakaoMarkers;
