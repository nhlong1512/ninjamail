import "./App.css";
import { Layout, Space } from "antd";
import MyHeader from "./components/MyHeader";
import MyBanner from "./components/MyBanner";
import MyVideo from "./components/MyVideo";
import MyPopularNews from "./components/MyPopularNews";
import MyMembers from "./components/MyMembers";
import MyContact from "./components/MyContact";
import MyBrand from "./components/MyBrand";
import MyGetStarted from "./components/MyGetStarted";
import MyFooter from "./components/MyFooter";

const { Footer, Content } = Layout;

const footerStyle = {
  textAlign: "center",
  color: "#fff",
  backgroundColor: "#7dbcea",
};

function App() {
  return (
    <div className="App">
      <Layout>
        <MyHeader />
        <Content className="p-0 bg-[#fff] w-full">
          <MyBanner />
          <MyVideo />
          <MyPopularNews />
          <MyMembers />
          <MyContact />
          <MyBrand />
          <MyGetStarted />
        </Content>
        <Footer>
          <MyFooter />
        </Footer>
      </Layout>
    </div>
  );
}

export default App;
