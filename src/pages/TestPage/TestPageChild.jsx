import React from "react";
import {useBreadcrumb} from "../../hooks/useBreadcrumbs";
import RoutePaths from "../../routes/routePath";
import {DynamicTable} from "../../components/Table/DynamicTable";
import {handleAntTableChange} from "../../utils";

const sampleData = [
	{id: 1, name: "John Doe", age: 30},
	{id: 2, name: "Jane Doe", age: 25},
	{id: 3, name: "Bob Smith", age: 40},
];

const sampleTableConfig = {
	showActionColumn: false,
	disableSortTable: false,
	disabledSortColumnIndex: [],

	columns: [
		{title: "id", dataIndex: "id"},
		{title: "name", dataIndex: "name"},
		{title: "age", dataIndex: "age"},
	],

	actionOptions: [],

	styling: {
		table: {
			// custom styling for table
		},

		columns: {
			id: {
				render: (_, record) => {
					return <> {record.id}</>;
				},
			},

			name: {
				render: (_, record) => {
					return <> {record.name}</>;
				},
			},

			age: {
				render: (_, record) => {
					return <> {record.age}</>;
				},
			},
		},
	},
};

function TestPage() {
	useBreadcrumb({
		parent: {
			label: "Test Page",
			url: RoutePaths.MAIN,
		},
		child: {
			label: "Test Page Child",
		},
	});

	return (
		<div
			style={{
				display: "flex",
				justifyContent: "center",
				alignItems: "center",
				color: "white",
				fontSize: "24px",
				backgroundColor: "#2e2f2e",
			}}
		>
			<DynamicTable
				data={sampleData}
				handleOnTableChange={handleAntTableChange}
				tableConfig={sampleTableConfig}
			/>
		</div>
	);
}

export default TestPage;
