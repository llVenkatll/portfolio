import {
  FaDatabase,
  FaGithub,
  FaLinkedin,
  FaReact,
} from 'react-icons/fa'
import {
  SiPytorch,
} from 'react-icons/si'
import {
  TbBrain,
  TbDeviceAnalytics,
  TbEye,
  TbHeartbeat,
  TbScanEye,
  TbShieldCheck,
  TbStethoscope,
} from 'react-icons/tb'
import type { ReactNode } from 'react'

type LinkItem = {
  label: string
  href: string
}

type Project = {
  title: string
  context: string
  description: string
  tech: string[]
  icon: ReactNode
  emphasis: string
}

type Experience = {
  role: string
  organization: string
  period: string
  bullets: string[]
}

type Credential = {
  title: string
  organization: string
  period: string
  detail: string
}

type Leadership = {
  role: string
  organization: string
}

const links: LinkItem[] = [
  { label: 'Portfolio', href: 'https://venkatmn.vercel.app/##gallery' },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/vnktmn/' },
  { label: 'GitHub', href: 'https://github.com/llVenkatll' },
]

const focusAreas = [
  'Adversarial Machine Learning',
  'Differential Privacy',
  'Fairness Metrics',
  'Explainable AI',
  'Bias Detection & Mitigation',
  'Secure Model Training',
  'Safe Reinforcement Learning',
  'Adversarial Robustness',
  'AI Safety & Certification',
  'Medical Image Segmentation',
  'Biosignal Processing',
  'Transformer Architectures',
  'Large Language Models',
  'RAG',
  'Distributed Computing',
  'Few-Shot Learning',
]

const skillGroups = [
  {
    title: 'AI/ML',
    items: ['PyTorch', 'TensorFlow', 'Transformers', 'LangChain', 'MONAI', 'OpenAI API', 'RAG'],
    icon: <SiPytorch />,
  },
  {
    title: 'Development',
    items: ['React', 'Node.js', 'Flutter', 'Django', 'SwiftUI', 'Firebase', 'AWS'],
    icon: <FaReact />,
  },
  {
    title: 'Data Systems',
    items: ['Apache Spark', 'Kafka', 'SQL/NoSQL', 'MLflow', 'TensorBoard', 'W&B'],
    icon: <FaDatabase />,
  },
  {
    title: 'LLM Infrastructure',
    items: ['CUDA', 'vLLM', 'INT8 Quantization', 'KV-Cache Optimization'],
    icon: <TbDeviceAnalytics />,
  },
  {
    title: 'Medical Engineering',
    items: ['MATLAB', 'Medical Imaging', 'Signal Processing', 'LabVIEW', 'SIMULINK'],
    icon: <TbStethoscope />,
  },
]

