import { Layout } from "@/components/Layout";
import { Skeleton } from "@/components/ui/skeleton";
import { Toaster } from "@/components/ui/sonner";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  RouterProvider,
  createRootRoute,
  createRoute,
  createRouter,
} from "@tanstack/react-router";
import { ThemeProvider } from "next-themes";
import { Suspense, lazy } from "react";

// Lazy-loaded pages
const HomePage = lazy(() => import("@/pages/HomePage"));
const EdaPage = lazy(() => import("@/pages/EdaPage"));
const MlModelsPage = lazy(() => import("@/pages/MlModelsPage"));
const GenerativeAiPage = lazy(() => import("@/pages/GenerativeAiPage"));
const FeatureImportancePage = lazy(
  () => import("@/pages/FeatureImportancePage"),
);
const AiInsightsPage = lazy(() => import("@/pages/AiInsightsPage"));

// Page configs for header metadata
const PAGE_META: Record<string, { title: string; subtitle: string }> = {
  "/": { title: "Overview", subtitle: "Credit Card Fraud Detection Dashboard" },
  "/eda": {
    title: "Exploratory Data Analysis",
    subtitle: "Dataset statistics and visualizations",
  },
  "/ml-models": {
    title: "ML Model Comparison",
    subtitle: "Traditional machine learning model metrics",
  },
  "/generative-ai": {
    title: "Generative AI — Autoencoder",
    subtitle: "Anomaly detection via deep learning",
  },
  "/feature-importance": {
    title: "Feature Importance",
    subtitle: "Top predictive features from Random Forest",
  },
  "/ai-insights": {
    title: "AI Insights",
    subtitle: "Pattern analysis and actionable recommendations",
  },
};

function PageLoader() {
  return (
    <div className="space-y-4" data-ocid="page.loading_state">
      <Skeleton className="h-8 w-64" />
      <div className="grid grid-cols-3 gap-4">
        <Skeleton className="h-28" />
        <Skeleton className="h-28" />
        <Skeleton className="h-28" />
      </div>
      <Skeleton className="h-72" />
    </div>
  );
}

// Root layout wrapper that reads path for meta
function RootLayout() {
  return <Outlet />;
}

function RouteWithLayout({
  path,
  children,
}: { path: string; children: React.ReactNode }) {
  const meta = PAGE_META[path] ?? {
    title: "Credit Card Fraud Detection",
    subtitle: "",
  };
  return (
    <Layout title={meta.title} subtitle={meta.subtitle}>
      {children}
    </Layout>
  );
}

// Root route
const rootRoute = createRootRoute({ component: RootLayout });

// Individual routes
const homeRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/",
  component: () => (
    <Layout title="Overview" subtitle="Credit Card Fraud Detection Dashboard">
      <Suspense fallback={<PageLoader />}>
        <HomePage />
      </Suspense>
    </Layout>
  ),
});

const edaRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/eda",
  component: () => (
    <Layout
      title="Exploratory Data Analysis"
      subtitle="Dataset statistics and visualizations"
    >
      <Suspense fallback={<PageLoader />}>
        <EdaPage />
      </Suspense>
    </Layout>
  ),
});

const mlModelsRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/ml-models",
  component: () => (
    <Layout
      title="ML Model Comparison"
      subtitle="Traditional machine learning model metrics"
    >
      <Suspense fallback={<PageLoader />}>
        <MlModelsPage />
      </Suspense>
    </Layout>
  ),
});

const generativeAiRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/generative-ai",
  component: () => (
    <Layout
      title="Generative AI — Autoencoder"
      subtitle="Anomaly detection via deep learning"
    >
      <Suspense fallback={<PageLoader />}>
        <GenerativeAiPage />
      </Suspense>
    </Layout>
  ),
});

const featureImportanceRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/feature-importance",
  component: () => (
    <Layout
      title="Feature Importance"
      subtitle="Top predictive features from Random Forest"
    >
      <Suspense fallback={<PageLoader />}>
        <FeatureImportancePage />
      </Suspense>
    </Layout>
  ),
});

const aiInsightsRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/ai-insights",
  component: () => (
    <Layout
      title="AI Insights"
      subtitle="Pattern analysis and actionable recommendations"
    >
      <Suspense fallback={<PageLoader />}>
        <AiInsightsPage />
      </Suspense>
    </Layout>
  ),
});

const routeTree = rootRoute.addChildren([
  homeRoute,
  edaRoute,
  mlModelsRoute,
  generativeAiRoute,
  featureImportanceRoute,
  aiInsightsRoute,
]);

const router = createRouter({ routeTree });

declare module "@tanstack/react-router" {
  interface Register {
    router: typeof router;
  }
}

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: 1,
      refetchOnWindowFocus: false,
    },
  },
});

export default function App() {
  return (
    <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={router} />
        <Toaster richColors position="top-right" />
      </QueryClientProvider>
    </ThemeProvider>
  );
}

// Export RouteWithLayout for potential future use
export { RouteWithLayout };
