import Head from "next/head";
import Navbar from "./Navbar";
import Footer from "./Footer";

export default function Layout({ title, description, children }) {
  const pageTitle = title ? `${title} | Mugisha Micheal` : "Mugisha Micheal | Software Engineer";
  const pageDescription =
    description ||
    "Mugisha Micheal is a software engineer building secure, scalable web applications and SaaS platforms.";

  return (
    <div className="min-h-screen flex flex-col bg-surface text-primary-900">
      <Head>
        <title>{pageTitle}</title>
        <meta name="description" content={pageDescription} />
        <meta property="og:title" content={pageTitle} />
        <meta property="og:description" content={pageDescription} />
        <meta property="og:type" content="website" />
      </Head>
      <Navbar />
      <main className="flex-1 pt-20">{children}</main>
      <Footer />
    </div>
  );
}
