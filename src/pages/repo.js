import React, { useState } from "react";
import { useLocation } from "react-router-dom";

const repo = () => {
  const location = useLocation();
  const [content, setContent] = useState(location.state.content);
  return <div>{content}</div>;
};

export default repo;
