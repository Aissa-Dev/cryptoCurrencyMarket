import React, { createContext, useContext, useState, useEffect } from "react";

const Crypto = createContext();
function CryptoContext({ children }) {
  const [currency, setCurrency] = useState("CAD");
  const [symbol, setSymbol] = useState("$");

  useEffect(() => {
    if (currency === "CAD" || currency === "USD") setSymbol("$");
    else if (currency === "EUR") setSymbol("€");
  }, [currency]);

  return (
    <Crypto.Provider value={{ currency, setCurrency, symbol }}>
      {children}
    </Crypto.Provider>
  );
}

export default CryptoContext;

export const CryptoState = () => useContext(Crypto);
