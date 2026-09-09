import React from "react";

function HappyBanner({ guessesAmmount }) {
  const plural = guessesAmmount > 1;
  return (
    <div className="happy banner">
      <p>
        <strong>Congratulations!</strong> Got it in{" "}
        <strong>
          {guessesAmmount} guess{plural && "es"}
        </strong>
        .
      </p>
    </div>
  );
}

export default HappyBanner;
