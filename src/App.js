import './App.css';
import React, { Component, Fragment } from 'react'
import Navbar from './component/Navbar';
import News from './component/News';
import Footer from './component/Footer';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

export default class App extends Component {
  pageSize = 12;
  ApiKey = "36eb887266ff4c878e7614c2240585f5";
  Country = "in";
  render() {
    return (
      <div>
        <Router>
          <Fragment>
            <Navbar />
            <Routes>
              <Route exact path="/general" element={<News key="general" pageSize={this.pageSize} country={this.Country} category="general" apiKey={this.ApiKey} />} />
              <Route exact path="/business" element={<News key="business" pageSize={this.pageSize} country={this.Country} category="business" apiKey={this.ApiKey} />} />
              <Route exact path="/entertainment" element={<News key="entertainment" pageSize={this.pageSize} country={this.Country} category="entertainment" apiKey={this.ApiKey} />} />
              <Route exact path="/health" element={<News key="health" pageSize={this.pageSize} country={this.Country} category="health" apiKey={this.ApiKey} />} />
              <Route exact path="/health" element={<News key="health" pageSize={this.pageSize} country={this.Country} category="health" apiKey={this.ApiKey} />} />
              <Route exact path="/science" element={<News key="science" pageSize={this.pageSize} country={this.Country} category="science" apiKey={this.ApiKey} />} />
              <Route exact path="/sports" element={<News key="sports" pageSize={this.pageSize} country={this.Country} category="sports" apiKey={this.ApiKey} />} />
              <Route exact path="/technology" element={<News key="technology" pageSize={this.pageSize} country={this.Country} category="technology" apiKey={this.ApiKey} />} />
            </Routes>
            <Footer />
          </Fragment>
        </Router>
      </div>
    )
  }
}

// 1. API KEY = 8935efae465c4f17b060ac278cdd9918 ( Shubham )
// 2. API KEY = 36eb887266ff4c878e7614c2240585f5 ( Reena )
// 3. API KEY = 59df5611030e47968f010545a4eadf9b ( Private )