import { useState } from "react";
import StripeCheckout from "react-stripe-checkout";

const Payement = () => {
  const [product, setProduct] = useState({
    name: "React from facebook",
    price: 10,
    productBy: "facebook",
  });

  const makePayment = (token) => {
    const body = {
      product,
      token,
    };
    const headers = {
      "Content-Type": "application/json",
    };
    return fetch(`https://localhost:8000/payment`, {
      method: "POST",
      headers,
      body: JSON.stringify(body),
    })
      .then((response) => {
        console.log("RESPONSE", response);
        const { status } = response;
        console.log("STATUS", status);
      })
      .catch((error) => console.log(error));
  };

  return (
    <div style={{ paddingTop: 200 }}>
      <h3>Happy Easters</h3>
      <StripeCheckout
        stripeKey="pk_test_51ImY50JxwYwM17ZqHVFbtOxudB6kMGrJ4VVRtyedViZIMKGJkSKoGAU47uFKbOF11JsqNvLx502EBaKUCqCJ0DOc00uZEen0rs"
        token={makePayment}
        name="buy react"
        amount={product.price * 100}
      >
        <button>Buy react in just {product.price}</button>
      </StripeCheckout>
    </div>
  );
};

export default Payement;

{
  /* <StripeCheckout
  
  stripeKey=""
  
  token={EnablePurchase}
  
  name="Buy"
  
  amount={SingleProduct.Price * 100}
  
  >
  
  <button className="Buy-btn">Purchase</button>
  
  </StripeCheckout> */
}