const projects: Project[] = [
  {
    title: 'Long-Input Clinical Speech Inference Pipeline',
    context: 'CMU, Spring 2026',
    description:
      'Designed a clinical note generation system for SOAP notes from 30-minute doctor-patient audio using Whisper-based ASR and chunked LLM inference, targeting long-input and long-output bottlenecks in production healthcare AI.',
    tech: ['PyTorch', 'Mistral-7B', 'Whisper', 'INT8 Quantization', 'vLLM', 'ROUGE-L / BERTScore Evaluation'],
    icon: <TbDeviceAnalytics />,
    emphasis: 'LLM systems for clinical documentation',
  },
  {
    title: 'Adversarially Robust & Fair Postoperative Complication Prediction',
    context: 'CMU, Spring 2026',
    description:
      'Built a 4-pillar secure ML pipeline over a synthetic TKA dataset covering adversarial robustness, fairness, differential privacy, and API hardening.',
    tech: ['PyTorch', 'Scikit-learn', 'Opacus', 'Fairlearn', 'PGD/FGSM Adversarial Training', 'API Hardening'],
    icon: <TbShieldCheck />,
    emphasis: 'Secure and fair medical ML',
  },
  {
    title: 'Medical Image Segmentation with MONAI',
    context: 'CMU, Spring 2026',
    description:
      'Developed 3D medical image segmentation workflows using MONAI transforms, DataLoader, and model zoo components including U-Net and SegResNet for volumetric clinical imaging tasks.',
    tech: ['MONAI', 'PyTorch', '3D U-Net', 'SegResNet', 'Dice Loss', 'NIfTI/DICOM Processing'],
    icon: <TbScanEye />,
    emphasis: '3D clinical image segmentation',
  },
  {
    title: 'EEG-Based Schizophrenia Detection using AI',
    context: 'Conference Paper Published at ATSN-2024, Kuwait',
    description:
      'Pioneered an EEG analysis pipeline achieving 99% accuracy in early detection of schizophrenia through transformer-based attention networks for brain wave pattern analysis.',
    tech: ['PyTorch', 'Transformers', 'Attention Networks', 'Feature Extraction', 'Data Preprocessing'],
    icon: <TbBrain />,
    emphasis: 'Transformer-based biosignal intelligence',
  },
  {
    title: 'Multi-Modal VR Glaucoma Monitoring System',
    context: 'Home-based diagnostic platform',
    description:
      'Designed an at-home platform combining a VR headset with non-invasive sensors integrating thermal imaging, acoustic indicators, and field-of-vision data.',
    tech: ['Unity VR', 'Embedded Systems', 'Thermal Imaging', 'Data Processing', 'Acoustics'],
    icon: <TbScanEye />,
    emphasis: 'Biomedical sensing and home diagnostics',
  },
  {
    title: 'Gaze-Based Attention Monitoring System',
    context: 'Conference Presentation, Full-Stack ML Application',
    description:
      'Pioneered a webcam-based gaze tracking system using WebGazer.js for real-time monitoring of focus levels and attention patterns during cognitive tasks.',
    tech: ['WebGazer.js', 'Firebase', 'React', 'Machine Learning', 'Human-Computer Interface'],
    icon: <TbEye />,
    emphasis: 'Full-stack AI assessment system',
  },
  {
    title: 'AI-Powered COVID-19 Detection in Lung CT Scans',
    context: 'Medical Image Processing',
    description:
      'Created an advanced segmentation system for COVID-affected regions using adaptive thresholding, morphological operations, edge detection algorithms, and adaptive histogram equalization.',
    tech: ['MATLAB', 'Image Processing', 'Adaptive Histogram Equalization', 'Morphological Operations'],
    icon: <TbHeartbeat />,
    emphasis: 'Medical image segmentation',
  },
  {
    title: 'Thermal-Optical Life Detection System',
    context: 'Dual-Modality Biometric Surveillance on GCP',
    description:
      'Architected a sensor fusion system with deep CNNs leveraging thermal-optical imaging, integrated MLflow for model versioning and MongoDB for scalable diagnostics processing, and deployed it on Google Cloud Platform for real-time analysis.',
    tech: ['Deep Learning', 'Computer Vision', 'MLflow', 'MongoDB', 'Google Cloud Platform', 'PyTorch'],
    icon: <TbDeviceAnalytics />,
    emphasis: 'Sensor fusion and deployed computer vision',
  },
]

// The provided resumes do not include MRI reconstruction or physics-informed learning project details yet.
// Keep those areas out of the visible portfolio until resume-backed facts are available.

const publications = [
  {
    title: 'Leveraging AI for Early Detection and Monitoring of Schizophrenia',
    venue: 'International Conference & Forum on Assistive Technologies for Special Needs (ATSN-2024), Kuwait 2025',
  },
  {
    title: 'Gaze-Based Attention Monitoring and Assessment System',
    venue: 'Conference Presentation 2025',
  },
]

const experiences: Experience[] = [
  {
    role: 'Project Intern',
    organization: 'TU Delft University, Netherlands',
    period: 'Feb 2025 - Apr 2025',
    bullets: [
      'Researched an Upper Arm Prosthetic Simulator with 3D printing (FDM).',
      'Explored signal processing techniques to improve real-time responsiveness in prosthetic simulations.',
      'Collaborated with Dr. Gerwin Smit and Dr. J. van Frankenhuyzen on biomechanical validation testing.',
    ],
  },
  {
    role: 'Data Scientist',
    organization: 'Prediscan Medtech, HTIC, IIT Madras, India',
    period: 'Jul 2024 - Jan 2025',
    bullets: [
      'Developed ophthalmic biomarker identification systems and vessel segmentation tools achieving 98% accuracy.',
      'Led a clinical correlation study establishing relationships between imaging findings and disease outcomes.',
      'Reduced diagnostic time by 40% through novel biomarker screening validated across multiple parameters.',
    ],
  },
  {
    role: 'Biomedical Engineer',
    organization: 'Awali Hospital, Bahrain',
    period: 'Jan 2024',
    bullets: [
      'Performed calibration and quality assurance on medical equipment and managed histology operations.',
      'Resolved technical issues across ventilators, infusion pumps, and monitoring systems with a 95% first-time fix rate.',
      'Conducted quality control for radiological imaging equipment, reducing image artifacts by 40%.',
    ],
  },
]

