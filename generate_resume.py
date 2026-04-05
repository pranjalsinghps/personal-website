#!/usr/bin/env python3
"""Generate a 1-page resume PDF matching the existing LaTeX-style format."""

from fpdf import FPDF

PORTFOLIO_URL = "https://pranjalsingh.com"


class ResumePDF(FPDF):
    def __init__(self):
        super().__init__(format="letter")
        self.set_auto_page_break(auto=False)

    def section_header(self, title):
        self.set_font("Times", "B", 11)
        self.cell(0, 5.5, title, new_x="LMARGIN", new_y="NEXT")
        y = self.get_y()
        self.line(self.l_margin, y, self.w - self.r_margin, y)
        self.set_y(y + 2)

    def experience_title(self, role, period):
        self.set_font("Times", "B", 10)
        role_w = self.get_string_width(role)
        self.cell(role_w, 5, role)
        self.set_font("Times", "", 10)
        self.cell(0, 5, period, align="R", new_x="LMARGIN", new_y="NEXT")

    def experience_company(self, company, location):
        self.set_font("Times", "I", 10)
        cw = self.get_string_width(company)
        self.cell(cw, 5, company)
        self.set_font("Times", "", 10)
        self.cell(0, 5, location, align="R", new_x="LMARGIN", new_y="NEXT")

    def bullet(self, text, indent=5):
        x0 = self.l_margin + indent
        self.set_font("Zapfdingbats", "", 4.5)
        self.set_x(x0)
        self.cell(4, 4.5, "l")
        self.set_font("Times", "", 9.5)
        usable = self.w - self.r_margin - x0 - 4
        self.multi_cell(usable, 4.5, text)

    def star_bullet(self, text, indent=5):
        x0 = self.l_margin + indent
        self.set_font("Times", "", 9.5)
        self.set_x(x0)
        self.cell(4, 4.5, "* ")
        usable = self.w - self.r_margin - x0 - 4
        self.multi_cell(usable, 4.5, text)

    def dash_item(self, label, text, indent=0):
        x0 = self.l_margin + indent
        self.set_x(x0)
        self.set_font("Times", "B", 9.5)
        lw = self.get_string_width(label)
        self.cell(lw, 4.5, label)
        self.set_font("Times", "", 9.5)
        usable = self.w - self.r_margin - self.get_x()
        self.multi_cell(usable, 4.5, text)


