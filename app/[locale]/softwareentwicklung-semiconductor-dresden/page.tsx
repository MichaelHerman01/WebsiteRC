import { landingPages } from "@/data/landingPages";
import RegionalLandingPage from "@/components/RegionalLandingPage";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: landingPages["dresden"].title + " | ResearchControl",
    description: landingPages["dresden"].metaDescription,
};

export default function Page() {
    return <RegionalLandingPage data={landingPages["dresden"]} />;
}
