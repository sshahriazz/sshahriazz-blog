import { useState } from "react";
import dynamic from "next/dynamic";

const Rte = dynamic(() => import("@mantine/rte"), {
  ssr: false,

  loading: () => null,
});
export const RichTextEditor = () => {
  const [value, onChange] = useState("");
  return (
    <Rte
      controls={[
        ["bold", "italic", "underline", "link", "image"],
        ["unorderedList", "h1", "h2", "h3"],
        ["sup", "sub"],
        ["alignLeft", "alignCenter", "alignRight"],
      ]}
      value={value}
      onChange={onChange}
      id="rte"
    />
  );
};
export default RichTextEditor;
