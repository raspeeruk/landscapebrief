"use client";

import { useEffect, useState } from "react";
import styles from "./DomainSaleNotice.module.css";

export default function DomainSaleNotice({
  domain,
  email = "hq@rogergroup.xyz",
}: {
  domain: string;
  email?: string;
}) {
  const [visible, setVisible] = useState(false);
  const storageKey = `domain-sale-dismissed:${domain}`;

  useEffect(() => {
    const timer = window.setTimeout(() => {
      try {
        setVisible(window.sessionStorage.getItem(storageKey) !== "1");
      } catch {
        setVisible(true);
      }
    }, 1800);
    return () => window.clearTimeout(timer);
  }, [storageKey]);

  function dismiss() {
    setVisible(false);
    try {
      window.sessionStorage.setItem(storageKey, "1");
    } catch {
      // The notice can still be dismissed when browser storage is unavailable.
    }
  }

  if (!visible) return null;

  return (
    <aside
      className={styles.notice}
      aria-label="Domain for sale"
      data-nosnippet
      onKeyDown={(event) => {
        if (event.key === "Escape") dismiss();
      }}
    >
      <button
        type="button"
        className={styles.close}
        aria-label="Dismiss domain sale notice"
        onClick={dismiss}
      >
        <span aria-hidden="true">×</span>
      </button>
      <p className={styles.title}>This domain is for sale</p>
      <p className={styles.description}>Interested in {domain}?</p>
      <a
        className={styles.link}
        href={`mailto:${email}?subject=${encodeURIComponent(`${domain} acquisition enquiry`)}`}
      >
        Enquire about the domain <span aria-hidden="true">↗</span>
      </a>
    </aside>
  );
}
