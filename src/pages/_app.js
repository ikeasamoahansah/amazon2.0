import { Provider } from "react-redux";
import store from "@/app/store";
import "../styles/globals.css";
import { UserProvider } from "@auth0/nextjs-auth0/client";
import { NextUIProvider } from "@nextui-org/react";

const MyApp = ({ Component, pageProps }) => {
  return (
    <UserProvider>
      <Provider store={store}>
        <NextUIProvider>
          <Component {...pageProps} />
        </NextUIProvider>
      </Provider>
    </UserProvider>
  );
};

export default MyApp;
