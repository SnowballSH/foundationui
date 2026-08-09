import { createRoot } from "react-dom/client";
import { Button, Panel } from "foundationui/react";
import "./app.css";

createRoot(document.getElementById("root")!).render(
  <Panel tier="glass">
    <Button variant="secondary" data-probe>
      Fixture
    </Button>
  </Panel>,
);
