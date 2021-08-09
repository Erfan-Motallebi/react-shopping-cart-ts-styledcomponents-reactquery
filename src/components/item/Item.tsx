import { Button } from "@material-ui/core";
import Box from "@material-ui/core/Box";
import React from "react";
import { CartDefinition } from "../../App";
import Wrapper from "./items.style";

interface Props {
  item: CartDefinition;
  addToCart: (cartItem: CartDefinition) => void;
  removeToCart: (itemId: number) => void;
}

function Item({ item, addToCart, removeToCart }: Props): JSX.Element {
  const totalPrice = (item: CartDefinition): string => {
    return (item.price * item.amount).toFixed(2);
  };
  return (
    <Wrapper>
      <section className="details">
        <h4 className="title">{item.title}</h4>
        <article className="price">
          <h4>Price: $ {item.price}</h4>
          <h4>Total: {`$ ${totalPrice(item)}`}</h4>
        </article>
        <article className="btn">
          <Box boxShadow={2}>
            <Button variant="outlined" onClick={() => removeToCart(item.id)}>
              -
            </Button>
          </Box>
          <Box style={{ marginTop: "8px" }}>{item.amount}</Box>
          <Box boxShadow={2}>
            <Button variant="outlined" onClick={() => addToCart(item)}>
              +
            </Button>
          </Box>
        </article>
      </section>
      <section className="image">
        <img src={item.image} alt={item.title} />
      </section>
    </Wrapper>
  );
}

export default Item;
