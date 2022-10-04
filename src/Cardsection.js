import React, { Component } from 'react'


export default class Cardsection extends Component {
  render() {
    return (
      <div>
        <div className="fs-1 fw-bold m-3 text-uppercase"
        style = {{fontFamily : "Times New Roman", marginTop : '3px !important', marginBottom : '0px !important'}}>
        {this.props.coinName}
        </div>

        <div>
            <div className="text-white text-center"
                style={{ fontFamily: 'NHaasGroteskDSPro-65Md', overflow: 'visible', height: '2px', marginTop: "1%" }}> Current
                Price</div>
            <div style={{
                fontFamily: 'NHaasGroteskDSPro-65Md', fontSize: '60px',
                fontWeight: '700', color: "#fcdf03", textDecoration: 'none solid rgb(255, 255, 255)',
                textAlign: 'center'
            }}>
                ${this.props.currentPrice}
            </div>
        </div>

        <section className="row m-3 mb-0" style={{ marginTop: ' 2px !important' }}>

        <div className="card border-primary mb-3 m-3" 
             style={{ width: "11rem", backgroundColor: "rgb(43, 43, 43)", marginTop: "0px !important" }}>
        <div className="card-header" style={{ fontFamily: 'NHaasGroteskDSPro-65Md' }}>Market Cap 24hr</div>
        <div className="card-body text-primary">
        <p className="card-text fw-bold fs-5" style={{ color: "#ADD8E6" }}>
          {this.props.mcap24} %
        </p>
        </div>
        </div>

        <div className="card border-success mb-3 m-3" 
             style={{ width: "11rem", backgroundColor: "rgb(43, 43, 43)", marginTop: "0px !important" }}>
        <div className="card-header" style={{ fontFamily: 'NHaasGroteskDSPro-65Md' }}>All time high</div>
        <div className="card-body text-success">
        <p className="card-text fw-bold fs-5" style={{ color: "#008000" }}>
          ${this.props.ath} 
        </p>
        </div>
        </div>

        <div className="card border-danger mb-3 m-3" 
             style={{ width: "11rem", backgroundColor: "rgb(43, 43, 43)", marginTop: "0px !important" }}>
        <div className="card-header" style={{ fontFamily: 'NHaasGroteskDSPro-65Md' }}>All time low</div>
        <div className="card-body text-danger">
        <p className="card-text fw-bold fs-5" style={{ color: "#FF0000" }}>
          ${this.props.atl} 
        </p>
        </div>
        </div>

        <div className="card border-success mb-3 m-3" 
             style={{ width: "11rem", backgroundColor: "rgb(43, 43, 43)", marginTop: "0px !important" }}>
        <div className="card-header" style={{ fontFamily: 'NHaasGroteskDSPro-65Md' }}>High 24 Hrs</div>
        <div className="card-body text-success">
        <p className="card-text fw-bold fs-5" style={{ color: "#008000" }}>
          ${this.props.high24}
        </p>
        </div>
        </div>

        <div className="card border-danger mb-3 m-3" 
             style={{ width: "11rem", backgroundColor: "rgb(43, 43, 43)", marginTop: "0px !important" }}>
        <div className="card-header" style={{ fontFamily: 'NHaasGroteskDSPro-65Md' }}>Low 24 Hrs</div>
        <div className="card-body text-danger">
        <p className="card-text fw-bold fs-5" style={{ color: "#FF0000" }}>
          ${this.props.low24}
        </p>
        </div>
        </div>

        </section>

      </div> //close
    )
  }
}
