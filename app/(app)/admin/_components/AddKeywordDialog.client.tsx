"use client";

import { useState } from "react";
import Button from "@/shared/ui/button";
import Dialog from "@/shared/ui/dialog";

interface AddKeywordDialogProps {
  open: boolean;
  onClose: () => void;
  onAdd: (keyword: string) => void;
}

export default function AddKeywordDialog({
  open,
  onClose,
  onAdd,
}: AddKeywordDialogProps) {
  const [keyword, setKeyword] = useState("");

  function handleAdd() {
    const trimmedKeyword = keyword.trim();

    if (!trimmedKeyword) {
      return;
    }

    onAdd(trimmedKeyword);
    setKeyword("");
    onClose();
  }

  return (
    <Dialog
      open={open}
      title="금지어 추가"
      description="외부 AI 입력 전 탐지할 회사별 금지어를 입력합니다."
      onClose={onClose}
    >
      <div className="flex flex-col gap-4">
        <label htmlFor="keyword" className="text-sm font-semibold text-slate-900">
          금지어
        </label>
        <input
          id="keyword"
          value={keyword}
          onChange={(event) => setKeyword(event.target.value)}
          placeholder="예: 내부 프로젝트명"
          className="rounded-2xl border border-slate-300 bg-white px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-slate-900"
        />

        <div className="flex justify-end gap-2">
          <Button variant="outline" onClick={onClose}>
            취소
          </Button>
          <Button onClick={handleAdd}>
            추가
          </Button>
        </div>
      </div>
    </Dialog>
  );
}
