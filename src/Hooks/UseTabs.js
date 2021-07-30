import { useState } from "react";

const useTabs = (initalTab, allTabs) => {
  const [currentIdx, setCurrentIdx] = useState(initalTab);

  if (!allTabs || !Array.isArray(allTabs)) {
    return;
  }

  return {
    currentItem: allTabs[currentIdx],
    changeItem: setCurrentIdx
  };
};

export default useTabs;
