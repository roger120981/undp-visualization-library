export const treeMapDataSchema = {
  type: 'array',
  items: {
    type: 'object',
    properties: {
      label: {
        oneOf: [{ type: 'string' }, { type: 'number' }],
      },
      size: {
        oneOf: [{ type: 'null' }, { type: 'number' }],
      },
      color: { type: 'string' },
      data: { type: 'object' },
    },
    required: ['label'],
  },
};

export const circlePackingDataSchema = {
  type: 'array',
  items: {
    type: 'object',
    properties: {
      label: {
        oneOf: [{ type: 'string' }, { type: 'number' }],
      },
      size: {
        oneOf: [{ type: 'null' }, { type: 'number' }],
      },
      color: { type: 'string' },
      data: { type: 'object' },
    },
    required: ['label'],
  },
};

export const butterflyChartDataSchema = {
  type: 'array',
  items: {
    type: 'object',
    properties: {
      label: {
        oneOf: [{ type: 'string' }, { type: 'number' }],
      },
      leftBar: {
        oneOf: [{ type: 'number' }, { type: 'null' }],
      },
      rightBar: {
        oneOf: [{ type: 'number' }, { type: 'null' }],
      },
      data: { type: 'object' },
    },
    required: ['label'],
  },
};

export const animatedButterflyChartDataSchema = {
  type: 'array',
  items: {
    type: 'object',
    properties: {
      label: {
        oneOf: [{ type: 'string' }, { type: 'number' }],
      },
      leftBar: {
        oneOf: [{ type: 'number' }, { type: 'null' }],
      },
      rightBar: {
        oneOf: [{ type: 'number' }, { type: 'null' }],
      },
      date: {
        oneOf: [{ type: 'string' }, { type: 'number' }],
      },
      data: { type: 'object' },
    },
    required: ['label', 'date'],
  },
};

export const barGraphDataSchema = {
  type: 'array',
  items: {
    type: 'object',
    properties: {
      label: {
        oneOf: [{ type: 'string' }, { type: 'number' }],
      },
      size: { type: ['number', 'null'] },
      color: { type: 'string' },
      data: { type: 'object' },
    },
    required: ['label'],
  },
};

export const groupedBarGraphDataSchema = {
  type: 'array',
  items: {
    type: 'object',
    properties: {
      label: {
        oneOf: [{ type: 'string' }, { type: 'number' }],
      },
      size: {
        type: 'array',
        items: { type: ['number', 'null'] },
      },
      data: { type: 'object' },
    },
    required: ['label', 'size'],
  },
};

export const stackedBarGraphDataSchema = {
  type: 'array',
  items: {
    type: 'object',
    properties: {
      label: {
        oneOf: [{ type: 'string' }, { type: 'number' }],
      },
      size: {
        type: 'array',
        items: { type: ['number', 'null'] },
      },
      data: { type: 'object' },
    },
    required: ['label', 'size'],
  },
};

export const animatedBarGraphDataSchema = {
  type: 'array',
  items: {
    type: 'object',
    properties: {
      label: {
        oneOf: [{ type: 'string' }, { type: 'number' }],
      },
      size: { type: ['number', 'null'] },
      date: {
        oneOf: [{ type: 'string' }, { type: 'number' }],
      },
      color: { type: 'string' },
      data: { type: 'object' },
    },
    required: ['label', 'date'],
  },
};

export const animatedGroupedBarGraphDataSchema = {
  type: 'array',
  items: {
    type: 'object',
    properties: {
      label: {
        oneOf: [{ type: 'string' }, { type: 'number' }],
      },
      size: {
        type: 'array',
        items: { type: ['number', 'null'] },
      },
      date: {
        oneOf: [{ type: 'string' }, { type: 'number' }],
      },
      data: { type: 'object' },
    },
    required: ['label', 'size', 'date'],
  },
};

export const animatedStackedBarGraphDataSchema = {
  type: 'array',
  items: {
    type: 'object',
    properties: {
      label: {
        oneOf: [{ type: 'string' }, { type: 'number' }],
      },
      size: {
        type: 'array',
        items: { type: ['number', 'null'] },
      },
      date: {
        oneOf: [{ type: 'string' }, { type: 'number' }],
      },
      data: { type: 'object' },
    },
    required: ['label', 'size', 'date'],
  },
};

export const dumbbellChartDataSchema = {
  type: 'array',
  items: {
    type: 'object',
    properties: {
      x: {
        type: 'array',
        items: { type: 'number' },
      },
      label: {
        oneOf: [{ type: 'string' }, { type: 'number' }],
      },
      data: { type: 'object' },
    },
    required: ['x', 'label'],
  },
};

export const unitChartDataSchema = {
  type: 'array',
  items: {
    type: 'object',
    properties: {
      label: {
        oneOf: [{ type: 'string' }, { type: 'number' }],
      },
      value: { type: 'number' },
      data: { type: 'object' },
    },
    required: ['value', 'label'],
  },
};

export const animatedDumbbellChartDataSchema = {
  type: 'array',
  items: {
    type: 'object',
    properties: {
      x: {
        type: 'array',
        items: [{ type: 'null' }, { type: 'number' }],
      },
      label: {
        oneOf: [{ type: 'string' }, { type: 'number' }],
      },
      date: {
        oneOf: [{ type: 'string' }, { type: 'number' }],
      },
      data: { type: 'object' },
    },
    required: ['x', 'label', 'date'],
  },
};

export const donutChartDataSchema = {
  type: 'array',
  items: {
    type: 'object',
    properties: {
      size: { type: 'number' },
      label: {
        oneOf: [{ type: 'string' }, { type: 'number' }],
      },
      data: { type: 'object' },
    },
    required: ['size', 'label'],
  },
};

export const histogramDataSchema = {
  type: 'array',
  items: {
    type: 'object',
    properties: {
      value: { type: 'number' },
      data: { type: 'object' },
    },
    required: ['value'],
  },
};

export const choroplethMapDataSchema = {
  type: 'array',
  items: {
    type: 'object',
    properties: {
      x: {
        oneOf: [{ type: 'number' }, { type: 'string' }, { type: 'null' }],
      },
      countryCode: { type: 'string' },
      data: { type: 'object' },
    },
    required: ['countryCode'],
  },
};

export const biVariateChoroplethMapDataSchema = {
  type: 'array',
  items: {
    type: 'object',
    properties: {
      x: { type: ['number', 'null'] },
      y: { type: ['number', 'null'] },
      countryCode: { type: 'string' },
      data: { type: 'object' },
    },
    required: ['countryCode'],
  },
};

export const animatedChoroplethMapDataSchema = {
  type: 'array',
  items: {
    type: 'object',
    properties: {
      x: {
        oneOf: [{ type: 'number' }, { type: 'string' }, { type: 'null' }],
      },
      countryCode: { type: 'string' },
      date: {
        oneOf: [{ type: 'string' }, { type: 'number' }],
      },
      data: { type: 'object' },
    },
    required: ['countryCode', 'date'],
  },
};

export const animatedBiVariateChoroplethMapDataSchema = {
  type: 'array',
  items: {
    type: 'object',
    properties: {
      x: { type: ['number', 'null'] },
      y: { type: ['number', 'null'] },
      countryCode: { type: 'string' },
      data: { type: 'object' },
      date: {
        oneOf: [{ type: 'string' }, { type: 'number' }],
      },
    },
    required: ['countryCode', 'date'],
  },
};

export const lineChartDataSchema = {
  type: 'array',
  items: {
    type: 'object',
    properties: {
      date: {
        oneOf: [{ type: 'number' }, { type: 'string' }],
      },
      y: { type: 'number' },
      data: { type: 'object' },
    },
    required: ['date', 'y'],
  },
};

export const multiLineChartDataSchema = {
  type: 'array',
  items: {
    type: 'object',
    properties: {
      date: {
        oneOf: [{ type: 'number' }, { type: 'string' }],
      },
      y: {
        type: 'array',
        items: { type: ['number', 'null'] },
      },
      data: { type: 'object' },
    },
    required: ['date', 'y'],
  },
};

