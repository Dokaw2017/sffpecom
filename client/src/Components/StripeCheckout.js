import StripeCheckout from "react-stripe-checkout";

const Payement = (props) => {
  const productt = props.product;
  console.log("xakk", productt);

  const makePaymentt = (token) => {
    const body = {
      productt,
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
    <div>
      <StripeCheckout
        stripeKey="pk_test_51ImY50JxwYwM17ZqHVFbtOxudB6kMGrJ4VVRtyedViZIMKGJkSKoGAU47uFKbOF11JsqNvLx502EBaKUCqCJ0DOc00uZEen0rs"
        token={makePaymentt}
        name={productt.title}
        amount={productt.price * 100}
      >
        <button>Buy</button>
      </StripeCheckout>
    </div>
  );
};

export default Payement;
