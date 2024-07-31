import { Box, Typography, useMediaQuery } from "@mui/material";
import splash from "/images/footerBackSplash.png";

const Shipping = () => {
  const isTablet = useMediaQuery("(max-width:1113px)");
  return (
    <Box
      sx={{
        position: "relative",
        minHeight: "100vh",
        width: "100%",
      }}
    >
      <Box
        component="img"
        src={splash}
        alt="Background Splash"
        sx={{
          position: "absolute",
          top: 0,
          right: 0,
          opacity: 0.7,
          width: isTablet ? "140%" : "70%", // Adjust the width as needed
          height: "auto", // Maintain aspect ratio
          zIndex: 1,
        }}
      />
      <Box
        sx={{
          position: "relative",
          width: isTablet ? "90%" : "70%",

          zIndex: 2, // Ensure this content is above the background image
          padding: 2,
        }}
      >
        <Box
          sx={{
            padding: !isTablet ? "50px 140px 50px 50px" : "10px",
            textAlign: isTablet ? "left" : "justify",
          }}
        >
          <Typography
            variant="h3"
            sx={{ color: "#9cf5b8", marginBottom: 2, marginTop: 3 }}
          >
            Shipping Policy
          </Typography>
          <br />
          <Typography
            variant="body1"
            sx={{ marginBottom: 2, color: "white", lineHeight: 2 }}
          >
            Wibhoo is committed to excellence, and the full satisfaction of our
            customers.
          </Typography>
          <Typography
            variant="body1"
            sx={{ marginBottom: 2, color: "white", lineHeight: 2 }}
          >
            Wibhoo proudly offers shipping services. Be assured we are doing
            everything in our power to get your order to you as soon as
            possible. Please consider any holidays that might impact delivery
            times. https://www.wibhoo.shop also offers same day dispatch.
          </Typography>
          <Typography
            variant="body1"
            sx={{
              marginBottom: 2,
              color: "white",
              lineHeight: 2,
              marginTop: 5,
            }}
          >
            2. SHIPPING
          </Typography>
          <Typography
            variant="body1"
            sx={{ marginBottom: 2, color: "white", lineHeight: 2 }}
          >
            All orders for our products are processed and shipped out in 4-10
            business days. Orders are not shipped or delivered on weekends or
            holidays. If we are experiencing a high volume of orders, shipments
            may be delayed by a few days. Please allow additional days in
            transit for delivery. If there will be a significant delay in the
            shipment of your order, we will contact you via email.
          </Typography>
          <Typography
            variant="body1"
            sx={{
              marginBottom: 2,
              color: "white",
              lineHeight: 2,
              marginTop: 5,
            }}
          >
            3. WRONG ADDRESS DISCLAIMER
          </Typography>
          <Typography variant="body1" sx={{ color: "white", lineHeight: 2 }}>
            It is the responsibility of the customers to make sure that the
            shipping address entered is correct.
          </Typography>
          <Typography
            variant="body1"
            sx={{ marginBottom: 2, color: "white", lineHeight: 2 }}
          >
            We do our best to speed up processing and shipping time, so there is
            always a small window to correct an incorrect shipping address.
            Please contact us immediately if you believe you have provided an
            incorrect shipping address.
          </Typography>
          <Typography
            variant="body1"
            sx={{
              marginBottom: 2,
              color: "white",
              lineHeight: 2,
              marginTop: 5,
            }}
          >
            4. UNDELIVERABLE ORDERS
          </Typography>
          <Typography
            variant="body1"
            sx={{ marginBottom: 2, color: "white", lineHeight: 2 }}
          >
            Orders that are returned to us as undeliverable because of incorrect
            shipping information are subject to a restocking fee to be
            determined by us.
          </Typography>
          <Typography
            variant="body1"
            sx={{
              marginBottom: 2,
              color: "white",
              lineHeight: 2,
              marginTop: 5,
            }}
          >
            5. LOST/STOLEN PACKAGES
          </Typography>
          <Typography
            variant="body1"
            sx={{ marginBottom: 2, color: "white", lineHeight: 2 }}
          >
            https://www.wibhoo.shop is not responsible for lost or stolen
            packages. If your tracking information states that your package was
            delivered to your address and you have not received it, please
            report to the local authorities.
          </Typography>
          <Typography
            variant="body1"
            sx={{
              marginBottom: 2,
              color: "white",
              lineHeight: 2,
              marginTop: 5,
            }}
          >
            6. RETURN REQUEST DAYS
          </Typography>
          <Typography
            variant="body1"
            sx={{ marginBottom: 2, color: "white", lineHeight: 2 }}
          >
            https://www.wibhoo.shop allows you to return its item (s) within a
            period of 7 days. Kindly be advised that the item (s) should be
            returned unopened and unused.
          </Typography>
          <Typography
            variant="body1"
            sx={{
              marginBottom: 2,
              color: "white",
              lineHeight: 2,
              marginTop: 5,
            }}
          >
            7. OUT OF STOCK ITEM PROCESS
          </Typography>
          <Typography
            variant="body1"
            sx={{ marginBottom: 2, color: "white", lineHeight: 2 }}
          >
            https://www.wibhoo.shop has the following options in the event there
            are items which are out of stock https://www.wibhoo.shop Wait for
            all items to be in stock before dispatching.
          </Typography>
          <Typography
            variant="body1"
            sx={{
              marginBottom: 2,
              color: "white",
              lineHeight: 2,
              marginTop: 5,
            }}
          >
            8. IMPORT DUTY AND TAXES
          </Typography>
          <Typography
            variant="body1"
            sx={{ marginBottom: 2, color: "white", lineHeight: 2 }}
          >
            When dealing with https://www.wibhoo.shop you have the following
            options when it comes to taxes as well as import duties:You have the
            option of pre-paying whereby https://www.wibhoo.shop will include
            the amount in the price of the order.
          </Typography>
          <Typography
            variant="body1"
            sx={{
              marginBottom: 2,
              color: "white",
              lineHeight: 2,
              marginTop: 5,
            }}
          >
            9. ACCEPTANCE
          </Typography>
          <Typography
            variant="body1"
            sx={{ marginBottom: 2, color: "white", lineHeight: 2 }}
          >
            By accessing our site and placing an order you have willingly
            accepted the Shippping of this Shipping Policy.
          </Typography>
          <Typography
            variant="body1"
            sx={{
              marginBottom: 2,
              color: "white",
              lineHeight: 2,
              marginTop: 5,
            }}
          >
            10. CONTACT INFORMATION
          </Typography>
          <Typography variant="body1" sx={{ color: "white", lineHeight: 2 }}>
            In the event you have any questions or comments please reach us via
            the following contacts:
          </Typography>
          <Typography
            variant="body1"
            sx={{ marginBottom: 2, color: "white", lineHeight: 2 }}
          >
            Email - care@wibhoo.shop
          </Typography>
          <Typography
            variant="h4"
            sx={{ color: "#9cf5b8", marginBottom: 2, marginTop: 10 }}
          >
            Shipping Policy
          </Typography>
          <ul
            style={{
              listStyle: "circle",
              color: "white",
              textAlign: isTablet ? "left" : "justify",
              lineHeight: 2,
              fontSize: "17px",
              marginTop: "30px",
            }}
          >
            <li
              style={{
                marginTop: "10px",
              }}
            >
              Customers can return or exchange eligible* items within 7 days of
              order fulfillment. To initiate a return or exchange.
            </li>
            <li
              style={{
                marginTop: "10px",
              }}
            >
              Exchanges and returns for store credit are free for your first
              request. Final sale items* are not eligible for return.
            </li>
            <li
              style={{
                marginTop: "10px",
              }}
            >
              All returns and exchanges must be unworn, unwashed, unused, and in
              original condition with tags to be eligible for return. Refunds or
              exchanges will not be issued for returned items that have been
              used or show signs of visible wear. A customer who requests a used
              or worn item back is responsible for return shipping.
            </li>
            <li
              style={{
                marginTop: "10px",
              }}
            >
              Made Trade does not take responsibility for lost or stolen
              packages once they are marked as delivered by the shipping
              carrier.
            </li>
          </ul>
        </Box>
      </Box>
    </Box>
  );
};

export default Shipping;
