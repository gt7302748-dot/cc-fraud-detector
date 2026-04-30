import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { FALLBACK_EDA_STATS } from "@/lib/data";
import { Link } from "@tanstack/react-router";
import {
  AlertTriangle,
  BarChart2,
  Brain,
  CheckCircle2,
  Database,
  FlaskConical,
  ShieldAlert,
  Sigma,
  TrendingDown,
} from "lucide-react";
import {
  Cell,
  Legend,
  Pie,
  PieChart,
  ResponsiveContainer,
  Tooltip,
} from "recharts";

// ── KPI Card ────────────────────────────────────────────────────────────────

interface KpiCardProps {
  title: string;
  value: string;
  subtitle?: string;
  icon: React.ReactNode;
  accentColor: "red" | "green" | "blue" | "neutral";
  ocid: string;
}

const ACCENT_BORDER: Record<KpiCardProps["accentColor"], string> = {
  red: "border-l-4 border-l-[oklch(0.55_0.22_25)]",
  green: "border-l-4 border-l-[oklch(0.65_0.18_145)]",
  blue: "border-l-4 border-l-[oklch(0.72_0.18_250)]",
  neutral: "border-l-4 border-l-border",
};

const ICON_BG: Record<KpiCardProps["accentColor"], string> = {
  red: "bg-[oklch(0.55_0.22_25/0.15)] text-[oklch(0.7_0.22_25)]",
  green: "bg-[oklch(0.65_0.18_145/0.15)] text-[oklch(0.75_0.18_145)]",
  blue: "bg-[oklch(0.72_0.18_250/0.15)] text-[oklch(0.82_0.18_250)]",
  neutral: "bg-muted text-muted-foreground",
};

const VALUE_COLOR: Record<KpiCardProps["accentColor"], string> = {
  red: "text-[oklch(0.7_0.22_25)]",
  green: "text-[oklch(0.75_0.18_145)]",
  blue: "text-[oklch(0.82_0.18_250)]",
  neutral: "text-foreground",
};

