import React, { useEffect, useState } from "react";

const useBodyScrollLock = () => {
  const bodyStyle = document.body.style;
  const [isLock, setIsLock] = useState(bodyStyle.overflowY === "hidden");

  useEffect(() => {
    bodyStyle.overflowY = isLock ? "hidden" : "auto";
  }, [isLock, bodyStyle]);

  const toggle = (data) => {
    if (isLock == data) {
      return;
    }
    setIsLock(data);
    // console.log(data);
  };

  return [isLock, toggle];
};

export default useBodyScrollLock;
