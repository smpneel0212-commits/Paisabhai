# Project Specification: Personalized Master-Driven Ledger Web App

## 1. Project Overview & Philosophy
The objective is to build a single-page, serverless, mobile-responsive web application designed to be deployed directly on **GitHub Pages**.

The end user manages all finances through personalized, highly specific Excel sheets. **CRITICAL REQUIREMENT:** The application **must NOT contain pre-baked, hardcoded business categories, cost centers, or worker lists**. 

Instead, the app must replicate the architecture of an **Excel Master Tab**:
* All dropdowns, groupings, and tags in the daily entry forms must pull dynamically from a user-managed **Master Configuration Tab**.
* The user must have total freedom to define, rename, add, or delete their own **Particulars** (e.g., specific farm divisions, personal accounts, goat farming, or any custom ledger), their own **Expense Categories**, and their own **People/Vendors Directory**.
* No sample/mock data should be permanently locked in. If first-time placeholder values are provided, they must be fully editable or removable from the Master Tab.

---

## 2. Technical Stack & Deployment Constraints
* **Platform:** GitHub Pages (Static hosting: `index.html`, pure client-side).
* **Stack:** Single Page Application (Vanilla JavaScript or React via CDN / lightweight static build) with Tailwind CSS for modern, high-contrast, mobile-friendly design.
* **Storage:** Browser `IndexedDB` or `localStorage` for offline-capable, persistent data retention without requiring a back-end database or server.
* **Excel Compatibility:** Integrated `SheetJS` (`xlsx.full.min.js`) library to allow two-way export and import of `.xlsx` / `.csv` files matching the user's custom columns.

---

## 3. Data Architecture: The Master Tab (Dynamic Lookups)

The Master Tab serves as the single source of truth for the entire application. It must support three independent, user-customizable dynamic lists:

### A. Particulars List (Cost Centers / Accounts)
* **Definition:** High-level entities or operational verticals defined entirely by the user (e.g., custom farm plots, goat farming units, personal household, trading ventures, machinery pools).
* **Fields:** 
  * `id`: Unique identifier
  * `particular_name`: String (User-entered, editable)
  * `status`: Active / Inactive toggle
* **Capabilities:** Add new Particular, Edit name, Reorder, Delete/Archive.

### B. Categories List (Granular Expense Types)
* **Definition:** The specific classification of expense, user-defined.
* **Fields:**
  * `id`: Unique identifier
  * `category_name`: String (User-entered, editable)
  * `linked_particular_id`: (Optional filter link to limit a category to a specific Particular, or marked as "Global/Applicable to All").
* **Capabilities:** Add, Edit, Delete.

### C. People / Contacts Directory
* **Definition:** Master register of all recurring individuals involved in transactions (e.g., laborers, drivers, suppliers, traders, family members).
* **Fields:**
  * `id`: Unique identifier
  * `person_name`: String (Required)
  * `role_tag`: String (Optional, user-defined text tag)
  * `phone_number`: String (Optional)
* **Capabilities:** Add, Edit, Quick-delete.

---

## 4. Daily Transaction Ledger (The Entry Module)

The transaction entry system reflects an Excel row input, with auto-completion fed directly by the Master Tab.

### Form Fields:
1. **Date:** Standard date selector; defaults to current local date (`YYYY-MM-DD`).
2. **Particular:** Dropdown dynamically populated with active items from **Master Tab -> Particulars**. Includes a `+ Add New Particular` quick-action button right next to the select field to update the master list inline.
3. **Category:** Dropdown dynamically populated from **Master Tab -> Categories**. Includes a `+ Add New Category` inline quick-action.
4. **Paid To / Person:** Searchable typeahead dropdown populated from **Master Tab -> People Directory**. Also allows direct entry of a new name without navigating away.
5. **Amount:** Numeric field formatted for currency (e.g., Indian Rupee `₹` or local currency). Optimized for quick keypad entry on mobile screens.
6. **Payment Mode:** Configurable selection (e.g., Cash, UPI, Bank Transfer, Cheque, Credit/Udhar).
7. **Description / Notes:** Free text field for granular daily details (e.g., counts, weights, labor hours, invoice numbers).

---

## 5. Ledger View & Spreadsheet-Like Operations

### A. Interactive Data Grid
* Tabular view of all recorded expenses, ordered by date descending by default.
* Inline search bar that filters text across Particular, Category, Person, and Notes simultaneously.
* Column-level filters:
  * Filter by **Date Range** (Today, Yesterday, Current Month, Custom From–To).
  * Filter by **Particular** (Multiselect or single select).
  * Filter by **Person** (To audit all disbursements made to one individual).
* Quick edit and delete actions on each row with clear user confirmation.

### B. Running Summaries
* Total expenses calculated dynamically based on current filter selections.
* Breakdown by **Particular** (e.g., dynamic cards showing the sum spent under each custom particular in the active view).
* Breakdown by **Payment Mode** (e.g., Total Cash vs. Total Digital).

---

## 6. Two-Way Excel Synchronization (Preserving Excel Freedom)

Since the user's primary workflow is rooted in Excel, the app must never silo data:

1. **One-Click Export to Excel (`.xlsx`):**
   * Generates a workbook with two sheets:
     * Sheet 1: `Ledger_Transactions` (Date, Particular, Category, Paid To, Amount, Mode, Description).
     * Sheet 2: `Master_Lookups` (The current lists of Particulars, Categories, and People).
2. **Import from Excel / CSV:**
   * Parser that maps standard columns back into browser storage.
   * Auto-detection: If an imported file contains a Particular or Category not currently in the Master Tab, the app prompts the user: *"Add [Name] to your Master Tab automatically?"*

---

## 7. Implementation Prompt for Anti-Gravity / AI Developer

```
Build a fully functioning, responsive Single-Page Application (SPA) ready to be hosted on GitHub Pages that serves as a personalized expense manager driven by a user-defined Master Tab.

CORE CONSTRAINTS:
1. NO HARDCODED EXPENSE CATEGORIES OR VERTICALS. The user must define their own Particulars, Categories, and People list.
2. Provide a dedicated "Master Settings" view where the user can manage:
   - Particulars (Custom business/personal divisions)
   - Categories (Custom expense classifications)
   - People Directory (Custom names of workers/vendors)
3. The Transaction Entry form must dynamically load options from this Master Settings data. Include inline "+" buttons next to the dropdowns so the user can register new particulars or people on the fly.
4. Provide an Excel-style ledger view with instant date, particular, and payee filters, as well as automatic totals.
5. Implement client-side Export to Excel (.xlsx) and Import from Excel (.xlsx/.csv) using SheetJS (xlsx.full.min.js via CDN).
6. Persist all state locally using localStorage or IndexedDB so it runs 100% offline and requires zero backend server configuration.
7. Deliver the entire solution in clean, deployable static code (index.html, styles, scripts) optimized for mobile and desktop screens.
```
