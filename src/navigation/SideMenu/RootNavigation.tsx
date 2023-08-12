import React from 'react';

export const NavigationRef = React.createRef();

export const Navigation = (name: any, params: any) => {
  if (NavigationRef.current) {
    NavigationRef.current.navigate(name, params);
  }
};