const credentials: Credential[] = [
  {
    title: 'Master of Science in Artificial Engineering - Biomedical Engineering',
    organization: 'Carnegie Mellon University',
    period: 'August 2025 - May 2027',
    detail: 'CGPA: 3.92/4',
  },
  {
    title: 'Bachelors of Engineering in Biomedical Engineering',
    organization: 'Sri Sivasubramaniya Nadar College of Engineering',
    period: 'September 2021 - May 2025',
    detail: 'CGPA: 8.5/10',
  },
]

const leadership: Leadership[] = [
  { role: 'Financial Advisor, Joint Funding Commission', organization: 'Carnegie Mellon University' },
  { role: 'President, Indian Graduate Student Association (IGSA)', organization: 'Carnegie Mellon University' },
  { role: 'Treasurer, Graduate Biomedical Engineering Society (GBMES)', organization: 'Carnegie Mellon University' },
  { role: 'Chair, IEEE Signal Processing Society', organization: 'SSN College of Engineering' },
  { role: 'President, Math Club', organization: 'SSN College of Engineering' },
  { role: 'Joint Secretary, IEEE Engineering in Medicine and Biology Society', organization: 'SSN College of Engineering' },
]

const statCards = [
  { label: 'CMU MS CGPA', value: '3.92/4' },
  { label: 'SSN BE CGPA', value: '8.5/10' },
  { label: 'Published / Presented Research Works', value: '2' },
]

