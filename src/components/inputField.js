import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { uiEvent } from '../actions/index';

class InputField extends Component {

    render() {
        return (
            <div className="input">

				<div className="form-group">
					<label>{this.props.label}</label>
					<input id={this.props.id}
						className="form-control"
						defaultValue={this.props.regexText}
						onChange={(e) => this.props.uiEvent(e)} />
				</div>

            </div>
        );
    }
}

function mapStateToProps(state) {
  return {
  	regexText: state.extractor.regexText
  }
}
function mapDispatchToProps(dispatch){
	return bindActionCreators({uiEvent}, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(InputField);