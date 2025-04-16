export const TableConfig = {

    showActionColumn: true, // boolean value
    disableSortTable: false, // boolean value
    disabledSortColumnIndex: [], // will contain index of columns on which sorting is to be disabled (to be overridden from page component if needed)

    columns: [
        { title: "column name", dataIndex: "column_name_without_special_characters_and_underscore_for_spaces" },
        "Actions"
    ], // this is to come from constant's file for respective page component

    actionOptions: [
        {
            actionName: "Name of Action",
            staticIcon: "/path/to/action-icon.png",  // Path to static icon image
            renderDynamicIcon: false, // boolean value
            tooltipMessage: "default message", // contain tooltip message (to be overridden from page component if needed)

            disabled: () => false,  // This will be used to disable action based on some event (to be overridden from page component)
            iconRenderer: () => { },  // This will be used to show dynamic icons like progress circle (to be overridden from page component)
            handleOnClickEvent: () => { }, // This will be used for handling onClick events (to be overridden from page component)

        },
    ],

    styling: {
        table: {
            // custom styling for table
        },

        columns: {
            "Column Name": {
                render: () => {
                    // Return the styled column value
                    return (
                        <></>
                    );
                },
            },

            "Action Column": {
                style: {
                    container: {}, // will contain css for container that hold buttons
                    button: {}, // will contain css for buttons
                },
            },
        }
    }
}