function App() {
  return (
    <div className="min-h-screen bg-[#08111f] text-slate-100">
      <header className="sticky top-0 z-50 border-b border-cyan-300/10 bg-[#08111f]/90 backdrop-blur-xl">
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
          <a href="#top" className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-200">
            Venkatesh
          </a>
          <div className="hidden items-center gap-6 text-sm text-slate-300 md:flex">
            <a className="hover:text-cyan-200" href="#projects">
              Projects
            </a>
            <a className="hover:text-cyan-200" href="#experience">
              Experience
            </a>
            <a className="hover:text-cyan-200" href="#publications">
              Publications
            </a>
            <a className="hover:text-cyan-200" href="#contact">
              Contact
            </a>
          </div>
          <div className="flex items-center gap-3">
            <a
              aria-label="GitHub"
              className="rounded-full border border-white/10 p-2 text-slate-300 transition hover:border-cyan-200/60 hover:text-cyan-200"
              href="https://github.com/llVenkatll"
              rel="noreferrer"
              target="_blank"
            >
              <FaGithub />
            </a>
            <a
              aria-label="LinkedIn"
              className="rounded-full border border-white/10 p-2 text-slate-300 transition hover:border-cyan-200/60 hover:text-cyan-200"
              href="https://www.linkedin.com/in/vnktmn/"
              rel="noreferrer"
              target="_blank"
            >
              <FaLinkedin />
            </a>
          </div>
        </nav>
      </header>

      <main id="top">
        <section className="mx-auto grid max-w-7xl gap-10 px-4 pb-16 pt-12 sm:px-6 sm:pt-20 lg:grid-cols-[1.1fr_0.9fr] lg:px-8 lg:pb-24">
          <div className="flex flex-col justify-center">
            <p className="mb-4 flex items-center gap-2 text-sm font-medium uppercase tracking-[0.24em] text-cyan-200">
              <TbShieldCheck className="text-xl" />
              AI safety, biomedical engineering, and intelligent health systems
            </p>
            <h1 className="max-w-4xl text-4xl font-bold leading-tight text-white sm:text-5xl lg:text-7xl">
              Venkatesh Meenakshinathan
            </h1>
            <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300 sm:text-xl">
              Biomedical engineering graduate student building AI systems across medical image segmentation, biosignal
              processing, transformer architectures, large language models, RAG, and secure model training.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                className="inline-flex items-center justify-center rounded-lg bg-cyan-200 px-5 py-3 text-sm font-semibold text-slate-950 transition hover:bg-white"
                href="#projects"
              >
                View research projects
              </a>
              <a
                className="inline-flex items-center justify-center rounded-lg border border-white/15 px-5 py-3 text-sm font-semibold text-slate-100 transition hover:border-cyan-200/60 hover:text-cyan-200"
                href="#experience"
              >
                View experience
              </a>
            </div>
          </div>

          <aside className="rounded-2xl border border-white/10 bg-white/[0.04] p-5 shadow-2xl shadow-cyan-950/30 sm:p-6">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-200">Resume Snapshot</p>
            <div className="mt-5 grid gap-3 sm:grid-cols-3 lg:grid-cols-1">
              {statCards.map((stat) => (
                <div key={stat.label} className="rounded-xl border border-white/10 bg-slate-950/60 p-4">
                  <p className="text-2xl font-bold text-white">{stat.value}</p>
                  <p className="mt-1 text-sm text-slate-400">{stat.label}</p>
                </div>
              ))}
            </div>
            <div className="mt-6 rounded-xl border border-cyan-200/20 bg-cyan-200/5 p-4">
              <p className="text-sm font-semibold text-cyan-100">Current academic path</p>
              <p className="mt-2 text-sm leading-6 text-slate-300">
                Master of Science in Artificial Engineering - Biomedical Engineering at Carnegie Mellon University.
              </p>
            </div>
          </aside>
        </section>

        <Section
          eyebrow="Focus"
          id="focus"
          title="AI and biomedical engineering focus areas"
          intro="The portfolio emphasizes the resume-backed areas with the strongest overlap across health AI, robust ML, LLM systems, and clinical engineering."
        >
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {focusAreas.map((area) => (
              <div key={area} className="rounded-xl border border-white/10 bg-white/[0.035] p-4 text-sm text-slate-200">
                {area}
              </div>
            ))}
          </div>
        </Section>

        <Section
          eyebrow="Skills"
          id="skills"
          title="Technical foundation"
          intro="Tools and systems listed directly in the resume, grouped for fast scanning by AI, product, data, and medical engineering work."
        >
          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {skillGroups.map((group) => (
              <article key={group.title} className="rounded-2xl border border-white/10 bg-white/[0.04] p-5">
                <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-cyan-200/10 text-2xl text-cyan-200">
                  {group.icon}
                </div>
                <h3 className="text-lg font-semibold text-white">{group.title}</h3>
                <div className="mt-4 flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <span key={item} className="rounded-full bg-slate-900 px-3 py-1 text-xs text-slate-300">
                      {item}
                    </span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </Section>

        <Section
          eyebrow="Projects"
          id="projects"
          title="Selected research and AI systems"
          intro="Resume-backed projects across biosignal analysis, medical imaging, multimodal sensing, and deployed ML infrastructure."
        >
          <div className="grid gap-5 lg:grid-cols-2">
            {projects.map((project) => (
              <article
                key={project.title}
                className="flex h-full flex-col rounded-2xl border border-white/10 bg-white/[0.04] p-5 transition hover:border-cyan-200/40"
              >
                <div className="mb-5 flex items-start justify-between gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-cyan-200/10 text-3xl text-cyan-200">
                    {project.icon}
                  </div>
                  <span className="rounded-full border border-cyan-200/20 px-3 py-1 text-right text-xs font-medium text-cyan-100">
                    {project.emphasis}
                  </span>
                </div>
                <p className="text-sm font-medium uppercase tracking-[0.16em] text-cyan-200">{project.context}</p>
                <h3 className="mt-3 text-xl font-bold text-white">{project.title}</h3>
                <p className="mt-3 flex-1 leading-7 text-slate-300">{project.description}</p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {project.tech.map((item) => (
                    <span key={item} className="rounded-full bg-slate-950 px-3 py-1 text-xs text-slate-300">
                      {item}
                    </span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </Section>

        <Section
          eyebrow="Publications"
          id="publications"
          title="Research publications and presentations"
          intro="Publication and presentation entries are included exactly where the resume provides a title and venue."
        >
          <div className="grid gap-4 md:grid-cols-2">
            {publications.map((publication) => (
              <article key={publication.title} className="rounded-2xl border border-white/10 bg-white/[0.04] p-5">
                <h3 className="text-xl font-bold text-white">{publication.title}</h3>
                <p className="mt-3 leading-7 text-slate-300">{publication.venue}</p>
              </article>
            ))}
          </div>
        </Section>

        <Section
          eyebrow="Experience"
          id="experience"
          title="Biomedical and AI experience"
          intro="Professional roles from clinical engineering, medical imaging analytics, and prosthetics research."
        >
          <div className="space-y-5">
            {experiences.map((experience) => (
              <article key={`${experience.role}-${experience.organization}`} className="rounded-2xl border border-white/10 bg-white/[0.04] p-5">
                <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
                  <div>
                    <h3 className="text-xl font-bold text-white">{experience.role}</h3>
                    <p className="mt-1 text-cyan-100">{experience.organization}</p>
                  </div>
                  <p className="text-sm font-medium text-slate-400">{experience.period}</p>
                </div>
                <ul className="mt-5 space-y-3 text-slate-300">
                  {experience.bullets.map((bullet) => (
                    <li key={bullet} className="flex gap-3 leading-7">
                      <span className="mt-3 h-1.5 w-1.5 shrink-0 rounded-full bg-cyan-200" />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </Section>

        <Section eyebrow="Education" id="education" title="Education" intro="Academic credentials listed in the resume.">
          <div className="grid gap-5 md:grid-cols-2">
            {credentials.map((credential) => (
              <article key={credential.title} className="rounded-2xl border border-white/10 bg-white/[0.04] p-5">
                <p className="text-sm font-medium text-cyan-200">{credential.period}</p>
                <h3 className="mt-3 text-xl font-bold text-white">{credential.title}</h3>
                <p className="mt-3 text-slate-300">{credential.organization}</p>
                <p className="mt-2 text-sm text-slate-400">{credential.detail}</p>
              </article>
            ))}
          </div>
        </Section>

        <Section
          eyebrow="Leadership"
          id="leadership"
          title="Leadership and responsibilities"
          intro="Campus and society responsibilities included from the resume without adding dates or unlisted outcomes."
        >
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {leadership.map((item) => (
              <article key={item.role} className="rounded-xl border border-white/10 bg-white/[0.035] p-4">
                <h3 className="font-semibold text-white">{item.role}</h3>
                <p className="mt-2 text-sm text-slate-400">{item.organization}</p>
              </article>
            ))}
          </div>
        </Section>
      </main>

      <footer id="contact" className="border-t border-white/10 px-4 py-10 sm:px-6 lg:px-8">
        <div className="mx-auto flex max-w-7xl flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="text-lg font-bold text-white">Venkatesh Meenakshinathan</p>
            <p className="mt-2 text-sm text-slate-400">Biomedical engineering, AI systems, and healthcare technology.</p>
          </div>
          <div className="flex flex-wrap gap-3">
            {links.map((link) => (
              <a
                key={link.label}
                className="rounded-lg border border-white/10 px-4 py-2 text-sm font-medium text-slate-300 transition hover:border-cyan-200/60 hover:text-cyan-200"
                href={link.href}
                rel="noreferrer"
                target="_blank"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </footer>
    </div>
  )
}

type SectionProps = {
  children: ReactNode
  eyebrow: string
  id: string
  intro: string
  title: string
}

function Section({ children, eyebrow, id, intro, title }: SectionProps) {
  return (
    <section id={id} className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
      <div className="mb-8 max-w-3xl">
        <p className="text-sm font-semibold uppercase tracking-[0.22em] text-cyan-200">{eyebrow}</p>
        <h2 className="mt-3 text-3xl font-bold text-white sm:text-4xl">{title}</h2>
        <p className="mt-4 leading-7 text-slate-300">{intro}</p>
      </div>
      {children}
    </section>
  )
}

export default App
