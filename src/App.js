import "./App.css";
// import { Save, Placeholder, UploadBackground } from "components/MenuButtons";
import { Layout, Divider } from "antd";
import {
  Testing,
  Circle,
  Image,
  Rectangle,
  GeneralProps,
  ColorProps,
  Text,
  TextProps,
  UploadBackground,
  CanvasProvider,
  Canvas,
  ExportAsJSON,
  ExportAsImage,
  ImportFromJSON,
  ClearAll,
  Delete,
  Placeholder,
  Download,
  Arst,
} from "components";

const { Header, Content, Sider } = Layout;

function App() {
  return (
    <div className="App">
      <CanvasProvider>
        <Layout>
          <Header style={styles.header}>
            <Circle />
            <Rectangle />
            <Text />
            <Image />
            <Divider type="vertical" />
            <ClearAll />
            <Delete />
            <Divider type="vertical" />
            <UploadBackground />
            <ExportAsJSON />
            <ExportAsImage />
            <ImportFromJSON />
            <Placeholder />
            <Testing />
            <Download
              placeholderData={{
                name: "Galih Wicaksono",
                organization: "Sony",
              }}
            />
            <Arst
              placeholderData={{
                name: "Samsara",
                organization: "Pandansari.com",
              }}
            />
          </Header>
          <Layout>
            <Content style={styles.content}>
              <Canvas />
            </Content>
            <Sider style={styles.sider}>
              <GeneralProps />
              <ColorProps />
              <TextProps />
            </Sider>
          </Layout>
        </Layout>
      </CanvasProvider>
    </div>
  );
}

const styles = {
  header: {
    display: "flex",
  },
  sider: {
    padding: 20,
    backgroundColor: "#eee",
  },
  content: {
    display: "flex",
    justifyContent: "center",
    alignContent: "center",
    padding: 20,
  },
};

export default App;
