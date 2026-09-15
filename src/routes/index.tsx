import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { ArrowLeft, ArrowRight, CheckCircle2, Download, Pencil, RotateCcw } from "lucide-react";

import { AmbientField } from "@/components/portal/AmbientField";
import { PortalHeader } from "@/components/portal/PortalHeader";
import { PortalFooter } from "@/components/portal/PortalFooter";
import { ResourcesPanel } from "@/components/portal/ResourcesPanel";
import { StepIndicator } from "@/components/portal/StepIndicator";
import { SelectField, TextAreaField, TextField } from "@/components/portal/Field";
import { GoogleMark } from "@/components/portal/GoogleMark";
import { CATEGORIES, DEPARTMENTS, FACULTIES, PROGRAMMES } from "@/lib/mock-data";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "DICT Registration — Redeemer's University" },
      {
        name: "description",
        content:
          "Register for the Redeemer's University DICT programme. Complete your details, review your submission and download the official order of programmes.",
      },
      { property: "og:title", content: "DICT Registration — Redeemer's University" },
      {
        property: "og:description",
        content:
          "Official registration for the Directorate of Information and Communication Technology, Redeemer's University.",
      },
    ],
  }),
  component: RegistrationPortal,
});

type Details = { firstName: string; lastName: string; email: string };
type Extra = {
  phone: string;
  department: string;
  faculty: string;
  category: string;
  programme: string;
  identifier: string;
  additional: string;
};

const EMPTY_DETAILS: Details = { firstName: "", lastName: "", email: "" };
const EMPTY_EXTRA: Extra = {
  phone: "",
  department: "",
  faculty: "",
  category: "",
  programme: "",
  identifier: "",
  additional: "",
};

const GOOGLE_ACCOUNT: Details = {
  firstName: "Adebayo",
  lastName: "Olamide",
  email: "adebayo.olamide@run.edu.ng",
};

function RegistrationPortal() {
  const [stage, setStage] = useState<"start" | "form" | "review" | "success">("start");
  const [details, setDetails] = useState<Details>(EMPTY_DETAILS);
  const [extra, setExtra] = useState<Extra>(EMPTY_EXTRA);
  const [prefilled, setPrefilled] = useState(false);

  const setDetail = (key: keyof Details) => (value: string) =>
    setDetails((d) => ({ ...d, [key]: value }));
  const setExtraValue = (key: keyof Extra) => (value: string) =>
    setExtra((e) => ({ ...e, [key]: value }));

  const startWithGoogle = () => {
    setDetails(GOOGLE_ACCOUNT);
    setPrefilled(true);
    setStage("form");
  };

  const restart = () => {
    setDetails(EMPTY_DETAILS);
    setExtra(EMPTY_EXTRA);
    setPrefilled(false);
    setStage("start");
  };

  return (
    <div className="flex min-h-screen flex-col">
      <AmbientField />
      <PortalHeader />

      <main className="mx-auto w-full max-w-7xl flex-1 px-5 py-8 sm:px-6 sm:py-10">
        {stage === "start" && (
          <div className="grid items-start gap-6 lg:grid-cols-2">
            <StartCard
              details={details}
              setDetail={setDetail}
              onContinue={() => setStage("form")}
              onGoogle={startWithGoogle}
            />
            <ResourcesPanel />
          </div>
        )}

        {stage === "form" && (
          <div className="grid items-start gap-6 lg:grid-cols-[minmax(0,1.55fr)_minmax(0,1fr)]">
            <FormCard
              details={details}
              extra={extra}
              prefilled={prefilled}
              setDetail={setDetail}
              setExtraValue={setExtraValue}
              onBack={() => setStage("start")}
              onContinue={() => setStage("review")}
            />
            <ResourcesPanel />
          </div>
        )}

        {stage === "review" && (
          <ReviewCard
            details={details}
            extra={extra}
            onEdit={() => setStage("form")}
            onSubmit={() => setStage("success")}
          />
        )}

        {stage === "success" && <SuccessCard details={details} extra={extra} onRestart={restart} />}
      </main>

      <PortalFooter />
    </div>
  );
}

/* ---------------------------------- step 01 --------------------------------- */

