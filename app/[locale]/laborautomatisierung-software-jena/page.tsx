import { landingPages } from "@/data/landingPages";
import RegionalLandingPage from "@/components/RegionalLandingPage";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: landingPages["jena"].title + " | ResearchControl",
    description: landingPages["jena"].metaDescription,
};

export default function Page() {
    return <RegionalLandingPage data={landingPages["jena"]} />;
}
