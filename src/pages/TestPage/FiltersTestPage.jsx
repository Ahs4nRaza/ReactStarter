import React, {useState, useEffect} from "react";
import FilterController from "../../components/FilterController/FilterController";
import {SearchOutlined} from "@ant-design/icons";
import {useBreadcrumb} from "../../hooks/useBreadcrumbs";
import RoutePaths from "../../routes/routePath";
import {updateFilterValue, handleClearFilters} from "../../utils";

const TestPage = () => {
	useBreadcrumb({
		parent: {
			label: "Test Page",
			url: RoutePaths.MAIN,
		},
		child: {
			label: "Filters Test Page",
		},
	});

	const [filters, setFilters] = useState({
		search: "",
		status: "active",
		role: [],
		sortOrder: "asc",
		sortKey: "id",
	});

	const handleSearchChange = (value) => {
		setFilters((prev) => updateFilterValue(prev, "search", value ?? ""));
	};

	const handleFilterChange = (key) => (value) => {
		setFilters((prev) => updateFilterValue(prev, key, value));
	};

	const clearFilters = () => {
		const newFilters = handleClearFilters(filters, true);
		setFilters(newFilters);
	};

	const config = {
		searchInput: {
			required: false,
			placeholder: "Search...",
			value: filters.search,
			onChange: handleSearchChange,
			width: 200,
			allowClear: true,
			icon: <SearchOutlined />,
			className: "",
			style: {},
			delay: 5000,
		},
		filterSelect: {
			required: true,
			children: [
				{
					key: "status",
					label: "Status",
					value: filters.status,
					defaultValue: "active",
					mode: null,
					options: [
						{label: "Active", value: "active"},
						{label: "Inactive", value: "inactive"},
					],
					placeholder: "Select status",
					width: 200,
					disabled: false,
					allowClear: true,
					showSearch: true,
					notFoundContent: "No options",
					onChange: handleFilterChange("status"),
					onFocus: () => {},
					className: "",
					style: {},
				},
				{
					key: "role",
					label: "Role",
					value: filters.role,
					defaultValue: [],
					mode: "multiple",
					options: [
						{label: "Admin", value: "admin"},
						{label: "Editor", value: "editor"},
					],
					placeholder: "Select roles",
					allowClear: true,
					showSearch: true,
					onChange: handleFilterChange("role"),
					onFocus: () => {},
					className: "",
					style: {},
				},
			],
		},
	};

	useEffect(() => {
		console.log("Filters updated:", filters);
	}, [filters]);

	return (
		<div className="p-6 space-y-4">
			<h2 className="text-xl font-semibold">Filter Controller Demo</h2>
			<FilterController config={config} clearFilters={clearFilters} />
			<pre className="bg-gray-100 p-4 rounded">
				{JSON.stringify(filters, null, 2)}
			</pre>
		</div>
	);
};

export default TestPage;
