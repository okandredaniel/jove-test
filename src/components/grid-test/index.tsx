"use client";

import { Block } from "../block";
import "./grid-test.scss";
import { blocksMapMock } from "./blocks-map-mock";
import { useState } from "react";

export const GridTest = () => {
  const [blocks, setBlocks] = useState(blocksMapMock);

  const handleBlockChange = (id: number) => {
    const updatedBlocks = blocks.map((block) => {
      if (block.id === id) return { ...block, enabled: !block.enabled };
      return block;
    });

    setBlocks(updatedBlocks);
  };

  return (
    <div className="grid-wrapper">
      <div className="content">
        {blocks.map((block) => (
          <Block
            key={block.id}
            blockEnabled={block.enabled}
            onClick={() => handleBlockChange(block.id)}
          >
            {block.content}
          </Block>
        ))}
      </div>
    </div>
  );
};
