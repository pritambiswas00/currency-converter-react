import React from "react";
import Styled from "styled-components";
import { Button } from "@material-ui/core";
import { withStyles } from "@material-ui/core";
import MonetizationOnIcon from '@material-ui/icons/MonetizationOn';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';

const BASE_URL ='https://api.openrates.io/latest';

class HomePage extends React.Component {

   state={
     exchangeRates: []
   }

  currencyHandler = () => {
    this.props.history.push("/currencyconverter");
  };

   

  componentDidMount(){
      fetch(BASE_URL).then(response => response.json())
      .then((data) => {
         const value = []
       for(let key in data.rates){
         value.push({
           currency: key,
           rate : data.rates[key]
         })
       }
        console.log(value)
       this.setState({exchangeRates: value})
       
          
      }).catch(error => console.log(error))
  }

  render() {
    return (
      <MainContainer>
        <RecentValue>
          <MonetizationOnIcon/>
          <h2>Market Rates</h2>
          <MonetizationOnIcon/>
        </RecentValue>
        <ContainerRates>
          {this.state.exchangeRates.map(item => {
            return (
               <div key={item.currency}>
                 <h4>{item.currency}</h4>
                 <h5><strong>{item.rate}</strong></h5>
               </div>
            )
          })}
        </ContainerRates>
           <ConverterPage>
           
          <StyledButton onClick={this.currencyHandler}>
          <ArrowForwardIcon/>Click to Convert Currency
          </StyledButton>
           </ConverterPage>
      </MainContainer>
    );
  }
}
export default HomePage;

const StyledButton = withStyles({
  root: {
    background: "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",
    borderRadius: 10,
    border: "1px solid black",
    color: "white",
    margin: "60px auto",
    height: 90,
    padding: "0 30px",
    boxShadow: "5px 10px 5px rgba(0,0,0,0.5)"
  },
  label: {
    textTransform: "capitalize",
    color: "black",
    fontSize: "25px",
    fontWeight: "400"
  }
})(Button);

const MainContainer = Styled.div`
   width: 100%;
   height: 100vh;
   background: linear-gradient(#FE6B8B, #FF8E53);

`;
const RecentValue = Styled.div`
    display: flex;
    justify-content: center;
    padding-top: 50px;
    
    text-align: center;
    h2{
      paddings-top: 10px;
      color: green;
    }
`;
const ConverterPage = Styled.div`
    display: flex;
    margin: 100px auto;
    text-align:center;
`;
const ContainerRates = Styled.div`
   display: flex;
   overflow: auto;
   margin: 20px auto;
   text-align: center;
   width: 90%;
   height: 100px;
   background: transparent;
   color: black;
  
`