import { landingPages } from "@/data/landingPages";
import RegionalLandingPage from "@/components/RegionalLandingPage";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: landingPages["rostock"].title + " | ResearchControl",
    description: landingPages["rostock"].metaDescription,
};

export default function Page() {
    return <RegionalLandingPage data={landingPages["rostock"]} />;
}
