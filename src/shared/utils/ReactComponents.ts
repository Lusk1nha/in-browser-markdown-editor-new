import React from "react";

/**
 * Utility function to create a React component with specified props using React.createElement.
 *
 * @param {React.ComponentType} component - The React component type to be created.
 * @param {object} props - The props to be passed to the React component.
 * @returns {React.Component} The created React component.
 */
function createComponent(component: React.ComponentType, props?: object) {
  // Use React.createElement to instantiate a React component with the provided type and props.
  return React.createElement(component, props ?? {});
}

export { createComponent };
