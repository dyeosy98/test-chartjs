import './App.css';
import styled from 'styled-components';

import HorizontalStackedBarChart from './components/HorizontalStackedBarChart';

const Body = styled.div`
  height: auto;
  display: grid;
  grid-template-areas:
    'header header header'
    'left   main   right'
    'bottom bottom bottom';
  grid-template-columns: 1fr 6fr 1fr;
  grid-template-rows: 1fr 6fr 1fr;
`

const Head = styled.header`
  grid-area: header;
  margin: 12px;
`

function App() {

  return (
    <Body>
        <Head>This is an example of a horizontally stacked bar chart.</Head>
        <HorizontalStackedBarChart grid-area='main'/>
    </Body>
  );
}

export default App;
