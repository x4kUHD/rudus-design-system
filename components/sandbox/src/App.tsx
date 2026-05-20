import { Button } from "../../src/Button/Button";
import "./App.css";

function Card({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section className="card">
      <h3 className="card-title text-subheader">{title}</h3>
      {children}
    </section>
  );
}

export default function App() {
  return (
    <div className="sandbox">
      <header className="sandbox-header">
        <div className="text-display">Rudus Design System</div>
      </header>

      <div className="column">
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
      </div>
    </div>
  );
}
