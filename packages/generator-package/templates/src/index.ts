<% if (react) { -%>export * from './<%- mainComponentName -%>';
export {default as default} from './<%- mainComponentName -%>';
<% } else { -%>export default () => {} // @todo implement this function.
<% } -%>