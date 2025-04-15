import React from 'react'
import { useBreadcrumb } from '../../hooks/useBreadcrumbs';

function TestPage() {
    useBreadcrumb("Test Page");
    return (
        <div>TestPage</div>
    )
}

export default TestPage