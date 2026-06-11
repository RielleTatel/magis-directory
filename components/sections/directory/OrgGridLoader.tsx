"use client";

import dynamic from "next/dynamic";
import OrgGridSkeleton from "./OrgGridSkeleton";

const OrgGrid = dynamic(() => import("./OrgGrid"), {
  ssr: false,
  loading: () => <OrgGridSkeleton />,
});

export default function OrgGridLoader() {
  return <OrgGrid />;
}
