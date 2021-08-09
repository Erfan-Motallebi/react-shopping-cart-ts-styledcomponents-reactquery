import Grid from "@material-ui/core/Grid";
import { useQuery } from "react-query";
import { Wrapper, StyledButton } from "./components/items/main.style";
import LinearProgress from "@material-ui/core/LinearProgress";
import Typography from "@material-ui/core/Typography";
import Items from "./components/items/Items";
import Drawer from "@material-ui/core/Drawer";
import { useEffect, useState } from "react";
import AddShoppingCartIcon from "@material-ui/icons/AddShoppingCart";
import { Badge } from "@material-ui/core";
import Carts from "./components/Carts/Carts";

export type CartDefinition = {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  amount: number;
};

const getCarts = async (): Promise<CartDefinition[]> => {
  return await (
    await fetch("https://fakestoreapi.com/products", { method: "GET" })
  ).json();
};

const App = (): JSX.Element => {
  const definedCarts = () => {
    const listOfCarts = localStorage.getItem("carts");
    if (listOfCarts) {
      return JSON.parse(listOfCarts);
    } else {
      return [];
    }
  };

  const [open, setOpen] = useState(false);
  const [cartItems, setCartItems] = useState(
    definedCarts() as CartDefinition[]
  );
  const { data, isLoading, isError } = useQuery<CartDefinition[] | undefined>(
    "getCarts",
    getCarts
  );

  useEffect(() => {
    localStorage.setItem("carts", JSON.stringify(cartItems));
  }, [cartItems]);

  const getTotalItems = (carts: CartDefinition[]) => {
    const initialValue: number = 0;
    const assembledAmount: number = carts.reduce(
      (acc: number, item: CartDefinition) => acc + item.amount,
      initialValue
    );
    return assembledAmount;
  };

  const addToCart = (cartInfo: CartDefinition) => {
    setCartItems((prevState) => {
      const isItemInCart = prevState.find((item) => item.id === cartInfo.id);
      if (isItemInCart) {
        return prevState.map((item) =>
          item.id === cartInfo.id
            ? {
                ...item,
                amount: item.amount + 1,
              }
            : item
        );
      }
      return [...prevState, { ...cartInfo, amount: 1 }];
    });
  };

  const removeToCart = (itemId: number): void => {
    setCartItems((prevItems) => {
      const foundCart: CartDefinition | undefined = prevItems.find(
        (item) => item.id === itemId
      );
      console.log(foundCart);
      if (foundCart!.amount > 1) {
        return prevItems.map((item) => {
          if (item.id === itemId) {
            item.amount -= 1;
          }
          return item;
        });
      }
      return prevItems.filter((item) => item.id !== itemId);
    });
  };

  const clearAll: VoidFunction = () => {
    setCartItems([]);
  };

  if (isLoading) return <LinearProgress></LinearProgress>;
  if (isError)
    return (
      <Typography color="secondary" variant="h1">
        There's something going on but wrong here
      </Typography>
    );

  return (
    <Wrapper>
      <Drawer
        anchor="right"
        open={open}
        onClose={() => setOpen(false)}
        className="drawer"
      >
        <Carts
          carts={cartItems}
          addToCart={addToCart}
          removeToCart={removeToCart}
          clearAll={clearAll}
        />
      </Drawer>
      <StyledButton onClick={() => setOpen(true)}>
        <Badge color="secondary" badgeContent={getTotalItems(cartItems)}>
          <AddShoppingCartIcon />
        </Badge>
      </StyledButton>
      <Grid
        spacing={4}
        container
        style={{ padding: "10px 20px" }}
        justifyContent={"space-around"}
      >
        {data?.map((item: CartDefinition) => (
          <Grid item xs={12} sm={4} md={3} key={item.id} className="items">
            <Items item={item} addToCart={addToCart} />
          </Grid>
        ))}
      </Grid>
    </Wrapper>
  );
};

export default App;
