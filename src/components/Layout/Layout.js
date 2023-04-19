import NavBar from "../NavBar";

export default function Layout({ children }) {
  return (
    <div className="flex flex-col min-h-screen relative bg-cover text-white bg-hero">
      <NavBar />
      <main className="flex-1 flex flex-col p-4">{children}</main>
    </div>
  );
}
