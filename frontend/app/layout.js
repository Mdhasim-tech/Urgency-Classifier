import "./globals.css";
import Navbar from "./components/Navbar/Navbar"
import Footer from "./components/Footer/Footer";

export const metadata = {
  title: "Urgency Classifier",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="layout-body">
        <Navbar />
        <main className="layout-main">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
