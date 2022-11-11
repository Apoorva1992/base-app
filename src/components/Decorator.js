import { memo } from "react";

const Decorator = () =>{
  return (
    <div>I am just a decorator</div>
  )
}

export default memo(Decorator);