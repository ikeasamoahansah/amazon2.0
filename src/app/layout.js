import { UserProvider } from "@auth0/nextjs-auth0/client";
import { Providers } from "./providers";
export default function Layout({ children }) {
  return (
    <html lang="en" className="dark">
      <UserProvider>
        <body>
          <Providers>
            <div>{children}</div>
          </Providers>
        </body>
      </UserProvider>
    </html>
  );
}
