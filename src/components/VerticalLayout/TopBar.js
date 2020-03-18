import React, { useState } from "react";
import { Link } from "react-router-dom";

// import images
import logodarkImg from "../../assets/images/logo-dark.png";
import logosmImg from "../../assets/images/logo-sm.png";
import logolightImg from "../../assets/images/logo-light.png";

// Import other Dropdown

import ProfileMenu from "../../components/ProfileMenu";

const TopBar = props => {
	const [ isSearchOpen, setIsSearchOpen ] = useState(false);
	/**
   * Toggle Search
   */
	const toggleSearch = () => {
		setIsSearchOpen(!isSearchOpen);
	};

	/**
   * Toggle sidebar
   */
	const toggleMenu = () => {
		props.toggleMenuCallback();
	};

	return (
		<React.Fragment>
			<header id="page-topbar">
				<div className="navbar-header">
					<div className="d-flex">
						<div className="navbar-brand-box">
							<Link to="/dashboard" className="logo logo-dark">
								<span className="logo-sm">
									<img src={logosmImg} alt="" height="22" />
								</span>
								<span className="logo-lg">
									<img src={logodarkImg} alt="" height="17" />
								</span>
							</Link>

							<Link to="/dashboard" className="logo logo-light">
								<span className="logo-sm">
									<img src={logosmImg} alt="" height="22" />
								</span>
								<span className="logo-lg">
									<img src={logolightImg} alt="" height="18" />
								</span>
							</Link>
						</div>
						<button
							type="button"
							onClick={toggleMenu}
							className="btn btn-sm px-3 font-size-24 header-item waves-effect"
							id="vertical-menu-btn"
						>
							<i className="mdi mdi-menu" />
						</button>
						<form className="app-search d-none d-lg-block">
							<div className="position-relative">
								<input type="text" className="form-control" placeholder="Search..." />
								<span className="fa fa-search" />
							</div>
						</form>

						<div className="dropdown d-inline-block d-lg-none ml-2">
							<button
								type="button"
								className="btn header-item noti-icon waves-effect"
								id="page-header-search-dropdown"
								onClick={toggleSearch}
							>
								<i className="mdi mdi-magnify" />
							</button>
							<div
								className={
									isSearchOpen ? (
										"dropdown-menu dropdown-menu-lg dropdown-menu-left p-0 show"
									) : (
										"dropdown-menu dropdown-menu-lg dropdown-menu-left p-0"
									)
								}
							>
								<form className="p-3">
									<div className="form-group m-0">
										<div className="input-group">
											<input
												type="text"
												className="form-control"
												placeholder="Search ..."
												aria-label="Recipient's username"
											/>
											<div className="input-group-append">
												<button className="btn btn-primary" type="submit">
													<i className="mdi mdi-magnify" />
												</button>
											</div>
										</div>
									</div>
								</form>
							</div>
						</div>
					</div>

					<div className="d-flex">
						<ProfileMenu />
					</div>
				</div>
			</header>
		</React.Fragment>
	);
};

export default TopBar;
