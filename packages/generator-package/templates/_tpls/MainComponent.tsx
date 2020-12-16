import React from 'react';
import component from '@rdphv/react-component';

export const <%- mainComponentName -%> = component<<%- mainComponentName -%>Props>({
    root: {
    },
}, ({classes = {}}: <%- mainComponentName -%>Props) => (
    <div className={classes.root}>
        <%- mainComponentName.toUpperCase() %>
    </div>
));

export interface <%- mainComponentName -%>Props {
    classes?: any,
}

export default <%- mainComponentName -%>