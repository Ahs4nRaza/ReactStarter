import React from "react";
import {useBreadcrumb} from "../../hooks/useBreadcrumbs";
import RoutePaths from "../../routes/routePath";
import {Button} from "antd";
import {useNavigate} from "react-router-dom";

function TestPage() {
	const navigate = useNavigate();

	useBreadcrumb({
		parent: {
			label: "Test Page",
			url: RoutePaths.MAIN,
		},
		child: {
			label: "",
		},
	});

	const navigateToChildPage = () => {
		navigate(RoutePaths.TEST_PAGE_CHILD);
	};
	const navigateToSamplePage = () => {
		navigate(RoutePaths.TEST_PAGE_SAMPLE_FILTERS);
	};

	return (
		<div
			style={{
				display: "flex",
				flexDirection: "column",
				justifyContent: "center",
				alignItems: "center",
				color: "white",
				fontSize: "24px",
				backgroundColor: "#2e2f2e",
				padding: "20px",
			}}
		>
			<p>Test Page</p>
			<Button
				style={{
					marginTop: "20px",
					backgroundColor: "#5754a8",
					color: "white",
				}}
				onClick={navigateToChildPage}
			>
				Go to Child Page
			</Button>

			{/* Add spacing between elements */}
			<div style={{margin: "20px 0"}}></div>

			<p>Filters Test Page</p>
			<Button
				style={{
					marginTop: "20px",
					backgroundColor: "#5754a8",
					color: "white",
				}}
				onClick={navigateToSamplePage}
			>
				Go to Filters Page
			</Button>
		</div>
	);
}

export default TestPage;
