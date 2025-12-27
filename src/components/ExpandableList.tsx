import { useState } from "react";

interface Props {
  initialItems?: string[];
}

export const ExpandableList = ({ initialItems }: Props) => {
  const [listItems, setListItems] = useState<string[]>(initialItems ?? []);
  const [currentVal, setCurrentVal] = useState<string>();
  const addItemToList = () => {
    setListItems([...listItems, currentVal]);
    setCurrentVal("");
  };

  return (
    <div>
      <input
        type="text"
        value={currentVal}
        size={50}
        onChange={(e) => setCurrentVal(e.target.value)}
      />

      <button name="button" onClick={addItemToList}>
        Agregar
      </button>

      <ul>
        {listItems.map((li) => {
          return <li key={li}>{li}</li>;
        })}
      </ul>
    </div>
  );
};
