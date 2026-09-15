# DICT Portal Connect

Create a high-fidelity, modern frontend design for a Redeemer’s University DICT Registration Portal.

This is a UI/UX frontend prototype only. Do not build a backend, database, API, real Google authentication, Supabase, or server functionality. Use realistic mock data and frontend interactions.

The product is for the Directorate of Information and Communication Technology (DICT) at Redeemer’s University.

DESIGN DIRECTION
Create an official university digital-service experience that feels:
- Professional
- Modern
- Minimal
- Trustworthy
- Elegant
- Easy to use
- Spacious and accessible

Do not make it look like a generic SaaS template.

Use Redeemer’s University branding and a refined institutional colour palette. Use excellent typography, subtle borders, soft shadows, clean icons, rounded components and strong visual hierarchy.

==================================================
PUBLIC REGISTRATION PAGE
==================================================

Create the main registration page as a desktop split-screen layout.

TOP HEADER:
- Redeemer’s University DICT logo at the top-left.
- Keep the header minimal.
- Optional Help/Contact link on the right.

LEFT SIDE — REGISTRATION:

Heading:
“DICT Registration”

Supporting text:
“Complete your registration for the Redeemer’s University DICT programme.”

Show two ways to begin.

MANUAL REGISTRATION:

First Name
[ Enter your first name ]

Last Name
[ Enter your last name ]

Email Address
[ Enter your email address ]

Primary CTA:
[ Continue Registration ]

Then create a clear divider:

──────────── OR ────────────

GOOGLE OPTION:

[ Google icon ] Continue with Google

Supporting text:
“Register quickly using your Google account.”

The Google button is only a frontend mockup. Do not implement actual Google OAuth.

Both options should lead to the same registration process.

==================================================
RIGHT SIDE — REGISTRATION RESOURCES
==================================================

Create a visually attractive resource panel.

Heading:
“Registration Resources”

Create a prominent document card.

PDF/document icon or illustration.

Title:
“Order of Programmes”

Description:
“Download the official DICT order of programmes and review the programme information before completing your registration.”

Button:
[ Download Brochure ]

Below it, create a small support card:

“Need help?”

“Contact the DICT team if you have questions about registration.”

[ Contact DICT ]

The right panel should feel like part of the registration experience, not an unrelated sidebar.

==================================================
REGISTRATION FORM
==================================================

After the user chooses either registration method, show the registration form.

Heading:
“Complete Your Registration”

Show the user's basic details:

First Name
Last Name
Email Address

These can appear as pre-filled information after the Google option.

Then show the additional registration fields required by DICT.

Include appropriate fields such as:
- Phone Number
- Department
- Faculty / Unit
- Registration Category
- Programme
- Additional Information

Use clean, professional form components.

Include a simple progress indicator:

01 Details
02 Registration
03 Review

Buttons:
[ Back ]
[ Continue ]

==================================================
REVIEW PAGE
==================================================

Create a clean review screen.

Heading:
“Review Your Registration”

Organize all submitted information into sections:

Personal Information
Contact Information
Registration Information

Allow users to edit information before submission.

Buttons:
[ Edit Details ]
[ Submit Registration ]

==================================================
SUCCESS PAGE
==================================================

Create a polished success state.

Use a professional success icon/illustration.

Heading:
“Registration Successful”

Message:
“Your registration has been submitted successfully.”

Show a registration summary:

Registration ID
DICT-2026-00124

Name
Example User

Email
example@run.edu.ng

Registration Type
Example Programme

Submission Date
15 September 2026

Buttons:
[ Download Confirmation ]
[ Return to Registration ]

==================================================
FOOTER
==================================================

Create a professional university footer.

Include:

Privacy Policy
Terms of Use
Contact DICT

© 2026 Redeemer’s University
Directorate of Information and Communication Technology

Near the registration CTA, include:

“By continuing, you agree to our Terms of Use and Privacy Policy.”

==================================================
ADMIN DASHBOARD
==================================================

Create a separate admin dashboard frontend.

This is only a visual prototype using mock registration data.

The admin area should ONLY focus on tracking and managing registrations.

Do not create:
- Programme management
- Document management
- Reports section
- Settings section

SIDEBAR:

DICT Registration Portal

Overview
Registrations

Bottom:
Admin Profile
Logout

==================================================
ADMIN OVERVIEW
==================================================

Heading:
“Registration Overview”

Supporting text:
“Monitor submitted DICT registrations.”

Create four statistics cards:

Total Registrations
1,248

Pending
324

Approved
856

Rejected
68

Add a simple visual chart showing registration activity over time.

Below the chart:

“Recent Registrations”

Create a professional table with:

Registration ID
Name
Email
Department
Registration Type
Date
Status
Action

Use realistic mock data.

==================================================
REGISTRATIONS PAGE
==================================================

Create a dedicated registration management page.

Heading:
“Registrations”

Supporting text:
“View and manage submitted registrations.”

Add a search field:

“Search by name, email or registration ID...”

Add filters:
- Status
- Department
- Registration Type
- Date

Registration table:

ID
Name
Email
Department
Registration Type
Submitted
Status
Action

Use clear status badges:

Pending
Approved
Rejected

==================================================
REGISTRATION DETAILS
==================================================

When an administrator selects a registration, show a detailed registration view or slide-over panel.

Display:

Registration ID

PERSONAL INFORMATION
First Name
Last Name
Email
Phone Number

UNIVERSITY INFORMATION
Department
Faculty / Unit
Student/Staff ID

REGISTRATION INFORMATION
Registration Type
Programme
Submission Date
Additional Information

STATUS

Admin actions:

[ Approve ]
[ Reject ]
[ Request Correction ]

[ Download ]

These actions only need frontend visual states.

==================================================
RESPONSIVE DESIGN
==================================================

Make the entire design responsive.

DESKTOP:
Use the split-screen registration layout.

TABLET:
Adapt the proportions while maintaining a strong visual hierarchy.

MOBILE:
Stack the registration page vertically:

Logo
Registration form
Google option
Registration resources
Footer

The admin sidebar should become a mobile navigation.

==================================================
IMPORTANT
==================================================

This is a frontend design project.

Do NOT create:
- Database
- Backend
- API
- Real Google OAuth
- Supabase
- Server authentication
- Programme management
- Document management
- Reports management
- Settings management

Use mock data and frontend-only states.

Prioritize visual quality, UX, spacing, typography, responsive behavior and consistency.

The final result should look like a real, production-quality Redeemer’s University DICT registration portal even though it is only a frontend prototype.
```

This project was built with [Lovable](https://lovable.dev).

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/d6fc2b33-ede7-43b3-a8ca-933421bd1bd9).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```
