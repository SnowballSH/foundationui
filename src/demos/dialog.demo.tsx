import { useState } from "react";
import { Button, Dialog } from "../react/index.js";

export default function DialogDemo() {
  const [open, setOpen] = useState(false);
  const [outcome, setOutcome] = useState("No decision yet.");

  const askToDelete = () => {
    setOutcome("No decision yet.");
    setOpen(true);
  };

  return (
    <div className="flex flex-col items-start gap-3">
      <Button variant="secondary" onClick={askToDelete}>
        Delete draft
      </Button>
      <p className="text-sm text-ink-secondary">{outcome}</p>
      <Dialog
        open={open}
        title="Delete draft?"
        description="This removes the draft from your workspace."
        size="sm"
        onClose={() => {
          setOpen(false);
          setOutcome((v) =>
            v === "No decision yet." ? "Dismissed, draft kept." : v,
          );
        }}
        footer={
          <>
            <Button variant="secondary" onClick={() => setOpen(false)}>
              Cancel
            </Button>
            <Button
              onClick={() => {
                setOutcome("Draft deleted.");
                setOpen(false);
              }}
            >
              Confirm
            </Button>
          </>
        }
      >
        <p className="text-sm text-ink-secondary">
          The draft "Aurora launch notes" will be gone for good. Published posts
          are not affected.
        </p>
      </Dialog>
    </div>
  );
}
