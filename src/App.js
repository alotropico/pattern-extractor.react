import React, { Component } from 'react';

import { connect } from 'react-redux';

import { Header } from './components/header';
import { Footer } from './components/footer';
import Selector from './components/selector';
import Input from './components/input';
import Output from './components/output';
import InputField from './components/inputField';

class App extends Component {

  constructor(props){
    super(props);
    this.state = {}
  }

  isCustomType(type){
    if(type != 'custom'){
      return (
          <div className="row">
            <div className="col-md-12">
              <Selector id="parseConfig" label="Extract this type of string" options={this.props.inputOptions} />
            </div>
          </div>
        );
    } else {
      return (
          <div className="row">
            <div className="col-sm-6 col-md-6">
              <Selector id="parseConfig" label="Extract this type of string" options={this.props.inputOptions} />
            </div>
            <div className="col-sm-6 col-md-6">
              <InputField id="parseRegex" label="Use a custom regex" />
            </div>
          </div>
        );
    }
  }

  render() {

    return (
      <div className="app">

        <Header />

        <div className="container">

          <div className="row">

            <div className="col-sm-12 col-md-9">

              {this.isCustomType(this.props.type)}

              <Input id="parseText" />

            </div>

            <div className="col-sm-12 col-md-3">
              <Selector id="outputConfig" label="Items separated by" options={this.props.outputOptions} />
              <Output />
            </div>

          </div>

        </div>

        <Footer />

      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    inputOptions: state.extractor.inputOptions,
    outputOptions: state.extractor.outputOptions,
    type: state.extractor.type
  }
}

export default connect(mapStateToProps, {})(App);