import React, { PropsWithChildren, useCallback } from 'react';
import './App.css';

const Heading = ({title}:{title: string}) => (
  <h2>{title}</h2>
);

const Box: React.FunctionComponent<PropsWithChildren> = ({children}) => (
  <div style={
    {
      padding: "1rem",
      fontWeight:"bold",
    }
  }>
    {children}
  </div>
);

const List: React.FunctionComponent<{
  items: string[];
  ez?: (item:string) => void
}>
= ({items, ez}) => (
  <ul>
    {
      items.map((item, index) => (
        <li key={index} onMouseOver={() => ez?.(item)}>{item}</li>//the '?.' means if the onClick handler isn't invoked we do nothing
      ))
    }
  </ul>
)

function App() {
  const onListClick = useCallback((item:string) => {
    alert(item);
  }, []);
  return (
    <div>
      <Heading title="Introduction"/>
      <Box>Hello There</Box>
      <List items={["one", "two","three"]} ez={onListClick}/>
    </div>
  );
}

export default App;
