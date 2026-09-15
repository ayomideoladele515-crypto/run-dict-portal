export type RegistrationStatus = "Pending" | "Approved" | "Rejected";

export type Registration = {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  department: string;
  faculty: string;
  identifier: string;
  type: string;
  programme: string;
  submitted: string;
  submittedLabel: string;
  status: RegistrationStatus;
  notes: string;
};

export const DEPARTMENTS = [
  "Computer Science",
  "Information Technology",
  "Mass Communication",
  "Accounting",
  "Biochemistry",
  "Economics",
  "Nursing Science",
  "Political Science",
];

export const FACULTIES = [
  "College of Natural Sciences",
  "College of Management Sciences",
  "College of Humanities",
  "College of Basic Medical Sciences",
  "DICT — Directorate Unit",
  "Registry / Administration",
];

export const CATEGORIES = ["Undergraduate", "Postgraduate", "Staff", "Alumni", "External Participant"];

export const PROGRAMMES = [
  "Digital Literacy Certification",
  "Cybersecurity Essentials",
  "Data Analytics Bootcamp",
  "Network Administration",
  "Software Engineering Track",
  "Cloud Fundamentals",
];

export const REGISTRATIONS: Registration[] = [
  {
    id: "DICT-2026-00124",
    firstName: "Adebayo",
    lastName: "Olamide",
    email: "adebayo.olamide@run.edu.ng",
    phone: "+234 803 415 8820",
    department: "Computer Science",
    faculty: "College of Natural Sciences",
    identifier: "RUN/CSC/21/1042",
    type: "Undergraduate",
    programme: "Cybersecurity Essentials",
    submitted: "2026-09-15",
    submittedLabel: "15 September 2026",
    status: "Approved",
    notes: "Requesting the evening cohort due to lecture timetable clash.",
  },
  {
    id: "DICT-2026-00123",
    firstName: "Chiamaka",
    lastName: "Okonkwo",
    email: "chiamaka.okonkwo@run.edu.ng",
    phone: "+234 706 229 1183",
    department: "Information Technology",
    faculty: "College of Natural Sciences",
    identifier: "RUN/ITC/22/0318",
    type: "Undergraduate",
    programme: "Data Analytics Bootcamp",
    submitted: "2026-09-15",
    submittedLabel: "15 September 2026",
    status: "Pending",
    notes: "Has prior experience with Excel and Power BI.",
  },
  {
    id: "DICT-2026-00122",
    firstName: "Tunde",
    lastName: "Adeyemi",
    email: "tunde.adeyemi@run.edu.ng",
    phone: "+234 811 660 4477",
    department: "Accounting",
    faculty: "College of Management Sciences",
    identifier: "RUN/STF/0912",
    type: "Staff",
    programme: "Digital Literacy Certification",
    submitted: "2026-09-14",
    submittedLabel: "14 September 2026",
    status: "Approved",
    notes: "Departmental sponsorship approved by the Bursary.",
  },
  {
    id: "DICT-2026-00121",
    firstName: "Aisha",
    lastName: "Yusuf",
    email: "aisha.yusuf@run.edu.ng",
    phone: "+234 809 337 5510",
    department: "Mass Communication",
    faculty: "College of Humanities",
    identifier: "RUN/MAC/23/0771",
    type: "Undergraduate",
    programme: "Software Engineering Track",
    submitted: "2026-09-14",
    submittedLabel: "14 September 2026",
    status: "Pending",
    notes: "Interested in the weekend track.",
  },
  {
    id: "DICT-2026-00120",
    firstName: "Emmanuel",
    lastName: "Chukwu",
    email: "emmanuel.chukwu@run.edu.ng",
    phone: "+234 703 812 9046",
    department: "Economics",
    faculty: "College of Management Sciences",
    identifier: "RUN/ECO/20/0155",
    type: "Alumni",
    programme: "Cloud Fundamentals",
    submitted: "2026-09-13",
    submittedLabel: "13 September 2026",
    status: "Rejected",
    notes: "Alumni verification document not attached.",
  },
  {
    id: "DICT-2026-00119",
    firstName: "Grace",
    lastName: "Ibrahim",
    email: "grace.ibrahim@run.edu.ng",
    phone: "+234 802 550 1276",
    department: "Nursing Science",
    faculty: "College of Basic Medical Sciences",
    identifier: "RUN/NSC/22/0489",
    type: "Undergraduate",
    programme: "Digital Literacy Certification",
    submitted: "2026-09-13",
    submittedLabel: "13 September 2026",
    status: "Approved",
    notes: "Clinical rotation runs Tuesdays and Thursdays.",
  },
  {
    id: "DICT-2026-00118",
    firstName: "Samuel",
    lastName: "Ogunleye",
    email: "samuel.ogunleye@run.edu.ng",
    phone: "+234 813 442 7719",
    department: "Computer Science",
    faculty: "DICT — Directorate Unit",
    identifier: "RUN/STF/0640",
    type: "Staff",
    programme: "Network Administration",
    submitted: "2026-09-12",
    submittedLabel: "12 September 2026",
    status: "Pending",
    notes: "Nominated by the Directorate for infrastructure upskilling.",
  },
  {
    id: "DICT-2026-00117",
    firstName: "Halima",
    lastName: "Bello",
    email: "halima.bello@run.edu.ng",
    phone: "+234 705 118 3390",
    department: "Political Science",
    faculty: "College of Humanities",
    identifier: "RUN/POL/21/0902",
    type: "Postgraduate",
    programme: "Data Analytics Bootcamp",
    submitted: "2026-09-12",
    submittedLabel: "12 September 2026",
    status: "Approved",
    notes: "Research work requires statistical tooling.",
  },
  {
    id: "DICT-2026-00116",
    firstName: "Daniel",
    lastName: "Eze",
    email: "daniel.eze@run.edu.ng",
    phone: "+234 806 771 2205",
    department: "Biochemistry",
    faculty: "College of Natural Sciences",
    identifier: "RUN/BCH/23/0117",
    type: "Undergraduate",
    programme: "Cloud Fundamentals",
    submitted: "2026-09-11",
    submittedLabel: "11 September 2026",
    status: "Rejected",
    notes: "Duplicate submission — see DICT-2026-00104.",
  },
  {
    id: "DICT-2026-00115",
    firstName: "Blessing",
    lastName: "Aluko",
    email: "blessing.aluko@run.edu.ng",
    phone: "+234 814 903 6612",
    department: "Information Technology",
    faculty: "Registry / Administration",
    identifier: "RUN/EXT/0032",
    type: "External Participant",
    programme: "Cybersecurity Essentials",
    submitted: "2026-09-11",
    submittedLabel: "11 September 2026",
    status: "Pending",
    notes: "External participant — payment reference supplied.",
  },
];

export const STATS = [
  { label: "Total Registrations", value: "1,248", delta: "+124 this week", tone: "brand" as const },
  { label: "Pending", value: "324", delta: "Awaiting review", tone: "warning" as const },
  { label: "Approved", value: "856", delta: "68.6% of total", tone: "success" as const },
  { label: "Rejected", value: "68", delta: "5.4% of total", tone: "danger" as const },
];

export const ACTIVITY = [
  { month: "Mar", registrations: 82 },
  { month: "Apr", registrations: 118 },
  { month: "May", registrations: 96 },
  { month: "Jun", registrations: 148 },
  { month: "Jul", registrations: 176 },
  { month: "Aug", registrations: 214 },
  { month: "Sep", registrations: 268 },
];