export const areaChartDataSchema = {
  type: 'array',
  items: {
    type: 'object',
    properties: {
      date: {
        oneOf: [{ type: 'number' }, { type: 'string' }],
      },
      y: {
        type: 'array',
        items: { type: 'number' },
      },
      data: { type: 'object' },
    },
    required: ['date', 'y'],
  },
};

export const scatterPlotDataSchema = {
  type: 'array',
  items: {
    type: 'object',
    properties: {
      x: { type: ['number', 'null'] },
      y: { type: ['number', 'null'] },
      radius: { type: 'number' },
      color: { type: 'string' },
      label: {
        oneOf: [{ type: 'number' }, { type: 'string' }],
      },
      data: { type: 'object' },
    },
  },
};

export const animatedScatterPlotDataSchema = {
  type: 'array',
  items: {
    type: 'object',
    properties: {
      x: { type: ['number', 'null'] },
      y: { type: ['number', 'null'] },
      radius: { type: 'number' },
      color: { type: 'string' },
      date: {
        oneOf: [{ type: 'string' }, { type: 'number' }],
      },
      label: {
        oneOf: [{ type: 'number' }, { type: 'string' }],
      },
      data: { type: 'object' },
    },
    required: ['label', 'date'],
  },
};

export const dualAxisLineChartDataSchema = {
  type: 'array',
  items: {
    type: 'object',
    properties: {
      date: {
        oneOf: [{ type: 'number' }, { type: 'string' }],
      },
      y1: {
        oneOf: [{ type: 'number' }, { type: 'null' }],
      },
      y2: {
        oneOf: [{ type: 'number' }, { type: 'null' }],
      },
      data: { type: 'object' },
    },
    required: ['date'],
  },
};

export const paretoChartDataSchema = {
  type: 'array',
  items: {
    type: 'object',
    properties: {
      label: {
        oneOf: [{ type: 'number' }, { type: 'string' }],
      },
      bar: {
        oneOf: [{ type: 'number' }, { type: 'null' }],
      },
      line: {
        oneOf: [{ type: 'number' }, { type: 'null' }],
      },
      data: { type: 'object' },
    },
    required: ['label'],
  },
};

export const dotDensityMapDataSchema = {
  type: 'array',
  items: {
    type: 'object',
    properties: {
      lat: { type: 'number' },
      long: { type: 'number' },
      radius: { type: 'number' },
      color: {
        oneOf: [{ type: 'string' }, { type: 'number' }],
      },
      label: {
        oneOf: [{ type: 'string' }, { type: 'number' }],
      },
      data: { type: 'object' },
    },
    required: ['lat', 'long'],
  },
};

export const animatedDotDensityMapDataSchema = {
  type: 'array',
  items: {
    type: 'object',
    properties: {
      lat: { type: 'number' },
      long: { type: 'number' },
      radius: { type: 'number' },
      color: {
        oneOf: [{ type: 'string' }, { type: 'number' }],
      },
      label: {
        oneOf: [{ type: 'string' }, { type: 'number' }],
      },
      date: {
        oneOf: [{ type: 'string' }, { type: 'number' }],
      },
      data: { type: 'object' },
    },
    required: ['lat', 'long', 'date'],
  },
};

export const slopeChartDataSchema = {
  type: 'array',
  items: {
    type: 'object',
    properties: {
      y1: { type: 'number' },
      y2: { type: 'number' },
      color: {
        oneOf: [{ type: 'string' }, { type: 'number' }],
      },
      label: {
        oneOf: [{ type: 'string' }, { type: 'number' }],
      },
      data: { type: 'object' },
    },
    required: ['y1', 'y2', 'label'],
  },
};

export const heatMapDataSchema = {
  type: 'array',
  items: {
    type: 'object',
    properties: {
      row: { type: 'string' },
      column: { type: 'string' },
      value: {
        oneOf: [{ type: 'string' }, { type: 'number' }, { type: 'null' }],
      },
      data: { type: 'object' },
    },
    required: ['row', 'column'],
  },
};

export const beeSwarmChartDataSchema = {
  type: 'array',
  items: {
    type: 'object',
    properties: {
      label: {
        oneOf: [{ type: 'string' }, { type: 'number' }],
      },
      position: { type: 'number' },
      radius: { type: 'number' },
      color: { type: 'string' },
      data: { type: 'object' },
    },
    required: ['label', 'position'],
  },
};

export const stripChartDataSchema = {
  type: 'array',
  items: {
    type: 'object',
    properties: {
      label: {
        oneOf: [{ type: 'string' }, { type: 'number' }],
      },
      position: { type: 'number' },
      color: { type: 'string' },
      data: { type: 'object' },
    },
    required: ['label', 'position'],
  },
};

export const statCardDataSchema = {
  type: 'array',
  items: {
    type: 'object',
    properties: {
      value: {
        oneOf: [{ type: 'string' }, { type: 'number' }],
      },
      data: { type: 'object' },
    },
    required: ['value'],
  },
};

export const simpleBarChartSettingsSchema = {
  type: 'object',
  properties: {
    colors: {
      oneOf: [{ type: 'string' }, { type: 'array', items: { type: 'string' } }],
    },
    labelOrder: {
      type: 'array',
      items: { type: 'string' },
    },
    graphTitle: { type: 'string' },
    graphDescription: { type: 'string' },
    footNote: { type: 'string' },
    sourceLink: { type: 'string' },
    width: { type: 'number' },
    height: { type: 'number' },
    suffix: { type: 'string' },
    prefix: { type: 'string' },
    source: { type: 'string' },
    barPadding: { type: 'number' },
    showValues: { type: 'boolean' },
    showTicks: { type: 'boolean' },
    leftMargin: { type: 'number' },
    rightMargin: { type: 'number' },
    truncateBy: { type: 'number' },
    colorDomain: {
      type: 'array',
      items: { type: 'string' },
    },
    colorLegendTitle: { type: 'string' },
    backgroundColor: {
      oneOf: [{ type: 'string' }, { type: 'boolean' }],
    },
    padding: { type: 'string' },
    topMargin: { type: 'number' },
    bottomMargin: { type: 'number' },
    relativeHeight: { type: 'number' },
    minHeight: { type: 'number' },
    showLabels: { type: 'boolean' },
    showColorScale: { type: 'boolean' },
    maxValue: { type: 'number' },
    minValue: { type: 'number' },
    tooltip: { type: 'string' },
    refValues: {
      type: 'array',
      items: { $ref: '#/definitions/ReferenceDataType' },
    },
    graphID: { type: 'string' },
    highlightedDataPoints: {
      type: 'array',
      items: {
        oneOf: [{ type: 'string' }, { type: 'number' }],
      },
    },
    graphDownload: { type: 'boolean' },
    dataDownload: { type: 'boolean' },
    showNAColor: { type: 'boolean' },
    sortData: {
      type: 'string',
      enum: ['asc', 'desc'],
    },
    rtl: { type: 'boolean' },
    language: {
      type: 'string',
      enum: ['ar', 'he', 'en'],
    },
  },
  definitions: {
    ReferenceDataType: {
      type: 'object',
      properties: {
        value: {
          oneOf: [{ type: 'number' }, { type: 'null' }],
        },
        text: { type: 'string' },
        color: { type: 'string' },
      },
      required: ['value', 'text'],
    },
  },
};

