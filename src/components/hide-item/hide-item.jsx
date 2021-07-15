import { useState } from "react";
const HideItem = (props) => {
  const { children } = props;

  const [visible, setVisible] = useState(true);

  const handleVisibility = () => {
    setVisible((v) => !v);
  };

  return <div onClick={handleVisibility}>{visible && children}</div>;
};

export default HideItem;
