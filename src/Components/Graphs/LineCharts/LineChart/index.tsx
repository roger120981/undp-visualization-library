import { useState, useRef, useEffect } from 'react';
import { Graph } from './Graph';
import {
  AnnotationSettingsDataType,
  BackgroundStyleDataType,
  CSSObject,
  CustomHighlightAreaSettingsDataType,
  Languages,
  LineChartDataType,
  ReferenceDataType,
  SourcesDataType,
} from '../../../../Types';
import { GraphFooter } from '../../../Elements/GraphFooter';
import { GraphHeader } from '../../../Elements/GraphHeader';
import { UNDPColorModule } from '../../../ColorPalette';
import { EmptyState } from '../../../Elements/EmptyState';

interface Props {
  data: LineChartDataType[];
  graphID?: string;
  color?: string;
  graphTitle?: string;
  graphDescription?: string;
  footNote?: string;
  width?: number;
  height?: number;
  suffix?: string;
  prefix?: string;
  sources?: SourcesDataType[];
  noOfXTicks?: number;
  dateFormat?: string;
  showValues?: boolean;
  backgroundColor?: string | boolean;
  padding?: string;
  leftMargin?: number;
  rightMargin?: number;
  topMargin?: number;
  bottomMargin?: number;
  relativeHeight?: number;
  tooltip?: string;
  onSeriesMouseOver?: (_d: any) => void;
  refValues?: ReferenceDataType[];
  highlightAreaSettings?: [number | string | null, number | string | null];
  maxValue?: number;
  minValue?: number;
  graphDownload?: boolean;
  dataDownload?: boolean;
  highlightAreaColor?: string;
  animateLine?: boolean | number;
  language?: Languages;
  minHeight?: number;
  strokeWidth?: number;
  showDots?: boolean;
  annotations?: AnnotationSettingsDataType[];
  customHighlightAreaSettings?: CustomHighlightAreaSettingsDataType[];
  mode?: 'light' | 'dark';
  regressionLine?: boolean | string;
  ariaLabel?: string;
  backgroundStyle?: BackgroundStyleDataType;
  tooltipBackgroundStyle?: CSSObject;
  yAxisTitle?: string;
  noOfYTicks?: number;
  minDate?: string | number;
  maxDate?: string | number;
}

