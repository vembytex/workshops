import React from 'react';
import { useState, useEffect } from 'react';

export interface ISomeItem {
  name: string;
  type: 'a' | 'b' | 'c';
}

export interface IAppProps {
  filterBy: ISomeItem['type'];
  items: ISomeItem[];
}

// TASK: Print all items names filtered by prop
export default function App({ items, filterBy }: IAppProps) {
  return <ul></ul>;
}
