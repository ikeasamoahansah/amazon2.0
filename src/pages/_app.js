import { Provider } from "react-redux";
import store from "@/app/store";
import "../styles/globals.css";
import { UserProvider } from "@auth0/nextjs-auth0/client";

const MyApp = ({ Component, pageProps }) => {
  return (
    <UserProvider>
      <Provider store={store}>
        <Component {...pageProps} />
      </Provider>
    </UserProvider>
  );
};

export default MyApp;
