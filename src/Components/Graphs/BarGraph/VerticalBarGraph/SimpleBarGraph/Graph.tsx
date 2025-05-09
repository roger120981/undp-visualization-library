import { scaleLinear, scaleBand } from 'd3-scale';

import { useState } from 'react';
import isEqual from 'lodash.isequal';
import { Modal } from '@undp-data/undp-design-system-react';
import { numberFormattingFunction } from '../../../../../Utils/numberFormattingFunction';
import {
  BarGraphDataType,
  CSSObject,
  ReferenceDataType,
} from '../../../../../Types';
import { Tooltip } from '../../../../Elements/Tooltip';
import { checkIfNullOrUndefined } from '../../../../../Utils/checkIfNullOrUndefined';
import { UNDPColorModule } from '../../../../ColorPalette';
import { string2HTML } from '../../../../../Utils/string2HTML';

interface Props {
  data: BarGraphDataType[];
  width: number;
  height: number;
  barColor: string[];
  suffix: string;
  prefix: string;
  barPadding: number;
  showLabels: boolean;
  showValues: boolean;
  showTicks: boolean;
  colorDomain: string[];
  truncateBy: number;
  leftMargin: number;
  rightMargin: number;
  topMargin: number;
  bottomMargin: number;
  refValues?: ReferenceDataType[];
  tooltip?: string;
  onSeriesMouseOver?: (_d: any) => void;
  selectedColor?: string;
  maxValue?: number;
  minValue?: number;
  highlightedDataPoints: (string | number)[];
  onSeriesMouseClick?: (_d: any) => void;
  labelOrder?: string[];
  maxBarThickness?: number;
  minBarThickness?: number;
  resetSelectionOnDoubleClick: boolean;
  tooltipBackgroundStyle?: CSSObject;
  detailsOnClick?: string;
  barAxisTitle?: string;
  noOfTicks: number;
  valueColor?: string;
}

