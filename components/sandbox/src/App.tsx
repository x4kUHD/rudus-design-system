import { useState } from "react";
import {
  IconFolder,
  IconZoom,
  IconLayoutSidebar,
  IconLayoutSidebarRightCollapse,
  IconFolderFilled,
} from "@tabler/icons-react";
import { Button } from "../../src/Button/Button";
import { ColorSwatch } from "../../src/ColorSwatch/ColorSwatch";
import { ButtonRibbon } from "../../src/ButtonRibbon/ButtonRibbon";
import { InputBox } from "../../src/InputBox/InputBox";
import { ChatInput } from "../../src/ChatInput/ChatInput";
import { Dropdown } from "../../src/Dropdown/Dropdown";
import { Tab } from "../../src/Tab/Tab";
import { PanelHeader } from "../../src/PanelHeader/PanelHeader";
import { PageRow } from "../../src/PageRow/PageRow";
import { TraceRow } from "../../src/TraceRow/TraceRow";
import { FolderRow } from "../../src/FolderRow/FolderRow";
import { LayerRow } from "../../src/LayerRow/LayerRow";
import "./App.css";

function LayerRowDemo() {
  const [selected, setSelected] = useState(3);
  const [hidden, setHidden] = useState<Record<number, boolean>>({ 2: true });
  const layers = ["Default", "Hidden", "Selected"];

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 2 }}>
      {layers.map((name, i) => (
        <LayerRow
          key={i}
          label={name}
          selected={selected === i + 1}
          onSelect={() => setSelected(i + 1)}
          hidden={!!hidden[i + 1]}
          onToggleHidden={() =>
            setHidden((prev) => ({ ...prev, [i + 1]: !prev[i + 1] }))
          }
        />
      ))}
    </div>
  );
}

function Card({
  title,
  children,
  background,
}: {
  title: string;
  children: React.ReactNode;
  background?: string;
}) {
  return (
    <section className="card" style={background ? { background } : undefined}>
      <h3 className="card-title text-subheader">{title}</h3>
      {children}
    </section>
  );
}

