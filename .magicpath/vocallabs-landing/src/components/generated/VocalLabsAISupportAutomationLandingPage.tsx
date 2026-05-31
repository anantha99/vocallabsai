import { type FormEvent, useMemo, useState } from 'react';

const purple = '#6f2cff';

const proofChips = [
  'Multilingual calls',
  'Human handoff',
  'CRM/tool actions',
  'Call analytics',
  'Built for Indian workflows',
];

const outcomes = [
  {
    title: 'Reduce repetitive manual calls',
    body: 'Automate common support, confirmation, follow-up, and scheduling calls without increasing headcount.',
    metric: '30-60%',
    label: 'eligible call volume',
  },
  {
    title: 'Resolve, escalate, or complete an action',
    body: 'Agents should not just talk. They should confirm, update, schedule, route, collect, or escalate with context.',
    metric: '4 paths',
    label: 'resolve, update, book, handoff',
  },
  {
    title: 'Prove ROI in pilots',
    body: 'Track resolution rate, escalation quality, AHT saved, and estimated cost saved from the first pilot.',
    metric: 'Day 1',
    label: 'pilot scorecard',
  },
];

const demos = [
  {
    title: 'COD Confirmation Agent',
    placeholder: '[DEMO_VIDEO_COD_CONFIRMATION]',
    outcome: 'Confirms or cancels an order and updates the workflow.',
    scenario: 'Hinglish COD confirmation with delivery-date question and address correction.',
    action: 'Order confirmed, address updated, WhatsApp confirmation queued.',
    dimensions: 'Resolution, tool completion, Hinglish, turn-taking',
  },
  {
    title: 'Delivery Reschedule Agent',
    placeholder: '[DEMO_VIDEO_DELIVERY_RESCHEDULE]',
    outcome: 'Captures a new delivery slot and reduces failed delivery attempts.',
    scenario: 'Customer missed a delivery attempt and wants a new slot.',
    action: 'Delivery slot updated and logistics team notified.',
    dimensions: 'Time awareness, multi-intent, customer confirmation',
  },
  {
    title: 'Lead Qualification Agent',
    placeholder: '[DEMO_VIDEO_LEAD_QUALIFICATION]',
    outcome: 'Qualifies intent, captures budget, and books the right follow-up.',
    scenario: 'Inbound lead needs a quick callback and product fit check.',
    action: 'Lead scored, CRM updated, sales callback scheduled.',
    dimensions: 'Intent capture, sales qualification, CRM update',
  },
  {
    title: 'Appointment Booking Agent',
    placeholder: '[DEMO_VIDEO_APPOINTMENT_BOOKING]',
    outcome: 'Books, reschedules, or reminds customers about appointments.',
    scenario: 'Customer changes appointment timing and asks for reminder.',
    action: 'Calendar booked and reminder sent.',
    dimensions: 'Resolution, time awareness, tool completion',
  },
  {
    title: 'Angry Customer Recovery',
    placeholder: '[DEMO_VIDEO_ANGRY_CUSTOMER_ESCALATION]',
    outcome: 'De-escalates, identifies the issue, and hands off safely if required.',
    scenario: 'Customer is angry about a delayed refund and demands escalation.',
    action: 'Priority ticket created with summary and sentiment.',
    dimensions: 'Empathy, safety, escalation correctness',
  },
  {
    title: 'Noisy Hinglish Call',
    placeholder: '[DEMO_VIDEO_NOISY_HINGLISH_CALL]',
    outcome: 'Handles interruption, noise, mixed language, ambiguity, and tool use.',
    scenario: 'Caller switches between Hindi and English with traffic noise.',
    action: 'Intent preserved, correction handled, workflow completed.',
    dimensions: 'India robustness, interruptions, ambiguity, tool use',
  },
];

const complexityCards = [
  'Hinglish and mixed-language calls',
  'Noisy real-world audio',
  'Interruptions and corrections',
  'Multi-intent conversations',
  'Emotion and urgency',
  'Tool-use under pressure',
];