export const groupedBarChartSettingsSchema = {
  type: 'object',
  properties: {
    colors: {
      type: 'array',
      items: { type: 'string' },
    },
    labelOrder: {
      type: 'array',
      items: { type: 'string' },
    },
    graphTitle: { type: 'string' },
    graphDescription: { type: 'string' },
    footNote: { type: 'string' },
    sourceLink: { type: 'string' },
    width: { type: 'number' },
    height: { type: 'number' },
    source: { type: 'string' },
    barPadding: { type: 'number' },
    showTicks: { type: 'boolean' },
    truncateBy: { type: 'number' },
    colorDomain: {
      type: 'array',
      items: { type: 'string' },
    },
    colorLegendTitle: { type: 'string' },
    suffix: { type: 'string' },
    prefix: { type: 'string' },
    showValues: { type: 'boolean' },
    backgroundColor: {
      oneOf: [{ type: 'string' }, { type: 'boolean' }],
    },
    padding: { type: 'string' },
    leftMargin: { type: 'number' },
    rightMargin: { type: 'number' },
    topMargin: { type: 'number' },
    bottomMargin: { type: 'number' },
    relativeHeight: { type: 'number' },
    minHeight: { type: 'number' },
    showLabels: { type: 'boolean' },
    tooltip: { type: 'string' },
    refValues: {
      type: 'array',
      items: { $ref: '#/definitions/ReferenceDataType' },
    },
    graphID: { type: 'string' },
    maxValue: { type: 'number' },
    minValue: { type: 'number' },
    graphDownload: { type: 'boolean' },
    dataDownload: { type: 'boolean' },
    rtl: { type: 'boolean' },
    language: {
      type: 'string',
      enum: ['ar', 'he', 'en'],
    },
  },
  required: ['colorDomain'],
  definitions: {
    ReferenceDataType: {
      type: 'object',
      properties: {
        value: {
          oneOf: [{ type: 'number' }, { type: 'null' }],
        },
        text: { type: 'string' },
        color: { type: 'string' },
      },
      required: ['value', 'text'],
    },
  },
};

export const stackedBarChartSettingsSchema = {
  type: 'object',
  properties: {
    colors: {
      type: 'array',
      items: { type: 'string' },
    },
    labelOrder: {
      type: 'array',
      items: { type: 'string' },
    },
    graphTitle: { type: 'string' },
    graphDescription: { type: 'string' },
    footNote: { type: 'string' },
    sourceLink: { type: 'string' },
    width: { type: 'number' },
    height: { type: 'number' },
    source: { type: 'string' },
    barPadding: { type: 'number' },
    showTicks: { type: 'boolean' },
    leftMargin: { type: 'number' },
    rightMargin: { type: 'number' },
    truncateBy: { type: 'number' },
    colorDomain: {
      type: 'array',
      items: { type: 'string' },
    },
    colorLegendTitle: { type: 'string' },
    backgroundColor: {
      oneOf: [{ type: 'string' }, { type: 'boolean' }],
    },
    padding: { type: 'string' },
    topMargin: { type: 'number' },
    bottomMargin: { type: 'number' },
    suffix: { type: 'string' },
    prefix: { type: 'string' },
    showValues: { type: 'boolean' },
    showLabels: { type: 'boolean' },
    relativeHeight: { type: 'number' },
    minHeight: { type: 'number' },
    tooltip: { type: 'string' },
    refValues: {
      type: 'array',
      items: { $ref: '#/definitions/ReferenceDataType' },
    },
    graphID: { type: 'string' },
    maxValue: { type: 'number' },
    graphDownload: { type: 'boolean' },
    dataDownload: { type: 'boolean' },
    rtl: { type: 'boolean' },
    language: {
      type: 'string',
      enum: ['ar', 'he', 'en'],
    },
  },
  required: ['colorDomain'],
  definitions: {
    ReferenceDataType: {
      type: 'object',
      properties: {
        value: {
          oneOf: [{ type: 'number' }, { type: 'null' }],
        },
        text: { type: 'string' },
        color: { type: 'string' },
      },
      required: ['value', 'text'],
    },
  },
};

export const beeSwarmChartSettingsSchema = {
  type: 'object',
  properties: {
    colors: {
      oneOf: [{ type: 'string' }, { type: 'array', items: { type: 'string' } }],
    },
    graphTitle: { type: 'string' },
    graphDescription: { type: 'string' },
    footNote: { type: 'string' },
    sourceLink: { type: 'string' },
    width: { type: 'number' },
    height: { type: 'number' },
    source: { type: 'string' },
    showTicks: { type: 'boolean' },
    leftMargin: { type: 'number' },
    rightMargin: { type: 'number' },
    colorDomain: {
      type: 'array',
      items: { type: 'string' },
    },
    colorLegendTitle: { type: 'string' },
    backgroundColor: {
      oneOf: [{ type: 'string' }, { type: 'boolean' }],
    },
    padding: { type: 'string' },
    topMargin: { type: 'number' },
    bottomMargin: { type: 'number' },
    relativeHeight: { type: 'number' },
    minHeight: { type: 'number' },
    showLabels: { type: 'boolean' },
    showColorScale: { type: 'boolean' },
    tooltip: { type: 'string' },
    refValues: {
      type: 'array',
      items: { $ref: '#/definitions/ReferenceDataType' },
    },
    graphID: { type: 'string' },
    radius: { type: 'number' },
    maxRadiusValue: { type: 'number' },
    maxPositionValue: { type: 'number' },
    minPositionValue: { type: 'number' },
    highlightedDataPoints: {
      type: 'array',
      items: {
        oneOf: [{ type: 'string' }, { type: 'number' }],
      },
    },
    graphDownload: { type: 'boolean' },
    dataDownload: { type: 'boolean' },
    rtl: { type: 'boolean' },
    showNAColor: { type: 'boolean' },
    language: {
      type: 'string',
      enum: ['ar', 'he', 'en'],
    },
  },
  definitions: {
    ReferenceDataType: {
      type: 'object',
      properties: {
        value: {
          oneOf: [{ type: 'number' }, { type: 'null' }],
        },
        text: { type: 'string' },
        color: { type: 'string' },
      },
      required: ['value', 'text'],
    },
  },
};

export const butterflyChartSettingsSchema = {
  type: 'object',
  properties: {
    graphTitle: { type: 'string' },
    graphDescription: { type: 'string' },
    leftBarTitle: { type: 'string' },
    rightBarTitle: { type: 'string' },
    footNote: { type: 'string' },
    sourceLink: { type: 'string' },
    width: { type: 'number' },
    height: { type: 'number' },
    source: { type: 'string' },
    backgroundColor: {
      oneOf: [{ type: 'string' }, { type: 'boolean' }],
    },
    padding: { type: 'string' },
    leftMargin: { type: 'number' },
    rightMargin: { type: 'number' },
    topMargin: { type: 'number' },
    bottomMargin: { type: 'number' },
    barColors: {
      type: 'array',
      items: { type: 'string' },
      minItems: 2,
      maxItems: 2,
    },
    relativeHeight: { type: 'number' },
    minHeight: { type: 'number' },
    tooltip: { type: 'string' },
    graphID: { type: 'string' },
    graphDownload: { type: 'boolean' },
    dataDownload: { type: 'boolean' },
    barPadding: { type: 'number' },
    truncateBy: { type: 'number' },
    suffix: { type: 'string' },
    prefix: { type: 'string' },
    showTicks: { type: 'boolean' },
    showValues: { type: 'boolean' },
    centerGap: { type: 'number' },
    maxValue: { type: 'number' },
    minValue: { type: 'number' },
    showColorScale: { type: 'boolean' },
    refValues: {
      type: 'array',
      items: { $ref: '#/definitions/ReferenceDataType' },
    },
    rtl: { type: 'boolean' },
    language: {
      type: 'string',
      enum: ['ar', 'he', 'en'],
    },
  },
  definitions: {
    ReferenceDataType: {
      type: 'object',
      properties: {
        value: {
          oneOf: [{ type: 'number' }, { type: 'null' }],
        },
        text: { type: 'string' },
        color: { type: 'string' },
      },
      required: ['value', 'text'],
    },
  },
};

