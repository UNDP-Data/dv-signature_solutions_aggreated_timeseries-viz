import { LineChart } from './Components/LineChart';
import { CountryGroupDataType } from './Types';
import { ValueCard } from './Components/ValueCard';
import { DotPlot } from './Components/DotPlot';

interface Props {
  data: CountryGroupDataType;
}

function PovertyAndInequalityViz(props: Props) {
  const { data } = props;
  return (
    <div className='max-width flex-div flex-wrap flex-hor-align-center gap-00'>
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          width: '33.33%',
        }}
      >
        <LineChart
          data={
            data.indicators[
              data.indicators.findIndex(
                d =>
                  d.indicator ===
                  'Poverty headcount ratio at $2.15 a day (2017 PPP) (% of population)',
              )
            ].yearlyData
          }
          strokeWidth={1}
          lineColor='#232E3D'
          graphTitle='Poverty headcount ratio at $2.15 a day (2017 PPP) (% of population)'
          suffix='%'
        />
      </div>
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          width: '33.33%',
        }}
      >
        <ValueCard
          title='people are multidimensionally poor'
          number='1.2 Billion'
        />
        <DotPlot
          graphTitle='Vulnerable persons covered by social assistance'
          value={28.9}
          size={200}
        />
      </div>
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          width: '33.33%',
        }}
      >
        <LineChart
          data={
            data.indicators[
              data.indicators.findIndex(
                d =>
                  d.indicator ===
                  'Working poverty rate (percentage of employed living below US$1.90 PPP) (%)',
              )
            ].yearlyData
          }
          lineColor='#232E3D'
          suffix='%'
          strokeWidth={2}
          graphTitle='Working poverty rate (percentage of employed living below US$1.90 PPP) (%)'
        />
        <LineChart
          data={
            data.indicators[
              data.indicators.findIndex(
                d => d.indicator === 'Inequality-adjusted HDI',
              )
            ].yearlyData
          }
          lineColor='#232E3D'
          strokeWidth={2}
          graphTitle='Inequality-adjusted HDI'
        />
      </div>
    </div>
  );
}

export default PovertyAndInequalityViz;
