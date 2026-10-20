# Paisabhai (पैसाभाई)
> **Personalized Master-Driven Ledger Web App**

A single-page, serverless, mobile-responsive web application designed to be deployed directly on **GitHub Pages**, operating 100% offline with zero backend server configuration.

---

## 🌟 Philosophy & Overview

**Paisabhai** mirrors the architecture of an **Excel Master Tab** for day-to-day personal and business expense tracking:
* **Zero Hardcoded Categories:** No hardcoded cost centers, categories, or worker lists. The user has complete freedom to define, rename, add, or delete their own Particulars, Expense Categories, and Contacts.
* **Master Tab as Source of Truth:** All dropdowns, groupings, and tags in daily entry forms pull dynamically from a user-managed Master Configuration.
* **Two-Way Excel Freedom:** Export and import multi-sheet `.xlsx` files seamlessly using SheetJS (`xlsx.full.min.js`).

---

## 📑 Specification

See [PROJECT_SPECIFICATION.md](PROJECT_SPECIFICATION.md) for the complete design and requirements document.

---

## 🚀 Key Modules

1. **Master Configuration Tab**:
   - **Particulars** (Custom cost centers, operational divisions, accounts)
   - **Categories** (Custom granular expense types + optional linkage to Particulars)
   - **People / Contacts Directory** (Recurring payees, workers, vendors, family)
2. **Daily Transaction Ledger (Entry Module)**:
   - Mobile-optimized single-hand entry
   - Inline `+` quick-add modals for Particulars, Categories, and People on the fly
   - Fast numeric keypad formatting and payment mode chips
3. **Interactive Ledger Grid**:
   - Live multi-column filters (Date presets, Particular, Payee)
   - Real-time search across all text attributes
   - Dynamic running summaries (Filtered Total, Particular breakdown, Cash vs. Digital split)
4. **SheetJS Two-Way Sync**:
   - 1-click Export to `.xlsx` (Multi-sheet: `Ledger_Transactions` & `Master_Lookups`)
   - Import from `.xlsx` / `.csv` with auto-detection of missing Master items
5. **Offline Persistence**:
   - LocalStorage / IndexedDB persistence for 100% private, serverless, offline usage
