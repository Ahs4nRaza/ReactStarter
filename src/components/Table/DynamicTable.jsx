import { Button, Table, Tooltip } from "antd";

export const DynamicTable = ({ data, handleOnTableChange, tableConfig, handleRowSelection, customLocale }) => {

    // Helper function to render action buttons in the Action column
    const renderActionButtons = (record) => {
        const actionColumnStyle = tableConfig?.styling?.columns?.Action?.style || {};

        return tableConfig?.actionOptions?.map((action) => {
            const isDisabled = action?.disabled && action.disabled(record);
            const actionButtonClass = isDisabled ? "disabled" : "";

            return (
                <Tooltip title={action?.tooltipMessage || ""} key={action?.actionName}>
                    <Button
                        onClick={() => !isDisabled && action?.handleOnClickEvent(record)}
                        style={actionColumnStyle?.button}
                        className={actionButtonClass}
                        icon={
                            action?.renderDynamicIcon ? (
                                action?.iconRenderer(record) // Dynamically renders Progress or icon
                            ) : (
                                <img src={action?.staticIcon} alt={action?.actionName} />
                            )
                        }
                    >
                        {action?.actionName}
                    </Button>
                </Tooltip>
            );
        });
    };

    // Helper function to generate the columns dynamically
    const generateColumns = () => {
        return tableConfig?.columns?.map((column, columnIndex) => {
            const columnName = typeof column === "string" ? column : column.title;
            const dataKey = typeof column === "string"
                ? column.toLowerCase().replace(/[\s-]/g, "_").replace(/[^\w\s]/g, "")
                : column.dataIndex;

            const isActionColumn = ["Action", "Actions"].includes(columnName);
            const filteredSortingColumns = !(tableConfig?.disableSortTable && tableConfig?.disabledSortColumnIndex.includes(columnIndex));

            if (isActionColumn && tableConfig?.showActionColumn) {
                return {
                    title: columnName,
                    key: `${columnName}-${columnIndex}`,
                    render: (_, record) => (
                        <div style={tableConfig?.styling?.columns?.[columnName]?.style?.container}>
                            {renderActionButtons(record)}
                        </div>
                    ),
                };
            }

            return {
                title: columnName,
                dataIndex: dataKey,
                key: `${columnName}-${columnIndex}`, // ✅ Unique key here
                sorter: filteredSortingColumns,
                render: tableConfig?.styling?.columns?.[columnName]?.render
                    ? (text, record) =>
                        tableConfig.styling.columns[columnName].render(text, record)
                    : undefined,
            };
        });
    };



    return (
        <Table
            dataSource={data}
            columns={generateColumns()}
            onChange={handleOnTableChange}

            rowKey={(record) => record?.id}
            rowHoverable={false}
            rowSelection={handleRowSelection}

            showSorterTooltip={false}
            sortDirections={["ascend", "descend"]}

            style={tableConfig?.styling?.table}
            pagination={false}
            className=""
            locale={customLocale}
        />
    );
};
