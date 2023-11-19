import "./globals.css";
import Nav from "./Nav";

export const metadata = {
  title: "Fitlab",
  description: "Your all-in-one fitness coach.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="p-5">
        <Nav />
        {children}
      </body>
    </html>
  );
}
