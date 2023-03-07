import { Button, Stack } from "react-bootstrap";
import { UseShoppingCart } from "../context/ShoppingContext";
import storeItems from "../data/items.json";
import FormatCurrency from "../utilities/FormatCurrency";

type CardItemProps = {
  id: number;
  quantity: number;
};
export const CartItem = ({ id, quantity }: CardItemProps) => {
  const { removeFromCart } = UseShoppingCart();
  const item = storeItems.find((i) => i.id === id);

  if (item == null) return null;
  return (
    <>
      <Stack
        direction="horizontal"
        gap={2}
        className="d-flex align-items-center">
        <img
          src={item.imgUrl}
          style={{ width: "125px", height: "75px", objectFit: "cover" }}
        />
        <div className="me-auto">
          <div>
            {item.name}:{" "}
            {quantity > 1 && (
              <span className="text-muted" style={{ fontSize: ".65rem" }}>
                x{quantity}
              </span>
            )}
          </div>
          <div className="text-mutes" style={{ fontSize: ".75rem" }}>
            {FormatCurrency(item.price)}
          </div>
        </div>
        <div>{FormatCurrency(item.price * quantity)}</div>
        <Button
          variant="outline-danger"
          size="sm"
          onClick={() => removeFromCart(item.id)}>&times;</Button>
      </Stack>
    </>
  );
};
