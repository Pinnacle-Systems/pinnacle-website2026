"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

const NEW_PATH = "/services/web-application-development-company/";

export default function WebApplicationRedirect() {
  const router = useRouter();

  useEffect(() => {
    router.replace(NEW_PATH);
  }, [router]);

  return (
    <>
      <meta httpEquiv="refresh" content={`0; url=${NEW_PATH}`} />
      <link rel="canonical" href={NEW_PATH} />
      <p style={{ padding: "2rem", textAlign: "center" }}>
        This page has moved to{" "}
        <a href={NEW_PATH}>{NEW_PATH}</a>.
      </p>
    </>
  );
}
