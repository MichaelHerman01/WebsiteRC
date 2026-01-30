import { landingPages } from "@/data/landingPages";
import RegionalLandingPage from "@/components/RegionalLandingPage";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: landingPages["leipzig"].title + " | ResearchControl",
    description: landingPages["leipzig"].metaDescription,
};

export default function Page() {
    return <RegionalLandingPage data={landingPages["leipzig"]} />;
}
