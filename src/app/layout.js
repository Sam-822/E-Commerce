import NavBar from "./component/NavBar";
import "./globals.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import Footer from "./component/Footer";
import MyFooter from "./component/MyFooter";

export const metadata = {
  title: "ShopBuddy - Your favorite e-commerce website",
  description: "Created by Abdul Samad using create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="vw-100 overflow-x-hidden h-auto">
        <header>
          <NavBar />
        </header>
        {children}
        <footer className="mb-0" style={{ marginTop: 200 }}>
          <Footer />
          <p className="text-center vw-100 fs-5 mt-5">
            ----- Made with <span className="heart"> ❤️</span> by Abdul Samad
            Ansari -----
          </p>
          <MyFooter />
        </footer>
      </body>
    </html>
  );
}