export const circlePackingSettingsSchema = {
  type: 'object',
  properties: {
    colors: {
      oneOf: [
        { type: 'string' },
        {
          type: 'array',
          items: { type: 'string' },
        },
      ],
    },
    graphTitle: { type: 'string' },
    graphDescription: { type: 'string' },
    footNote: { type: 'string' },
    sourceLink: { type: 'string' },
    width: { type: 'number' },
    height: { type: 'number' },
    suffix: { type: 'string' },
    prefix: { type: 'string' },
    source: { type: 'string' },
    leftMargin: { type: 'number' },
    rightMargin: { type: 'number' },
    colorDomain: {
      type: 'array',
      items: { type: 'string' },
    },
    colorLegendTitle: { type: 'string' },
    backgroundColor: {
      oneOf: [{ type: 'string' }, { type: 'boolean' }],
    },
    padding: { type: 'string' },
    topMargin: { type: 'number' },
    bottomMargin: { type: 'number' },
    relativeHeight: { type: 'number' },
    minHeight: { type: 'number' },
    showLabels: { type: 'boolean' },
    tooltip: { type: 'string' },
    showColorScale: { type: 'boolean' },
    showValues: { type: 'boolean' },
    graphID: { type: 'string' },
    showNAColor: { type: 'boolean' },
    highlightedDataPoints: {
      type: 'array',
      items: {
        oneOf: [{ type: 'string' }, { type: 'number' }],
      },
    },
    graphDownload: { type: 'boolean' },
    dataDownload: { type: 'boolean' },
    rtl: { type: 'boolean' },
    language: {
      type: 'string',
      enum: ['ar', 'he', 'en'],
    },
  },
};

export const dataTableSettingsSchema = {
  type: 'object',
  properties: {
    graphTitle: { type: 'string' },
    source: { type: 'string' },
    graphDescription: { type: 'string' },
    sourceLink: { type: 'string' },
    footNote: { type: 'string' },
    graphID: { type: 'string' },
    width: { type: 'number' },
    height: { type: 'number' },
    columnData: {
      type: 'array',
      items: { $ref: '#/definitions/DataTableColumnType' },
    },
  },
  required: ['columnData'],
  definitions: {
    DataTableColumnType: {
      type: 'object',
      properties: {
        columnTitle: { type: 'string' },
        columnId: { type: 'string' },
        sortable: { type: 'boolean' },
        filterOptions: {
          type: 'array',
          items: { type: 'string' },
        },
        rtl: { type: 'boolean' },
        language: {
          type: 'string',
          enum: ['ar', 'he', 'en'],
        },
        chip: { type: 'boolean' },
        chipColors: {
          type: 'array',
          items: {
            type: 'object',
            properties: {
              value: { type: 'string' },
              color: { type: 'string' },
            },
            required: ['value', 'color'],
          },
        },
        separator: { type: 'string' },
        align: {
          type: 'string',
          enum: ['left', 'right', 'center'],
        },
        suffix: { type: 'string' },
        prefix: { type: 'string' },
        columnWidth: { type: 'number' },
      },
      required: ['columnId'],
    },
  },
};

export const donutChartSettingsSchema = {
  type: 'object',
  properties: {
    mainText: { type: 'string' },
    colors: {
      oneOf: [
        { type: 'string' },
        {
          type: 'array',
          items: { type: 'string' },
        },
      ],
    },
    graphTitle: { type: 'string' },
    suffix: { type: 'string' },
    prefix: { type: 'string' },
    source: { type: 'string' },
    graphDescription: { type: 'string' },
    sourceLink: { type: 'string' },
    subNote: { type: 'string' },
    footNote: { type: 'string' },
    radius: { type: 'number' },
    strokeWidth: { type: 'number' },
    graphLegend: { type: 'boolean' },
    backgroundColor: {
      oneOf: [{ type: 'string' }, { type: 'boolean' }],
    },
    padding: { type: 'string' },
    tooltip: { type: 'string' },
    graphID: { type: 'string' },
    graphDownload: { type: 'boolean' },
    dataDownload: { type: 'boolean' },
    colorDomain: {
      type: 'array',
      items: { type: 'string' },
    },
    sortData: {
      type: 'string',
      enum: ['asc', 'desc'],
    },
    rtl: { type: 'boolean' },
    language: {
      type: 'string',
      enum: ['ar', 'he', 'en'],
    },
  },
};

export const dumbbellChartSettingsSchema = {
  type: 'object',
  properties: {
    colors: {
      type: 'array',
      items: { type: 'string' },
    },
    graphTitle: { type: 'string' },
    graphDescription: { type: 'string' },
    footNote: { type: 'string' },
    sourceLink: { type: 'string' },
    width: { type: 'number' },
    height: { type: 'number' },
    suffix: { type: 'string' },
    prefix: { type: 'string' },
    source: { type: 'string' },
    barPadding: { type: 'number' },
    showValues: { type: 'boolean' },
    showTicks: { type: 'boolean' },
    leftMargin: { type: 'number' },
    rightMargin: { type: 'number' },
    topMargin: { type: 'number' },
    bottomMargin: { type: 'number' },
    truncateBy: { type: 'number' },
    colorDomain: {
      type: 'array',
      items: { type: 'string' },
    },
    colorLegendTitle: { type: 'string' },
    backgroundColor: {
      oneOf: [{ type: 'string' }, { type: 'boolean' }],
    },
    padding: { type: 'string' },
    radius: { type: 'number' },
    relativeHeight: { type: 'number' },
    minHeight: { type: 'number' },
    showLabels: { type: 'boolean' },
    tooltip: { type: 'string' },
    graphID: { type: 'string' },
    maxPositionValue: { type: 'number' },
    minPositionValue: { type: 'number' },
    graphDownload: { type: 'boolean' },
    dataDownload: { type: 'boolean' },
    rtl: { type: 'boolean' },
    language: {
      type: 'string',
      enum: ['ar', 'he', 'en'],
    },
    sortParameter: {
      oneOf: [{ type: 'string', enum: ['diff'] }, { type: 'number' }],
    },
    arrowConnector: { type: 'boolean' },
    connectorStrokeWidth: { type: 'number' },
  },
  required: ['colorDomain'],
};

export const heatMapSettingsSchema = {
  type: 'object',
  properties: {
    colors: {
      type: 'array',
      items: { type: 'string' },
    },
    graphTitle: { type: 'string' },
    graphDescription: { type: 'string' },
    footNote: { type: 'string' },
    sourceLink: { type: 'string' },
    width: { type: 'number' },
    height: { type: 'number' },
    source: { type: 'string' },
    scaleType: { type: 'string', enum: ['linear', 'categorical', 'threshold'] },
    domain: {
      oneOf: [
        {
          type: 'array',
          items: { type: 'number' },
        },
        {
          type: 'array',
          items: { type: 'string' },
        },
      ],
    },
    showColumnLabels: { type: 'boolean' },
    leftMargin: { type: 'number' },
    rightMargin: { type: 'number' },
    truncateBy: { type: 'number' },
    colorLegendTitle: { type: 'string' },
    backgroundColor: {
      oneOf: [{ type: 'string' }, { type: 'boolean' }],
    },
    padding: { type: 'string' },
    topMargin: { type: 'number' },
    bottomMargin: { type: 'number' },
    suffix: { type: 'string' },
    prefix: { type: 'string' },
    showValues: { type: 'boolean' },
    showRowLabels: { type: 'boolean' },
    relativeHeight: { type: 'number' },
    minHeight: { type: 'number' },
    tooltip: { type: 'string' },
    graphID: { type: 'string' },
    noDataColor: { type: 'string' },
    showColorScale: { type: 'boolean' },
    graphDownload: { type: 'boolean' },
    dataDownload: { type: 'boolean' },
    fillContainer: { type: 'boolean' },
    showNAColor: { type: 'boolean' },
    rtl: { type: 'boolean' },
    language: {
      type: 'string',
      enum: ['ar', 'he', 'en'],
    },
  },
  required: ['domain'],
};

