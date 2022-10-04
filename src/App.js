import React, { Component } from 'react'
import Cardsection from './Cardsection';
import Header from './Header';
import ChartSection from './ChartSection';


export default class App extends Component {

  constructor(){
    super();
    this.state = {
      id: "bitcoin",
      Data:{}
    }
  }
  

  fetchData = async() =>{
    let data = await fetch('https://api.coingecko.com/api/v3/coins/' + this.state.id)
    let jsonData = await data.json()
    this.setState({id : this.state.id , Data : jsonData})
  }

  handleSubmit = async(event) => {
    await this.setState({id : event.target.value , Data : this.state.Data})
    this.fetchData();
  }

  componentDidMount() {
    this.fetchData()
    this.interval = setInterval(() => this.fetchData(), 2000);

  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    return (
      <div>
        <Header handle_Submit = {this.handleSubmit}/>
        
        <Cardsection coinName = {this.state.id} 
        currentPrice ={this.state.Data.market_data ? this.state.Data.market_data.current_price.usd : ""} 
        mcap24 = {this.state.Data.market_data ? this.state.Data.market_data.market_cap_change_percentage_24h_in_currency.usd : ""}
        ath = {this.state.Data.market_data ? this.state.Data.market_data.ath.usd : ""}
        atl = {this.state.Data.market_data ? this.state.Data.market_data.atl.usd : ""}
        high24 = {this.state.Data.market_data ? this.state.Data.market_data.high_24h.usd : ""}
        low24 = {this.state.Data.market_data ? this.state.Data.market_data.low_24h.usd : ""}
        />
        
        <ChartSection id={this.state.id} 
        priceChange24={this.state.Data.market_data ? this.state.Data.market_data.price_change_24h_in_currency.usd : ""} 
        MarketCap={this.state.Data.market_data ? this.state.Data.market_data.market_cap.usd  : ""}
        TotVol={this.state.Data.market_data ? this.state.Data.market_data.total_volume.usd  : ""}
        Circulating= {this.state.Data.market_data ? this.state.Data.market_data["circulating_supply"] : ""}
        twitterF = {this.state.Data.community_data ? this.state.Data.community_data.twitter_followers : ""}
        />

      </div>
    )
  }
}

