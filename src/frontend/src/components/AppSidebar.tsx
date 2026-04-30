import { cn } from "@/lib/utils";
import { Link, useLocation } from "@tanstack/react-router";
import {
  BarChart3,
  Brain,
  ChevronLeft,
  ChevronRight,
  LayoutDashboard,
  LineChart,
  ShieldAlert,
  Sparkles,
  Star,
} from "lucide-react";
import { useState } from "react";

interface NavItem {
  label: string;
  to: string;
  icon: React.ElementType;
  ocid: string;
}

const NAV_ITEMS: NavItem[] = [
  { label: "Overview", to: "/", icon: LayoutDashboard, ocid: "nav.home_link" },
  { label: "EDA", to: "/eda", icon: BarChart3, ocid: "nav.eda_link" },
  {
    label: "ML Models",
    to: "/ml-models",
    icon: Brain,
    ocid: "nav.ml_models_link",
  },
  {
    label: "Generative AI",
    to: "/generative-ai",
    icon: Sparkles,
    ocid: "nav.generative_ai_link",
  },
  {
    label: "Feature Importance",
    to: "/feature-importance",
    icon: Star,
    ocid: "nav.feature_importance_link",
  },
  {
    label: "AI Insights",
    to: "/ai-insights",
    icon: LineChart,
    ocid: "nav.ai_insights_link",
  },
];

export function AppSidebar() {
  const [collapsed, setCollapsed] = useState(false);
  const location = useLocation();

  return (
    <aside
      data-ocid="sidebar.panel"
      className={cn(
        "relative flex flex-col border-r border-border bg-sidebar transition-smooth shrink-0",
        collapsed ? "w-16" : "w-60",
      )}
    >
      {/* Logo */}
      <div
        className={cn(
          "flex items-center gap-3 border-b border-border px-4 py-4 min-h-[64px]",
          collapsed && "justify-center px-0",
        )}
      >
        <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-md bg-primary">
          <ShieldAlert className="h-4 w-4 text-primary-foreground" />
        </div>
        {!collapsed && (
          <div className="min-w-0">
            <p className="truncate text-sm font-display font-semibold text-sidebar-foreground leading-tight">
              Credit Card
            </p>
            <p className="truncate text-xs text-muted-foreground leading-tight">
              Fraud Detection
            </p>
          </div>
        )}
      </div>

      {/* Nav */}
      <nav className="flex-1 overflow-y-auto py-3 px-2 space-y-0.5">
        {NAV_ITEMS.map((item) => {
          const Icon = item.icon;
          const isActive =
            item.to === "/"
              ? location.pathname === "/"
              : location.pathname.startsWith(item.to);

          return (
            <Link
              key={item.to}
              to={item.to}
              data-ocid={item.ocid}
              className={cn(
                "flex items-center gap-3 rounded-md px-3 py-2 text-sm font-medium transition-smooth",
                collapsed && "justify-center px-0 w-10 mx-auto",
                isActive
                  ? "bg-sidebar-primary text-sidebar-primary-foreground"
                  : "text-sidebar-foreground hover:bg-sidebar-accent hover:text-sidebar-accent-foreground",
              )}
              title={collapsed ? item.label : undefined}
            >
              <Icon className="h-4 w-4 shrink-0" />
              {!collapsed && <span className="truncate">{item.label}</span>}
            </Link>
          );
        })}
      </nav>

      {/* Collapse toggle */}
      <div className="border-t border-border p-2">
        <button
          type="button"
          data-ocid="sidebar.collapse_toggle"
          onClick={() => setCollapsed((c) => !c)}
          className={cn(
            "flex w-full items-center justify-center rounded-md px-3 py-2 text-muted-foreground transition-smooth hover:bg-sidebar-accent hover:text-sidebar-accent-foreground",
            collapsed && "px-0",
          )}
          aria-label={collapsed ? "Expand sidebar" : "Collapse sidebar"}
        >
          {collapsed ? (
            <ChevronRight className="h-4 w-4" />
          ) : (
            <>
              <ChevronLeft className="h-4 w-4 mr-2" />
              <span className="text-xs">Collapse</span>
            </>
          )}
        </button>
      </div>
    </aside>
  );
}
