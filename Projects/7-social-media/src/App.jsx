import "./App.css";
import { useState } from "react";
import Header from "./assets/Components/Header";
import Footer from "./assets/Components/Footer";
import Sidebar from "./assets/Components/Sidebar";
import CreatePost from "./assets/Components/CreatePost";
import PostList from "./assets/Components/PostList";
import PostListProvider from "./store/post-list-store";

function App() {
  const [selectedTab, setSelectedTab] = useState("Home");
  return (
    <PostListProvider>
      <div className="app-container">
        <Sidebar selectedTab={selectedTab} setSelectedTab={setSelectedTab} />
        <div className="content">
          <Header />
          {selectedTab === "Home" ? <PostList /> : <CreatePost />}
          <Footer />
        </div>
      </div>
    </PostListProvider>
  );
}

export default App;
