## Zilion E-commerce

### Getting Started

**Clone the repository**

```bash
git clone https://github.com/jnopareboateng/zilion-e-commerce.git
```

**Install dependencies with npm install**

```bash
npm install
```

**Create a .env file with your environment variables**

```Makefile
# .env file
NEXT_PUBLIC_AUTH0_DOMAIN=your-auth0-domain
NEXT_PUBLIC_AUTH0_CLIENT_ID=your-auth0-client-id
NEXT_PUBLIC_AUTH0_CLIENT_SECRET=your-auth0-client-secret
```

**Run the development server with npm run dev**

```Bash
npm run dev
```

**Key Features**
**Authentication and Authorization with Auth0**

```JavaScript
import auth0 from '../lib/auth0';

const login = async () => {
  try {
    await auth0.login();
  } catch (error) {
    console.error(error);
  }
};
```

**Payment Gateway Integration with Paystack**

```JavaScript
import paystack from '../lib/paystack';

const makePayment = async () => {
  try {
    const response = await paystack.makePayment({
      amount: 1000,
      email: 'customer@email.com',
    });
    console.log(response);
  } catch (error) {
    console.error(error);
  }
};
```

**Next.js Specifics: SSR, SSG, client-side routing, and i18n**

```JavaScript
import NextPage from 'next';

const HomePage = () => {
  return <div>Welcome to Zilion E-commerce!</div>;
};

export default NextPage(HomePage, {
  getStaticProps: async () => {
    // ...
  },
});
```

**API Endpoints**

**Authentication**

**Login**

`POST` /api/auth/login

**Register**

`POST` /api/auth/register

**Logout**

`POST` /api/auth/logout

**Payment**

**Initiate payment**

`POST` /api/payment/init

**Verify payment**

`GET`/api/payment/verify
Products

### Get all products

`GET`/api/products

**Get product by ID**

`GET` /api/products/:id

### Orders

**Get all orders**
`GET` /api/orders

**Get order by ID**

`GET` /api/orders/:id

**Deployment**

Web app is deployed on Vercel as https://zilion.vercel.app