export function Graph(props: Props) {
  const {
    data,
    width,
    height,
    barColor,
    suffix,
    prefix,
    barPadding,
    showLabels,
    showValues,
    showTicks,
    colorDomain,
    truncateBy,
    rightMargin,
    topMargin,
    bottomMargin,
    leftMargin,
    tooltip,
    onSeriesMouseOver,
    refValues,
    selectedColor,
    maxValue,
    minValue,
    highlightedDataPoints,
    onSeriesMouseClick,
    labelOrder,
    maxBarThickness,
    minBarThickness,
    resetSelectionOnDoubleClick,
    tooltipBackgroundStyle,
    detailsOnClick,
    barAxisTitle,
    valueColor,
    noOfTicks,
  } = props;
  const margin = {
    top: topMargin,
    bottom: bottomMargin,
    left: barAxisTitle ? leftMargin + 30 : leftMargin,
    right: rightMargin,
  };
  const [mouseOverData, setMouseOverData] = useState<any>(undefined);
  const [mouseClickData, setMouseClickData] = useState<any>(undefined);
  const [eventX, setEventX] = useState<number | undefined>(undefined);
  const [eventY, setEventY] = useState<number | undefined>(undefined);
  const graphWidth = width - margin.left - margin.right;
  const graphHeight = height - margin.top - margin.bottom;

  const xMaxValue = !checkIfNullOrUndefined(maxValue)
    ? (maxValue as number)
    : Math.max(
        ...data
          .filter(d => !checkIfNullOrUndefined(d.size))
          .map(d => d.size as number),
      ) < 0
    ? 0
    : Math.max(
        ...data
          .filter(d => !checkIfNullOrUndefined(d.size))
          .map(d => d.size as number),
      );
  const xMinValue = !checkIfNullOrUndefined(minValue)
    ? (minValue as number)
    : Math.min(
        ...data
          .filter(d => !checkIfNullOrUndefined(d.size))
          .map(d => d.size as number),
      ) >= 0
    ? 0
    : Math.min(
        ...data
          .filter(d => !checkIfNullOrUndefined(d.size))
          .map(d => d.size as number),
      );

  const y = scaleLinear()
    .domain([xMinValue, xMaxValue])
    .range([graphHeight, 0])
    .nice();

  const dataWithId = data.map((d, i) => ({
    ...d,
    id: labelOrder ? `${d.label}` : `${i}`,
  }));
  const allLabelInData = data.map(d => `${d.label}`);
  const barOrder = labelOrder || dataWithId.map(d => `${d.id}`);
  const x = scaleBand()
    .domain(barOrder)
    .range([
      0,
      minBarThickness
        ? Math.max(graphWidth, minBarThickness * barOrder.length)
        : maxBarThickness
        ? Math.min(graphWidth, maxBarThickness * barOrder.length)
        : graphWidth,
    ])
    .paddingInner(barPadding);
  const yTicks = y.ticks(noOfTicks);
  return (
    <>
      <svg
        width={`${width}px`}
        height={`${height}px`}
        viewBox={`0 0 ${width} ${height}`}
        direction='ltr'
      >
        <g transform={`translate(${margin.left},${margin.top})`}>
          <line
            y1={y(xMinValue < 0 ? 0 : xMinValue)}
            y2={y(xMinValue < 0 ? 0 : xMinValue)}
            x1={0 - leftMargin}
            x2={graphWidth + margin.right}
            className='stroke-1 stroke-primary-gray-700 dark:stroke-primary-gray-300'
          />
          <text
            x={0 - leftMargin + 2}
            y={y(0)}
            style={{
              textAnchor: 'start',
            }}
            className='fill-primary-gray-700 dark:fill-primary-gray-300 text-xs'
            dy={-3}
          >
            0
          </text>
          {showTicks
            ? yTicks.map((d, i) => (
                <g key={i}>
                  <line
                    key={i}
                    y1={y(d)}
                    y2={y(d)}
                    x1={0 - leftMargin}
                    x2={graphWidth + margin.right}
                    className={`undp-tick-line stroke-primary-gray-500 dark:stroke-primary-gray-550 opacity-${
                      d === 0 ? 0 : 100
                    }`}
                  />
                  <text
                    x={0 - leftMargin + 2}
                    y={y(d)}
                    dy={-3}
                    style={{
                      textAnchor: 'start',
                    }}
                    className={`fill-primary-gray-550 dark:fill-primary-gray-500 text-xs opacity-${
                      d === 0 ? 0 : 100
                    }`}
                  >
                    {numberFormattingFunction(d, prefix, suffix)}
                  </text>
                </g>
              ))
            : null}
          {barAxisTitle ? (
            <text
              transform={`translate(${0 - leftMargin - 15}, ${
                graphHeight / 2
              }) rotate(-90)`}
              style={{
                textAnchor: 'middle',
              }}
              className='fill-primary-gray-700 dark:fill-primary-gray-300 text-xs'
            >
              {barAxisTitle}
            </text>
          ) : null}
          {dataWithId.map((d, i) =>
            !checkIfNullOrUndefined(x(d.id)) ? (
              <g
                className='undp-viz-g-with-hover'
                key={i}
                opacity={
                  selectedColor
                    ? d.color
                      ? barColor[colorDomain.indexOf(d.color)] === selectedColor
                        ? 1
                        : 0.3
                      : 0.3
                    : highlightedDataPoints.length !== 0
                    ? highlightedDataPoints.indexOf(d.label) !== -1
                      ? 0.85
                      : 0.3
                    : 0.85
                }
                onMouseEnter={(event: any) => {
                  setMouseOverData(d);
                  setEventY(event.clientY);
                  setEventX(event.clientX);
                  if (onSeriesMouseOver) {
                    onSeriesMouseOver(d);
                  }
                }}
                onClick={() => {
                  if (onSeriesMouseClick || detailsOnClick) {
                    if (
                      isEqual(mouseClickData, d) &&
                      resetSelectionOnDoubleClick
                    ) {
                      setMouseClickData(undefined);
                      onSeriesMouseClick?.(undefined);
                    } else {
                      setMouseClickData(d);
                      onSeriesMouseClick?.(d);
                    }
                  }
                }}
                onMouseMove={(event: any) => {
                  setMouseOverData(d);
                  setEventY(event.clientY);
                  setEventX(event.clientX);
                }}
                onMouseLeave={() => {
                  setMouseOverData(undefined);
                  setEventX(undefined);
                  setEventY(undefined);
                  if (onSeriesMouseOver) {
                    onSeriesMouseOver(undefined);
                  }
                }}
              >
                {d.size ? (
                  <rect
                    x={x(`${d.id}`)}
                    y={d.size > 0 ? y(d.size) : y(0)}
                    width={x.bandwidth()}
                    style={{
                      fill:
                        data.filter(el => el.color).length === 0
                          ? barColor[0]
                          : !d.color
                          ? UNDPColorModule.gray
                          : barColor[colorDomain.indexOf(d.color)],
                    }}
                    height={Math.abs(y(d.size) - y(0))}
                  />
                ) : null}
                {showLabels ? (
                  <text
                    x={(x(`${d.id}`) as number) + x.bandwidth() / 2}
                    y={y(0)}
                    style={{
                      textAnchor: 'middle',
                    }}
                    className='fill-primary-gray-700 dark:fill-primary-gray-300 text-xs'
                    dy={d.size ? (d.size >= 0 ? '15px' : '-5px') : '15px'}
                  >
                    {`${d.label}`.length < truncateBy
                      ? `${d.label}`
                      : `${`${d.label}`.substring(0, truncateBy)}...`}
                  </text>
                ) : null}
                {showValues ? (
                  <text
                    x={(x(`${d.id}`) as number) + x.bandwidth() / 2}
                    y={y(d.size || 0)}
                    style={{
                      ...(valueColor
                        ? { fill: valueColor }
                        : barColor.length > 1
                        ? {}
                        : { fill: barColor[0] }),
                      textAnchor: 'middle',
                    }}
                    className={`text-sm${
                      !valueColor && barColor.length > 1
                        ? ' fill-primary-gray-600 dark:fill-primary-gray-300'
                        : ''
                    }`}
                    dy={d.size ? (d.size >= 0 ? '-5px' : '15px') : '-5px'}
                  >
                    {numberFormattingFunction(d.size, prefix, suffix)}
                  </text>
                ) : null}
              </g>
            ) : null,
          )}
          {labelOrder && (showLabels || showValues)
            ? labelOrder
                .filter(d => allLabelInData.indexOf(d) === -1)
                .map((d, i) =>
                  !checkIfNullOrUndefined(x(d)) ? (
                    <g className='undp-viz-g-with-hover' key={i}>
                      {showLabels ? (
                        <text
                          x={(x(`${d}`) as number) + x.bandwidth() / 2}
                          y={y(0)}
                          style={{
                            textAnchor: 'middle',
                          }}
                          dy='15px'
                          className='fill-primary-gray-700 dark:fill-primary-gray-300 text-xs'
                        >
                          {`${d}`.length < truncateBy
                            ? `${d}`
                            : `${`${d}`.substring(0, truncateBy)}...`}
                        </text>
                      ) : null}
                      {showValues ? (
                        <text
                          x={(x(`${d}`) as number) + x.bandwidth() / 2}
                          y={y(0)}
                          style={{
                            ...(valueColor
                              ? { fill: valueColor }
                              : barColor.length > 1
                              ? {}
                              : { fill: barColor[0] }),
                            textAnchor: 'middle',
                          }}
                          className={`text-sm${
                            !valueColor && barColor.length > 1
                              ? ' fill-primary-gray-600 dark:fill-primary-gray-300'
                              : ''
                          }`}
                          dy='-5px'
                        >
                          {numberFormattingFunction(0, prefix, suffix)}
                        </text>
                      ) : null}
                    </g>
                  ) : null,
                )
            : null}
          {refValues ? (
            <>
              {refValues.map((el, i) => (
                <g key={i}>
                  <line
                    className={`undp-ref-line ${
                      !el.color
                        ? 'stroke-primary-gray-700 dark:stroke-primary-gray-300'
                        : ''
                    }`}
                    style={{
                      ...(el.color && { stroke: el.color }),
                    }}
                    y1={y(el.value as number)}
                    y2={y(el.value as number)}
                    x1={0 - margin.left}
                    x2={graphWidth + margin.right}
                  />
                  <text
                    x={graphWidth + margin.right}
                    y={y(el.value as number)}
                    style={{
                      ...(el.color && { fill: el.color }),
                      textAnchor: 'end',
                    }}
                    className={`text-xs font-bold${
                      !el.color
                        ? ' fill-primary-gray-700 dark:fill-primary-gray-300'
                        : ''
                    }`}
                    dy={-5}
                  >
                    {el.text}
                  </text>
                </g>
              ))}
            </>
          ) : null}
        </g>
      </svg>
      {mouseOverData && tooltip && eventX && eventY ? (
        <Tooltip
          data={mouseOverData}
          body={tooltip}
          xPos={eventX}
          yPos={eventY}
          backgroundStyle={tooltipBackgroundStyle}
        />
      ) : null}
      {detailsOnClick ? (
        <Modal
          open={mouseClickData !== undefined}
          onClose={() => {
            setMouseClickData(undefined);
          }}
        >
          <div
            className='m-0'
            // eslint-disable-next-line react/no-danger
            dangerouslySetInnerHTML={{
              __html: string2HTML(detailsOnClick, mouseClickData),
            }}
          />
        </Modal>
      ) : null}
    </>
  );
}
