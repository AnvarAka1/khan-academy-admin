import React, { Component } from "react";
import { withRouter, Link } from "react-router-dom";
import MetisMenu from "metismenujs";

import SimpleBar from "simplebar-react";

const SidebarContent = props => {
	const content = sideBarList().map(menu => {
		return (
			<li key={menu.id}>
				<Link to={menu.link} className={`waves-effect ${menu.submenus && "has-arrow"}`}>
					<i className={menu.icon} />
					<span>{menu.title}</span>
				</Link>
				{menu.submenus && (
					<ul className="sub-menu" aria-expanded="false">
						{menu.submenus.map(sub => {
							return (
								<li key={sub.id}>
									<Link to={sub.link}>{sub.title}</Link>
								</li>
							);
						})}
					</ul>
				)}
			</li>
		);
	});
	return (
		<div id="sidebar-menu">
			<ul className="metismenu list-unstyled" id="side-menu">
				<li className="menu-title">Main</li>
				{content}
			</ul>
		</div>
	);
};

const sideBarList = () => {
	return [
		{
			id: 0,
			link: "/#",
			title: "Dashboard",
			icon: "ti-home"
		},
		{
			id: 1,
			link: "/#",
			title: "Courses",
			icon: "ti-comments",
			submenus: [
				{
					id: 0,
					link: "/lessons",
					title: "Lessons"
				},
				{
					id: 1,
					link: "/course-categories",
					title: "Course categories"
				}
			]
		},
		{
			id: 2,
			link: "/#",
			title: "Blog",
			icon: "ti-email",
			submenus: [
				{
					id: 0,
					link: "/articles",
					title: "Articles"
				},
				{
					id: 1,
					link: "/blogs-categories",
					title: "Blog categories"
				}
			]
		},
		{
			id: 3,
			link: "/#",
			title: "Longread",
			icon: "ti-notepad",
			submenus: [
				{
					id: 0,
					link: "/longreads",
					title: "Longreads"
				},
				{
					id: 1,
					link: "/series",
					title: "Series"
				},
				{
					id: 2,
					link: "/longreads-categories",
					title: "Longread categories"
				}
			]
		},
		{
			id: 4,
			link: "/#",
			title: "Guide",
			icon: "ti-receipt",
			submenus: [
				{
					id: 0,
					link: "/chapters",
					title: "Chapters"
				},
				{
					id: 1,
					link: "/guides",
					title: "Guides"
				},
				{
					id: 2,
					link: "/guides-categories",
					title: "Guide categories"
				}
			]
		},
		{
			id: 5,
			link: "/#",
			title: "Profession",
			icon: "ti-user",
			submenus: [
				{
					id: 0,
					link: "/professions",
					title: "Professions"
				}
			]
		},
		{
			id: 6,
			link: "/users",
			title: "Users",
			icon: "ti-calendar"
		},
		{
			id: 7,
			link: "/admins",
			title: "Admins",
			icon: "ti-star"
		},
		{
			id: 8,
			link: "/#",
			title: "Miscellaneous",
			icon: "ti-bookmark-alt",
			submenus: [
				{
					id: 0,
					link: "/numbers",
					title: "Numbers"
				},
				{
					id: 1,
					link: "/donors",
					title: "Donors"
				},
				{
					id: 2,
					link: "/reports",
					title: "Reports"
				},
				{
					id: 3,
					link: "/persons",
					title: "Persons"
				}
			]
		}
	];
};
class Sidebar extends Component {
	constructor(props) {
		super(props);
		this.state = {};
	}

	componentDidMount() {
		this.initMenu();
	}

	componentDidUpdate(prevProps) {
		if (this.props.type !== prevProps.type) {
			this.initMenu();
		}
	}

	initMenu() {
		if (this.props.type !== "condensed" || this.props.isMobile) {
			new MetisMenu("#side-menu");

			var matchingMenuItem = null;
			var ul = document.getElementById("side-menu");
			var items = ul.getElementsByTagName("a");
			for (var i = 0; i < items.length; ++i) {
				if (this.props.location.pathname === items[i].pathname) {
					matchingMenuItem = items[i];
					break;
				}
			}
			if (matchingMenuItem) {
				this.activateParentDropdown(matchingMenuItem);
			}
		}
	}

	activateParentDropdown = item => {
		item.classList.add("mm-active");
		const parent = item.parentElement;

		if (parent) {
			parent.classList.add("mm-active"); // li
			const parent2 = parent.parentElement;

			if (parent2) {
				parent2.classList.add("mm-show");

				const parent3 = parent2.parentElement;

				if (parent3) {
					parent3.classList.add("mm-active"); // li
					parent3.childNodes[0].classList.add("mm-active"); //a
					const parent4 = parent3.parentElement;
					if (parent4) {
						parent4.classList.add("mm-active");
					}
				}
			}
			return false;
		}
		return false;
	};

	render() {
		return (
			<React.Fragment>
				{this.props.type !== "condensed" ? (
					<SimpleBar style={{ maxHeight: "100%" }}>
						<SidebarContent />
					</SimpleBar>
				) : (
					<SidebarContent />
				)}
			</React.Fragment>
		);
	}
}

export default withRouter(Sidebar);
