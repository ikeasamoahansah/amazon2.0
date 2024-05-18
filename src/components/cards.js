import Image from "next/image";
import { useEffect, useState } from "react";
import axios from "axios";
function Card({ name, label, id }) {
  const [img, setImg] = useState({});
  useEffect(() => {
    axios
      .get(`https://fakestoreapi.com/products/${id}`)
      .then((res) => {
        console.log(res.data);
        setImg(res.data.image);
      })
      .catch((err) => console.log(err));
  }, []);
  return (
    <>
      <div className="bg-white rounded-lg shadow-md p-4 ">
        <div className="flex flex-col">
          <h2 className="text-xl font-semibold">{name}</h2>
          <p className="text-blue-400">{label}</p>
        </div>
        <div className="flex justify-end">
          <Image
            src={img}
            alt={name}
            width={100}
            height={100}
            className="rounded-lg transition-transform hover:scale-110"
          />
        </div>
      </div>
    </>
  );
}

export default Card;