export function SimpleLineChart(props: Props) {
  const {
    data,
    graphTitle,
    color,
    suffix = '',
    sources,
    prefix = '',
    graphDescription,
    height,
    width,
    footNote,
    noOfXTicks = 10,
    dateFormat = 'yyyy',
    showValues = false,
    padding,
    backgroundColor = false,
    leftMargin = 70,
    rightMargin = 30,
    topMargin = 20,
    bottomMargin = 25,
    relativeHeight,
    tooltip,
    onSeriesMouseOver,
    highlightAreaSettings = [null, null],
    graphID,
    minValue,
    maxValue,
    maxDate,
    minDate,
    graphDownload = false,
    dataDownload = false,
    highlightAreaColor = UNDPColorModule.light.grays['gray-300'],
    animateLine = false,
    language = 'en',
    refValues = [],
    minHeight = 0,
    strokeWidth = 2,
    showDots = true,
    annotations = [],
    customHighlightAreaSettings = [],
    mode = 'light',
    ariaLabel,
    backgroundStyle = {},
    regressionLine = false,
    tooltipBackgroundStyle,
    yAxisTitle,
    noOfYTicks = 5,
  } = props;
  const [svgWidth, setSvgWidth] = useState(0);
  const [svgHeight, setSvgHeight] = useState(0);

  const graphDiv = useRef<HTMLDivElement>(null);
  const graphParentDiv = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const resizeObserver = new ResizeObserver(entries => {
      setSvgWidth(width || entries[0].target.clientWidth || 620);
      setSvgHeight(height || entries[0].target.clientHeight || 480);
    });
    if (graphDiv.current) {
      setSvgHeight(graphDiv.current.clientHeight || 480);
      setSvgWidth(graphDiv.current.clientWidth || 620);
      if (!width) resizeObserver.observe(graphDiv.current);
    }
    return () => resizeObserver.disconnect();
  }, [width, height]);
  return (
    <div
      className={`${mode || 'light'} flex  ${
        width ? 'w-fit grow-0' : 'w-full grow'
      }`}
      dir={language === 'he' || language === 'ar' ? 'rtl' : undefined}
    >
      <div
        className={`${
          !backgroundColor
            ? 'bg-transparent '
            : backgroundColor === true
            ? 'bg-primary-gray-200 dark:bg-primary-gray-650 '
            : ''
        }ml-auto mr-auto flex flex-col grow h-inherit ${language || 'en'}`}
        style={{
          ...backgroundStyle,
          ...(backgroundColor && backgroundColor !== true
            ? { backgroundColor }
            : {}),
        }}
        id={graphID}
        ref={graphParentDiv}
        aria-label={
          ariaLabel ||
          `${
            graphTitle ? `The graph shows ${graphTitle}. ` : ''
          }This is a line chart that shows trends over time.${
            graphDescription ? ` ${graphDescription}` : ''
          }`
        }
      >
        <div
          className='flex grow'
          style={{
            padding: backgroundColor ? padding || '1rem' : padding || 0,
          }}
        >
          <div className='flex flex-col w-full gap-4 grow justify-between'>
            {graphTitle || graphDescription || graphDownload || dataDownload ? (
              <GraphHeader
                graphTitle={graphTitle}
                graphDescription={graphDescription}
                width={width}
                graphDownload={
                  graphDownload ? graphParentDiv.current : undefined
                }
                dataDownload={
                  dataDownload &&
                  data.map(d => d.data).filter(d => d !== undefined).length > 0
                    ? data.map(d => d.data).filter(d => d !== undefined)
                    : null
                }
              />
            ) : null}
            {data.length === 0 ? (
              <div className='grow flex flex-col justify-center gap-3 w-full'>
                <EmptyState />
              </div>
            ) : (
              <div
                className='flex flex-col grow justify-center leading-0'
                ref={graphDiv}
                aria-label='Graph area'
              >
                {(width || svgWidth) && (height || svgHeight) ? (
                  <Graph
                    data={data}
                    color={
                      color || UNDPColorModule[mode].primaryColors['blue-600']
                    }
                    width={width || svgWidth}
                    height={Math.max(
                      minHeight,
                      height ||
                        (relativeHeight
                          ? minHeight
                            ? (width || svgWidth) * relativeHeight > minHeight
                              ? (width || svgWidth) * relativeHeight
                              : minHeight
                            : (width || svgWidth) * relativeHeight
                          : svgHeight),
                    )}
                    suffix={suffix}
                    prefix={prefix}
                    dateFormat={dateFormat}
                    showValues={showValues}
                    noOfXTicks={noOfXTicks}
                    leftMargin={leftMargin}
                    rightMargin={rightMargin}
                    topMargin={topMargin}
                    bottomMargin={bottomMargin}
                    tooltip={tooltip}
                    highlightAreaSettings={highlightAreaSettings}
                    onSeriesMouseOver={onSeriesMouseOver}
                    refValues={refValues}
                    minValue={minValue}
                    maxValue={maxValue}
                    highlightAreaColor={highlightAreaColor}
                    animateLine={animateLine}
                    rtl={language === 'he' || language === 'ar'}
                    strokeWidth={strokeWidth}
                    showDots={showDots}
                    annotations={annotations}
                    customHighlightAreaSettings={customHighlightAreaSettings}
                    regressionLine={regressionLine}
                    tooltipBackgroundStyle={tooltipBackgroundStyle}
                    yAxisTitle={yAxisTitle}
                    noOfYTicks={noOfYTicks}
                    maxDate={maxDate}
                    minDate={minDate}
                  />
                ) : null}
              </div>
            )}
            {sources || footNote ? (
              <GraphFooter
                sources={sources}
                footNote={footNote}
                width={width}
              />
            ) : null}
          </div>
        </div>
      </div>
    </div>
  );
}
