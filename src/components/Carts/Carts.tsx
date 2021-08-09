import { Button } from "@material-ui/core";
import React from "react";
import { CartDefinition } from "../../App";
import Item from "../item/Item";
import Wrapper from "./carts.style";

type Props = {
  carts: CartDefinition[];
  addToCart: (items: CartDefinition) => void;
  removeToCart: (itemId: number) => void;
  clearAll: VoidFunction;
};

const NoItems = (): JSX.Element => {
  return (
    <h2>
      <span>No</span> Items have been added yet
    </h2>
  );
};

const Carts: React.FC<Props> = ({
  carts,
  addToCart,
  removeToCart,
  clearAll,
}) => {
  return (
    <Wrapper>
      <h3>Your Shopping Cart</h3>
      {carts.length === 0 ? (
        <NoItems />
      ) : (
        carts.map((item) => (
          <Item
            item={item}
            addToCart={addToCart}
            removeToCart={removeToCart}
            key={item.id}
          />
        ))
      )}
      {carts.length !== 0 ? (
        <Button
          color="secondary"
          variant="outlined"
          className="clear"
          onClick={clearAll}
        >
          Clear
        </Button>
      ) : null}
    </Wrapper>
  );
};

export default Carts;
