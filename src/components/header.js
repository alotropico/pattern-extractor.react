import React, { Component } from 'react';

import hero from '../hero.png'

export class Header extends Component {
    render() {
        return (
        	<div className="header">
	            <nav className="navbar navbar-expand-lg">

			  		<div className="container">
						<span className="navbar-brand">Pattern Extractor</span>

						<a href="https://github.com/alotropico/pattern-extractor.react" className="github">
							<svg height="32" viewBox="0 0 16 16" version="1.1" width="32" aria-hidden="true"><path fill="#ffffff" fillRule="evenodd" d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0 0 16 8c0-4.42-3.58-8-8-8z"></path></svg>
						</a>
					</div>

				</nav>

				<div className="container">

					<div className="row">

			            <div className="col-md-10 col-sm-12">

							<div className="row">

					            <div className="col-md-8  col-sm-12">
									
									<p>Get common patterns from dirty texts:<br />
										<span className="label label-info">Emails</span>
										<span className="label label-info">Phone Numbers</span>
										<span className="label label-info">Numbers</span>
										<span className="label label-info">URLs</span>
										<span className="label label-info">Wikidata IDs</span></p>

									<p>Choose the kind of pattern you want to get and write or paste a text in the big box.</p>

									<p>If you are and advanced user, you can use regular expressions for a custom search.<br />
										This app is based on an earlier <a href="http://www.alotropico.com/projects/wikidata-parser/">jQuery version, specific for Wikidata IDs search</a>.
									</p>
					            </div>

					            <div className="col-md-4  col-sm-12">
					              <img title="Diagram" src={hero} className="hero" />
					            </div>

					         </div>
					    </div>
					</div>
				</div>
			</div>
        );
    }
}