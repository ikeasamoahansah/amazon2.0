import { UserProvider } from "@auth0/nextjs-auth0/client";

export default function Layout({ children }) {
  return (
    <html lang="en">
      <UserProvider>
        <body>
          <div>{children}</div>
        </body>
      </UserProvider>
    </html>
  );
}
