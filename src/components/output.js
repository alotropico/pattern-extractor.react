import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { uiCheckEvent } from '../actions/index';

import {CopyToClipboard} from 'react-copy-to-clipboard';

class Output extends Component {

    render() {

        return (
            <div className="output">
            	<div className="form-group">

                <div className="checkbox">
                  <label><input type="checkbox"
                    id="sortSelector"
                    onChange={(e) => this.props.uiCheckEvent(e)}
                    checked={this.props.sort} />Sort alphabetically</label>
                </div>
                <div className="checkbox">
                  <label><input type="checkbox"
                    id="uniqueSelector"
                    onChange={(e) => this.props.uiCheckEvent(e)}
                    checked={this.props.unique} />Remove duplicates</label>
                </div>
                <div className="checkbox">
                  <label><input type="checkbox"
                    id="caseSelector"
                    onChange={(e) => this.props.uiCheckEvent(e)}
                    checked={this.props.uppercase} />Convert to upper case</label>
                </div>

            		<textarea className="form-control" value={this.props.outputText} readOnly />
	            </div>

            	<footer>

            		<CopyToClipboard text={this.props.outputText}>
						<button type="submit" className="btn form-control btn-primary">Copy result to clipboard</button>
					</CopyToClipboard>
					
				</footer>
            </div>
        );
    }
}

function mapStateToProps(state) {
  return {
  	outputText: state.extractor.outputText,
    sort: state.extractor.sort,
    unique: state.extractor.unique,
    uppercase: state.extractor.uppercase
  }
}
function mapDispatchToProps(dispatch){
  return bindActionCreators({uiCheckEvent}, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Output);