export type Project = {
  title: string;
  type: string;
  description: string;
  stack: string[];
  href?: string;
};

export type Experience = {
  role: string;
  org: string;
  time: string;
  description: string;
};

export type LinkItem = {
  label: string;
  value: string;
  href: string;
};

export const projects: Project[] = [
  {
    title: "YOLO-Based Human Detection",
    type: "Mobile Robotics",
    description:
      "Real-time human detection integrated into a Qt-based robot application via ROS2, optimized and deployed on NVIDIA Jetson hardware.",
    stack: ["YOLO", "ROS2", "Qt", "CUDA"],
  },
  {
    title: "RHEx Robot Simulation (MuJoCo)",
    type: "Simulation",
    description:
      "Built a physics-based simulation of the RHEx robot to support locomotion and control experimentation.",
    stack: ["MuJoCo", "Robot Dynamics"],
  },
  {
    title: "SIYI Ground Station Console Integration",
    type: "Industry",
    description:
      "Extended an existing application to support operation via SIYI handheld ground-station hardware by mapping physical console controls to software actions and implementing UDP communication using the device SDK protocols.",
    stack: ["UDP Networking", "Hardware-Software Integration", "SDK Protocols"],
  },
  {
    title: "Autonomous Coverage Planning",
    type: "Mobile Robotics",
    description:
      "Implemented autonomous area coverage for a mobile robot using ROS2 navigation and field-based planning techniques.",
    stack: ["ROS2", "Nav2", "Coverage Planning"],
  },
  {
    title: "Chrono Rigid & Granular Simulation",
    type: "Simulation",
    description: "Containerized and deployed rigid-body and DEM simulations using Project Chrono.",
    stack: ["Chrono", "DEM"],
  },
  {
    title: "iG-LIO: LiDAR-Inertial Odometry",
    type: "Research",
    description:
      "Configured and modified a LiDAR-Inertial Odometry pipeline, conducted accuracy evaluations, and fused odometry with GPS.",
    stack: ["LiDAR-Inertial Odometry", "Sensor Fusion", "ROS2"],
    href: "https://github.com/leenslf/ig_lio_ros2_workspace",
  },
  {
    title: "3D Object Detection with LiDAR (WIP)",
    type: "Research",
    description:
      "Exploring LiDAR-based 3D object detection pipelines using state-of-the-art research frameworks.",
    stack: ["LiDAR", "3D Object Detection"],
  },
  {
    title: "Capstone: Visual-Inertial Odometry on Duckiebot",
    type: "Capstone",
    description:
      "Implemented monocular visual-inertial odometry with calibrated camera-IMU sensors on a mobile robot platform.",
    stack: ["Visual-Inertial Odometry", "Sensor Calibration"],
    href: "https://github.com/leenslf/Duckie2.0",
  },
];

export const experiences: Experience[] = [
  {
    role: "Software Engineer",
    org: "Teknolus",
    time: "Nov 2024 - Now",
    description: "",
  },
  {
    role: "Software Team Member",
    org: "Space Troopers - Hacettepe IEEE",
    time: "Oct 2024 - Mar 2025",
    description: "",
  },
];

export const skills: string[] = [
  "TypeScript",
  "Next.js",
  "React",
  "Tailwind",
  "Three.js",
  "D3.js",
  "Figma",
  "Framer",
  "Python",
  "UX Research",
];

export const links: LinkItem[] = [
  { label: "💌", value: "leensaid24@gmail.com", href: "mailto:leensaid24@gmail.com" },
  { label: "🤖", value: "github.com/leenslf", href: "https://github.com/leenslf" },
  {
    label: "💼",
    value: "linkedin.com/in/leen-said-51a8271b1/",
    href: "https://www.linkedin.com/in/leen-said-51a8271b1/",
  },
];