const platformCards = [
  {
    title: 'Build',
    body: 'Call Flow Builder, reusable templates, prompts, fallback paths, and escalation rules.',
  },
  {
    title: 'Deploy',
    body: 'Inbound and outbound calls, campaigns, phone numbers, SIP, and API-triggered calls.',
  },
  {
    title: 'Integrate',
    body: 'CRM, helpdesk, calendar, WhatsApp, payment links, SDKs, n8n, and webhooks.',
  },
  {
    title: 'Monitor',
    body: 'Call timelines, audits, analytics, outcome labels, sentiment, and failure reasons.',
  },
  {
    title: 'Improve',
    body: 'Failed calls become benchmark cases, roadmap inputs, and better future agent behavior.',
  },
];

const dashboardMetrics = [
  ['Autonomous resolution', '68%', 'Eligible calls resolved without a human'],
  ['Correct escalation', '91%', 'Complex cases handed off with usable context'],
  ['Tool completion', '87%', 'CRM, order, calendar, or ticket action completed'],
  ['AHT saved', '4.2 min', 'Average human time avoided per resolved call'],
  ['Cost saved', 'INR 8.4L', 'Estimated monthly savings in pilot model'],
  ['Sentiment recovery', '73%', 'Negative calls improved before close or handoff'],
];

const benchmarkDimensions = [
  'End-to-end resolution',
  'Customer-confirmed outcome',
  'Tool/action completion',
  'Correct escalation',
  'Turn-taking and interruption handling',
  'India robustness: noise, accents, Hinglish',
  'Multi-intent handling',
  'Emotional intelligence',
];

const fieldNotes = [
  'Why COD confirmation calls are harder than they look',
  '5 failure modes we see in noisy Indian support calls',
  'How to measure autonomous resolution, not just call completion',
  'What good human handoff looks like in AI voice calls',
];

const integrationTags = [
  'CRM',
  'Helpdesk',
  'Calendar',
  'WhatsApp',
  'n8n',
  'SDK',
  'Webhooks',
  'Custom APIs',
];

