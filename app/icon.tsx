import { ImageResponse } from "next/og";

export const size = { width: 32, height: 32 };
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          fontSize: 18,
          background: "#0a0a0c",
          color: "#f5f5f7",
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontWeight: 500,
          letterSpacing: "-0.02em",
          borderRadius: 6,
        }}
      >
        AA
      </div>
    ),
    { ...size }
  );
}
