# ClinicOS - The Clinical Workflow Engine

**ClinicOS is a proof-of-concept digital platform designed to reduce GP burnout and improve healthcare efficiency in busy, multicultural clinics.** This project was developed as a submission for the **2025 Western Sydney Health Alliance Hackathon**, where it addresses the critical challenge of GP shortages in growth areas (Case Study 3).

---

## The Problem: A System at its Breaking Point

Western Sydney’s primary care is in crisis. A severe shortage of General Practitioners, combined with a burnout epidemic seeing **70% of doctors overwhelmed**, has created a system that is failing both patients and practitioners. In rapidly growing, culturally diverse suburbs, this translates to:

-   **Long wait times** for patients.
-   **Overworked doctors** facing immense cognitive and administrative load.
-   **Critical communication barriers** for non-English speaking communities, which endangers patient health.

The traditional model of care is no longer sustainable. Our solution isn't just to find more doctors—it's to make our current doctors dramatically more effective.

## Our Solution: The ClinicOS Platform

Inspired by the proven efficiency of self-service models, ClinicOS is a smart system that streamlines the entire patient journey. It automates the most time-consuming parts of a GP's day, allowing them to focus on what matters: treating patients.

The platform consists of two main components:

### 1. The Patient Kiosk

A simple, tablet-based interface that guides patients through an intelligent check-in process.

![Patient Kiosk Demo](https://your-image-host.com/kiosk_demo.gif)

-   **Multi-Language Support:** Patients select their preferred language from a visual grid.
-   **Intent-Based Triage:** The system asks, "Are you here for a new problem, or a repeat prescription?" to direct patients into a "fast lane" for routine visits.
-   **Conversational AI Intake:** For new problems, a simulated chatbot guides patients through structured questions to capture symptoms accurately and in their native language.

### 2. The GP Dashboard

A professional, data-rich dashboard that acts as the GP's command center.

![GP Dashboard Demo](https://your-image-host.com/dashboard_demo.gif)

-   **Live Triage Queue:** Displays a prioritized list of waiting patients with at-a-glance information on their complaint and urgency.
-   **AI-Powered GP Briefing:** With one click, the GP can view a concise, translated summary of the patient's kiosk input, including potential issues and recommended actions. This allows the doctor to enter the consultation fully prepared.

---

## Tech Stack & Prototype Details

This project is a high-fidelity prototype built to demonstrate the core user experience and workflow.

-   **Frontend:** `HTML5`, `CSS3`, `Vanilla JavaScript`
-   **Design:** The UI/UX was designed to be clean, accessible, and tablet-friendly, with a focus on high-contrast and large, tappable elements.
-   **AI & Logic:** All "AI" and backend logic (e.g., translation, summarization, database lookups) are **simulated** on the frontend using JavaScript to demonstrate the intended functionality within the hackathon's scope.

---

## How to Run the Demo Locally

1.  Clone the repository:
    ```bash
    git clone https://github.com/your-username/clinic-os.git
    ```
2.  Navigate to the project directory:
    ```bash
    cd clinic-os
    ```
3.  Open the `patient-kiosk/index.html` file in your browser to begin the patient kiosk journey, or open `clinicos/index.html` to view the GP Dashboard.

---

## Key Features & Innovations

-   **Reduces GP Burnout:** Significantly cuts the administrative and cognitive load on doctors.
-   **Overcomes Language Barriers:** Integrated translation creates clearer communication and safer outcomes.
-   **Proven Efficiency Model:** Applies the successful self-service kiosk model to a clinical setting, creating a "fast lane" for routine care.
-   **Human-Centric Design:** Protects a doctor's time and mental energy, allowing for higher-quality patient interaction.