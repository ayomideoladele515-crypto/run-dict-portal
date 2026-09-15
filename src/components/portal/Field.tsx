import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

export function FieldLabel({ children, htmlFor }: { children: ReactNode; htmlFor?: string }) {
  return (
    <label htmlFor={htmlFor} className="mb-1.5 block text-xs font-medium text-ink-soft">
      {children}
    </label>
  );
}

export function TextField({
  label,
  id,
  value,
  onChange,
  placeholder,
  type = "text",
  className,
  readOnly,
}: {
  label: string;
  id: string;
  value: string;
  onChange?: (value: string) => void;
  placeholder?: string;
  type?: string;
  className?: string;
  readOnly?: boolean;
}) {
  return (
    <div className={className}>
      <FieldLabel htmlFor={id}>{label}</FieldLabel>
      <input
        id={id}
        type={type}
        value={value}
        readOnly={readOnly}
        onChange={(e) => onChange?.(e.target.value)}
        placeholder={placeholder}
        className={cn("field-input", readOnly && "bg-white/40 text-ink-soft")}
      />
    </div>
  );
}

export function SelectField({
  label,
  id,
  value,
  onChange,
  options,
  placeholder = "Select an option",
  className,
}: {
  label: string;
  id: string;
  value: string;
  onChange: (value: string) => void;
  options: string[];
  placeholder?: string;
  className?: string;
}) {
  return (
    <div className={className}>
      <FieldLabel htmlFor={id}>{label}</FieldLabel>
      <div className="relative">
        <select
          id={id}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className={cn("field-input appearance-none pr-10", !value && "text-ink-faint")}
        >
          <option value="">{placeholder}</option>
          {options.map((option) => (
            <option key={option} value={option} className="text-ink">
              {option}
            </option>
          ))}
        </select>
        <span className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-ink-faint">
          ▾
        </span>
      </div>
    </div>
  );
}

export function TextAreaField({
  label,
  id,
  value,
  onChange,
  placeholder,
  className,
}: {
  label: string;
  id: string;
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  className?: string;
}) {
  return (
    <div className={className}>
      <FieldLabel htmlFor={id}>{label}</FieldLabel>
      <textarea
        id={id}
        rows={4}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className="field-input resize-none leading-relaxed"
      />
    </div>
  );
}
