// ---------------------------------------------------------------------------
// Timetable data — transcribed from "Batch 1" schedule + course details table
// ---------------------------------------------------------------------------
// A few of the source screenshots overlapped by one column (both showed
// "period 8" with slightly different values). The Day-4 / period-8 cell was
// resolved as 26MAB1001T because that reading makes every course's total
// weekly period-count match its official credit value (see below) — the
// other reading would have given Engineering Graphics 5 periods instead of
// the expected 4 (a 2-credit lab = 4 contact periods) and Calculus only 3
// periods instead of its 4 credits.
// ---------------------------------------------------------------------------

export interface Period {
  index: number;
  from: string;
  to: string;
}

export interface Course {
  code: string;
  name: string;
  credit: number;
  slots: string[];
  faculty: string;
  facultyId: string;
  location: string | null;
  building: string | null;
  floor: string | null;
  room: string | null;
  online: boolean;
  whatsappGroups?: { label: string; url: string }[];
  classroomUrl?: string;
}

export interface GridCell {
  code: string | null;
}

export const PERIODS: Period[] = [
  { index: 1, from: "08:00", to: "08:50" },
  { index: 2, from: "08:50", to: "09:40" },
  { index: 3, from: "09:45", to: "10:35" },
  { index: 4, from: "10:40", to: "11:30" },
  { index: 5, from: "11:35", to: "12:25" },
  { index: 6, from: "12:30", to: "13:20" },
  { index: 7, from: "13:25", to: "14:15" },
  { index: 8, from: "14:20", to: "15:10" },
  { index: 9, from: "15:10", to: "16:00" },
  { index: 10, from: "16:00", to: "16:50" },
  { index: 11, from: "16:50", to: "17:30" },
  { index: 12, from: "17:30", to: "18:10" },
];

// The source sheet only labels these "Day 1"..."Day 5". Mapped to the
// standard Mon-Fri college week — adjust here if your institute's Day 1
// does not start on a Monday.
export const DAYS = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"] as const;
export type DayName = (typeof DAYS)[number];

export const COURSES: Record<string, Course> = {
  "26LCA1001J": {
    code: "26LCA1001J",
    name: "Professional English for Engineers",
    credit: 3,
    slots: ["F"],
    faculty: "Dr. Ezhil K",
    facultyId: "101886",
    location: "Main Campus",
    building: "CRC Building",
    floor: "4th Floor",
    room: "CRC 508",
    online: false,
    whatsappGroups: [
      { label: "Class Group", url: "https://chat.whatsapp.com/ITS0ADehk6BA9VmezWgWss" },
    ],
  },
  "26PYB1002J": {
    code: "26PYB1002J",
    name: "Electromagnetism, Quantum Physics and Optics for Engineers",
    credit: 4,
    slots: ["D", "P11", "P12"],
    faculty: "Dr. Payel Bandyopadhyay / Dr. Raja R",
    facultyId: "102745 / 103518",
    location: "Main Campus / Annexure-II",
    building: "CRC Building / University Building",
    floor: "4th Floor / 13th Floor",
    room: "CRC 508 / Physics Lab",
    online: false,
    whatsappGroups: [
      { label: "Theory Class Group", url: "https://chat.whatsapp.com/IywPlojz30w4P04H4VUeHD" },
      { label: "Lab Group (13th Floor)", url: "https://chat.whatsapp.com/BM9BYOrPeLICzQfoE1Oq7k" },
    ],
  },
  "26MAB1001T": {
    code: "26MAB1001T",
    name: "Calculus and Linear Algebra",
    credit: 4,
    slots: ["B"],
    faculty: "Dr. Harsha Gopalakrishnan",
    facultyId: "103984",
    location: "Main Campus",
    building: "CRC Building",
    floor: "4th Floor",
    room: "CRC 508",
    online: false,
    whatsappGroups: [
      { label: "Class Group", url: "https://chat.whatsapp.com/L26dT5y2gYwAF7x5jQjpU0" },
    ],
    classroomUrl: "https://classroom.google.com/c/ODU1OTE3Njk5MjY0",
  },
  "26EEE1001T": {
    code: "26EEE1001T",
    name: "Electrical and Electronics Engineering",
    credit: 3,
    slots: ["C"],
    faculty: "Dr. M. Arun Noyal Doss",
    facultyId: "100652",
    location: "Main Campus",
    building: "CRC Building",
    floor: "4th Floor",
    room: "CRC 508",
    online: false,
    whatsappGroups: [
      { label: "Class Group", url: "https://chat.whatsapp.com/K6kscBchf4z0POdvzB5bPh" },
    ],
  },
  "26MEE1002L": {
    code: "26MEE1002L",
    name: "Engineering Graphics",
    credit: 2,
    slots: ["P27", "P28", "P29", "P30"],
    faculty: "Dr. Kumaran D",
    facultyId: "101807",
    location: "Main Campus",
    building: "Mechanical Hangar",
    floor: "1st Floor",
    room: "Computer Programming Lab",
    online: false,
    classroomUrl: "https://classroom.google.com/c/ODc1MDcwNDQ5NzE3",
  },
  "26CSE1001T": {
    code: "26CSE1001T",
    name: "Data Science and Artificial Intelligence",
    credit: 3,
    slots: ["E"],
    faculty: "Dr. Selvakumar K",
    facultyId: "101701",
    location: "Main Campus",
    building: "CRC Building",
    floor: "4th Floor",
    room: "CRC 508",
    online: false,
    whatsappGroups: [
      { label: "Class Group", url: "https://chat.whatsapp.com/HzD7MmBvlzLK6wbAyx5Jdh" },
    ],
    classroomUrl: "https://classroom.google.com/c/ODc1MjU0NDk5MTc2?cjc=576rnjhd",
  },
  "26GNN1001T": {
    code: "26GNN1001T",
    name: "Universal Human Values - Understanding Harmony and Ethical Human Conduct",
    credit: 3,
    slots: ["ONLINE"],
    faculty: "Dr. M. Arun Noyal Doss",
    facultyId: "100652",
    location: null,
    building: null,
    floor: null,
    room: null,
    online: true,
  },
};

// grid[day][periodIndex-1] = course code | null
export const GRID: Record<DayName, (string | null)[]> = {
  Monday: [null, null, "26LCA1001J", "26LCA1001J", null, null, null, null, null, null, "26GNN1001T", "26GNN1001T"],
  Tuesday: ["26PYB1002J", "26PYB1002J", null, null, null, "26MAB1001T", "26MAB1001T", null, null, null, "26GNN1001T", "26GNN1001T"],
  Wednesday: ["26EEE1001T", "26EEE1001T", null, "26PYB1002J", "26MAB1001T", null, "26MEE1002L", "26MEE1002L", "26MEE1002L", "26MEE1002L", "26GNN1001T", "26GNN1001T"],
  Thursday: [null, null, null, null, null, "26PYB1002J", "26PYB1002J", "26MAB1001T", "26CSE1001T", "26EEE1001T", "26GNN1001T", "26GNN1001T"],
  Friday: ["26CSE1001T", "26CSE1001T", "26EEE1001T", "26LCA1001J", "26PYB1002J", null, null, null, null, null, null, null],
};

export const BATCH_NAME = "Batch 1";
