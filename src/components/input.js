import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { uiEvent } from '../actions/index';

class Input extends Component {

    render() {
        return (
            <div className="input">

				<div className="form-group">
					<textarea id={this.props.id}
						className="form-control"
						value={this.props.rawText}
						onChange={(e) => this.props.uiEvent(e)} />
				</div>

				<footer>
					<button id="clearText" type="text" className="btn btn-danger" onClick={(e) => this.props.uiEvent(e)}>Clear</button>
				</footer>

            </div>
        );
    }
}

function mapStateToProps(state) {
  return {
    rawText: state.extractor.rawText
  }
}
function mapDispatchToProps(dispatch){
	return bindActionCreators({uiEvent}, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Input);