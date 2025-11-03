import './App.css'
import Top from "./components/top/Top.jsx";
import LeftBar from "./components/left_bar/LeftBar.jsx";
import Main from "./components/main/Main.jsx";
import LeftPanelSplitter from "./components/left_panel_splitter/LeftPanelSplitter.jsx";

function App() {
  return (
      <>
          <Top/>

          <div className="container-fluid">
              <div className="row">

                  <LeftPanelSplitter/>

              </div>
          </div>

      </>
  )
}

export default App
