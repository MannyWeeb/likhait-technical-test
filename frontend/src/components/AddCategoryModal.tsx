/**
 * Modal for creating a new expense category
 */

import React, { useState } from "react";
import { Modal, TextField, Button } from "../vibes";
import { createCategory } from "../services/api";

interface AddCategoryModalProps {
  isOpen: boolean;
  onClose: () => void;
  onCreated: (category: { id: number; name: string }) => void;
}

export function AddCategoryModal({
  isOpen,
  onClose,
  onCreated,
}: AddCategoryModalProps) {
  const [name, setName] = useState("");
  const [error, setError] = useState<string | undefined>();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleClose = () => {
    setName("");
    setError(undefined);
    onClose();
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!name.trim()) {
      setError("Category name is required");
      return;
    }

    setIsSubmitting(true);
    setError(undefined);
    try {
      const category = await createCategory(name.trim());
      onCreated(category);
      setName("");
    } catch (err) {
      setError(err instanceof Error ? err.message : "Failed to create category");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Modal isOpen={isOpen} onClose={handleClose} title="Add Category" maxWidth="400px">
      <form
        onSubmit={handleSubmit}
        style={{ display: "flex", flexDirection: "column", gap: "1rem" }}
      >
        <TextField
          label="Category Name"
          type="text"
          placeholder="e.g. Groceries"
          value={name}
          onChange={(e) => {
            setName(e.target.value);
            if (error) setError(undefined);
          }}
          error={error}
          fullWidth
          autoFocus
          required
        />
        <div style={{ display: "flex", gap: "0.5rem" }}>
          <Button type="submit" variant="primary" disabled={isSubmitting} fullWidth>
            {isSubmitting ? "Adding..." : "Add Category"}
          </Button>
          <Button type="button" variant="secondary" onClick={handleClose} disabled={isSubmitting}>
            Cancel
          </Button>
        </div>
      </form>
    </Modal>
  );
}
