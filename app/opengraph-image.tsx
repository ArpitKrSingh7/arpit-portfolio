import { ImageResponse } from "next/og";

export const alt = "Arpit Kumar Singh - Full-Stack & GenAI Engineer";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#0a0a0a",
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            gap: "20px",
          }}
        >
          <div
            style={{
              fontSize: 24,
              color: "#22d3ee",
              letterSpacing: "0.1em",
              fontWeight: 500,
            }}
          >
            PORTFOLIO
          </div>
          <div
            style={{
              fontSize: 64,
              fontWeight: 700,
              color: "#ffffff",
              textAlign: "center",
              lineHeight: 1.1,
            }}
          >
            Arpit Kumar Singh
          </div>
          <div
            style={{
              fontSize: 28,
              color: "rgba(255,255,255,0.6)",
              textAlign: "center",
            }}
          >
            Full-Stack & GenAI Engineer
          </div>
          <div
            style={{
              display: "flex",
              gap: "12px",
              marginTop: "20px",
            }}
          >
            {["Next.js", "TypeScript", "Node.js", "Python", "RAG"].map(
              (tech) => (
                <div
                  key={tech}
                  style={{
                    padding: "8px 16px",
                    borderRadius: "8px",
                    backgroundColor: "rgba(255,255,255,0.08)",
                    color: "rgba(255,255,255,0.7)",
                    fontSize: 16,
                    border: "1px solid rgba(255,255,255,0.1)",
                  }}
                >
                  {tech}
                </div>
              )
            )}
          </div>
        </div>
        <div
          style={{
            position: "absolute",
            bottom: "40px",
            fontSize: 16,
            color: "rgba(255,255,255,0.3)",
          }}
        >
          arpitdev.blog
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
