import { useState } from "react";
import dynamic from "next/dynamic";

const RichTextEditor = dynamic(() => import("@mantine/rte"), {
  ssr: false,

  loading: () => null,
});
export const Rte = () => {
  const [value, onChange] = useState("");
  return (
    <RichTextEditor
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
export default Rte;
