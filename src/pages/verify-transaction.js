// .../api/verify-transaction.js
import axios from "axios";

// export default async (req, res) => {
//     // Check if req.query is defined and it has a 'reference' property
//     if (!req.query || !req.query.reference) {
//       res.status(400).json({ error: "Reference not provided" });
//       return;
//     }

//     const { reference } = req.query;

//     try {
//       const verifyResponse = await axios.get(
//         `https://api.paystack.co/transaction/verify/${reference}`,
//         {
//           headers: {
//             Authorization: `Bearer ${process.env.PAYSTACK_SECRET_KEY}`,
//           },
//         }
//       );

//       if (verifyResponse.data.status) {
//         // The transaction was successful
//         // Update your application state here
//         res.json({ status: "success" });
//       } else {
//         res.status(400).json({ error: "Failed to verify transaction" });
//       }
//     } catch (error) {
//       // Handle any errors that occur during the request
//       res.status(500).json({ error: "An error occurred while verifying the transaction" });
//     }
// };

export default () => {
  console.log("Hello World");
};
