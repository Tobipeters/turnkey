import { IService, IGoal } from "./model";
import CyberSecurityImg from "../assets/cybersecurity-img.png";
import ITServiceImg from "../assets/IT-service-img.png";
import CloudServiceImg from "../assets/cloud-service.png";
import HardwareServiceImg from "../assets/hardware-service.png";
import RealTimeImg from "../assets/web-security.png";
import FirewallImg from "../assets/firewall.png";
import SupportImg from "../assets/support.png";  

export const services: IService[] = [
  {
    title: "Cybersecurity as a service",
    details:
      "We ensure everything is constantly updated in the background, leaving you with the peace of mind that your business is protected and your data is safe.",
    link: "/cybersecurity-as-a-service",
    photo: CyberSecurityImg,
    sub_services: [
      {
        name: "IT Governance and Risk Management",
        link: "IT_governance",
      },
      {
        name: "Managed Security Solution",
        link: "security_solution",
      },
      {
        name: "Phishing and Malware Protection",
        link: "malware_protection",
      },
      {
        name: "Vulnerability and Penetration Testing",
        link: "penetration_testing",
      },
      {
        name: "Cybersecurity Awareness Training",
        link: "awareness_training",
      },
    ],
  },
  {
    title: "Manage IT Services",
    details:
      "Turnkey Kinetic provides Managed IT Service which integrates the monitoring of all critical resources across the network.",
    link: "/IT-service",
    photo: ITServiceImg,
    sub_services: [
      {
        name: "IT Advisory and Consulting",
        link: "IT_advisory",
      },
      {
        name: "Proactive Technical Support",
        link: "technical_support",
      },
      {
        name: "Network Design and Management",
        link: "network_design",
      },
      {
        name: "IT Staff Augmentation",
        link: "staff_augmentation",
      },
      {
        name: "IT Project Management",
        link: "project_management",
      },
    ],
  },
  {
    title: "Turnkey Cloud Service",
    details:
      "Turnkey Kinetics  has been providing Cloud Services to our clients for several years and has the experience and training to do it right.",
    link: "/cloud-service",
    photo: CloudServiceImg,
    sub_services: [
      {
        name: "Managed Cloud Services",
        link: "cloud_service",
      },
      {
        name: "Microsoft 365 and Azure Integration",
        link: "microsoft_365_and_azure_integration",
      },
      {
        name: "AWS Migrations and Vmware Solutions",
        link: "aws_migration_and_wmware_solution",
      },
      {
        name: "Turnkey Cloud Voice Services - Productivity Everywhere",
        link: "voice_service",
      },
      {
        name: "Pay for What you Use",
        link: "pay_for_what_you_use",
      },
    ],
  },
  {
    title: "Hardware and E-waste Management",
    details:
      "From procurement to eco-friendly disposal, we handle all aspects of your hardware and e-waste. Our solutions prioritize sustainability, compliance, and resource efficiency.",
    link: "/hardware-management",
    photo: HardwareServiceImg,
    sub_services: [
      {
        name: "Desktop, Laptops, MacOS, Phones - Repairs",
        link: "repairs",
      },
      {
        name: "Hardware Recycling and Disposal",
        link: "hardware_recycling",
      },
      {
        name: "Data Security and Recovery",
        link: "data_security_and_recovery",
      },
      {
        name: "Data Destruction",
        link: "data_destruction",
      },
    ],
  },
];

export const goals: IGoal[] = [
  {
    title: "Real-Time Threat Protection",
    details:
      "Our real-time threat detection ensures immediate response to potential threats, providing peace of mind in an ever-evolving cybersecurity landscape",
    icon: RealTimeImg,
  },
  {
    title: "Firewall and Protection",
    details:
      "With customizable rules, real-time threat detection, and secure remote access, we shield your network from cyberattacks, allowing you to focus on what matters most, your business.",
    icon: FirewallImg,
  },
  {
    title: "24/7 Support",
    details:
      "Highlighting your around-the-clock support, emphasizing that clients can reach out for assistance at any time, ensuring minimal downtime",
    icon: SupportImg,
  },
];
