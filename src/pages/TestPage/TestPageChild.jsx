import React from "react";
import {useBreadcrumb} from "../../hooks/useBreadcrumbs";
import RoutePaths from "../../routes/routePath";
import {DynamicTable} from "../../components/Table/DynamicTable";
import {handleAntTableChange, sanitizeValue, formatDateTime} from "../../utils";

const sampleData = [
	{
		id: 1,
		name: "John Doe",
		age: 30,
		data: sanitizeValue("some data"),
		date: formatDateTime("2024-05-01T15:30:45Z", "YYYY/MM/DD"),
	},
	{
		id: 2,
		name: "Jane Doe",
		age: 25,
		data: sanitizeValue(""),
		date: formatDateTime("2024-05-01T15:30:45Z", "DD-MM-YYYY", {
			showDate: true,
		}),
	},
	{
		id: 3,
		name: "Bob Smith",
		age: 40,
		data: sanitizeValue(null),
		date: formatDateTime("Wednesday, 2 April 2024 11:50:20 AM", "DD/MM/YY", {
			showDate: true,
			showSeconds: true,
			showAmPm: true,
		}),
	},
];

const sampleTableConfig = {
	showActionColumn: false,
	disableSortTable: true,
	disabledSortColumnIndex: [0, 1, 2, 3, 4],

	columns: [
		{title: "id", dataIndex: "id"},
		{title: "name", dataIndex: "name"},
		{title: "age", dataIndex: "age"},
		{title: "data", dataIndex: "data"},
		{title: "date", dataIndex: "date"},
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

			data: {
				render: (_, record) => {
					return <> {record.data}</>;
				},
			},

			date: {
				render: (_, record) => {
					return <> {record.date.date + " " + record.date.time}</>;
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
