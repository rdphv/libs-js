import React from 'react';
import <%- mainComponentName -%> from '../src';
//import {action} from '@storybook/addon-actions';
import {withKnobs} from '@storybook/addon-knobs';

export default {
    title: '<%- mainComponentName -%>',
    component: <%- mainComponentName -%>,
    decorators: [withKnobs],
}

export const basic = () => <<%- mainComponentName -%> />;