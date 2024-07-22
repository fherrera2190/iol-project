import { Footer } from "../components/Footer";
import { Navbar } from "../components/NavBar";

type AuthLayoutProps = {
  children: React.ReactNode;
};

export const AuthLayout = ({ children }: AuthLayoutProps) => {
  return (
    <div className="d-flex flex-column justify-content-between vh-100">
      <Navbar />
      {children}
      <Footer />
    </div>
  );
};
