import React from 'react';
import {
  PanelGroup,
  Panel,
  PanelResizeHandle,
} from 'react-resizable-panels';
import './LeftPanelSplitter.css';
import LeftBar from "../left_bar/LeftBar.jsx";
import Main from "../main/Main.jsx";

function LeftPanelSplitter() {
  return (
     <PanelGroup direction="horizontal" className="panel-container min-vh-100">

     <Panel
        defaultSize={15}
        minSize={15}
      >
        <div style={{ padding: '10px' }}>
          <LeftBar />
        </div>
      </Panel>

     <PanelResizeHandle className="resize-handle" />

      <Panel
        minSize={50}
      >

          <Main/>

      </Panel>

    </PanelGroup>
  );
}

export default LeftPanelSplitter;