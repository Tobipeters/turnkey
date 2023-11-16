import { NavBar, Footer } from "@/components";

export default function Layout({ children }: any) {
  return (
    <>
      <NavBar />
      <>{children}</>
      <Footer />
    </>
  );
}
