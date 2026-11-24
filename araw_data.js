/* =====================================================================
   ARAW – Academic Research and Writing · Mock exam data pool
   Based on the lecture slides (Chapters 1–9) of Prof. Dr. Christian Decker,
   the course summary and the official sample written test.

   Structure:
     partA  – true/false statement sets (3 statements each, 1 pt each + 2 bonus)
              {id, ch, topic, s:[{t: statement, a: true|false, e: explanation}]}
     partB  – sample pages with hidden mistakes. Markers in the text:
              [[errorId|marked text]]; errors:{id:{type, ch, label, expl}}
     partC  – topic interpretation cases with model answers and rubrics
     exams  – the fixed exams (official sample + mock exams 1–10)
   This file is loaded by araw_exam_trainer.html via <script src="...">.
   ===================================================================== */
window.ARAW_DATA = {
 version: "1.0",
 chapters: {"1":"Foundations","2":"Academic principles","3":"Research logic","4":"Research process","5":"Identification of a topic","6":"Sourcing of information","7":"Elements of a research paper","8":"Interpretation of a topic","9":"Structuring technique"},
 coreChapters: [4,7,8,9],

 // ---------- Fixed exams (official sample + mock exams 1–10) ----------
 exams: [
  {"id":"sample","title":"Official sample exam","sample":true,"partA":["S-A1","S-A2","S-A3","S-A4","S-A5"],"partB":"B00","partC":"C00"},
  {"id":"m01","title":"Mock exam 1","partA":["A4-01","A7-08","A8-01","A2-02","A3-05"],"partB":"B01","partC":"C02"},
  {"id":"m02","title":"Mock exam 2","partA":["A4-04","A7-03","A9-01","A1-01","A6-03"],"partB":"B02","partC":"C01"},
  {"id":"m03","title":"Mock exam 3","partA":["A4-07","A8-05","A9-03","A2-04","A5-02"],"partB":"B03","partC":"C03"},
  {"id":"m04","title":"Mock exam 4","partA":["A7-05","A8-07","A9-10","A3-02","A6-01"],"partB":"B04","partC":"C04"},
  {"id":"m05","title":"Mock exam 5","partA":["A4-12","A7-14","A8-09","A2-06","A3-04"],"partB":"B05","partC":"C05"},
  {"id":"m06","title":"Mock exam 6","partA":["A4-10","A7-12","A9-06","A1-03","A6-04"],"partB":"B06","partC":"C06"},
  {"id":"m07","title":"Mock exam 7","partA":["A4-05","A8-04","A9-12","A2-03","A5-03"],"partB":"B07","partC":"C07"},
  {"id":"m08","title":"Mock exam 8","partA":["A7-11","A8-10","A9-07","A3-06","A6-07"],"partB":"B08","partC":"C08"},
  {"id":"m09","title":"Mock exam 9","partA":["A4-13","A7-16","A8-08","A2-07","A1-04"],"partB":"B09","partC":"C09"},
  {"id":"m10","title":"Mock exam 10","partA":["A4-08","A7-06","A9-04","A3-03","A6-05"],"partB":"B10","partC":"C10"}
 ],

 // ---------- PART A: true/false sets ----------
 partA: [
  {id:"S-A1", ch:2, sample:true, topic:"Accuracy (official sample A1)", s:[
    {a:true, t:"Accuracy implies that rules and norms are obeyed.",
     e:"Correct. Accuracy is the first of the five academic principles, and its first part is the ‘observation of rules and norms’. This means you follow the rules that apply to academic work: correct spelling and grammar, correct referencing and citation, proper formatting and error-free calculations. The slide states it almost word for word: ‘Accuracy implies that rules and norms are obeyed.’"},
    {a:true, t:"Inter-subjective comprehensibility means that the results of a research paper can be comprehended, reproduced, retraced and/or understood by recipients.",
     e:"Correct. ‘Inter-subjective’ means ‘between different people’. Research is inter-subjectively comprehensible if other people (e.g. your instructor or other researchers) can follow, reproduce and check your results without having to trust you personally. This is what makes research objective rather than just your private opinion."},
    {a:true, t:"True and fair representation implies integrity, impartiality and honesty.",
     e:"Correct. True and fair representation is part of the principle of accuracy and means that you present your research honestly. Integrity, impartiality and honesty describe this attitude. In practice it means: the research problem is clearly stated, the assigned title is not changed, the topic is not secretly reinterpreted and no data or sources are manipulated."}]},
  {id:"S-A2", ch:2, sample:true, topic:"Clarity (official sample A2)", s:[
    {a:true, t:"Clearness implies avoiding ambiguities with respect to the research project and its conclusions.",
     e:"Correct. Clearness is one of the two parts of the principle of clarity. It means the reader should never have to guess what you mean: terms are defined, the method is described, the language is precise and the argumentation contains no contradictions. In short: avoid ambiguities in the project and its conclusions."},
    {a:true, t:"Proper composition implies a clear arrangement of the research project and its written documentation (e.g. research paper, thesis).",
     e:"Correct. Proper composition is the second part of clarity. It is about how well the work is structured: a logical outline, correctly numbered chapters, a strict focus on the topic and a recognisable ‘thread’ (German: ‘roter Faden’) that leads the reader through the paper."},
    {a:false, t:"Clearness implies presenting a research paper on white paper.",
     e:"False. ‘White paper, black font, plain design’ is a formatting rule for the cover page from Chapter 7 – it has nothing to do with clearness. Clearness is about content and language: avoiding ambiguities, defining terms and arguing consistently. The statement mixes up a formal layout rule with an academic principle."}]},
  {id:"S-A3", ch:3, sample:true, topic:"Induction and deduction (official sample A3)", s:[
    {a:false, t:"Deduction means that limited initial information will be extended, that is generalised.",
     e:"False. Extending limited information into a general statement is induction. Example: you observe 100 white swans and conclude ‘all swans are white’ – the information is generalised beyond what you actually saw. Deduction works the other way and keeps the information at the initial level."},
    {a:false, t:"Induction means that the generalised initial information will be kept at the same level.",
     e:"False. Keeping the information at the initial level is typical for deduction: you apply a general rule to a specific case (‘all humans are mortal → Socrates is mortal’) and do not claim more than the rule already contains. Induction instead extends (generalises) the information."},
    {a:false, t:"Induction can only be used for forecasts; deduction can only be used for explanations.",
     e:"False. Both ways of reasoning can be used for both purposes. Induction: observations → forecast of future events or → general rule (explanation). Deduction: general rule → forecast or → explanation of a specific case."}]},
  {id:"S-A4", ch:3, sample:true, topic:"Deductive-nomological model (official sample A4)", s:[
    {a:false, t:"An advantage of the deductive-nomological model is that probabilistic rules are common for business and social sciences.",
     e:"False. Probabilistic rules (‘with 95 % probability …’) belong to the inductive-statistical model, and the fact that such rules are common in business and social sciences is its advantage. The deductive-nomological model uses deterministic rules (always valid, e.g. ‘all humans are mortal’)."},
    {a:false, t:"A disadvantage of the deductive-nomological model is its probabilistic nature of explanation (forecast).",
     e:"False. A probabilistic explanation is the disadvantage of the inductive-statistical model, because it is never certain. The DN model is deterministic – that is its advantage. Its disadvantage is that such strict, always-valid rules are rare in business and social sciences."},
    {a:true, t:"The deductive-nomological model is also known as DN model, HO-Scheme, Hempel-Oppenheim model, Popper-Hempel model, Hempel’s model.",
     e:"Correct. The slide lists all these names. Hempel and Oppenheim formalised the model, Popper is also associated with it. ‘Nomological’ comes from Greek ‘nomos’ (law): the explanation is derived from a general law."}]},
  {id:"S-A5", ch:3, sample:true, topic:"Falsification and verification (official sample A5)", s:[
    {a:true, t:"Universal propositions are falsifiable.",
     e:"Correct. A universal proposition makes a claim about all cases, e.g. ‘All swans are white’. One single black swan is enough to disprove (falsify) it. It can never be finally proven, though, because you can never check every swan in the world."},
    {a:false, t:"Existential propositions are falsifiable.",
     e:"False. ‘Black swans exist’ cannot be disproved: even if you have not found one yet, one could still exist somewhere. Existential propositions (‘some …’, ‘… exist’) are therefore not falsifiable."},
    {a:true, t:"Existential propositions are verifiable.",
     e:"Correct. To prove (verify) ‘Black swans exist’, a single observed black swan is enough. Rule to remember: universal propositions are falsifiable but not verifiable; existential propositions are verifiable but not falsifiable."}]},
  {id:"A1-01", ch:1, topic:"Dimensions of the term ‘science’", s:[
    {a:true, t:"Science as an ‘activity’ refers to the systematic and methodical generation of knowledge (research), its transfer (lecturing) and its reception (studying).",
     e:"Correct. The term ‘science’ has several dimensions. As an activity, science is what people do: they generate new knowledge (research), pass it on (lecturing) and take it in (studying). Each of these happens systematically and methodically, i.e. according to a plan and with suitable methods."},
    {a:false, t:"Science as a ‘result’ refers to the subjects and objects, e.g. researchers and universities, that participate in the research, lecturing and study process.",
     e:"False. The people (scientists, students) and organisations (universities, institutes) involved in research describe the dimension ‘institution’. The dimension ‘result’ means the body of knowledge a discipline has produced, e.g. ‘the science of economics’ as the sum of everything that is known in economics."},
    {a:false, t:"The dimension ‘character’ describes a subjective, intuitive approach whose conclusions depend on the individual researcher.",
     e:"False. The ‘character’ of science is the exact opposite of subjective and intuitive. Science works systematically and methodically so that its conclusions are precise and can be checked by others (inter-subjectively comprehensible). That is why scientific results are called objective: they do not depend on who the researcher is."}]},
  {id:"A1-02", ch:1, topic:"Method, set of methods, methodology, theory", s:[
    {a:false, t:"A method is the doctrine of the suitability of particular methods for specific research problems.",
     e:"False. The study of which methods are suitable for which research problems is called methodology. A method itself is much more concrete: it is a systematic procedure or technique to gain knowledge, e.g. a survey, an interview or a regression analysis."},
    {a:false, t:"Methodology is the body of applied methods in a certain academic discipline.",
     e:"False. The body of methods that a discipline typically uses (e.g. all methods common in business studies) is called a ‘set of methods’. Methodology is one level higher: it is the doctrine (teaching) about which methods are suitable for which kind of research problem."},
    {a:false, t:"In its scientific meaning, a theory consists of unrealistic perceptions, unsubstantiated assumptions and/or speculations.",
     e:"False. This describes the everyday, negative meaning of ‘theory’ (‘that’s just a theory’). In its scientific meaning, a theory is a system of well-founded statements that explains facts or phenomena and the rules or laws behind them – e.g. a theory explaining why companies choose a certain capital structure."}]},
  {id:"A1-03", ch:1, topic:"Theories of truth", s:[
    {a:true, t:"According to the correspondence theory of truth, a statement is true if it corresponds with observable facts and circumstances of reality; its ideal type is empirical research.",
     e:"Correct. The correspondence theory says: a statement is true if it matches (‘corresponds with’) what we can observe in reality. Example: ‘It is raining’ is true if it is actually raining. Because truth is checked by observation, the typical (ideal) research type for this theory is empirical research, which collects data from reality."},
    {a:false, t:"According to the coherence theory of truth, a statement is true if all benevolent experts agree with it.",
     e:"False. ‘True if all benevolent experts agree’ is the consensus theory of truth. The coherence theory says something different: a statement is true if it fits logically and terminologically into an already established system of statements – like a new piece that fits into a puzzle without contradicting the other pieces."},
    {a:false, t:"The ideal type of research associated with the consensus theory of truth is empirical research.",
     e:"False. Empirical research belongs to the correspondence theory, because it checks statements against observed reality. The consensus theory (truth = agreement of all benevolent experts) is assigned to developmental research, e.g. designing a new product or process whose quality is judged by experts."}]},
  {id:"A1-04", ch:1, topic:"Epistemic objectives and ontology", s:[
    {a:false, t:"A research project titled ‘Motivations for expansion strategies of car manufacturers in China’ pursues a predictive epistemic objective.",
     e:"False. The word ‘motivations’ asks why car manufacturers expand to China – that is an explanatory objective (explaining causes). A predictive objective asks how something will be in the future, e.g. ‘Expected expansion strategies of car manufacturers in China’."},
    {a:true, t:"A prescriptive epistemic objective asks ‘How should something be done?’ and postulates guidance, objectives and rules for decisions.",
     e:"Correct. There are four epistemic objectives (aims of gaining knowledge): descriptive (How is something?), explanatory (Why is it so?), prescriptive (How should something be done?) and predictive (How will it be?). A prescriptive project gives recommendations, e.g. ‘Optimal expansion strategies for car manufacturers in China’."},
    {a:false, t:"From the ontological position of objectivism, social entities such as accounting are socially constructed phenomena that constantly change through social actions.",
     e:"False. This describes subjectivism (also called social constructionism): social phenomena like accounting are shaped by people and constantly change. Objectivism holds the opposite view: social entities exist independently of the people involved (‘Accounting exists independently of its social environment’)."}]},
  {id:"A1-05", ch:1, topic:"Models and research in practice", s:[
    {a:true, t:"A model is a simplification of reality or a simplified illustration of a real situation.",
     e:"Correct. A model leaves out details of reality to make it easier to understand or calculate. Example: a company’s financial statements are a model of the company – they show its economic situation in numbers, not the real factory, machines and people."},
    {a:false, t:"Reductive models are derived from theory via construction, e.g. a financial projection built on technical and economic rules.",
     e:"False. Building a model from theory is a constructive model: you start with general rules (e.g. technical and economic rules) and construct something that does not yet exist, e.g. a financial projection for a planned plant. A reductive model goes the other way: it starts from reality and simplifies it through abstraction, e.g. financial statements of an existing company."},
    {a:true, t:"Professional, university, institutional and collaborative research share common ground: they aim for knowledge and are characterised by objectivity and precision as well as a systematic and methodical approach.",
     e:"Correct. The four sample cases (a bank’s credit department, a university research group, a research institute working for the government, an association of interested parties) look different, but they share the same core: they want to gain knowledge, and they work objectively, precisely, systematically and methodically."}]},
  {id:"A2-01", ch:2, topic:"The five academic principles", s:[
    {a:true, t:"The five fundamental academic principles are accuracy, completeness, clarity, comparability and materiality.",
     e:"Correct. These are the five fundamental principles of Chapter 2. Each is a broad heading with sub-categories, e.g. accuracy contains observation of rules, inter-subjective comprehensibility, timeliness and true and fair representation."},
    {a:true, t:"The academic principles are not restricted to a specific academic discipline.",
     e:"Correct. The principles apply to all academic disciplines, not only to business studies. The slide adds that this classification is generally accepted, has been tested in law (e.g. in accounting) and is also used for reporting and forecasting."},
    {a:true, t:"The principle of completeness is closely linked to the principle of accuracy.",
     e:"Correct. Completeness and accuracy depend on each other. Example: if you ignore important sources (incomplete), your conclusions can easily be wrong or one-sided (inaccurate). That is why the slide states that the principle of completeness is closely linked to the principle of accuracy."}]},
  {id:"A2-02", ch:2, topic:"Inter-subjective comprehensibility", s:[
    {a:false, t:"Traceability means that the research question and/or the underlying hypothesis are formulated in an apprehensible way.",
     e:"False. Formulating the research question or hypothesis so that it can be understood is called perceptibility. Traceability means documenting your work in a way that allows others to retrace and reproduce your conclusions, e.g. by stating sources and describing calculations."},
    {a:false, t:"Reliability means that research output has to be generated with an adequate degree of preciseness with respect to the problem to be considered.",
     e:"False. ‘Adequate preciseness with respect to the problem’ is the definition of validity (are you measuring the right thing precisely enough?). Reliability means that results from experiments or empirical studies can be reproduced, i.e. repeating the study leads to the same result."},
    {a:true, t:"Falsifiability requires research output to be formulated in a way that it is disputable.",
     e:"Correct. A statement is falsifiable if it could, in principle, be proven wrong. Only then can others check and criticise it. ‘Sales rose by 10 % after the campaign’ can be checked; ‘the campaign had some kind of effect’ cannot. This idea comes from Karl Popper (Chapter 3)."}]},
  {id:"A2-03", ch:2, topic:"Timeliness and currentness", s:[
    {a:true, t:"Timeliness of references requires that references reflect the current status of publications in the field to be investigated.",
     e:"Correct. Timeliness of references means you use sources that represent the current state of research in your field. If you only use old literature, you may miss newer findings and your work no longer reflects the status quo."},
    {a:false, t:"Because of the principle of timeliness, ground-breaking theories must always be cited from the most recent textbook instead of the historic original source.",
     e:"False. The slide gives a warning (‘caveat lector’ = reader beware): major theories and ground-breaking ideas should be cited from their historic original source. Example: a famous theorem from 1958 is cited from the 1958 original, not only from a recent textbook that summarises it."},
    {a:true, t:"Using historic data can be appropriate, e.g. when working with time series or conducting longitudinal studies in order to derive trends.",
     e:"Correct. Up-to-date data is the rule, but there is a second ‘caveat lector’: if you want to show a development over time (time series, longitudinal study), you need historic data, otherwise you cannot derive a trend."}]},
  {id:"A2-04", ch:2, topic:"True and fair representation", s:[
    {a:true, t:"A change of the title of a research project is strictly forbidden.",
     e:"Correct. The title assigned to you must stay exactly as it is. Changing it, even slightly, violates true and fair representation, because you would then answer a different question than the one you were given."},
    {a:true, t:"Even if the title remains unchanged, an unauthorised reinterpretation of the underlying (implicit) topic violates true and fair representation.",
     e:"Correct. Every title implies an underlying topic. Even if you keep the title word for word, you must not quietly shift the topic to something else (e.g. writing about solar energy when the topic is windmill farms). This is a separate indicator from ‘no redrafting of the title’."},
    {a:true, t:"Data, references and other information have to be stated without any modifications that change the nature of the evidence.",
     e:"Correct. You must not change data, quotes or other information in a way that alters what they prove. Example: leaving out the negative years of a time series to make a trend look better is manipulation and violates true and fair representation."}]},
  {id:"A2-05", ch:2, topic:"Qualitative and quantitative completeness", s:[
    {a:true, t:"Qualitative completeness requires a comprehensive adaptation of the research topic and the consideration of all relevant information sources.",
     e:"Correct. Qualitative completeness is about content: all aspects that matter for the research question are covered, and all relevant information is used – existing literature and data, and if necessary new information from surveys or experiments."},
    {a:false, t:"Quantitative completeness means that all existing information sources such as literature and data are used.",
     e:"False. Using all relevant information sources is part of qualitative completeness. Quantitative completeness is about whether all formal building blocks are there: a research problem and question, a course of investigation, a conclusion, all required lists and an appropriate number of pages."},
    {a:false, t:"Compliance with an adequate number of pages is not part of the academic principles, since only the content matters.",
     e:"False. An adequate number of pages is explicitly part of quantitative completeness. A paper that is far too short or far too long according to the guidelines is incomplete in a formal sense, no matter how good the content is."}]},
  {id:"A2-06", ch:2, topic:"Comparability and materiality", s:[
    {a:true, t:"If a research paper does not reflect the status quo of the discipline, the principle of comparability can still be met if the deviations are explained.",
     e:"Correct. Comparability means your work can be compared with the current state of knowledge in your field (status quo). If you deviate from it, that is allowed – as long as you explain why. Only unexplained deviations violate comparability."},
    {a:false, t:"The expectancy of deviations from the status quo of the discipline is higher for a term paper than for a doctoral thesis.",
     e:"False. The more advanced the work, the more it is expected to go beyond the status quo. The order is: assignment → term paper → bachelor → master → doctoral thesis → postdoctoral research. A doctoral thesis must contribute something new; a term paper mainly reproduces the current state of knowledge."},
    {a:true, t:"Materiality requires an adequate reduction of inherent complexity, so that the conclusions form an ‘intellectual condensate’ that is sophisticated yet comprehensible.",
     e:"Correct. Materiality means focusing on what is essential. Reality is complex; a good paper reduces this complexity to the important points without becoming trivial. The result is an ‘intellectual condensate’ – demanding in content, but still understandable."}]},
  {id:"A2-07", ch:2, topic:"Clearness vs. proper composition", s:[
    {a:true, t:"Proper composition requires an uncompromising focus on the topic of the research paper without any excursions.",
     e:"Correct. Focus on the topic is part of proper composition. Every chapter must contribute to answering the research question; interesting side topics (‘excursions’) that do not help to answer it should be left out."},
    {a:false, t:"The perceptibility of a recurrent theme (‘thread’) is an element of clearness.",
     e:"False. The thread (German ‘roter Faden’) belongs to proper composition, because it is about structure: the reader should always see how each part leads to the next. Clearness is about avoiding ambiguities in terms, method, language and argumentation."},
    {a:false, t:"The definition of relevant terminology belongs to proper composition rather than to clearness.",
     e:"False. Defining the relevant terms belongs to clearness: the reader must know exactly what you mean by a term, otherwise the text is ambiguous. Proper composition is about the structure of the paper (outline, numbering, thread, focus)."}]},
  {id:"A2-08", ch:2, topic:"Rules and norms, decision usefulness", s:[
    {a:true, t:"Adequate decision usefulness requires conclusions that are self-contained, creative and realistic.",
     e:"Correct. Decision usefulness is part of materiality: your results should actually be useful. They should be self-contained (your own conclusions), creative (adding something of your own) and realistic (taking the real empirical or business environment into account)."},
    {a:true, t:"Observation of rules and norms covers spelling and grammar, referencing and citation, formatting and presentation, as well as algorithms and calculation rules.",
     e:"Correct. These are the four groups of rules and norms under accuracy. Spelling and grammar avoid misunderstandings, correct referencing allows others to check your work, formatting signals seriousness and correct calculations are the basis of credible results."},
    {a:false, t:"According to the principle of accuracy, appropriate formatting is irrelevant for academic credibility as long as the content is correct.",
     e:"False. The slide states that appropriate formatting signals seriousness and academic credibility. A paper with chaotic formatting looks careless, and readers will trust its content less – so formatting is part of the rules and norms of accuracy."}]},
  {id:"A3-01", ch:3, topic:"Induction and deduction: forecast vs. explanation", s:[
    {a:false, t:"Inductive reasoning in the form of an explanation means that a general rule is applied in order to derive an explanation.",
     e:"False. Applying a general rule to derive an explanation is deduction (general → specific). An inductive explanation works bottom-up: from observations of N events you conclude a general rule, law or principle."},
    {a:false, t:"Deductive reasoning in the form of a forecast means that observations of N events lead to a conclusion about one or more future events.",
     e:"False. Concluding something about the future from N observations is an inductive forecast. A deductive forecast starts with a general rule and applies it to the future, e.g. ‘All humans are mortal, all Greeks are human → all Greeks will die’."},
    {a:false, t:"Induction is described as a ‘top-down’ way of reasoning.",
     e:"False. Induction is ‘bottom-up’: from the particular (single observations) to the general (rule). ‘Top-down’ describes deduction: from the general rule to the particular case."}]},
  {id:"A3-02", ch:3, topic:"Syllogism", s:[
    {a:true, t:"In Aristotle’s syllogism ‘All humans are mortal. All Greeks are human. All Greeks are mortal.’, the statement ‘All Greeks are human.’ is the minor premise.",
     e:"Correct. A syllogism has three parts: the major premise contains the general rule (‘All humans are mortal’), the minor premise links a specific group to it (‘All Greeks are human’), and the conclusion follows from both (‘All Greeks are mortal’)."},
    {a:false, t:"In this syllogism, ‘humans’ is the terminus major.",
     e:"False. ‘Humans’ is the terminus medius (middle term): it appears in both premises and connects them, but disappears in the conclusion. The terminus major is ‘mortal’ (predicate of the conclusion), the terminus minor is ‘Greeks’ (subject of the conclusion)."},
    {a:true, t:"A statement of the form ‘Some S are not P’ is particular in quantity and negative in quality.",
     e:"Correct. Two features describe a statement: quantity (all = universal, some = particular) and quality (are = affirmative, are not = negative). ‘Some S are not P’ therefore is particular and negative."}]},
  {id:"A3-03", ch:3, topic:"Quantity and quality of statements", s:[
    {a:true, t:"Statements with the quantifier ‘all’ are universal propositions; statements with the quantifier ‘some’ are existential propositions.",
     e:"Correct. The quantifier tells you how many cases the statement is about. ‘All’ makes a universal proposition (about every case), ‘some’ makes an existential proposition (at least one case exists)."},
    {a:false, t:"The copula of a statement determines its quantity (universal or particular).",
     e:"False. The quantity (universal or particular) is determined by the quantifier (‘all’ or ‘some’). The copula is the linking verb (‘are’ / ‘are not’); it determines the quality (affirmative or negative)."},
    {a:false, t:"‘Some S are P’ is a universal affirmative statement.",
     e:"False. ‘Some’ makes the statement particular, not universal. ‘Some S are P’ is a particular affirmative statement. A universal affirmative statement would be ‘All S are P’."}]},
  {id:"A3-04", ch:3, topic:"Modus ponens and modus tollens", s:[
    {a:true, t:"Modus ponens follows the structure: If A, then B. A holds true. Therefore B.",
     e:"Correct. Modus ponens (‘the way that affirms by affirming’): if the rule ‘If A, then B’ holds and A is true, then B must be true. Example: ‘If the temperature is ≤ 0 °C, water is frozen. The temperature is ≤ 0 °C. Therefore the water is frozen.’"},
    {a:true, t:"Modus tollens follows the structure: If A, then B. B does not hold true. Therefore not A.",
     e:"Correct. Modus tollens works backwards from the consequence: if ‘If A, then B’ holds and B is not true, then A cannot be true either. Example: ‘If the temperature is ≤ 0 °C, water is frozen. The water is liquid. Therefore the temperature is not ≤ 0 °C.’"},
    {a:true, t:"Modus tollens is Latin for ‘the way that denies by denying’.",
     e:"Correct. ‘Tollere’ means ‘to take away / deny’. You deny the result (B) and thereby deny the condition (A). This is the logical basis of falsification: if a predicted consequence does not occur, the hypothesis is rejected."}]},
  {id:"A3-05", ch:3, topic:"Falsification and falsifiability", s:[
    {a:false, t:"‘Actions will have consequences.’ is a falsifiable statement because it makes a claim about cause and effect.",
     e:"False. The slide lists this sentence as non-falsifiable. It is so vague (which actions? which consequences?) that no observation could ever prove it wrong – so it says nothing that can be checked."},
    {a:false, t:"‘The German renewable energy act has a strong impact on the financial feasibility.’ is falsifiable because it refers to a specific law.",
     e:"False. Naming a specific law does not make the statement precise. The problem is the adjective ‘strong’: nobody can say when an impact counts as strong, so the statement cannot be disproved. The slide calls it meaningless for this reason."},
    {a:true, t:"Falsification is the act of disproving a hypothesis, whereas falsifiability means that a hypothesis has to be formulated in a way that it is disputable.",
     e:"Correct. Two related but different terms: falsification is the act of disproving a hypothesis (it actually happens). Falsifiability is a property of a statement: it is formulated precisely enough that it could be disproved."}]},
  {id:"A3-06", ch:3, topic:"Indicator and causal hypotheses", s:[
    {a:true, t:"An indicator hypothesis is generated by induction from observations and provides a statistical explanation of drivers (‘indicators’).",
     e:"Correct. An indicator hypothesis is created inductively from observations, e.g. ‘We observed no defaults for borrowers with an equity ratio above 50 %.’ It gives a statistical explanation (the indicator goes along with the result) but no logical reason why."},
    {a:false, t:"A causal hypothesis is derived by deduction and provides statistical proof of the relationship.",
     e:"False. A causal hypothesis is derived logically (deductively), e.g. ‘Equity absorbs losses, so more equity means less credit risk.’ It provides a logical explanation, but no statistical proof. Statistical evidence is what the indicator hypothesis provides."},
    {a:true, t:"‘Equity has a positive impact on credit risk because it serves as a buffer against losses.’ is an example of a causal hypothesis.",
     e:"Correct. The statement gives a logical reason (‘because it serves as a buffer against losses’) for the relationship. That reasoning is what makes it a causal hypothesis rather than an indicator hypothesis."}]},
  {id:"A3-07", ch:3, topic:"DN model and IS model", s:[
    {a:true, t:"The inductive-statistical model assumes time stability of the underlying function.",
     e:"Correct. The IS model assumes that the relationship it found (e.g. that postal code, job and family size predict payment behaviour) stays the same over time. If behaviour changes, e.g. in a crisis, the model may no longer be valid."},
    {a:false, t:"In the inductive-statistical model, all relevant influencing factors are captured, so that no unexplained residual remains.",
     e:"False. The IS model explicitly includes an ‘unexplainable residual’. Explanations in business and social sciences are usually logically incomplete: not all influences on human behaviour can be captured, so part of it always remains unexplained."},
    {a:false, t:"In the deductive-nomological model, the explanandum consists of the general rule and the condition.",
     e:"False. The general rule and the condition together form the explanans (Latin: ‘the explaining’). The explanandum (‘that which is to be explained’) is the conclusion. Example: explanans = ‘All humans are mortal’ + ‘All Greeks are human’; explanandum = ‘All Greeks are mortal’."}]},
  {id:"A3-08", ch:3, topic:"Philosophers of research logic", s:[
    {a:true, t:"Sir Karl Popper is associated with critical rationalism and falsificationism.",
     e:"Correct. Karl Popper argued that theories can never be finally proven (verified), only disproved (falsified). This view is called critical rationalism or falsificationism and is the background of the principle of falsifiability."},
    {a:true, t:"Carl Gustav Hempel is associated with the deductive-nomological model and the inductive-statistical explanation.",
     e:"Correct. Carl Gustav Hempel (together with Paul Oppenheim) formalised how scientific explanations are structured: the deductive-nomological model with deterministic laws and the inductive-statistical explanation with probabilistic rules."},
    {a:false, t:"Aristotle developed the inductive-statistical model.",
     e:"False. Aristotle (384–322 BCE) is associated with logical reasoning and the syllogism (‘All humans are mortal …’). The inductive-statistical model goes back to Hempel in the 20th century."}]},
  {id:"A5-01", ch:5, topic:"The candidate: motivation, qualification, information access", s:[
    {a:true, t:"Motivation, qualification and information access are candidate-related aspects that should be considered when identifying a topic.",
     e:"Correct. Before choosing a topic, you should look at yourself as the candidate: Are you interested in it (motivation)? Do you have the necessary skills (qualification)? Can you get the literature and data you need (information access)?"},
    {a:false, t:"‘Protected knowledge’ refers to information the candidate cannot access due to its proprietary nature.",
     e:"False. Information you cannot get because it belongs to someone else (e.g. internal company data) is proprietary knowledge. Protected knowledge means you can access the information but are not allowed to use it for legal reasons, e.g. because of confidentiality."},
    {a:false, t:"Topics that require knowledge from other disciplines, e.g. psychology or neurology, are an aspect of information access.",
     e:"False. Needing knowledge from other disciplines is a question of your abilities, so it belongs to qualification. Information access is about whether you can obtain literature and data, and whether proprietary or protected knowledge stands in the way."}]},
  {id:"A5-02", ch:5, topic:"Abstract vs. problem-based aims", s:[
    {a:false, t:"An abstract aim is derived from a (practical) problem, e.g. a company asking for a recommendation.",
     e:"False. An aim derived from a practical problem (e.g. a company wants a recommendation) is a problem-based aim. An abstract aim is theoretical: it starts from a theory or scientific question rather than from a concrete practical case."},
    {a:true, t:"Removing the tax-related assumptions of the Modigliani-Miller theorem in order to advance the theorem is an example of an abstract aim.",
     e:"Correct. The Modigliani-Miller theorem (1958) says that, under strict assumptions, the capital structure does not affect a company’s value. Removing some of these assumptions to develop the theory further is a purely theoretical goal – an abstract aim."},
    {a:false, t:"Problem-based aims typically offer extended room for the candidate’s own creativity.",
     e:"False. With problem-based aims, the topic and its interpretation are largely given by the instructor and the partner company, and you have to meet both parties’ expectations. That leaves limited room for creativity; abstract aims offer more."}]},
  {id:"A5-03", ch:5, topic:"Topic and title", s:[
    {a:true, t:"The title is the headline on the cover page; the topic is the subject matter of the research project.",
     e:"Correct. The title is what appears on the cover page; the topic is what the research is actually about. They can be identical, but they do not have to be – a title can also be catchy, with the topic stated in a subtitle."},
    {a:false, t:"Title and topic of a research project must always be identical.",
     e:"False. The slide shows three combinations: (1) title and topic are identical; (2a) only a title is named; (2b) a catchy title is named and the subtitle states the topic. So they do not always have to be identical."},
    {a:false, t:"‘Project finance of windmill farms under the German renewable energy act (EEG)’ is an example of a title that does not state the topic.",
     e:"False. This sentence clearly states the subject matter – it is the slide example where title and topic are identical. The example of a title that does not state the topic is the catchy ‘EEG – Blowin’ in the wind?’."}]},
  {id:"A5-04", ch:5, topic:"Idealised process and narrowing a topic", s:[
    {a:true, t:"In the idealised process of identifying a topic, developing an interpretation (‘aim’) comes before selecting a suitable research approach.",
     e:"Correct. The idealised process has six steps: 1 inspire yourself, 2 gather more information, 3 phrase a topic, 4 develop an interpretation (aim), 5 select a suitable research approach, 6 refine the research problem. You first decide what you want to find out, then how."},
    {a:false, t:"The more specific a topic becomes when it is narrowed down, the shorter its verbalisation tends to be.",
     e:"False. The more specific a topic becomes, the more details it contains, so the title gets longer. Example from the slides: ‘Marketing’ → ‘Visual stimuli in food marketing’ → ‘Colour design of semi-transparent packaging materials in natural and artificial light scenarios as visual stimuli in food marketing’."},
    {a:true, t:"Contacting instructors, screening high-class newspapers and conducting a literature research are techniques for finding a topic.",
     e:"Correct. The slide lists six techniques for finding a topic: brainstorming, contacting instructors, web search, screening newspapers and magazines, literature research and institutional contacts (e.g. from internships or student jobs)."}]},
  {id:"A5-05", ch:5, topic:"Verbalisation and process steps", s:[
    {a:true, t:"With regard to verbalising a topic, clearness implies a careful selection of terminology and proper composition implies careful phrasing with a strict focus on the topic.",
     e:"Correct. The principle of clarity from Chapter 2 also applies to the wording of a topic. Clearness: choose precise terms so the topic is unambiguous. Proper composition: phrase it carefully and keep a strict focus, without drifting into side topics."},
    {a:false, t:"In the idealised process, refining the research problem is the first step.",
     e:"False. Refining the research problem (writing a draft outline and research problem) is the last step (6). The first step is to inspire yourself, i.e. to gather information on potential topics."},
    {a:true, t:"Gathering information with respect to short-listed topics belongs to the step ‘gather more information’.",
     e:"Correct. In step 1 you collect information on many potential topics. In step 2 (‘gather more information’) you go deeper, but only for the topics that made it onto your short list."}]},
  {id:"A6-01", ch:6, topic:"Monographs and textbooks", s:[
    {a:true, t:"A monograph is a single piece of academic work that deals with a single subject or research problem and can have one or more authors.",
     e:"Correct. A monograph is a self-contained academic work on one single subject, e.g. a doctoral thesis or a specialised book. It can have one or several authors – what matters is that it deals with one subject in depth."},
    {a:false, t:"Introductory textbooks are suitable references for research papers due to their depth and sophistication.",
     e:"False. Introductory textbooks are written for students who are new to a field, so they only cover the basics. They are therefore problematic references. Monographs are suitable because of their depth; advanced textbooks are possible references."},
    {a:false, t:"Anthologies and encyclopaedias are typical examples of monographs.",
     e:"False. A monograph deals with one single subject as a self-contained work – the slide explicitly says ‘no anthology or encyclopaedia’. Anthologies collect texts by different authors (edited works), encyclopaedias cover many subjects."}]},
  {id:"A6-02", ch:6, topic:"Journal articles and working papers", s:[
    {a:true, t:"Articles in academic journals are subject to an editorial board and a review process.",
     e:"Correct. Academic journals appear periodically and have an academic standard: an editorial board decides on publication, and articles go through a review process (often a double-blind peer review). That is why journal articles are core sources."},
    {a:true, t:"Working papers have editors but no review process, which allows fast feedback.",
     e:"Correct. Working papers are published in a working paper series with editors, but without a review process. Their advantage is speed: authors get fast feedback on new research, which later often becomes a journal article or book chapter."},
    {a:true, t:"Working papers are also known as discussion papers or research papers.",
     e:"Correct. The slide lists ‘discussion paper’ and ‘research paper’ as other names for working papers. Typical examples are working paper series of universities, research institutes or central banks."}]},
  {id:"A6-03", ch:6, topic:"Citability", s:[
    {a:true, t:"Citability requires that a reference is published, identifiable and checkable.",
     e:"Correct. A source is citable only if it meets three criteria: it is published (e.g. by a publisher or institution), identifiable (e.g. via ISBN or DOI) and checkable (others can obtain it, e.g. in a library). Otherwise readers cannot retrace your work."},
    {a:true, t:"An ISBN, an ISSN or a DOI supports the identifiability of a reference.",
     e:"Correct. These are unique identification numbers: ISBN for books, ISSN for journals and series, DOI (digital object identifier) for online documents such as articles. They make it possible to find exactly the source you used."},
    {a:false, t:"Self-published references are never citable.",
     e:"False. The slide names self-publishing as one possible form of publication, besides publishing companies and credible institutions. A self-published work can therefore be citable – but you should check its credibility especially carefully."}]},
  {id:"A6-04", ch:6, topic:"Credibility and peer review", s:[
    {a:false, t:"Credibility describes whether a reference is published, identifiable and checkable.",
     e:"False. Published, identifiable and checkable are the three criteria of citability (can the source be cited at all?). Credibility asks how trustworthy a source is, based on the author’s background, the publishing context, quality assurance and the target group."},
    {a:false, t:"In a double-blind peer review, the referees know the name of the author, but the author does not know the referees.",
     e:"False. ‘Double-blind’ means that neither side knows the other: the editorial office removes the author’s name before sending the article to the referees and removes the referees’ names before sending their reviews back. This keeps the assessment objective."},
    {a:true, t:"In the peer review process, the final decision about publication is taken by the editorial board based on the referees’ reviews.",
     e:"Correct. The process: the author submits the article → the editorial office anonymises it → two referees (‘peers’) review it → the reviews go to the editorial board, which decides whether the article is published."}]},
  {id:"A6-05", ch:6, topic:"Citation indices and journal rankings", s:[
    {a:true, t:"If 300 citations in 2014 refer to the 200 articles that journal X published in 2012 and 2013, its Journal Impact Factor for 2014 is 1.5.",
     e:"Correct. The Journal Impact Factor (JIF) measures how often a journal’s recent articles are cited: citations in one year to articles from the two previous years, divided by the number of those articles. Here: 300 ÷ 200 = 1.5."},
    {a:true, t:"The h-index is a bibliometric measure developed by Jorge E. Hirsch.",
     e:"Correct. The h-index measures the influence of an author based on their citations. It was developed by Jorge E. Hirsch. Other examples on the slide: g-index, i10-index and the Social Science Citation Index."},
    {a:false, t:"The i10-index was developed by Leo Egghe.",
     e:"False. Leo Egghe developed the g-index. The i10-index is the measure used by Google Scholar (it counts how many publications of an author have been cited at least ten times)."}]},
  {id:"A6-06", ch:6, topic:"Grey literature", s:[
    {a:true, t:"Grey literature is literature that is not commercially published and distributed.",
     e:"Correct. ‘Grey’ literature is not sold through the normal book trade. It is published by governments, NGOs, universities, research institutes or companies themselves, e.g. working papers, reports or brochures."},
    {a:false, t:"Grey literature consists exclusively of commercially published textbooks.",
     e:"False. Grey literature is by definition not commercially published. Commercially published textbooks are the opposite. Examples of grey literature are working papers, conference proceedings, white papers, technical papers and business reports."},
    {a:false, t:"Financial statements and business reports cannot be grey literature because they are published by companies.",
     e:"False. Companies and business associations are explicitly listed as originators of grey literature, and financial statements and business reports are listed examples. Such sources can be used, but you should check their credibility."}]},
  {id:"A6-07", ch:6, topic:"Search logic: truncation and Boolean operators", s:[
    {a:true, t:"The search term ‘market*’ is an example of right-sided truncation.",
     e:"Correct. Truncation uses a placeholder (wildcard). With right-sided truncation the wildcard stands at the end: ‘market*’ finds all words starting with ‘market’ – marketing, markets, marketplace etc."},
    {a:false, t:"The search term ‘mode?ing’ retrieves both ‘modelling’ and ‘moderating’.",
     e:"False. ‘?’ replaces exactly one character, so ‘mode?ing’ only finds ‘modeling’. To find ‘modelling’, ‘modeling’ and ‘moderating’ you need multiple character truncation: ‘mode*ing’, where ‘*’ replaces any number of characters."},
    {a:true, t:"The search ‘project NOT finance’ retrieves records containing ‘project’ but not ‘finance’.",
     e:"Correct. NOT excludes a term: you get all records with ‘project’ except those that also contain ‘finance’. Compare: AND = both terms must appear; OR = at least one of them must appear."}]},
  {id:"A6-08", ch:6, topic:"Boolean operators, phrase search, thesaurus", s:[
    {a:false, t:"For the same two search terms, the Boolean operator OR returns fewer results than AND.",
     e:"False. OR is the broadest operator: a record is found if it contains either term, so you get more results. AND requires both terms in the same record, which narrows the search and returns fewer results."},
    {a:false, t:"A phrase search retrieves all records that contain the search words anywhere and in any order.",
     e:"False. That describes a simple search. A phrase search puts adjacent words in quotation marks, e.g. “project financing”, and only finds records containing exactly that phrase. This avoids irrelevant hits where the words appear separately."},
    {a:false, t:"A thesaurus is a list of synonyms of everyday words that replaces Boolean operators in a database search.",
     e:"False. A thesaurus is a structured list of index terms (descriptors) for a scholarly discipline, e.g. the STW Thesaurus for Economics. It helps you find the right keywords for your search; it does not replace Boolean operators."}]},
  {id:"A6-09", ch:6, topic:"Information sources and research approaches", s:[
    {a:true, t:"For literature-based research, academic literature is essential and empirical data is irrelevant.",
     e:"Correct. Literature-based research critically analyses what has already been written on a topic. Its material is therefore the literature itself; you do not collect your own data."},
    {a:true, t:"For theoretical research, empirical data might be relevant.",
     e:"Correct. Theoretical research develops or evaluates theories. Literature is essential; empirical data might be relevant, e.g. to illustrate or support a theoretical argument, but is not required."},
    {a:true, t:"For empirical (social) research, both academic literature and empirical data are essential.",
     e:"Correct. For empirical research you need both: literature to know the status quo and to derive hypotheses, and empirical data (numbers or interview material) to test them. Rule: literature is essential for every research approach."}]},
  {id:"A4-01", ch:4, topic:"Direct and indirect research questions", s:[
    {a:true, t:"A direct question is posed in a main clause that ends with a question mark.",
     e:"Correct. Questions can be differentiated by their sentence structure (syntax). A direct question stands in its own main clause and ends with a question mark, e.g. ‘How will the EEG influence the market risk of windmill farm project financings?’"},
    {a:true, t:"‘The aim of this research paper is to analyse how the German renewable energy act influences the market risk …’ is an example of an indirect research question.",
     e:"Correct. In an indirect question, the actual question (‘how the act influences …’) is embedded in a subordinate clause, and there is no question mark. This form is very common in the introduction of a paper: ‘The aim of this research paper is to analyse how …’."},
    {a:true, t:"A research question should be open-ended rather than closed-ended.",
     e:"Correct. A closed-ended question can be answered with yes or no, which is too little for a research paper. An open-ended question (‘How …?’, ‘To what extent …?’) requires a differentiated, individually formulated answer – exactly what a paper is supposed to deliver."}]},
  {id:"A4-02", ch:4, topic:"Closed-ended and open-ended questions", s:[
    {a:true, t:"Closed-ended questions allow only two possible answers, e.g. yes/no or true/false, and are therefore also called dichotomous questions.",
     e:"Correct. Closed-ended questions have only two possible answers (yes/no, true/false). ‘Dichotomous’ means ‘divided into two’. Example: ‘Does the EEG reduce market risk?’"},
    {a:false, t:"Open-ended questions are also called dichotomous questions.",
     e:"False. ‘Dichotomous’ (two possible answers) describes closed-ended questions. Open-ended questions cannot be answered with one of two fixed options; they require an individually formulated answer, e.g. ‘How does the EEG influence market risk?’"},
    {a:false, t:"The differentiation between direct and indirect questions is a differentiation according to the type of answer.",
     e:"False. There are two different ways to classify questions. By type of answer: closed-ended vs. open-ended. By syntax (sentence structure): direct (main clause with question mark) vs. indirect (subordinate clause). The statement mixes these two up."}]},
  {id:"A4-03", ch:4, topic:"Interrogative words", s:[
    {a:true, t:"Who, what, where, when, why and how are referred to as ‘the five w’s and one h’ or ‘the six w’s’.",
     e:"Correct. These six interrogative (question) words are marked on the slide and summarised as ‘the five w’s and one h’. They are useful for formulating research questions, e.g. ‘how’ for processes or ‘why’ for reasons."},
    {a:false, t:"The interrogative adverb ‘whence’ asks for the goal, whereas ‘whither’ asks for the source.",
     e:"False. It is the other way round. ‘Whence’ means ‘from where’ and asks for the source; ‘whither’ means ‘to where’ and asks for the goal. Both are old-fashioned interrogative adverbs listed on the slide."},
    {a:false, t:"‘What’ and ‘which’ are interrogative adverbs asking for the manner of something.",
     e:"False. ‘What’ and ‘which’ are interrogative pronouns (impersonal ones, while ‘who’ and ‘whom’ are personal). Pronouns stand for a thing or person. The word that asks for the manner (‘in what way?’) is the interrogative adverb ‘how’."}]},
  {id:"A4-04", ch:4, topic:"Depth of hypotheses", s:[
    {a:true, t:"A thesis (ad-hoc hypothesis) is a first thought that is yet to be developed and substantiated.",
     e:"Correct. Hypotheses are distinguished by how far they are developed (their depth). The first level is the thesis or ad-hoc hypothesis: a first thought or assumption that still needs to be worked out and backed up with arguments."},
    {a:false, t:"A working hypothesis is a fully formulated, substantiated, reflected and specified cause-effect relationship that can be empirically tested.",
     e:"False. This describes the most developed level, the scientific hypothesis. A working hypothesis is only a first draft of an assumed cause-effect relationship that still has to be reflected and refined. Order of depth: thesis → working hypothesis → scientific hypothesis."},
    {a:true, t:"‘Subsidy schemes have a positive impact on financings of windmill farms.’ is an example of a thesis (ad-hoc hypothesis).",
     e:"Correct. The sentence is a first, rough assumption: it names no mechanism (why should subsidies help?) and is not in if-then form. That is typical for a thesis (ad-hoc hypothesis). The scientific version on the slide explains the mechanism via reduced market risk."}]},
  {id:"A4-05", ch:4, topic:"Inner logic of hypotheses I", s:[
    {a:false, t:"‘Shoe sizes of human beings follow a bell-shaped Gaussian distribution.’ is a correlation hypothesis.",
     e:"False. The statement says how one characteristic (shoe size) is distributed in a population – that is a distribution hypothesis. A correlation hypothesis would need two variables that move together, e.g. inflation and unemployment."},
    {a:false, t:"‘The inflation rate is negatively correlated with the unemployment rate.’ is a difference hypothesis.",
     e:"False. ‘Negatively correlated’ means: when one variable rises, the other tends to fall. A statement about how two variables move together is a correlation hypothesis. A difference hypothesis compares groups instead."},
    {a:false, t:"‘There are more male students than female students who study engineering sciences.’ is a cause-effect hypothesis.",
     e:"False. The statement compares two groups (male vs. female students) and claims a difference between them – it is a difference hypothesis. It does not say that being male causes the choice of study, so it is not a cause-effect hypothesis."}]},
  {id:"A4-06", ch:4, topic:"Inner logic of hypotheses II", s:[
    {a:true, t:"‘Bank employees with university degrees tend to have a higher income.’ is an example of a cause-effect hypothesis.",
     e:"Correct. The degree is assumed to be the cause and the higher income the effect. A statement of the form ‘X leads to / goes along with a higher Y because of X’ is a cause-effect hypothesis – this is the slide example."},
    {a:false, t:"Cause-effect, distribution, correlation and difference hypotheses are distinguished according to the depth of hypotheses.",
     e:"False. These four types are distinguished by the inner logic of the hypothesis, i.e. what kind of relationship it states. The depth of a hypothesis is a different classification: thesis, working hypothesis and scientific hypothesis."},
    {a:false, t:"The term ‘hypothesis’ derives from the Latin word for ‘to prove’.",
     e:"False. ‘Hypothesis’ comes from the Greek ‘hypotithenai’, meaning ‘to suppose’. That fits its meaning: a hypothesis is an assumption that still has to be tested – not a proof."}]},
  {id:"A4-07", ch:4, topic:"Scientific hypotheses: definitions", s:[
    {a:true, t:"A nomological hypothesis is an empirically proved cause-effect relationship without space-time restriction and without probabilistic character.",
     e:"Correct. ‘Nomological’ comes from Greek ‘nomos’ = law. A nomological hypothesis is like a law of nature: it is always valid (no restriction to a place or a time) and not probabilistic (no ‘with 90 % probability’). Such hypotheses are typical for natural sciences."},
    {a:false, t:"A quasi-nomological hypothesis has a probabilistic character but no space-time restriction.",
     e:"False. It is the other way round. A quasi-nomological hypothesis is restricted in space and time (it is only valid in certain situations or periods, e.g. under German law), but it is not probabilistic – within these limits it always holds."},
    {a:false, t:"Statistical hypotheses are only typical for natural sciences.",
     e:"False. Statistical hypotheses (restricted in space and time and with a probabilistic character) are typical for natural sciences and for business and social sciences. The type that is typical only for natural sciences is the nomological hypothesis."}]},
  {id:"A4-08", ch:4, topic:"Scientific hypotheses: examples", s:[
    {a:true, t:"‘If the temperature is below or equal to zero degrees Celsius, then pure water is (will be) frozen.’ is an example of a nomological hypothesis.",
     e:"Correct. This is a law of nature: it holds everywhere and at all times (no space-time restriction) and always, not just with a certain probability. These are exactly the features of a nomological hypothesis."},
    {a:false, t:"‘If a company uses the legal form of a GmbH, then the liability of the shareholders is restricted to their signed equity participations.’ is an example of a statistical hypothesis.",
     e:"False. This is the slide example of a quasi-nomological hypothesis. It is restricted in space and time (it only applies under German company law as it currently stands), but it is not probabilistic – shareholders’ liability is always limited, not ‘with 95 % probability’."},
    {a:true, t:"Quasi-nomological hypotheses are typical for business and social sciences.",
     e:"Correct. Business and social sciences deal with rules made by people (laws, contracts, institutions). These rules are valid only in certain places and periods, but within them they apply reliably – which is exactly what a quasi-nomological hypothesis describes."}]},
  {id:"A4-09", ch:4, topic:"Research question and hypothesis; why a thesis is called a thesis", s:[
    {a:true, t:"A research hypothesis formulates one or more proposed statements that provide answers to the research problem.",
     e:"Correct. The research question asks, the research hypothesis proposes an answer. Example: question ‘How will the EEG influence the market risk …?’ → hypothesis ‘If a windmill farm is financed under the EEG, then the market risk will be reduced …’."},
    {a:false, t:"A thesis is called a ‘thesis’ because it presents a definite solution to a problem.",
     e:"False. A thesis offers a possible explanation for a problem, not a final solution. That is why the conclusion of a research paper is called a potential answer – a hypothesis or ‘thesis’ that could still be refuted later."},
    {a:false, t:"In the windmill example, the research question is phrased as an if-then statement, while the research hypothesis is phrased as a direct question.",
     e:"False. It is the other way round. The research question is a question (directly with a question mark or indirectly with ‘The aim of this paper is to analyse how …’). The research hypothesis is the if-then statement that answers it."}]},
  {id:"A4-10", ch:4, topic:"Research approaches: philosophical and developmental", s:[
    {a:true, t:"Philosophical research comprises literature-based research and theoretical research.",
     e:"Correct. Research approaches are grouped into philosophical research (literature-based and theoretical), developmental research and empirical research (quantitative and qualitative), plus mixed approaches that combine them."},
    {a:false, t:"Literature-based research aims at the generation of new theories or the evaluation of existing theories.",
     e:"False. Generating new theories or evaluating existing ones is theoretical research. Literature-based research critically reflects and analyses the existing state of knowledge, e.g. by comparing and evaluating what different authors have written on a topic."},
    {a:true, t:"Developmental research covers the engineering, design or creation of a new process, product or artefact, e.g. software or a business plan.",
     e:"Correct. Developmental research creates something new: a process, a product or an artefact. The slide gives examples such as machinery, software, paintings, music, fashion and also a business plan."}]},
  {id:"A4-11", ch:4, topic:"Empirical and mixed research approaches", s:[
    {a:true, t:"Quantitative research is the collection and analysis of numerical data, e.g. statistical or experimental data.",
     e:"Correct. Quantitative research works with numbers: it collects numerical data (e.g. statistics, experimental results, answers on a rating scale) and analyses them, often with statistical methods."},
    {a:false, t:"Qualitative research is the collection and analysis of standardised numerical data, e.g. from statistical offices.",
     e:"False. Standardised numerical data belongs to quantitative research. Qualitative research collects and analyses non-standardised data such as interview protocols, where people answer in their own words."},
    {a:false, t:"Mixed research approaches are not permissible, because a research project has to commit to exactly one research approach.",
     e:"False. Mixed research approaches are explicitly allowed. They combine several approaches, e.g. interviews to understand a problem, a literature analysis for the status quo, a theoretical solution, a business plan to put it into practice and statistical data to validate it."}]},
  {id:"A4-12", ch:4, topic:"Scientific styles: process steps", s:[
    {a:true, t:"In the theoretical solution-driven style, the hypothesis is formulated after the theoretical analysis of the research question.",
     e:"Correct. In the theoretical solution-driven style, the hypothesis is the result of the work: 1 identify the problem, 2 formulate the research question, 3 analyse it theoretically, 4 formulate a hypothesis (the answer), 5 summarise and discuss."},
    {a:false, t:"In the hypothesis-driven style, the hypothesis is formulated only after the theoretical analysis and the empirical survey.",
     e:"False. In the hypothesis-driven style, the hypothesis comes at the very beginning, together with the research question (step 3), and the analysis then tests it. Formulating the hypothesis after the analysis is what the solution-driven styles do."},
    {a:false, t:"The empirical solution-driven style ends with the formulation of a hypothesis and does not include an empirical analysis.",
     e:"False. The empirical solution-driven style goes further than the theoretical one: after the hypothesis it includes an empirical analysis of the hypothesis (step 5), its acceptance or falsification (step 6) and the summary and discussion (step 7)."}]},
  {id:"A4-13", ch:4, topic:"Hypothesis-driven style: problems", s:[
    {a:true, t:"A problem of the hypothesis-driven style is that one has to be quite experienced to identify a suitable hypothesis prior to the analysis.",
     e:"Correct. In the hypothesis-driven style you have to state a hypothesis before you have analysed anything. That requires a lot of experience; the slide asks: ‘How can one produce a hypothesis at the starting point of a research project?’"},
    {a:false, t:"The hypothesis-driven style typically reflects the working style of business reality.",
     e:"False. The slide states the opposite: the hypothesis-driven style typically does not reflect business reality. In business practice, you usually face a new problem with little information, analyse it first and only then develop a solution."},
    {a:true, t:"In the humanities, a question linked to the available literature is typically presented, a hypothesis is generated and the paper discusses it (hypothesis-driven style).",
     e:"Correct. In the humanities, a question usually builds on existing literature; the researcher proposes a hypothesis (e.g. an interpretation of a text) and the paper discusses it. That is the hypothesis-driven style."}]},
  {id:"A4-14", ch:4, topic:"Scientific styles and disciplines", s:[
    {a:true, t:"In business sciences, typically a completely new problem with no or limited information has to be solved, so a solution-driven style is applied.",
     e:"Correct. Business sciences often deal with new, practical problems for which little information exists. You therefore analyse the problem first (theoretically and/or empirically) and develop the hypothesis as the result – the solution-driven style."},
    {a:false, t:"The theoretical solution-driven style comprises seven process steps including the acceptance or falsification of the hypothesis.",
     e:"False. The theoretical solution-driven style has five steps: problem, question, theoretical analysis, hypothesis, summary/discussion. There is no acceptance or falsification step, because no empirical test takes place. Seven steps belong to the empirical solution-driven and the hypothesis-driven style."},
    {a:false, t:"The scientific style is identical across all disciplines, because all sciences follow the same formal requirements.",
     e:"False. The slide says: ‘Different sciences have different scientific styles.’ Each discipline has its own research requirements and traditions, which lead to different research approaches and formal requirements (e.g. law vs. natural sciences vs. business)."}]},
  {id:"A4-15", ch:4, topic:"Scientific styles: common steps and use", s:[
    {a:true, t:"The first two process steps of all three scientific styles are the identification of a research problem (‘aim’) and the formulation of a research question.",
     e:"Correct. All three styles start the same way: 1 identify the research problem (aim), 2 formulate the research question. They differ only afterwards, mainly in when the hypothesis is formulated and whether it is tested empirically."},
    {a:true, t:"In the empirical solution-driven style, the sixth step is the acceptance or falsification of the hypothesis.",
     e:"Correct. The seven steps of the empirical solution-driven style are: problem, question, theoretical analysis, hypothesis, empirical analysis, acceptance or falsification of the hypothesis (step 6), summary and discussion."},
    {a:true, t:"The theoretical solution-driven style is frequently used for student assignments and student research projects.",
     e:"Correct. It is the most common style for student work, because it needs no empirical survey and no hypothesis in advance. The empirical solution-driven style is used for more advanced projects, the hypothesis-driven style only rarely in business and social sciences."}]},
  {id:"A7-01", ch:7, topic:"The four sections of a research paper", s:[
    {a:true, t:"A research paper consists of four sections: addments, directories, (main) body and annex.",
     e:"Correct. Every research paper is divided into four sections, in this order: 1 addments (e.g. cover page), 2 directories (e.g. outline, lists), 3 main body (the actual text) and 4 annex (e.g. list of references, appendix, declaration of originality)."},
    {a:false, t:"The cover page belongs to the directories.",
     e:"False. The cover page belongs to the addments, the first section, together with the abstract, foreword, preface and dedication. The directories (2nd section) are the outline and the lists of figures, tables, abbreviations, symbols etc."},
    {a:false, t:"The list of references belongs to the directories.",
     e:"False. The list of references comes after the main body and belongs to the annex (4th section), together with glossary, appendix and declaration of originality. Directories are the lists that come before the main body (outline, list of figures etc.)."}]},
  {id:"A7-02", ch:7, topic:"Page numbering", s:[
    {a:false, t:"Addments and directories are numbered with Arabic numerals, starting with page one.",
     e:"False. Addments and directories (everything before the main body) are numbered with Roman numerals (I, II, III …). This way the main body can start with page 1."},
    {a:false, t:"The main body is numbered with Roman numerals, continuing the numbering of the directories.",
     e:"False. The main body uses Arabic numerals (1, 2, 3 …) and starts again at page one (‘– 1 –’). It does not continue the Roman numbering of the directories."},
    {a:false, t:"The annex must always be numbered with Roman numerals.",
     e:"False. For the annex, both Arabic and Roman numerals are possible. Only addments and directories (Roman) and the main body (Arabic) have a fixed numbering type."}]},
  {id:"A7-03", ch:7, topic:"Structural elements always used", s:[
    {a:true, t:"Cover page, outline, list of figures/tables, list of abbreviations, main body, bibliography/list of references and declaration of originality are always used in research papers.",
     e:"Correct. According to the table on the slides, these seven elements are used in every type of paper (term paper, thesis, dissertation). Note the list of figures/tables and the declaration of originality – they are easy to forget."},
    {a:false, t:"An abstract is a mandatory element of a term paper.",
     e:"False. An abstract is not used in a term paper (‘No’ in the table). It is optional for thesis projects and dissertations. That is why an abstract in a term paper can be a mistake in Part B of the exam."},
    {a:true, t:"A list of court decisions, a list of symbols and a list of formulas are optional structural elements.",
     e:"Correct. These lists are only needed when the paper contains such elements, e.g. a list of court decisions for a legal topic or a list of formulas for a quantitative paper. They are optional for all types of papers."}]},
  {id:"A7-04", ch:7, topic:"Selectively used elements and glossary", s:[
    {a:true, t:"Foreword, preface and dedication are structural elements selectively used in published academic research such as monographs or journal articles.",
     e:"Correct. There are three types of structural elements: always used, optionally used and selectively used. Foreword, preface, dedication and indices are selectively used – only in published research such as books, not in student papers."},
    {a:false, t:"An index of names and a subject index are standard elements of every term paper.",
     e:"False. An index of names and a subject index are only used selectively in published academic research (e.g. books). In a term paper they would be out of place."},
    {a:false, t:"A glossary is a mandatory element of every term paper.",
     e:"False. A glossary is uncommon in term papers, rarely used in thesis projects and occasionally used in dissertations. It is only needed when a paper uses many technical terms that readers may not know."}]},
  {id:"A7-05", ch:7, topic:"Cover page", s:[
    {a:true, t:"The cover page of a term paper should state the course title, the name of the instructor and the semester.",
     e:"Correct. A term paper is written within a course, so the cover page must show the course title, the instructor and the semester (e.g. ‘summer term 2026’). Every cover page also contains the title, faculty, author’s name, matriculation number, address and date of submission."},
    {a:false, t:"Company logos and design elements on a cover page signal professionalism and are therefore appropriate.",
     e:"False. Company logos, distracting pictures and design elements are explicitly listed as inappropriate. A cover page should be plain: black font on white paper."},
    {a:true, t:"Titles and names of referees are only stated on the cover page of a thesis project.",
     e:"Correct. A thesis is assessed by referees (examiners), so their titles and names appear on the cover page. A term paper names the instructor of the course instead."}]},
  {id:"A7-06", ch:7, topic:"Abstract", s:[
    {a:true, t:"An abstract should not exceed a maximum of one page.",
     e:"Correct. An abstract is a short overview of the whole paper. The general rule is: no longer than one page."},
    {a:true, t:"The elements of an abstract are a short summary, keywords and a JEL classification.",
     e:"Correct. The three elements are: a short summary of the paper (aim, approach, results), keywords describing its content and a JEL classification (subject codes of the Journal of Economic Literature)."},
    {a:true, t:"An abstract serves purposes such as filing and archiving and informing an examination board or an editor’s advisory board.",
     e:"Correct. An abstract helps others decide quickly what a paper is about: for filing and archiving, for an examination board and for the advisory board of an editor (e.g. a journal). That is why it must summarise the paper itself, not just give background."}]},
  {id:"A7-07", ch:7, topic:"Keywords and JEL classification", s:[
    {a:true, t:"JEL stands for ‘Journal of Economic Literature’.",
     e:"Correct. The JEL classification system was developed by the Journal of Economic Literature (American Economic Association). It assigns papers to subject areas of economics using letter-number codes."},
    {a:true, t:"JEL codes such as G21, G32, H23 and O38 classify a paper according to subject areas of economics.",
     e:"Correct. Each code stands for a subject area, e.g. G21 = banks, G32 = financing policy and financial risk, H23 = externalities and environmental taxes/subsidies, O38 = government policy. A paper usually gets several codes."},
    {a:false, t:"Keywords should be as general as possible, e.g. ‘financial’, in order to reach a broad audience.",
     e:"False. Keywords should describe the specific content so that the paper can be found and filed correctly. The slide example uses precise keywords (‘project finance, windmill farms, renewable energy, EEG, subsidies’). A word like ‘financial’ fits thousands of papers and is useless as a keyword."}]},
  {id:"A7-08", ch:7, topic:"Decadal numbering", s:[
    {a:true, t:"In the decadal numbering system, no full stop is placed after the last decadal cipher (correct: ‘2.1 Major features’).",
     e:"Correct. In the decadal system, chapters are numbered 1, 1.1, 1.1.1 … without a full stop at the end. ‘2.1 Major features’ is correct; ‘2.1. Major features’ is a formal mistake (a classic in Part B)."},
    {a:true, t:"If a chapter is subdivided, there have to be at least two subchapters.",
     e:"Correct. You only subdivide a chapter if it has at least two parts. A single subchapter makes no sense – if there is only 2.1, the content simply belongs to chapter 2 itself."},
    {a:true, t:"An outline ‘2 … / 2.1 … / 3 …’ contains a major mistake, because a subdivided chapter needs at least two subchapters.",
     e:"Correct. Subchapter 2.2 is missing. The slides call this incomplete structuring a ‘major mistake’, no matter how long chapter 2.1 is."}]},
  {id:"A7-09", ch:7, topic:"Alphanumerical numbering", s:[
    {a:false, t:"In the alphanumerical numbering system, deep levels are written as long ciphers such as ‘2.1.3.1.1.2’.",
     e:"False. Long ciphers like 2.1.3.1.1.2 are the weakness of the decadal system. The alphanumerical system avoids them by switching symbols at each level (A. → I. → 1. → a) → aa) → (1)), so a deep level is written simply as ‘(2)’."},
    {a:false, t:"Alphanumerical numbering systems are permitted by all examination regulations.",
     e:"False. The slide warns that some examination regulations do not allow the alphanumerical system. Check your regulations before you choose it."},
    {a:false, t:"‘1 Introduction – 1.1 Research problem – 1.2 Research methodology’ is an example of an alphanumerical numbering system.",
     e:"False. This is the decadal system (Arabic numbers separated by points). An alphanumerical outline uses letters and Roman numerals at the top levels, e.g. ‘A. Introduction – I. Research problem – II. Research methodology’."}]},
  {id:"A7-10", ch:7, topic:"Main body principles and intermediate text", s:[
    {a:true, t:"Headlines of the chapters in the main body are numbered and the numbering corresponds with the outline.",
     e:"Correct. In the main body, every chapter headline carries its number, and the numbers and wording match the outline exactly. The reader must find the same structure in the outline and in the text."},
    {a:true, t:"The structure of the main body has to correspond with the logic of the research question.",
     e:"Correct. The chapters should follow the logic of the research question. Example: for a functional question (how do A and B influence each other?) there should be chapters on A, on B and on the influence in both directions."},
    {a:false, t:"Intermediate text, i.e. paragraphs without a numbered headline (e.g. between ‘2’ and ‘2.1’), is required by all instructors to provide orientation.",
     e:"False. Instructors differ: some require or tolerate intermediate text (‘journalistic’ or ‘narrative’ style), others see it as redundant and non-academic (‘academic hard style’). Clarify your instructor’s position before you start writing."}]},
  {id:"A7-11", ch:7, topic:"Mistakes of numbering and structuring", s:[
    {a:true, t:"An unnumbered section ‘General considerations’ placed between ‘2 Dynamic capital budgeting methods’ and ‘2.1 Net present value method’ is an example of incomplete numbering.",
     e:"Correct. A text block without its own number between a chapter and its first subchapter makes the numbering incomplete – the reader cannot find this part in the outline."},
    {a:false, t:"The numbering ‘2.1 General considerations, 2.2 Net present value method, 2.3 Annuity method, 2.4 Internal rate of return’ is complete and logical.",
     e:"False. The numbering is complete, but the structure is illogical: ‘General considerations’ and the individual methods stand on the same level, although the methods are sub-points of one group. Same-level chapters should be of the same kind."},
    {a:true, t:"‘2.1 General considerations – 2.2 Methods – 2.2.1 Net present value method – 2.2.2 Annuity method – 2.2.3 Internal rate of return’ is complete and logical.",
     e:"Correct. This is the slide’s correct solution: the general considerations stand alone at level 2.1, and the three methods are grouped under ‘2.2 Methods’ as 2.2.1–2.2.3. The numbering is complete and the levels are logical."}]},
  {id:"A7-12", ch:7, topic:"List of abbreviations I", s:[
    {a:true, t:"Abbreviations should be explained in the paragraph in which they are introduced and additionally specified in a list of abbreviations.",
     e:"Correct. Two steps: (1) when you use an abbreviation for the first time, write the term in full and add the abbreviation, e.g. ‘export credit agencies (ECA)’; (2) list it in the list of abbreviations."},
    {a:false, t:"Self-made abbreviations such as ‘NIEF’ for ‘New institutional economic framework’ are recommended to keep the text short.",
     e:"False. Self-made abbreviations are on the ‘Do not’ list. Readers do not know them and have to look them up constantly, which makes the text harder to read."},
    {a:false, t:"Commonly known abbreviations such as ‘etc.’ or ‘no.’ must be listed in the list of abbreviations.",
     e:"False. Commonly known abbreviations such as ‘etc.’, ‘e.g.’ or ‘no.’ are not listed. The list of abbreviations only contains abbreviations that are specific to your field, e.g. ‘ECA’."}]},
  {id:"A7-13", ch:7, topic:"List of abbreviations II", s:[
    {a:false, t:"Abbreviating general terminology, e.g. ‘SCM’ for ‘Supply Chain Management’, is recommended to save space.",
     e:"False. Abbreviating general terminology is a ‘Do not’. Terms such as ‘supply chain management’ should be written out, because an abbreviation like ‘SCM’ only saves a few letters but makes the text harder to read."},
    {a:true, t:"Commonly used abbreviations of the field of study, e.g. ‘ECA’ for ‘export credit agency’, should be listed in the list of abbreviations.",
     e:"Correct. Abbreviations that are standard in your field, such as ‘ECA’ for ‘export credit agency’, may be used. They are introduced in the text and listed in the list of abbreviations."},
    {a:true, t:"When abbreviating names of institutions, legal form and location should be added, e.g. ‘VW’ for ‘Volkswagen AG, Wolfsburg/Germany’.",
     e:"Correct. For institutions, the list of abbreviations should give the full name including legal form and location, e.g. ‘VW – Volkswagen AG, Wolfsburg/Germany’, so the institution can be identified unambiguously."}]},
  {id:"A7-14", ch:7, topic:"Figures and tables I", s:[
    {a:true, t:"Figures and tables need an individual and numbered headline, typically at the top.",
     e:"Correct. Each figure or table needs its own number and headline, typically above it, e.g. ‘Fig. 3: Development of mobile payment transactions in Germany’. The numbering also allows a list of figures/tables."},
    {a:false, t:"A chapter may end with a figure or table as long as the figure has a reference.",
     e:"False. A chapter should neither start nor end with a figure or table, whether or not it has a source. A figure must be introduced and discussed in the text; ending a chapter with it leaves it uncommented."},
    {a:true, t:"Figures and tables have to be introduced and discussed in the text of the main body.",
     e:"Correct. Figures and tables do not speak for themselves. The text must refer to them (‘as Fig. 3 shows …’) and explain what the reader should learn from them."}]},
  {id:"A7-15", ch:7, topic:"Figures and tables II; list of figures", s:[
    {a:true, t:"A figure, its headline and its reference have to be placed together on a single page.",
     e:"Correct. A figure must not be torn apart by a page break: the figure, its headline and its source belong together on one page, otherwise it is hard to read."},
    {a:false, t:"The reference (source) of a figure is typically placed above its headline.",
     e:"False. The usual order is: headline at the top, figure in the middle, reference (source) at the bottom."},
    {a:false, t:"Figures and tables must always be listed in one combined ‘list of figures and tables’.",
     e:"False. There are two options: one combined ‘list of figures and tables’ (option 1) or a separate list of figures and a separate list of tables (option 2). In both cases figures and tables are numbered and their page numbers are given."}]},
  {id:"A7-16", ch:7, topic:"Bibliography vs. list of references", s:[
    {a:true, t:"A list of references lists only those information sources that have been cited in the text.",
     e:"Correct. A list of references (also called ‘sources list’) only includes what you actually cited in the text. Every entry can be found as a reference somewhere in the paper."},
    {a:true, t:"A bibliography lists information sources that have been used in the research process, i.e. cited as well as not cited in the text.",
     e:"Correct. A bibliography is broader: it includes all sources you used during the research, both those cited in the text and those you read but did not cite."},
    {a:false, t:"‘List of references’ and ‘bibliography’ are synonyms with identical content.",
     e:"False. They differ in scope: the bibliography lists cited and uncited sources used in the research process, the list of references only lists sources cited in the text."}]},
  {id:"A7-17", ch:7, topic:"Structure of a bibliography", s:[
    {a:false, t:"With parenthetical referencing, a structured bibliography with separate segments for monographs, articles and legal texts is mandatory.",
     e:"False. With parenthetical referencing (author and year in brackets in the text, e.g. ‘(Becker 2023)’), the reader looks up the source by name, so the list is arranged in one alphabetical order. A structured list with segments fits footnote referencing with full information."},
    {a:true, t:"Within each segment of a structured bibliography, sources are sorted first alphabetically and then by date of appearance in ascending order.",
     e:"Correct. A structured list has segments (a monographs, b articles, c articles of anonymous authors, d legal texts, e other sources). Within each segment you sort alphabetically by author and, for the same author, by date in ascending order (oldest first)."},
    {a:false, t:"In a structured bibliography, legal texts are listed together with monographs in one segment.",
     e:"False. Legal texts form their own segment (d) in a structured bibliography. Monographs are segment (a). Mixing them would defeat the purpose of the structure."}]},
  {id:"A7-18", ch:7, topic:"Glossary and appendix", s:[
    {a:false, t:"A glossary lists technical terms in the order of their appearance in the text and explains each of them in a single word.",
     e:"False. Glossary terms are listed in alphabetical order (so the reader can find them quickly) and each is explained in two to four sentences. One word would not explain anything."},
    {a:false, t:"Terms of common knowledge should be included in the glossary to ensure completeness.",
     e:"False. Terms of common knowledge are explicitly not listed. A glossary only explains technical terms, industry jargon or company-specific terms that readers may not know."},
    {a:true, t:"Extensive elements such as questionnaires, interview protocols and large amounts of data should be attached as an appendix.",
     e:"Correct. Extensive material would interrupt the main text, so it goes into the appendix: e.g. questionnaires, interview protocols, large data sets, contracts, financial statements, maps or special graphics."}]},
  {id:"A7-19", ch:7, topic:"Declaration of originality and storage media", s:[
    {a:true, t:"Examination regulations forbid plagiarism and collusion and require a declaration of originality.",
     e:"Correct. In the declaration of originality you confirm that you wrote the paper yourself and did not plagiarise (copy without citing) or collude (work together without permission). The examination board prosecutes violations."},
    {a:true, t:"Electronic submission of the thesis and its sources serves archiving (‘paperless office’) as well as plagiarism and collusion checking.",
     e:"Correct. Often the paper and its sources must also be submitted electronically (Word and PDF, on a data carrier or via upload). This is used for archiving and for checking plagiarism and collusion with software."},
    {a:false, t:"The declaration of originality is an optional element of a term paper.",
     e:"False. The declaration of originality is always used – in term papers, thesis projects and dissertations alike."}]},
  {id:"A7-20", ch:7, topic:"List of symbols and list of formulas", s:[
    {a:true, t:"Symbols should be explained in the paragraph in which they are introduced and additionally specified in a list of symbols.",
     e:"Correct. Symbols (e.g. ‘σ’ for volatility) are handled like abbreviations: explain them where they first appear and additionally list them in a list of symbols."},
    {a:false, t:"Formulas should not be numbered in the text, because the list of formulas replaces the numbering.",
     e:"False. Each formula is numbered in the text, e.g. ‘Formula 21: EL = PD · LS · EAD’, so you can refer to it later. A list of formulas is optional and cannot replace this numbering."},
    {a:false, t:"A list of formulas is mandatory for every quantitative term paper.",
     e:"False. A list of formulas is optional (common in quantitative work). The slide advises checking with your instructor or research advisor whether one is required."}]},
  {id:"A8-01", ch:8, topic:"Process of interpretation", s:[
    {a:true, t:"The interpretation technique consists of three process steps: negative interpretation, positive interpretation and decision (selection of an aim).",
     e:"Correct. Interpreting a topic means working out what exactly the topic asks for. It happens in three steps: (1) negative interpretation – what is not covered?; (2) positive interpretation – which aims are possible?; (3) decision – which aim will the paper follow?"},
    {a:true, t:"The candidate has the duty and the right to interpret the topic, in coordination with the thesis advisor.",
     e:"Correct. Interpreting the topic is not optional: it is the candidate’s duty, but also their right (you may decide on a reasonable interpretation). The result should be coordinated with the thesis advisor so that both have the same understanding of the task."},
    {a:false, t:"The positive interpretation identifies what is not covered by the topic.",
     e:"False. Finding out what the topic does not cover is the negative interpretation (step 1). The positive interpretation (step 2) asks which of the five possible aims – description, causal connection, intention, function, comparison – the topic could pursue."}]},
  {id:"A8-02", ch:8, topic:"Negative interpretation (windmill example)", s:[
    {a:true, t:"For the topic ‘Project finance of windmill farms under the German renewable energy act (EEG)’, corporate finance and asset finance are not covered.",
     e:"Correct. The topic says ‘project finance’, a special financing technique in which the loan is repaid from the cash flows of the project itself. Other forms of financing such as corporate finance (financing the company as a whole) or asset finance are therefore excluded."},
    {a:false, t:"For the same topic, solar energy and hydropower are covered because they are also renewable energies.",
     e:"False. The topic explicitly names ‘windmill farms’. Other renewable energies such as solar energy or hydropower are therefore excluded in the negative interpretation, even though they are related."},
    {a:false, t:"For the same topic, a European or global focus is covered, because German law is embedded in the European legal framework.",
     e:"False. The topic refers to the German renewable energy act (EEG), so it is limited to Germany. A European or global focus is excluded; including it would mean an unauthorised reinterpretation of the topic."}]},
  {id:"A8-03", ch:8, topic:"Five potential aims", s:[
    {a:true, t:"The five potential aims of a research project are description, causal connection, intention, function and comparison.",
     e:"Correct. These are the five possible aims of the positive interpretation. Short version: description = how is it?; causal connection = what causes what?; intention = what is the purpose?; function = how do A and B influence each other?; comparison = how do things differ / does something meet a target?"},
    {a:true, t:"If more than one aim is possible, either one aim is selected or two or more aims are combined.",
     e:"Correct. A topic can allow several aims. In the decision step you either pick one of them or deliberately combine two or more, e.g. a description followed by a comparison."},
    {a:true, t:"The nature of the task (context) might hint towards an appropriate aim.",
     e:"Correct. In a real situation the context reveals what is needed. Example: if a manager asks ‘lay out how the process works’, the nature of the task points to a description; if someone asks ‘is X responsible for Y?’, it points to a causal connection."}]},
  {id:"A8-04", ch:8, topic:"Aim: description", s:[
    {a:false, t:"Typical questions of a descriptive aim are ‘Why is something done?’ and ‘What is intended to be achieved?’.",
     e:"False. ‘Why is something done?’ and ‘What is intended?’ ask for purposes – those are questions of the aim ‘intention’. A description asks how something is: ‘How?’, ‘Who?’, ‘Where?’, ‘How long?’."},
    {a:false, t:"‘Who will arrange project financings of windmill farms under the EEG?’ describes facts from a regional perspective.",
     e:"False. ‘Who?’ asks for the actors involved, i.e. the institutional perspective (banks, investors, authorities). The regional perspective is asked with ‘Where?’, e.g. ‘Where are project financings of windmill farms realised?’"},
    {a:false, t:"A descriptive aim typically asks ‘What is the impact of A on B and what is the impact of B on A?’.",
     e:"False. Asking for the impact of A on B and of B on A (both directions) is the functional aim. A description does not analyse influences at all; it describes facts, structures and processes as they are."}]},
  {id:"A8-05", ch:8, topic:"Aim: causal connection", s:[
    {a:true, t:"A causal connection investigates the relation between cause (reason) and effect (consequence, result).",
     e:"Correct. A causal connection asks what causes what: a cause (reason) leads to an effect (consequence, result). The direction is one-way: cause → effect."},
    {a:true, t:"‘What is the effect of the EEG regulation on project financings of windmill farms?’ is a question directed at a causal connection.",
     e:"Correct. The question asks for the effect (result) that a cause (the EEG regulation) has on something else (project financings). That is a one-directional cause-effect question, i.e. a causal connection."},
    {a:false, t:"‘What are the means of the EEG to achieve its aim?’ is a typical question directed at a causal connection.",
     e:"False. Asking for the means used to reach an aim is a typical question of the aim ‘intention’ (aims, purposes, means, instruments). A causal connection would ask e.g. ‘What is the effect of the EEG on project financings?’"}]},
  {id:"A8-06", ch:8, topic:"Aim: intention", s:[
    {a:true, t:"An intention-directed aim asks, e.g., ‘What is intended to be achieved?’ and ‘What are the means to achieve a certain aim?’.",
     e:"Correct. The aim ‘intention’ looks at purposes: what someone wants to achieve and with which means or instruments. Example: ‘What is the aim of the EEG and which instruments does it use to achieve it?’"},
    {a:false, t:"Objects of investigation of an intention are mainly causes and their effects (consequences, results).",
     e:"False. Causes and effects are the objects of the aim ‘causal connection’. An intention looks at aims, purposes, objectives, motives and designations, together with the means, instruments, agents and methods used to achieve them."},
    {a:false, t:"Objects of investigation of an intention include interdependencies, reciprocities and correlations.",
     e:"False. Interdependencies, reciprocities and correlations (mutual relationships) are the objects of the functional aim. An intention is about purposes and the means to achieve them."}]},
  {id:"A8-07", ch:8, topic:"Aim: function", s:[
    {a:true, t:"A functional aim analyses interdependencies, i.e. how A is influenced by B and how B is influenced by A.",
     e:"Correct. ‘Function’ means interdependency: A influences B, and B also influences A. The analysis looks at both directions, e.g. how the EEG affects windmill financing and how the special features of windmill financing shaped the EEG."},
    {a:false, t:"A functional aim looks at only one direction of influence (A → B).",
     e:"False. A one-directional influence (A → B) is a causal connection. The defining feature of the functional aim is that it always looks at both directions (A ↔ B)."},
    {a:true, t:"‘How is project finance of windmill farms influenced by the EEG and how was the structure of the EEG influenced by the special character of project finance and windmill farms?’ is a functional question.",
     e:"Correct. The question asks in both directions: how the EEG influences project finance of windmill farms and how project finance and windmill farms influenced the design of the EEG. Two directions = functional aim."}]},
  {id:"A8-08", ch:8, topic:"Aim: comparison", s:[
    {a:true, t:"Comparisons can address equalities, similarities and differences, e.g. between sectors, companies, countries or points in time.",
     e:"Correct. A comparison looks at what is equal, similar or different between objects, e.g. two countries, two companies, two points in time or two products, using defined criteria such as quality and quantity."},
    {a:true, t:"Target/actual comparisons such as audits, tests, examinations and certifications belong to the aim of comparison.",
     e:"Correct. Comparisons are not only ‘A vs. B’. A target/actual comparison checks whether something meets a standard or objective – this is exactly what audits, tests, examinations, controls and certifications do."},
    {a:false, t:"‘Efficiency and effectiveness of the EEG with respect to project finance of windmill farms’ cannot be a comparison because only one subsidy scheme is named.",
     e:"False. A comparison does not need two schemes. ‘To which degree does the subsidy scheme serve its purpose?’ is a target/actual comparison: the actual effect of the EEG is compared with its intended effect (efficiency and effectiveness)."}]},
  {id:"A8-09", ch:8, topic:"Mini cases ‘Sinking ships’ and ‘Smelly shampoo’", s:[
    {a:true, t:"In ‘Sinking ships’, the managing director asks a trainee to lay out the process of hedging with container freight derivatives, so the nature of the task is a description.",
     e:"Correct. ‘Lay out the process’ asks how something works step by step – a description of a process. The research question from the slides is ‘How can price risks be managed with container freight derivatives?’"},
    {a:false, t:"In ‘Smelly shampoo’, headquarters asks whether the softness of the fragrance is responsible for low sales volumes; the nature of the task is a functional relation.",
     e:"False. ‘Is the softness of the fragrance responsible for the low sales?’ asks whether one thing causes another, in one direction. That is a causal connection. A functional relation would require mutual influence in both directions."},
    {a:true, t:"‘Olfactory marketing strategies for hair care products’ is a topic that requires a problem-based interpretation.",
     e:"Correct. This topic does not reveal which aim is meant (description? causal connection? comparison?). Only the problem setting – headquarters wants to know whether the fragrance causes low sales – shows that a causal connection is needed. Such topics require a problem-based interpretation."}]},
  {id:"A8-10", ch:8, topic:"Mini cases ‘Printing money’, ‘Windy decision’, ‘Clara Couture’", s:[
    {a:true, t:"In ‘Printing money’, members of the Bundestag ask for a paper that addresses the purpose of the ECB’s action; the aim is an intention.",
     e:"Correct. The members of parliament want to know the purpose of the ECB’s action, i.e. what the ECB intends to achieve. Asking for purposes = aim ‘intention’. Research question: ‘What is the intention of the ECB money tenders in the context of the sovereign debt crisis?’"},
    {a:false, t:"In ‘Windy decision’, the executive committee asks for an analysis of the interdependencies between the EEG and project financing; the aim is a causal connection.",
     e:"False. ‘Interdependencies’ means mutual influence in both directions, which is the functional aim. The research question is ‘How do the EEG and the financial feasibility of windmill farm project financings influence each other?’"},
    {a:true, t:"In ‘Clara Couture’, the CEO asks for an appraisal of the SE proposal; the aim is a comparison of the implications of the proposed legal form with the company’s objectives.",
     e:"Correct. An appraisal means judging whether the SE proposal fits the company’s objectives. That is a target/actual comparison: the implications of the legal form are compared with what Clara Couture wants to achieve."}]},
  {id:"A8-11", ch:8, topic:"Explicit vs. problem-based topics", s:[
    {a:true, t:"‘Hedging spot market price risks for logistic service providers with container freight derivatives (CFD)’ is a topic that explicitly indicates the aim.",
     e:"Correct. The topic names the task directly: hedging (= protecting against) price risks with a specific instrument. It is clear that the paper should describe this process, so the aim is stated explicitly."},
    {a:false, t:"‘Risk management with container freight derivatives (CFD)’ explicitly indicates the aim of the research.",
     e:"False. ‘Risk management with CFD’ is open to several aims: you could describe it, compare it with alternatives or analyse its effects. The aim can only be derived from the problem setting, i.e. a problem-based interpretation is needed."},
    {a:false, t:"If a topic does not name the aim explicitly, the candidate may choose any of the five aims regardless of the problem setting.",
     e:"False. If the aim is not named, it has to be derived from the problem setting: the context and the nature of the task. Choosing an aim without considering them can lead to a false approach that misses what was actually asked."}]},
  {id:"A8-12", ch:8, topic:"Relevance; abstract vs. problem-based analysis", s:[
    {a:true, t:"Interpretation of a topic is a prerequisite for the structuring of a research project.",
     e:"Correct. Before you can build an outline, you must know what the paper is supposed to achieve. That is why interpreting the topic (Chapter 8) comes before structuring the research project (Chapter 9)."},
    {a:false, t:"Interpreting a topic is only necessary if the instructor explicitly asks for it.",
     e:"False. Interpreting the topic is a duty of the candidate for every research project, not only when the instructor asks for it. Without an interpretation you risk answering the wrong question."},
    {a:false, t:"In an abstract analysis of potential aims, the problem setting (context and nature of the task) determines the aim.",
     e:"False. In an abstract analysis you look at the topic alone and consider which of the five aims would be possible in theory. The problem setting (context, nature of the task) is only used in a problem-based analysis, which then decides on the appropriate aim."}]},
  {id:"A8-13", ch:8, topic:"Research questions of the mini cases", s:[
    {a:true, t:"‘Does the Societas Europaea suit the objectives of Clara Couture?’ is a research question directed at a comparison.",
     e:"Correct. The question compares the proposed legal form with the objectives of the company (target/actual comparison). It is the research question of the mini case ‘Clara Couture’."},
    {a:false, t:"‘What is the intention of the ECB money tenders in the context of the sovereign debt crisis?’ is a research question directed at a description.",
     e:"False. The question explicitly asks for the intention behind the ECB’s action, so it is directed at the aim ‘intention’ (mini case ‘Printing money’). A descriptive question would ask how the money tenders work."},
    {a:true, t:"‘How do the EEG and the financial feasibility of windmill farm project financings influence each other?’ is a research question directed at a function.",
     e:"Correct. ‘Influence each other’ means mutual influence in both directions – the functional aim. It is the research question of the mini case ‘Windy decision’."}]},
  {id:"A9-01", ch:9, topic:"From title to research question", s:[
    {a:true, t:"The sequence from title to research question is: title → topic → interpretation → research problem → research question.",
     e:"Correct. This is the chain from the cover page to the research question: the title (headline) → the topic (subject matter) → its interpretation (possible aims) → the research problem (description of the aim) → the research question (the aim phrased as a question)."},
    {a:false, t:"The research problem is the verbalisation of the objective(s) as an (indirect) question.",
     e:"False. Phrasing the objective as a (direct or indirect) question is the research question. The research problem is the description of the aim, i.e. the text that explains what the problem is (subchapter 1.1)."},
    {a:true, t:"In the windmill example, the interpretation chosen is a ‘functional approach’.",
     e:"Correct. In the windmill example the bank wants to know how the EEG and the financial feasibility influence each other – mutual influence. The interpretation is therefore a functional approach."}]},
  {id:"A9-02", ch:9, topic:"Deductive logic in the research problem", s:[
    {a:false, t:"Writing a research problem with deductive reasoning means moving from specific details to general statements.",
     e:"False. Deductive logic goes from the general to the specific. The research problem starts broad (e.g. what project finance is) and narrows down step by step to the specific research question."},
    {a:false, t:"Deductive reasoning is rarely used to write a research problem in business sciences.",
     e:"False. The slide states that deductive reasoning is a pragmatic way to write a research problem and is frequently used in business sciences."},
    {a:false, t:"In the windmill example, the research problem starts with the German renewable energy act and ends with project finance in general.",
     e:"False. It is the other way round. Paragraph 1 covers the most general element (project finance), paragraph 2 windmill farms, paragraph 3 the EEG, and paragraph 4 the aim and the research question – from general to specific."}]},
  {id:"A9-03", ch:9, topic:"Structure of a research problem", s:[
    {a:true, t:"A research problem typically consists of four paragraphs, of which the first three contain 3–5 sentences each.",
     e:"Correct. The typical structure is four paragraphs. The first three each contain 3–5 sentences and introduce the elements of the topic, from the general to the more specific."},
    {a:true, t:"The fourth paragraph of the research problem contains the aim and the research question in 2–3 sentences.",
     e:"Correct. The fourth paragraph is short (2–3 sentences) and contains the aim and the research question, e.g. ‘This research paper aims to analyse how … Focus will be on …’."},
    {a:true, t:"Following deductive logic, the research question is placed at the end of the research problem.",
     e:"Correct. Deductive logic leads from the general to the specific, and the most specific point is the research question. That is why it comes at the end of the research problem."}]},
  {id:"A9-04", ch:9, topic:"Rules for writing a research problem I", s:[
    {a:true, t:"A research problem should avoid ‘journalistic’ or colloquial writing styles.",
     e:"Correct. A research problem should be written in a factual, academic style. Journalistic hooks (‘Everybody knows …!’) or colloquial language (‘super interesting’) are to be avoided."},
    {a:false, t:"Superficial general, political and/or personal statements are a good way to raise the reader’s interest in the research problem.",
     e:"False. The rules say the opposite: beware of superficial general, political or personal statements. A research problem should start directly with the components of the topic."},
    {a:true, t:"A research problem should be kept to a maximum length of 1–2 pages, typically shorter for term papers than for thesis projects.",
     e:"Correct. The research problem only introduces the problem; the actual work happens in the main chapters. Maximum length: 1–2 pages, typically shorter for term papers than for theses."}]},
  {id:"A9-05", ch:9, topic:"Rules for writing a research problem II", s:[
    {a:false, t:"Providing numerical facts and statistical data in the research problem is mandatory.",
     e:"False. Numerical facts and statistical data are optional. They can make the relevance of the problem clearer, but they are not required."},
    {a:true, t:"The research problem should focus on the topic and its components (elements).",
     e:"Correct. Each paragraph of the research problem deals with one component of the topic (e.g. project finance, windmill farms, EEG). Everything else is left out."},
    {a:false, t:"The research problem is typically placed in the conclusion of a research paper.",
     e:"False. The research problem is the first subchapter of the introduction (1.1). The conclusion is the last chapter and contains summary, critical acclaim and outlook."}]},
  {id:"A9-06", ch:9, topic:"Aligning outline, research question and course of investigation", s:[
    {a:true, t:"The structure of the outline has to match the logic of the research question.",
     e:"Correct. The outline must reflect what the research question asks. Example: for ‘How do the EEG and the financial feasibility influence each other?’ the outline needs chapters on both elements and an analysis of both directions of influence."},
    {a:true, t:"The structure of the outline has to match the text of the course of investigation.",
     e:"Correct. The course of investigation (usually 1.3) describes in words what each chapter does. It must follow exactly the same chapters in the same order as the outline."},
    {a:false, t:"The course of investigation may present the chapters in a different order than the outline in order to improve readability.",
     e:"False. Outline and course of investigation must match exactly. A different order would confuse the reader and break the ‘triangle of synchronisation’."}]},
  {id:"A9-07", ch:9, topic:"Triangle of synchronisation", s:[
    {a:true, t:"In the triangle of synchronisation, outline, research problem and course of investigation have to match each other.",
     e:"Correct. The triangle of synchronisation has three corners: outline, research problem (1.1) and course of investigation (1.3). Each must match the other two, so that the whole paper is consistent."},
    {a:true, t:"The research method affects all three corners of the triangle of synchronisation.",
     e:"Correct. The research method (1.2) sits in the middle of the triangle. The chosen method (e.g. literature analysis or survey) affects what the research problem says, how the outline is built and what the course of investigation describes."},
    {a:false, t:"The research method is one of the three corners of the triangle, and the outline only has to match the research method.",
     e:"False. The research method is not a corner of the triangle. It sits in the middle and affects all three corners (outline, research problem, course of investigation), which in turn have to match each other."}]},
  {id:"A9-08", ch:9, topic:"Describing the research method", s:[
    {a:true, t:"The research method can be described in a separate chapter ‘1.2 Research method’ consisting of one paragraph with 4–5 sentences.",
     e:"Correct. Option 1: a separate subchapter ‘1.2 Research method’ with a single paragraph of 4–5 sentences, e.g. ‘This paper analyses the impact of the legal environment … Hence, a legal interpretation of the applicable law is required.’"},
    {a:false, t:"If there is no separate chapter ‘Research method’, the research method does not have to be described at all.",
     e:"False. The method always has to be described. Without a separate chapter (option 2), it is described in a paragraph at the beginning of the chapter ‘Course of investigation’."},
    {a:false, t:"The research method has to be described in the conclusion of the paper.",
     e:"False. The research method belongs to the introduction (option 1: own chapter 1.2; option 2: first paragraph of the course of investigation). The reader needs to know the method before reading the analysis, not at the end."}]},
  {id:"A9-09", ch:9, topic:"Rules of thumb for an outline", s:[
    {a:true, t:"An outline of a research paper typically has five main chapters, rarely six.",
     e:"Correct. Rule of thumb: typically five main chapters (introduction, three core chapters, conclusion), rarely six."},
    {a:true, t:"The introduction is always the first chapter and the conclusion is always the last chapter.",
     e:"Correct. These positions are fixed: the introduction always comes first and the conclusion always comes last."},
    {a:true, t:"Chapter 1 (introduction) typically holds the research problem, the research method and the course of investigation.",
     e:"Correct. Chapter 1 contains 1.1 research problem, 1.2 research method and 1.3 course of investigation – or, with option 2, only 1.1 research problem and 1.2 course of investigation, with the method described inside."}]},
  {id:"A9-10", ch:9, topic:"Conclusion and summary", s:[
    {a:true, t:"A conclusion consists of three elements: summary, critical acclaim and outlook.",
     e:"Correct. The three elements of a conclusion are: summary (short résumé of the findings), critical acclaim (critical reflection of the work and its limitations) and outlook (future prospects of the topic)."},
    {a:true, t:"The summary aggregates the research results and does not present new information.",
     e:"Correct. The summary condenses the results of the main chapters. It must not present new information – everything in it must already have been worked out in the paper."},
    {a:true, t:"The last paragraph of the summary answers the research question (research problem).",
     e:"Correct. The summary first summarises the core chapters in the order of the outline; its last paragraph then gives the answer to the research question."}]},
  {id:"A9-11", ch:9, topic:"Summary and outline", s:[
    {a:true, t:"The structure of the summary has to be aligned with the outline, e.g. one paragraph per core chapter.",
     e:"Correct. The summary mirrors the outline: e.g. one paragraph for chapter 2, one for chapter 3, one for chapter 4, and a final paragraph that answers the research question."},
    {a:false, t:"The summary is a detailed repetition of all arguments of the main body, enriched with new examples.",
     e:"False. The summary is a short résumé, not a detailed repetition, and it must not contain new information or new examples."},
    {a:false, t:"The summary should start with the answer to the research question and then summarise the core chapters.",
     e:"False. The order is the other way round. First come the summaries of the core chapters in the order of the outline; the answer to the research question comes in the last paragraph."}]},
  {id:"A9-12", ch:9, topic:"Critical acclaim", s:[
    {a:true, t:"The critical acclaim is a differentiated and critical reflection of the research work, including its restrictions and limitations.",
     e:"Correct. In the critical acclaim you look back at your own work critically: How good is the answer to the research question? What are its limits, e.g. a small sample, limited data or a narrow scope?"},
    {a:false, t:"‘There were not enough sources in our library.’ is an appropriate statement for the critical acclaim.",
     e:"False. This is one of the excusatory statements listed on the slides that must not appear in the critical acclaim. Limitations must concern the content and method of the research, not the circumstances of writing it."},
    {a:true, t:"‘It is difficult for me as a student to deal with such a topic.’ should be avoided in the critical acclaim, because it is an excusatory statement.",
     e:"Correct. Statements about personal difficulties are excuses, not a critical reflection of the research. The slide explicitly lists this sentence as an example of what to avoid."}]},
  {id:"A9-13", ch:9, topic:"Outlook", s:[
    {a:true, t:"The outlook is a discussion of future prospects of the topic.",
     e:"Correct. The outlook is the third element of the conclusion. It looks ahead: how might the topic develop, and which questions remain open for further research?"},
    {a:false, t:"The outlook should mainly repeat the summary in different words.",
     e:"False. The outlook looks to the future and contains new, own thoughts. Repeating the results is the job of the summary."},
    {a:false, t:"Because the outlook points towards the future, it may contain speculative statements that are not linked to the findings.",
     e:"False. The outlook must be derived from your own research and be logical and understandable; mere speculation is to be avoided. It is an intellectual achievement, not a guess."}]},
  {id:"A9-14", ch:9, topic:"Relevance of structuring technique", s:[
    {a:true, t:"Structuring technique aims at achieving consistency within the research project and avoiding mistakes or a general failure of the project.",
     e:"Correct. Structuring technique makes sure that title, research problem, outline, course of investigation and conclusion fit together. This consistency raises the quality of the work and prevents mistakes or a failure of the whole project."},
    {a:true, t:"The course of investigation describes which chapter addresses which part of the analysis, e.g. ‘Thereafter, the financial feasibility … will be addressed in chapter 3.’",
     e:"Correct. The course of investigation tells the reader in advance what happens in which chapter, e.g. ‘In chapter 2, project finance is defined … Thereafter, the financial feasibility … will be addressed in chapter 3.’"},
    {a:false, t:"According to the rules of thumb, the conclusion may be followed by further main chapters if new findings emerge.",
     e:"False. The conclusion is always the last chapter. All findings belong in the core chapters before it; nothing comes after the conclusion except the annex (e.g. list of references)."}]}
 ],

 // ---------- PART B: pages with hidden mistakes ([[errorId|text]] marks the mistake) ----------
 partB: [
  {
   "id": "B00",
   "sample": true,
   "title": "Abstract of a term paper (official sample)",
   "context": "The following page is taken from a term paper. Identify at least five formal or substantial mistakes.",
   "blocks": [
    {
     "k": "h1",
     "x": "[[b0_abs|Abstract]]"
    },
    {
     "k": "p",
     "x": "[[b0_sum|Short summary:]]"
    },
    {
     "k": "p",
     "x": "[[b0_ret|Return two past decades,]] the trend of executing [[b0_ma|M&A transaction]] between the corporations [[b0_pop|has been more and more popular.]] Because of the fact that M&A can bring many opportunities for [[b0_both|both of companies involving in transaction,]] such as expanding the business activities, taking advantages of synergy to access into new market or making a new product line, creating more shareholder value [[b0_etc|etc.]] However, [[b0_alw|there are always potential risks existing]] behind these benefits of M&A, which become the big challenges for every merging or acquiring company. To identify and minimize these potential risks as much as possible, [[b0_exe|the acquirer or merger execute due diligence,]] which is process of auditing and analyzing all information associated to the target company. Among the different specific types of due diligence financial due diligence takes role of verifying and analyzing the financial performance or statement of the target company [[b0_his|due to the historic fiscal report.]] Based on this analysis of financial due diligence the bidder can evaluate more exactly how successful the target firm operates its business and therefore identify where and by which way the synergy can be realized, as well as assess the maximum purchase price of the acquisition."
    },
    {
     "k": "p",
     "x": "<b>Key words</b>: [[b0_kw|financial,]] due diligence, M&A transactions"
    },
    {
     "k": "p",
     "x": "<b>JEL classification</b>: G34, G32"
    },
    {
     "k": "p",
     "x": "G34: Mergers, Acquisitions, Restructuring, Corporate Governance"
    },
    {
     "k": "p",
     "x": "G32: Financing Policy; Financial Risk and Risk Management; Capital and Ownership Structure; Value of Firms"
    }
   ],
   "errors": {
    "b0_abs": {
     "type": "formal",
     "ch": 7,
     "label": "Abstract in a term paper",
     "expl": "According to the table of structural elements, an abstract/summary is not used in a term paper (‘No’); it is only optional for thesis projects and dissertations. Including it adds an element that does not belong to this type of paper."
    },
    "b0_sum": {
     "type": "substantial",
     "ch": 7,
     "label": "‘Short summary’ does not summarise the paper",
     "expl": "The short summary should condense the paper (aim/research question, approach and main findings). This text only gives general background on M&A and due diligence – the reader learns nothing about the research question or the results, so the abstract fails its purpose (filing, examination board)."
    },
    "b0_ret": {
     "type": "formal",
     "ch": 2,
     "label": "Spelling/wording error (‘Return two past decades’)",
     "expl": "Correct would be ‘Over the past two decades’. Spelling and grammar belong to the rules and norms of the principle of accuracy; errors reduce receptiveness and credibility."
    },
    "b0_ma": {
     "type": "formal",
     "ch": 7,
     "label": "Abbreviation ‘M&A’ not introduced (and singular ‘transaction’)",
     "expl": "An abbreviation must be explained where it is introduced (‘mergers and acquisitions (M&A)’) and listed in the list of abbreviations. In addition, ‘transaction’ should be plural (‘M&A transactions’)."
    },
    "b0_pop": {
     "type": "substantial",
     "ch": 9,
     "label": "Colloquial, imprecise and unsupported claim",
     "expl": "‘More and more popular’ is a journalistic/colloquial phrase and is not backed by figures or a reference. Academic texts use precise language (clearness) and support statements with sources (accuracy/traceability)."
    },
    "b0_both": {
     "type": "formal",
     "ch": 2,
     "label": "Grammar mistake",
     "expl": "Grammar mistake: correct would be ‘for both companies involved in the transaction’. Correct spelling and grammar belong to the rules and norms of the principle of accuracy; language errors make a text harder to understand and reduce its credibility."
    },
    "b0_etc": {
     "type": "substantial",
     "ch": 2,
     "label": "Vague enumeration with ‘etc.’",
     "expl": "Ending an argument with ‘etc.’ leaves it open which further aspects are meant. Clearness requires avoiding ambiguities; either name all relevant aspects or state that only examples are given (‘e.g.’)."
    },
    "b0_alw": {
     "type": "substantial",
     "ch": 3,
     "label": "Overgeneralisation (‘always’) without evidence",
     "expl": "‘There are always potential risks’ is a sweeping universal statement without any reference. Such claims are either trivial or need substantiation; precise and traceable statements are required."
    },
    "b0_exe": {
     "type": "formal",
     "ch": 2,
     "label": "Grammar and wrong terminology (‘merger execute’)",
     "expl": "Subject-verb agreement is wrong (‘the acquirer … executes’) and ‘merger’ denotes the transaction, not a party (‘merging company’). Correct terminology is part of clearness."
    },
    "b0_his": {
     "type": "substantial",
     "ch": 2,
     "label": "Imprecise/incorrect terminology (‘due to the historic fiscal report’)",
     "expl": "Financial due diligence is based on historical financial statements; ‘due to the historic fiscal report’ is unclear and partly wrong. Clearness requires accurate academic terminology."
    },
    "b0_kw": {
     "type": "formal",
     "ch": 7,
     "label": "Keyword too general",
     "expl": "Keywords should characterise the specific content for filing and retrieval (cf. ‘project finance, windmill farms, renewable energy …’). ‘Financial’ is far too unspecific; better e.g. ‘financial due diligence, purchase price, synergies’."
    }
   }
  },
  {
   "id": "B01",
   "title": "Outline of a term paper",
   "context": "The following outline belongs to a term paper with the topic ‘Impact of the statutory minimum wage on employment in the German hospitality sector’. The paper is written in the decadal numbering system. Identify at least five formal or substantial mistakes.",
   "blocks": [
    {
     "k": "h1",
     "x": "Outline"
    },
    {
     "k": "toc",
     "i": 0,
     "x": "I. List of figures",
     "pg": "III"
    },
    {
     "k": "toc",
     "i": 0,
     "x": "II. List of abbreviations",
     "pg": "[[b1_pg|4]]"
    },
    {
     "k": "toc",
     "i": 0,
     "x": "[[b1_abs|III. Abstract]]",
     "pg": "V"
    },
    {
     "k": "toc",
     "i": 0,
     "x": "1 Introduction",
     "pg": "1"
    },
    {
     "k": "toc",
     "i": 1,
     "x": "1.1 Research problem",
     "pg": "1"
    },
    {
     "k": "toc",
     "i": 1,
     "x": "[[b1_dot|1.2. Course of investigation]]",
     "pg": "2"
    },
    {
     "k": "toc",
     "i": 1,
     "x": "[[b1_pers|1.3 Personal motivation for the topic]]",
     "pg": "2"
    },
    {
     "k": "toc",
     "i": 0,
     "x": "2 Minimum wage legislation in Germany",
     "pg": "3"
    },
    {
     "k": "toc",
     "i": 1,
     "x": "2.1 Legal framework",
     "pg": "3"
    },
    {
     "k": "toc",
     "i": 1,
     "x": "2.2 Development of the minimum wage level",
     "pg": "4"
    },
    {
     "k": "toc",
     "i": 0,
     "x": "3 Theoretical effects of minimum wages on employment",
     "pg": "5"
    },
    {
     "k": "toc",
     "i": 1,
     "x": "[[b1_single|3.1 Neoclassical labour market model]]",
     "pg": "5"
    },
    {
     "k": "toc",
     "i": 0,
     "x": "4 Empirical evidence for the hospitality sector",
     "pg": "7"
    },
    {
     "k": "toc",
     "i": 1,
     "x": "[[b1_illog|4.1 General remarks]]",
     "pg": "7"
    },
    {
     "k": "toc",
     "i": 1,
     "x": "4.2 Study by the Institute for Employment Research",
     "pg": "8"
    },
    {
     "k": "toc",
     "i": 1,
     "x": "4.3 Study by the Federal Statistical Office",
     "pg": "9"
    },
    {
     "k": "toc",
     "i": 0,
     "x": "[[b1_alpha|B. Interviews with restaurant owners]]",
     "pg": "10"
    },
    {
     "k": "toc",
     "i": 0,
     "x": "5 Conclusion",
     "pg": "12"
    },
    {
     "k": "toc",
     "i": 0,
     "x": "[[b1_after|6 Recommendations for policymakers]]",
     "pg": "13"
    },
    {
     "k": "toc",
     "i": 0,
     "x": "[[b1_bib|7 Bibliography]]",
     "pg": "14"
    },
    {
     "k": "toc",
     "i": 0,
     "x": "Declaration of originality",
     "pg": "16"
    }
   ],
   "errors": {
    "b1_pg": {
     "type": "formal",
     "ch": 7,
     "label": "Arabic page number in the directories",
     "expl": "Addments and directories are numbered with Roman numerals; only the main body starts with Arabic page ‘1’. The list of abbreviations must therefore be on page ‘IV’, not ‘4’."
    },
    "b1_abs": {
     "type": "formal",
     "ch": 7,
     "label": "Abstract listed in a term paper",
     "expl": "An abstract is not used in term papers (it is only optional for theses and dissertations). Moreover, as an addment it would be placed before the directories, not after them."
    },
    "b1_dot": {
     "type": "formal",
     "ch": 7,
     "label": "Full stop after the last decadal cipher",
     "expl": "In the decadal numbering system, no full stop follows the last number: ‘1.2 Course of investigation’ is correct, ‘1.2. Course of investigation’ is incorrect. This is one of the most common formal mistakes and a typical candidate in this part of the exam."
    },
    "b1_pers": {
     "type": "substantial",
     "ch": 9,
     "label": "Personal motivation as a chapter of the introduction",
     "expl": "The introduction contains the research problem, (research method) and course of investigation. Personal statements are explicitly to be avoided (rules for writing a research problem) and do not belong into an academic paper as a separate chapter."
    },
    "b1_single": {
     "type": "formal",
     "ch": 7,
     "label": "Only one subchapter (3.1 without 3.2)",
     "expl": "If a chapter is subdivided, there have to be at least two subchapters. A single subchapter 3.1 is an incomplete structuring – a ‘major mistake’."
    },
    "b1_illog": {
     "type": "formal",
     "ch": 7,
     "label": "Illogical structure: general remarks on the same level as individual studies",
     "expl": "‘General remarks’ and the individual studies are placed on one level, like the capital budgeting example on the slides. Logical: 4.1 General remarks, 4.2 Studies, 4.2.1 …, 4.2.2 …"
    },
    "b1_alpha": {
     "type": "formal",
     "ch": 7,
     "label": "Mixing alphanumerical and decadal numbering",
     "expl": "Chapter ‘B.’ belongs to the alphanumerical system, the rest is decadal. A consistent numbering system is required (formal correctness as part of proper composition); the interviews should be a numbered decadal chapter or subchapter."
    },
    "b1_after": {
     "type": "substantial",
     "ch": 9,
     "label": "Main chapter after the conclusion",
     "expl": "The conclusion is always the last chapter. Recommendations belong to the core chapters or, in condensed form, to the outlook. In addition, the outline now has six-plus main chapters instead of typically five."
    },
    "b1_bib": {
     "type": "formal",
     "ch": 7,
     "label": "Bibliography numbered as a main chapter",
     "expl": "The bibliography belongs to the annex (4th section), not to the main body. It must not carry a chapter number of the decadal system; like the other annex elements it is listed without a main-body chapter number."
    }
   }
  },
  {
   "id": "B02",
   "title": "Research problem (chapter 1.1)",
   "context": "The following page is taken from a term paper with the topic ‘Green bonds as a financing instrument for municipal infrastructure in Germany’. Identify at least five formal or substantial mistakes.",
   "blocks": [
    {
     "k": "h1",
     "x": "1 Introduction"
    },
    {
     "k": "p",
     "x": "[[b2_inter|This chapter gives an introduction into the topic of this paper and explains what will be done.]]"
    },
    {
     "k": "h2",
     "x": "1.1 Research problem"
    },
    {
     "k": "p",
     "x": "[[b2_pol|Everybody knows that climate change is the biggest problem of our time and politicians are doing far too little against it!]] Municipalities in Germany need to invest considerable amounts in schools, public transport and energy-efficient public buildings. [[b2_pool|The town of Lüneburg, for example, recently renovated its outdoor swimming pool, which was very popular with families.]]"
    },
    {
     "k": "p",
     "x": "Bonds are debt securities that are issued by companies or public entities in order to raise funds on the capital market. Green bonds are bonds whose proceeds are used exclusively for environmentally beneficial projects. [[b2_wiki|According to Wikipedia, the global issuance of green bonds grew by 300 % last year.]] [[b2_abbr|In this paper, green bonds will be abbreviated as ‘GB’.]]"
    },
    {
     "k": "p",
     "x": "In contrast to corporate issuers, municipalities are subject to specific budget law requirements and usually finance themselves through municipal loans from banks. [[b2_ecar|Electric cars are also becoming more and more popular among German consumers, which shows how important sustainability has become.]] [[b2_always|This proves that green bonds will always be cheaper than conventional municipal loans.]]"
    },
    {
     "k": "p",
     "x": "The aim of this paper is therefore to answer the following question: [[b2_rq|Are green bonds good for German municipalities?]] [[b2_me|I personally find this topic super interesting, because I would like to work for a sustainable bank later.]]"
    }
   ],
   "errors": {
    "b2_inter": {
     "type": "formal",
     "ch": 7,
     "label": "Intermediate text between ‘1’ and ‘1.1’",
     "expl": "Text without a numbered headline between a chapter and its first subchapter is intermediate text. Many instructors regard it as redundant and non-academic; the orientation is already provided by the outline and the course of investigation."
    },
    "b2_pol": {
     "type": "substantial",
     "ch": 9,
     "label": "Superficial political statement in journalistic style",
     "expl": "The rules for writing a research problem demand avoiding journalistic/colloquial styles and superficial general, political or personal statements. The exclamation mark and ‘everybody knows’ are not academic; the paragraph should start with the general component of the topic (municipal infrastructure financing)."
    },
    "b2_pool": {
     "type": "substantial",
     "ch": 2,
     "label": "Excursion without relation to the topic",
     "expl": "The renovation of a swimming pool is an anecdote without relevance for green bond financing. Proper composition requires an uncompromising focus on the topic without excursions."
    },
    "b2_wiki": {
     "type": "substantial",
     "ch": 6,
     "label": "Wikipedia as source and imprecise data (‘last year’)",
     "expl": "Wikipedia lacks credibility (anonymous authors, no editorial quality certainty); the original statistics source must be cited. ‘Last year’ is not traceable – the year and the source must be stated."
    },
    "b2_abbr": {
     "type": "formal",
     "ch": 7,
     "label": "Self-made abbreviation",
     "expl": "Self-made abbreviations such as ‘GB’ for ‘green bonds’ should be avoided. Readers do not know them and have to remember or look them up constantly. Only abbreviations that are standard in the field may be introduced (explained at first use) and listed in the list of abbreviations."
    },
    "b2_ecar": {
     "type": "substantial",
     "ch": 2,
     "label": "Excursion (electric cars)",
     "expl": "Electric cars have nothing to do with municipal bond financing. The research problem must focus on the topic and its components; excursions violate proper composition."
    },
    "b2_always": {
     "type": "substantial",
     "ch": 3,
     "label": "Unsubstantiated universal claim / anticipated result",
     "expl": "Nothing in the text ‘proves’ anything, and a universal statement (‘always cheaper’) can never be verified, only falsified. Moreover, the research problem should lead to the question, not anticipate the answer."
    },
    "b2_rq": {
     "type": "substantial",
     "ch": 4,
     "label": "Closed and imprecise research question",
     "expl": "‘Are … good …?’ is a closed (yes/no) question with an imprecise adjective (‘good’). A research question should be open-ended and precise, e.g. ‘How do green bonds and municipal loans differ with respect to financing costs and requirements for German municipalities?’"
    },
    "b2_me": {
     "type": "substantial",
     "ch": 9,
     "label": "Personal, colloquial statement",
     "expl": "Personal statements and colloquial wording (‘super interesting’) are to be avoided in the research problem. The last paragraph should only contain the aim and the research question (2–3 sentences)."
    }
   }
  },
  {
   "id": "B03",
   "title": "Course of investigation and outline",
   "context": "The following page is taken from a term paper with the topic ‘Interdependencies between ESG ratings and the cost of capital of listed German companies’. The abridged outline of the paper is shown first, followed by chapter 1.2. Identify at least five formal or substantial mistakes.",
   "blocks": [
    {
     "k": "note",
     "x": "Outline (abridged)"
    },
    {
     "k": "toc",
     "i": 0,
     "x": "1 Introduction",
     "pg": ""
    },
    {
     "k": "toc",
     "i": 1,
     "x": "1.1 Research problem",
     "pg": ""
    },
    {
     "k": "toc",
     "i": 1,
     "x": "1.2 Course of investigation",
     "pg": ""
    },
    {
     "k": "toc",
     "i": 0,
     "x": "2 ESG ratings",
     "pg": ""
    },
    {
     "k": "toc",
     "i": 1,
     "x": "2.1 Concept and rating agencies",
     "pg": ""
    },
    {
     "k": "toc",
     "i": 1,
     "x": "2.2 Rating methodologies",
     "pg": ""
    },
    {
     "k": "toc",
     "i": 0,
     "x": "3 Cost of capital of listed companies",
     "pg": ""
    },
    {
     "k": "toc",
     "i": 1,
     "x": "3.1 Cost of equity",
     "pg": ""
    },
    {
     "k": "toc",
     "i": 1,
     "x": "3.2 Cost of debt",
     "pg": ""
    },
    {
     "k": "toc",
     "i": 0,
     "x": "4 Interdependencies between ESG ratings and the cost of capital",
     "pg": ""
    },
    {
     "k": "toc",
     "i": 1,
     "x": "4.1 Impact of ESG ratings on the cost of capital",
     "pg": ""
    },
    {
     "k": "toc",
     "i": 1,
     "x": "4.2 Impact of the cost of capital on ESG ratings",
     "pg": ""
    },
    {
     "k": "toc",
     "i": 0,
     "x": "5 Conclusion",
     "pg": ""
    },
    {
     "k": "h2",
     "x": "1.2 Course of investigation"
    },
    {
     "k": "p",
     "x": "[[b3_vague|In this paper I will try to find out whether ESG is good or bad.]] Based upon the research question postulated in chapter 1.1, [[b3_order|the cost of capital of listed companies will be explained in chapter 2.]] [[b3_order|Thereafter, ESG ratings and the methodologies of the rating agencies will be described in chapter 3.]] [[b3_onedir|Chapter 4 then analyses how ESG ratings influence the cost of capital.]] [[b3_survey|In addition, a survey among 500 CFOs will be conducted and statistically evaluated in chapter 4.3.]] [[b3_verif|Since the hypothesis that a good ESG rating always lowers the cost of capital will be verified by this survey,]] [[b3_def|the paper will deliver a definite and final answer to the problem.]] [[b3_concl|In the conclusion (chapter 6), new empirical findings from recent studies will be presented,]] followed by a critical acclaim and an outlook. [[b3_meth|The research method is explained in the appendix.]]"
    }
   ],
   "errors": {
    "b3_vague": {
     "type": "substantial",
     "ch": 4,
     "label": "Vague, colloquial and closed aim",
     "expl": "‘Whether ESG is good or bad’ is a closed, imprecise question in colloquial style that does not reflect the functional topic (interdependencies). The course of investigation should refer to the research question of chapter 1.1."
    },
    "b3_order": {
     "type": "substantial",
     "ch": 9,
     "label": "Course of investigation does not match the outline",
     "expl": "In the outline, chapter 2 deals with ESG ratings and chapter 3 with the cost of capital – the text swaps them. The structure of the outline has to match the text of the course of investigation (triangle of synchronisation)."
    },
    "b3_onedir": {
     "type": "substantial",
     "ch": 8,
     "label": "Only one direction of a functional relationship",
     "expl": "The topic and the outline (4.1 and 4.2) address interdependencies, i.e. both directions. Describing chapter 4 as one-directional (ESG → cost of capital) turns the functional aim into a causal one and contradicts the outline."
    },
    "b3_survey": {
     "type": "substantial",
     "ch": 9,
     "label": "Chapter 4.3 and the survey do not exist in the outline",
     "expl": "The outline has no chapter 4.3 and no empirical part. Research method, outline and course of investigation must be synchronised; an empirical survey would have to appear in the outline and the description of the research method."
    },
    "b3_verif": {
     "type": "substantial",
     "ch": 3,
     "label": "Universal hypothesis cannot be verified",
     "expl": "‘A good ESG rating always lowers the cost of capital’ is a universal proposition. Universal propositions are falsifiable but never verifiable – a survey can at best support it, a counter-example falsifies it."
    },
    "b3_def": {
     "type": "substantial",
     "ch": 4,
     "label": "Claim of a ‘definite and final answer’",
     "expl": "A research paper (‘thesis’) provides a possible explanation, i.e. a potential answer (hypothesis), not a definite solution. The claim also contradicts the critical acclaim, which reflects limitations."
    },
    "b3_concl": {
     "type": "substantial",
     "ch": 9,
     "label": "Wrong chapter number and new findings in the conclusion",
     "expl": "The conclusion is chapter 5, not 6. Furthermore, the summary aggregates the paper’s own results – presenting new information in the conclusion is not allowed."
    },
    "b3_meth": {
     "type": "formal",
     "ch": 9,
     "label": "Research method placed in the appendix",
     "expl": "The research method is described either in a separate chapter ‘1.2 Research method’ (one paragraph, 4–5 sentences) or at the beginning of the course of investigation – not in the appendix."
    }
   }
  },
  {
   "id": "B04",
   "title": "Conclusion chapter",
   "context": "The following pages are taken from a term paper with the topic ‘Effect of a four-day working week on employee absenteeism in German IT companies’. Outline: 1 Introduction, 2 Absenteeism: concept and measurement, 3 Models of a four-day working week, 4 Effect of a four-day working week on absenteeism, 5 Conclusion. Identify at least five formal or substantial mistakes.",
   "blocks": [
    {
     "k": "h1",
     "x": "5 Conclusion"
    },
    {
     "k": "h2",
     "x": "5.1 Summary"
    },
    {
     "k": "p",
     "x": "Chapter 2 defined absenteeism as the absence of employees from work due to illness or other non-scheduled reasons and presented measures such as the absence rate."
    },
    {
     "k": "p",
     "x": "[[b4_order|Chapter 4 showed that absenteeism fell by an average of 11 % in the three companies analysed.]] [[b4_ind|This proves that a four-day working week always reduces absenteeism in all companies.]]"
    },
    {
     "k": "p",
     "x": "[[b4_order|Chapter 3 described the main models of a four-day working week, i.e. the reduction of working time with full pay and the compression of 40 hours into four days.]]"
    },
    {
     "k": "p",
     "x": "[[b4_new|Moreover, a recent survey by a large health insurer, which was not discussed in this paper, shows that 70 % of employees would welcome a four-day week.]]"
    },
    {
     "k": "p",
     "x": "[[b4_ans|To sum up, whether a four-day working week reduces absenteeism depends on many factors.]]"
    },
    {
     "k": "h2",
     "x": "5.2 Critical acclaim"
    },
    {
     "k": "p",
     "x": "[[b4_time|Due to the limited time available for this term paper, only few studies could be analysed.]] [[b4_stud|Furthermore, as a student it was difficult for me to understand the statistical methods of some of the studies.]] The analysed studies only cover companies with fewer than 500 employees, so the results cannot be transferred to large corporations without further research."
    },
    {
     "k": "h2",
     "x": "[[b4_dot|5.3. Outlook]]"
    },
    {
     "k": "p",
     "x": "[[b4_spec|In ten years, every company in Germany will have introduced a four-day working week and absenteeism will have disappeared completely.]]"
    },
    {
     "k": "h1",
     "x": "[[b4_after|6 Personal remarks]]"
    },
    {
     "k": "p",
     "x": "I would like to thank my family and my fellow students for their support during the writing process."
    }
   ],
   "errors": {
    "b4_order": {
     "type": "formal",
     "ch": 9,
     "label": "Summary does not follow the outline",
     "expl": "The structure of the summary has to be aligned with the outline: one paragraph per core chapter in the same order (chapter 2 → 3 → 4), with the answer to the research question in the last paragraph. Here chapter 4 is summarised before chapter 3."
    },
    "b4_ind": {
     "type": "substantial",
     "ch": 3,
     "label": "Invalid inductive generalisation",
     "expl": "Three observed companies cannot prove a universal statement (‘always … in all companies’). Induction extends limited information; universal propositions are never verifiable. It also contradicts the limitation stated in the critical acclaim."
    },
    "b4_new": {
     "type": "substantial",
     "ch": 9,
     "label": "New information in the summary",
     "expl": "The summary aggregates the paper’s own results – no new information. A study ‘not discussed in this paper’ must not appear here; moreover, it concerns employee preferences, not absenteeism."
    },
    "b4_ans": {
     "type": "substantial",
     "ch": 9,
     "label": "No clear answer to the research question",
     "expl": "The last paragraph of the summary has to answer the research question. ‘Depends on many factors’ is not an answer; it should state the effect found and the conditions under which it holds."
    },
    "b4_time": {
     "type": "substantial",
     "ch": 9,
     "label": "Excusatory statement (lack of time)",
     "expl": "The critical acclaim must not contain excusatory statements such as ‘There was not enough time for proper research.’ Limitations must refer to the content (data, scope, method)."
    },
    "b4_stud": {
     "type": "substantial",
     "ch": 9,
     "label": "Excusatory, personal statement (‘as a student’)",
     "expl": "‘It is difficult for me as a student …’ is listed on the slides as an excusatory statement to avoid. The critical acclaim is a differentiated reflection of the research, not of personal difficulties."
    },
    "b4_dot": {
     "type": "formal",
     "ch": 7,
     "label": "Full stop after the last decadal cipher",
     "expl": "In the decadal numbering system no full stop follows the last number: the headline must read ‘5.3 Outlook’, not ‘5.3. Outlook’. Note that the other headlines on this page (5.1, 5.2) are written correctly – the paper is also inconsistent."
    },
    "b4_spec": {
     "type": "substantial",
     "ch": 9,
     "label": "Mere speculation in the outlook",
     "expl": "The outlook must consist of own substantiated thoughts derived from the research and avoid mere speculation. A forecast that every company will introduce the model and absenteeism will disappear is neither substantiated nor plausible."
    },
    "b4_after": {
     "type": "formal",
     "ch": 9,
     "label": "Chapter after the conclusion / acknowledgements in the main body",
     "expl": "The conclusion is always the last chapter of the main body. Thanks belong – if at all – into a foreword/preface (addments), which is used selectively in published research, not in a term paper."
    }
   }
  },
  {
   "id": "B05",
   "title": "Main body page with figure and table",
   "context": "The following page is taken from a term paper with the topic ‘Development of mobile payment usage in Germany’. Identify at least five formal or substantial mistakes.",
   "blocks": [
    {
     "k": "h1",
     "x": "3 Usage of mobile payment in Germany"
    },
    {
     "k": "p",
     "x": "[[b5_inter|In this chapter, the usage of mobile payment in Germany is analysed. First, the development is shown, then the reasons are explained.]]"
    },
    {
     "k": "h2",
     "x": "[[b5_dot|3.1. Development of transaction volumes]]"
    },
    {
     "k": "p",
     "x": "Mobile payment refers to payments at the point of sale that are initiated via a smartphone or a smartwatch. [[b5_abbr|The number of MP transactions has increased]] since 2019, as the following figure shows."
    },
    {
     "k": "fig",
     "x": "Bar chart: number of mobile payment transactions in Germany, 2019–2024, in million"
    },
    {
     "k": "cap",
     "x": "[[b5_cap|Development of mobile payment transactions]] [[b5_src|(own illustration based on various internet sources)]]"
    },
    {
     "k": "p",
     "x": "[[b5_old|According to a survey from 2009, only 2 % of Germans use mobile payment,]] which shows that cash is still dominant. [[b5_spec|It is obvious that mobile payment will completely replace cash in the near future.]]"
    },
    {
     "k": "h2",
     "x": "3.2 Reasons for the increasing usage"
    },
    {
     "k": "p",
     "x": "Users name several reasons for paying with their smartphone, which are summarised in the following table."
    },
    {
     "k": "table",
     "rows": [
      [
       "Reason",
       "Share of users"
      ],
      [
       "Convenience",
       "64 %"
      ],
      [
       "Speed of payment",
       "51 %"
      ],
      [
       "Hygiene",
       "38 %"
      ]
     ]
    },
    {
     "k": "cap",
     "x": "Tab. 1: Reasons for using mobile payment. Source: Federal Association of Payment Providers (2024), p. 12. [[b5_split|(table continued on next page)]]"
    },
    {
     "k": "h1",
     "x": "[[b5_end|4 Barriers to the usage of mobile payment]]"
    }
   ],
   "errors": {
    "b5_inter": {
     "type": "formal",
     "ch": 7,
     "label": "Intermediate text between ‘3’ and ‘3.1’",
     "expl": "Unnumbered text between a chapter and its first subchapter is intermediate text, considered redundant and non-academic by many instructors. Orientation is already provided by the outline and course of investigation."
    },
    "b5_dot": {
     "type": "formal",
     "ch": 7,
     "label": "Full stop after the last decadal cipher",
     "expl": "In the decadal numbering system no full stop follows the last number. Correct: ‘3.1 Development of transaction volumes’, not ‘3.1. Development …’. The headline in the text must also match the outline exactly."
    },
    "b5_abbr": {
     "type": "formal",
     "ch": 7,
     "label": "Abbreviation ‘MP’ not introduced (self-made)",
     "expl": "‘MP’ is a self-made abbreviation that is neither introduced nor explained. Abbreviations must be explained where they are introduced; self-made abbreviations should be avoided altogether."
    },
    "b5_cap": {
     "type": "formal",
     "ch": 7,
     "label": "Figure without numbered headline (placed below)",
     "expl": "Figures need an individual, numbered headline, typically at the top (e.g. ‘Fig. 1: Development of mobile payment transactions in Germany, 2019–2024’). Without a number it cannot be listed in the list of figures."
    },
    "b5_src": {
     "type": "formal",
     "ch": 6,
     "label": "Untraceable source (‘various internet sources’)",
     "expl": "A figure needs a reference that allows third parties to retrace the data (traceability, citability: published, identifiable, checkable). ‘Various internet sources’ fulfils none of these criteria."
    },
    "b5_old": {
     "type": "substantial",
     "ch": 2,
     "label": "Outdated data used for a current statement",
     "expl": "Data from 2009 cannot describe today’s usage (currentness of data, principle of accuracy). It also contradicts the figure, which shows rising volumes from 2019 onwards."
    },
    "b5_spec": {
     "type": "substantial",
     "ch": 3,
     "label": "Unsubstantiated, imprecise prediction",
     "expl": "‘It is obvious’ replaces an argument, and ‘in the near future’ is so imprecise that the statement is hardly falsifiable. Forecasts must be derived logically (e.g. from a rule or data) and formulated precisely."
    },
    "b5_split": {
     "type": "formal",
     "ch": 7,
     "label": "Table split across two pages",
     "expl": "A table (or figure), its headline and its source must be placed together on one single page. If a table continues on the next page, the reader has to turn back and forth and can no longer see the data and its source together."
    },
    "b5_end": {
     "type": "formal",
     "ch": 7,
     "label": "Chapter ends with a table that is not discussed",
     "expl": "A chapter should not start or end with a figure or table, and tables must be introduced and discussed in the text. Here chapter 3 ends directly after the table without any discussion of the results."
    }
   }
  },
  {
   "id": "B06",
   "title": "List of abbreviations and list of references",
   "context": "The following pages are taken from a term paper with the topic ‘Supply chain finance for small and medium-sized enterprises’. The paper uses footnote referencing with full information and therefore a structured list of references. Identify at least five formal or substantial mistakes.",
   "blocks": [
    {
     "k": "h1",
     "x": "II. List of abbreviations"
    },
    {
     "k": "toc",
     "i": 0,
     "x": "ECA – Export credit agency",
     "pg": ""
    },
    {
     "k": "toc",
     "i": 0,
     "x": "[[b6_common|e.g. – for example]]",
     "pg": ""
    },
    {
     "k": "toc",
     "i": 0,
     "x": "[[b6_common|etc. – et cetera]]",
     "pg": ""
    },
    {
     "k": "toc",
     "i": 0,
     "x": "[[b6_scm|SCM – Supply chain management]]",
     "pg": ""
    },
    {
     "k": "toc",
     "i": 0,
     "x": "[[b6_self|SFIF – Supply chain finance instrument framework]]",
     "pg": ""
    },
    {
     "k": "toc",
     "i": 0,
     "x": "SME – Small and medium-sized enterprises",
     "pg": ""
    },
    {
     "k": "toc",
     "i": 0,
     "x": "[[b6_vw|VW – Volkswagen]]",
     "pg": ""
    },
    {
     "k": "h1",
     "x": "VI. List of references"
    },
    {
     "k": "h2",
     "x": "a) Monographs"
    },
    {
     "k": "p",
     "x": "Albrecht, K. (2019): Supply Chain Finance for SMEs, 2nd ed., Wiesbaden."
    },
    {
     "k": "p",
     "x": "[[b6_alpha|Zimmer, L. (2021): Working Capital Management, Berlin.]]"
    },
    {
     "k": "p",
     "x": "Hartmann, P. (2020): Trade Finance in Practice, Munich."
    },
    {
     "k": "p",
     "x": "[[b6_text|Meyer, S. (2022): Introduction to Business Administration – A Textbook for First-Year Students, Stuttgart.]]"
    },
    {
     "k": "h2",
     "x": "b) Articles"
    },
    {
     "k": "p",
     "x": "Becker, T. / Lang, M. (2023): Reverse Factoring and Supplier Liquidity, in: Journal of Supply Chain Finance, Vol. 12, No. 3, pp. 211–234."
    },
    {
     "k": "p",
     "x": "[[b6_legal|German Commercial Code (HGB), as amended on 11 April 2024.]]"
    },
    {
     "k": "h2",
     "x": "c) Other sources"
    },
    {
     "k": "p",
     "x": "Federal Ministry for Economic Affairs (2023): SME Finance Monitor, Berlin."
    },
    {
     "k": "p",
     "x": "[[b6_wiki|Wikipedia (2024): Supply chain finance, retrieved from www.wikipedia.org.]]"
    },
    {
     "k": "p",
     "x": "[[b6_notes|Lecture notes of a fellow student (2023), unpublished.]]"
    }
   ],
   "errors": {
    "b6_common": {
     "type": "formal",
     "ch": 7,
     "label": "Commonly known abbreviations listed",
     "expl": "Commonly known abbreviations such as ‘e.g.’ or ‘etc.’ are not listed in the list of abbreviations; only commonly used abbreviations of the field of study (e.g. ECA, SME)."
    },
    "b6_scm": {
     "type": "formal",
     "ch": 7,
     "label": "General terminology abbreviated",
     "expl": "‘Supply chain management’ is a general term, and abbreviating general terminology is a ‘Do not’ on the slides. The abbreviation saves only a few letters but forces the reader to decode it every time; the term should be written out in full."
    },
    "b6_self": {
     "type": "formal",
     "ch": 7,
     "label": "Self-made abbreviation",
     "expl": "‘SFIF’ is an abbreviation the author invented, like ‘NIEF’ on the slides. Self-made abbreviations must be avoided, because nobody except the author knows them. Only established abbreviations of the field (e.g. ECA, SME) belong in the list."
    },
    "b6_vw": {
     "type": "formal",
     "ch": 7,
     "label": "Institution without legal form and location",
     "expl": "For institutions, the list of abbreviations should give the full name including legal form and location, so that the institution can be identified without doubt: ‘VW – Volkswagen AG, Wolfsburg/Germany’ instead of just ‘VW – Volkswagen’."
    },
    "b6_alpha": {
     "type": "formal",
     "ch": 7,
     "label": "Not in alphabetical order",
     "expl": "Within each segment of a structured list of references, sources are sorted alphabetically (then by date). ‘Zimmer’ must come after ‘Meyer’, not before ‘Hartmann’."
    },
    "b6_text": {
     "type": "substantial",
     "ch": 6,
     "label": "Introductory textbook as a reference",
     "expl": "This is an introductory textbook written for first-year students, so it only covers basics. Such textbooks are problematic references because of their introductory character. Better sources are monographs, advanced textbooks and journal articles, which treat the topic in depth."
    },
    "b6_legal": {
     "type": "formal",
     "ch": 7,
     "label": "Legal text listed under ‘Articles’",
     "expl": "A structured list of references has separate segments: a) monographs, b) articles, c) articles of anonymous authors, d) legal texts, e) other sources. The German Commercial Code is a legal text and belongs to segment d), not under ‘Articles’."
    },
    "b6_wiki": {
     "type": "substantial",
     "ch": 6,
     "label": "Wikipedia as a reference",
     "expl": "Wikipedia lacks credibility: authors and their background are unknown and there is no editorial quality certainty. It can serve for orientation, but the original sources have to be cited."
    },
    "b6_notes": {
     "type": "substantial",
     "ch": 6,
     "label": "Unpublished lecture notes are not citable",
     "expl": "Citability requires that a reference is published, identifiable and checkable. Unpublished notes of a fellow student meet none of these criteria and cannot be retraced by third parties."
    }
   }
  },
  {
   "id": "B07",
   "title": "Cover page of a term paper",
   "context": "The following cover page belongs to a term paper. The topic assigned by the instructor is ‘Competitive strategies of European network carriers against low-cost carriers’. Descriptions of the layout are given in angle brackets. Identify at least five formal or substantial mistakes.",
   "blocks": [
    {
     "k": "center",
     "x": "[[b7_logo|⟨Coloured company logo of Deutsche Lufthansa AG, top right⟩]]"
    },
    {
     "k": "center",
     "x": "[[b7_bg|⟨Full-page background photo of an aircraft at sunset⟩]]"
    },
    {
     "k": "center",
     "x": "[[b7_font|⟨All text printed in a dark-blue, decorative italic font⟩]]"
    },
    {
     "k": "center",
     "x": "Hamburg University of Applied Sciences"
    },
    {
     "k": "center",
     "x": "Faculty of Business and Social Sciences – Department of Business"
    },
    {
     "k": "center",
     "x": "<b>Term paper</b>"
    },
    {
     "k": "center",
     "x": "<b>[[b7_title|Low-cost airlines – the end of the network carriers???]]</b>"
    },
    {
     "k": "center",
     "x": "Course: Academic Research and Writing"
    },
    {
     "k": "center",
     "x": "Instructor: Prof. Dr. M. Schneider"
    },
    {
     "k": "center",
     "x": "[[b7_ref|Referees: Prof. Dr. M. Schneider, Prof. Dr. K. Wolf]]"
    },
    {
     "k": "center",
     "x": "[[b7_sem|Semester: summer term]]"
    },
    {
     "k": "center",
     "x": "Degree programme: International Business, B. Sc."
    },
    {
     "k": "center",
     "x": "Submitted by: [[b7_name|Max]]"
    },
    {
     "k": "center",
     "x": "Matriculation number: 2481357"
    },
    {
     "k": "center",
     "x": "Date and place of birth: 3 May 2003, Lübeck"
    },
    {
     "k": "center",
     "x": "Bergstraße 12, 20095 Hamburg · max.student@example.com · +49 40 1234567"
    },
    {
     "k": "center",
     "x": "Date of submission: 30 June 2026"
    }
   ],
   "errors": {
    "b7_logo": {
     "type": "formal",
     "ch": 7,
     "label": "Company logo on the cover page",
     "expl": "Company logos are explicitly listed as inappropriate on a cover page. A term paper is an academic work, not a company document, and a logo could also suggest that the company commissioned or approved the paper. Appropriate: plain design, black font, white paper."
    },
    "b7_bg": {
     "type": "formal",
     "ch": 7,
     "label": "Distracting picture",
     "expl": "A background photo is a distracting picture and a design element – both are listed as inappropriate on a cover page. The cover page should look plain and neutral: black font on white paper."
    },
    "b7_font": {
     "type": "formal",
     "ch": 7,
     "label": "Coloured, decorative font",
     "expl": "The cover page should use a black font and a plain design. A coloured, decorative italic font is a design element, which is inappropriate because it distracts from the content and looks unprofessional in an academic context."
    },
    "b7_title": {
     "type": "substantial",
     "ch": 2,
     "label": "Redrafted, journalistic title",
     "expl": "A change of the title of a research project is strictly forbidden (true and fair representation). The assigned topic must appear unchanged; in addition, ‘the end …???’ is journalistic and not academic language."
    },
    "b7_ref": {
     "type": "formal",
     "ch": 7,
     "label": "Referees on a term paper",
     "expl": "Titles and names of referees are only stated on the cover page of a thesis project. A term paper names the course title, the instructor and the semester."
    },
    "b7_sem": {
     "type": "formal",
     "ch": 7,
     "label": "Semester incomplete (year missing)",
     "expl": "The semester must be identifiable, including the year: ‘summer term 2026’ (slide example: ‘summer term 2010’). ‘Summer term’ alone does not say which semester the paper belongs to, e.g. if it is archived or checked later."
    },
    "b7_name": {
     "type": "formal",
     "ch": 7,
     "label": "Family name missing",
     "expl": "The cover page must show the author’s first name and family name. ‘Max’ alone does not identify the author – especially important for grading and for the declaration of originality."
    }
   }
  },
  {
   "id": "B08",
   "title": "Main body page: argumentation and research logic",
   "context": "The following page is taken from chapter 2.3 of a term paper with the topic ‘Home office and employee productivity in German service companies’. Identify at least five formal or substantial mistakes.",
   "blocks": [
    {
     "k": "h2",
     "x": "2.3 Empirical findings on home office and productivity"
    },
    {
     "k": "p",
     "x": "[[b8_common|It is common knowledge that employees working from home are more productive.]] [[b8_ind|We looked at three consulting firms in Hamburg that introduced home office in 2021, and all of them reported higher revenues afterwards. This proves that home office always increases productivity.]]"
    },
    {
     "k": "p",
     "x": "[[b8_hyp|Our working hypothesis, which is fully substantiated, reflected and empirically tested, states that home office has a positive impact on productivity.]] [[b8_mean|Productivity is generally influenced by various factors to a certain extent.]]"
    },
    {
     "k": "p",
     "x": "[[b8_corr|Müller (2022) found a correlation between the number of home office days and employee satisfaction; therefore, home office days cause satisfaction, which in turn causes higher productivity.]] [[b8_logic|If home office increases productivity, then revenues rise. Revenues have risen. Therefore, home office has increased productivity.]]"
    },
    {
     "k": "p",
     "x": "[[b8_pers|By the way, the author’s own experience as a working student confirms this, because working from the sofa was very relaxing.]] [[b8_old|According to the Federal Statistical Office (2003), only 3 % of employees work from home, so the phenomenon is still marginal today.]]"
    }
   ],
   "errors": {
    "b8_common": {
     "type": "substantial",
     "ch": 2,
     "label": "Unsupported claim (‘common knowledge’)",
     "expl": "‘It is common knowledge’ replaces evidence with an assumption. In academic work every claim must be traceable, i.e. backed by a source or an argument, so that others can check it (inter-subjective comprehensibility). Correct would be e.g. ‘Several studies find … (Author, year).’"
    },
    "b8_ind": {
     "type": "substantial",
     "ch": 3,
     "label": "Inductive overgeneralisation from three cases",
     "expl": "Three observations cannot prove a universal statement (‘always’). Induction extends limited information; universal propositions can only be falsified, never verified. In addition, revenue is not the same as productivity."
    },
    "b8_hyp": {
     "type": "substantial",
     "ch": 4,
     "label": "Working hypothesis described as a scientific hypothesis",
     "expl": "A fully formulated, substantiated, reflected and empirically testable hypothesis is a scientific hypothesis. A working hypothesis is only a first draft of an assumed cause-effect relationship that is yet to be reflected."
    },
    "b8_mean": {
     "type": "substantial",
     "ch": 3,
     "label": "Meaningless, non-falsifiable statement",
     "expl": "‘Influenced by various factors to a certain extent’ lacks any precision and can never be disputed – like ‘Actions will have consequences’ on the slides. Statements must be formulated in a falsifiable way."
    },
    "b8_corr": {
     "type": "substantial",
     "ch": 3,
     "label": "Correlation taken as causal proof",
     "expl": "A statistical correlation supports at most an indicator hypothesis (statistical explanation, but no logical explanation). Concluding a causal chain from it is not justified; a causal hypothesis needs a logical derivation."
    },
    "b8_logic": {
     "type": "substantial",
     "ch": 3,
     "label": "Invalid logical conclusion (affirming the consequent)",
     "expl": "‘If A then B; B holds; therefore A’ is neither modus ponens (A holds → B) nor modus tollens (B does not hold → not A). Revenues may have risen for other reasons."
    },
    "b8_pers": {
     "type": "substantial",
     "ch": 9,
     "label": "Personal, colloquial anecdote",
     "expl": "Personal statements and colloquial style (‘working from the sofa was very relaxing’) are not academic evidence and violate accurate academic language and focus on the topic."
    },
    "b8_old": {
     "type": "substantial",
     "ch": 2,
     "label": "Outdated data used for a current statement",
     "expl": "The data is from 2003 but is used to describe the situation ‘today’. The principle of accuracy requires current data (currentness of data); the share of people working from home has changed fundamentally since then, especially after the pandemic. Current statistics must be used."
    }
   }
  },
  {
   "id": "B09",
   "title": "Research question, research method and course of investigation",
   "context": "The following page is taken from the introduction of a term paper with the topic ‘Customer acceptance of AI-based chatbots in German retail banking’. Identify at least five formal or substantial mistakes.",
   "blocks": [
    {
     "k": "p",
     "x": "<i>(… end of chapter 1.1 Research problem)</i> Against this background, the aim of this paper is formulated as follows: [[b9_rq|Do bank customers like chatbots?]]"
    },
    {
     "k": "h2",
     "x": "1.2 Research method"
    },
    {
     "k": "p",
     "x": "[[b9_qual|This paper follows a qualitative research approach: a standardised online questionnaire with closed questions is sent to 1,000 bank customers and the numerical answers are evaluated with a regression analysis.]] [[b9_lit|In addition, literature-based research is conducted in order to generate a completely new theory of technology acceptance.]] [[b9_style|The paper follows the hypothesis-driven style, because this style typically reflects the working style of business reality and is the easiest style for inexperienced researchers.]] [[b9_late|The hypothesis is formulated at the end of the paper after the empirical survey,]] [[b9_verif|and thereby the hypothesis ‘All bank customers accept chatbots’ will be verified.]]"
    },
    {
     "k": "h2",
     "x": "1.3 Course of investigation"
    },
    {
     "k": "p",
     "x": "[[b9_ord|Chapter 2 presents the results of the online survey, before the theoretical foundations of technology acceptance are explained in chapter 3.]] [[b9_split|Finally, chapter 4 summarises the findings and chapter 5 gives an outlook.]]"
    }
   ],
   "errors": {
    "b9_rq": {
     "type": "substantial",
     "ch": 4,
     "label": "Closed and imprecise research question",
     "expl": "‘Do … like …?’ can be answered with yes/no and ‘like’ is imprecise. A research question should be open-ended and precise, e.g. ‘Which factors determine the acceptance of AI-based chatbots by customers of German retail banks?’"
    },
    "b9_qual": {
     "type": "substantial",
     "ch": 4,
     "label": "Quantitative research labelled as qualitative",
     "expl": "A standardised questionnaire with numerical answers and regression analysis is quantitative research (collection and analysis of numerical data). Qualitative research collects non-standardised data, e.g. interview protocols."
    },
    "b9_lit": {
     "type": "substantial",
     "ch": 4,
     "label": "Literature-based research confused with theoretical research",
     "expl": "Generating a new theory is the aim of theoretical research. Literature-based research does something else: it critically reflects and analyses the existing state of knowledge (what has already been written). The paper mixes up the two forms of philosophical research."
    },
    "b9_style": {
     "type": "substantial",
     "ch": 4,
     "label": "Wrong characterisation of the hypothesis-driven style",
     "expl": "The slides state the opposite: the hypothesis-driven style typically does not reflect business reality, and one has to be quite experienced to identify a suitable hypothesis before the analysis."
    },
    "b9_late": {
     "type": "substantial",
     "ch": 4,
     "label": "Contradiction: hypothesis-driven style but hypothesis formulated at the end",
     "expl": "In the hypothesis-driven style the hypothesis is formulated together with the research question at the beginning. Formulating it after the analysis/survey corresponds to a solution-driven style; the description is inconsistent (clearness)."
    },
    "b9_verif": {
     "type": "substantial",
     "ch": 3,
     "label": "Universal hypothesis cannot be verified",
     "expl": "‘All bank customers accept chatbots’ is a universal proposition (it makes a claim about all customers). Universal propositions can be falsified by a single counter-example, but they can never be verified, because you can never ask every customer – no matter how large the survey is."
    },
    "b9_ord": {
     "type": "substantial",
     "ch": 4,
     "label": "Illogical order: empirical results before theoretical foundations",
     "expl": "In the empirical solution-driven style the theoretical analysis comes first, then the hypothesis, then the empirical survey. Presenting survey results before the theory breaks the logic of the research process."
    },
    "b9_split": {
     "type": "formal",
     "ch": 9,
     "label": "Conclusion split into two main chapters",
     "expl": "Summary, critical acclaim and outlook are the three elements of one conclusion, which is always the last chapter. A separate ‘outlook chapter’ after the summary contradicts this structure (and the critical acclaim is missing)."
    }
   }
  },
  {
   "id": "B10",
   "title": "Abstract of a master’s thesis",
   "context": "The following page is the abstract of a master’s thesis with the topic ‘Hedging spot market price risks for logistics service providers with container freight derivatives (CFD)’. An abstract is optional for theses. Identify at least five formal or substantial mistakes.",
   "blocks": [
    {
     "k": "h1",
     "x": "Abstract"
    },
    {
     "k": "p",
     "x": "[[b10_coll|In my thesis I want to show you why container freight derivatives (CFD) are really cool for logistics companies.]] Logistics service providers that charter container capacity on the spot market face highly volatile freight rates, which makes price quotations and profitability calculations difficult. [[b10_abbr|Especially LSP with unpredictable transportation volumes cannot conclude long-term contracts.]] Container freight derivatives allow companies to lock in future transportation costs by concluding forward agreements. The thesis describes the process of hedging with CFD. [[b10_all|Hedging with CFD eliminates all risks of logistics companies.]] [[b10_old|The data used stem from a market survey conducted in 1998.]] [[b10_res|The results of the analysis will be presented later in the thesis.]]"
    },
    {
     "k": "p",
     "x": "<b>Keywords:</b> [[b10_kw|logistics, finance, risk, ships]]"
    },
    {
     "k": "p",
     "x": "<b>JEL classification:</b> [[b10_jel|Finance and Logistics]]"
    },
    {
     "k": "p",
     "x": "[[b10_len|(The abstract continues on pages III–V.)]]"
    }
   ],
   "errors": {
    "b10_coll": {
     "type": "substantial",
     "ch": 9,
     "label": "Personal, colloquial style",
     "expl": "‘I want to show you … really cool’ is colloquial and addresses the reader personally. Academic writing requires accurate academic language and avoids journalistic or colloquial styles."
    },
    "b10_abbr": {
     "type": "formal",
     "ch": 7,
     "label": "Abbreviation ‘LSP’ not introduced",
     "expl": "‘LSP’ is used without being introduced. An abbreviation must be explained where it is introduced (‘logistics service providers (LSP)’) and listed in the list of abbreviations."
    },
    "b10_all": {
     "type": "substantial",
     "ch": 3,
     "label": "Overgeneralisation (‘eliminates all risks’)",
     "expl": "Container freight derivatives hedge spot market price risks only – not all risks (e.g. counterparty, volume or operational risks). Sweeping universal claims are imprecise and easily falsified."
    },
    "b10_old": {
     "type": "substantial",
     "ch": 2,
     "label": "Outdated data",
     "expl": "Data from 1998 violates the principle of currentness of data – and it is contradictory, because the paper itself describes container freight derivatives as a relatively new product. Current market data that reflect the status quo are required."
    },
    "b10_res": {
     "type": "substantial",
     "ch": 7,
     "label": "Short summary without results",
     "expl": "The abstract is meant for filing/archiving and for examination or advisory boards; its short summary has to state the main findings, not refer to later chapters."
    },
    "b10_kw": {
     "type": "formal",
     "ch": 7,
     "label": "Keywords too general",
     "expl": "Keywords must be specific to the content (e.g. ‘container freight derivatives, hedging, freight rate risk, logistics service providers, forward agreements’). ‘Logistics, finance, risk, ships’ is far too general."
    },
    "b10_jel": {
     "type": "formal",
     "ch": 7,
     "label": "No JEL codes given",
     "expl": "A JEL classification consists of codes of the Journal of Economic Literature (e.g. G13 for derivatives pricing, G32 for financial risk and risk management), not of free-text subject names."
    },
    "b10_len": {
     "type": "formal",
     "ch": 7,
     "label": "Abstract longer than one page",
     "expl": "An abstract must not be longer than one page. Its purpose is to give a quick overview (for filing, archiving or an examination board); an abstract over several pages loses exactly this function."
    }
   }
  }
 ],

 // ---------- PART C: topic interpretation cases with model answers and rubrics ----------
 partC: [
  {
   "id": "C00",
   "sample": true,
   "topic": "Tuition fees and academic success",
   "aim": "function",
   "info": {
    "heading": "Tuition",
    "text": [
     "“Tuition payments, known primarily as tuition in American English and as tuition fees in British English, Canadian English, Australian English, New Zealand English and Indian English, refer to a fee charged for educational instruction during higher education.",
     "Tuition payments are charged by educational institutions in some countries to assist with funding of staff and faculty, course offerings, lab equipment, computer systems, libraries, facility upkeep and to provide a comfortable student learning experience. In most countries, especially in non-English-speaking countries, there are no or only nominal tuition fees for all forms of education, including university and other higher education.”"
    ],
    "source": "Source: http://en.wikipedia.org/wiki/tuition (as given in the official sample exam)"
   },
   "tasks": [
    {
     "pts": 10,
     "q": "Please analyse why an interpretation directed at a functional aim might be meaningful.",
     "model": "Negative interpretation: The topic covers tuition fees in higher education and the academic success of students. Not covered are e.g. school fees in primary/secondary education, the general public funding of universities through taxes, student loans or living costs as such, and the success of institutions in rankings.\n\nPositive interpretation: All five aims are conceivable – a description (how are tuition fee systems designed?), a causal connection (what is the effect of fees on success?), an intention (what do institutions intend to achieve with fees?), a function (how do fees and success influence each other?) and a comparison (countries with vs. without fees).\n\nWhy a functional aim is meaningful: The topic joins two elements with ‘and’ without stating a direction – this points to a relationship that can run both ways (interdependency).\n• Fees → success: According to the information, fees fund staff, course offerings, lab equipment, libraries and a comfortable learning experience, which can improve learning conditions. Fees may also increase students’ motivation to finish quickly – or, on the other hand, force students into part-time jobs and deter capable but less wealthy students.\n• Success → fees: Institutions whose students are successful (e.g. high graduation rates, good career prospects) can justify and charge higher fees; fee models can also be linked to success (fee waivers or scholarships for high achievers, income-contingent repayment).\nOnly a functional interpretation captures both directions and therefore addresses the topic completely (qualitative completeness) and avoids a one-sided view. It is also decision-useful for universities and policymakers who design fee systems.",
     "rubric": [
      {
       "c": "Negative interpretation with plausible exclusions (what the topic does NOT cover)",
       "p": 2
      },
      {
       "c": "Positive interpretation: names the possible aims (description, causal connection, intention, function, comparison)",
       "p": 2
      },
      {
       "c": "Defines the functional aim correctly as a mutual relationship / interdependency (A ↔ B), not one-directional",
       "p": 2
      },
      {
       "c": "Explains the direction ‘fees → academic success’ with arguments linked to the given information",
       "p": 2
      },
      {
       "c": "Explains the reverse direction ‘academic success → fees’ with at least one argument",
       "p": 1
      },
      {
       "c": "Justifies why this aim is meaningful (e.g. ‘and’ in the topic, completeness, decision usefulness)",
       "p": 1
      }
     ]
    },
    {
     "pts": 10,
     "q": "Please develop a (direct) research question for a functional aim.",
     "model": "Model research question:\n“How do tuition fees in higher education and the academic success of students influence each other?”\n\nAlternative:\n“What is the impact of tuition fees on the academic success of students, and what is the impact of students’ academic success on the design of tuition fees?”\n\nWhy this works: It is a direct question (main clause, question mark), it is open-ended (no yes/no answer possible), it contains both elements of the topic without reinterpreting them, and the phrase ‘influence each other’ expresses the interdependency (both directions) that characterises a functional aim.",
     "rubric": [
      {
       "c": "Direct question: main clause ending with a question mark",
       "p": 2
      },
      {
       "c": "Open-ended (cannot be answered with yes/no)",
       "p": 2
      },
      {
       "c": "Expresses BOTH directions of influence (‘influence each other’, ‘impact of A on B and of B on A’)",
       "p": 3
      },
      {
       "c": "Uses the terms of the topic precisely without changing/reinterpreting the topic",
       "p": 2
      },
      {
       "c": "Precise and focused (no vague adjectives, researchable within a term paper)",
       "p": 1
      }
     ]
    },
    {
     "pts": 5,
     "q": "Please provide a draft outline for a term paper with a functional aim encompassing five to six main chapters (including introduction and conclusion).",
     "model": "1 Introduction\n   1.1 Research problem\n   1.2 Research method\n   1.3 Course of investigation\n2 Tuition fees in higher education\n   2.1 Definition and purposes of tuition fees\n   2.2 Tuition fee models\n3 Academic success of students\n   3.1 Definition and measurement of academic success\n   3.2 Determinants of academic success\n4 Interdependencies between tuition fees and academic success\n   4.1 Impact of tuition fees on academic success\n   4.2 Impact of academic success on tuition fees\n5 Conclusion\n   5.1 Summary\n   5.2 Critical acclaim\n   5.3 Outlook",
     "rubric": [
      {
       "c": "Introduction is chapter 1 (research problem, [research method], course of investigation)",
       "p": 1
      },
      {
       "c": "Conclusion is the last chapter (summary, critical acclaim, outlook)",
       "p": 1
      },
      {
       "c": "Five to six main chapters in total",
       "p": 1
      },
      {
       "c": "Core chapter(s) mirror the functional logic: both directions of influence are analysed",
       "p": 1
      },
      {
       "c": "Formally correct decadal numbering (no full stop after last cipher, at least two subchapters per subdivided chapter)",
       "p": 1
      }
     ]
    }
   ]
  },
  {
   "id": "C01",
   "topic": "Minimum wage and employment in the German hospitality sector",
   "aim": "causal",
   "info": {
    "heading": "Statutory minimum wage",
    "text": [
     "Germany introduced a statutory minimum wage of EUR 8.50 per hour on 1 January 2015. Since then, it has been raised several times; in October 2022 it exceeded EUR 12 per hour for the first time. Adjustments are usually proposed by the Minimum Wage Commission, which consists of representatives of employers and trade unions.",
     "The hospitality sector (hotels, restaurants, catering) employs a particularly high share of low-wage earners and marginally employed persons (‘mini-jobbers’). Employer associations warned that rising wage costs would lead to job losses, while trade unions argued that higher wages strengthen purchasing power and reduce staff turnover.",
     "A hotel chain operating 40 hotels in Germany has observed a decline in the number of mini-jobs in its restaurants. The executive board asks the HR department to investigate whether the latest increase of the minimum wage is responsible for this decline."
    ],
    "source": "Source: own compilation for exam practice."
   },
   "tasks": [
    {
     "pts": 10,
     "q": "Please perform a negative and a positive interpretation of the topic and explain why an interpretation directed at a causal connection might be meaningful in the given context.",
     "model": "Negative interpretation: Not covered are other sectors (e.g. retail, agriculture), other countries or the EU minimum wage directive, wages set by collective agreements above the minimum wage, the period before 2015 and other effects of the minimum wage (e.g. on prices or inequality) that are not related to employment.\n\nPositive interpretation:\n• Description: How is the minimum wage regulated and how has employment in hospitality developed?\n• Causal connection: What is the effect of minimum wage increases on employment in hospitality?\n• Intention: What does the legislator intend to achieve with the minimum wage?\n• Function: How do the minimum wage and employment influence each other (e.g. labour shortage → higher wage adjustments)?\n• Comparison: Employment before vs. after an increase; hospitality vs. other sectors.\n\nDecision: The problem setting determines the aim (problem-based interpretation). The board asks whether the minimum wage increase is ‘responsible for’ the decline in mini-jobs – this is a question about cause (minimum wage increase) and effect (fewer mini-jobs) in one direction, comparable to the mini case ‘Smelly shampoo’. Possible mechanism: higher wage costs per hour, combined with the earnings ceiling of mini-jobs, reduce the hours a mini-jobber can work or make regular part-time contracts more attractive. A functional aim would add a reverse direction that is not relevant for the board’s decision, so the causal connection is the most decision-useful interpretation.",
     "rubric": [
      {
       "c": "Negative interpretation with plausible exclusions",
       "p": 2
      },
      {
       "c": "Positive interpretation applying the five aims to the topic",
       "p": 2
      },
      {
       "c": "Links the decision to the context (‘responsible for’ → cause-effect) as a problem-based interpretation",
       "p": 3
      },
      {
       "c": "Identifies cause and effect correctly and sketches a plausible mechanism",
       "p": 2
      },
      {
       "c": "Distinguishes the causal connection from the functional aim (one vs. two directions)",
       "p": 1
      }
     ]
    },
    {
     "pts": 10,
     "q": "Please develop a (direct) research question and a corresponding research hypothesis (if-then) for an aim directed at a causal connection.",
     "model": "Research question (direct, open-ended):\n“To what extent is the latest increase of the statutory minimum wage responsible for the decline of mini-jobs in the restaurants of German hotel chains?”\n(Alternative: “What effect did the increases of the statutory minimum wage have on marginal employment in the German hospitality sector?”)\n\nResearch hypothesis (working/scientific hypothesis in if-then form):\n“If the statutory minimum wage increases while the earnings ceiling for mini-jobs remains unchanged, then the number of hours that can be worked within a mini-job decreases, and thereby hospitality businesses replace mini-jobs by regular part-time employment, so that the number of mini-jobs declines.”\n\nThe hypothesis names the cause (minimum wage increase), the mechanism and the effect (decline of mini-jobs) and is formulated precisely enough to be falsifiable.",
     "rubric": [
      {
       "c": "Direct research question (main clause, question mark)",
       "p": 2
      },
      {
       "c": "Open-ended question (e.g. ‘to what extent’, ‘what effect’) instead of yes/no",
       "p": 2
      },
      {
       "c": "Cause and effect clearly identified in one direction",
       "p": 2
      },
      {
       "c": "Hypothesis in if-then form with a specified mechanism (cause → mechanism → effect)",
       "p": 3
      },
      {
       "c": "Hypothesis is precise and falsifiable (no vague words like ‘strong impact’)",
       "p": 1
      }
     ]
    },
    {
     "pts": 5,
     "q": "Please provide a draft outline for a term paper with an aim directed at a causal connection encompassing five to six main chapters (including introduction and conclusion).",
     "model": "1 Introduction\n   1.1 Research problem\n   1.2 Research method\n   1.3 Course of investigation\n2 Statutory minimum wage in Germany\n   2.1 Legal framework\n   2.2 Development of the minimum wage level\n3 Employment in the German hospitality sector\n   3.1 Structure of employment\n   3.2 Marginal employment (mini-jobs)\n4 Effect of minimum wage increases on mini-jobs in the hospitality sector\n   4.1 Theoretical transmission mechanisms\n   4.2 Empirical evidence\n5 Conclusion\n   5.1 Summary\n   5.2 Critical acclaim\n   5.3 Outlook",
     "rubric": [
      {
       "c": "Introduction first with research problem, (method) and course of investigation",
       "p": 1
      },
      {
       "c": "Conclusion last with summary, critical acclaim, outlook",
       "p": 1
      },
      {
       "c": "Five to six main chapters",
       "p": 1
      },
      {
       "c": "Structure follows the causal logic: cause chapter, effect chapter, analysis of the effect",
       "p": 1
      },
      {
       "c": "Formally correct decadal numbering",
       "p": 1
      }
     ]
    }
   ]
  },
  {
   "id": "C02",
   "topic": "Home office and employee productivity",
   "aim": "function",
   "info": {
    "heading": "Working from home",
    "text": [
     "Since the COVID-19 pandemic, hybrid working models have become widespread in Germany. In many service companies, employees may work from home on two or three days per week.",
     "Studies report mixed effects: employees save commuting time and experience fewer interruptions, but coordination becomes more difficult and informal knowledge exchange decreases. At the same time, several large companies have recently reduced home office options and asked employees to return to the office more often, arguing that performance had suffered.",
     "Managers report that they grant more flexibility to teams that deliver measurable results reliably, whereas teams with declining output are asked to return to the office."
    ],
    "source": "Source: own compilation for exam practice."
   },
   "tasks": [
    {
     "pts": 10,
     "q": "Please analyse why an interpretation directed at a functional aim might be meaningful.",
     "model": "Negative interpretation: The topic concerns home office (working from home) and the productivity of employees. Not covered are e.g. mobile work while travelling, co-working spaces, other HR topics such as remuneration, the productivity of machines or of the whole economy, and health effects that are not related to productivity.\n\nPositive interpretation: A description (how are home office models designed?), a causal connection (effect of home office on productivity), an intention (what do companies intend with home office?), a function (how do home office and productivity influence each other?) or a comparison (office vs. home office; different companies) is conceivable.\n\nWhy function: The information shows that the relationship runs in both directions:\n• Home office → productivity: saved commuting time and fewer interruptions can raise productivity; more difficult coordination and less informal knowledge exchange can lower it.\n• Productivity → home office: companies grant more home office to teams that deliver measurable results reliably and call teams with declining output back to the office (return-to-office policies).\nA purely causal analysis would ignore that the observed productivity level itself determines how much home office is granted – the relationship is an interdependency. The functional aim therefore covers the topic completely and avoids false conclusions (e.g. that productive teams are productive because of home office, while in fact they got home office because they were productive).",
     "rubric": [
      {
       "c": "Negative interpretation with plausible exclusions",
       "p": 2
      },
      {
       "c": "Positive interpretation naming the possible aims",
       "p": 2
      },
      {
       "c": "Defines the functional aim as mutual influence / interdependency (A ↔ B)",
       "p": 2
      },
      {
       "c": "Direction home office → productivity with arguments from the information",
       "p": 2
      },
      {
       "c": "Direction productivity → home office with arguments from the information",
       "p": 1
      },
      {
       "c": "Justification why function is more meaningful than a one-directional causal view",
       "p": 1
      }
     ]
    },
    {
     "pts": 10,
     "q": "Please develop a (direct) research question for a functional aim.",
     "model": "Model research question:\n“How do home office arrangements and the productivity of employees in German service companies influence each other?”\n\nAlternative:\n“What is the impact of home office on employee productivity, and what is the impact of employee productivity on the home office arrangements granted by companies?”\n\nDirect (question mark, main clause), open-ended, both directions of influence expressed, terms of the topic kept.",
     "rubric": [
      {
       "c": "Direct question (main clause, question mark)",
       "p": 2
      },
      {
       "c": "Open-ended",
       "p": 2
      },
      {
       "c": "Both directions of influence expressed",
       "p": 3
      },
      {
       "c": "Precise use of the topic’s terms, no reinterpretation",
       "p": 2
      },
      {
       "c": "Focused and researchable (e.g. sector/country specified)",
       "p": 1
      }
     ]
    },
    {
     "pts": 5,
     "q": "Please provide a draft outline for a term paper with a functional aim encompassing five to six main chapters (including introduction and conclusion).",
     "model": "1 Introduction\n   1.1 Research problem\n   1.2 Research method\n   1.3 Course of investigation\n2 Home office arrangements\n   2.1 Definition and legal framework\n   2.2 Models of hybrid work\n3 Employee productivity\n   3.1 Definition of productivity\n   3.2 Measurement of productivity in service companies\n4 Interdependencies between home office and productivity\n   4.1 Impact of home office on productivity\n   4.2 Impact of productivity on home office arrangements\n5 Conclusion\n   5.1 Summary\n   5.2 Critical acclaim\n   5.3 Outlook",
     "rubric": [
      {
       "c": "Introduction first (research problem, [method], course of investigation)",
       "p": 1
      },
      {
       "c": "Conclusion last (summary, critical acclaim, outlook)",
       "p": 1
      },
      {
       "c": "Five to six main chapters",
       "p": 1
      },
      {
       "c": "Both directions analysed in the core chapter",
       "p": 1
      },
      {
       "c": "Formally correct decadal numbering",
       "p": 1
      }
     ]
    }
   ]
  },
  {
   "id": "C03",
   "topic": "The digital euro and the European payments landscape",
   "aim": "intention",
   "info": {
    "heading": "Digital euro",
    "text": [
     "The digital euro would be a digital form of central bank money issued by the Eurosystem and available to everyone in the euro area for everyday payments. It is intended to complement cash, not to replace it.",
     "In June 2023, the European Commission proposed a legal framework for the digital euro; in November 2023, the ECB started a preparation phase. Design features under discussion include legal tender status, offline payments, free basic use for private individuals, a high level of privacy and holding limits per person in order to avoid large outflows of deposits from banks.",
     "Today, a large share of card and mobile payments in the euro area is processed by non-European card schemes and technology companies, while the use of cash is declining.",
     "Members of a consumer protection association are confused about why the ECB pursues a digital euro although cards and payment apps already exist. They ask a research institute for a paper that clarifies the purpose of the project."
    ],
    "source": "Source: own compilation for exam practice."
   },
   "tasks": [
    {
     "pts": 10,
     "q": "Please analyse why an interpretation directed at an intention might be meaningful.",
     "model": "Negative interpretation: The topic covers the digital euro as a retail central bank digital currency in the euro area and its role in European payments. Not covered are private cryptocurrencies and stablecoins (unless as a comparison point), digital currencies of other central banks (e.g. China), wholesale central bank money for interbank settlement and general monetary policy.\n\nPositive interpretation: description (how would the digital euro work?), causal connection (effect of the digital euro on bank deposits), intention (what does the Eurosystem intend to achieve?), function (how do the digital euro and private payment solutions influence each other?), comparison (digital euro vs. cash vs. cards).\n\nWhy intention: The problem setting asks for the purpose of the project – like the mini case ‘Printing money’, where the Bundestag asked for the purpose of the ECB’s action. An intention-directed aim investigates aims, purposes and motives (e.g. keeping public money usable in a digital economy as cash use declines, strengthening Europe’s independence from non-European payment providers, providing a free and pan-European means of payment) and the means/instruments to achieve them (legal tender status, offline payments, privacy, holding limits to protect bank funding). Answering the association’s confusion requires exactly this: not how the digital euro works technically, but why it is pursued and how its design serves these aims.",
     "rubric": [
      {
       "c": "Negative interpretation with plausible exclusions",
       "p": 2
      },
      {
       "c": "Positive interpretation naming the possible aims",
       "p": 2
      },
      {
       "c": "Defines intention correctly (aims, purposes, motives AND means/instruments)",
       "p": 2
      },
      {
       "c": "Links the decision to the context (‘clarify the purpose’) – problem-based interpretation",
       "p": 2
      },
      {
       "c": "Gives concrete examples of intentions and instruments from the information",
       "p": 2
      }
     ]
    },
    {
     "pts": 10,
     "q": "Please develop a research question for an aim directed at an intention – once as a direct and once as an indirect question.",
     "model": "Direct question:\n“Which purposes does the Eurosystem pursue with the introduction of a digital euro, and by which design features are these purposes to be achieved?”\n\nIndirect question:\n“The aim of this paper is to analyse which purposes the Eurosystem pursues with the introduction of a digital euro and by which design features it intends to achieve them.”\n\nThe direct question is a main clause with a question mark; the indirect question embeds the question in a subordinate clause (no question mark). Both are open-ended and ask for aims and means – the two components of an intention.",
     "rubric": [
      {
       "c": "Correct direct question (main clause, question mark)",
       "p": 2
      },
      {
       "c": "Correct indirect question (subordinate clause, no question mark, e.g. ‘The aim of this paper is to analyse …’)",
       "p": 3
      },
      {
       "c": "Both questions are open-ended",
       "p": 2
      },
      {
       "c": "Both ask for intentions/purposes (and ideally the means to achieve them)",
       "p": 2
      },
      {
       "c": "Precise terminology from the topic",
       "p": 1
      }
     ]
    },
    {
     "pts": 5,
     "q": "Please provide a draft outline for a term paper with an aim directed at an intention encompassing five to six main chapters (including introduction and conclusion).",
     "model": "1 Introduction\n   1.1 Research problem\n   1.2 Research method\n   1.3 Course of investigation\n2 Payments landscape in the euro area\n   2.1 Cash and cashless payment instruments\n   2.2 Role of non-European payment providers\n3 Concept of the digital euro\n   3.1 Central bank digital currencies\n   3.2 Design features of the digital euro\n4 Intentions of the digital euro\n   4.1 Purposes pursued by the Eurosystem\n   4.2 Design features as instruments to achieve the purposes\n5 Conclusion\n   5.1 Summary\n   5.2 Critical acclaim\n   5.3 Outlook",
     "rubric": [
      {
       "c": "Introduction first (research problem, [method], course of investigation)",
       "p": 1
      },
      {
       "c": "Conclusion last (summary, critical acclaim, outlook)",
       "p": 1
      },
      {
       "c": "Five to six main chapters",
       "p": 1
      },
      {
       "c": "Core chapter analyses purposes AND means/instruments",
       "p": 1
      },
      {
       "c": "Formally correct decadal numbering",
       "p": 1
      }
     ]
    }
   ]
  },
  {
   "id": "C04",
   "topic": "Green bonds and municipal infrastructure financing",
   "aim": "comparison",
   "info": {
    "heading": "Green bonds",
    "text": [
     "Green bonds are bonds whose proceeds are used exclusively for environmentally beneficial projects. Issuers have to define eligible projects, report on the use of proceeds and often obtain an external review. Several German federal states and the Federal Republic of Germany have issued green or sustainability bonds in recent years.",
     "German municipalities traditionally finance infrastructure through municipal loans from banks, which are quick to arrange and involve little documentation. Whether green bonds offer lower interest costs (a so-called ‘greenium’) is debated; at the same time, issuing a bond involves additional costs for rating, documentation and reporting, and usually requires a minimum issue size.",
     "The treasurer of a large German city has to decide how to finance a new tram line. An investment bank proposes a green bond. The treasurer asks the finance department for an appraisal of the green bond compared with a conventional municipal loan."
    ],
    "source": "Source: own compilation for exam practice."
   },
   "tasks": [
    {
     "pts": 10,
     "q": "Please analyse why an interpretation directed at a comparison might be meaningful.",
     "model": "Negative interpretation: The topic covers green bonds as an instrument to finance municipal infrastructure. Not covered are corporate green bonds, social bonds, the financing of federal or state budgets as such, private infrastructure investments (e.g. PPP projects, unless as a reference) and environmental policy in general.\n\nPositive interpretation: description (how does a municipal green bond issue work?), causal connection (effect of green labels on interest costs), intention (why do municipalities issue green bonds?), function (how do investor demand and municipal issuance influence each other?), comparison (green bond vs. municipal loan; target/actual comparison with the city’s objectives).\n\nWhy comparison: The treasurer faces a decision between two financing alternatives and explicitly asks for an appraisal – like the mini case ‘Clara Couture’. A comparison evaluates equalities, similarities and differences along defined criteria, e.g. interest costs (greenium), transaction and reporting costs, minimum size, speed and flexibility, investor base and reputational effects. It can also be a target/actual comparison: which alternative serves the city’s objectives (low costs, reliable funding, sustainability signal) better? Such an appraisal is directly decision-useful (materiality), whereas e.g. a pure description of green bonds would not answer the treasurer’s question.",
     "rubric": [
      {
       "c": "Negative interpretation with plausible exclusions",
       "p": 2
      },
      {
       "c": "Positive interpretation naming the possible aims",
       "p": 2
      },
      {
       "c": "Defines comparison (equalities/similarities/differences, criteria, target/actual comparison)",
       "p": 2
      },
      {
       "c": "Links the decision to the context (two alternatives, ‘appraisal’ → comparison)",
       "p": 2
      },
      {
       "c": "Names concrete comparison criteria from the information",
       "p": 2
      }
     ]
    },
    {
     "pts": 10,
     "q": "Please develop a (direct) research question for an aim directed at a comparison.",
     "model": "Model research question:\n“How do green bonds and conventional municipal loans differ with regard to financing costs, transaction effort and investor base when financing municipal infrastructure in Germany?”\n\nAlternative (target/actual comparison):\n“To what extent does a green bond serve the financing objectives of a German city better than a conventional municipal loan?”\n\nNote: The slide example ‘Does the Societas Europaea suit the objectives of Clara Couture?’ is a closed question. In the exam an open-ended version (‘to what extent’, ‘how … differ’) is the safer choice, because it invites a differentiated answer.",
     "rubric": [
      {
       "c": "Direct question (main clause, question mark)",
       "p": 2
      },
      {
       "c": "Open-ended (‘how … differ’, ‘to what extent’)",
       "p": 2
      },
      {
       "c": "Clearly compares two alternatives or target vs. actual",
       "p": 3
      },
      {
       "c": "Comparison criteria or objectives are named or implied",
       "p": 2
      },
      {
       "c": "Terms of the topic used precisely",
       "p": 1
      }
     ]
    },
    {
     "pts": 5,
     "q": "Please provide a draft outline for a term paper with an aim directed at a comparison encompassing five to six main chapters (including introduction and conclusion).",
     "model": "1 Introduction\n   1.1 Research problem\n   1.2 Research method\n   1.3 Course of investigation\n2 Municipal infrastructure financing in Germany\n   2.1 Financing needs and budget law requirements\n   2.2 Conventional municipal loans\n3 Green bonds\n   3.1 Definition and standards\n   3.2 Issuance process and requirements\n4 Comparison of green bonds and municipal loans\n   4.1 Comparison criteria\n   4.2 Comparative analysis\n   4.3 Appraisal for the financing of a tram line\n5 Conclusion\n   5.1 Summary\n   5.2 Critical acclaim\n   5.3 Outlook",
     "rubric": [
      {
       "c": "Introduction first (research problem, [method], course of investigation)",
       "p": 1
      },
      {
       "c": "Conclusion last (summary, critical acclaim, outlook)",
       "p": 1
      },
      {
       "c": "Five to six main chapters",
       "p": 1
      },
      {
       "c": "Both alternatives presented, then a comparison chapter with criteria",
       "p": 1
      },
      {
       "c": "Formally correct decadal numbering",
       "p": 1
      }
     ]
    }
   ]
  },
  {
   "id": "C05",
   "topic": "Supply chain due diligence obligations for small and medium-sized enterprises in Germany",
   "aim": "description",
   "info": {
    "heading": "Supply Chain Due Diligence Act (LkSG)",
    "text": [
     "The German Supply Chain Due Diligence Act (Lieferkettensorgfaltspflichtengesetz, LkSG) entered into force on 1 January 2023. It initially applied to companies with at least 3,000 employees in Germany; since 2024 the threshold has been 1,000 employees. Obliged companies have to establish a risk management system, conduct regular risk analyses, implement preventive and remedial measures and set up a complaints procedure. Compliance is monitored by the Federal Office for Economic Affairs and Export Control (BAFA).",
     "Small and medium-sized enterprises (SMEs) are not directly obliged. However, many of them supply large companies, which pass on their requirements via codes of conduct, supplier questionnaires, contractual clauses and audits.",
     "The CEO of a medium-sized supplier of machine parts with 180 employees has received several such questionnaires. She asks a trainee to lay out how the requirements of the act reach the company and which processes the company has to set up to meet them."
    ],
    "source": "Source: own compilation for exam practice."
   },
   "tasks": [
    {
     "pts": 10,
     "q": "Please analyse which of the five potential aims is appropriate in the given problem setting and why an interpretation directed at a description might be meaningful.",
     "model": "Negative interpretation: The topic covers due diligence obligations along supply chains as they concern German SMEs. Not covered are large companies as directly obliged parties (except as customers who pass on requirements), the EU directive on corporate sustainability due diligence, other countries and general sustainability reporting.\n\nPositive interpretation and selection: A causal connection (effect of the act on SMEs’ costs), an intention (purpose of the legislator), a function (interplay of customers’ requirements and suppliers’ processes) or a comparison (SMEs with vs. without obligations) would be conceivable. The problem setting, however, points to a description: the CEO asks the trainee to ‘lay out how’ the requirements reach the company and ‘which processes’ it has to set up – like the mini case ‘Sinking ships’, where a process had to be laid out.\n\nWhy description: A descriptive aim covers facts, structures and processes, agents and instruments – here: the scope of the act (facts), the way requirements are passed on via contracts, questionnaires and audits (process, institutional perspective: who passes on what to whom?) and the internal processes the SME needs (risk analysis, code of conduct, complaints procedure, documentation – technical perspective: how?). Since the company first needs a clear picture before it can evaluate costs or alternatives, a description is the most decision-useful aim in this situation.",
     "rubric": [
      {
       "c": "Negative interpretation with plausible exclusions",
       "p": 2
      },
      {
       "c": "Positive interpretation: considers the other aims and why they are less suitable",
       "p": 2
      },
      {
       "c": "Links the decision to the context (‘lay out how’, ‘which processes’ → description)",
       "p": 3
      },
      {
       "c": "Describes what a descriptive aim covers (facts, structures, processes, agents; perspectives)",
       "p": 2
      },
      {
       "c": "Justifies decision usefulness for the CEO",
       "p": 1
      }
     ]
    },
    {
     "pts": 10,
     "q": "Please develop a (direct) research question for a descriptive aim and explain which interrogative words make it descriptive.",
     "model": "Model research question:\n“How are the due diligence requirements of the German Supply Chain Due Diligence Act passed on to small and medium-sized suppliers, and which processes do these suppliers have to implement in order to fulfil them?”\n\nExplanation: ‘How’ is an interrogative adverb asking for the manner (here: the process of passing on requirements), and ‘which’ is an impersonal interrogative pronoun asking for specific facts (the processes). Typical descriptive questions are ‘how?’, ‘who?’, ‘where?’ and ‘how long?’ – in contrast to ‘why?’ (causal connection/intention) or ‘how do A and B influence each other?’ (function). The question is direct, open-ended and uses the terms of the topic.",
     "rubric": [
      {
       "c": "Direct question (main clause, question mark)",
       "p": 2
      },
      {
       "c": "Open-ended",
       "p": 2
      },
      {
       "c": "Question is clearly descriptive (asks how/who/which, not why or mutual influence)",
       "p": 3
      },
      {
       "c": "Correct explanation of the interrogative words (how = manner/adverb; which/what = pronoun)",
       "p": 2
      },
      {
       "c": "Topic terms used precisely (SMEs, Supply Chain Due Diligence Act)",
       "p": 1
      }
     ]
    },
    {
     "pts": 5,
     "q": "Please provide a draft outline for a term paper with a descriptive aim encompassing five to six main chapters (including introduction and conclusion).",
     "model": "1 Introduction\n   1.1 Research problem\n   1.2 Research method\n   1.3 Course of investigation\n2 The German Supply Chain Due Diligence Act\n   2.1 Scope of application\n   2.2 Due diligence obligations\n3 SMEs as suppliers of obliged companies\n   3.1 Characteristics of SMEs\n   3.2 Transfer of requirements via contracts, questionnaires and audits\n4 Implementation processes in SMEs\n   4.1 Risk analysis\n   4.2 Code of conduct and preventive measures\n   4.3 Complaints procedure and documentation\n5 Conclusion\n   5.1 Summary\n   5.2 Critical acclaim\n   5.3 Outlook",
     "rubric": [
      {
       "c": "Introduction first (research problem, [method], course of investigation)",
       "p": 1
      },
      {
       "c": "Conclusion last (summary, critical acclaim, outlook)",
       "p": 1
      },
      {
       "c": "Five to six main chapters",
       "p": 1
      },
      {
       "c": "Structure follows the descriptive logic (framework → transfer process → processes in SMEs)",
       "p": 1
      },
      {
       "c": "Formally correct decadal numbering",
       "p": 1
      }
     ]
    }
   ]
  },
  {
   "id": "C06",
   "topic": "Influencer marketing and brand trust",
   "aim": "function",
   "info": {
    "heading": "Influencer marketing",
    "text": [
     "Companies spend a growing share of their marketing budgets on cooperations with social media influencers. The effect of such campaigns depends heavily on the credibility of the influencer: followers perceive influencers as authentic and transfer this trust to the brands they present. In Germany, sponsored posts have to be clearly labelled as advertising.",
     "Brands that already enjoy high consumer trust find it easier to attract well-known influencers, who in turn protect their own credibility by cooperating only with reputable brands. Conversely, scandals of a brand can damage the reputation of the influencers who promoted it, and influencers who cooperate with too many brands lose credibility, which reduces the trust consumers place in the advertised brands."
    ],
    "source": "Source: own compilation for exam practice."
   },
   "tasks": [
    {
     "pts": 10,
     "q": "Please analyse why an interpretation directed at a functional aim might be meaningful.",
     "model": "Negative interpretation: The topic covers influencer marketing (cooperations with social media influencers) and consumers’ trust in brands. Not covered are e.g. classical advertising (TV, print), affiliate marketing without influencers, trust in companies as employers, and other brand metrics such as brand awareness or sales unless they relate to trust.\n\nPositive interpretation: description (forms of influencer cooperations), causal connection (effect of influencer campaigns on brand trust), intention (why do companies use influencers?), function (how do influencer marketing and brand trust influence each other?), comparison (influencer vs. classical advertising).\n\nWhy function: The information describes influences in both directions:\n• Influencer marketing → brand trust: credible influencers transfer their authenticity to the brand; too many cooperations or unclear labelling can reduce trust.\n• Brand trust → influencer marketing: trusted brands attract well-known influencers more easily; brand scandals damage the influencers involved and thereby the effectiveness of future campaigns.\nBecause the two elements are interdependent, a one-directional causal analysis would only capture half of the topic. The functional aim analyses the reciprocities and is decision-useful for marketing managers who select influencers and protect their brand.",
     "rubric": [
      {
       "c": "Negative interpretation with plausible exclusions",
       "p": 2
      },
      {
       "c": "Positive interpretation naming the possible aims",
       "p": 2
      },
      {
       "c": "Defines the functional aim as interdependency / reciprocity (A ↔ B)",
       "p": 2
      },
      {
       "c": "Direction influencer marketing → brand trust with arguments",
       "p": 2
      },
      {
       "c": "Direction brand trust → influencer marketing with arguments",
       "p": 1
      },
      {
       "c": "Justification of meaningfulness (completeness, decision usefulness)",
       "p": 1
      }
     ]
    },
    {
     "pts": 10,
     "q": "Please develop a (direct) research question for a functional aim.",
     "model": "Model research question:\n“How do influencer marketing activities and consumers’ trust in a brand influence each other?”\n\nAlternative:\n“What is the impact of influencer marketing on brand trust, and what is the impact of brand trust on the effectiveness of influencer marketing?”",
     "rubric": [
      {
       "c": "Direct question (main clause, question mark)",
       "p": 2
      },
      {
       "c": "Open-ended",
       "p": 2
      },
      {
       "c": "Both directions of influence expressed",
       "p": 3
      },
      {
       "c": "Precise use of the topic’s terms, no reinterpretation",
       "p": 2
      },
      {
       "c": "Focused and researchable",
       "p": 1
      }
     ]
    },
    {
     "pts": 5,
     "q": "Please provide a draft outline for a term paper with a functional aim encompassing five to six main chapters (including introduction and conclusion).",
     "model": "1 Introduction\n   1.1 Research problem\n   1.2 Research method\n   1.3 Course of investigation\n2 Influencer marketing\n   2.1 Definition and forms of cooperation\n   2.2 Legal requirements for labelling\n3 Brand trust\n   3.1 Definition of brand trust\n   3.2 Determinants and measurement of brand trust\n4 Interdependencies between influencer marketing and brand trust\n   4.1 Impact of influencer marketing on brand trust\n   4.2 Impact of brand trust on influencer marketing\n5 Conclusion\n   5.1 Summary\n   5.2 Critical acclaim\n   5.3 Outlook",
     "rubric": [
      {
       "c": "Introduction first (research problem, [method], course of investigation)",
       "p": 1
      },
      {
       "c": "Conclusion last (summary, critical acclaim, outlook)",
       "p": 1
      },
      {
       "c": "Five to six main chapters",
       "p": 1
      },
      {
       "c": "Both directions analysed in the core chapter",
       "p": 1
      },
      {
       "c": "Formally correct decadal numbering",
       "p": 1
      }
     ]
    }
   ]
  },
  {
   "id": "C07",
   "topic": "Interest rate turnaround and residential real estate prices in Germany",
   "aim": "causal",
   "info": {
    "heading": "Interest rates and property prices",
    "text": [
     "From July 2022 to September 2023, the European Central Bank raised its key interest rates in several steps to fight high inflation; the deposit facility rate rose from –0.5 % to 4.0 %. Interest rates for residential mortgage loans in Germany increased from around 1 % at the beginning of 2022 to around 4 % in autumn 2023.",
     "According to the Federal Statistical Office (Destatis), prices for residential property in Germany fell by 8.4 % on average in 2023 compared with 2022 – the strongest decline since the time series began in 2000. At the same time, construction costs remained high.",
     "The real estate department of a regional savings bank wants to know whether the rise in interest rates is responsible for the decline in property prices, because this affects the valuation of the collateral in its mortgage portfolio."
    ],
    "source": "Source: own compilation for exam practice, based on publicly reported data of the ECB and Destatis."
   },
   "tasks": [
    {
     "pts": 10,
     "q": "Please analyse why an interpretation directed at a causal connection might be meaningful.",
     "model": "Negative interpretation: The topic covers the interest rate turnaround (rise in key and mortgage rates since 2022) and prices of residential real estate in Germany. Not covered are commercial real estate, rents (unless as a channel), other countries, the period before the turnaround and general monetary policy aims.\n\nPositive interpretation: description (how did rates and prices develop?), causal connection (effect of rising rates on prices), intention (why did the ECB raise rates?), function (mutual influence of rates and prices), comparison (prices before vs. after; Germany vs. other countries).\n\nWhy causal connection: The savings bank asks whether rising rates are ‘responsible for’ falling prices – a cause-effect question in one direction. There are plausible transmission mechanisms: higher mortgage rates increase financing costs and reduce the loan amount households can afford, so demand falls; higher yields on alternative investments raise the required return on real estate, which lowers values. The reverse direction (property prices → ECB interest rates) is hardly relevant, because the ECB sets rates mainly to achieve price stability for consumer prices; a functional aim would therefore not fit. A causal analysis also has to consider other causes (e.g. high construction costs, general uncertainty) to avoid a false conclusion.",
     "rubric": [
      {
       "c": "Negative interpretation with plausible exclusions",
       "p": 2
      },
      {
       "c": "Positive interpretation naming the possible aims",
       "p": 2
      },
      {
       "c": "Links the decision to the context (‘responsible for’ → cause and effect)",
       "p": 2
      },
      {
       "c": "Explains at least one plausible transmission mechanism (cause → effect)",
       "p": 2
      },
      {
       "c": "Explains why the reverse direction is not central (→ not function) and/or mentions other possible causes",
       "p": 2
      }
     ]
    },
    {
     "pts": 10,
     "q": "Please develop a (direct) research question and a scientific hypothesis (if-then) for an aim directed at a causal connection.",
     "model": "Research question:\n“What effect did the rise in interest rates between 2022 and 2023 have on the prices of residential real estate in Germany?”\n(Alternative: “To what extent is the interest rate turnaround responsible for the decline of residential property prices in Germany in 2023?”)\n\nScientific hypothesis:\n“If mortgage interest rates rise, then the financing costs of property buyers increase and the loan amount they can afford decreases, and thereby the demand for residential real estate and consequently its prices decline.”\n\nA scientific hypothesis is fully formulated, substantiated and specified (if-then), names the mechanism and can be tested empirically. It is quasi-nomological/statistical in nature: it holds under specific conditions and with a probabilistic character, not as a law of nature.",
     "rubric": [
      {
       "c": "Direct question (main clause, question mark)",
       "p": 2
      },
      {
       "c": "Open-ended (‘what effect’, ‘to what extent’)",
       "p": 2
      },
      {
       "c": "Clear cause (interest rates) and effect (prices) in one direction",
       "p": 2
      },
      {
       "c": "Hypothesis in if-then form with specified mechanism",
       "p": 3
      },
      {
       "c": "Hypothesis is empirically testable / falsifiable",
       "p": 1
      }
     ]
    },
    {
     "pts": 5,
     "q": "Please provide a draft outline for a term paper with an aim directed at a causal connection encompassing five to six main chapters (including introduction and conclusion).",
     "model": "1 Introduction\n   1.1 Research problem\n   1.2 Research method\n   1.3 Course of investigation\n2 Interest rate turnaround in the euro area\n   2.1 Monetary policy of the ECB 2022–2023\n   2.2 Development of mortgage rates in Germany\n3 Residential real estate market in Germany\n   3.1 Market structure and price determinants\n   3.2 Price development since 2022\n4 Effect of rising interest rates on residential property prices\n   4.1 Transmission channels\n   4.2 Empirical analysis of the price development\n5 Conclusion\n   5.1 Summary\n   5.2 Critical acclaim\n   5.3 Outlook",
     "rubric": [
      {
       "c": "Introduction first (research problem, [method], course of investigation)",
       "p": 1
      },
      {
       "c": "Conclusion last (summary, critical acclaim, outlook)",
       "p": 1
      },
      {
       "c": "Five to six main chapters",
       "p": 1
      },
      {
       "c": "Structure follows the causal logic: cause → effect → analysis of the causal connection",
       "p": 1
      },
      {
       "c": "Formally correct decadal numbering",
       "p": 1
      }
     ]
    }
   ]
  },
  {
   "id": "C08",
   "topic": "The four-day working week in German companies",
   "aim": "comparison",
   "info": {
    "heading": "Four-day working week",
    "text": [
     "In 2024, 45 German companies and organisations took part in a six-month pilot project on the four-day working week, which was scientifically accompanied by the University of Münster. Most participants reduced working hours without cutting pay; according to the study, employees’ well-being improved while productivity remained stable or increased slightly. Critics point out that the participating organisations were not representative of the German economy.",
     "An IT company with 300 employees is struggling to recruit software developers. The works council proposes to introduce a four-day working week. The managing board names three objectives: higher employer attractiveness, at least constant productivity and no increase in personnel costs. It asks the HR department for an appraisal of whether a four-day week would serve these objectives better than the current five-day week."
    ],
    "source": "Source: own compilation for exam practice."
   },
   "tasks": [
    {
     "pts": 10,
     "q": "Please analyse why an interpretation directed at a comparison might be meaningful.",
     "model": "Negative interpretation: The topic covers the four-day working week as a working-time model in German companies. Not covered are general part-time work initiated by individual employees, working-time models in other countries (except as evidence), statutory working-time law in general and other HR instruments such as bonuses.\n\nPositive interpretation: description (which four-day week models exist?), causal connection (effect of a four-day week on productivity), intention (why do companies introduce it?), function (interplay of working time and labour shortage), comparison (four-day vs. five-day week; target/actual comparison with company objectives).\n\nWhy comparison: The board asks for an appraisal of two alternatives against three explicit objectives – a target/actual comparison as in the mini case ‘Clara Couture’. Comparison criteria follow directly from the objectives: employer attractiveness (applications, retention), productivity (output per employee) and personnel costs (cost neutrality). The pilot study can serve as evidence, but its limited representativeness must be considered. Only a comparison delivers the decision-useful answer the board needs.",
     "rubric": [
      {
       "c": "Negative interpretation with plausible exclusions",
       "p": 2
      },
      {
       "c": "Positive interpretation naming the possible aims",
       "p": 2
      },
      {
       "c": "Identifies a target/actual comparison of alternatives against objectives",
       "p": 2
      },
      {
       "c": "Links the decision to the context (‘appraisal’, ‘better than’)",
       "p": 2
      },
      {
       "c": "Names comparison criteria derived from the objectives (and/or critically uses the pilot evidence)",
       "p": 2
      }
     ]
    },
    {
     "pts": 10,
     "q": "Please develop a (direct) research question for an aim directed at a comparison.",
     "model": "Model research question:\n“To what extent does a four-day working week serve the objectives of employer attractiveness, productivity and cost neutrality of a German IT company better than the current five-day working week?”\n\nAlternative:\n“How do the four-day and the five-day working week differ in their effects on employer attractiveness, productivity and personnel costs of a German IT company?”\n\nThe slide pattern ‘Does X suit the objectives of Y?’ is closed (yes/no); the open-ended wording ‘to what extent’ allows a differentiated appraisal.",
     "rubric": [
      {
       "c": "Direct question (main clause, question mark)",
       "p": 2
      },
      {
       "c": "Open-ended (‘to what extent’, ‘how … differ’)",
       "p": 2
      },
      {
       "c": "Compares the two working-time models or target vs. actual",
       "p": 3
      },
      {
       "c": "Objectives/criteria named or clearly implied",
       "p": 2
      },
      {
       "c": "Topic terms used precisely",
       "p": 1
      }
     ]
    },
    {
     "pts": 5,
     "q": "Please provide a draft outline for a term paper with an aim directed at a comparison encompassing five to six main chapters (including introduction and conclusion).",
     "model": "1 Introduction\n   1.1 Research problem\n   1.2 Research method\n   1.3 Course of investigation\n2 Working-time models\n   2.1 The five-day working week\n   2.2 Models of a four-day working week\n3 Objectives of the IT company\n   3.1 Employer attractiveness\n   3.2 Productivity and cost neutrality\n4 Comparison of the working-time models\n   4.1 Comparison criteria\n   4.2 Evidence from pilot projects\n   4.3 Appraisal for the IT company\n5 Conclusion\n   5.1 Summary\n   5.2 Critical acclaim\n   5.3 Outlook",
     "rubric": [
      {
       "c": "Introduction first (research problem, [method], course of investigation)",
       "p": 1
      },
      {
       "c": "Conclusion last (summary, critical acclaim, outlook)",
       "p": 1
      },
      {
       "c": "Five to six main chapters",
       "p": 1
      },
      {
       "c": "Alternatives and objectives presented before a comparison chapter with criteria",
       "p": 1
      },
      {
       "c": "Formally correct decadal numbering",
       "p": 1
      }
     ]
    }
   ]
  },
  {
   "id": "C09",
   "topic": "The EU carbon border adjustment mechanism (CBAM) and international trade",
   "aim": "intention",
   "info": {
    "heading": "Carbon border adjustment mechanism",
    "text": [
     "Companies in the EU that fall under the EU emissions trading system (EU ETS) have to pay for their CO₂ emissions. Producers in many non-EU countries face no or a lower carbon price. This creates the risk of ‘carbon leakage’: production could move to countries with laxer climate policies, or EU products could be replaced by more carbon-intensive imports.",
     "The EU therefore introduced the carbon border adjustment mechanism (CBAM). It covers imports of cement, iron and steel, aluminium, fertilisers, electricity and hydrogen. During a transitional phase starting in October 2023, importers only had to report the emissions embedded in their imports; from 2026 onwards, a carbon price linked to the EU ETS price has to be paid for these emissions. A carbon price already paid in the country of origin can be deducted.",
     "Members of an association of German steel importers are irritated by the additional administrative burden. They ask the association’s research unit what the EU is trying to achieve with the CBAM and with which instruments."
    ],
    "source": "Source: own compilation for exam practice."
   },
   "tasks": [
    {
     "pts": 10,
     "q": "Please perform a negative interpretation of the topic and analyse why an interpretation directed at an intention might be meaningful.",
     "model": "Negative interpretation: The topic is limited to the EU’s CBAM and its relation to international trade. Not covered are other climate policy instruments such as national CO₂ pricing for transport and heating, sectors outside the CBAM scope, carbon border measures of non-EU countries, trade policy in general (e.g. customs duties unrelated to CO₂) and the technical details of emission measurement.\n\nWhy intention: The problem setting asks ‘what the EU is trying to achieve’ and ‘with which instruments’ – these are exactly the two components of an intention-directed aim: aims/purposes/motives and the means/instruments to achieve them (comparable to the mini case ‘Printing money’).\n• Intentions: preventing carbon leakage, protecting the effectiveness of the EU ETS, creating a level playing field for EU producers, encouraging cleaner production and carbon pricing in non-EU countries.\n• Instruments: carbon price on embedded emissions of imports, link to the EU ETS price, reporting obligations in the transitional phase, deduction of carbon prices paid abroad, limitation to emission-intensive sectors.\nUnderstanding the intention explains why the administrative burden exists and is a basis for any later evaluation (e.g. a comparison of effectiveness), which the association has not asked for yet.",
     "rubric": [
      {
       "c": "Negative interpretation with at least three plausible exclusions",
       "p": 3
      },
      {
       "c": "Defines intention correctly (aims/purposes/motives AND means/instruments)",
       "p": 2
      },
      {
       "c": "Links the decision to the context (‘what is the EU trying to achieve’, ‘with which instruments’)",
       "p": 2
      },
      {
       "c": "Names concrete intentions of the CBAM from the information",
       "p": 2
      },
      {
       "c": "Names concrete instruments of the CBAM from the information",
       "p": 1
      }
     ]
    },
    {
     "pts": 10,
     "q": "Please develop a (direct) research question for an aim directed at an intention.",
     "model": "Model research question:\n“What does the European Union intend to achieve with the carbon border adjustment mechanism, and by which instruments are these aims to be achieved?”\n\nAlternative:\n“Which purposes does the EU pursue with the CBAM with regard to international trade, and how is the mechanism designed to serve these purposes?”",
     "rubric": [
      {
       "c": "Direct question (main clause, question mark)",
       "p": 2
      },
      {
       "c": "Open-ended",
       "p": 2
      },
      {
       "c": "Asks for intentions/aims/purposes",
       "p": 3
      },
      {
       "c": "Also asks for the means/instruments (or design) to achieve them",
       "p": 2
      },
      {
       "c": "Topic terms used precisely (EU, CBAM, international trade)",
       "p": 1
      }
     ]
    },
    {
     "pts": 5,
     "q": "Please provide a draft outline for a term paper with an aim directed at an intention encompassing five to six main chapters (including introduction and conclusion).",
     "model": "1 Introduction\n   1.1 Research problem\n   1.2 Research method\n   1.3 Course of investigation\n2 Carbon pricing in the European Union\n   2.1 EU emissions trading system\n   2.2 The problem of carbon leakage\n3 The carbon border adjustment mechanism\n   3.1 Scope and covered sectors\n   3.2 Transitional and definitive phase\n4 Intentions of the carbon border adjustment mechanism\n   4.1 Aims pursued by the European Union\n   4.2 Instruments to achieve the aims\n5 Conclusion\n   5.1 Summary\n   5.2 Critical acclaim\n   5.3 Outlook",
     "rubric": [
      {
       "c": "Introduction first (research problem, [method], course of investigation)",
       "p": 1
      },
      {
       "c": "Conclusion last (summary, critical acclaim, outlook)",
       "p": 1
      },
      {
       "c": "Five to six main chapters",
       "p": 1
      },
      {
       "c": "Core chapter analyses aims AND instruments",
       "p": 1
      },
      {
       "c": "Formally correct decadal numbering",
       "p": 1
      }
     ]
    }
   ]
  },
  {
   "id": "C10",
   "topic": "Mobile payment at the point of sale in Germany",
   "aim": "description",
   "info": {
    "heading": "Payment behaviour in Germany",
    "text": [
     "According to the Deutsche Bundesbank, cash was used for 74 % of all transactions at the point of sale in Germany in 2017 and for 51 % in 2023. Over the same period, card payments gained importance, and the share of mobile payments (smartphone or smartwatch) tripled between 2021 and 2023 to 6 % of transactions.",
     "A mobile payment at the point of sale involves several parties: the customer’s bank or card issuer, a wallet provider (e.g. a smartphone manufacturer or a bank app), a card scheme, the merchant and its payment service provider. Technically, the payment is usually initiated via near-field communication (NFC), and the card number is replaced by a token.",
     "A regional cooperative bank considers offering its own mobile payment solution. The board asks a trainee to lay out how mobile payments at the point of sale work in Germany and who is involved."
    ],
    "source": "Source: own compilation for exam practice, based on the Bundesbank study ‘Payment behaviour in Germany 2023’."
   },
   "tasks": [
    {
     "pts": 10,
     "q": "Please explain the three process steps of the interpretation technique and apply them to the topic in the given context.",
     "model": "The interpretation technique consists of three steps: (1) negative interpretation – what does the topic not cover?; (2) positive interpretation – which of the five aims (description, causal connection, intention, function, comparison) are possible?; (3) decision – selection of one aim (or a combination), coordinated with the instructor/thesis advisor. The candidate has the duty and the right to interpret the topic.\n\n(1) Negative interpretation: Not covered are online/e-commerce payments, peer-to-peer transfers between private persons, payments outside Germany, cryptocurrencies and cash logistics.\n(2) Positive interpretation: description (how do mobile payments work, who is involved?), causal connection (effect of the pandemic on mobile payment usage), intention (why do wallet providers offer mobile payment?), function (interplay of merchant acceptance and consumer usage), comparison (mobile vs. card payment; Germany vs. other countries).\n(3) Decision: The board asks to ‘lay out how’ mobile payments work and ‘who is involved’ – a description of a process (technical perspective: how?) and of agents (institutional perspective: who?), like the mini case ‘Sinking ships’. A description is the necessary basis for the bank’s later decision.",
     "rubric": [
      {
       "c": "Names the three steps correctly (negative interpretation, positive interpretation, decision)",
       "p": 2
      },
      {
       "c": "Mentions coordination with advisor / duty and right of the candidate",
       "p": 1
      },
      {
       "c": "Applies the negative interpretation with plausible exclusions",
       "p": 2
      },
      {
       "c": "Applies the positive interpretation to the topic (several aims)",
       "p": 2
      },
      {
       "c": "Decision for description justified by the context (‘lay out how’, ‘who is involved’)",
       "p": 3
      }
     ]
    },
    {
     "pts": 10,
     "q": "Please develop a (direct) research question for a descriptive aim.",
     "model": "Model research question:\n“How are mobile payments at the point of sale processed in Germany, and which market participants are involved in this process?”\n\nIt is direct and open-ended, uses descriptive interrogative words (‘how’ – process/manner; ‘which’ – agents) and stays within the topic (point of sale, Germany).",
     "rubric": [
      {
       "c": "Direct question (main clause, question mark)",
       "p": 2
      },
      {
       "c": "Open-ended",
       "p": 2
      },
      {
       "c": "Clearly descriptive (how/who/which – process and agents)",
       "p": 3
      },
      {
       "c": "Stays within the topic (point of sale, Germany, mobile payment)",
       "p": 2
      },
      {
       "c": "Precise and focused wording",
       "p": 1
      }
     ]
    },
    {
     "pts": 5,
     "q": "Please provide a draft outline for a term paper with a descriptive aim encompassing five to six main chapters (including introduction and conclusion).",
     "model": "1 Introduction\n   1.1 Research problem\n   1.2 Research method\n   1.3 Course of investigation\n2 Payment behaviour in Germany\n   2.1 Cash and card payments\n   2.2 Development of mobile payment\n3 Technical process of mobile payment\n   3.1 Near-field communication and tokenisation\n   3.2 Transaction process at the point of sale\n4 Market participants in mobile payment\n   4.1 Wallet providers and banks\n   4.2 Card schemes and payment service providers\n   4.3 Merchants\n5 Conclusion\n   5.1 Summary\n   5.2 Critical acclaim\n   5.3 Outlook",
     "rubric": [
      {
       "c": "Introduction first (research problem, [method], course of investigation)",
       "p": 1
      },
      {
       "c": "Conclusion last (summary, critical acclaim, outlook)",
       "p": 1
      },
      {
       "c": "Five to six main chapters",
       "p": 1
      },
      {
       "c": "Structure follows the descriptive logic (context → process → agents)",
       "p": 1
      },
      {
       "c": "Formally correct decadal numbering",
       "p": 1
      }
     ]
    }
   ]
  }
 ],

 // ---------- CONCEPT CARDS: all rules and concepts of chapters 1–9 with examples ----------
 concepts: [
  {
   "id": "c1_terms",
   "ch": 1,
   "title": "Science, theory and method",
   "intro": "Chapter 1 defines the basic vocabulary of academic work. Many exam statements test whether you can tell similar-sounding terms apart.",
   "sections": [
    {
     "h": "Branches of academia",
     "p": "The slides group disciplines into formal sciences (e.g. mathematics, statistics, logic), empirical sciences – natural sciences (e.g. physics, chemistry, biology) and social sciences (e.g. economics, business studies, sociology, psychology, legal and political science) – and humanities (e.g. history, philosophy, linguistics, literature). Business studies are an empirical social science."
    },
    {
     "h": "Five dimensions of the term ‘science’",
     "items": [
      [
       "Result",
       "The entirety of the findings and prevailing knowledge of an academic discipline.",
       "‘The science of economics’ = everything that is known in economics."
      ],
      [
       "Institution",
       "The subjects (scientists, researchers, students) and objects (institutions) that take part in research, lecturing and studying.",
       "A university, a research institute and its staff."
      ],
      [
       "Activity",
       "The systematic and methodical generation of knowledge (research), its transfer (lecturing) and its reception (studying).",
       "Conducting a survey, giving a lecture, reading for an exam."
      ],
      [
       "Character",
       "A systematic and methodical approach that leads to precise, inter-subjectively comprehensible and therefore objective conclusions.",
       "Two researchers using the same method on the same data reach the same result."
      ],
      [
       "Judgement",
       "Depending on the circumstances a positive or negative judgement, or a neutral characterisation of human activities.",
       "‘That analysis is very scientific’ (praise) vs. ‘unscientific’ (criticism)."
      ]
     ]
    },
    {
     "h": "Four meanings of ‘theory’",
     "items": [
      [
       "Abstract approach",
       "A purely terminological and abstract approach that is not practice-oriented or related to real-world problems.",
       "‘That lecture was far too theoretical.’"
      ],
      [
       "Speculation (colloquial)",
       "Unrealistic perceptions, unsubstantiated assumptions and/or speculations.",
       "‘That’s just a theory.’"
      ],
      [
       "Scientific meaning",
       "A system of scientifically substantiated propositions that explains particular facts or phenomena and the rules, laws or regularities behind them.",
       "A theory explaining why companies choose a certain capital structure."
      ],
      [
       "Doctrine",
       "A doctrine of the general terminology, rules and principles of a particular area of the sciences, humanities, technology or fine arts.",
       "Music theory; the theory of accounting."
      ]
     ]
    },
    {
     "h": "Method – set of methods – methodology",
     "items": [
      [
       "Method",
       "A systematic procedure and technique for the derivation of knowledge.",
       "An online survey, an expert interview, a regression analysis."
      ],
      [
       "Set of methods",
       "The body of methods applied in a certain academic discipline.",
       "All empirical methods commonly used in marketing research."
      ],
      [
       "Methodology",
       "The doctrine of the suitability of particular methods for specific research problems.",
       "Arguing why expert interviews fit your research question better than a survey."
      ]
     ],
     "tip": "Memory hook: method = one tool; set of methods = the toolbox of a discipline; methodology = knowing which tool fits which job."
    }
   ]
  },
  {
   "id": "c1_philo",
   "ch": 1,
   "title": "Truth, ontology, epistemic objectives, models",
   "intro": "The philosophical side of research: what ‘true’ means, how reality is viewed, which kind of knowledge a project aims for and what a model is.",
   "sections": [
    {
     "h": "Truth",
     "p": "Science aims for knowledge that describes reality; truth measures how precise this knowledge is. Natural sciences strive for absolute truth (an ideal-theoretic concept), social sciences usually reach only relative truth. Ontology is the study of the nature of reality."
    },
    {
     "h": "Three theories of truth",
     "items": [
      [
       "Correspondence theory",
       "A statement is true if it corresponds with observable facts and circumstances of reality. Ideal type: empirical research.",
       "‘Sales rose in 2024’ is true if the sales figures actually show a rise."
      ],
      [
       "Coherence theory",
       "A statement is true if it is terminologically and logically consistent (coherent) with an established system of statements. Ideal types: literature-based and theoretical research.",
       "A new argument fits into an accepted theory without contradicting it."
      ],
      [
       "Consensus theory",
       "A statement is true if all benevolent experts agree with it. Ideal type: developmental research.",
       "Experts agree that a newly designed process works well."
      ]
     ]
    },
    {
     "h": "Ontological positions (social ontology)",
     "items": [
      [
       "Objectivism",
       "Social entities are objective entities that exist independently of social actors.",
       "‘Accounting exists independently of its social environment.’"
      ],
      [
       "Subjectivism / (social) constructionism",
       "Social phenomena are created by the perceptions and actions of social actors and are constantly changed by them.",
       "‘Accounting is impacted by the prevailing social environment.’"
      ]
     ]
    },
    {
     "h": "Four epistemic objectives (aims of knowledge)",
     "items": [
      [
       "Descriptive",
       "Describes and systematises real, observable facts. Question: How is something?",
       "‘Expansion strategies of car manufacturers in China’"
      ],
      [
       "Explanatory",
       "Explains the described facts via hypotheses of causes and effects. Question: Why is something the way it is?",
       "‘Motivations for expansion strategies of car manufacturers in China’"
      ],
      [
       "Prescriptive",
       "Postulates guidance, objectives and rules for actions and decisions. Question: How should something be done?",
       "‘Optimal expansion strategies for car manufacturers in China’"
      ],
      [
       "Predictive",
       "Derives a position on a future situation (projection, forecast). Question: How will something be in the future?",
       "‘Expected expansion strategies of car manufacturers in China’"
      ]
     ]
    },
    {
     "h": "Models",
     "p": "A model is a simplification of reality or a simplified illustration of a real situation.",
     "items": [
      [
       "Reductive model",
       "Derived from reality through abstraction.",
       "Financial statements as a simplified picture of a real power plant."
      ],
      [
       "Constructive model",
       "Derived from theory through construction (technical and economic rules).",
       "A financial projection for a planned plant, e.g. with total costs C = Cv + Cf."
      ]
     ]
    }
   ]
  },
  {
   "id": "c1_frame",
   "ch": 1,
   "title": "Building blocks of a research project",
   "intro": "The course uses one framework throughout. Knowing the building blocks helps you place every later chapter.",
   "sections": [
    {
     "h": "The building blocks",
     "items": [
      [
       "Research title",
       "The headline on the cover page.",
       ""
      ],
      [
       "Research topic",
       "The subject matter of your research.",
       "‘Project finance of windmill farms under the German renewable energy act (EEG)’"
      ],
      [
       "Research problem",
       "The description of the aim (the ‘problem’).",
       ""
      ],
      [
       "Research question",
       "The verbalisation of the objective(s) as a (direct or indirect) question.",
       ""
      ],
      [
       "Research hypothesis",
       "One or more proposed statements that provide answers to the problem.",
       ""
      ],
      [
       "Research approach",
       "The conceptual framework of the research project (e.g. empirical research).",
       ""
      ],
      [
       "Research method(s)",
       "Specific techniques for deriving answers to questions or testing hypotheses.",
       ""
      ],
      [
       "Research logic",
       "The underlying way of logical reasoning and coherent argumentation (Chapter 3).",
       ""
      ],
      [
       "Research rules",
       "Formal rules and standards for documentation and referencing.",
       ""
      ],
      [
       "Research language",
       "Rules for academic language and writing.",
       ""
      ],
      [
       "Research tools",
       "Sourcing of information, technical aspects, project management and presentation.",
       ""
      ]
     ]
    },
    {
     "h": "Four sample cases of research",
     "items": [
      [
       "Professional research",
       "Research in a business context.",
       "A bank analyses whether a windmill farm (20 % equity, 80 % loan) can repay its loan under the EEG."
      ],
      [
       "University research",
       "A research group (professor, colleagues, PhD, master and bachelor students) publishes via website, conferences and journals.",
       ""
      ],
      [
       "Institutional research",
       "A research institute processes data and facts for the government and the general public.",
       ""
      ],
      [
       "Collaborative research",
       "A platform/association of researchers, academics, operators, financiers and government officials.",
       ""
      ]
     ]
    },
    {
     "h": "What all cases have in common",
     "p": "They aim for knowledge, collect or discover information and document and process the findings. Their character is objective and precise as well as systematic and methodical. The difference lies between applied research (practical problem) and fundamental research (basic knowledge)."
    }
   ]
  },
  {
   "id": "c2_accuracy",
   "ch": 2,
   "title": "Academic principles I: accuracy",
   "intro": "Five academic principles characterise academic work: accuracy, completeness, clarity, comparability and materiality. They are not restricted to one discipline and are generally accepted and legally tested (e.g. in accounting). Accuracy is the most extensive one.",
   "sections": [
    {
     "h": "1 Observation of rules and norms",
     "p": "‘Accuracy implies that rules and norms are obeyed.’",
     "items": [
      [
       "Spelling and grammar (general rule)",
       "Enhances receptiveness and avoids ambiguity.",
       "‘Over the past two decades’ instead of ‘Return two past decades’."
      ],
      [
       "Algorithms and calculation rules",
       "The value and credibility of academic work rest on correct computations.",
       "A wrong discount rate makes the whole valuation worthless."
      ],
      [
       "Referencing and citation",
       "Makes the work verifiable in a consistent and traceable way.",
       "Every figure taken from a study is referenced."
      ],
      [
       "Formatting and presentation",
       "Appropriate formatting signals seriousness and academic credibility.",
       "Consistent fonts, numbering and layout."
      ]
     ]
    },
    {
     "h": "2 Inter-subjective comprehensibility",
     "p": "Results of a research project can be comprehended, reproduced, retraced and/or understood by recipients (other subjects such as the instructor or the research community). This is what makes research objective.",
     "items": [
      [
       "Perceptibility",
       "The research question and/or hypothesis are formulated in an apprehensible way.",
       "A clear, understandable research question in 1.1."
      ],
      [
       "Traceability",
       "Output is documented so that third parties can reproduce the conclusions.",
       "Sources and calculation steps are stated."
      ],
      [
       "Validity",
       "Output is generated with an adequate degree of preciseness for the problem.",
       "Measuring productivity with output per hour, not with revenue."
      ],
      [
       "Falsifiability",
       "Output is formulated so that it is disputable, i.e. it could be disproved.",
       "‘Sales rose by 10 %’ instead of ‘the campaign had some effect’."
      ],
      [
       "Reliability",
       "Output of experimental or empirical methods can be reproduced.",
       "Repeating the survey leads to the same result."
      ]
     ]
    },
    {
     "h": "3 Timeliness and currentness",
     "items": [
      [
       "Timeliness of references",
       "References reflect the current status of publications in the field.",
       ""
      ],
      [
       "Currentness of data",
       "Quantitative and qualitative data used are up to date.",
       "Using 2023 statistics, not 2003 statistics, to describe the situation today."
      ],
      [
       "Caveat lector 1",
       "Major theories and ground-breaking ideas are cited from their historic original sources.",
       "Cite the 1958 original of a famous theorem."
      ],
      [
       "Caveat lector 2",
       "Historic data may be needed for time series or longitudinal studies to derive trends.",
       ""
      ]
     ]
    },
    {
     "h": "4 True and fair representation",
     "p": "Characterised by integrity, impartiality and honesty. Indicators:",
     "items": [
      [
       "Identification of a research problem",
       "One or more research questions are clearly identified and documented.",
       ""
      ],
      [
       "No redrafting of the title",
       "A change of the title is strictly forbidden.",
       "Assigned: ‘Competitive strategies of network carriers …’ – not ‘Low-cost airlines – the end of …???’"
      ],
      [
       "No reinterpretation of the topic",
       "The underlying (implicit) topic must not be reinterpreted without authorisation.",
       "Writing about solar energy when the topic is windmill farms."
      ],
      [
       "No manipulation",
       "Data and references are stated without modifications that change the nature of the evidence.",
       "Leaving out the bad years of a time series."
      ]
     ]
    }
   ]
  },
  {
   "id": "c2_compl_clar",
   "ch": 2,
   "title": "Academic principles II: completeness and clarity",
   "intro": "Completeness asks whether everything that belongs to the work is there; clarity asks whether the work is unambiguous and well structured.",
   "sections": [
    {
     "h": "Completeness",
     "p": "Closely linked to accuracy: incomplete information easily leads to false conclusions.",
     "items": [
      [
       "Qualitative completeness",
       "Comprehensive adaptation of the topic (all relevant aspects are addressed) and consideration of all relevant information sources (existing literature and data; if necessary new data from surveys or experiments).",
       "A paper on minimum wages that ignores the most important empirical studies is incomplete."
      ],
      [
       "Quantitative completeness",
       "All formal building blocks are present: research problem, research question/hypothesis, research approach and methodology, course of investigation, conclusion (summary, critical acclaim, outlook), relevant lists (figures, tables, abbreviations, references) and an adequate number of pages.",
       "A paper without a critical acclaim or without a list of abbreviations is incomplete."
      ]
     ]
    },
    {
     "h": "Clarity – clearness",
     "p": "Avoiding ambiguities with respect to the research project and its conclusions:",
     "items": [
      [
       "Description of methodology",
       "The methodical approach is explained.",
       ""
      ],
      [
       "Definition of relevant terminology",
       "The intended meaning of terms is clarified.",
       "‘In this paper, productivity means output per working hour.’"
      ],
      [
       "Accurate and academic language",
       "Clear terminological and linguistic application.",
       "‘more and more popular’ → ‘issuance volume doubled between 2020 and 2023’"
      ],
      [
       "Consistent argumentation",
       "No contradictions or inconsistencies.",
       ""
      ]
     ]
    },
    {
     "h": "Clarity – proper composition",
     "p": "Clear arrangement of the research project and its written documentation:",
     "items": [
      [
       "Logic of structure",
       "Logical structure and well-organised outline.",
       ""
      ],
      [
       "Deduction of structure",
       "Adequate and formally correct deduction of chapters and sections.",
       ""
      ],
      [
       "Formal correctness",
       "Formally correct structuring and numbering.",
       "‘2.1 Major features’, not ‘2.1. Major features’."
      ],
      [
       "Focus on topic",
       "Uncompromising focus on the topic without any excursions.",
       "No paragraph about electric cars in a paper on municipal bonds."
      ],
      [
       "Thread",
       "Perceptibility of a recurrent theme (leitmotif, ‘roter Faden’).",
       ""
      ]
     ],
     "tip": "Typical trap: definitions of terms belong to clearness, the ‘thread’ belongs to proper composition."
    }
   ]
  },
  {
   "id": "c2_comp_mat",
   "ch": 2,
   "title": "Academic principles III: comparability and materiality",
   "intro": "Comparability relates your work to the state of knowledge; materiality asks whether it concentrates on what really matters.",
   "sections": [
    {
     "h": "Comparability",
     "items": [
      [
       "Status quo of the discipline",
       "The work should reflect the current state of knowledge of the discipline or topic.",
       ""
      ],
      [
       "Explanation of deviations",
       "If the work deviates from the status quo, the principle is still met as long as the deviations are explained. Unexplained deviations violate comparability.",
       "Using a different definition of ‘SME’ than the EU is fine if you justify it."
      ],
      [
       "Expectancy of deviations",
       "The more sophisticated the work, the more it is expected to deviate (i.e. contribute something new): assignment → term paper → bachelor’s thesis → master’s thesis → doctoral thesis → postdoctoral research.",
       "A term paper mainly reproduces the status quo; a doctoral thesis must add new knowledge."
      ]
     ]
    },
    {
     "h": "Materiality",
     "items": [
      [
       "Adequate reduction of inherent complexity",
       "From aim, information/facts and theories/methods, the work condenses the essentials into conclusions – an ‘intellectual condensate’ that is sophisticated yet comprehensible.",
       ""
      ],
      [
       "Adequate decision usefulness",
       "The conclusions are self-contained (your own), creative and realistic, so that they are actually useful.",
       "A recommendation that a city can really implement, not a purely academic statement."
      ]
     ]
    }
   ]
  },
  {
   "id": "c3_reasoning",
   "ch": 3,
   "title": "Induction and deduction",
   "intro": "Two ways of reasoning. They differ in direction, not in purpose: both can be used for forecasts and for explanations.",
   "sections": [
    {
     "h": "Induction",
     "items": [
      [
       "Direction",
       "Particular → general, ‘bottom-up’. Information is extended (‘generalised’).",
       ""
      ],
      [
       "Inductive forecast",
       "Observations of N events lead to a conclusion about one or more future events.",
       "‘All observed swans were white → the next swan will be white.’"
      ],
      [
       "Inductive explanation",
       "Observations of N events lead to a conclusion about a general rule, law or principle.",
       "‘All observed swans were white → all swans are white.’"
      ]
     ]
    },
    {
     "h": "Deduction",
     "items": [
      [
       "Direction",
       "General → particular, ‘top-down’. Information is kept at the initial level.",
       ""
      ],
      [
       "Deductive forecast",
       "A general rule is applied to conclude something about future events.",
       "‘All humans are mortal; all Greeks are human → all Greeks will die.’"
      ],
      [
       "Deductive explanation",
       "A general rule is applied to derive an explanation.",
       "‘Equity absorbs losses → a higher equity ratio explains a lower credit risk.’"
      ]
     ]
    },
    {
     "h": "Why it matters",
     "p": "Inductive conclusions are never certain: three observed companies cannot prove that something holds ‘always’ or ‘for all’. Deduction is also the logic for writing a research problem (Chapter 9: from general to specific).",
     "tip": "Exam trap: ‘Induction can only be used for forecasts, deduction only for explanations’ is false – both can do both."
    }
   ]
  },
  {
   "id": "c3_syllogism",
   "ch": 3,
   "title": "Syllogism, DN model and IS model",
   "intro": "How logical conclusions are built (Aristotle) and how scientific explanations are structured (Hempel).",
   "sections": [
    {
     "h": "Syllogism (Aristotle)",
     "items": [
      [
       "Major premise",
       "The general rule.",
       "All humans are mortal."
      ],
      [
       "Minor premise",
       "Links a specific group to the rule.",
       "All Greeks are human."
      ],
      [
       "Conclusion",
       "Follows from both premises.",
       "All Greeks are mortal."
      ],
      [
       "Termini",
       "Terminus minor = subject of the conclusion (Greeks); terminus medius = links the premises and disappears in the conclusion (humans); terminus major = predicate of the conclusion (mortal).",
       ""
      ]
     ]
    },
    {
     "h": "Quantity and quality of statements",
     "items": [
      [
       "Quantity (quantifier)",
       "‘All’ → universal; ‘some’ → particular.",
       ""
      ],
      [
       "Quality (copula)",
       "‘are’ → affirmative; ‘are not’ → negative.",
       ""
      ],
      [
       "Four combinations",
       "All S are P (universal affirmative); All S are not P (universal negative); Some S are P (particular affirmative); Some S are not P (particular negative).",
       ""
      ],
      [
       "Universal vs. existential propositions",
       "Statements with ‘all’ are universal propositions; statements with ‘some’ are existential propositions.",
       ""
      ]
     ]
    },
    {
     "h": "Deductive-nomological (DN) model",
     "p": "Also known as HO-Scheme, Hempel-Oppenheim model, Popper-Hempel model, Hempel’s model (‘nomological’ from Greek nomos = law).",
     "items": [
      [
       "Explanans (‘the explaining’)",
       "General rule (nomological hypothesis) + condition (premise).",
       "All humans are mortal + all Greeks are human."
      ],
      [
       "Explanandum (‘that which is to be explained’)",
       "The conclusion.",
       "All Greeks are mortal."
      ],
      [
       "Forecast version",
       "Projectans (rule + condition) → projectandum (what is forecast).",
       "→ All Greeks will die."
      ]
     ]
    },
    {
     "h": "Inductive-statistical (IS) model",
     "items": [
      [
       "Structure",
       "Statistical hypothesis + condition → probabilistic conclusion.",
       "‘If a customer ordered from our home shopping channel and lives in postal code 60323, he pays within 10 days with 95 % probability. Customer A lives in 60323 → A pays with 95 % probability.’"
      ],
      [
       "Problems",
       "Explanations in business and social sciences are (i) logically incomplete – payment behaviour = f(postal code, employment, marital status, family size …) + unexplainable residual – and (ii) require time stability of the function.",
       ""
      ]
     ]
    },
    {
     "h": "Advantages and disadvantages",
     "items": [
      [
       "DN model",
       "Advantage: deterministic nature of explanation (forecast). Disadvantage: deterministic rules are not common in business and social sciences.",
       ""
      ],
      [
       "IS model",
       "Advantage: probabilistic rules are common in business and social sciences. Disadvantage: probabilistic nature of explanation (forecast).",
       ""
      ]
     ]
    },
    {
     "h": "Who is who",
     "items": [
      [
       "Aristotle (384–322 BCE)",
       "Logical reasoning, syllogism.",
       ""
      ],
      [
       "Karl Popper (1902–1994)",
       "Critical rationalism, falsificationism.",
       ""
      ],
      [
       "Carl Gustav Hempel (1905–1997)",
       "Deductive-nomological model, inductive-statistical explanation.",
       ""
      ]
     ]
    }
   ]
  },
  {
   "id": "c3_falsification",
   "ch": 3,
   "title": "Modus ponens, modus tollens and falsification",
   "intro": "The logical rules behind testing hypotheses – and why universal statements can only ever be disproved.",
   "sections": [
    {
     "h": "Two valid conclusions",
     "items": [
      [
       "Modus ponens (‘affirms by affirming’)",
       "If A, then B. A holds true. Therefore B. (A → B, A ⊢ B)",
       "If temperature ≤ 0 °C, water is frozen. Temperature is ≤ 0 °C. → Water is frozen."
      ],
      [
       "Modus tollens (‘denies by denying’)",
       "If A, then B. B does not hold true. Therefore not A. (A → B, ¬B ⊢ ¬A)",
       "If temperature ≤ 0 °C, water is frozen. The water is liquid. → Temperature is not ≤ 0 °C."
      ]
     ],
     "tip": "Not on the slides but a classic trap: ‘If A then B; B holds; therefore A’ is invalid (water can be frozen for other reasons). So is ‘If A then B; not A; therefore not B’."
    },
    {
     "h": "Falsification and verification",
     "items": [
      [
       "Falsification",
       "The act of disproving a hypothesis, proposition or theory.",
       ""
      ],
      [
       "Verification",
       "The act of proving a hypothesis, proposition or theory.",
       ""
      ],
      [
       "Universal propositions",
       "Falsifiable, but not verifiable.",
       "‘All swans are white’ – one black swan disproves it; you can never check all swans."
      ],
      [
       "Existential propositions",
       "Verifiable, but not falsifiable.",
       "‘Black swans exist’ – one black swan proves it; not finding one never disproves it."
      ]
     ]
    },
    {
     "h": "Falsifiability",
     "p": "A hypothesis or statement must be formulated so that it is disputable, i.e. it could be falsified. Examples of non-falsifiable statements:",
     "items": [
      [
       "Tautological",
       "The statement is always true.",
       "‘The sun will shine tomorrow, or not.’"
      ],
      [
       "Meaningless (lacks precision)",
       "Too vague to be checked.",
       "‘Actions will have consequences.’ / ‘The EEG has (could have) a strong impact on financial feasibility.’ (imprecise adjective ‘strong’)"
      ]
     ]
    },
    {
     "h": "Falsifying a hypothesis with modus tollens",
     "p": "Hypothesis: ‘All swans (A) are white (B).’ Observation: ‘A swan is black (not B).’ Conclusion: the hypothesis is false (falsified)."
    },
    {
     "h": "Indicator vs. causal hypotheses",
     "items": [
      [
       "Indicator hypothesis",
       "Generated by induction with empirical-statistical methods. Statistical explanation of drivers (‘indicators’) – but no logical explanation.",
       "‘We observed no defaults for borrowers with equity ratios above 50 %.’ → ‘Such borrowers will not default.’"
      ],
      [
       "Causal hypothesis",
       "Derived by deduction with logical methods. Logical explanation (‘causalities’) – but no statistical proof.",
       "‘Equity has a positive impact on credit risk because it serves as a buffer against losses.’"
      ],
      [
       "Interplay with theory",
       "Observations deliver indicator hypotheses, which might initiate a theory; the theory delivers causal hypotheses; observations support or falsify, logic affirms or falsifies.",
       ""
      ]
     ],
     "tip": "A correlation alone (e.g. more home office days ↔ higher satisfaction) is only an indicator – it does not prove cause and effect."
    }
   ]
  },
  {
   "id": "c4_questions",
   "ch": 4,
   "title": "Research questions",
   "intro": "The research question turns the aim of a project into a question. Two classifications and the interrogative words are typical exam material.",
   "sections": [
    {
     "h": "By syntax: direct vs. indirect",
     "items": [
      [
       "Direct question",
       "Posed in a main clause that ends with a question mark.",
       "‘How will the German renewable energy act (EEG) influence the market risk and thereby the financial feasibility of windmill farm project financings?’"
      ],
      [
       "Indirect question",
       "Posed in a subordinate clause, without a question mark – typical in the introduction.",
       "‘The aim of this research paper is to analyse how the German renewable energy act influences the market risk …’"
      ]
     ]
    },
    {
     "h": "By type of answer: closed vs. open",
     "items": [
      [
       "Closed-ended (dichotomous)",
       "Only two possible answers: yes/no, true/false, male/female.",
       "‘Does the EEG reduce market risk?’"
      ],
      [
       "Open-ended",
       "Requires an individually formulated answer. Research questions should be open-ended.",
       "‘To what extent does the EEG reduce market risk?’"
      ]
     ]
    },
    {
     "h": "Interrogative words",
     "items": [
      [
       "Interrogative pronouns",
       "Personal: who, whom. Impersonal: what, which.",
       ""
      ],
      [
       "Interrogative adverbs",
       "where (location), whence (source), whither (goal), when (time), how (manner), why / wherefore (reason), whether … or (choice).",
       ""
      ],
      [
       "‘The five w’s and one h’",
       "who, what, where, when, why + how (also ‘the six w’s’).",
       ""
      ]
     ]
    },
    {
     "h": "Question and hypothesis belong together",
     "items": [
      [
       "Research question",
       "Asks: what do we want to find out?",
       "‘How will the EEG influence the market risk …?’"
      ],
      [
       "Research hypothesis",
       "Proposes the answer (often in if-then form).",
       "‘If a windmill farm project financing is realised under the EEG, then the market risk will be reduced, and thereby the financial feasibility will be increased.’"
      ]
     ],
     "tip": "Safe exam pattern: ‘How do A and B influence each other?’ (function), ‘To what extent is A responsible for B?’ (causal), ‘How … differ?’ (comparison)."
    }
   ]
  },
  {
   "id": "c4_hypotheses",
   "ch": 4,
   "title": "Types of hypotheses",
   "intro": "‘Hypothesis’ comes from Greek hypotithenai = to suppose. Hypotheses are classified by depth, by inner logic, and – for scientific hypotheses – by validity.",
   "sections": [
    {
     "h": "By depth",
     "items": [
      [
       "Thesis (ad-hoc hypothesis)",
       "First thoughts, yet to be developed and substantiated.",
       "‘Subsidy schemes have a positive impact on financings of windmill farms.’"
      ],
      [
       "Working hypothesis",
       "First draft of an assumed cause-effect relationship, yet to be reflected.",
       "‘If a windmill project financing is financed under the EEG, then it has a positive impact on the financial feasibility.’"
      ],
      [
       "Scientific hypothesis",
       "Fully formulated, substantiated, reflected and specified (assumed) cause-effect relationship (if-then) that can be empirically tested.",
       "‘If a windmill farm project financing is realised under the EEG, then the market risk will be reduced by a guaranteed compensation for electricity fed into the grid, and thereby the financial feasibility will be increased.’"
      ]
     ]
    },
    {
     "h": "By inner logic",
     "items": [
      [
       "Cause-effect hypothesis",
       "One factor causes another.",
       "‘Bank employees with university degrees tend to have a higher income.’"
      ],
      [
       "Distribution hypothesis",
       "How one characteristic is distributed.",
       "‘Shoe sizes of human beings follow a bell-shaped Gaussian distribution.’"
      ],
      [
       "Correlation hypothesis",
       "Two variables move together.",
       "‘The inflation rate is negatively correlated with the unemployment rate.’"
      ],
      [
       "Difference hypothesis",
       "Groups differ.",
       "‘There are more male students than female students who study engineering sciences.’"
      ]
     ]
    },
    {
     "h": "Scientific hypotheses by validity",
     "items": [
      [
       "Nomological",
       "Empirically proved cause-effect relationship without space-time restriction and without probabilistic character (always valid, ‘time stability’). Typical for natural sciences.",
       "‘If the temperature is ≤ 0 °C, then pure water is frozen.’"
      ],
      [
       "Quasi-nomological",
       "With space-time restriction, but without probabilistic character (only temporarily or in specified situations valid). Typical for business and social sciences.",
       "‘If a company uses the German legal form GmbH, then the liability of the shareholders is restricted to their equity participations.’"
      ],
      [
       "Statistical",
       "Empirically identified, assumed relationship with space-time restriction and probabilistic character. Typical for natural sciences as well as business and social sciences.",
       "‘If a customer … lives in postal code 60323, then he pays the invoice with a probability of 95 % within 10 days.’"
      ]
     ]
    },
    {
     "h": "Why a thesis is called a thesis",
     "p": "The research question leads, via the research paper, to a conclusion that is a potential answer – a possible explanation, not a definite solution. The result is therefore itself a hypothesis (a ‘thesis’)."
    }
   ]
  },
  {
   "id": "c4_approaches",
   "ch": 4,
   "title": "Research approaches",
   "intro": "Different research problems require different approaches and methods. The approach determines structure and style of the research.",
   "sections": [
    {
     "h": "The approaches",
     "items": [
      [
       "Philosophical – literature-based",
       "Critical reflection (analysis) of the state of knowledge.",
       "Comparing and evaluating what the literature says about home office and productivity."
      ],
      [
       "Philosophical – theoretical",
       "Generation of new theories or evaluation of existing theories.",
       "Extending a theory of technology acceptance by a new factor."
      ],
      [
       "Developmental",
       "Engineering, design or creation of a new process, product or artefact.",
       "Software, machinery, a business plan; also painting, music, fashion."
      ],
      [
       "Empirical – quantitative",
       "Collection and analysis of numerical data (statistical or experimental data).",
       "A standardised online survey of 1,000 customers evaluated with regression analysis."
      ],
      [
       "Empirical – qualitative",
       "Collection and analysis of non-standardised data.",
       "Interview protocols of ten expert interviews."
      ],
      [
       "Mixed approaches",
       "Combination of various approaches.",
       "Interview (understand the problem) → literature analysis (status quo) → theoretical foundation (solution) → business plan (operationalisation) → statistical data (empirical validation)."
      ]
     ]
    },
    {
     "h": "Which information each approach needs (Chapter 6)",
     "items": [
      [
       "Academic literature",
       "Essential for every approach.",
       ""
      ],
      [
       "Empirical data",
       "Irrelevant for literature-based research, might be relevant for theoretical research, essential for quantitative and qualitative empirical research.",
       ""
      ]
     ],
     "tip": "Trap: a standardised questionnaire with numbers is quantitative, even if a paper calls it ‘qualitative’."
    }
   ]
  },
  {
   "id": "c4_styles",
   "ch": 4,
   "title": "Scientific styles",
   "intro": "‘Different sciences have different scientific styles’: research requirements and research traditions of a discipline lead to different approaches and formal requirements. The three styles differ in when the hypothesis is formulated.",
   "sections": [
    {
     "h": "Theoretical solution-driven style (5 steps)",
     "p": "Problem → question → analysis → conclusion.",
     "items": [
      [
       "Steps",
       "1 identification of the research problem (‘aim’), 2 formulation of the research question, 3 theoretical analysis of the question, 4 formulation of a proposed explanation (hypothesis), 5 summary and discussion of the findings.",
       ""
      ],
      [
       "Use",
       "Frequently used for student assignments and student research projects.",
       ""
      ]
     ]
    },
    {
     "h": "Empirical solution-driven style (7 steps)",
     "p": "Problem → question → analysis → hypothesis → empirical survey → conclusion.",
     "items": [
      [
       "Steps",
       "1 problem, 2 question, 3 theoretical analysis, 4 hypothesis, 5 empirical analysis of the hypothesis, 6 acceptance or falsification of the hypothesis, 7 summary and discussion.",
       ""
      ],
      [
       "Use",
       "More advanced research projects.",
       ""
      ]
     ]
    },
    {
     "h": "Hypothesis-driven style (7 steps)",
     "p": "Problem → question & hypothesis → analysis → [empirical survey] → conclusion.",
     "items": [
      [
       "Steps",
       "1 problem, 2 question, 3 formulation of the hypothesis, 4 theoretical analysis of the hypothesis, 5 [empirical analysis], 6 acceptance or falsification, 7 discussion of the findings.",
       ""
      ],
      [
       "Problems",
       "One has to be quite experienced to identify a suitable hypothesis prior to the analysis. How can one produce a hypothesis at the starting point? Typically it does not reflect the working style of business reality.",
       ""
      ],
      [
       "Use",
       "Only in rare cases in business and social sciences; typical for the humanities.",
       ""
      ]
     ]
    },
    {
     "h": "Humanities vs. business sciences",
     "items": [
      [
       "Humanities (hypothesis-driven)",
       "1 a question linked to the available literature is presented, 2 a hypothesis (explanation, solution) is generated, 3 the paper discusses the hypothesis.",
       ""
      ],
      [
       "Business sciences (solution-driven)",
       "1 a completely new problem has to be solved, with no or limited information, 2 theoretical and/or empirical analysis, 3 the paper develops a hypothesis.",
       ""
      ]
     ]
    }
   ]
  },
  {
   "id": "c5_topic",
   "ch": 5,
   "title": "Identification of a topic",
   "intro": "If no topic is given, students have to find one. Proven criteria help: the candidate, the type of aim, a structured process and careful wording.",
   "sections": [
    {
     "h": "The candidate",
     "items": [
      [
       "Motivation",
       "Special interest (supports successful completion) and special qualification (access to a career field or employer; standing out in competitive job markets).",
       ""
      ],
      [
       "Qualification",
       "Methodical skillset (an unknown advanced method), language-driven topics (sources in a language you do not command), interdisciplinary topics (e.g. psychology, neurology), level of sophistication.",
       ""
      ],
      [
       "Information access",
       "Literature (needed for a literature review), data (needed for analysis), proprietary knowledge (cannot be accessed because it belongs to someone), protected knowledge (can be accessed but may not be used for legal reasons).",
       ""
      ]
     ]
    },
    {
     "h": "Abstract vs. problem-based aims",
     "items": [
      [
       "Aim",
       "The purpose or intention of a research project or a desired outcome in terms of an answer to a question.",
       ""
      ],
      [
       "Abstract aim",
       "Of an abstract (theoretical) nature.",
       "Removing the tax-related assumptions of the Modigliani-Miller theorem (1958) to advance the theorem."
      ],
      [
       "Problem-based aim",
       "Derived from a (practical) problem.",
       "A company wants to know how more debt affects its tax burden → recommendation."
      ],
      [
       "Characteristics",
       "Abstract: instructor as advisor, own identification and interpretation, extended room for creativity, challenge = satisfying the instructor. Problem-based: instructor and partner company, provided topic and predetermined interpretation, limited creativity, challenge = aligning instructor’s and company’s expectations.",
       ""
      ]
     ]
    },
    {
     "h": "Idealised process (6 steps)",
     "items": [
      [
       "1 Inspire yourself",
       "Gather information on potential topics (Sourcing of information).",
       ""
      ],
      [
       "2 Gather more information",
       "Information on short-listed topics (Sourcing of information).",
       ""
      ],
      [
       "3 Phrase a topic",
       "Verbalise a more refined draft (Academic language).",
       ""
      ],
      [
       "4 Develop an interpretation (‘aim’)",
       "Identify possible aims and decide for one (Interpretation of a topic).",
       ""
      ],
      [
       "5 Select a suitable research approach",
       "Identify an appropriate methodological approach (Research process).",
       ""
      ],
      [
       "6 Refine the research problem",
       "Write a draft outline and draft research problem (Structuring technique).",
       ""
      ]
     ]
    },
    {
     "h": "Techniques",
     "p": "Brainstorming, contacting instructors, web search, high-class newspapers and magazines, literature research in library catalogues, institutional contacts (internships, student jobs)."
    },
    {
     "h": "Topic and title",
     "items": [
      [
       "Title vs. topic",
       "Title = headline on the cover page; topic = subject matter of the research.",
       ""
      ],
      [
       "Combinations",
       "(1) Title and topic identical; (2a) only a title is named; (2b) title plus subtitle that states the topic.",
       "Identical: ‘Project finance of windmill farms under the EEG’. Title only: ‘EEG – Blowin’ in the wind?’"
      ],
      [
       "From title to question",
       "Title → topic → interpretation → research problem → research question.",
       "‘Are CoCos nuts?’ → CoCos and regulatory capital → causal connection → banks need capital to absorb losses → ‘What is the effect of CoCos on the loss absorption capacity of banks?’"
      ]
     ]
    },
    {
     "h": "Verbalisation",
     "p": "Apply clarity: clearness (careful selection of terminology, accurate language) and proper composition (careful phrasing, strict focus on the topic). The more a topic is narrowed down, the more specific and longer it gets – e.g. ‘Marketing’ → ‘Visual stimuli in food marketing’ → ‘Colour design of semi-transparent packaging materials in natural and artificial light scenarios as visual stimuli in food marketing’."
    }
   ]
  },
  {
   "id": "c6_literature",
   "ch": 6,
   "title": "Information sources and types of literature",
   "intro": "Sourcing determines the quality of a project: qualitative completeness needs all relevant sources, comparability needs the status quo.",
   "sections": [
    {
     "h": "Types of literature",
     "items": [
      [
       "Monograph",
       "A single, self-contained work on a single subject or problem, one or more authors; no anthology or encyclopaedia.",
       "Doctoral thesis, professorial thesis, specialised book (bachelor’s/master’s theses are also monographs, but weaker references)."
      ],
      [
       "Textbooks",
       "Introductory textbooks (audience: students) are problematic references; advanced textbooks are potential references; monographs are suitable due to depth.",
       "‘Marketing: An introduction’ (introductory) vs. ‘Marketing: Analysis, planning, implementation, and control’ (advanced)."
      ],
      [
       "Journal article",
       "Self-contained text on a specific subject in a periodical academic journal with editorial board and review process; journals are ranked (A- to E-journals).",
       ""
      ],
      [
       "Concise dictionary",
       "Academic/professional encyclopaedia giving the generally accepted state of knowledge in condensed but comprehensive entries.",
       "The Concise Encyclopedia of Economics."
      ],
      [
       "Edited work",
       "Collection of texts by different authors, published by editors (edited volume, anthology, reader, collected work).",
       ""
      ],
      [
       "Working paper",
       "Published in a working paper series, irregular, with editors but no review process; fast feedback; often a prospective journal article. Also called discussion or research paper.",
       ""
      ],
      [
       "Conference proceedings",
       "Conference papers on new findings, refereed or not refereed; oral or poster presentations.",
       ""
      ],
      [
       "White paper / green paper",
       "Institutional (governmental) preliminary proposal; a white paper can also be a B2B marketing document.",
       ""
      ],
      [
       "Consultation paper, technical paper, manual",
       "Proposal in an institutionalised consultation process; description or prescription of standards and procedures; technical documentation of software, hardware, equipment or machinery.",
       ""
      ],
      [
       "Legal sources",
       "Body of laws (acts, statutes, regulations), legal commentaries, rulings (court decisions), contracts (agreements, treaties), court reviews.",
       ""
      ]
     ]
    }
   ]
  },
  {
   "id": "c6_appraisal",
   "ch": 6,
   "title": "Appraisal of references",
   "intro": "Not every source may be cited, and not every citable source is trustworthy.",
   "sections": [
    {
     "h": "Citability – the quality of being citable",
     "p": "Based on traceability (third parties must be able to reproduce conclusions). Three criteria:",
     "items": [
      [
       "Published",
       "By a publishing company, a credible institution or by self-publishing.",
       "Unpublished notes of a fellow student are not citable."
      ],
      [
       "Identifiable",
       "E.g. ISBN, ISSN, DOI.",
       ""
      ],
      [
       "Checkable",
       "E.g. via libraries, databases or an attachment.",
       ""
      ]
     ]
    },
    {
     "h": "Credibility – reputation or trustworthiness",
     "items": [
      [
       "Author’s background",
       "Function, position, degrees, education, institution.",
       ""
      ],
      [
       "Publishing context",
       "Publisher, book series or academic journal.",
       ""
      ],
      [
       "Quality certainty",
       "Editorial board, type and extent of the editorial process.",
       ""
      ],
      [
       "Target group",
       "E.g. the academic community.",
       ""
      ]
     ],
     "tip": "Wikipedia: anonymous authors and no editorial quality certainty → low credibility. Use it for orientation, cite the original sources."
    },
    {
     "h": "Double-blind peer review",
     "p": "1 The author submits the article to the editorial office. 2 The office removes the author’s name and sends the article to a 1st and 2nd referee (‘peers’). 3–4 The referees write reviews. 5 The office removes the referees’ names. 6 The reviews go to the editorial board, which decides. Neither side knows the other."
    },
    {
     "h": "Citation indices and journal rankings",
     "items": [
      [
       "Citation index",
       "Database of citations that shows the importance of authors: h-index (Jorge E. Hirsch), g-index (Leo Egghe), i10-index (Google Scholar), Social Science Citation Index (SSCI).",
       ""
      ],
      [
       "Journal Impact Factor",
       "Citations in a year to articles of the two preceding years ÷ number of articles of those two years.",
       "300 citations in 2014 to 200 articles from 2012–2013 → JIF = 1.5."
      ]
     ]
    },
    {
     "h": "Grey literature",
     "items": [
      [
       "Definition",
       "Literature not commercially published and distributed.",
       ""
      ],
      [
       "Originators",
       "Governmental bodies, NGOs, academic and research institutions, companies and business associations.",
       ""
      ],
      [
       "Examples",
       "Conference proceedings, working papers, consultation and technical papers, manuals, white/green papers, leaflets, legal documents, financial statements, business reports.",
       ""
      ]
     ]
    }
   ]
  },
  {
   "id": "c6_search",
   "ch": 6,
   "title": "Literature search",
   "intro": "How to find literature efficiently: where to search and how to formulate the search.",
   "sections": [
    {
     "h": "Information access and retrieval",
     "items": [
      [
       "General information retrieval",
       "Web search engines (e.g. Google).",
       ""
      ],
      [
       "Academic literature search",
       "Scholarly search engines (Google Scholar), open repositories (SSRN), open digital libraries (Google Books), commercial databases (EBSCO), commercial digital libraries (JSTOR), OPAC of libraries.",
       ""
      ],
      [
       "Libraries",
       "Research and reference libraries with physical and/or digital access.",
       ""
      ]
     ]
    },
    {
     "h": "Search strategies",
     "items": [
      [
       "Search fields",
       "Author’s name, title of publication, headwords (catchwords), keywords (index terms, descriptors, subject headings).",
       ""
      ],
      [
       "Directly vs. indirectly related literature",
       "Search for literature directly on the topic and for literature on related, broader topics.",
       "Topic EEG windmill farms: ‘Project finance under the EEG’ (direct) vs. ‘Energy politics’ or ‘Handbook of energy law’ (indirect)."
      ],
      [
       "Thesaurus",
       "A structured list of index terms (descriptors) to identify keywords of a discipline.",
       "STW Thesaurus for Economics (ZBW)."
      ]
     ]
    },
    {
     "h": "Search logic",
     "items": [
      [
       "Right-sided truncation",
       "Wildcard at the end.",
       "market* → marketing, markets, marketplace"
      ],
      [
       "Left-sided truncation",
       "Wildcard at the beginning.",
       "*market → supermarket, hypermarket"
      ],
      [
       "Multiple character truncation",
       "* replaces any number of characters.",
       "mode*ing → modelling, modeling, moderating"
      ],
      [
       "Single character truncation",
       "? replaces exactly one character.",
       "mode?ing → modeling"
      ],
      [
       "Boolean AND / OR / NOT",
       "AND: both terms (fewer results); OR: at least one term (more results); NOT: excludes a term.",
       "project NOT finance"
      ],
      [
       "Phrase search",
       "Adjacent words in quotation marks: only the exact phrase.",
       "“project financing”"
      ]
     ]
    }
   ]
  },
  {
   "id": "c7_structure",
   "ch": 7,
   "title": "Structure of a research paper",
   "intro": "Which elements a paper consists of, in which order, and how pages are numbered.",
   "sections": [
    {
     "h": "Three types of structural elements",
     "items": [
      [
       "Always used",
       "Cover page, outline, list of figures/tables, list of abbreviations, main body, bibliography/list of references, declaration of originality.",
       ""
      ],
      [
       "Optionally used",
       "Abstract/summary, list of court decisions, list of symbols, list of formulas, glossary, appendix, electronic storage media.",
       ""
      ],
      [
       "Selectively used (published research only)",
       "Foreword, preface, dedication, index of names, subject index.",
       ""
      ]
     ]
    },
    {
     "h": "Four sections and page numbering",
     "items": [
      [
       "1st section: addments",
       "E.g. cover page, abstract (foreword, preface, dedication). Roman numerals.",
       ""
      ],
      [
       "2nd section: directories",
       "E.g. outline, list of figures/tables, list of abbreviations, symbols, formulas. Roman numerals.",
       ""
      ],
      [
       "3rd section: (main) body",
       "The text. Arabic numerals, starting with page ‘– 1 –’.",
       ""
      ],
      [
       "4th section: annex",
       "E.g. list of references, glossary, appendix, declaration of originality. Arabic or Roman numerals.",
       ""
      ]
     ]
    },
    {
     "h": "Which element in which type of paper",
     "items": [
      [
       "Yes in all three (term paper, thesis, dissertation)",
       "Cover page, outline, list of figures/tables, list of abbreviations, main body, bibliography/list of references, declaration of originality.",
       ""
      ],
      [
       "Abstract/summary",
       "Term paper: no. Thesis and dissertation: optional.",
       ""
      ],
      [
       "Optional in all three",
       "List of court decisions, list of symbols, list of formulas, appendix.",
       ""
      ],
      [
       "Glossary",
       "Term paper: uncommon. Thesis: rarely. Dissertation: occasionally.",
       ""
      ],
      [
       "Electronic storage media",
       "Occasionally in all three.",
       ""
      ]
     ]
    },
    {
     "h": "Order of elements",
     "p": "(1) Cover page, (2) abstract, (3) outline, (4) list of figures, (5) list of tables, (6) list of abbreviations, (7) list of symbols, (8) list of formulas, (9) main body, (10) bibliography/list of references, (11) glossary, (12) appendix, (13) declaration of originality, (14) data carriers and storage media."
    }
   ]
  },
  {
   "id": "c7_cover_abstract",
   "ch": 7,
   "title": "Cover page and abstract",
   "intro": "The first things a reader sees – and frequent sources of mistakes in Part B.",
   "sections": [
    {
     "h": "Contents of the cover page",
     "items": [
      [
       "Always",
       "Purpose (term paper, bachelor/master thesis), title, name of faculty and department, name of degree programme, first name and family name, matriculation number, date and place of birth, address/telephone/e-mail, date of submission.",
       ""
      ],
      [
       "Only term papers",
       "Course title, name of instructor, semester (e.g. ‘summer term 2010’).",
       ""
      ],
      [
       "Only thesis projects",
       "Titles (if any) and names of the referees.",
       ""
      ]
     ]
    },
    {
     "h": "Design of the cover page",
     "items": [
      [
       "Appropriate",
       "Plain design, black font, white paper.",
       ""
      ],
      [
       "Inappropriate",
       "Distracting pictures, company logos, design elements.",
       "A coloured airline logo and a sunset photo on a term paper cover."
      ]
     ]
    },
    {
     "h": "Abstract",
     "items": [
      [
       "Purpose",
       "Filing and archiving; information for an examination board or an editor’s advisory board.",
       ""
      ],
      [
       "Elements",
       "Short summary, keywords, JEL classification.",
       ""
      ],
      [
       "Length",
       "Maximum of one page.",
       ""
      ],
      [
       "Keywords",
       "Specific terms that characterise the content.",
       "‘Project finance, windmill farms, renewable energy, German energy law, EEG, subsidies’ – not ‘financial’."
      ],
      [
       "JEL classification",
       "Codes of the Journal of Economic Literature.",
       "G21 banks; G32 financing policy, financial risk; H23 externalities, environmental taxes and subsidies; O38 government policy."
      ],
      [
       "Term papers",
       "No abstract (only optional for theses and dissertations).",
       ""
      ]
     ],
     "tip": "A good short summary states aim/research question, approach and main findings – not just background."
    }
   ]
  },
  {
   "id": "c7_outline",
   "ch": 7,
   "title": "Outline, numbering and main body",
   "intro": "Formal structuring rules – the most frequent formal mistakes in Part B.",
   "sections": [
    {
     "h": "Numbering systems",
     "items": [
      [
       "Decadal system",
       "1 → 1.1 → 1.1.1 … No full stop after the last cipher.",
       "Correct: ‘2.1 Major features’. Incorrect: ‘2.1. Major features’."
      ],
      [
       "Alphanumerical system",
       "A. → I. → 1. → a) → aa) → (1). Deep levels stay short: ‘(2)’ instead of ‘2.1.3.1.1.2’. Sometimes not allowed by examination regulations.",
       "A. Introduction – I. Research problem – II. Research methodology – B. Project finance …"
      ],
      [
       "At least two subchapters",
       "If a chapter is subdivided, there must be at least two subchapters – otherwise a major mistake.",
       "1, 1.1, 1.2, 1.3, 2, 2.1, 3 → 2.2 is missing."
      ],
      [
       "Consistency",
       "Do not mix systems within one outline.",
       ""
      ]
     ]
    },
    {
     "h": "Principles of the main body",
     "items": [
      [
       "Numbered headlines",
       "Chapter headlines are numbered.",
       ""
      ],
      [
       "Match with outline",
       "Numbering and wording correspond with the outline.",
       ""
      ],
      [
       "Page one",
       "The first page of the main body is page ‘– 1 –’.",
       ""
      ],
      [
       "No intermediate text",
       "No paragraphs without numbered headline (between ‘2’ and ‘2.1’).",
       ""
      ],
      [
       "Logic",
       "The structure corresponds with the logic of the research question.",
       ""
      ]
     ]
    },
    {
     "h": "Mistakes of numbering and structuring (slide example)",
     "items": [
      [
       "Incomplete numbering + illogical structure",
       "2 Dynamic capital budgeting methods → unnumbered ‘General considerations’ → 2.1 NPV, 2.2 Annuity, 2.3 IRR.",
       ""
      ],
      [
       "Complete numbering, illogical structure",
       "2.1 General considerations, 2.2 NPV, 2.3 Annuity, 2.4 IRR – general part and individual methods on one level.",
       ""
      ],
      [
       "Correct",
       "2.1 General considerations, 2.2 Methods, 2.2.1 NPV, 2.2.2 Annuity, 2.2.3 IRR.",
       ""
      ]
     ]
    },
    {
     "h": "Intermediate text – two positions",
     "items": [
      [
       "In favour (‘journalistic’/‘narrative style’)",
       "Entry point that gives orientation; recursion to the course of investigation that introduces new chapters.",
       ""
      ],
      [
       "Against (‘academic hard style’)",
       "Orientation is already provided by outline, research problem and course of investigation; creates redundancy and consumes space; often linked to text without proper structure.",
       ""
      ]
     ],
     "tip": "Clarify your instructor’s position before you start writing."
    }
   ]
  },
  {
   "id": "c7_directories",
   "ch": 7,
   "title": "Lists, abbreviations, figures and tables",
   "intro": "Rules for the directories and for figures and tables in the main body.",
   "sections": [
    {
     "h": "List of figures and tables",
     "items": [
      [
       "Option 1",
       "One combined list of figures and tables.",
       ""
      ],
      [
       "Option 2",
       "Separate list of figures and list of tables.",
       ""
      ],
      [
       "In both cases",
       "Number figures and tables (Fig. 1, Tab. 1) and list their individual page numbers.",
       ""
      ]
     ]
    },
    {
     "h": "List of abbreviations",
     "items": [
      [
       "Two steps",
       "Explain the abbreviation in the paragraph where you introduce it, then list it in the list of abbreviations.",
       "‘… export credit agencies (ECA) …’ → list: ECA – Export credit agency"
      ],
      [
       "Do",
       "List commonly used abbreviations of your field (ECA); amend institutions with legal form and location.",
       "VW – Volkswagen AG, Wolfsburg/Germany"
      ],
      [
       "Do not",
       "Abbreviate general terminology; introduce self-made abbreviations; list commonly known abbreviations.",
       "Not ‘SCM’ for supply chain management, not ‘NIEF’, not ‘etc.’ or ‘no.’."
      ]
     ]
    },
    {
     "h": "Symbols and formulas",
     "items": [
      [
       "List of symbols",
       "Explain symbols where you introduce them and additionally specify them in a list of symbols.",
       ""
      ],
      [
       "List of formulas",
       "Common in quantitative work (also list of equations/algorithms). Number each formula in the text; check with your instructor whether a list is required.",
       "‘Formula 21: EL = PD · LS · EAD’"
      ]
     ]
    },
    {
     "h": "Figures and tables",
     "items": [
      [
       "Formal: headline",
       "Individual, numbered headline, typically at the top.",
       "‘Fig. 1: Development of mobile payment transactions in Germany, 2019–2024’"
      ],
      [
       "Formal: reference",
       "A source, typically at the bottom.",
       "‘Source: Deutsche Bundesbank (2024), p. 12’ – not ‘various internet sources’."
      ],
      [
       "Formal: one page",
       "Figure/table, headline and reference on a single page.",
       ""
      ],
      [
       "Material: linked",
       "Linked to the text of the main body.",
       ""
      ],
      [
       "Material: discussed",
       "Introduced and discussed in the text.",
       ""
      ],
      [
       "Material: position",
       "A chapter should not start or end with a figure or table.",
       ""
      ]
     ]
    }
   ]
  },
  {
   "id": "c7_annex",
   "ch": 7,
   "title": "Annex: references, glossary, appendix, declaration",
   "intro": "Everything after the main body.",
   "sections": [
    {
     "h": "Bibliography vs. list of references",
     "items": [
      [
       "Bibliography",
       "Lists information sources used in the research process – cited as well as not cited in the text.",
       ""
      ],
      [
       "List of references",
       "Lists only information sources cited in the text (also ‘sources list’).",
       ""
      ]
     ]
    },
    {
     "h": "Arrangement",
     "items": [
      [
       "Parenthetical referencing (and footnotes with abridged information)",
       "One list in alphabetical order.",
       ""
      ],
      [
       "Footnote referencing with full information",
       "A structured list is possible: a) monographs, b) articles, c) articles of anonymous authors, d) legal texts, e) other sources.",
       ""
      ],
      [
       "Sorting within a segment",
       "First alphabetical order, then date of appearance (ascending).",
       ""
      ]
     ]
    },
    {
     "h": "Glossary",
     "items": [
      [
       "Content",
       "Specific terminology: technical terms, jargon of a sector or industry, terms of a company.",
       ""
      ],
      [
       "Rules",
       "Alphabetical order; explanations of two to four sentences; no terms of common knowledge; minimum length of one page.",
       ""
      ]
     ]
    },
    {
     "h": "Appendix",
     "p": "Extensive elements: documents, legal texts, contracts; company profiles and financial statements; questionnaires; large amounts of data and statistics; interview protocols; pictures, maps, special graphics (flow charts, org charts)."
    },
    {
     "h": "Declaration of originality and storage media",
     "items": [
      [
       "Declaration of originality",
       "Required by faculty rules/examination regulations, which forbid plagiarism and collusion; the examination board prosecutes violations. Always used.",
       ""
      ],
      [
       "Electronic submission",
       "Thesis (Word and PDF) and sources on a data carrier or via upload – for archiving (‘paperless office’) and plagiarism/collusion checking.",
       ""
      ]
     ]
    }
   ]
  },
  {
   "id": "c8_technique",
   "ch": 8,
   "title": "Interpretation technique",
   "intro": "Interpretation is a prerequisite for structuring a research project. It ensures precision when analysing the aim and avoids a false approach.",
   "sections": [
    {
     "h": "Three process steps",
     "items": [
      [
       "1 Negative interpretation",
       "What does the topic NOT cover?",
       "Topic ‘Project finance of windmill farms under the German EEG’: not covered are corporate finance and asset finance, solar energy and hydropower, a European or global focus."
      ],
      [
       "2 Positive interpretation",
       "Which of the five aims are possible: description, causal connection, intention, function, comparison? More than one aim possible → select one or combine two or more.",
       ""
      ],
      [
       "3 Decision",
       "Selection of the aim.",
       ""
      ],
      [
       "Who",
       "The candidate has the duty and the right to interpret the topic, coordinated with the thesis advisor.",
       ""
      ]
     ]
    },
    {
     "h": "Selecting the aim",
     "items": [
      [
       "Abstract analysis",
       "Look at the topic alone and consider which aims would be possible.",
       ""
      ],
      [
       "Problem-based analysis",
       "Topic + problem setting: the context (academic or case) and the nature of the task point to the appropriate aim.",
       "‘Windy decision’: context = credit decision, nature of task = interdependencies between EEG and feasibility → function."
      ],
      [
       "Explicit topic",
       "Names the aim directly.",
       "‘Hedging spot market price risks … with container freight derivatives (CFD)’"
      ],
      [
       "Topic requiring problem-based interpretation",
       "Does not reveal the aim; it must be derived from the problem setting.",
       "‘Risk management with container freight derivatives (CFD)’"
      ]
     ],
     "tip": "In Part C, always justify your aim with words from the information text or the task (e.g. ‘responsible for’, ‘purpose’, ‘interdependencies’, ‘appraisal’)."
    }
   ]
  },
  {
   "id": "c8_aims",
   "ch": 8,
   "title": "The five aims of interpretation",
   "intro": "The core of Chapter 8 and of Part C. Each aim has typical objects of investigation and typical questions – all examples refer to ‘Project finance of windmill farms under the German EEG’.",
   "sections": [
    {
     "h": "1 Description",
     "items": [
      [
       "Objects",
       "Facts, circumstances, structures, processes, empirical evidence, cases; resources, data, instruments, agents, incidents, methods, procedures.",
       ""
      ],
      [
       "Questions",
       "How? Who? Where? How long?",
       ""
      ],
      [
       "Examples",
       "How are project financings realised under the EEG? (structure/process, technical) – Who arranges them? (facts, institutional) – Where are they realised? (regional) – How long can they be realised? (time).",
       ""
      ]
     ]
    },
    {
     "h": "2 Causal connection",
     "items": [
      [
       "Objects",
       "Causality: cause → effect; reason → consequence, result; relation, context. One direction.",
       ""
      ],
      [
       "Questions",
       "What is the effect of A on B? What are the causes of B?",
       ""
      ],
      [
       "Examples",
       "What are the reasons that led to the rules of the EEG? What is the effect of the EEG regulation on project financings of windmill farms?",
       ""
      ]
     ]
    },
    {
     "h": "3 Intention",
     "items": [
      [
       "Objects",
       "Intentions, aims, purposes, objectives, motives, designations – plus resources, instruments, agents, means, methods.",
       ""
      ],
      [
       "Questions",
       "What is the aim of something? What is intended to be achieved? Why is something done in a special way? What are the means / instruments to achieve it?",
       ""
      ],
      [
       "Examples",
       "What is the aim or intention of the EEG? What are the means of the EEG to achieve its aim?",
       ""
      ]
     ]
    },
    {
     "h": "4 Function",
     "items": [
      [
       "Objects",
       "Functional relations, interdependencies, reciprocities, correlations, relatedness, connections. Both directions (A ↔ B).",
       ""
      ],
      [
       "Questions",
       "How is A influenced by B and how is B influenced by A? What is the impact of A on B and of B on A?",
       ""
      ],
      [
       "Example",
       "How is project finance of windmill farms influenced by the EEG and how was the structure of the EEG influenced by the special character of project finance and windmill farms?",
       ""
      ]
     ]
    },
    {
     "h": "5 Comparison",
     "items": [
      [
       "Objects",
       "Equalities, similarities, differences – between sectors, quality and quantity, points in time, companies, countries, criteria. Also target/actual comparisons: supervisions, assessments, tests, examinations, audits, controls, certifications.",
       ""
      ],
      [
       "Examples",
       "‘… under the EEG and the Spanish subsidy scheme’ → Which scheme is more effective? ‘… after the revision of the EEG’ → Which version serves the purpose? ‘Efficiency and effectiveness of the EEG …’ → To which degree does the scheme serve its purpose?",
       ""
      ]
     ],
     "tip": "Causal = one direction; function = both directions. A comparison does not need two objects – target vs. actual is enough."
    }
   ]
  },
  {
   "id": "c8_cases",
   "ch": 8,
   "title": "The five mini cases",
   "intro": "The slides apply problem-based interpretation to five cases. The wording of each task reveals the aim.",
   "sections": [
    {
     "h": "Overview",
     "items": [
      [
       "Sinking ships → description",
       "A logistics provider charters container capacity on the volatile spot market; the managing director asks a trainee to ‘lay out the process of hedging with container freight derivatives’.",
       "Explicit topic: ‘Hedging spot market price risks for logistic service providers with CFD’. Question: ‘How can price risks be managed with container freight derivatives?’"
      ],
      [
       "Smelly shampoo → causal connection",
       "An Asian cosmetics company has stagnating EU sales; headquarters asks whether the softness of the fragrance ‘is responsible for’ low sales.",
       "Explicit topic: ‘Impact of fragrance specification of hair care products on European sales volumes’. Question: ‘Is the fragrance of the shampoo responsible for the poor sales figures?’"
      ],
      [
       "Printing money → intention",
       "The ECB lent banks about EUR 500 billion for 3 years at 1 %; members of the Bundestag ask for a paper on the ‘purpose’ of the ECB’s action.",
       "Explicit topic: ‘Purposes of ECB’s long-term refinancing operations in the context of the sovereign debt crisis’. Question: ‘What is the intention of the ECB money tenders …?’"
      ],
      [
       "Windy decision → function",
       "A farmer wants a loan for a windmill farm (20 % equity, 80 % debt); the bank’s executive committee asks for an analysis of the ‘interdependencies’ between the EEG and project financing.",
       "Explicit topic: ‘Interdependencies between the EEG and project financing of windmill projects’. Question: ‘How do the EEG and the financial feasibility of windmill farm project financings influence each other?’"
      ],
      [
       "Clara Couture → comparison",
       "A fashion company must change its legal form; a law firm proposes an SE; the CEO asks for an ‘appraisal’ of the proposal.",
       "Explicit topic: ‘Appraisal of the suitability of the legal form SE for the cross-border expansion strategy of Clara Couture’. Question: ‘Does the Societas Europaea suit the objectives of Clara Couture?’"
      ]
     ]
    },
    {
     "h": "Signal words",
     "p": "‘lay out the process / how does it work’ → description · ‘responsible for / effect of’ → causal connection · ‘purpose / what is intended / means’ → intention · ‘interdependencies / influence each other’ → function · ‘appraisal / suit the objectives / better than / differences’ → comparison."
    }
   ]
  },
  {
   "id": "c9_problem",
   "ch": 9,
   "title": "From title to research problem",
   "intro": "Chapter 9 turns the interpretation into a consistent structure. It starts with the research problem (chapter 1.1).",
   "sections": [
    {
     "h": "From title to research question",
     "items": [
      [
       "Title",
       "Headline on the cover page.",
       "EEG – Blowin’ in the wind?"
      ],
      [
       "Topic",
       "Subject matter of the research.",
       "Project finance of windmill farms under the German renewable energy act (EEG)"
      ],
      [
       "Interpretation",
       "Possible aims, decision.",
       "Functional approach"
      ],
      [
       "Research problem",
       "Description of the aim (the ‘problem’).",
       "Project finance of windmill farms requires an adequate mitigation of market risk."
      ],
      [
       "Research question",
       "Verbalisation of the objective(s).",
       "How do the EEG and the financial feasibility of windmill farm project financings influence each other?"
      ]
     ]
    },
    {
     "h": "Deductive structure of the research problem",
     "p": "Deductive reasoning (general → specific) is a pragmatic way to write a research problem and frequently used in business sciences.",
     "items": [
      [
       "1st paragraph (3–5 sentences)",
       "The most general element.",
       "Project finance is a financing technique that is frequently used in order to …"
      ],
      [
       "2nd paragraph (3–5 sentences)",
       "The next, more specific element.",
       "Windmill farms are renewable energy investments that require high amounts of …"
      ],
      [
       "3rd paragraph (3–5 sentences)",
       "The most specific element.",
       "The German renewable energy act (EEG) is a law that …"
      ],
      [
       "4th paragraph (2–3 sentences)",
       "Aim and research question.",
       "This research paper aims to analyse how the EEG and the financial feasibility of windmill farm project financings influence each other. Focus will be on …"
      ]
     ]
    },
    {
     "h": "Rules for writing a research problem",
     "items": [
      [
       "Style",
       "Avoid ‘journalistic’ or colloquial writing styles.",
       "Not: ‘Everybody knows that climate change is the biggest problem of our time!’"
      ],
      [
       "Statements",
       "Beware of superficial general, political and/or personal statements.",
       "Not: ‘I personally find this topic super interesting.’"
      ],
      [
       "Focus",
       "Focus on the topic and its components (elements).",
       ""
      ],
      [
       "Length",
       "Maximum 1–2 pages; typically shorter for term papers than for thesis projects.",
       ""
      ],
      [
       "Optional",
       "Numerical facts and statistical data.",
       ""
      ]
     ]
    }
   ]
  },
  {
   "id": "c9_outline",
   "ch": 9,
   "title": "Outline, course of investigation, research method",
   "intro": "The parts of the introduction and the outline must fit together – the ‘triangle of synchronisation’.",
   "sections": [
    {
     "h": "Aligning outline and research question",
     "p": "The structure of the outline has to match the logic of the research question. Windmill example (functional): 1 Introduction, 2 Project finance of windmill farms (general background), 3 Financial feasibility of German windmill farms (analysis of feasibility based on the tariff structure = impact of EEG on feasibility), 4 Wind energy tariff structure of the EEG (analysis of the tariff structure based on the specifics of windmill farms = impact of windmill farms on the law), 5 Conclusion."
    },
    {
     "h": "Aligning course of investigation and outline",
     "p": "The course of investigation describes the chapters in the same order as the outline.",
     "items": [
      [
       "Example",
       "‘Based upon the research question postulated in chapter 1.1, a definition and description of project finance will be given in chapter 2. … Thereafter, the financial feasibility of German windmill farms will be addressed in chapter 3. … In the conclusion (chapter 5) a summary of the findings, a critical acclaim and an outlook will be given.’",
       ""
      ]
     ]
    },
    {
     "h": "Triangle of synchronisation",
     "p": "Outline, 1.1 research problem and 1.3 course of investigation each have to match the other two. 1.2 research method sits in the middle and affects all three corners."
    },
    {
     "h": "Describing the research method",
     "items": [
      [
       "Option 1",
       "Separate chapter ‘1.2 Research method’: one paragraph of 4–5 sentences; course of investigation becomes 1.3.",
       "‘This paper analyses the impact of the legal environment on the financing of windmill farms. Hence, a legal interpretation of the applicable law is required. For this purpose …’"
      ],
      [
       "Option 2",
       "No separate chapter: a paragraph on the method at the beginning of ‘1.2 Course of investigation’.",
       ""
      ]
     ]
    },
    {
     "h": "Rules of thumb for an outline",
     "items": [
      [
       "Number of main chapters",
       "Typically five, rarely six.",
       ""
      ],
      [
       "Fixed positions",
       "The introduction is always the first chapter; the conclusion is always the last chapter.",
       ""
      ],
      [
       "Simplified example",
       "1 Introduction, 2 Project finance, 3 Windmill farms, 4 German renewable energy act (EEG), 5 Conclusion.",
       ""
      ]
     ]
    }
   ]
  },
  {
   "id": "c9_conclusion",
   "ch": 9,
   "title": "Conclusion: summary, critical acclaim, outlook",
   "intro": "The last chapter of every research paper consists of three elements.",
   "sections": [
    {
     "h": "Three elements",
     "items": [
      [
       "Summary",
       "A short résumé of your research work and its findings.",
       ""
      ],
      [
       "Critical acclaim",
       "A differentiated and critical reflection of your research work.",
       ""
      ],
      [
       "Outlook",
       "A discussion of future prospects of the topic.",
       ""
      ]
     ]
    },
    {
     "h": "Summary",
     "items": [
      [
       "Purpose",
       "Aggregation of research results – no new information.",
       ""
      ],
      [
       "Structure",
       "Matches the outline: one paragraph per core chapter, in the same order.",
       "1st paragraph → chapter 2, 2nd → chapter 3, 3rd → chapter 4 …"
      ],
      [
       "Last paragraph",
       "Answers the research question (research problem).",
       ""
      ]
     ]
    },
    {
     "h": "Critical acclaim",
     "items": [
      [
       "Content",
       "Relates the answer to the research question and the hypothesis; critical reflection; restrictions and limitations.",
       "‘The analysed studies only cover companies with fewer than 500 employees, so the results cannot be transferred to large corporations.’"
      ],
      [
       "No excusatory statements",
       "Do not use it for excuses.",
       "‘There was not enough time for proper research.’ / ‘It is difficult for me as a student to deal with such a topic.’ / ‘There were not enough sources in our library.’"
      ]
     ]
    },
    {
     "h": "Outlook",
     "p": "An intellectual achievement and a reflection of your own research:",
     "items": [
      [
       "Criteria",
       "Own substantiated thoughts; derived from your research; pointing towards the future; logical and comprehensible; avoiding mere speculation.",
       ""
      ],
      [
       "Good vs. bad",
       "Good: ‘If further pilot studies confirm the effect for large companies, …’ Bad: ‘In ten years every company will have introduced a four-day week.’",
       ""
      ]
     ]
    }
   ]
  }
 ],

 // ---------- Which concept cards are shown after which task ----------
 conceptMap: {"sets":{"A1-01":["c1_terms"],"A1-02":["c1_terms"],"A1-03":["c1_philo"],"A1-04":["c1_philo"],"A1-05":["c1_philo","c1_frame"],"S-A1":["c2_accuracy"],"S-A2":["c2_compl_clar"],"A2-01":["c2_accuracy","c2_compl_clar","c2_comp_mat"],"A2-02":["c2_accuracy"],"A2-03":["c2_accuracy"],"A2-04":["c2_accuracy"],"A2-05":["c2_compl_clar"],"A2-06":["c2_comp_mat"],"A2-07":["c2_compl_clar"],"A2-08":["c2_comp_mat","c2_accuracy"],"S-A3":["c3_reasoning"],"S-A4":["c3_syllogism"],"S-A5":["c3_falsification"],"A3-01":["c3_reasoning"],"A3-02":["c3_syllogism"],"A3-03":["c3_syllogism","c3_falsification"],"A3-04":["c3_falsification"],"A3-05":["c3_falsification"],"A3-06":["c3_falsification"],"A3-07":["c3_syllogism"],"A3-08":["c3_syllogism"],"A4-01":["c4_questions"],"A4-02":["c4_questions"],"A4-03":["c4_questions"],"A4-04":["c4_hypotheses"],"A4-05":["c4_hypotheses"],"A4-06":["c4_hypotheses"],"A4-07":["c4_hypotheses"],"A4-08":["c4_hypotheses"],"A4-09":["c4_hypotheses","c4_questions"],"A4-10":["c4_approaches"],"A4-11":["c4_approaches"],"A4-12":["c4_styles"],"A4-13":["c4_styles"],"A4-14":["c4_styles"],"A4-15":["c4_styles"],"A5-01":["c5_topic"],"A5-02":["c5_topic"],"A5-03":["c5_topic"],"A5-04":["c5_topic"],"A5-05":["c5_topic"],"A6-01":["c6_literature"],"A6-02":["c6_literature"],"A6-03":["c6_appraisal"],"A6-04":["c6_appraisal"],"A6-05":["c6_appraisal"],"A6-06":["c6_appraisal"],"A6-07":["c6_search"],"A6-08":["c6_search"],"A6-09":["c6_literature","c4_approaches"],"A7-01":["c7_structure"],"A7-02":["c7_structure"],"A7-03":["c7_structure"],"A7-04":["c7_structure"],"A7-05":["c7_cover_abstract"],"A7-06":["c7_cover_abstract"],"A7-07":["c7_cover_abstract"],"A7-08":["c7_outline"],"A7-09":["c7_outline"],"A7-10":["c7_outline"],"A7-11":["c7_outline"],"A7-12":["c7_directories"],"A7-13":["c7_directories"],"A7-14":["c7_directories"],"A7-15":["c7_directories"],"A7-16":["c7_annex"],"A7-17":["c7_annex"],"A7-18":["c7_annex"],"A7-19":["c7_annex"],"A7-20":["c7_directories"],"A8-01":["c8_technique"],"A8-02":["c8_technique"],"A8-03":["c8_technique","c8_aims"],"A8-04":["c8_aims"],"A8-05":["c8_aims"],"A8-06":["c8_aims"],"A8-07":["c8_aims"],"A8-08":["c8_aims"],"A8-09":["c8_cases","c8_aims"],"A8-10":["c8_cases","c8_aims"],"A8-11":["c8_technique","c8_cases"],"A8-12":["c8_technique"],"A8-13":["c8_cases","c8_aims"],"A9-01":["c9_problem"],"A9-02":["c9_problem"],"A9-03":["c9_problem"],"A9-04":["c9_problem"],"A9-05":["c9_problem"],"A9-06":["c9_outline"],"A9-07":["c9_outline"],"A9-08":["c9_outline"],"A9-09":["c9_outline"],"A9-10":["c9_conclusion"],"A9-11":["c9_conclusion"],"A9-12":["c9_conclusion"],"A9-13":["c9_conclusion"],"A9-14":["c9_outline"]},"pages":{"B00":["c7_cover_abstract","c2_accuracy","c2_compl_clar"],"B01":["c7_outline","c7_structure","c9_outline"],"B02":["c9_problem","c4_questions","c2_compl_clar","c6_appraisal"],"B03":["c9_outline","c8_aims","c3_falsification","c4_hypotheses"],"B04":["c9_conclusion","c3_reasoning","c7_outline"],"B05":["c7_directories","c7_outline","c2_accuracy"],"B06":["c7_directories","c7_annex","c6_appraisal"],"B07":["c7_cover_abstract","c2_accuracy"],"B08":["c3_falsification","c3_reasoning","c4_hypotheses","c2_accuracy"],"B09":["c4_approaches","c4_styles","c4_questions","c3_falsification"],"B10":["c7_cover_abstract","c2_accuracy","c3_falsification"]},"cases":{"default":["c8_aims","c8_technique","c8_cases","c4_questions","c9_outline"],"C01":["c8_aims","c8_technique","c4_questions","c4_hypotheses","c9_outline"],"C07":["c8_aims","c8_technique","c4_questions","c4_hypotheses","c9_outline"]}}
};
