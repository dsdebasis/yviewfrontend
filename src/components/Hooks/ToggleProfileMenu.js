import { useState } from "react";
function toggleProfileMenu() {
  const [click, setClick] = useState(false);
  function handleClick() {
    setClick(!click);
  }
  return { click, handleClick };
}

export default toggleProfileMenu;
