// import { useEffect, useState } from "react";
// import axios from "axios";
function Card({ name, label, id }) {
  // const [img, setImg] = useState({});
  // useEffect(() => {
  //   axios
  //     .get(`https://fakestoreapi.com/products/${id}`)
  //     .then((res) => {
  //       console.log(res.data);
  //       setImg(res.data.image);
  //     })
  //     .catch((err) => console.log(err));
  // }, []);
  return (
    <>
      <div className="bg-white rounded-lg shadow-md p-4 flex justify-between ">
        <div className="flex flex-col">
          <h2 className="text-sm font-semibold">{name}</h2>
          <p className="text-gray-400 text-xs">{label}</p>
        </div>
        <div className="flex justify-end mt-10">
          <img
            // src={img}
            src = {id}
            alt={name}
            width={200}
            height={100}
            className="rounded-lg transition-transform hover:scale-110"
          />
        </div>
      </div>
    </>
  );
}

export default Card;
