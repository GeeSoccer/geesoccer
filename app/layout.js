import "./globals.css";

export const metadata = {

  title: "GeeSoccer",

  description: "Football statistics based on real historical matches.",

};

export default function RootLayout({ children }) {

  return (

    <html lang="de">

      <body>{children}</body>

    </html>

  );

}