function StartCard({
  details,
  setDetail,
  onContinue,
  onGoogle,
}: {
  details: Details;
  setDetail: (key: keyof Details) => (value: string) => void;
  onContinue: () => void;
  onGoogle: () => void;
}) {
  return (
    <section className="glass-panel rounded-3xl p-6 sm:p-8">
      <div className="mb-6 flex items-center gap-2">
        <span className="size-1.5 rounded-full bg-gold" />
        <span className="eyebrow">Registration</span>
      </div>

      <h1 className="font-display text-3xl font-semibold tracking-tight text-brand-dark text-balance">
        DICT Registration
      </h1>
      <p className="mt-2 max-w-[48ch] text-ink-soft text-pretty">
        Complete your registration for the Redeemer&rsquo;s University DICT programme.
      </p>

      <div className="mt-6">
        <StepIndicator current={1} />
      </div>

      <form
        className="mt-6 space-y-4"
        onSubmit={(e) => {
          e.preventDefault();
          onContinue();
        }}
      >
        <div className="grid gap-4 sm:grid-cols-2">
          <TextField
            id="first-name"
            label="First Name"
            placeholder="Enter your first name"
            value={details.firstName}
            onChange={setDetail("firstName")}
          />
          <TextField
            id="last-name"
            label="Last Name"
            placeholder="Enter your last name"
            value={details.lastName}
            onChange={setDetail("lastName")}
          />
        </div>
        <TextField
          id="email"
          type="email"
          label="Email Address"
          placeholder="Enter your email address"
          value={details.email}
          onChange={setDetail("email")}
        />

        <button
          type="submit"
          className="w-full rounded-xl bg-brand py-3.5 font-medium text-brand-foreground shadow-cta transition-colors hover:bg-brand-dark"
        >
          Continue Registration
        </button>
        <p className="text-center text-[11px] leading-relaxed text-ink-soft">
          By continuing, you agree to our{" "}
          <a href="#" className="text-brand underline underline-offset-2">
            Terms of Use
          </a>{" "}
          and{" "}
          <a href="#" className="text-brand underline underline-offset-2">
            Privacy Policy
          </a>
          .
        </p>

        <div className="flex items-center gap-4 pt-2">
          <span className="h-px flex-1 bg-hairline" />
          <span className="text-[11px] uppercase tracking-widest text-ink-faint">or</span>
          <span className="h-px flex-1 bg-hairline" />
        </div>

        <button
          type="button"
          onClick={onGoogle}
          className="flex w-full items-center justify-center gap-3 rounded-xl border border-hairline bg-white/70 py-3.5 font-medium text-ink transition-colors hover:bg-white"
        >
          <GoogleMark className="size-5" />
          Continue with Google
        </button>
        <p className="text-center text-[11px] text-ink-soft">
          Register quickly using your Google account.
        </p>
      </form>
    </section>
  );
}

/* ---------------------------------- step 02 --------------------------------- */

