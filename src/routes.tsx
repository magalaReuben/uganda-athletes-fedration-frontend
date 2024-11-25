import { Routes, Route, useParams } from "react-router-dom";
import NotfoundPage from "./pages/notfoundPage";
import HomePage from "./pages/home";
import DestinationsPage from "./pages/destinations";
import StoriesPage from "./pages/stories";
import StoryViewPage from "./pages/storyviewPage";
import ContactPage from "./pages/contacts";
import SafariIdeasPage from "./pages/safari-ideas";
import IdeaViewPage from "./pages/ideaViewPage";
import DestinationsViewPage from "./pages/destinationViewPage";
import AboutUsPage from "./pages/about";
import LodgesPage from "./pages/lodges";
import ReviewsPage from "./pages/reviewsPage";

export default function RoutesConfig() {
  const { id } = useParams();

  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/destinations" element={<DestinationsPage />} />
      <Route path="/safari-ideas" element={<SafariIdeasPage />} />
      <Route path="/reviews" element={<ReviewsPage />} />
      <Route path="/lodges" element={<LodgesPage />} />
      <Route path="/contact" element={<ContactPage />} />
      <Route path="/about-us" element={<AboutUsPage />} />
      <Route path="/safari-idea/:id" element={<IdeaViewPage ideaId={id} />} />
      <Route
        path="/destination/:id"
        element={<DestinationsViewPage destinationId={id} />}
      />
      <Route path="/story/:id" element={<StoryViewPage storyId={id} />} />
      <Route path="/stories" element={<StoriesPage />} />
      <Route path="/*" element={<NotfoundPage />} />
    </Routes>
  );
}
