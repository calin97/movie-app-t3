import { cx } from "~/utils/cx";

export const BlackGlassContainer = ({ children }) => {
  return (
    <div
      className={cx(
        "text-white-main",
        "relative",
        "right-96 top-1/3",
        "h-12 w-48",
        "p-12",
        "rounded-3xl",
        "bg-opacity-30",
        "text-main",
        "darkglassgradient"
      )}
    >
      {children}
    </div>
  );
};
