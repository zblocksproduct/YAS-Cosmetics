import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function Empty() {
  const navigate = useNavigate();
  useEffect(() => {
    navigate("/claim");
  }, []);
  return <div></div>;
}