def build():
    pdf = ResumePDF()
    pdf.add_page()
    margin = 12.7  # 0.5 inch
    pdf.set_margins(margin, margin, margin)
    pdf.set_y(margin)

    # ── Name (clickable link to portfolio, underlined) ──
    pdf.set_font("Times", "BU", 20)
    name = "Pranjal Singh"
    name_w = pdf.get_string_width(name)
    name_x = (pdf.w - name_w) / 2
    pdf.set_x(name_x)
    pdf.set_text_color(0, 0, 0)
    pdf.cell(name_w, 9, name, link=PORTFOLIO_URL)
    pdf.set_xy(margin, pdf.get_y() + 9)
    pdf.set_font("Times", "", 10)
    pdf.ln(1.5)

    # ── Contact (LinkedIn as short clickable text) ──
    pdf.set_font("Times", "", 9)
    LINKEDIN_URL = "https://www.linkedin.com/in/pranjal-singh-3008a6239"
    parts_before = "+91-8887526050 | pranjalsingh2410@gmail.com | "
    link_text = "LinkedIn"
    parts_after = " | Bengaluru, India"
    full_w = (
        pdf.get_string_width(parts_before)
        + pdf.get_string_width(link_text)
        + pdf.get_string_width(parts_after)
    )
    start_x = (pdf.w - full_w) / 2
    pdf.set_x(start_x)
    pdf.cell(pdf.get_string_width(parts_before), 4.5, parts_before)
    pdf.set_font("Times", "U", 9)
    pdf.set_text_color(0, 0, 139)
    pdf.cell(pdf.get_string_width(link_text), 4.5, link_text, link=LINKEDIN_URL)
    pdf.set_text_color(0, 0, 0)
    pdf.set_font("Times", "", 9)
    pdf.cell(0, 4.5, parts_after, new_x="LMARGIN", new_y="NEXT")
    pdf.ln(4)

    # ── Professional Summary ──
    pdf.section_header("Professional Summary")
    pdf.set_font("Times", "", 9.5)
    summary = (
        "Quality Assurance, Customer Success, and Product Operations "
        "professional with experience at a fast-moving startup that "
        "scaled from 0 to $2M ARR. I've worked on testing features, "
        "identifying bugs early, and supporting smooth product releases, "
        "while also handling customer issues and setting up support "
        "processes as the product grew. Along the way, I collaborated "
        "with engineering and product teams to understand user behaviour, "
        "catch edge cases, and improve overall workflows. I enjoy working "
        "in fast-paced environments where I can take ownership and solve "
        "real problems."
    )
    pdf.multi_cell(0, 4.5, summary)
    pdf.ln(4)

    # ── Experience ──
    pdf.section_header("Experience")

    # --- Commenda ---
    pdf.experience_title(
        "Quality Assurance Engineer (Product & Operations)",
        "Aug 2024 - Present",
    )
    pdf.experience_company("Commenda", "Bengaluru, KA")
    for b in [
        "Owned end-to-end quality in an ambiguous startup environment, "
        "independently identifying gaps, defining test strategies, and "
        "coordinating across engineering, design, and product teams to "
        "ship stable releases.",
        "Performed end-to-end product testing using AI-assisted tools "
        "(Cursor, Claude Code, Stably.ai, Polarity, Narrative AI) and built "
        "GitHub CI/CD pipelines for automated regression testing on every "
        "pull request.",
        "Reduced customer First Response Time from 5 hours to under 5 "
        "minutes by implementing an automated response system, significantly "
        "improving operational efficiency and customer satisfaction.",
        "Developed an SLA monitoring dashboard and partnered with operations "
        "to optimize customer support workflows, enabling data-driven "
        "decision-making and improved service standards compliance.",
    ]:
        pdf.bullet(b)
    pdf.ln(3)

    # --- Cedcoss ---
    pdf.experience_title("Business Analyst", "Jan 2023 - Aug 2024")
    pdf.experience_company("Cedcoss Technologies", "Lucknow, UP")
    for b in [
        "Analysed user behaviour and client interactions using Hotjar and "
        "Microsoft Clarity to improve product performance and customer "
        "satisfaction.",
        "Collaborated with cross-functional teams (developers, marketing, "
        "operations) to improve features, streamline processes, and align "
        "solutions with client requirements.",
        "Managed US-based client interactions and maintained product "
        "documentation using CRM systems (Zoho, Freshsales, Freshdesk) "
        "for data-driven decision-making.",
    ]:
        pdf.bullet(b)
    pdf.ln(3)

    # --- Monotype ---
    pdf.experience_title("Quality Assurance - Trainee", "Jun 2022 - Dec 2022")
    pdf.experience_company("Monotype", "Noida, UP")
    for b in [
        "Led end-to-end user flow testing for production-ready QA, "
        "including detailed manual testing and code inspections to "
        "detect flaws and assure product reliability.",
        "Oversaw agile/scrum teams and used Loom to document findings "
        "and test cases for clear cross-team communication.",
    ]:
        pdf.bullet(b)
    pdf.ln(4)

    # ── Education ──
    pdf.section_header("Education")
    pdf.set_font("Times", "B", 10)
    inst = "PSIT College Of Higher Education"
    iw = pdf.get_string_width(inst)
    pdf.cell(iw, 5, inst)
    pdf.set_font("Times", "", 10)
    pdf.cell(0, 5, "Kanpur, UP", align="R", new_x="LMARGIN", new_y="NEXT")

    pdf.set_font("Times", "I", 10)
    deg = "Bachelor of Computer Applications (BCA)"
    dw = pdf.get_string_width(deg)
    pdf.cell(dw, 5, deg)
    pdf.set_font("Times", "", 10)
    pdf.cell(0, 5, "Aug 2019 - Aug 2022", align="R", new_x="LMARGIN", new_y="NEXT")

    pdf.bullet(
        "Developed strong analytical and strategic thinking skills through "
        "coursework in IT, system analysis, and business operations/management."
    )
    pdf.ln(4)

    # ── Projects ──
    pdf.section_header("Projects")
    pdf.set_font("Times", "B", 10)
    proj_title = "Manojo - Content Aggregation Platform"
    pw = pdf.get_string_width(proj_title)
    pdf.cell(pw, 5, proj_title)
    pdf.set_font("Times", "", 10)
    pdf.cell(0, 5, "2022", align="R", new_x="LMARGIN", new_y="NEXT")
    pdf.star_bullet(
        "Designed the complete UI in Figma for a YouTube content aggregation "
        "app. Mapped out information architecture and user flows, conducted "
        "market research, and delivered a user-friendly, marketable solution."
    )
    pdf.ln(4)

    # ── Skills ──
    pdf.section_header("Skills")
    pdf.dash_item(
        "Key Skills: ",
        "Quality Assurance, Manual/Acceptance Testing, Regression Testing, "
        "Functional Testing, SDLC, Agile Methodologies, UI/UX Testing, "
        "SaaS Product Operations, Process Optimization, Stakeholder "
        "Communication, AI-Assisted Testing, Test Automation.",
    )
    pdf.ln(1)
    pdf.dash_item(
        "Tools: ",
        "Cursor, Claude Code, GitHub Actions, JIRA, Linear, ClickUp, Loom, "
        "Zendesk, Pylon, Freshdesk, Zoho CRM, Hotjar, Microsoft Clarity, "
        "Figma, Notion, MS Excel, Canva, Playwright, Stably.ai, Polarity, "
        "Narrative AI.",
    )

    out_path = "Pranjal_Singh_Resume.pdf"
    public_path = "public/resume.pdf"
    pdf.output(out_path)
    pdf.output(public_path)
    print(f"Resume generated: {out_path} + {public_path}  (pages: {pdf.pages_count})")


if __name__ == "__main__":
    build()
