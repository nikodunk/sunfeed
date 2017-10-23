import React from 'react'
import ReactDOM from 'react-dom'
import News from './news'
import Stocks from './stocks'
import Crumbs from './crumbs'




export default class App extends React.Component{

  onError(error){
    console.log(error)
  }

  constructor(props) {
    super(props);

    this.state = { articles: [ ] }
      
  }

  componentDidMount() {




  }
  
  render(){
    return (
          <div >
            <div class="title">
              <b>sunboxlabs</b> is a real-time mobility & energy news aggregator
            </div>
            <div class="container">
              <div class="left">
                <b>stocks</b>
                <Stocks />
              </div>
              <div class="news">
                <b>newest updates</b>
                <News />
              </div>
              <div class="right">
                  <Crumbs />
              </div>
            </div>
          </div>
    )
  }




}








ReactDOM.render(<App />, document.getElementById('root'));


