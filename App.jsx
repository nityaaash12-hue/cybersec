import React, { useEffect, useMemo, useState } from "react";
import { days, glossary } from "./course";
import {
  ShieldCheck, LayoutDashboard, Map, BookOpen, FlaskConical, Brain,
  NotebookPen, ChartNoAxesColumnIncreasing, Menu, X, ChevronRight,
  CheckCircle2, Circle, LockKeyhole, Clock3, Flame, Trophy, Search,
  ArrowLeft, ArrowRight, Terminal, Copy, RotateCcw, Download, Sparkles
} from "lucide-react";

const readStore = () => {
  try { return JSON.parse(localStorage.getItem("cybermentor-progress") || "{}"); }
  catch { return {}; }
};

export default function App() {
  const [page, setPage] = useState("Dashboard");
  const [activeDay, setActiveDay] = useState(1);
  const [progress, setProgress] = useState(readStore);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [quizAnswers, setQuizAnswers] = useState({});
  const [quizSubmitted, setQuizSubmitted] = useState(false);
  const [terminalInput, setTerminalInput] = useState("");
  const [terminalLines, setTerminalLines] = useState(["CyberMentor safe terminal simulator", "Type help to see available commands."]);
  const [audit, setAudit] = useState({ updates: false, mfa: false, unique: false, backup: false, recovery: false });
  const [search, setSearch] = useState("");

  useEffect(() => localStorage.setItem("cybermentor-progress", JSON.stringify(progress)), [progress]);

  const completed = progress.completed || [];
  const quizScores = progress.quizScores || {};
  const current = days.find(d => d.id === activeDay) || days[0];
  const totalLessons = days.reduce((n, d) => n + d.lessons.length, 0);
  const doneLessons = completed.length;
  const percent = Math.round(doneLessons / totalLessons * 100);
  const xp = (doneLessons * 20) + Object.keys(quizScores).length * 25;
  const nav = [
    ["Dashboard", LayoutDashboard], ["Learning Roadmap", Map], ["Daily Lessons", BookOpen],
    ["Cyber Labs", FlaskConical], ["Notes & Flashcards", NotebookPen], ["AI Mentor", Brain], ["My Progress", ChartNoAxesColumnIncreasing]
  ];

  function markLesson(dayId, lessonIndex) {
    const key = `${dayId}-${lessonIndex}`;
    setProgress(p => ({ ...p, completed: [...new Set([...(p.completed || []), key])] }));
  }
  function setQuizAnswer(q, answer) {
    setQuizAnswers(a => ({ ...a, [q]: answer }));
  }
  function submitQuiz() {
    const score = current.quiz.reduce((n, q, i) => n + (quizAnswers[i] === q[2] ? 1 : 0), 0);
    setProgress(p => ({ ...p, quizScores: { ...(p.quizScores || {}), [activeDay]: score } }));
    setQuizSubmitted(true);
  }
  function openDay(id, target = "Daily Lessons") {
    setActiveDay(id); setPage(target); setQuizAnswers({}); setQuizSubmitted(false); setMobileOpen(false);
  }
  function runTerminal(e) {
    e.preventDefault();
    const raw = terminalInput.trim();
    if (!raw) return;
    const cmd = raw.toLowerCase();
    const outputs = {
      help: "Available: help, pwd, ls, whoami, hostname, mkdir practice, touch notes.txt, cat notes.txt, clear",
      pwd: "/home/learner",
      ls: "Documents  Downloads  practice",
      whoami: "learner",
      hostname: "cybermentor-lab",
      "mkdir practice": "Directory created (simulated).",
      "touch notes.txt": "File created (simulated).",
      "cat notes.txt": "This is a sample learning file. No real files were accessed.",
    };
    if (cmd === "clear") setTerminalLines([]);
    else setTerminalLines(lines => [...lines, `$ ${raw}`, outputs[cmd] || "Command not available in this safe simulator. Type help."]);
    setTerminalInput("");
  }
  function downloadAudit() {
    const checked = Object.entries(audit).filter(([,v]) => v).map(([k]) => k);
    const labels = { updates:"Software updates reviewed", mfa:"MFA enabled where available", unique:"Unique passwords used", backup:"Backups reviewed", recovery:"Account recovery details reviewed" };
    const text = `CYBERMENTOR — PERSONAL CYBERSECURITY AUDIT\n\nDate: ${new Date().toLocaleDateString()}\n\nChecklist reviewed:\n${Object.entries(labels).map(([k,v]) => `${audit[k] ? "[x]" : "[ ]"} ${v}`).join("\n")}\n\nCompleted checks: ${checked.length}/5\n\nRecommendations:\n- Turn on automatic updates where practical.\n- Use unique passwords and a reputable password manager.\n- Enable MFA on important accounts.\n- Keep backups and test that important files can be restored.\n- Keep recovery details current and private.\n\nDo not add passwords or recovery codes to this report.\n`;
    const blob = new Blob([text], { type: "text/plain" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a"); a.href = url; a.download = "cybermentor-security-audit.txt"; a.click(); URL.revokeObjectURL(url);
  }

  const filteredGlossary = useMemo(() => glossary.filter(([term, def]) => `${term} ${def}`.toLowerCase().includes(search.toLowerCase())), [search]);

  return <div className="app-shell">
    <aside className={`sidebar ${mobileOpen ? "open" : ""}`}>
      <div className="brand"><div className="brand-mark"><ShieldCheck size={22}/></div><div><b>CYBERMENTOR</b><small>SECURITY ACADEMY</small></div><button className="mobile-close" onClick={() => setMobileOpen(false)}><X/></button></div>
      <div className="side-label">LEARN</div>
      <nav>{nav.map(([label, Icon]) => <button key={label} className={`nav-item ${page === label ? "active" : ""}`} onClick={() => {setPage(label);setMobileOpen(false);}}><Icon size={18}/><span>{label}</span>{label === "Cyber Labs" && <span className="nav-dot"/>}</button>)}</nav>
      <div className="sidebar-bottom"><div className="side-progress"><div className="side-progress-top"><span>Your journey</span><b>{percent}%</b></div><div className="progress-track"><i style={{width:`${percent}%`}}/></div><small>{doneLessons} of {totalLessons} lessons completed</small></div><div className="profile"><div className="avatar">CM</div><div><b>Cyber Learner</b><small>Foundation level</small></div><span className="online-dot"/></div></div>
    </aside>
    {mobileOpen && <button className="scrim" onClick={() => setMobileOpen(false)} aria-label="Close menu"/>}
    <main className="main">
      <header className="topbar"><button className="menu-btn" onClick={() => setMobileOpen(true)}><Menu/></button><div className="crumb">Academy <span>/</span> {page}</div><div className="top-actions"><div className="streak"><Flame size={16}/> <b>{Object.keys(quizScores).length + (doneLessons ? 1 : 0)}</b><span>active days</span></div><div className="top-avatar">CM</div></div></header>
      <div className="content">
        {page === "Dashboard" && <Dashboard percent={percent} xp={xp} doneLessons={doneLessons} totalLessons={totalLessons} quizScores={quizScores} openDay={openDay} completed={completed}/>}
        {page === "Learning Roadmap" && <Roadmap openDay={openDay} completed={completed} quizScores={quizScores}/>}
        {page === "Daily Lessons" && <Lessons day={current} completed={completed} markLesson={markLesson} openDay={openDay} />}
        {page === "Cyber Labs" && <Labs terminalInput={terminalInput} setTerminalInput={setTerminalInput} terminalLines={terminalLines} runTerminal={runTerminal} audit={audit} setAudit={setAudit} downloadAudit={downloadAudit}/>}
        {page === "Notes & Flashcards" && <Notes search={search} setSearch={setSearch} filteredGlossary={filteredGlossary}/>}
        {page === "AI Mentor" && <Mentor />}
        {page === "My Progress" && <Progress percent={percent} xp={xp} completed={completed} quizScores={quizScores} totalLessons={totalLessons}/>}
      </div>
      <footer>CYBERMENTOR <span>•</span> Learn responsibly. Practice only on systems you own or have permission to test.</footer>
    </main>
  </div>;
}

function PageTitle({eyebrow, title, subtitle, action}) {
  return <div className="page-title"><div><div className="eyebrow">{eyebrow}</div><h1>{title}</h1><p>{subtitle}</p></div>{action}</div>;
}
function Dashboard({percent,xp,doneLessons,totalLessons,quizScores,openDay,completed}) {
  const next = days.find(d => d.lessons.some((_,i) => !completed.includes(`${d.id}-${i}`))) || days[6];
  return <>
    <PageTitle eyebrow="YOUR LEARNING OVERVIEW" title="Build your cyber skills." subtitle="Small, consistent steps. Stronger security thinking." action={<span className="level-pill"><Sparkles size={14}/> FOUNDATION TRACK</span>}/>
    <section className="hero-card"><div className="hero-copy"><div className="hero-tag"><span/> YOUR 7-DAY CHALLENGE</div><h2>Understand security.<br/><em>Think like a defender.</em></h2><p>Seven focused days to build your cybersecurity foundations through lessons, practical exercises and quick knowledge checks.</p><button className="primary-btn" onClick={() => openDay(next.id)}>Continue learning <ArrowRight size={17}/></button></div><div className="hero-art"><div className="orbit orbit-one"/><div className="orbit orbit-two"/><div className="shield-graphic"><ShieldCheck size={72}/></div><div className="float-chip chip-a"> <span className="pulse"/> SAFE PRACTICE</div><div className="float-chip chip-b">7 DAY PATH</div></div></section>
    <div className="stats-grid"><Stat icon={ChartNoAxesColumnIncreasing} label="Course progress" value={`${percent}%`} note={`${doneLessons}/${totalLessons} lessons`} /><Stat icon={Clock3} label="Learning time" value={`${doneLessons * 15}m`} note="Estimated completed time"/><Stat icon={Trophy} label="XP earned" value={xp.toLocaleString()} note="Keep building momentum"/><Stat icon={Brain} label="Quizzes done" value={Object.keys(quizScores).length} note="One quiz per day"/></div>
    <section className="section-block"><div className="section-heading"><div><div className="eyebrow">YOUR CURRICULUM</div><h2>7 days to stronger foundations</h2></div><span className="muted-link">{percent}% complete</span></div><div className="roadmap-list">{days.map(d => <button className="roadmap-row" key={d.id} onClick={() => openDay(d.id)}><div className="day-number">{String(d.id).padStart(2,"0")}</div><div className="roadmap-info"><b>{d.title}</b><small>{d.short}</small></div><div className="row-meta"><span>{d.time}</span><span className={`status ${d.lessons.every((_,i)=>completed.includes(`${d.id}-${i}`)) ? "done" : ""}`}>{d.lessons.every((_,i)=>completed.includes(`${d.id}-${i}`)) ? "Completed" : "Explore day"}</span></div><ChevronRight size={18}/></button>)}</div></section>
    <section className="bottom-grid"><div className="panel"><div className="panel-head"><div><div className="eyebrow">NEXT UP</div><h3>{next.title}</h3></div><span className="mini-icon"><BookOpen size={18}/></span></div><p>{next.intro}</p><button className="text-btn" onClick={() => openDay(next.id)}>Open lesson <ArrowRight size={16}/></button></div><div className="panel quote-panel"><div className="eyebrow">A SECURITY MINDSET</div><h3>Curiosity is good.<br/><span>Permission is essential.</span></h3><p>Learn in safe labs and always respect the boundaries of systems you do not own.</p></div></section>
  </>;
}
function Stat({icon:Icon,label,value,note}) { return <div className="stat-card"><div className="stat-icon"><Icon size={18}/></div><div className="stat-label">{label}</div><strong>{value}</strong><small>{note}</small></div>; }
function Roadmap({openDay,completed,quizScores}) {
  return <><PageTitle eyebrow="THE LEARNING PATH" title="Your 7-day roadmap" subtitle="Follow the sequence or revisit any day whenever you need a refresher."/><div className="roadmap-cards">{days.map(d=>{const count=d.lessons.filter((_,i)=>completed.includes(`${d.id}-${i}`)).length;return <button className="day-card" key={d.id} onClick={()=>openDay(d.id)}><div className="day-card-top"><span className="day-badge">DAY {String(d.id).padStart(2,"0")}</span><span className="day-icon">{d.icon}</span></div><h3>{d.title}</h3><p>{d.intro}</p><div className="day-card-bottom"><span><Clock3 size={14}/>{d.time}</span><span>{count}/{d.lessons.length} lessons</span></div><div className="progress-track"><i style={{width:`${count/d.lessons.length*100}%`}}/></div><div className="day-card-link">{quizScores[d.id] !== undefined ? `Quiz score: ${quizScores[d.id]}/${d.quiz.length}` : "Open learning day"} <ArrowRight size={15}/></div></button>})}</div></>;
}
function Lessons({day,completed,markLesson,openDay}) {
  const [selected,setSelected]=useState(0);
  const done=day.lessons.filter((_,i)=>completed.includes(`${day.id}-${i}`)).length;
  useEffect(()=>setSelected(0),[day.id]);
  return <><PageTitle eyebrow={`DAY ${String(day.id).padStart(2,"0")} · ${day.level.toUpperCase()}`} title={day.title} subtitle={day.intro} action={<span className="time-pill"><Clock3 size={14}/>{day.time}</span>}/>
    <div className="lesson-layout"><aside className="lesson-index"><div className="index-title">IN THIS LESSON <b>{done}/{day.lessons.length}</b></div>{day.lessons.map((l,i)=><button key={l[0]} className={`index-item ${selected===i?"selected":""}`} onClick={()=>setSelected(i)}><span>{completed.includes(`${day.id}-${i}`)?<CheckCircle2 size={16}/>:<Circle size={16}/>}</span><div><small>PART {i+1}</small><b>{l[0]}</b></div></button>)}<div className="progress-track"><i style={{width:`${done/day.lessons.length*100}%`}}/></div></aside>
    <article className="lesson-main"><div className="lesson-kicker">DAY {day.id} / MODULE {selected+1}</div><h2>{day.lessons[selected][0]}</h2><p className="lesson-body">{day.lessons[selected][1]}</p><div className="key-takeaway"><div className="takeaway-icon"><Sparkles size={17}/></div><div><b>Remember this</b><p>{day.lessons[selected][1].split(".")[0]}.</p></div></div><div className="lesson-controls"><button className="secondary-btn" disabled={selected===0} onClick={()=>setSelected(s=>s-1)}><ArrowLeft size={16}/> Previous</button><button className="primary-btn" onClick={()=>{markLesson(day.id,selected);if(selected<day.lessons.length-1)setSelected(s=>s+1);}}>{completed.includes(`${day.id}-${selected}`)?"Completed":"Mark complete"} <CheckCircle2 size={16}/></button><button className="secondary-btn" disabled={selected===day.lessons.length-1} onClick={()=>setSelected(s=>s+1)}>Next <ArrowRight size={16}/></button></div><div className="task-box"><div className="eyebrow">PRACTICE TASKS</div><h3>Put the idea into practice</h3>{day.tasks.map((t,i)=><div className="task-line" key={i}><span>{i+1}</span>{t}</div>)}</div><div className="quiz-callout"><div><b>Ready to check your understanding?</b><p>Take the Day {day.id} knowledge check when you've finished the lesson.</p></div><button className="primary-btn" onClick={()=>openDay(day.id,"Daily Lessons")}>Review day quiz <ArrowRight size={16}/></button></div><Quiz day={day}/></article></div></>;
}
function Quiz({day}) {
  const [answers,setAnswers]=useState({});
  const [submitted,setSubmitted]=useState(false);
  const score=day.quiz.reduce((n,q,i)=>n+(answers[i]===q[2]?1:0),0);
  useEffect(()=>{setAnswers({});setSubmitted(false);},[day.id]);
  return <section className="quiz-section"><div className="eyebrow">KNOWLEDGE CHECK</div><h3>Day {day.id} quiz</h3><p className="muted">Choose an answer for each question, then submit to see explanations.</p>{day.quiz.map((q,i)=><div className="question" key={i}><b>{i+1}. {q[0]}</b><div className="options">{q[1].map((opt,j)=><button key={j} disabled={submitted} className={`option ${answers[i]===j?"chosen":""} ${submitted&&j===q[2]?"correct":submitted&&answers[i]===j&&j!==q[2]?"wrong":""}`} onClick={()=>setAnswers(a=>({...a,[i]:j}))}><span>{String.fromCharCode(65+j)}</span>{opt}</button>)}</div>{submitted&&<div className="explanation"><b>{answers[i]===q[2]?"Correct":"Not quite"}</b> — {q[3]}</div>}</div>)}{!submitted?<button className="primary-btn" disabled={Object.keys(answers).length!==day.quiz.length} onClick={()=>setSubmitted(true)}>Submit answers <ArrowRight size={16}/></button>:<div className="result-box"><Trophy size={22}/><div><b>You scored {score}/{day.quiz.length}</b><p>{score===day.quiz.length?"Excellent work. Keep it up!":"Review the explanations and try again when ready."}</p></div><button className="secondary-btn" onClick={()=>{setAnswers({});setSubmitted(false);}}>Retake quiz <RotateCcw size={15}/></button></div>}</section>;
}
function Labs({terminalInput,setTerminalInput,terminalLines,runTerminal,audit,setAudit,downloadAudit}) {
  const [phish,setPhish]=useState({});
  const samples=[["Your account will be closed in 10 minutes. Verify your password using this unfamiliar link.","Suspicious","Urgency and a request to enter credentials through an unfamiliar link."],["Your monthly statement is ready. Sign in using your usual saved bookmark to review it.","Needs checking","A normal-looking message can still be spoofed; verify through a trusted route."],["Congratulations! You won a prize. Send your one-time code to claim it.","Suspicious","Legitimate support should never ask you to share a one-time code."]];
  return <><PageTitle eyebrow="SAFE PRACTICE ENVIRONMENT" title="Cyber Labs" subtitle="Build confidence with simulated exercises. Nothing here scans or contacts real systems."/><div className="lab-grid"><div className="panel terminal-panel"><div className="panel-head"><div><div className="eyebrow">LAB 01 · LINUX BASICS</div><h3>Terminal simulator</h3></div><span className="safe-tag"><LockKeyhole size={13}/> SIMULATED</span></div><p>Try basic navigation commands in this pretend environment.</p><div className="terminal-window"><div className="terminal-bar"><span/><span/><span/><small>learner@cybermentor:~</small></div><div className="terminal-output">{terminalLines.map((line,i)=><div key={i} className={line.startsWith("$")?"command-line":""}>{line}</div>)}</div><form className="terminal-form" onSubmit={runTerminal}><span>$</span><input value={terminalInput} onChange={e=>setTerminalInput(e.target.value)} placeholder="Type a command..." aria-label="Terminal command"/><button aria-label="Run command"><ArrowRight size={16}/></button></form></div><div className="hint">Tip: type <code>help</code> to see supported commands.</div></div>
    <div className="panel"><div className="eyebrow">LAB 02 · PHISHING AWARENESS</div><h3>Spot the warning signs</h3><p>Read each fictional message and decide whether it looks suspicious.</p>{samples.map((s,i)=><div className="phish-card" key={i}><p>“{s[0]}”</p><div className="phish-actions"><button className={phish[i]==="Suspicious"?"chosen":""} onClick={()=>setPhish(p=>({...p,[i]:"Suspicious"}))}>Suspicious</button><button className={phish[i]==="Looks okay"?"chosen":""} onClick={()=>setPhish(p=>({...p,[i]:"Looks okay"}))}>Looks okay</button></div>{phish[i]&&<div className="explanation"><b>{phish[i]===s[1]?"Good judgment":"Review this"}</b> — {s[2]}</div>}</div>)}</div></div>
    <div className="panel audit-panel"><div className="panel-head"><div><div className="eyebrow">LAB 03 · FINAL PROJECT</div><h3>Personal cybersecurity audit</h3><p>Review these protective habits. Do not enter passwords, recovery codes or other secrets.</p></div><span className="mini-icon"><ShieldCheck/></span></div><div className="audit-list">{[["updates","I review software and device updates."],["mfa","I enable MFA on important accounts where available."],["unique","I use unique passwords for important accounts."],["backup","I keep backups of important files."],["recovery","I keep account recovery details current and private."]].map(([k,label])=><label key={k} className="audit-check"><input type="checkbox" checked={audit[k]} onChange={e=>setAudit(a=>({...a,[k]:e.target.checked}))}/><span>{label}</span></label>)}</div><div className="audit-footer"><span>{Object.values(audit).filter(Boolean).length}/5 checks reviewed</span><button className="primary-btn" onClick={downloadAudit}><Download size={16}/> Download audit report</button></div></div>
  </>;
}
function Notes({search,setSearch,filteredGlossary}) {
  const [flipped,setFlipped]=useState({});
  return <><PageTitle eyebrow="REVISION CENTER" title="Notes & flashcards" subtitle="Keep important concepts close and revise them in short sessions."/><div className="search-box"><Search size={17}/><input value={search} onChange={e=>setSearch(e.target.value)} placeholder="Search cybersecurity terms..."/></div><div className="flash-grid">{filteredGlossary.map(([term,def],i)=><button className={`flash-card ${flipped[i]?"flipped":""}`} key={term} onClick={()=>setFlipped(f=>({...f,[i]:!f[i]}))}><span>{flipped[i]?"DEFINITION":"TERM"}</span><b>{flipped[i]?def:term}</b><small>Click to {flipped[i]?"see term":"reveal definition"}</small></button>)}</div><div className="panel note-tip"><NotebookPen size={20}/><div><b>Build your own revision notes</b><p>For every new concept, write a one-line definition and one real-world example in your notebook.</p></div></div></>;
}
function Mentor() {
  const [topic,setTopic]=useState("");
  const [messages,setMessages]=useState([{role:"mentor",text:"Hi! I'm your CyberMentor study guide. I can explain the topics in this seven-day course using beginner-friendly examples. Choose a suggested topic or type a question."}]);
  const suggestions=["Explain the CIA triad with an example","What is the difference between TCP and UDP?","Explain DNS like I'm a beginner","Encryption vs hashing"];
  function ask(value){const q=value.trim();if(!q)return;const lower=q.toLowerCase();let answer="Start with the definition, then connect it to a simple example. In cybersecurity, always ask: what are we protecting, what could go wrong, and what control reduces the risk? This built-in mentor uses prepared study guidance; connect an AI backend to enable open-ended AI responses.";
    if(lower.includes("cia"))answer="The CIA triad has three goals: Confidentiality (only authorized people can see data), Integrity (data stays accurate), and Availability (systems are accessible when needed). Example: a student portal should keep marks private, prevent unauthorized edits and remain available during result time.";
    else if(lower.includes("tcp")||lower.includes("udp"))answer="TCP is connection-oriented and provides reliable, ordered delivery. UDP has less connection overhead and does not guarantee delivery or order. Think of TCP as a tracked delivery and UDP as a quick message where timing may matter more than retransmission.";
    else if(lower.includes("dns"))answer="DNS is like the contacts app on your phone. You remember a website name, and DNS helps find the IP address computers use to reach it.";
    else if(lower.includes("hash")||lower.includes("encrypt"))answer="Encryption is reversible with the correct key and is used to protect data confidentiality. Hashing is designed to be one-way and produces a digest. Passwords should be stored using a purpose-built password hashing algorithm, not plain text.";
    setMessages(m=>[...m,{role:"you",text:q},{role:"mentor",text:answer}]);setTopic("");
  }
  return <><PageTitle eyebrow="YOUR STUDY COMPANION" title="Ask your CyberMentor" subtitle="Get simple explanations for the concepts in your learning path."/><div className="mentor-layout"><div className="mentor-chat"><div className="chat-header"><div className="mentor-avatar"><Brain/></div><div><b>CyberMentor study guide</b><small><span className="online-dot"/> Learning mode · prepared answers</small></div></div><div className="chat-messages">{messages.map((m,i)=><div key={i} className={`chat-message ${m.role}`}><span>{m.role==="mentor"?"CM":"YOU"}</span><p>{m.text}</p></div>)}</div><div className="suggestions">{suggestions.map(s=><button key={s} onClick={()=>ask(s)}>{s}</button>)}</div><form className="chat-input" onSubmit={e=>{e.preventDefault();ask(topic);}}><input value={topic} onChange={e=>setTopic(e.target.value)} placeholder="Ask a cybersecurity question..."/><button><ArrowRight size={17}/></button></form></div><div className="mentor-side panel"><Sparkles size={20}/><h3>Learn how you learn</h3><p>This starter version includes prepared explanations for common course topics. It does not connect to an external AI service yet.</p><div className="divider"/><b>For a real AI mentor</b><p>Connect an AI provider through a secure backend. Never place secret API keys in frontend code or commit them to GitHub.</p><span className="safe-tag"><LockKeyhole size={13}/> API key safety</span></div></div></>;
}
function Progress({percent,xp,completed,quizScores,totalLessons}) {
  return <><PageTitle eyebrow="YOUR ACTIVITY" title="Progress & achievements" subtitle="A clear view of what you've learned and what is still ahead."/><div className="progress-hero"><div><div className="eyebrow">COURSE COMPLETION</div><strong>{percent}%</strong><p>{completed.length} of {totalLessons} lessons completed</p></div><div className="progress-ring" style={{"--progress":`${percent*3.6}deg`}}><div>{percent}%</div></div></div><div className="stats-grid"><Stat icon={Trophy} label="Total XP" value={xp}/><Stat icon={BookOpen} label="Lessons completed" value={completed.length}/><Stat icon={Brain} label="Quizzes attempted" value={Object.keys(quizScores).length}/><Stat icon={ChartNoAxesColumnIncreasing} label="Average quiz score" value={Object.keys(quizScores).length?`${Math.round(Object.values(quizScores).reduce((a,b)=>a+b,0)/Object.keys(quizScores).length/5*100)}%`:"—"}/></div><div className="panel achievement-panel"><div className="eyebrow">ACHIEVEMENTS</div><h3>Milestones on your journey</h3><div className="achievement-grid">{[["First Steps",completed.length>=1,"Complete your first lesson"],["Network Navigator",completed.filter(x=>x.startsWith("2-")).length===5,"Complete all Day 2 lessons"],["Linux Learner",completed.filter(x=>x.startsWith("3-")).length===5,"Complete all Day 3 lessons"],["Security Mindset",completed.filter(x=>x.startsWith("4-")).length===5,"Complete all Day 4 lessons"],["Seven-Day Finisher",completed.length===totalLessons,"Complete every lesson"]].map(([name,earned,desc])=><div className={`achievement ${earned?"earned":""}`} key={name}><div><Trophy size={20}/></div><b>{name}</b><small>{earned?"Unlocked":desc}</small></div>)}</div></div></>;
}