function KpiCard({
  title,
  value,
  subtitle,
  icon,
  accentColor,
  ocid,
}: KpiCardProps) {
  return (
    <Card
      className={`${ACCENT_BORDER[accentColor]} transition-smooth hover:shadow-elevated`}
      data-ocid={ocid}
    >
      <CardContent className="pt-5 pb-5">
        <div className="flex items-start justify-between gap-3">
          <div className="flex-1 min-w-0">
            <p className="text-xs text-muted-foreground font-mono uppercase tracking-wide truncate">
              {title}
            </p>
            <p
              className={`text-3xl font-display font-bold mt-1.5 ${VALUE_COLOR[accentColor]}`}
            >
              {value}
            </p>
            {subtitle && (
              <p className="text-xs text-muted-foreground mt-1 leading-snug">
                {subtitle}
              </p>
            )}
          </div>
          <div
            className={`p-2.5 rounded-lg flex-shrink-0 ${ICON_BG[accentColor]}`}
          >
            {icon}
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

// ── Tech Badge ───────────────────────────────────────────────────────────────

type BadgeColor = "red" | "green" | "blue" | "purple" | "orange" | "teal";

const BADGE_STYLES: Record<BadgeColor, string> = {
  red: "bg-[oklch(0.55_0.22_25/0.18)] text-[oklch(0.72_0.22_25)] border-[oklch(0.55_0.22_25/0.4)]",
  green:
    "bg-[oklch(0.55_0.18_145/0.18)] text-[oklch(0.72_0.18_145)] border-[oklch(0.55_0.18_145/0.4)]",
  blue: "bg-[oklch(0.5_0.18_250/0.18)] text-[oklch(0.78_0.18_250)] border-[oklch(0.5_0.18_250/0.4)]",
  purple:
    "bg-[oklch(0.5_0.18_280/0.18)] text-[oklch(0.78_0.18_280)] border-[oklch(0.5_0.18_280/0.4)]",
  orange:
    "bg-[oklch(0.6_0.18_55/0.18)] text-[oklch(0.78_0.18_55)] border-[oklch(0.6_0.18_55/0.4)]",
  teal: "bg-[oklch(0.55_0.18_185/0.18)] text-[oklch(0.75_0.18_185)] border-[oklch(0.55_0.18_185/0.4)]",
};

function TechBadge({ label, color }: { label: string; color: BadgeColor }) {
  return (
    <span
      className={`inline-flex items-center px-3 py-1.5 rounded-full text-xs font-mono font-medium border ${BADGE_STYLES[color]}`}
    >
      {label}
    </span>
  );
}

// ── Pie custom tooltip ────────────────────────────────────────────────────────

function PieTooltip({
  active,
  payload,
}: {
  active?: boolean;
  payload?: Array<{ name: string; value: number }>;
}) {
  if (!active || !payload?.length) return null;
  const item = payload[0];
  const total = 284807;
  const pct = ((item.value / total) * 100).toFixed(2);
  return (
    <div className="bg-card border border-border rounded-lg px-3 py-2 shadow-elevated text-xs">
      <p className="font-medium text-foreground">{item.name}</p>
      <p className="text-muted-foreground">
        {item.value.toLocaleString()} ({pct}%)
      </p>
    </div>
  );
}

// ── Nav card ──────────────────────────────────────────────────────────────────

interface NavCardProps {
  path: string;
  icon: React.ReactNode;
  iconBg: string;
  title: string;
  desc: string;
  ocid: string;
  btnOcid: string;
}

function NavCard({
  path,
  icon,
  iconBg,
  title,
  desc,
  ocid,
  btnOcid,
}: NavCardProps) {
  return (
    <Card
      className="border-border transition-smooth hover:shadow-elevated hover:border-primary/30 group"
      data-ocid={ocid}
    >
      <CardContent className="pt-5 pb-5">
        <div className={`inline-flex p-2.5 rounded-lg mb-3 ${iconBg}`}>
          {icon}
        </div>
        <h3 className="text-sm font-display font-semibold text-foreground mb-1.5 leading-snug">
          {title}
        </h3>
        <p className="text-xs text-muted-foreground leading-relaxed mb-4">
          {desc}
        </p>
        <Link to={path as never} data-ocid={btnOcid}>
          <Button
            variant="ghost"
            size="sm"
            className="w-full justify-center text-xs border border-border hover:bg-muted transition-smooth"
          >
            Open →
          </Button>
        </Link>
      </CardContent>
    </Card>
  );
}

// ── Main Page ─────────────────────────────────────────────────────────────────

export default function HomePage() {
  const stats = FALLBACK_EDA_STATS;

  const pieData = [
    {
      name: "Legitimate",
      value: stats.legitimateCount,
      color: "oklch(0.65 0.18 145)",
    },
    { name: "Fraud", value: stats.fraudCount, color: "oklch(0.55 0.22 25)" },
  ];

  return (
    <div className="space-y-8" data-ocid="home.page">
      {/* ── Hero ──────────────────────────────────────────────────────────── */}
      <section
        className="rounded-xl bg-card border border-border p-8 relative overflow-hidden"
        data-ocid="home.hero.section"
      >
        {/* Decorative glows */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden rounded-xl">
          <div className="absolute -top-24 -right-24 w-80 h-80 rounded-full bg-[oklch(0.55_0.22_25/0.07)] blur-3xl" />
          <div className="absolute -bottom-16 -left-16 w-64 h-64 rounded-full bg-[oklch(0.72_0.18_250/0.07)] blur-3xl" />
        </div>

        <div className="relative z-10 max-w-3xl">
          <div className="flex items-center gap-2 mb-4">
            <ShieldAlert className="w-4 h-4 text-[oklch(0.7_0.22_25)]" />
            <span className="text-xs font-mono text-muted-foreground uppercase tracking-widest">
              Research Dashboard · Kaggle Dataset
            </span>
          </div>

          <h1 className="text-3xl sm:text-4xl font-display font-bold text-foreground leading-tight mb-3">
            Credit Card Fraud Detection
            <span className="block text-[oklch(0.72_0.18_250)] mt-1 text-2xl sm:text-3xl">
              using Traditional Machine Learning &amp; Generative AI
            </span>
          </h1>

          <p className="text-sm text-muted-foreground leading-relaxed mb-6 max-w-2xl">
            A comprehensive analysis of{" "}
            <span className="text-foreground font-semibold">
              284,807 real-world credit card transactions
            </span>{" "}
            from the Kaggle ULB dataset. Combines{" "}
            <span className="text-[oklch(0.78_0.18_250)] font-medium">
              8 classical ML classifiers
            </span>{" "}
            with a deep-learning{" "}
            <span className="text-[oklch(0.78_0.18_280)] font-medium">
              autoencoder
            </span>{" "}
            for unsupervised anomaly detection — addressing severe class
            imbalance (0.17% fraud rate) using SMOTE resampling.
          </p>

          <div
            className="flex flex-wrap gap-3"
            data-ocid="home.hero_cta.section"
          >
            <Link to="/eda" data-ocid="home.hero_eda.button">
              <Button
                size="default"
                className="font-medium bg-primary text-primary-foreground hover:opacity-90 transition-smooth"
              >
                <BarChart2 className="w-4 h-4 mr-2" />
                Explore EDA
              </Button>
            </Link>
            <Link to="/ml-models" data-ocid="home.hero_ml.button">
              <Button
                variant="outline"
                size="default"
                className="font-medium border-border hover:bg-muted transition-smooth"
              >
                <Brain className="w-4 h-4 mr-2" />
                View ML Models
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* ── Primary KPI Cards ──────────────────────────────────────────────── */}
      <section data-ocid="home.kpi.section">
        <p className="text-xs font-mono text-muted-foreground uppercase tracking-widest mb-4">
          Dataset Overview
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <KpiCard
            title="Total Transactions"
            value="284,807"
            subtitle="European cardholders, Sep 2013"
            icon={<Database className="w-5 h-5" />}
            accentColor="neutral"
            ocid="home.total_transactions.card"
          />
          <KpiCard
            title="Fraud Cases"
            value="492"
            subtitle="Confirmed fraudulent transactions"
            icon={<AlertTriangle className="w-5 h-5" />}
            accentColor="red"
            ocid="home.fraud_cases.card"
          />
          <KpiCard
            title="Fraud Rate"
            value="0.17%"
            subtitle="Highly imbalanced · requires SMOTE"
            icon={<TrendingDown className="w-5 h-5" />}
            accentColor="red"
            ocid="home.fraud_rate.card"
          />
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
          <KpiCard
            title="Legitimate Transactions"
            value="284,315"
            subtitle="99.83% of all transactions"
            icon={<CheckCircle2 className="w-5 h-5" />}
            accentColor="green"
            ocid="home.legit_transactions.card"
          />
          <KpiCard
            title="Dataset Features"
            value="30"
            subtitle="Time · Amount · V1–V28 (PCA-transformed)"
            icon={<Sigma className="w-5 h-5" />}
            accentColor="blue"
            ocid="home.dataset_features.card"
          />
        </div>
      </section>

      {/* ── Project Overview + Class Distribution ─────────────────────────── */}
      <section
        className="grid grid-cols-1 lg:grid-cols-5 gap-6"
        data-ocid="home.overview.section"
      >
        {/* Description */}
        <Card className="lg:col-span-3 border-border">
          <CardHeader className="pb-3">
            <CardTitle className="text-sm font-display flex items-center gap-2">
              <FlaskConical className="w-4 h-4 text-[oklch(0.78_0.18_280)]" />
              Project Overview
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4 text-sm text-muted-foreground leading-relaxed">
            <p>
              This project applies both{" "}
              <span className="text-foreground font-medium">
                traditional supervised learning
              </span>{" "}
              and{" "}
              <span className="text-[oklch(0.78_0.18_280)] font-medium">
                generative AI
              </span>{" "}
              techniques to detect credit card fraud on the widely-used Kaggle
              ULB dataset. Eight classical classifiers are trained after SMOTE
              oversampling to address severe class imbalance, then benchmarked
              on accuracy, F1-score, ROC-AUC, precision, and recall.
            </p>
            <p>
              A deep-learning{" "}
              <span className="text-foreground font-medium">autoencoder</span>{" "}
              is trained exclusively on legitimate transactions. At inference
              time, high reconstruction error signals anomalous (potentially
              fraudulent) behaviour — achieving{" "}
              <span className="text-[oklch(0.75_0.18_145)] font-medium">
                ROC-AUC 0.947
              </span>{" "}
              without any fraud labels during training.
            </p>
            <p>
              All 30 features (V1–V28 are PCA-transformed to protect cardholder
              privacy, plus{" "}
              <code className="font-mono text-xs bg-muted px-1.5 py-0.5 rounded text-foreground">
                Amount
              </code>{" "}
              and{" "}
              <code className="font-mono text-xs bg-muted px-1.5 py-0.5 rounded text-foreground">
                Time
              </code>
              ) are analyzed via feature importance from the best-performing
              Random Forest model.
            </p>

            {/* Tech stack */}
            <div className="pt-2 border-t border-border">
              <p className="text-xs font-mono text-muted-foreground uppercase tracking-wider mb-3">
                Technology Stack
              </p>
              <div
                className="flex flex-wrap gap-2"
                data-ocid="home.tech_badges.section"
              >
                <TechBadge label="Python" color="blue" />
                <TechBadge label="Scikit-learn" color="orange" />
                <TechBadge label="Keras / TensorFlow" color="red" />
                <TechBadge label="Recharts" color="green" />
                <TechBadge label="React" color="teal" />
                <TechBadge label="Motoko" color="purple" />
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Class distribution donut */}
        <Card
          className="lg:col-span-2 border-border"
          data-ocid="home.class_distribution.card"
        >
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-display flex items-center gap-2">
              <BarChart2 className="w-4 h-4 text-[oklch(0.72_0.18_250)]" />
              Class Distribution
            </CardTitle>
            <p className="text-xs text-muted-foreground mt-0.5">
              Fraud vs. Legitimate breakdown
            </p>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={190}>
              <PieChart>
                <Pie
                  data={pieData}
                  cx="50%"
                  cy="50%"
                  innerRadius={52}
                  outerRadius={80}
                  paddingAngle={3}
                  dataKey="value"
                  stroke="none"
                >
                  {pieData.map((entry) => (
                    <Cell key={entry.name} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip content={<PieTooltip />} />
                <Legend
                  iconType="circle"
                  iconSize={8}
                  formatter={(value: string) => (
                    <span className="text-xs text-muted-foreground">
                      {value}
                    </span>
                  )}
                />
              </PieChart>
            </ResponsiveContainer>

            {/* Percentage callout tiles */}
            <div className="mt-3 grid grid-cols-2 gap-3">
              <div className="bg-[oklch(0.65_0.18_145/0.1)] border border-[oklch(0.65_0.18_145/0.3)] rounded-lg p-3 text-center">
                <p className="text-2xl font-display font-bold text-[oklch(0.75_0.18_145)]">
                  99.83%
                </p>
                <p className="text-xs text-muted-foreground mt-0.5">
                  Legitimate
                </p>
              </div>
              <div className="bg-[oklch(0.55_0.22_25/0.1)] border border-[oklch(0.55_0.22_25/0.3)] rounded-lg p-3 text-center">
                <p className="text-2xl font-display font-bold text-[oklch(0.7_0.22_25)]">
                  0.17%
                </p>
                <p className="text-xs text-muted-foreground mt-0.5">Fraud</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* ── Quick-nav Cards ───────────────────────────────────────────────── */}
      <section data-ocid="home.quicknav.section">
        <p className="text-xs font-mono text-muted-foreground uppercase tracking-widest mb-4">
          Explore the Analysis
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          <NavCard
            path="/eda"
            icon={<BarChart2 className="w-5 h-5" />}
            iconBg="bg-[oklch(0.5_0.18_250/0.15)] text-[oklch(0.78_0.18_250)]"
            title="Exploratory Data Analysis"
            desc="Class distribution, amount histograms, time-of-day patterns, and feature correlation heatmaps."
            ocid="home.eda_nav.card"
            btnOcid="home.eda_nav.button"
          />
          <NavCard
            path="/ml-models"
            icon={<Brain className="w-5 h-5" />}
            iconBg="bg-[oklch(0.5_0.18_280/0.15)] text-[oklch(0.78_0.18_280)]"
            title="ML Model Comparison"
            desc="8 classifiers benchmarked — accuracy, F1-score, ROC-AUC, confusion matrix, and precision-recall."
            ocid="home.ml_nav.card"
            btnOcid="home.ml_nav.button"
          />
          <NavCard
            path="/generative-ai"
            icon={<FlaskConical className="w-5 h-5" />}
            iconBg="bg-[oklch(0.5_0.18_145/0.15)] text-[oklch(0.75_0.18_145)]"
            title="Generative AI Autoencoder"
            desc="Unsupervised anomaly detection via reconstruction error thresholding — no fraud labels needed."
            ocid="home.genai_nav.card"
            btnOcid="home.genai_nav.button"
          />
        </div>
      </section>
    </div>
  );
}
