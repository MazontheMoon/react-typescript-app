import { useState } from "react";

interface Props {
    listItems: string[];
    heading: string;
    onSelectItem: (item: string) => void;
}

function ListGroup({ listItems, heading, onSelectItem } : Props) {
    
    //Hook
    const [selectedIndex, setSelectedIndex] = useState(-1);


  return (
    <>
      <h1>{heading}</h1>
      {listItems.length === 0 && <p>No item found</p>}
      <ul className="list-group">
        {listItems.map((item, index) => (
          <li className={selectedIndex === index ? 'list-group-item active' : 'list-group-item'} key={item} onClick={() => { 
            setSelectedIndex(index); 
            onSelectItem(item)
        }}>{item}</li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
