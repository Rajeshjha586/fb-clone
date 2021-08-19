import Head from "next/head";
import Feed from "../components/feed/Feed";
import Header from "../components/header/Header";

import Sidebar from "../components/sidebar/Sidebar";
import Widgets from "../components/widgets/Widgets";

export default function Home() {
  return (
    <div className="h-screen bg-gray-100 overflow-hidden">
      <Head>
        <title>Facebook</title>
      </Head>

      {/**Header */}
      <Header />

      <main className="flex">
        {/**Sidebar */}
        <Sidebar />

        {/**Feed */}
        <Feed />

        {/**Widgets */}
        <Widgets />
      </main>
    </div>
  );
}
