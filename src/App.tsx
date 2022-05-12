import styled, { css } from 'styled-components';
import './App.css';


interface Props{
  primary?: boolean
  name?: string
  margin: string
}

const standardMargin = "0.5em 1em";
const biggerMargin = "1em 2em";

const Container = styled.div`
  margin-top: 200px;
  text-align: center;
`

const NormalButton = (props:Props) => {
  return (
    <button 
      className='normal-button'
      style={{
        margin: props.margin, 
        backgroundColor: props.primary ? '#00513f' : 'transparent',
        color: props.primary ? 'white': '#00513f'
      }}
    >{props.name?? 'Default'}</button>
  );
}

const StyledButton = styled.button<Props>`
  background: transparent;
  border-radius: 3px;
  border: 2px solid #00513f;
  color: #00513f;
  margin: ${props => props.margin};
  padding: 0.25em 1em;

  ${props => props.primary && css`
    background: #00513f;
    color: white;
  `}
`;

const App = () => {
  return (
    <>
      <Container>
        <NormalButton name='Normal Default' margin={standardMargin}></NormalButton>
        <NormalButton name='Normal Primary' primary margin={standardMargin}></NormalButton>
      </Container>
      {/* <Container>
        <StyledButton margin={standardMargin}>Styled Default</StyledButton>
        <StyledButton primary margin={standardMargin}>Styled Primary</StyledButton>
      </Container> */}
    </>
  );
}

export default App;