export const histogramSettingsSchema = {
  type: 'object',
  properties: {
    color: {
      oneOf: [
        { type: 'string' },
        {
          type: 'array',
          items: { type: 'string' },
        },
      ],
    },
    graphTitle: { type: 'string' },
    graphDescription: { type: 'string' },
    footNote: { type: 'string' },
    sourceLink: { type: 'string' },
    width: { type: 'number' },
    height: { type: 'number' },
    source: { type: 'string' },
    barPadding: { type: 'number' },
    showValues: { type: 'boolean' },
    showTicks: { type: 'boolean' },
    leftMargin: { type: 'number' },
    rightMargin: { type: 'number' },
    backgroundColor: {
      oneOf: [{ type: 'string' }, { type: 'boolean' }],
    },
    padding: { type: 'string' },
    topMargin: { type: 'number' },
    bottomMargin: { type: 'number' },
    relativeHeight: { type: 'number' },
    minHeight: { type: 'number' },
    showLabels: { type: 'boolean' },
    maxValue: { type: 'number' },
    tooltip: { type: 'string' },
    refValues: {
      type: 'array',
      items: { $ref: '#/definitions/ReferenceDataType' },
    },
    graphID: { type: 'string' },
    graphDownload: { type: 'boolean' },
    dataDownload: { type: 'boolean' },
    numberOfBins: { type: 'number' },
    truncateBy: { type: 'number' },
    donutStrokeWidth: { type: 'number' },
    sortData: {
      type: 'string',
      enum: ['asc', 'desc'],
    },
    barGraphLayout: {
      type: 'string',
      enum: ['horizontal', 'vertical'],
    },
    graphType: {
      type: 'string',
      enum: ['circlePacking', 'treeMap', 'barGraph', 'donutChart'],
    },
    rtl: { type: 'boolean' },
    language: {
      type: 'string',
      enum: ['ar', 'he', 'en'],
    },
  },
  required: ['color', 'graphType'],
  definitions: {
    ReferenceDataType: {
      type: 'object',
      properties: {
        value: { type: ['number', 'null'] },
        text: { type: 'string' },
        color: { type: 'string' },
      },
      required: ['value', 'text'],
    },
  },
};

export const dualAxisLineChartSettingsSchema = {
  type: 'object',
  properties: {
    graphTitle: { type: 'string' },
    graphDescription: { type: 'string' },
    lineTitles: {
      type: 'array',
      items: { type: 'string' },
      minItems: 2,
      maxItems: 2,
    },
    footNote: { type: 'string' },
    sourceLink: { type: 'string' },
    width: { type: 'number' },
    height: { type: 'number' },
    suffix: { type: 'string' },
    prefix: { type: 'string' },
    source: { type: 'string' },
    noOfXTicks: { type: 'number' },
    dateFormat: { type: 'string' },
    showValues: { type: 'boolean' },
    backgroundColor: {
      oneOf: [{ type: 'string' }, { type: 'boolean' }],
    },
    padding: { type: 'string' },
    leftMargin: { type: 'number' },
    rightMargin: { type: 'number' },
    topMargin: { type: 'number' },
    bottomMargin: { type: 'number' },
    lineColors: {
      type: 'array',
      items: { type: 'string' },
      minItems: 2,
      maxItems: 2,
    },
    sameAxes: { type: 'boolean' },
    relativeHeight: { type: 'number' },
    minHeight: { type: 'number' },
    tooltip: { type: 'string' },
    highlightAreaSettings: {
      type: 'array',
      items: {
        oneOf: [{ type: 'number' }, { type: 'null' }],
      },
      minItems: 2,
      maxItems: 2,
    },
    graphID: { type: 'string' },
    graphDownload: { type: 'boolean' },
    dataDownload: { type: 'boolean' },
    highlightAreaColor: { type: 'string' },
    rtl: { type: 'boolean' },
    language: {
      type: 'string',
      enum: ['ar', 'he', 'en'],
    },
    animateLine: {
      oneOf: [{ type: 'number' }, { type: 'boolean' }],
    },
  },
};

export const lineChartSettingsSchema = {
  type: 'object',
  properties: {
    graphID: { type: 'string' },
    color: { type: 'string' },
    graphTitle: { type: 'string' },
    graphDescription: { type: 'string' },
    footNote: { type: 'string' },
    sourceLink: { type: 'string' },
    width: { type: 'number' },
    height: { type: 'number' },
    suffix: { type: 'string' },
    prefix: { type: 'string' },
    source: { type: 'string' },
    noOfXTicks: { type: 'number' },
    dateFormat: { type: 'string' },
    showValues: { type: 'boolean' },
    backgroundColor: {
      oneOf: [{ type: 'string' }, { type: 'boolean' }],
    },
    padding: { type: 'string' },
    leftMargin: { type: 'number' },
    rightMargin: { type: 'number' },
    topMargin: { type: 'number' },
    bottomMargin: { type: 'number' },
    relativeHeight: { type: 'number' },
    minHeight: { type: 'number' },
    tooltip: { type: 'string' },
    refValues: {
      type: 'array',
      items: { $ref: '#/definitions/ReferenceDataType' },
    },
    highlightAreaSettings: {
      type: 'array',
      items: {
        oneOf: [{ type: 'number' }, { type: 'null' }],
      },
      minItems: 2,
      maxItems: 2,
    },
    maxValue: { type: 'number' },
    minValue: { type: 'number' },
    graphDownload: { type: 'boolean' },
    dataDownload: { type: 'boolean' },
    highlightAreaColor: { type: 'string' },
    rtl: { type: 'boolean' },
    language: {
      type: 'string',
      enum: ['ar', 'he', 'en'],
    },
    animateLine: {
      oneOf: [{ type: 'number' }, { type: 'boolean' }],
    },
  },
  definitions: {
    ReferenceDataType: {
      type: 'object',
      properties: {
        value: { type: ['number', 'null'] },
        text: { type: 'string' },
        color: { type: 'string' },
      },
      required: ['value', 'text'],
    },
  },
};

export const multiLineChartSettingsSchema = {
  type: 'object',
  properties: {
    colors: {
      type: 'array',
      items: { type: 'string' },
    },
    graphTitle: { type: 'string' },
    graphDescription: { type: 'string' },
    footNote: { type: 'string' },
    sourceLink: { type: 'string' },
    width: { type: 'number' },
    height: { type: 'number' },
    source: { type: 'string' },
    noOfXTicks: { type: 'number' },
    dateFormat: { type: 'string' },
    suffix: { type: 'string' },
    prefix: { type: 'string' },
    labels: {
      type: 'array',
      items: { type: 'string' },
      minItems: 1,
    },
    backgroundColor: {
      oneOf: [{ type: 'string' }, { type: 'boolean' }],
    },
    padding: { type: 'string' },
    leftMargin: { type: 'number' },
    rightMargin: { type: 'number' },
    topMargin: { type: 'number' },
    bottomMargin: { type: 'number' },
    showValues: { type: 'boolean' },
    relativeHeight: { type: 'number' },
    minHeight: { type: 'number' },
    showColorLegendAtTop: { type: 'boolean' },
    tooltip: { type: 'string' },
    refValues: {
      type: 'array',
      items: { $ref: '#/definitions/ReferenceDataType' },
    },
    highlightAreaSettings: {
      type: 'array',
      items: {
        oneOf: [{ type: 'number' }, { type: 'null' }],
      },
      minItems: 2,
      maxItems: 2,
    },
    graphID: { type: 'string' },
    maxValue: { type: 'number' },
    minValue: { type: 'number' },
    highlightedLines: {
      type: 'array',
      items: { type: 'string' },
    },
    graphDownload: { type: 'boolean' },
    dataDownload: { type: 'boolean' },
    highlightAreaColor: { type: 'string' },
    rtl: { type: 'boolean' },
    language: {
      type: 'string',
      enum: ['ar', 'he', 'en'],
    },
    animateLine: {
      oneOf: [{ type: 'number' }, { type: 'boolean' }],
    },
  },
  required: ['labels'],
  definitions: {
    ReferenceDataType: {
      type: 'object',
      properties: {
        value: { type: ['number', 'null'] },
        text: { type: 'string' },
        color: { type: 'string' },
      },
      required: ['text'],
    },
  },
};

