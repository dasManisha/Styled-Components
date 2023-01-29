import './App.css';
import StyledButton , {FancyButton,SubmitButton} from './components/Button/Button';
import { AnimatedLogo,DarkButton } from './components/Button/Button.styles';
import logo from './logo.svg';
import { createGlobalStyle, ThemeProvider } from 'styled-components';
import './styles.css';

const theme = {
  dark: {
    primary: '#000',
    text: '#fff',
  },
  light: {
    primary: '#fff',
    text: '#000'
  },
  fontFamily: 'Segoe UI'
  
}

const GlobalStyle = createGlobalStyle`
button {
  font-family: ${(props) => props.theme.fontFamily};
}
`


function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle/>
    <div className="App">
      {/* <img src={logo} className='App-logo' alt='logo'></img> */}
      <AnimatedLogo src={logo}/>
      <StyledButton type='submit'>Styled Button</StyledButton>
      <div>
        <br/>
      </div>
      <StyledButton variant='outline' >Styled Button</StyledButton>
      <div>
        <br/>
      </div>

      {/* styled component provides a ability to provide a polymorphic prop */}
      <FancyButton as ="a" href='https://www.w3schools.com/css/css3_gradients.asp' variant='outline'  >Fancy Button</FancyButton>
      <div>
        <br/>
      </div>
      <SubmitButton  >Submit Button</SubmitButton>

      <div>
        <br/>
      </div>
      <DarkButton >Dark Theme</DarkButton>
   
    </div>
    </ThemeProvider>
  );
}

export default App;
