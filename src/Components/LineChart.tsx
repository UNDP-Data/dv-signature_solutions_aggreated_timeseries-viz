import { useEffect, useRef, useState } from 'react';
import { LineChartGraph } from './LineChartGraph';

interface Props {
  data: {
    year: number;
    value: number;
  }[];
  lineColor: string;
  graphTitle: string;
  strokeWidth: number;
  suffix?: string;
}

export function LineChart(props: Props) {
  const { data, lineColor, graphTitle, strokeWidth, suffix } = props;
  const [mouseOverData, setMouseOverData] = useState<any>(
    data[data.length - 1],
  );

  const [svgWidth, setSvgWidth] = useState(0);
  const [svgHeight, setSvgHeight] = useState(0);

  const graphDiv = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (graphDiv.current) {
      setSvgHeight(graphDiv.current.clientHeight);
      setSvgWidth(graphDiv.current.clientWidth);
    }
  }, [graphDiv]);
  return (
    <div
      className='padding-left-09 padding-right-09 padding-top-00 padding-bottom-07 flex-div'
      style={{
        flexGrow: 1,
        flexDirection: 'column',
        display: 'flex',
      }}
    >
      <h6 className='undp-typography bold margin-bottom-03'>{graphTitle}</h6>
      <div
        style={{
          flexGrow: 1,
          flexDirection: 'column',
          display: 'flex',
        }}
      >
        <h2 className='undp-typography bold margin-bottom-00'>
          {mouseOverData.value}
          {suffix || ''}{' '}
          <span style={{ opacity: '0.25' }}>({mouseOverData.year})</span>
        </h2>
        <div style={{ flexGrow: 1, width: '100%' }} ref={graphDiv}>
          {svgWidth && svgHeight ? (
            <LineChartGraph
              data={data}
              lineColor={lineColor}
              svgWidth={svgWidth}
              svgHeight={svgHeight}
              strokeWidth={strokeWidth}
              setMouseOverData={setMouseOverData}
              mouseOverData={mouseOverData}
            />
          ) : null}
        </div>
      </div>
    </div>
  );
}
