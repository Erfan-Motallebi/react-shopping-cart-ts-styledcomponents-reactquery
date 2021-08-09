import { CartDefinition } from "../../App";
import { Button } from "@material-ui/core";

type Props = {
  item: CartDefinition;
  addToCart: (cartInfo: CartDefinition) => void;
};

function Items({ item, addToCart }: Props): JSX.Element {
  return (
    <>
      <img src={item.image} alt={item.title} />
      <div className="details">
        <h3>{item.title}</h3>
        <p>{item.description}</p>
        <h2>${item.price}</h2>
      </div>
      <Button type="button" onClick={() => addToCart(item)}>
        add to cart
      </Button>
    </>
  );
}

export default Items;