export const sparkLineSettingsSchema = {
  type: 'object',
  properties: {
    color: { type: 'string' },
    graphTitle: { type: 'string' },
    graphDescription: { type: 'string' },
    footNote: { type: 'string' },
    sourceLink: { type: 'string' },
    width: { type: 'number' },
    height: { type: 'number' },
    source: { type: 'string' },
    dateFormat: { type: 'string' },
    areaId: { type: 'string' },
    backgroundColor: {
      oneOf: [{ type: 'string' }, { type: 'boolean' }],
    },
    padding: { type: 'string' },
    leftMargin: { type: 'number' },
    rightMargin: { type: 'number' },
    topMargin: { type: 'number' },
    bottomMargin: { type: 'number' },
    relativeHeight: { type: 'number' },
    minHeight: { type: 'number' },
    tooltip: { type: 'string' },
    graphID: { type: 'string' },
    maxValue: { type: 'number' },
    minValue: { type: 'number' },
    graphDownload: { type: 'boolean' },
    dataDownload: { type: 'boolean' },
    rtl: { type: 'boolean' },
    language: {
      type: 'string',
      enum: ['ar', 'he', 'en'],
    },
  },
};

export const choroplethMapSettingsSchema = {
  type: 'object',
  properties: {
    graphTitle: { type: 'string' },
    mapData: { oneOf: [{ type: 'object' }, { type: 'string' }] },
    graphDescription: { type: 'string' },
    footNote: { type: 'string' },
    sourceLink: { type: 'string' },
    width: { type: 'number' },
    height: { type: 'number' },
    source: { type: 'string' },
    domain: {
      oneOf: [
        {
          type: 'array',
          items: { type: 'number' },
          minItems: 1,
        },
        {
          type: 'array',
          items: { type: 'string' },
          minItems: 1,
        },
      ],
    },
    colors: {
      type: 'array',
      items: { type: 'string' },
    },
    colorLegendTitle: { type: 'string' },
    categorical: { type: 'boolean' },
    scale: { type: 'number' },
    centerPoint: {
      type: 'array',
      items: { type: 'number' },
      minItems: 2,
      maxItems: 2,
    },
    backgroundColor: {
      oneOf: [{ type: 'string' }, { type: 'boolean' }],
    },
    mapBorderWidth: { type: 'number' },
    mapNoDataColor: { type: 'string' },
    mapBorderColor: { type: 'string' },
    relativeHeight: { type: 'number' },
    minHeight: { type: 'number' },
    padding: { type: 'string' },
    isWorldMap: { type: 'boolean' },
    tooltip: { type: 'string' },
    showColorScale: { type: 'boolean' },
    zoomScaleExtend: {
      type: 'array',
      items: { type: 'number' },
      minItems: 2,
      maxItems: 2,
    },
    zoomTranslateExtend: {
      type: 'array',
      items: {
        type: 'array',
        items: { type: 'number' },
        minItems: 2,
        maxItems: 2,
      },
      minItems: 2,
      maxItems: 2,
    },
    graphID: { type: 'string' },
    highlightedCountryCodes: {
      type: 'array',
      items: { type: 'string' },
    },
    graphDownload: { type: 'boolean' },
    dataDownload: { type: 'boolean' },
    mapProperty: { type: 'string' },
    showAntarctica: { type: 'boolean' },
    rtl: { type: 'boolean' },
    language: {
      type: 'string',
      enum: ['ar', 'he', 'en'],
    },
  },
  required: ['domain'],
};

export const biVariateChoroplethMapSettingsSchema = {
  type: 'object',
  properties: {
    mapData: { oneOf: [{ type: 'object' }, { type: 'string' }] },
    graphTitle: { type: 'string' },
    graphDescription: { type: 'string' },
    footNote: { type: 'string' },
    sourceLink: { type: 'string' },
    width: { type: 'number' },
    height: { type: 'number' },
    source: { type: 'string' },
    xColorLegendTitle: { type: 'string' },
    yColorLegendTitle: { type: 'string' },
    xDomain: {
      type: 'array',
      items: { type: 'number' },
      minItems: 4,
      maxItems: 4,
    },
    yDomain: {
      type: 'array',
      items: { type: 'number' },
      minItems: 4,
      maxItems: 4,
    },
    colors: {
      type: 'array',
      items: {
        type: 'array',
        items: { type: 'string' },
        minItems: 5,
        maxItems: 5,
      },
      minItems: 5,
      maxItems: 5,
    },
    scale: { type: 'number' },
    centerPoint: {
      type: 'array',
      items: { type: 'number' },
      minItems: 2,
      maxItems: 2,
    },
    backgroundColor: {
      oneOf: [{ type: 'string' }, { type: 'boolean' }],
    },
    mapBorderWidth: { type: 'number' },
    mapNoDataColor: { type: 'string' },
    padding: { type: 'string' },
    mapBorderColor: { type: 'string' },
    relativeHeight: { type: 'number' },
    minHeight: { type: 'number' },
    tooltip: { type: 'string' },
    isWorldMap: { type: 'boolean' },
    zoomScaleExtend: {
      type: 'array',
      items: { type: 'number' },
      minItems: 2,
      maxItems: 2,
    },
    zoomTranslateExtend: {
      type: 'array',
      items: {
        type: 'array',
        items: { type: 'number' },
        minItems: 2,
        maxItems: 2,
      },
      minItems: 2,
      maxItems: 2,
    },
    graphID: { type: 'string' },
    highlightedCountryCodes: {
      type: 'array',
      items: { type: 'string' },
    },
    mapProperty: { type: 'string' },
    graphDownload: { type: 'boolean' },
    dataDownload: { type: 'boolean' },
    showAntarctica: { type: 'boolean' },
    rtl: { type: 'boolean' },
    language: {
      type: 'string',
      enum: ['ar', 'he', 'en'],
    },
  },
};

export const dotDensityMapSettingsSchema = {
  type: 'object',
  properties: {
    graphTitle: { type: 'string' },
    mapData: { oneOf: [{ type: 'object' }, { type: 'string' }] },
    graphDescription: { type: 'string' },
    footNote: { type: 'string' },
    sourceLink: { type: 'string' },
    width: { type: 'number' },
    height: { type: 'number' },
    radius: { type: 'number' },
    source: { type: 'string' },
    colors: {
      oneOf: [
        {
          type: 'string',
        },
        {
          type: 'array',
          items: { type: 'string' },
        },
      ],
    },
    colorDomain: {
      type: 'array',
      items: { type: 'string' },
    },
    colorLegendTitle: { type: 'string' },
    scale: { type: 'number' },
    centerPoint: {
      type: 'array',
      items: { type: 'number' },
      minItems: 2,
      maxItems: 2,
    },
    backgroundColor: {
      oneOf: [{ type: 'string' }, { type: 'boolean' }],
    },
    mapBorderWidth: { type: 'number' },
    mapNoDataColor: { type: 'string' },
    mapBorderColor: { type: 'string' },
    padding: { type: 'string' },
    showLabels: { type: 'boolean' },
    relativeHeight: { type: 'number' },
    minHeight: { type: 'number' },
    isWorldMap: { type: 'boolean' },
    tooltip: { type: 'string' },
    showColorScale: { type: 'boolean' },
    zoomScaleExtend: {
      type: 'array',
      items: { type: 'number' },
      minItems: 2,
      maxItems: 2,
    },
    zoomTranslateExtend: {
      type: 'array',
      items: {
        type: 'array',
        items: { type: 'number' },
        minItems: 2,
        maxItems: 2,
      },
      minItems: 2,
      maxItems: 2,
    },
    graphID: { type: 'string' },
    highlightedDataPoints: {
      type: 'array',
      items: {
        oneOf: [{ type: 'string' }, { type: 'number' }],
      },
    },
    graphDownload: { type: 'boolean' },
    dataDownload: { type: 'boolean' },
    showAntarctica: { type: 'boolean' },
    rtl: { type: 'boolean' },
    language: {
      type: 'string',
      enum: ['ar', 'he', 'en'],
    },
  },
};

