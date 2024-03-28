import "./block.scss";

interface BlockProps {
  children: string;
  blockEnabled: boolean;
  onClick: () => void;
}

export const Block = ({ children, blockEnabled, onClick }: BlockProps) => {
  return (
    <div className={`block ${blockEnabled ? "red" : "gray"}`} onClick={onClick}>
      {children}
    </div>
  );
};