export default function App() {
  const [defaultValue, setDefaultValue] = useState("67");
  const [panelValue, setPanelValue] = useState("panel");
  const [ribbonValue, setRibbonValue] = useState("ribbon");
  const [selectedPage, setSelectedPage] = useState(3);
  const [pageNames, setPageNames] = useState([
    "Not Selected",
    "Hover",
    "Selected",
  ]);
  const [selectedTrace, setSelectedTrace] = useState(2);
  const traceNames = ["Default", "Hover", "Selected"];
  const [folderCollapsed, setFolderCollapsed] = useState(false);

  return (
    <div className="sandbox">
      <div className="column">
        <Card title="COLOR SWATCH">
          <div className="row">
            <div>
              <div className="text-caption token-meta group-heading">
                Default
              </div>
              <ColorSwatch color="#ffffff" variant="default" />
            </div>
            <div>
              <div className="text-caption token-meta group-heading">
                Border
              </div>
              <ColorSwatch color="#ffffff" variant="border" />
            </div>
            <div>
              <div className="text-caption token-meta group-heading">
                Disabled
              </div>
              <ColorSwatch variant="disabled" />
            </div>
          </div>
        </Card>
        <Card title="BUTTONS">
          <div className="stack-lg">
            <div>
              <div className="text-caption token-meta group-heading">
                PRIMARY
              </div>
              <div className="row">
                <Button variant="primary">Primary</Button>
              </div>
            </div>
            <div>
              <div className="text-caption token-meta group-heading">GHOST</div>
              <div className="row">
                <Button variant="ghost">Ghost</Button>
              </div>
            </div>
            <div>
              <div className="text-caption token-meta group-heading">
                DISABLED
              </div>
              <Button variant="primary" disabled>
                Disabled
              </Button>
            </div>
          </div>
        </Card>

        <Card title="BUTTON RIBBON" background="#2A2828">
          <div className="stack-lg">
            <div>
              <div className="text-caption token-meta group-heading">
                PRIMARY
              </div>
              <div className="row">
                <ButtonRibbon
                  variant="primary"
                  icon={<IconFolder size={32} stroke={1} />}
                >
                  Primary
                </ButtonRibbon>
                <ButtonRibbon
                  variant="primary"
                  icon={<IconFolder size={32} stroke={1} />}
                  selected
                >
                  Selected
                </ButtonRibbon>
              </div>
            </div>
            <div>
              <div className="text-caption token-meta group-heading">
                SECONDARY
              </div>
              <div className="row">
                <ButtonRibbon
                  variant="secondary"
                  icon={<IconZoom size={16} stroke={1} />}
                >
                  Primary
                </ButtonRibbon>
                <ButtonRibbon
                  variant="secondary"
                  icon={<IconZoom size={16} stroke={1} />}
                  selected
                >
                  OnClick
                </ButtonRibbon>
              </div>
            </div>
          </div>
        </Card>

        <Card title="CHAT INPUT">
          <ChatInput onSubmit={(v) => console.log("submitted:", v)} />
        </Card>

        <Card title="PAGE ROW">
          <div style={{ display: "flex", flexDirection: "column", gap: 2 }}>
            {pageNames.map((name, i) => (
              <PageRow
                key={i}
                pageNumber={i + 1}
                value={name}
                onChange={(v) =>
                  setPageNames((prev) => prev.map((p, j) => (j === i ? v : p)))
                }
                selected={selectedPage === i + 1}
                onSelect={() => setSelectedPage(i + 1)}
              />
            ))}
          </div>
        </Card>

        <Card title="TRACE ROW">
          <div style={{ display: "flex", flexDirection: "column", gap: 2 }}>
            <FolderRow
              collapsed={folderCollapsed}
              onToggle={setFolderCollapsed}
            >
              Folder
            </FolderRow>
            {!folderCollapsed &&
              traceNames.map((name, i) => (
                <TraceRow
                  key={i}
                  color="var(--accent-solid)"
                  label={name}
                  selected={selectedTrace === i + 1}
                  onSelect={() => setSelectedTrace(i + 1)}
                />
              ))}
          </div>
        </Card>

        <Card title="LAYER ROW">
          <LayerRowDemo />
        </Card>

        <Card title="PANEL HEADER">
          <div className="stack-lg">
            <PanelHeader>Default</PanelHeader>
            <PanelHeader defaultCollapsed>Collapsed</PanelHeader>
          </div>
        </Card>

        <Card title="TAB">
          <div style={{ display: "inline-flex", gap: 0 }}>
            <Tab active onClose={() => {}}>
              Active Tab
            </Tab>
            <Tab onClose={() => {}}>Inactive Tab</Tab>
            <Tab icon={<IconLayoutSidebar size={16} stroke={1} />}>
              Split View
            </Tab>
            <Tab icon={<IconLayoutSidebarRightCollapse size={16} stroke={1} />}>
              Close Panels
            </Tab>
          </div>
        </Card>

        <Card title="DROPDOWN">
          <div className="row">
            <Dropdown
              variant="panel"
              value={panelValue}
              onChange={setPanelValue}
              options={[
                { value: "panel", label: "Panel" },
                { value: "ribbon", label: "Ribbon" },
                { value: "modal", label: "Modal" },
              ]}
            />
            <Dropdown
              variant="ribbon"
              value={ribbonValue}
              onChange={setRibbonValue}
              options={[
                { value: "panel", label: "Panel" },
                { value: "ribbon", label: "Ribbon" },
                { value: "modal", label: "Modal" },
              ]}
            />
          </div>
        </Card>

        <Card title="INPUT">
          <div className="row">
            <div>
              <InputBox
                value={defaultValue}
                onChange={setDefaultValue}
                unit="in"
              />
              <div className="text-caption token-meta group-heading">
                Default
              </div>
            </div>
            <div>
              <InputBox unit="in" required />
              <div className="text-caption token-meta group-heading">
                Required
              </div>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
}
