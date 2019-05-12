import React from 'react'
export default ({ to, ...props }) => <a {...props} href={"#" + to} />;