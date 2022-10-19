import React, { useContext } from "react";
import { AppContext } from "./context";
import { Types } from "./reducers";

const Usage = () => {
  const { state, dispatch } = useContext(AppContext);
  console.log(state);

  return (
    <div
      onClick={() =>
        dispatch({
          type: Types.Create,
          payload: { id: 1, name: "Hello", price: 200 },
        })
      }
    >
      Click
      {state.products.map((item) => item.name)}
    </div>
  );
};

export default Usage;