export const geoHubCompareMapSettingsSchema = {
  type: 'object',
  properties: {
    graphTitle: { type: 'string' },
    source: { type: 'string' },
    graphDescription: { type: 'string' },
    sourceLink: { type: 'string' },
    footNote: { type: 'string' },
    backgroundColor: {
      oneOf: [{ type: 'string' }, { type: 'boolean' }],
    },
    padding: { type: 'string' },
    width: { type: 'number' },
    height: { type: 'number' },
    relativeHeight: { type: 'number' },
    minHeight: { type: 'number' },
    graphID: { type: 'string' },
    mapStyles: {
      type: 'array',
      items: { type: 'string' },
      minItems: 2,
      maxItems: 2,
    },
    center: {
      type: 'array',
      items: { type: 'number' },
      minItems: 2,
      maxItems: 2,
    },
    zoomLevel: { type: 'number' },
    rtl: { type: 'boolean' },
    language: {
      type: 'string',
      enum: ['ar', 'he', 'en'],
    },
  },
  required: ['mapStyles'],
};

export const geoHubMapSettingsSchema = {
  type: 'object',
  properties: {
    mapStyle: { type: 'string' },
    center: {
      type: 'array',
      items: { type: 'number' },
      minItems: 2,
      maxItems: 2,
    },
    zoomLevel: { type: 'number' },
    graphTitle: { type: 'string' },
    source: { type: 'string' },
    graphDescription: { type: 'string' },
    sourceLink: { type: 'string' },
    footNote: { type: 'string' },
    backgroundColor: {
      oneOf: [{ type: 'string' }, { type: 'boolean' }],
    },
    padding: { type: 'string' },
    width: { type: 'number' },
    height: { type: 'number' },
    relativeHeight: { type: 'number' },
    minHeight: { type: 'number' },
    graphID: { type: 'string' },
    rtl: { type: 'boolean' },
    language: {
      type: 'string',
      enum: ['ar', 'he', 'en'],
    },
  },
  required: ['mapStyle'],
};

export const paretoChartSettingsSchema = {
  type: 'object',
  properties: {
    graphTitle: { type: 'string' },
    graphDescription: { type: 'string' },
    barTitle: { type: 'string' },
    lineTitle: { type: 'string' },
    footNote: { type: 'string' },
    sourceLink: { type: 'string' },
    width: { type: 'number' },
    height: { type: 'number' },
    source: { type: 'string' },
    backgroundColor: {
      oneOf: [{ type: 'string' }, { type: 'boolean' }],
    },
    padding: { type: 'string' },
    leftMargin: { type: 'number' },
    rightMargin: { type: 'number' },
    topMargin: { type: 'number' },
    bottomMargin: { type: 'number' },
    barColor: { type: 'string' },
    lineColor: { type: 'string' },
    sameAxes: { type: 'boolean' },
    relativeHeight: { type: 'number' },
    minHeight: { type: 'number' },
    tooltip: { type: 'string' },
    graphID: { type: 'string' },
    graphDownload: { type: 'boolean' },
    dataDownload: { type: 'boolean' },
    barPadding: { type: 'number' },
    truncateBy: { type: 'number' },
    showLabels: { type: 'boolean' },
    rtl: { type: 'boolean' },
    language: {
      type: 'string',
      enum: ['ar', 'he', 'en'],
    },
  },
};

export const scatterPlotSettingsSchema = {
  type: 'object',
  properties: {
    graphTitle: { type: 'string' },
    graphDescription: { type: 'string' },
    footNote: { type: 'string' },
    sourceLink: { type: 'string' },
    width: { type: 'number' },
    height: { type: 'number' },
    source: { type: 'string' },
    showLabels: { type: 'boolean' },
    colors: {
      oneOf: [
        { type: 'string' },
        {
          type: 'array',
          items: { type: 'string' },
        },
      ],
    },
    colorDomain: {
      type: 'array',
      items: { type: 'string' },
    },
    colorLegendTitle: { type: 'string' },
    radius: { type: 'number' },
    xAxisTitle: { type: 'string' },
    yAxisTitle: { type: 'string' },
    backgroundColor: {
      oneOf: [{ type: 'string' }, { type: 'boolean' }],
    },
    padding: { type: 'string' },
    leftMargin: { type: 'number' },
    rightMargin: { type: 'number' },
    topMargin: { type: 'number' },
    bottomMargin: { type: 'number' },
    relativeHeight: { type: 'number' },
    minHeight: { type: 'number' },
    tooltip: { type: 'string' },
    refXValues: {
      type: 'array',
      items: { $ref: '#/definitions/ReferenceDataType' },
    },
    refYValues: {
      type: 'array',
      items: { $ref: '#/definitions/ReferenceDataType' },
    },
    highlightedDataPoints: {
      type: 'array',
      items: {
        oneOf: [{ type: 'string' }, { type: 'number' }],
      },
    },
    highlightAreaSettings: {
      type: 'array',
      items: {
        oneOf: [{ type: 'number' }, { type: 'null' }],
      },
      minItems: 4,
      maxItems: 4,
    },
    highlightAreaColor: { type: 'string' },
    showColorScale: { type: 'boolean' },
    graphID: { type: 'string' },
    maxRadiusValue: { type: 'number' },
    maxXValue: { type: 'number' },
    minXValue: { type: 'number' },
    maxYValue: { type: 'number' },
    minYValue: { type: 'number' },
    graphDownload: { type: 'boolean' },
    dataDownload: { type: 'boolean' },
    rtl: { type: 'boolean' },
    showNAColor: { type: 'boolean' },
    language: {
      type: 'string',
      enum: ['ar', 'he', 'en'],
    },
  },
  definitions: {
    ReferenceDataType: {
      type: 'object',
      properties: {
        value: {
          oneOf: [{ type: 'number' }, { type: 'null' }],
        },
        text: { type: 'string' },
        color: { type: 'string' },
      },
      required: ['value', 'text'],
    },
  },
};

export const slopeChartSettingsSchema = {
  type: 'object',
  properties: {
    graphTitle: { type: 'string' },
    graphDescription: { type: 'string' },
    footNote: { type: 'string' },
    sourceLink: { type: 'string' },
    width: { type: 'number' },
    height: { type: 'number' },
    source: { type: 'string' },
    showLabels: { type: 'boolean' },
    colors: {
      oneOf: [
        { type: 'string' },
        {
          type: 'array',
          items: { type: 'string' },
        },
      ],
    },
    colorDomain: {
      type: 'array',
      items: { type: 'string' },
    },
    colorLegendTitle: { type: 'string' },
    radius: { type: 'number' },
    axisTitle: {
      type: 'array',
      items: { type: 'string' },
      minItems: 2,
      maxItems: 2,
    },
    backgroundColor: {
      oneOf: [{ type: 'string' }, { type: 'boolean' }],
    },
    padding: { type: 'string' },
    leftMargin: { type: 'number' },
    rightMargin: { type: 'number' },
    topMargin: { type: 'number' },
    bottomMargin: { type: 'number' },
    relativeHeight: { type: 'number' },
    minHeight: { type: 'number' },
    tooltip: { type: 'string' },
    highlightedDataPoints: {
      type: 'array',
      items: {
        oneOf: [{ type: 'string' }, { type: 'number' }],
      },
    },
    showColorScale: { type: 'boolean' },
    graphID: { type: 'string' },
    maxValue: { type: 'number' },
    minValue: { type: 'number' },
    graphDownload: { type: 'boolean' },
    dataDownload: { type: 'boolean' },
    fillContainer: { type: 'boolean' },
    rtl: { type: 'boolean' },
    language: {
      type: 'string',
      enum: ['ar', 'he', 'en'],
    },
  },
};

