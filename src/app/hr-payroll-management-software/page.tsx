import React from 'react';
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import HrmsClientPage from "./HrmsClientPage";

export const metadata = {
  title: "HR & Payroll Software with Attendance Management",
  description: "Manage employees, attendance, leave, shifts, payroll, overtime, PF, ESI, and digital payslips with powerful HR and payroll software. Book a free demo today!",
};

export default function HrmsPage() {
    return (
        <main className="min-h-screen bg-white">
            <Header />
            <HrmsClientPage />
            <Footer />
        </main>
    );
}
