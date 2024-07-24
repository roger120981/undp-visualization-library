import { useRef, useEffect, useState } from 'react';
import maplibreGl from 'maplibre-gl';
import * as pmtiles from 'pmtiles';
import 'maplibre-gl/dist/maplibre-gl.css';
import { select } from 'd3-selection';
import { GraphHeader } from '../../../Elements/GraphHeader';
import { GraphFooter } from '../../../Elements/GraphFooter';

interface Props {
  mapStyle: string;
  center?: [number, number];
  zoomLevel?: number;
  graphTitle?: string;
  source?: string;
  graphDescription?: string;
  sourceLink?: string;
  footNote?: string;
  backgroundColor?: string | boolean;
  padding?: string;
  width?: number;
  height?: number;
  relativeHeight?: number;
  graphID?: string;
}

export function GeoHubMap(props: Props) {
  const {
    mapStyle,
    sourceLink,
    graphTitle,
    height,
    width,
    relativeHeight,
    source,
    graphDescription,
    footNote,
    padding,
    backgroundColor,
    center,
    zoomLevel,
    graphID,
  } = props;

  const [svgWidth, setSvgWidth] = useState(0);
  const [svgHeight, setSvgHeight] = useState(0);
  const graphDiv = useRef<HTMLDivElement>(null);
  const mapContainer = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (graphDiv.current) {
      setSvgHeight(graphDiv.current.clientHeight || 480);
      setSvgWidth(graphDiv.current.clientWidth || 620);
    }
  }, [graphDiv?.current, width]);
  useEffect(() => {
    if (mapContainer.current && svgWidth) {
      const mapDiv = select(mapContainer.current);
      mapDiv.selectAll('div').remove();
      const protocol = new pmtiles.Protocol();
      maplibreGl.addProtocol('pmtiles', protocol.tile);
      const mapObj: any = {
        container: mapContainer.current as any,
        style: mapStyle,
      };
      if (center) {
        mapObj.center = center;
      }
      if (zoomLevel) {
        mapObj.zoom = zoomLevel;
      }
      const map = new maplibreGl.Map(mapObj);
      map.addControl(
        new maplibreGl.NavigationControl({
          visualizePitch: true,
          showZoom: true,
          showCompass: true,
        }),
        'bottom-right',
      );
      map.addControl(new maplibreGl.ScaleControl(), 'bottom-left');
    }
  }, [mapContainer.current, svgWidth, mapStyle]);
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        height: 'inherit',
        width: width ? 'fit-content' : '100%',
        flexGrow: width ? 0 : 1,
        marginLeft: 'auto',
        marginRight: 'auto',
        backgroundColor: !backgroundColor
          ? 'transparent'
          : backgroundColor === true
          ? 'var(--gray-200)'
          : backgroundColor,
      }}
      id={graphID}
    >
      <div
        style={{
          padding: backgroundColor
            ? padding || 'var(--spacing-05)'
            : padding || 0,
          flexGrow: 1,
          display: 'flex',
        }}
      >
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            width: '100%',
            gap: 'var(--spacing-05)',
            flexGrow: 1,
            justifyContent: 'space-between',
          }}
        >
          {graphTitle || graphDescription ? (
            <GraphHeader
              graphTitle={graphTitle}
              graphDescription={graphDescription}
              width={width}
            />
          ) : null}
          <div
            style={{
              flexGrow: 1,
              flexDirection: 'column',
              display: 'flex',
              justifyContent: 'center',
              lineHeight: 0,
            }}
            ref={graphDiv}
          >
            {(width || svgWidth) && (height || svgHeight) ? (
              <div
                style={{
                  width: width || svgWidth,
                  height:
                    height ||
                    (relativeHeight
                      ? (width || svgWidth) * relativeHeight
                      : svgHeight),
                }}
              >
                <div
                  ref={mapContainer}
                  className='map maplibre-show-control'
                  style={{ width: '100%', height: '100%' }}
                />
              </div>
            ) : null}
          </div>
          {source || footNote ? (
            <GraphFooter
              source={source}
              sourceLink={sourceLink}
              footNote={footNote}
              width={width}
            />
          ) : null}
        </div>
      </div>
    </div>
  );
}