function FormCard({
  details,
  extra,
  prefilled,
  setDetail,
  setExtraValue,
  onBack,
  onContinue,
}: {
  details: Details;
  extra: Extra;
  prefilled: boolean;
  setDetail: (key: keyof Details) => (value: string) => void;
  setExtraValue: (key: keyof Extra) => (value: string) => void;
  onBack: () => void;
  onContinue: () => void;
}) {
  return (
    <section className="glass-panel rounded-3xl p-6 sm:p-8">
      <div className="mb-6 flex items-center gap-2">
        <span className="size-1.5 rounded-full bg-gold" />
        <span className="eyebrow">Registration Details</span>
      </div>

      <h1 className="font-display text-3xl font-semibold tracking-tight text-brand-dark text-balance">
        Complete Your Registration
      </h1>
      <p className="mt-2 max-w-[52ch] text-ink-soft text-pretty">
        Confirm your basic details and provide the additional information required by DICT.
      </p>

      <div className="mt-6">
        <StepIndicator current={2} />
      </div>

      <form
        className="mt-8 space-y-8"
        onSubmit={(e) => {
          e.preventDefault();
          onContinue();
        }}
      >
        <fieldset>
          <legend className="eyebrow mb-4">Your details</legend>
          {prefilled && (
            <p className="mb-4 flex items-center gap-2 rounded-xl border border-success/20 bg-success-soft px-3.5 py-2.5 text-xs text-success">
              <CheckCircle2 className="size-4 shrink-0" />
              Details retrieved from your Google account.
            </p>
          )}
          <div className="grid gap-4 sm:grid-cols-2">
            <TextField
              id="f-first"
              label="First Name"
              placeholder="Enter your first name"
              value={details.firstName}
              onChange={setDetail("firstName")}
            />
            <TextField
              id="f-last"
              label="Last Name"
              placeholder="Enter your last name"
              value={details.lastName}
              onChange={setDetail("lastName")}
            />
            <TextField
              id="f-email"
              type="email"
              label="Email Address"
              placeholder="Enter your email address"
              value={details.email}
              onChange={setDetail("email")}
              className="sm:col-span-2"
            />
          </div>
        </fieldset>

        <fieldset className="border-t border-hairline pt-6">
          <legend className="eyebrow mb-4">DICT information</legend>
          <div className="grid gap-4 sm:grid-cols-2">
            <TextField
              id="f-phone"
              label="Phone Number"
              placeholder="e.g. +234 800 000 0000"
              value={extra.phone}
              onChange={setExtraValue("phone")}
            />
            <TextField
              id="f-id"
              label="Student / Staff ID"
              placeholder="e.g. RUN/CSC/21/1042"
              value={extra.identifier}
              onChange={setExtraValue("identifier")}
            />
            <SelectField
              id="f-department"
              label="Department"
              value={extra.department}
              onChange={setExtraValue("department")}
              options={DEPARTMENTS}
              placeholder="Select your department"
            />
            <SelectField
              id="f-faculty"
              label="Faculty / Unit"
              value={extra.faculty}
              onChange={setExtraValue("faculty")}
              options={FACULTIES}
              placeholder="Select your faculty or unit"
            />
            <SelectField
              id="f-category"
              label="Registration Category"
              value={extra.category}
              onChange={setExtraValue("category")}
              options={CATEGORIES}
              placeholder="Select a category"
            />
            <SelectField
              id="f-programme"
              label="Programme"
              value={extra.programme}
              onChange={setExtraValue("programme")}
              options={PROGRAMMES}
              placeholder="Select a programme"
            />
            <TextAreaField
              id="f-additional"
              label="Additional Information"
              placeholder="Anything else the DICT team should know about your registration"
              value={extra.additional}
              onChange={setExtraValue("additional")}
              className="sm:col-span-2"
            />
          </div>
        </fieldset>

        <div className="flex flex-col gap-3 border-t border-hairline pt-6 sm:flex-row sm:justify-end">
          <button
            type="button"
            onClick={onBack}
            className="inline-flex items-center justify-center gap-2 rounded-xl border border-hairline bg-white/70 px-5 py-3 text-sm font-medium text-ink transition-colors hover:bg-white"
          >
            <ArrowLeft className="size-4" />
            Back
          </button>
          <button
            type="submit"
            className="inline-flex items-center justify-center gap-2 rounded-xl bg-brand px-6 py-3 text-sm font-medium text-brand-foreground shadow-cta transition-colors hover:bg-brand-dark"
          >
            Continue
            <ArrowRight className="size-4" />
          </button>
        </div>
      </form>
    </section>
  );
}

/* ---------------------------------- step 03 --------------------------------- */

function SummaryRow({ label, value }: { label: string; value: string }) {
  return (
    <div className="grid gap-1 border-b border-hairline/70 py-3 last:border-0 sm:grid-cols-[minmax(0,14rem)_minmax(0,1fr)] sm:gap-4">
      <dt className="text-xs font-medium text-ink-soft">{label}</dt>
      <dd className="min-w-0 break-words text-sm text-ink">{value || "—"}</dd>
    </div>
  );
}

function ReviewSection({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="rounded-2xl border border-hairline bg-white/60 p-5 sm:p-6">
      <h2 className="font-display text-sm font-semibold uppercase tracking-[0.12em] text-brand-dark">
        {title}
      </h2>
      <dl className="mt-2">{children}</dl>
    </section>
  );
}

