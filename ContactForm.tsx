"use client";

import { useState, type FormEvent } from "react";

type Status = "idle" | "sending" | "success" | "error";

const inputClass =
    "w-full px-3 py-2 rounded-lg border border-gray-300 text-sm sm:text-base text-gray-800 focus:outline-none focus:ring-2 focus:ring-pvvTheme";

export default function ContactForm() {
    const [status, setStatus] = useState<Status>("idle");
    const [errors, setErrors] = useState<Record<string, string>>({});
    const [message, setMessage] = useState("");

    async function onSubmit(e: FormEvent<HTMLFormElement>) {
        e.preventDefault();
        const form = e.currentTarget;
        setStatus("sending");
        setErrors({});
        setMessage("");

        try {
            const res = await fetch("/api/inquiries", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(Object.fromEntries(new FormData(form))),
            });
            const data = (await res.json()) as {
                errors?: Record<string, string>;
                error?: string;
            };

            if (res.ok) {
                form.reset();
                setStatus("success");
                return;
            }
            setErrors(data.errors ?? {});
            setMessage(data.error ?? "");
            setStatus("error");
        } catch {
            setMessage("Network error. Please try again.");
            setStatus("error");
        }
    }

    if (status === "success") {
        return (
            <div
                role="status"
                className="mt-6 rounded-lg bg-green-50 p-4 text-green-800 text-sm sm:text-base"
            >
                Thank you! Your message has been received and we&apos;ll get back to you as soon as possible.
            </div>
        );
    }

    return (
        <form onSubmit={onSubmit} className="mt-6 space-y-4" noValidate>
            <h3 className="font-semibold text-pvvTheme text-lg">Send us a message</h3>

            {/* Honeypot: hidden from people, filled in by bots */}
            <input
                type="text"
                name="website"
                tabIndex={-1}
                autoComplete="off"
                aria-hidden="true"
                className="hidden"
            />

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <Field label="Name *" error={errors.name}>
                    <input name="name" required maxLength={100} autoComplete="name" className={inputClass} />
                </Field>
                <Field label="Email *" error={errors.email}>
                    <input name="email" type="email" required maxLength={254} autoComplete="email" className={inputClass} />
                </Field>
                <Field label="Phone" error={errors.phone}>
                    <input name="phone" type="tel" maxLength={40} autoComplete="tel" className={inputClass} />
                </Field>
                <Field label="Vessel (optional)" error={errors.vessel}>
                    <input name="vessel" maxLength={100} className={inputClass} />
                </Field>
            </div>

            <Field label="Message *" error={errors.message}>
                <textarea name="message" required rows={5} maxLength={2000} className={inputClass} />
            </Field>

            {status === "error" && message && (
                <p role="alert" className="text-sm text-red-600">
                    {message}
                </p>
            )}

            <button
                type="submit"
                disabled={status === "sending"}
                className="bg-pvvTheme text-white px-6 py-3 rounded-lg font-semibold hover:bg-pvvTheme/90 transition-colors disabled:opacity-60"
            >
                {status === "sending" ? "Sending..." : "Send Message"}
            </button>
        </form>
    );
}

function Field({
    label,
    error,
    children,
}: {
    label: string;
    error?: string;
    children: React.ReactNode;
}) {
    return (
        <label className="block text-sm font-semibold text-gray-700">
            <span className="mb-1 block">{label}</span>
            {children}
            {error && <span className="mt-1 block text-xs font-normal text-red-600">{error}</span>}
        </label>
    );
}
