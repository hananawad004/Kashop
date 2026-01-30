
import React, { useState } from "react";
import {
  Box,
  Typography,
  Paper,
  IconButton,
  Button,
  Select,
  MenuItem,
  Stack,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import { useTranslation } from "react-i18next";
import { toast } from "react-toastify";

import useCartItems from "../../../hooks/useCartItems";
import useUpdateCartItem from "../../../hooks/useUpdateCartItem";
import useRemoveFromCart from "../../../hooks/useRemoveFromCart";
import useClearCart from "../../../hooks/useClearCart";
import useCheckout from "../../../hooks/useCheckout";
import LanguageSwitcher from "../../../LanguageSwitcher";

function Cart() {
  const { t } = useTranslation();
  const { data, isLoading } = useCartItems();
  const updateItem = useUpdateCartItem();
  const removeItem = useRemoveFromCart();
  const clearCart = useClearCart();
  const checkout = useCheckout();

  const [paymentMethod, setPaymentMethod] = useState("Visa");

  if (isLoading) return <Typography>{t("cart.loading")}</Typography>;


  const items = data?.items || [];
  console.log("Cart data from server:", data);
  const totalPrice = data?.cartTotal;
  const handleCheckout = () => {
    if (items.length === 0) {
      toast.error(t("cart.emptyCheckout"));
      return;
    }

    checkout.mutate(
      { PaymentMethod: paymentMethod },
      {
        onSuccess: () => {
          toast.success(t("cart.checkoutSuccess"));
          clearCart.mutate();
        },
        onError: (err) => {
          console.log(err.response?.data);
          toast.error("Checkout failed");
        },
      }
    );
  };


  return (
    <Box sx={{ p: 3 }}>
      <Stack direction="row" justifyContent="space-between" alignItems="center" mb={3}>
        <Typography variant="h4">{t("cart.title")}</Typography>
        <LanguageSwitcher />
      </Stack>

      <Paper sx={{ p: 2, mb: 3 }}>
        {items.length === 0 ? (
          <Typography>{t("cart.empty")}</Typography>
        ) : (
          items.map((item) => (
            <Box key={item.productId} sx={{ display: "flex", alignItems: "center", mb: 2 }}>
              <Box sx={{ flex: 2, display: "flex", alignItems: "center" }}>
                <IconButton onClick={() => removeItem.mutate(item.productId)}>
                  <DeleteIcon />
                </IconButton>
                <Typography>{item.productName}</Typography>
              </Box>

              <Typography sx={{ flex: 1 }}>${item.price}</Typography>

              <Box sx={{ flex: 1, display: "flex", alignItems: "center" }}>
                <Button
                  onClick={() =>
                    item.count === 1
                      ? removeItem.mutate(item.productId)
                      : updateItem.mutate({ cartItemId: item.productId, count: item.count - 1 })
                  }
                  size="small"
                >
                  −
                </Button>
                <Typography sx={{ mx: 1 }}>{item.count}</Typography>
                <Button
                  onClick={() =>
                    updateItem.mutate({ cartItemId: item.productId, count: item.count + 1 })
                  }
                  size="small"
                >
                  +
                </Button>
              </Box>

              {/* نجيب subtotal من السيرفر بدل ما نحسبه محلياً */}
              <Typography sx={{ flex: 1 }}>
                ${item.totalPrice ?? item.price * item.count}
              </Typography>
            </Box>
          ))
        )}
      </Paper>

      <Paper sx={{ p: 3 }}>
        <Typography variant="h6" mb={2}>{t("cart.summary")}</Typography>

        <Stack spacing={2} mb={2}>
          <Box sx={{ display: "flex", justifyContent: "space-between" }}>
            <Typography>{t("cart.shipping")}</Typography>
            <Typography>{t("cart.free")}</Typography>
          </Box>

          <Box sx={{ display: "flex", justifyContent: "space-between" }}>
            <Typography>{t("cart.total")}</Typography>
            <Typography>${totalPrice}</Typography> {/* هنا نعرض التوتال من السيرفر */}
          </Box>

          <Select
            fullWidth
            value={paymentMethod}
            onChange={(e) => setPaymentMethod(e.target.value)}
          >
            <MenuItem value="Visa">Visa</MenuItem>
            <MenuItem value="Cash">Cash</MenuItem>
          </Select>
        </Stack>

        <Stack direction="row" spacing={2}>
          <Button
            variant="outlined"
            color="error"
            onClick={() => clearCart.mutate()}
            fullWidth
          >
            {t("cart.clear")}
          </Button>
          <Button
            variant="contained"
            color="primary"
            onClick={handleCheckout}
            disabled={checkout.isLoading}
            fullWidth
          >
            {checkout.isLoading ? t("cart.processing") : t("cart.checkout")}
          </Button>
        </Stack>
      </Paper>
    </Box>
  );
}

export default Cart;
// import React, { useState } from "react";
// import {
//   Box,
//   Typography,
//   Paper,
//   IconButton,
//   Button,
//   Select,
//   MenuItem,
//   Stack,
// } from "@mui/material";
// import DeleteIcon from "@mui/icons-material/Delete";
// import { useTranslation } from "react-i18next";
// import { toast } from "react-toastify";

// import useCartItems from "../../../hooks/useCartItems";
// import useUpdateCartItem from "../../../hooks/useUpdateCartItem";
// import useRemoveFromCart from "../../../hooks/useRemoveFromCart";
// import useClearCart from "../../../hooks/useClearCart";
// import useCheckout from "../../../hooks/useCheckout";
// import LanguageSwitcher from "../../../LanguageSwitcher";

// function Cart() {
//   const { t } = useTranslation();
//   const { data, isLoading } = useCartItems();
//   const updateItem = useUpdateCartItem();
//   const removeItem = useRemoveFromCart();
//   const clearCart = useClearCart();
//   const checkout = useCheckout();

//   const [paymentMethod, setPaymentMethod] = useState("Visa");

//   if (isLoading) return <Typography>{t("cart.loading")}</Typography>;

//   const items = data?.items || [];
//   const totalPrice = data?.cartTotal ?? 0;

//   const handleCheckout = () => {
//     if (!items.length) return toast.error(t("cart.emptyCheckout"));

//     checkout.mutate(
//       { PaymentMethod: paymentMethod },
//       {
//         onSuccess: () => {
//           toast.success(t("cart.checkoutSuccess"));
//           clearCart.mutate();
//         },
//       }
//     );
//   };

//   return (
//     <Box sx={{ p: 3 }}>
//       <Stack direction="row" justifyContent="space-between" mb={3}>
//         <Typography variant="h4">{t("cart.title")}</Typography>
//         <LanguageSwitcher />
//       </Stack>

//       <Paper sx={{ p: 2, mb: 3 }}>
//         {items.length === 0 ? (
//           <Typography>{t("cart.empty")}</Typography>
//         ) : (
//           items.map((item) => (
//             <Box key={item.productId} sx={{ display: "flex", alignItems: "center", mb: 2 }}>
//               <Box sx={{ flex: 2, display: "flex", alignItems: "center" }}>
//                 <IconButton onClick={() => removeItem.mutate(item.productId)}>
//                   <DeleteIcon />
//                 </IconButton>
//                 <Typography>{item.productName}</Typography>
//               </Box>

//               {/* ✅ السعر من السيرفر */}
//               <Typography sx={{ flex: 1 }}>${item.price}</Typography>

//               <Box sx={{ flex: 1, display: "flex", alignItems: "center" }}>
//                 <Button
//                   onClick={() =>
//                     item.count === 1
//                       ? removeItem.mutate(item.productId)
//                       : updateItem.mutate({ cartItemId: item.productId, count: item.count - 1 })
//                   }
//                   size="small"
//                 >
//                   −
//                 </Button>
//                 <Typography sx={{ mx: 1 }}>{item.count}</Typography>
//                 <Button
//                   onClick={() =>
//                     updateItem.mutate({ cartItemId: item.productId, count: item.count + 1 })
//                   }
//                   size="small"
//                 >
//                   +
//                 </Button>
//               </Box>

//               {/* ✅ subtotal من السيرفر */}
//               <Typography sx={{ flex: 1 }}>
//                 ${item.totalPrice}
//               </Typography>
//             </Box>
//           ))
//         )}
//       </Paper>

//       <Paper sx={{ p: 3 }}>
//         <Typography variant="h6" mb={2}>{t("cart.summary")}</Typography>

//         <Box sx={{ display: "flex", justifyContent: "space-between" }}>
//           <Typography>{t("cart.total")}</Typography>
//           <Typography>${totalPrice}</Typography>
//         </Box>
//       </Paper>
//     </Box>
//   );
// }


// export default Cart;