function ReviewCard({
  details,
  extra,
  onEdit,
  onSubmit,
}: {
  details: Details;
  extra: Extra;
  onEdit: () => void;
  onSubmit: () => void;
}) {
  return (
    <div className="mx-auto max-w-3xl">
      <section className="glass-panel rounded-3xl p-6 sm:p-8">
        <div className="mb-6 flex items-center gap-2">
          <span className="size-1.5 rounded-full bg-gold" />
          <span className="eyebrow">Final check</span>
        </div>

        <h1 className="font-display text-3xl font-semibold tracking-tight text-brand-dark text-balance">
          Review Your Registration
        </h1>
        <p className="mt-2 text-ink-soft text-pretty">
          Confirm that everything below is correct before you submit.
        </p>

        <div className="mt-6">
          <StepIndicator current={3} />
        </div>

        <div className="mt-8 space-y-4">
          <ReviewSection title="Personal Information">
            <SummaryRow label="First Name" value={details.firstName} />
            <SummaryRow label="Last Name" value={details.lastName} />
            <SummaryRow label="Student / Staff ID" value={extra.identifier} />
          </ReviewSection>

          <ReviewSection title="Contact Information">
            <SummaryRow label="Email Address" value={details.email} />
            <SummaryRow label="Phone Number" value={extra.phone} />
          </ReviewSection>

          <ReviewSection title="Registration Information">
            <SummaryRow label="Department" value={extra.department} />
            <SummaryRow label="Faculty / Unit" value={extra.faculty} />
            <SummaryRow label="Registration Category" value={extra.category} />
            <SummaryRow label="Programme" value={extra.programme} />
            <SummaryRow label="Additional Information" value={extra.additional} />
          </ReviewSection>
        </div>

        <div className="mt-8 flex flex-col gap-3 border-t border-hairline pt-6 sm:flex-row sm:justify-end">
          <button
            type="button"
            onClick={onEdit}
            className="inline-flex items-center justify-center gap-2 rounded-xl border border-hairline bg-white/70 px-5 py-3 text-sm font-medium text-ink transition-colors hover:bg-white"
          >
            <Pencil className="size-4" />
            Edit Details
          </button>
          <button
            type="button"
            onClick={onSubmit}
            className="inline-flex items-center justify-center gap-2 rounded-xl bg-brand px-6 py-3 text-sm font-medium text-brand-foreground shadow-cta transition-colors hover:bg-brand-dark"
          >
            Submit Registration
            <ArrowRight className="size-4" />
          </button>
        </div>
        <p className="mt-4 text-center text-[11px] text-ink-soft">
          By continuing, you agree to our{" "}
          <a href="#" className="text-brand underline underline-offset-2">
            Terms of Use
          </a>{" "}
          and{" "}
          <a href="#" className="text-brand underline underline-offset-2">
            Privacy Policy
          </a>
          .
        </p>
      </section>
    </div>
  );
}

/* ---------------------------------- success --------------------------------- */

function SuccessCard({
  details,
  extra,
  onRestart,
}: {
  details: Details;
  extra: Extra;
  onRestart: () => void;
}) {
  const name = `${details.firstName} ${details.lastName}`.trim() || "Example User";

  return (
    <div className="mx-auto max-w-2xl">
      <section className="glass-panel rounded-3xl p-6 text-center sm:p-10">
        <span className="mx-auto grid size-16 place-items-center rounded-2xl bg-success-soft text-success ring-1 ring-success/20">
          <CheckCircle2 className="size-8" />
        </span>

        <h1 className="mt-6 font-display text-3xl font-semibold tracking-tight text-brand-dark text-balance">
          Registration Successful
        </h1>
        <p className="mt-2 text-ink-soft text-pretty">
          Your registration has been submitted successfully.
        </p>

        <div className="mt-8 rounded-2xl border border-hairline bg-white/60 p-5 text-left sm:p-6">
          <p className="eyebrow mb-2">Registration summary</p>
          <dl>
            <SummaryRow label="Registration ID" value="DICT-2026-00124" />
            <SummaryRow label="Name" value={name} />
            <SummaryRow label="Email" value={details.email || "example@run.edu.ng"} />
            <SummaryRow
              label="Registration Type"
              value={extra.programme || extra.category || "Example Programme"}
            />
            <SummaryRow label="Submission Date" value="15 September 2026" />
          </dl>
        </div>

        <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:justify-center">
          <button
            type="button"
            className="inline-flex items-center justify-center gap-2 rounded-xl bg-brand px-6 py-3 text-sm font-medium text-brand-foreground shadow-cta transition-colors hover:bg-brand-dark"
          >
            <Download className="size-4" />
            Download Confirmation
          </button>
          <button
            type="button"
            onClick={onRestart}
            className="inline-flex items-center justify-center gap-2 rounded-xl border border-hairline bg-white/70 px-5 py-3 text-sm font-medium text-ink transition-colors hover:bg-white"
          >
            <RotateCcw className="size-4" />
            Return to Registration
          </button>
        </div>
      </section>
    </div>
  );
}
