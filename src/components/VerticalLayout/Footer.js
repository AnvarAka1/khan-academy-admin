import React from "react";

const Footer = () => {
	return (
		<React.Fragment>
			<footer className="footer">
				<div className="container-fluid">
					<div className="row">
						<div className="col-12">
							© {new Date().getFullYear()} Khan Academy<span className="d-none d-sm-inline-block">
								{" "}
								- Crafted with <i className="mdi mdi-heart text-danger" /> by Anvar_AKA.
							</span>
						</div>
					</div>
				</div>
			</footer>
		</React.Fragment>
	);
};

export default Footer;
