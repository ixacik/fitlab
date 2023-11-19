"use client";

import { useState, useEffect } from "react";
import { headers } from "@/next.config";
import Loader from "./Loader";

const MotivationCard = () => {
  const [quote, setQuote] = useState("");
  const [loading, setLoading] = useState(false);

  const getQuote = async () => {
    setLoading(true);
    fetch("https://api.api-ninjas.com/v1/quotes?category=success", {
      headers: {
        "X-Api-Key": "IzXMO32kCQGDf1h4FLKYPw==h8wY0CuwgdGnQHeo",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setQuote(data[0].quote);
      })
      .then(() => setLoading(false));
  };

  useEffect(() => {
    getQuote();
  }, []);

  return (
    <div>
      <div
        className="bg-gradient-to-br shadow-xl text-white font-medium from-blue-400 rounded-3xl via-purple-400 to-pink-200 p-10"
        onClick={() => getQuote()}
      >
        {loading ? <Loader /> : <p>{quote}</p>}
      </div>
    </div>
  );
};

export default MotivationCard;
