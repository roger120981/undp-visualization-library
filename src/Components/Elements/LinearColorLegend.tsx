import { P } from '@undp-data/undp-design-system-react';
import { numberFormattingFunction } from '../../Utils/numberFormattingFunction';

interface Props {
  colors: string[];
  colorDomain: number[];
  colorLegendTitle?: string;
  width?: number;
  rtl?: boolean;
  language?: 'ar' | 'he' | 'en';
}

export function LinearColorLegend(props: Props) {
  const { colorLegendTitle, colorDomain, colors, width, rtl, language } = props;
  return (
    <div
      className='flex gap-0 flex-wrap justify-center leading-0'
      style={{
        maxWidth: width ? `${width}px` : 'none',
      }}
      aria-label='Color legend'
    >
      {colorLegendTitle && colorLegendTitle !== '' ? (
        <P
          size='sm'
          marginBottom='xs'
          fontType={language === 'en' || !rtl ? 'body' : language || 'ar'}
          className='w-full text-center'
        >
          {colorLegendTitle}
        </P>
      ) : null}

      <div className='flex gap-0 flex-wrap justify-center w-full min-w-[360px] leading-0'>
        <div
          className='h-4 mb-1 w-full min-w-[360px]'
          style={{
            background: `linear-gradient(90deg, ${colors[0]} 0%, ${colors[1]} 100%)`,
          }}
        />
        <div className='flex justify-between w-full min-w-[360px]'>
          <P className='mb-0 md:mb-0 text-sm md:text-sm'>
            {numberFormattingFunction(colorDomain[0], '', '')}
          </P>
          <P className='mb-0 md:mb-0 text-sm md:text-sm'>
            {numberFormattingFunction(colorDomain[1], '', '')}
          </P>
        </div>
      </div>
    </div>
  );
}