export const stackedAreaChartSettingsSchema = {
  type: 'object',
  properties: {
    colors: {
      type: 'array',
      items: { type: 'string' },
      minItems: 0,
    },
    graphTitle: { type: 'string' },
    graphDescription: { type: 'string' },
    footNote: { type: 'string' },
    sourceLink: { type: 'string' },
    width: { type: 'number' },
    height: { type: 'number' },
    source: { type: 'string' },
    noOfXTicks: { type: 'number' },
    dateFormat: { type: 'string' },
    colorDomain: {
      type: 'array',
      items: { type: 'string' },
      minItems: 1,
    },
    backgroundColor: {
      oneOf: [{ type: 'string' }, { type: 'boolean' }],
    },
    padding: { type: 'string' },
    colorLegendTitle: { type: 'string' },
    leftMargin: { type: 'number' },
    rightMargin: { type: 'number' },
    topMargin: { type: 'number' },
    relativeHeight: { type: 'number' },
    minHeight: { type: 'number' },
    bottomMargin: { type: 'number' },
    tooltip: { type: 'string' },
    refValues: {
      type: 'array',
      items: { $ref: '#/definitions/ReferenceDataType' },
    },
    highlightAreaSettings: {
      type: 'array',
      items: { type: 'number' },
      minItems: 2,
      maxItems: 2,
    },
    graphID: { type: 'string' },
    maxValue: { type: 'number' },
    minValue: { type: 'number' },
    graphDownload: { type: 'boolean' },
    dataDownload: { type: 'boolean' },
    highlightAreaColor: { type: 'string' },
    showColorScale: { type: 'boolean' },
    rtl: { type: 'boolean' },
    language: {
      type: 'string',
      enum: ['ar', 'he', 'en'],
    },
  },
  required: ['colorDomain'],
  definitions: {
    ReferenceDataType: {
      type: 'object',
      properties: {
        value: {
          oneOf: [{ type: 'number' }, { type: 'null' }],
        },
        text: { type: 'string' },
        color: { type: 'string' },
      },
      required: ['value', 'text'],
    },
  },
};

export const statCardSettingsSchema = {
  type: 'object',
  properties: {
    year: {
      oneOf: [{ type: 'number' }, { type: 'string' }],
    },
    graphTitle: { type: 'string' },
    graphDescription: { type: 'string' },
    suffix: { type: 'string' },
    prefix: { type: 'string' },
    source: { type: 'string' },
    sourceLink: { type: 'string' },
    footNote: { type: 'string' },
    backgroundColor: {
      oneOf: [{ type: 'string' }, { type: 'boolean' }],
    },
    padding: { type: 'string' },
    graphID: { type: 'string' },
    aggregationMethod: {
      type: 'string',
      enum: ['count', 'max', 'min', 'average', 'sum'],
    },
    rtl: { type: 'boolean' },
    language: {
      type: 'string',
      enum: ['ar', 'he', 'en'],
    },
    countOnly: {
      type: 'array',
      items: {
        oneOf: [{ type: 'string' }, { type: 'number' }],
      },
    },
  },
  required: ['data', 'graphTitle', 'source'],
};

export const stripChartSettingsSchema = {
  type: 'object',
  properties: {
    graphTitle: { type: 'string' },
    graphDescription: { type: 'string' },
    footNote: { type: 'string' },
    sourceLink: { type: 'string' },
    width: { type: 'number' },
    height: { type: 'number' },
    source: { type: 'string' },
    stripType: {
      type: 'string',
      enum: ['strip', 'dot'],
    },
    colors: {
      oneOf: [
        { type: 'string' },
        {
          type: 'array',
          items: { type: 'string' },
        },
      ],
    },
    colorDomain: {
      type: 'array',
      items: { type: 'string' },
    },
    colorLegendTitle: { type: 'string' },
    radius: { type: 'number' },
    backgroundColor: {
      oneOf: [{ type: 'string' }, { type: 'boolean' }],
    },
    padding: { type: 'string' },
    leftMargin: { type: 'number' },
    rightMargin: { type: 'number' },
    topMargin: { type: 'number' },
    bottomMargin: { type: 'number' },
    relativeHeight: { type: 'number' },
    minHeight: { type: 'number' },
    tooltip: { type: 'string' },
    highlightedDataPoints: {
      type: 'array',
      items: {
        oneOf: [{ type: 'string' }, { type: 'number' }],
      },
    },
    showColorScale: { type: 'boolean' },
    graphID: { type: 'string' },
    maxValue: { type: 'number' },
    minValue: { type: 'number' },
    showAxis: { type: 'boolean' },
    graphDownload: { type: 'boolean' },
    dataDownload: { type: 'boolean' },
    prefix: { type: 'string' },
    suffix: { type: 'string' },
    rtl: { type: 'boolean' },
    showNAColor: { type: 'boolean' },
    language: {
      type: 'string',
      enum: ['ar', 'he', 'en'],
    },
    highlightColor: { type: 'string' },
    dotOpacity: { type: 'number' },
  },
};

export const treeMapSettingsSchema = {
  type: 'object',
  properties: {
    colors: {
      oneOf: [
        { type: 'string' },
        {
          type: 'array',
          items: { type: 'string' },
        },
      ],
    },
    graphTitle: { type: 'string' },
    graphDescription: { type: 'string' },
    footNote: { type: 'string' },
    sourceLink: { type: 'string' },
    width: { type: 'number' },
    height: { type: 'number' },
    suffix: { type: 'string' },
    prefix: { type: 'string' },
    source: { type: 'string' },
    leftMargin: { type: 'number' },
    rightMargin: { type: 'number' },
    colorDomain: {
      type: 'array',
      items: { type: 'string' },
    },
    colorLegendTitle: { type: 'string' },
    backgroundColor: {
      oneOf: [{ type: 'string' }, { type: 'boolean' }],
    },
    padding: { type: 'string' },
    topMargin: { type: 'number' },
    bottomMargin: { type: 'number' },
    relativeHeight: { type: 'number' },
    minHeight: { type: 'number' },
    showLabels: { type: 'boolean' },
    tooltip: { type: 'string' },
    showColorScale: { type: 'boolean' },
    showValues: { type: 'boolean' },
    graphID: { type: 'string' },
    highlightedDataPoints: {
      type: 'array',
      items: {
        oneOf: [{ type: 'string' }, { type: 'number' }],
      },
    },
    graphDownload: { type: 'boolean' },
    dataDownload: { type: 'boolean' },
    rtl: { type: 'boolean' },
    showNAColor: { type: 'boolean' },
    language: {
      type: 'string',
      enum: ['ar', 'he', 'en'],
    },
  },
};

export const unitChartSettingsSchema = {
  type: 'object',
  properties: {
    totalNoOfDots: { type: 'number' },
    gridSize: { type: 'number' },
    fillContainer: { type: 'boolean' },
    unitPadding: { type: 'number' },
    size: { type: 'number' },
    graphTitle: { type: 'string' },
    graphDescription: { type: 'string' },
    footNote: { type: 'string' },
    sourceLink: { type: 'string' },
    source: { type: 'string' },
    dotColors: {
      type: 'array',
      items: { type: 'string' },
    },
    backgroundColor: {
      oneOf: [{ type: 'string' }, { type: 'boolean' }],
    },
    padding: { type: 'string' },
    graphID: { type: 'string' },
    graphDownload: { type: 'boolean' },
    rtl: { type: 'boolean' },
    language: {
      type: 'string',
      enum: ['ar', 'he', 'en'],
    },
    graphLegend: { type: 'boolean' },
    showStrokeForWhiteDots: { type: 'boolean' },
    note: { type: 'string' },
  },
  required: ['value'],
};
