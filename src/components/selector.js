import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { uiEvent } from '../actions/index';

class SelectOption extends Component {
	render(){
		return (
			<option value={this.props.value}>{this.props.name}</option>
		)
	}
}

class Selector extends Component {

	constructor(props){
		super(props);
		this.state = {}
	}

    render() {
    	const options = this.props.options.map((op, i) => <SelectOption key={i} name={op[0]} value={op[1]} />);

        return (
            <div className="config">
				<label>{this.props.label}</label>
				<div className="form-group">
					<select id={this.props.id} className="form-control" onChange={(e) => this.props.uiEvent(e)}>
						{options}
					</select>
				</div>
            </div>
        );
    }
}

function mapDispatchToProps(dispatch){
	return bindActionCreators({uiEvent}, dispatch)
}

export default connect(null, mapDispatchToProps)(Selector);