export const VocalLabsAISupportAutomationLandingPage = () => {
  const [activeDemo, setActiveDemo] = useState(0);
  const [monthlyCalls, setMonthlyCalls] = useState(50000);
  const [handleTime, setHandleTime] = useState(4);
  const [costPerHour, setCostPerHour] = useState(260);
  const [eligibleRate, setEligibleRate] = useState(45);
  const [resolutionRate, setResolutionRate] = useState(62);
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const selectedDemo = demos[activeDemo];

  const roi = useMemo(() => {
    const eligibleCalls = monthlyCalls * (eligibleRate / 100);
    const resolvedCalls = eligibleCalls * (resolutionRate / 100);
    const hoursSaved = (resolvedCalls * handleTime) / 60;
    const grossSavings = hoursSaved * costPerHour;
    const aiCost = resolvedCalls * handleTime * 2.2;
    const netSavings = grossSavings - aiCost;

    return {
      eligibleCalls: Math.round(eligibleCalls),
      resolvedCalls: Math.round(resolvedCalls),
      hoursSaved: Math.round(hoursSaved),
      netSavings: Math.max(0, Math.round(netSavings)),
    };
  }, [costPerHour, eligibleRate, handleTime, monthlyCalls, resolutionRate]);

  function submitPilotRequest(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitted(email.includes('@'));
  }

  return (
    <div className="min-h-screen w-full bg-[#fbfaff] text-[#181225]">
      <header className="mx-auto flex w-full max-w-7xl items-center justify-between px-5 py-5 sm:px-8 lg:px-10">
        <div className="flex min-w-0 items-center gap-3">
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[#6f2cff] text-sm font-bold text-white shadow-lg shadow-[#6f2cff]/20">
            VL
          </div>
          <div className="min-w-0">
            <p className="truncate text-base font-semibold text-[#181225]">Vocallabs.ai</p>
            <p className="truncate text-xs text-[#6f6478]">Autonomous resolution engine</p>
          </div>
        </div>
        <nav className="hidden items-center gap-6 text-sm font-medium text-[#5f536f] lg:flex">
          <a className="transition hover:text-[#6f2cff]" href="#demos">Demos</a>
          <a className="transition hover:text-[#6f2cff]" href="#outcomes">Outcomes</a>
          <a className="transition hover:text-[#6f2cff]" href="#benchmark">Benchmark</a>
          <a className="transition hover:text-[#6f2cff]" href="#roi">ROI</a>
        </nav>
        <div className="flex items-center gap-2">
          <a className="hidden rounded-lg border border-[#ded4f2] bg-white px-4 py-2.5 text-sm font-semibold text-[#2b1d42] shadow-sm transition hover:border-[#bda8ff] hover:text-[#6f2cff] sm:inline-flex" href="#demos">
            Watch demos
          </a>
          <a className="rounded-lg bg-[#6f2cff] px-4 py-2.5 text-sm font-semibold text-white shadow-lg shadow-[#6f2cff]/20 transition hover:bg-[#5820d4]" href="#pilot">
            Book pilot
          </a>
        </div>
      </header>

      <main>
        <section className="mx-auto grid w-full max-w-7xl items-center gap-12 px-5 pb-14 pt-8 sm:px-8 lg:grid-cols-[0.95fr_1.05fr] lg:px-10 lg:pb-20 lg:pt-16">
          <div>
            <div className="mb-6 inline-flex items-center gap-2 rounded-lg border border-[#e5dcff] bg-white px-3 py-2 text-sm font-medium text-[#6f2cff] shadow-sm">
              <span className="h-2 w-2 rounded-full bg-[#6f2cff]" />
              Proof-led voice automation for Indian business workflows
            </div>
            <h1 className="max-w-4xl text-4xl font-semibold leading-[1.06] text-[#181225] sm:text-5xl lg:text-6xl">
              AI voice agents that resolve real customer calls, not just answer them.
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-[#5f536f]">
              Built for high-volume Indian business workflows across support, sales, bookings, logistics,
              and follow-ups, with multilingual conversations, safe handoffs, and measurable ROI.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <a className="rounded-lg bg-[#6f2cff] px-5 py-3 text-center text-sm font-semibold text-white shadow-xl shadow-[#6f2cff]/20 transition hover:bg-[#5820d4]" href="#demos">
                Watch demos
              </a>
              <a className="rounded-lg border border-[#ded4f2] bg-white px-5 py-3 text-center text-sm font-semibold text-[#2b1d42] shadow-sm transition hover:border-[#bda8ff] hover:text-[#6f2cff]" href="#pilot">
                Try a call
              </a>
              <a className="rounded-lg border border-[#ded4f2] bg-white px-5 py-3 text-center text-sm font-semibold text-[#2b1d42] shadow-sm transition hover:border-[#bda8ff] hover:text-[#6f2cff]" href="#roi">
                Calculate ROI
              </a>
            </div>
            <div className="mt-8 flex flex-wrap gap-2">
              {proofChips.map((chip) => (
                <span key={chip} className="rounded-lg border border-[#e8ddff] bg-white px-3 py-2 text-xs font-semibold text-[#5f536f]">
                  {chip}
                </span>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="absolute -left-4 top-10 hidden h-32 w-32 rounded-full bg-[#eee7ff] blur-2xl lg:block" />
            <div className="relative overflow-hidden rounded-xl border border-[#e7def7] bg-white shadow-2xl shadow-[#6f2cff]/10">
              <div className="flex flex-col justify-between gap-3 border-b border-[#eee8f8] px-5 py-4 sm:flex-row sm:items-center">
                <div>
                  <p className="text-sm font-semibold text-[#181225]">90-second resolution overview</p>
                  <p className="text-xs text-[#7a7088]">Video placeholder with transcript overlay and outcome card</p>
                </div>
                <div className="rounded-lg bg-[#f1ebff] px-3 py-1.5 text-xs font-semibold text-[#6f2cff]">
                  [DEMO_VIDEO_HERO_RESOLUTION_OVERVIEW]
                </div>
              </div>
              <div className="grid gap-5 p-5 lg:grid-cols-[1fr_0.82fr]">
                <div className="rounded-lg border border-[#ece6f7] bg-[#fcfbff] p-4">
                  <div className="flex items-center justify-between">
                    <p className="text-sm font-semibold text-[#26183c]">Live call transcript</p>
                    <span className="rounded-lg bg-[#e9fff4] px-2.5 py-1 text-xs font-semibold text-[#147a4b]">Resolved</span>
                  </div>
                  <div className="mt-5 space-y-3">
                    <div className="max-w-[90%] rounded-lg bg-white p-3 text-sm leading-6 text-[#51465f] shadow-sm">
                      Haan, order confirm hai, but address thoda change karna hai.
                    </div>
                    <div className="ml-auto max-w-[90%] rounded-lg bg-[#6f2cff] p-3 text-sm leading-6 text-white shadow-lg shadow-[#6f2cff]/20">
                      Sure. I updated the address, confirmed the COD order, and queued a WhatsApp confirmation.
                    </div>
                    <div className="max-w-[90%] rounded-lg bg-white p-3 text-sm leading-6 text-[#51465f] shadow-sm">
                      Theek hai, thanks.
                    </div>
                  </div>
                  <div className="mt-5 grid grid-cols-2 gap-2 sm:grid-cols-4">
                    {['Hinglish', 'Address updated', 'Order confirmed', 'No handoff'].map((item) => (
                      <div key={item} className="rounded-lg bg-[#f4f0ff] px-3 py-2 text-center text-xs font-medium text-[#5b2ed1]">
                        {item}
                      </div>
                    ))}
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="rounded-lg border border-[#ece6f7] bg-white p-4">
                    <p className="text-sm font-semibold text-[#26183c]">Outcome card</p>
                    <div className="mt-4 space-y-3 text-sm">
                      {[
                        ['Call status', 'Resolved'],
                        ['Tool action', 'Order updated'],
                        ['Human handoff', 'Not needed'],
                        ['VVRB test', 'Resolution + tool completion'],
                      ].map(([label, value]) => (
                        <div key={label} className="flex items-center justify-between rounded-lg bg-[#fbfaff] px-3 py-2">
                          <span className="text-[#6f6478]">{label}</span>
                          <span className="font-semibold text-[#2b1d42]">{value}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="rounded-lg border border-[#ece6f7] bg-[#2b174d] p-4 text-white">
                    <p className="text-sm font-semibold">Pilot proof loop</p>
                    <p className="mt-3 text-sm leading-6 text-[#ded2ff]">
                      Demos become pilot scorecards. Failed calls become benchmark cases. Better benchmarks improve the product.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="outcomes" className="border-y border-[#eee8f8] bg-white">
          <div className="mx-auto w-full max-w-7xl px-5 py-14 sm:px-8 lg:px-10">
            <div className="grid gap-4 lg:grid-cols-3">
              {outcomes.map((outcome) => (
                <article key={outcome.title} className="rounded-xl border border-[#e7def7] bg-[#fbfaff] p-6">
                  <div className="mb-5 inline-flex rounded-lg bg-white px-3 py-2 text-xl font-semibold text-[#6f2cff] shadow-sm">
                    {outcome.metric}
                  </div>
                  <h2 className="text-xl font-semibold text-[#181225]">{outcome.title}</h2>
                  <p className="mt-3 text-sm leading-7 text-[#5f536f]">{outcome.body}</p>
                  <p className="mt-5 text-xs font-semibold uppercase text-[#8a7b9b]">{outcome.label}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="demos" className="mx-auto w-full max-w-7xl px-5 py-16 sm:px-8 lg:px-10">
          <div className="flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
            <div className="max-w-3xl">
              <p className="text-sm font-semibold uppercase text-[#6f2cff]">Demo library preview</p>
              <h2 className="mt-3 text-3xl font-semibold leading-tight text-[#181225] sm:text-4xl">
                Hear Vocallabs agents handle real business scenarios.
              </h2>
              <p className="mt-4 text-base leading-7 text-[#5f536f]">
                Each demo should show scenario, transcript, business outcome, tool action, and benchmark dimensions.
              </p>
            </div>
            <a className="rounded-lg border border-[#ded4f2] bg-white px-5 py-3 text-center text-sm font-semibold text-[#2b1d42] shadow-sm transition hover:border-[#bda8ff] hover:text-[#6f2cff]" href="#pilot">
              Explore all demos
            </a>
          </div>

          <div className="mt-9 grid gap-6 lg:grid-cols-[0.85fr_1.15fr]">
            <div className="grid gap-3">
              {demos.map((demo, index) => (
                <button
                  key={demo.title}
                  className={`rounded-lg border p-4 text-left transition focus:outline-none focus:ring-2 focus:ring-[#6f2cff] ${
                    activeDemo === index
                      ? 'border-[#6f2cff] bg-white shadow-lg shadow-[#6f2cff]/10'
                      : 'border-[#e7def7] bg-white hover:border-[#bda8ff]'
                  }`}
                  type="button"
                  onClick={() => setActiveDemo(index)}
                >
                  <span className="block text-sm font-semibold text-[#26183c]">{demo.title}</span>
                  <span className="mt-1 block text-xs font-medium text-[#6f2cff]">{demo.outcome}</span>
                </button>
              ))}
            </div>
            <div className="rounded-xl border border-[#e7def7] bg-white p-6 shadow-xl shadow-[#6f2cff]/5">
              <div className="rounded-lg border border-dashed border-[#bda8ff] bg-[#fbfaff] p-5">
                <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-start">
                  <div>
                    <p className="text-sm font-semibold text-[#6f2cff]">{selectedDemo.placeholder}</p>
                    <h3 className="mt-2 text-3xl font-semibold text-[#181225]">{selectedDemo.title}</h3>
                  </div>
                  <div className="rounded-lg bg-[#f1ebff] px-3 py-2 text-xs font-semibold text-[#6f2cff]">
                    Audio + video + transcript
                  </div>
                </div>
                <p className="mt-5 text-base leading-7 text-[#5f536f]">{selectedDemo.scenario}</p>
              </div>
              <div className="mt-5 grid gap-4 md:grid-cols-3">
                <div className="rounded-lg bg-[#fbfaff] p-4">
                  <p className="text-xs font-semibold uppercase text-[#8a7b9b]">Outcome shown</p>
                  <p className="mt-2 text-sm font-semibold leading-6 text-[#2b1d42]">{selectedDemo.outcome}</p>
                </div>
                <div className="rounded-lg bg-[#fbfaff] p-4">
                  <p className="text-xs font-semibold uppercase text-[#8a7b9b]">Tool action</p>
                  <p className="mt-2 text-sm font-semibold leading-6 text-[#2b1d42]">{selectedDemo.action}</p>
                </div>
                <div className="rounded-lg bg-[#fbfaff] p-4">
                  <p className="text-xs font-semibold uppercase text-[#8a7b9b]">VVRB dimensions</p>
                  <p className="mt-2 text-sm font-semibold leading-6 text-[#2b1d42]">{selectedDemo.dimensions}</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-white">
          <div className="mx-auto grid w-full max-w-7xl gap-10 px-5 py-16 sm:px-8 lg:grid-cols-[0.9fr_1.1fr] lg:px-10">
            <div>
              <p className="text-sm font-semibold uppercase text-[#6f2cff]">Indian call complexity</p>
              <h2 className="mt-3 text-3xl font-semibold leading-tight text-[#181225] sm:text-4xl">
                Built for the calls that break generic voice bots.
              </h2>
              <p className="mt-5 text-base leading-7 text-[#5f536f]">
                Indian customer conversations are noisy, mixed-language, emotional, and operationally messy.
                Vocallabs should prove quality on those conditions instead of hiding behind generic bot claims.
              </p>
              <a className="mt-7 inline-flex rounded-lg bg-[#6f2cff] px-5 py-3 text-sm font-semibold text-white shadow-xl shadow-[#6f2cff]/20 transition hover:bg-[#5820d4]" href="#demos">
                Watch the noisy Hinglish demo
              </a>
            </div>
            <div className="grid gap-3 sm:grid-cols-2">
              {complexityCards.map((item) => (
                <div key={item} className="rounded-lg border border-[#e7def7] bg-[#fbfaff] p-5">
                  <div className="mb-4 h-1.5 w-12 rounded-full bg-[#6f2cff]" />
                  <p className="text-base font-semibold leading-6 text-[#2b1d42]">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="roi" className="mx-auto grid w-full max-w-7xl gap-8 px-5 py-16 sm:px-8 lg:grid-cols-[1fr_1fr] lg:px-10">
          <div>
            <p className="text-sm font-semibold uppercase text-[#6f2cff]">Outcome dashboard and ROI</p>
            <h2 className="mt-3 text-3xl font-semibold leading-tight text-[#181225] sm:text-4xl">
              See what the agent actually resolved.
            </h2>
            <p className="mt-5 text-base leading-7 text-[#5f536f]">
              Vocallabs should not only show that calls happened. It should show what got resolved,
              what failed, what escalated, and what business value was created.
            </p>
            <div className="mt-8 grid gap-3 sm:grid-cols-2">
              {dashboardMetrics.map(([label, value, description]) => (
                <div key={label} className="rounded-lg border border-[#e7def7] bg-white p-4 shadow-sm">
                  <p className="text-2xl font-semibold text-[#6f2cff]">{value}</p>
                  <h3 className="mt-2 text-sm font-semibold text-[#181225]">{label}</h3>
                  <p className="mt-1 text-xs leading-5 text-[#6f6478]">{description}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-xl border border-[#e7def7] bg-white p-6 shadow-2xl shadow-[#6f2cff]/10">
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="text-sm font-semibold text-[#6f2cff]">ROI calculator widget</p>
                <h3 className="mt-2 text-2xl font-semibold text-[#181225]">Estimate manual call work saved.</h3>
              </div>
              <span className="rounded-lg bg-[#f1ebff] px-3 py-2 text-xs font-semibold text-[#6f2cff]">Interactive</span>
            </div>
            <div className="mt-6 grid gap-4">
              {[
                ['Monthly call volume', monthlyCalls, 10000, 250000, setMonthlyCalls],
                ['Average handle time', handleTime, 2, 12, setHandleTime],
                ['Human cost per hour', costPerHour, 120, 900, setCostPerHour],
                ['Eligible for automation', eligibleRate, 10, 80, setEligibleRate],
                ['Expected AI resolution', resolutionRate, 25, 85, setResolutionRate],
              ].map(([label, value, min, max, setter]) => (
                <label key={label as string} className="block">
                  <div className="mb-2 flex items-center justify-between text-sm">
                    <span className="font-semibold text-[#332444]">{label as string}</span>
                    <span className="font-semibold text-[#6f2cff]">
                      {label === 'Average handle time'
                        ? `${value} min`
                        : label === 'Human cost per hour'
                          ? `INR ${value}`
                          : label === 'Monthly call volume'
                            ? Number(value).toLocaleString('en-IN')
                            : `${value}%`}
                    </span>
                  </div>
                  <input
                    className="w-full accent-[#6f2cff]"
                    max={max as number}
                    min={min as number}
                    onChange={(event) => (setter as (value: number) => void)(Number(event.target.value))}
                    type="range"
                    value={value as number}
                  />
                </label>
              ))}
            </div>
            <div className="mt-6 grid gap-3 sm:grid-cols-2">
              {[
                ['Eligible calls', roi.eligibleCalls.toLocaleString('en-IN')],
                ['Resolved by AI', roi.resolvedCalls.toLocaleString('en-IN')],
                ['Human hours saved', roi.hoursSaved.toLocaleString('en-IN')],
                ['Net monthly savings', `INR ${roi.netSavings.toLocaleString('en-IN')}`],
              ].map(([label, value]) => (
                <div key={label} className="rounded-lg bg-[#fbfaff] p-4">
                  <p className="text-xs font-semibold uppercase text-[#8a7b9b]">{label}</p>
                  <p className="mt-2 text-xl font-semibold text-[#181225]">{value}</p>
                </div>
              ))}
            </div>
            <a className="mt-5 inline-flex w-full justify-center rounded-lg bg-[#6f2cff] px-5 py-3 text-sm font-semibold text-white shadow-xl shadow-[#6f2cff]/20 transition hover:bg-[#5820d4]" href="#pilot">
              Turn estimate into pilot scorecard
            </a>
          </div>
        </section>

        <section className="bg-white">
          <div className="mx-auto w-full max-w-7xl px-5 py-16 sm:px-8 lg:px-10">
            <div className="max-w-3xl">
              <p className="text-sm font-semibold uppercase text-[#6f2cff]">Platform</p>
              <h2 className="mt-3 text-3xl font-semibold leading-tight text-[#181225] sm:text-4xl">
                One platform to build, run, and improve AI voice agents.
              </h2>
            </div>
            <div className="mt-9 grid gap-4 md:grid-cols-5">
              {platformCards.map((card, index) => (
                <article key={card.title} className="rounded-xl border border-[#e7def7] bg-[#fbfaff] p-5">
                  <div className="mb-4 flex h-9 w-9 items-center justify-center rounded-lg bg-white text-sm font-semibold text-[#6f2cff] shadow-sm">
                    {index + 1}
                  </div>
                  <h3 className="text-lg font-semibold text-[#181225]">{card.title}</h3>
                  <p className="mt-3 text-sm leading-6 text-[#5f536f]">{card.body}</p>
                </article>
              ))}
            </div>
            <div className="mt-8 flex flex-wrap gap-2">
              {integrationTags.map((tag) => (
                <span key={tag} className="rounded-lg border border-[#e8ddff] bg-white px-3 py-2 text-xs font-semibold text-[#5f536f]">
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </section>

        <section id="benchmark" className="mx-auto grid w-full max-w-7xl gap-8 px-5 py-16 sm:px-8 lg:grid-cols-[0.9fr_1.1fr] lg:px-10">
          <div>
            <p className="text-sm font-semibold uppercase text-[#6f2cff]">VVRB benchmark framework</p>
            <h2 className="mt-3 text-3xl font-semibold leading-tight text-[#181225] sm:text-4xl">
              The benchmark for real-world voice resolution.
            </h2>
            <p className="mt-5 text-base leading-7 text-[#5f536f]">
              VVRB measures whether AI agents can resolve real business calls end-to-end,
              especially in messy Indian call environments.
            </p>
            <div className="mt-7 rounded-xl border border-[#e7def7] bg-white p-5 shadow-sm">
              <p className="text-sm font-semibold text-[#6f2cff]">Core metric</p>
              <h3 className="mt-2 text-2xl font-semibold text-[#181225]">EARP</h3>
              <p className="mt-2 text-sm leading-7 text-[#5f536f]">
                End-to-End Autonomous Resolution Parity: eligible calls fully resolved by AI at human-or-better quality,
                with correct tool completion, safe behavior, and correct escalation when needed.
              </p>
            </div>
          </div>
          <div className="grid gap-3 sm:grid-cols-2">
            {benchmarkDimensions.map((dimension) => (
              <div key={dimension} className="rounded-lg border border-[#e7def7] bg-white p-4">
                <div className="mb-3 h-1.5 w-10 rounded-full bg-[#6f2cff]" />
                <p className="text-sm font-semibold leading-6 text-[#2b1d42]">{dimension}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="bg-white">
          <div className="mx-auto w-full max-w-7xl px-5 py-16 sm:px-8 lg:px-10">
            <div className="flex flex-col justify-between gap-5 lg:flex-row lg:items-end">
              <div className="max-w-3xl">
                <p className="text-sm font-semibold uppercase text-[#6f2cff]">Voice AI Field Notes</p>
                <h2 className="mt-3 text-3xl font-semibold leading-tight text-[#181225] sm:text-4xl">
                  Field notes from building voice agents for messy real calls.
                </h2>
              </div>
              <a className="rounded-lg border border-[#ded4f2] bg-white px-5 py-3 text-center text-sm font-semibold text-[#2b1d42] shadow-sm transition hover:border-[#bda8ff] hover:text-[#6f2cff]" href="#pilot">
                Read Field Notes
              </a>
            </div>
            <div className="mt-9 grid gap-4 md:grid-cols-4">
              {fieldNotes.map((note) => (
                <article key={note} className="rounded-xl border border-[#e7def7] bg-[#fbfaff] p-5">
                  <p className="text-xs font-semibold uppercase text-[#8a7b9b]">Field note</p>
                  <h3 className="mt-3 text-lg font-semibold leading-7 text-[#181225]">{note}</h3>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="pilot" className="mx-auto w-full max-w-7xl px-5 pb-20 pt-16 sm:px-8 lg:px-10">
          <div className="grid gap-8 rounded-xl border border-[#e7def7] bg-white p-6 shadow-2xl shadow-[#6f2cff]/10 md:p-8 lg:grid-cols-[0.95fr_1.05fr]">
            <div>
              <p className="text-sm font-semibold uppercase text-[#6f2cff]">Ready to test a real workflow?</p>
              <h2 className="mt-3 text-3xl font-semibold leading-tight text-[#181225]">
                Start with one measurable use case.
              </h2>
              <p className="mt-5 text-base leading-7 text-[#5f536f]">
                Define the workflow, run the pilot, and track resolution, escalation, tool completion,
                human minutes saved, and ROI from day one.
              </p>
              <div className="mt-7 grid gap-3 sm:grid-cols-3">
                {['Book a Pilot', 'Try a Call', 'Calculate ROI'].map((cta) => (
                  <a key={cta} className="rounded-lg border border-[#ded4f2] bg-[#fbfaff] px-4 py-3 text-center text-sm font-semibold text-[#2b1d42] transition hover:border-[#bda8ff] hover:text-[#6f2cff]" href={cta === 'Calculate ROI' ? '#roi' : '#pilot'}>
                    {cta}
                  </a>
                ))}
              </div>
            </div>
            <form className="space-y-4" onSubmit={submitPilotRequest}>
              <label className="block">
                <span className="text-sm font-semibold text-[#332444]">Work email</span>
                <input
                  className="mt-2 w-full rounded-lg border border-[#ded4f2] bg-[#fbfaff] px-4 py-3 text-sm text-[#181225] outline-none transition placeholder:text-[#9a8ba8] focus:border-[#6f2cff] focus:ring-2 focus:ring-[#6f2cff]/20"
                  onChange={(event) => {
                    setEmail(event.target.value);
                    setSubmitted(false);
                  }}
                  placeholder="name@company.com"
                  type="email"
                  value={email}
                />
              </label>
              <div className="grid gap-3 sm:grid-cols-2">
                {['COD confirmation', 'Delivery reschedule', 'Lead qualification', 'Appointment booking'].map((useCase) => (
                  <label key={useCase} className="flex cursor-pointer items-center gap-3 rounded-lg border border-[#e7def7] bg-[#fbfaff] px-4 py-3 text-sm font-medium text-[#3a2b4e]">
                    <input className="accent-[#6f2cff]" name="pilot-use-case" type="radio" />
                    {useCase}
                  </label>
                ))}
              </div>
              <button className="w-full rounded-lg bg-[#6f2cff] px-5 py-3 text-sm font-semibold text-white shadow-xl shadow-[#6f2cff]/20 transition hover:bg-[#5820d4]" type="submit">
                Book a pilot
              </button>
              <p className="min-h-6 text-sm font-medium text-[#6f2cff]">
                {submitted ? 'Pilot request staged. The next step is a use-case scorecard.' : 'Security packet, integration plan, and pilot scorecard available during evaluation.'}
              </p>
            </form>
          </div>
        </section>
      </main>
    </div>
  );
};
