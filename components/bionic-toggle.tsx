"use client";

import { useEffect, useSyncExternalStore } from "react";

const KEY = "bionic-reading";
const listeners = new Set<() => void>();

function read(): boolean {
    try {
        return localStorage.getItem(KEY) === "on";
    } catch {
        return false;
    }
}

function write(on: boolean) {
    try {
        localStorage.setItem(KEY, on ? "on" : "off");
    } catch { }
    listeners.forEach((l) => l());
}

function subscribe(listener: () => void) {
    listeners.add(listener);
    window.addEventListener("storage", listener);
    return () => {
        listeners.delete(listener);
        window.removeEventListener("storage", listener);
    };
}

/** Switch that turns bionic reading on for article text. Remembers the choice. */
export function BionicToggle() {
    const on = useSyncExternalStore(subscribe, read, () => false);

    // The article text is styled from <html data-bionic>, so keep that in step.
    useEffect(() => {
        document.documentElement.dataset.bionic = on ? "on" : "off";
        return () => {
            delete document.documentElement.dataset.bionic;
        };
    }, [on]);

    return (
        <div className="bionic">
            <button
                type="button"
                role="switch"
                aria-checked={on}
                aria-describedby="bionic-hint"
                className="bionic-switch"
                onClick={() => write(!on)}
            >
                <span className="bionic-label">bionic reading</span>
                <span className="bionic-track" aria-hidden="true">
                    <span className="bionic-thumb" />
                </span>
            </button>
            <span id="bionic-hint" className="bionic-hint">
                easier reading for ADHD & dyslexia
            </span>
        </div>
    );
}