const vocabList = [
    { word: "Abate", correct: "Diminish", incorrect: ["Increase", "Ignore", "Deceive"], definition: "to reduce in amount, degree, or severity" },
    { word: "Abstain", correct: "Refrain", incorrect: ["Indulge", "Create", "Conceal"], definition: "to choose not to do something" },
    { word: "Aesthetic", correct: "Artistic", incorrect: ["Ugly", "Scientific", "Uninteresting"], definition: "concerned with beauty or the appreciation of beauty" },
    { word: "Alleviate", correct: "Relieve", incorrect: ["Aggravate", "Refuse", "Destroy"], definition: "to make more bearable" },
    { word: "Amicable", correct: "Friendly", incorrect: ["Hostile", "Aloof", "Incompatible"], definition: "having a spirit of friendliness" },
    { word: "Anachronistic", correct: "Outdated", incorrect: ["Modern", "Relevant", "Synchronize"], definition: "belonging to a period other than that being portrayed" },
    { word: "Arid", correct: "Parched", incorrect: ["Wet", "Lively", "Easy"], definition: "extremely dry or deathly boring" },
    { word: "Assiduous", correct: "Diligent", incorrect: ["Lazy", "Inconsistent", "Uncaring"], definition: "showing great care and perseverance" },
    { word: "Asylum", correct: "Sanctuary", incorrect: ["Prison", "Marketplace", "Chaos"], definition: "a place of retreat or security" },
    { word: "Benevolent", correct: "Kind", incorrect: ["Malevolent", "Harsh", "Greedy"], definition: "well meaning and kindly" },
    { word: "Camaraderie", correct: "Companionship", incorrect: ["Loneliness", "Hostility", "Fear"], definition: "mutual trust and friendship among people" },
    { word: "Censure", correct: "Criticize", incorrect: ["Praise", "Forgive", "Forget"], definition: "to express severe disapproval" },
    { word: "Circuitous", correct: "Indirect", incorrect: ["Straight", "Simple", "Clear"], definition: "longer than the most direct way" },
    { word: "Clairvoyant", correct: "Psychic", incorrect: ["Blind", "Rational", "Normal"], definition: "able to see the future" },
    { word: "Collaborate", correct: "Cooperate", incorrect: ["Oppose", "Isolate", "Abandon"], definition: "to work together" },
    { word: "Compassion", correct: "Empathy", incorrect: ["Indifference", "Cruelty", "Ignorance"], definition: "sympathetic pity and concern for the sufferings of others" },
    { word: "Compromise", correct: "Settlement", incorrect: ["Conflict", "Ignore", "Increase"], definition: "an agreement or a settlement of a dispute" },
    { word: "Condescending", correct: "Patronizing", incorrect: ["Humble", "Respectful", "Equal"], definition: "having or showing a feeling of patronizing superiority" },
    { word: "Conformist", correct: "Traditionalist", incorrect: ["Rebel", "Innovator", "Creator"], definition: "a person who conforms to accepted behavior or established practices" },
    { word: "Conundrum", correct: "Puzzle", incorrect: ["Solution", "Clarity", "Fact"], definition: "a confusing and difficult problem or question" },
    { word: "Convergence", correct: "Merging", incorrect: ["Divergence", "Separation", "Split"], definition: "the process of coming together" },
    { word: "Deleterious", correct: "Harmful", incorrect: ["Beneficial", "Harmless", "Helpful"], definition: "causing harm or damage" },
    { word: "Demagogue", correct: "Agitator", incorrect: ["Peacemaker", "Diplomat", "Scholar"], definition: "a political leader who seeks support by appealing to popular desires and prejudices" },
    { word: "Digression", correct: "Deviation", incorrect: ["Focus", "Continuation", "Adherence"], definition: "a temporary departure from the main subject" },
    { word: "Diligent", correct: "Hardworking", incorrect: ["Lazy", "Negligent", "Careless"], definition: "showing care in one's work" },
    { word: "Discredit", correct: "Disgrace", incorrect: ["Praise", "Support", "Confirm"], definition: "to harm the reputation of" },
    { word: "Disdain", correct: "Contempt", incorrect: ["Respect", "Admire", "Love"], definition: "the feeling that someone is unworthy of one's respect" },
    { word: "Divergent", correct: "Varying", incorrect: ["Similar", "Uniform", "Constant"], definition: "tending to be different or develop in different directions" },
    { word: "Empathy", correct: "Understanding", incorrect: ["Apathy", "Ignorance", "Hatred"], definition: "the ability to understand and share the feelings of another" },
    { word: "Emulate", correct: "Imitate", incorrect: ["Ignore", "Reject", "Create"], definition: "to match or surpass" },
    { word: "Enervating", correct: "Exhausting", incorrect: ["Energizing", "Refreshing", "Reviving"], definition: "causing one to feel drained of energy" },
    { word: "Ephemeral", correct: "Transitory", incorrect: ["Permanent", "Lasting", "Enduring"], definition: "lasting for a very short time" },
    { word: "Evanescent", correct: "Fleeting", incorrect: ["Eternal", "Persistent", "Immortal"], definition: "soon passing out of sight, memory, or existence" },
    { word: "Exasperation", correct: "Frustration", incorrect: ["Delight", "Patience", "Calm"], definition: "a feeling of intense irritation" },
    { word: "Exemplary", correct: "Commendable", incorrect: ["Inferior", "Unworthy", "Defective"], definition: "serving as a desirable model" },
    { word: "Extenuating", correct: "Mitigating", incorrect: ["Aggravating", "Worsening", "Intensifying"], definition: "making an offense seem less serious" },
    { word: "Florid", correct: "Ruddy", incorrect: ["Pale", "Dull", "Colorless"], definition: "having a red or flushed complexion" },
    { word: "Fortuitous", correct: "Accidental", incorrect: ["Intentional", "Predictable", "Deliberate"], definition: "happening by a lucky chance" },
    { word: "Frugal", correct: "Thrifty", incorrect: ["Wasteful", "Extravagant", "Lavish"], definition: "sparing or economical with regard to money" },
    { word: "Hackneyed", correct: "Trite", incorrect: ["Original", "Fresh", "New"], definition: "lacking significance through having been overused" },
    { word: "Hedonist", correct: "Pleasure-seeker", incorrect: ["Ascetic", "Pessimist", "Cynic"], definition: "a person who believes that the pursuit of pleasure is the most important thing in life" },
    { word: "Hypothesis", correct: "Theory", incorrect: ["Fact", "Law", "Proof"], definition: "a supposition or proposed explanation made on the basis of limited evidence" },
    { word: "Impetuous", correct: "Rash", incorrect: ["Cautious", "Deliberate", "Thoughtful"], definition: "acting quickly without thought or care" },
    { word: "Impute", correct: "Attribute", incorrect: ["Deny", "Exonerate", "Withdraw"], definition: "to represent something as being done by someone" },
    { word: "Inconsequential", correct: "Trivial", incorrect: ["Significant", "Important", "Essential"], definition: "not important or significant" },
    { word: "Inevitable", correct: "Inescapable", incorrect: ["Avoidable", "Unlikely", "Preventable"], definition: "certain to happen; unavoidable" },
    { word: "Intrepid", correct: "Brave", incorrect: ["Cowardly", "Timid", "Cautious"], definition: "fearless; adventurous" },
    { word: "Intuitive", correct: "Instinctive", incorrect: ["Logical", "Reasoned", "Calculated"], definition: "using or based on what one feels to be true without conscious reasoning" },
    { word: "Jubilation", correct: "Elation", incorrect: ["Sorrow", "Despair", "Gloom"], definition: "a feeling of great happiness and triumph" },
    { word: "Lobbyist", correct: "Advocate", incorrect: ["Opponent", "Critic", "Bystander"], definition: "a person who tries to influence legislation" },
    { word: "Longevity", correct: "Durability", incorrect: ["Shortness", "Briefness", "Ephemerality"], definition: "long life" },
    { word: "Mundane", correct: "Boring", incorrect: ["Extraordinary", "Unusual", "Exciting"], definition: "lacking interest or excitement" },
    { word: "Nonchalant", correct: "Unconcerned", incorrect: ["Anxious", "Excited", "Agitated"], definition: "feeling or appearing casually calm and relaxed" },
    { word: "Novice", correct: "Beginner", incorrect: ["Expert", "Veteran", "Professional"], definition: "a person new to or inexperienced in a field" },
    { word: "Opulent", correct: "Wealthy", incorrect: ["Poor", "Sparse", "Humble"], definition: "ostentatiously rich and luxurious" },
    { word: "Orator", correct: "Speaker", incorrect: ["Listener", "Mute", "Observer"], definition: "a public speaker" },
    { word: "Ostentatious", correct: "Showy", incorrect: ["Modest", "Simple", "Plain"], definition: "characterized by vulgar or pretentious display" },
    { word: "Parched", correct: "Thirsty", incorrect: ["Wet", "Soaked", "Hydrated"], definition: "dried out with heat" },
    { word: "Perfidious", correct: "Treacherous", incorrect: ["Loyal", "Faithful", "Trustworthy"], definition: "deceitful and untrustworthy" },
    { word: "Precocious", correct: "Advanced", incorrect: ["Retarded", "Delayed", "Behind"], definition: "having developed certain abilities at an earlier age" },
    { word: "Pretentious", correct: "Pompous", incorrect: ["Humble", "Simple", "Modest"], definition: "attempting to impress by affecting greater importance" },
    { word: "Procrastinate", correct: "Delay", incorrect: ["Advance", "Expedite", "Complete"], definition: "to delay or postpone action" },
    { word: "Prosaic", correct: "Ordinary", incorrect: ["Imaginative", "Interesting", "Poetic"], definition: "having the style or diction of prose; lacking poetic beauty" },
    { word: "Prosperity", correct: "Wealth", incorrect: ["Poverty", "Misfortune", "Failure"], definition: "the state of being prosperous" },
    { word: "Provocative", correct: "Stimulating", incorrect: ["Dull", "Unprovoking", "Boring"], definition: "causing annoyance or anger" },
    { word: "Prudent", correct: "Wise", incorrect: ["Reckless", "Foolish", "Careless"], definition: "acting with or showing care and thought for the future" },
    { word: "Querulous", correct: "Petulant", incorrect: ["Cheerful", "Happy", "Content"], definition: "complaining in a petulant or whining manner" },
    { word: "Rancorous", correct: "Bitter", incorrect: ["Kind", "Pleasant", "Forgiving"], definition: "characterized by bitterness or resentment" },
    { word: "Reclusive", correct: "Isolated", incorrect: ["Social", "Outgoing", "Gregarious"], definition: "avoiding the company of other people" },
    { word: "Reconciliation", correct: "Settlement", incorrect: ["Conflict", "Estrangement", "Disagreement"], definition: "the restoration of friendly relations" },
    { word: "Renovation", correct: "Restoration", incorrect: ["Destruction", "Neglect", "Ruin"], definition: "the action of renovating a building" },
    { word: "Resilient", correct: "Strong", incorrect: ["Weak", "Fragile", "Brittle"], definition: "able to withstand or recover quickly from difficult conditions" },
    { word: "Restrained", correct: "Controlled", incorrect: ["Unrestrained", "Free", "Wild"], definition: "characterized by reserve or moderation" },
    { word: "Reverence", correct: "Admiration", incorrect: ["Disrespect", "Scorn", "Hatred"], definition: "deep respect for someone or something" },
    { word: "Sagacity", correct: "Wisdom", incorrect: ["Foolishness", "Ignorance", "Stupidity"], definition: "the quality of being sagacious" },
    { word: "Scrutinize", correct: "Examine", incorrect: ["Ignore", "Neglect", "Overlook"], definition: "to examine or inspect closely and thoroughly" },
    { word: "Spontaneity", correct: "Impulsiveness", incorrect: ["Plan", "Pretense", "Deliberation"], definition: "the condition of being spontaneous" },
    { word: "Spurious", correct: "False", incorrect: ["Genuine", "Real", "Authentic"], definition: "not being what it purports to be" },
    { word: "Substantiate", correct: "Verify", incorrect: ["Disprove", "Refute", "Contradict"], definition: "to provide evidence to support the truth of" },
    { word: "Subtle", correct: "Delicate", incorrect: ["Obvious", "Blatant", "Clear"], definition: "so delicate or precise as to be difficult to analyze or describe" },
    { word: "Superficial", correct: "Shallow", incorrect: ["Deep", "Profound", "Thorough"], definition: "existing or occurring at or on the surface" },
    { word: "Superfluous", correct: "Excessive", incorrect: ["Necessary", "Essential", "Needed"], definition: "unnecessary, especially through being more than enough" },
    { word: "Surreptitious", correct: "Secret", incorrect: ["Open", "Public", "Honest"], definition: "kept secret, especially because it would not be approved of" },
    { word: "Tactful", correct: "Diplomatic", incorrect: ["Tactless", "Rude", "Clumsy"], definition: "having or showing tact" },
    { word: "Tenacious", correct: "Persistent", incorrect: ["Weak", "Loose", "Surrendering"], definition: "tending to keep a firm hold of something" },
    { word: "Transient", correct: "Temporary", incorrect: ["Permanent", "Lasting", "Enduring"], definition: "lasting only for a short time" },
    { word: "Venerable", correct: "Respected", incorrect: ["Disrespected", "Unreliable", "Ignoble"], definition: "accorded a great deal of respect, especially because of age, wisdom, or character" },
    { word: "Vindicate", correct: "Exonerate", incorrect: ["Accuse", "Blame", "Incriminate"], definition: "to clear someone of blame or suspicion" },
    { word: "Wary", correct: "Cautious", incorrect: ["Reckless", "Careless", "Confident"], definition: "feeling or showing caution about possible dangers" },
    { word: "Zealous", correct: "Enthusiastic", incorrect: ["Indifferent", "Apathetic", "Uninterested"], definition: "having or showing zeal" },
    { word: "Acrimonious", correct: "Bitter", incorrect: ["Sweet", "Pleasant", "Agreeable"], definition: "angry and bitter" },
    { word: "Cacophony", correct: "Dissonance", incorrect: ["Harmony", "Melody", "Silence"], definition: "a harsh, discordant mixture of sounds" },
    { word: "Deference", correct: "Respect", incorrect: ["Disrespect", "Defiance", "Insolence"], definition: "humble submission and respect" },
    { word: "Ebullient", correct: "Enthusiastic", incorrect: ["Depressed", "Unhappy", "Listless"], definition: "cheerful and full of energy" },
    { word: "Fervid", correct: "Ardent", incorrect: ["Indifferent", "Cold", "Uninterested"], definition: "intensely enthusiastic or passionate" },
    { word: "Garrulous", correct: "Talkative", incorrect: ["Silent", "Quiet", "Reserved"], definition: "excessively talkative" },
    { word: "Iconoclast", correct: "Rebel", incorrect: ["Conformist", "Supporter", "Traditionalist"], definition: "a person who attacks cherished beliefs or institutions" },
    { word: "Lethargic", correct: "Sluggish", incorrect: ["Energetic", "Active", "Vivacious"], definition: "affected by lethargy; sluggish and apathetic" },
    { word: "Magnanimous", correct: "Generous", incorrect: ["Mean", "Stingy", "Vindictive"], definition: "very generous or forgiving" },
    { word: "Aberration", correct: "Deviation", incorrect: ["Normality", "Conformity", "Regularity"], definition: "a departure from what is normal or expected" },
    { word: "Abhor", correct: "Detest", incorrect: ["Love", "Approve", "Admire"], definition: "to regard with disgust and hatred" },
    { word: "Acquiesce", correct: "Comply", incorrect: ["Refuse", "Disagree", "Protest"], definition: "to accept something reluctantly but without protest" },
    { word: "Affable", correct: "Friendly", incorrect: ["Unfriendly", "Aloof", "Cold"], definition: "friendly, good-natured, or easy to talk to" },
    { word: "Ambiguous", correct: "Unclear", incorrect: ["Clear", "Obvious", "Definite"], definition: "open to more than one interpretation" },
    { word: "Amorphous", correct: "Shapeless", incorrect: ["Defined", "Distinct", "Structured"], definition: "without a clearly defined shape or form" },
    { word: "Anathema", correct: "Curse", incorrect: ["Blessing", "Praise", "Admiration"], definition: "something or someone that one vehemently dislikes" },
    { word: "Apathy", correct: "Indifference", incorrect: ["Interest", "Passion", "Concern"], definition: "lack of interest, enthusiasm, or concern" },
    { word: "Arduous", correct: "Difficult", incorrect: ["Easy", "Simple", "Effortless"], definition: "involving or requiring strenuous effort" },
    { word: "Audacious", correct: "Bold", incorrect: ["Timid", "Cowardly", "Fearful"], definition: "showing a willingness to take surprisingly bold risks" },
    { word: "Auspicious", correct: "Favorable", incorrect: ["Unfavorable", "Ominous", "Hopeless"], definition: "conducive to success; favorable" },
    { word: "Banal", correct: "Trite", incorrect: ["Original", "New", "Unique"], definition: "so lacking in originality as to be obvious and boring" },
    { word: "Beguile", correct: "Deceive", incorrect: ["Reveal", "Clarify", "Expose"], definition: "charm or enchant (someone), often in a deceptive way" },
    { word: "Belie", correct: "Contradict", incorrect: ["Confirm", "Prove", "Validate"], definition: "fail to give a true notion or impression of (something)" },
    { word: "Belligerent", correct: "Hostile", incorrect: ["Peaceful", "Friendly", "Amiable"], definition: "hostile and aggressive" },
    { word: "Blatant", correct: "Obvious", incorrect: ["Subtle", "Hidden", "Concealed"], definition: "done openly and unashamedly" },
    { word: "Brevity", correct: "Conciseness", incorrect: ["Long-windedness", "Verbosity", "Lengthiness"], definition: "concise and exact use of words in writing or speech" },
    { word: "Candor", correct: "Honesty", incorrect: ["Deceit", "Dishonesty", "Deception"], definition: "the quality of being open and honest in expression" },
    { word: "Capitulate", correct: "Surrender", incorrect: ["Resist", "Defend", "Fight"], definition: "cease to resist an opponent or an unwelcome demand" },
    { word: "Clemency", correct: "Mercy", incorrect: ["Cruelty", "Harshness", "Severity"], definition: "mercy; lenience" },
    { word: "Coerce", correct: "Force", incorrect: ["Allow", "Encourage", "Persuade"], definition: "persuade (an unwilling person) to do something by using force or threats" },
    { word: "Complacent", correct: "Self-satisfied", incorrect: ["Anxious", "Dissatisfied", "Concerned"], definition: "showing smug or uncritical satisfaction with oneself or one's achievements" },
    { word: "Corroborate", correct: "Confirm", incorrect: ["Contradict", "Disprove", "Invalidate"], definition: "confirm or give support to (a statement, theory, or finding)" },
    { word: "Daunt", correct: "Intimidate", incorrect: ["Encourage", "Inspire", "Hearten"], definition: "make (someone) feel intimidated or apprehensive" },
    { word: "Debilitate", correct: "Weaken", incorrect: ["Strengthen", "Fortify", "Invigorate"], definition: "make (someone) weak and infirm" },
    { word: "Debunk", correct: "Expose", incorrect: ["Conceal", "Hide", "Uphold"], definition: "expose the falseness or hollowness of (a myth, idea, or belief)" },
    { word: "Decorum", correct: "Politeness", incorrect: ["Rudeness", "Impoliteness", "Indecency"], definition: "behavior in keeping with good taste and propriety" },
    { word: "Deliberate", correct: "Intentional", incorrect: ["Accidental", "Unplanned", "Random"], definition: "done consciously and intentionally" },
    { word: "Deride", correct: "Mock", incorrect: ["Praise", "Compliment", "Admire"], definition: "express contempt for; ridicule" },
    { word: "Despondent", correct: "Disheartened", incorrect: ["Hopeful", "Cheerful", "Optimistic"], definition: "in low spirits from loss of hope or courage" },
    { word: "Dissent", correct: "Disagree", incorrect: ["Agree", "Consent", "Conform"], definition: "hold or express opinions that are at variance with those previously, commonly, or officially expressed" },
    { word: "Distend", correct: "Swell", incorrect: ["Shrink", "Contract", "Compress"], definition: "swell or cause to swell by pressure from inside" },
    { word: "Docile", correct: "Obedient", incorrect: ["Disobedient", "Stubborn", "Defiant"], definition: "ready to accept control or instruction" },
    { word: "Dubious", correct: "Doubtful", incorrect: ["Certain", "Clear", "Sure"], definition: "hesitating or doubting" },
    { word: "Efficacy", correct: "Effectiveness", incorrect: ["Ineffectiveness", "Failure", "Incapacity"], definition: "the ability to produce a desired or intended result" },
    { word: "Egregious", correct: "Shocking", incorrect: ["Minor", "Insignificant", "Slight"], definition: "outstandingly bad" },
    { word: "Elucidate", correct: "Clarify", incorrect: ["Confuse", "Obscure", "Complicate"], definition: "make (something) clear" },
    { word: "Emaciated", correct: "Thin", incorrect: ["Fat", "Plump", "Overweight"], definition: "abnormally thin or weak" },
    { word: "Embellish", correct: "Decorate", incorrect: ["Simplify", "Plain", "Mar"], definition: "make (something) more attractive by the addition of decorative details or features" },
    { word: "Emphatic", correct: "Forceful", incorrect: ["Weak", "Indecisive", "Unassertive"], definition: "showing or giving emphasis" },
    { word: "Empirical", correct: "Experimental", incorrect: ["Theoretical", "Hypothetical", "Assumed"], definition: "based on, concerned with, or verifiable by observation or experience rather than theory or pure logic" },
    { word: "Enigma", correct: "Mystery", incorrect: ["Clarity", "Explanation", "Solution"], definition: "a person or thing that is mysterious or difficult to understand" },
    { word: "Equanimity", correct: "Composure", incorrect: ["Agitation", "Excitability", "Stress"], definition: "mental calmness, composure, and evenness of temper, especially in a difficult situation" },
    { word: "Esoteric", correct: "Obscure", incorrect: ["Common", "Known", "Familiar"], definition: "intended for or likely to be understood by only a small number of people with a specialized knowledge or interest" },
    { word: "Eulogy", correct: "Tribute", incorrect: ["Criticism", "Denunciation", "Blame"], definition: "a speech or piece of writing that praises someone or something highly" },
    { word: "Exacerbate", correct: "Worsen", incorrect: ["Improve", "Relieve", "Ease"], definition: "make (a problem, bad situation, or negative feeling) worse" },
    { word: "Exonerate", correct: "Clear", incorrect: ["Blame", "Condemn", "Convict"], definition: "absolve (someone) from blame for a fault or wrongdoing" },
    { word: "Exorbitant", correct: "Excessive", incorrect: ["Reasonable", "Moderate", "Limited"], definition: "unreasonably high (of a price or amount charged)" },
    { word: "Facetious", correct: "Flippant", incorrect: ["Serious", "Respectful", "Sincere"], definition: "treating serious issues with deliberately inappropriate humor" },
    { word: "Fastidious", correct: "Meticulous", incorrect: ["Careless", "Sloppy", "Indifferent"], definition: "very attentive to and concerned about accuracy and detail" },
    { word: "Fatuous", correct: "Silly", incorrect: ["Serious", "Sensible", "Intelligent"], definition: "silly and pointless" },
    { word: "Feasible", correct: "Possible", incorrect: ["Impossible", "Unworkable", "Unachievable"], definition: "possible to do easily or conveniently" },
    { word: "Felicity", correct: "Happiness", incorrect: ["Misery", "Sadness", "Unhappiness"], definition: "intense happiness" },
    { word: "Fervent", correct: "Passionate", incorrect: ["Indifferent", "Apathetic", "Cold"], definition: "having or displaying a passionate intensity" },
    { word: "Flippant", correct: "Disrespectful", incorrect: ["Respectful", "Serious", "Reverent"], definition: "not showing a serious or respectful attitude" },
    { word: "Florid", correct: "Ruddy", incorrect: ["Pale", "Dull", "Colorless"], definition: "having a red or flushed complexion" },
    { word: "Forbearance", correct: "Patience", incorrect: ["Impatience", "Agitation", "Hastiness"], definition: "patient self-control; restraint and tolerance" },
    { word: "Furtive", correct: "Sneaky", incorrect: ["Open", "Honest", "Public"], definition: "attempting to avoid notice or attention, typically because of guilt" },
    { word: "Garrulous", correct: "Talkative", incorrect: ["Silent", "Quiet", "Reserved"], definition: "excessively talkative, especially on trivial matters" },
    { word: "Gregarious", correct: "Sociable", incorrect: ["Unsociable", "Reserved", "Solitary"], definition: "fond of company; sociable" },
    { word: "Hackneyed", correct: "Trite", incorrect: ["Original", "Fresh", "New"], definition: "lacking significance through having been overused" },
    { word: "Hapless", correct: "Unlucky", incorrect: ["Lucky", "Fortunate", "Blessed"], definition: "unfortunate" },
    { word: "Harangue", correct: "Tirade", incorrect: ["Praise", "Compliment", "Applause"], definition: "a lengthy and aggressive speech" },
    { word: "Haughty", correct: "Arrogant", incorrect: ["Humble", "Modest", "Meek"], definition: "arrogantly superior and disdainful" },
    { word: "Heinous", correct: "Atrocious", incorrect: ["Good", "Virtuous", "Honorable"], definition: "utterly odious or wicked" },
    { word: "Imminent", correct: "Impending", incorrect: ["Distant", "Delayed", "Remote"], definition: "about to happen" },
    { word: "Immutable", correct: "Unchangeable", incorrect: ["Changeable", "Flexible", "Variable"], definition: "unchanging over time or unable to be changed" },
    { word: "Impeccable", correct: "Flawless", incorrect: ["Imperfect", "Flawed", "Defective"], definition: "in accordance with the highest standards" },
    { word: "Impervious", correct: "Impenetrable", incorrect: ["Permeable", "Vulnerable", "Susceptible"], definition: "not allowing fluid to pass through" },
    { word: "Impetuous", correct: "Rash", incorrect: ["Cautious", "Deliberate", "Thoughtful"], definition: "acting quickly without thought or care" },
    { word: "Implacable", correct: "Unyielding", incorrect: ["Flexible", "Yielding", "Compliant"], definition: "unable to be placated" },
    { word: "Impudent", correct: "Rude", incorrect: ["Polite", "Respectful", "Courteous"], definition: "not showing due respect for another person" },
    { word: "Inchoate", correct: "Formless", incorrect: ["Developed", "Complete", "Mature"], definition: "just begun and so not fully formed or developed" },
    { word: "Indefatigable", correct: "Tireless", incorrect: ["Fatigued", "Weary", "Exhausted"], definition: "persisting tirelessly" },
    { word: "Ineffable", correct: "Inexpressible", incorrect: ["Expressible", "Describable", "Communicable"], definition: "too great or extreme to be expressed or described in words" },
    { word: "Inexorable", correct: "Relentless", incorrect: ["Flexible", "Yielding", "Pliable"], definition: "impossible to stop or prevent" },
    { word: "Innocuous", correct: "Harmless", incorrect: ["Harmful", "Dangerous", "Deadly"], definition: "not harmful or offensive" },
    { word: "Insidious", correct: "Treacherous", incorrect: ["Harmless", "Benign", "Safe"], definition: "proceeding in a gradual, subtle way, but with harmful effects" },
    { word: "Insipid", correct: "Bland", incorrect: ["Tasty", "Exciting", "Interesting"], definition: "lacking flavor" },
    { word: "Intransigent", correct: "Uncompromising", incorrect: ["Compromising", "Flexible", "Yielding"], definition: "unwilling or refusing to change one's views or to agree about something" },
    { word: "Inveterate", correct: "Habitual", incorrect: ["Occasional", "Temporary", "Transient"], definition: "having a particular habit, activity, or interest that is long-established and unlikely to change" },
    { word: "Irascible", correct: "Irritable", incorrect: ["Calm", "Patient", "Easygoing"], definition: "having or showing a tendency to be easily angered" },
    { word: "Lachrymose", correct: "Tearful", incorrect: ["Cheerful", "Joyful", "Happy"], definition: "tearful or given to weeping" },
    { word: "Languid", correct: "Weak", incorrect: ["Strong", "Energetic", "Vigorous"], definition: "displaying or having a disinclination for physical exertion or effort" },
    { word: "Largesse", correct: "Generosity", incorrect: ["Stinginess", "Miserliness", "Greed"], definition: "generosity in bestowing money or gifts upon others" },
    { word: "Lassitude", correct: "Lethargy", incorrect: ["Energy", "Vigor", "Vitality"], definition: "a state of physical or mental weariness; lack of energy" },
    { word: "Latent", correct: "Dormant", incorrect: ["Active", "Obvious", "Apparent"], definition: "existing but not yet developed or manifest; hidden or concealed" },
    { word: "Laudable", correct: "Praiseworthy", incorrect: ["Blameworthy", "Shameful", "Unworthy"], definition: "deserving praise and commendation" },
    { word: "Lethargic", correct: "Sluggish", incorrect: ["Energetic", "Active", "Vivacious"], definition: "affected by lethargy; sluggish and apathetic" },
    { word: "Loquacious", correct: "Talkative", incorrect: ["Quiet", "Silent", "Taciturn"], definition: "tending to talk a great deal" },
    { word: "Lugubrious", correct: "Mournful", incorrect: ["Cheerful", "Joyful", "Happy"], definition: "looking or sounding sad and dismal" },
    { word: "Magnanimous", correct: "Generous", incorrect: ["Mean", "Stingy", "Vindictive"], definition: "very generous or forgiving" },
    { word: "Maladroit", correct: "Clumsy", incorrect: ["Skillful", "Adept", "Adroit"], definition: "ineffective or bungling; clumsy" },
    { word: "Malleable", correct: "Pliable", incorrect: ["Rigid", "Stiff", "Inflexible"], definition: "easily influenced; pliable" },
    { word: "Maverick", correct: "Nonconformist", incorrect: ["Conformist", "Traditionalist", "Follower"], definition: "an unorthodox or independent-minded person" },
    { word: "Mellifluous", correct: "Sweet-sounding", incorrect: ["Harsh", "Grating", "Discordant"], definition: "sweet or musical; pleasant to hear" },
    { word: "Meticulous", correct: "Careful", incorrect: ["Careless", "Sloppy", "Negligent"], definition: "showing great attention to detail; very careful and precise" },
    { word: "Misanthrope", correct: "Hater", incorrect: ["Philanthropist", "Humanitarian", "Optimist"], definition: "a person who dislikes humankind and avoids human society" },
    { word: "Mitigate", correct: "Alleviate", incorrect: ["Aggravate", "Intensify", "Exacerbate"], definition: "make less severe, serious, or painful" },
    { word: "Modicum", correct: "Small amount", incorrect: ["Abundance", "Plenty", "Excess"], definition: "a small quantity of a particular thing, especially something considered desirable or valuable" },
    { word: "Morose", correct: "Sullen", incorrect: ["Cheerful", "Happy", "Jovial"], definition: "sullen and ill-tempered" },
    { word: "Mundane", correct: "Boring", incorrect: ["Extraordinary", "Unusual", "Exciting"], definition: "lacking interest or excitement" },
    { word: "Munificent", correct: "Generous", incorrect: ["Stingy", "Miserly", "Greedy"], definition: "larger or more generous than is usual or necessary" },
    { word: "Nadir", correct: "Low point", incorrect: ["Peak", "Summit", "Apex"], definition: "the lowest point in the fortunes of a person or organization" },
    { word: "Nascent", correct: "Emerging", incorrect: ["Dying", "Declining", "Withering"], definition: "just coming into existence and beginning to display signs of future potential" },
    { word: "Nefarious", correct: "Wicked", incorrect: ["Good", "Virtuous", "Honorable"], definition: "wicked or criminal" },
    { word: "Neophyte", correct: "Beginner", incorrect: ["Expert", "Veteran", "Professional"], definition: "a person who is new to a subject, skill, or belief" },
    { word: "Noisome", correct: "Foul", incorrect: ["Pleasant", "Fragrant", "Aromatic"], definition: "having an extremely offensive smell" },
    { word: "Noxious", correct: "Harmful", incorrect: ["Harmless", "Safe", "Beneficial"], definition: "harmful, poisonous, or very unpleasant" },
    { word: "Obdurate", correct: "Stubborn", incorrect: ["Flexible", "Yielding", "Compliant"], definition: "stubbornly refusing to change one's opinion or course of action" },
    { word: "Obfuscate", correct: "Confuse", incorrect: ["Clarify", "Explain", "Elucidate"], definition: "render obscure, unclear, or unintelligible" },
    { word: "Obsequious", correct: "Subservient", incorrect: ["Domineering", "Assertive", "Independent"], definition: "obedient or attentive to an excessive or servile degree" },
    { word: "Obstreperous", correct: "Unruly", incorrect: ["Calm", "Quiet", "Restrained"], definition: "noisy and difficult to control" },
    { word: "Obviate", correct: "Prevent", incorrect: ["Permit", "Allow", "Facilitate"], definition: "remove (a need or difficulty)" },
    { word: "Occlude", correct: "Block", incorrect: ["Open", "Clear", "Unblock"], definition: "stop, close up, or obstruct (an opening, orifice, or passage)" },
    { word: "Odious", correct: "Hateful", incorrect: ["Lovely", "Pleasant", "Delightful"], definition: "extremely unpleasant; repulsive" },
    { word: "Onerous", correct: "Burdensome", incorrect: ["Light", "Easy", "Effortless"], definition: "involving an amount of effort and difficulty that is oppressively burdensome" },
    { word: "Ostentatious", correct: "Showy", incorrect: ["Modest", "Simple", "Plain"], definition: "characterized by vulgar or pretentious display" },
    { word: "Palliate", correct: "Alleviate", incorrect: ["Aggravate", "Intensify", "Exacerbate"], definition: "make (a disease or its symptoms) less severe or unpleasant without removing the cause" },
    { word: "Panacea", correct: "Cure-all", incorrect: ["Poison", "Harm", "Injury"], definition: "a solution or remedy for all difficulties or diseases" },
    { word: "Paragon", correct: "Model", incorrect: ["Imperfect", "Flawed", "Deficient"], definition: "a person or thing regarded as a perfect example of a particular quality" },
    { word: "Pariah", correct: "Outcast", incorrect: ["Insider", "Member", "Citizen"], definition: "an outcast" },
    { word: "Parochial", correct: "Narrow-minded", incorrect: ["Broad-minded", "Open-minded", "Unbiased"], definition: "having a limited or narrow outlook or scope" },
    { word: "Parsimony", correct: "Stinginess", incorrect: ["Generosity", "Extravagance", "Lavishness"], definition: "extreme unwillingness to spend money or use resources" },
    { word: "Paucity", correct: "Scarcity", incorrect: ["Abundance", "Plenty", "Profusion"], definition: "the presence of something only in small or insufficient quantities or amounts" },
    { word: "Pejorative", correct: "Derogatory", incorrect: ["Complimentary", "Laudatory", "Praising"], definition: "expressing contempt or disapproval" },
    { word: "Penurious", correct: "Stingy", incorrect: ["Generous", "Lavish", "Extravagant"], definition: "extremely poor; poverty-stricken" },
    { word: "Pernicious", correct: "Harmful", incorrect: ["Harmless", "Beneficial", "Benign"], definition: "having a harmful effect, especially in a gradual or subtle way" },
    { word: "Perpetuate", correct: "Preserve", incorrect: ["Abolish", "End", "Terminate"], definition: "make (something, typically an undesirable situation or an unfounded belief) continue indefinitely" },
    { word: "Perspicacious", correct: "Insightful", incorrect: ["Obtuse", "Dull", "Ignorant"], definition: "having a ready insight into and understanding of things" },
    { word: "Pertinacious", correct: "Persistent", incorrect: ["Yielding", "Compliant", "Submissive"], definition: "holding firmly to an opinion or a course of action" },
    { word: "Pervasive", correct: "Widespread", incorrect: ["Limited", "Localized", "Narrow"], definition: "spreading widely throughout an area or a group of people" },
    { word: "Petulant", correct: "Irritable", incorrect: ["Cheerful", "Good-humored", "Happy"], definition: "childishly sulky or bad-tempered" },
    { word: "Phlegmatic", correct: "Calm", incorrect: ["Excitable", "Agitated", "Emotional"], definition: "(of a person) having an unemotional and stolidly calm disposition" },
    { word: "Pithy", correct: "Concise", incorrect: ["Verbose", "Lengthy", "Wordy"], definition: "(of language or style) concise and forcefully expressive" },
    { word: "Platitude", correct: "Cliché", incorrect: ["Original", "Novelty", "Freshness"], definition: "a remark or statement, especially one with a moral content, that has been used too often to be interesting or thoughtful" },
    { word: "Polemical", correct: "Controversial", incorrect: ["Agreeable", "Noncontroversial", "Conventional"], definition: "relating to or involving strongly critical, controversial, or disputatious writing or speech" },
    { word: "Ponderous", correct: "Heavy", incorrect: ["Light", "Graceful", "Lively"], definition: "slow and clumsy because of great weight" },
    { word: "Portent", correct: "Omen", incorrect: ["Luck", "Coincidence", "Chance"], definition: "a sign or warning that something, especially something momentous or calamitous, is likely to happen" },
    { word: "Pragmatic", correct: "Practical", incorrect: ["Impractical", "Idealistic", "Unrealistic"], definition: "dealing with things sensibly and realistically in a way that is based on practical rather than theoretical considerations" },
    { word: "Precipitate", correct: "Cause", incorrect: ["Prevent", "Halt", "Stop"], definition: "cause (an event or situation, typically one that is bad or undesirable) to happen suddenly, unexpectedly, or prematurely" },
    { word: "Precocious", correct: "Advanced", incorrect: ["Retarded", "Delayed", "Behind"], definition: "having developed certain abilities at an earlier age than usual" },
    { word: "Prevaricate", correct: "Lie", incorrect: ["Truth", "Confess", "Admit"], definition: "speak or act in an evasive way" },
    { word: "Proclivity", correct: "Inclination", incorrect: ["Disinclination", "Aversion", "Reluctance"], definition: "a tendency to choose or do something regularly; an inclination or predisposition toward a particular thing" },
    { word: "Profligate", correct: "Wasteful", incorrect: ["Frugal", "Thrifty", "Economical"], definition: "recklessly extravagant or wasteful in the use of resources" },
    { word: "Progeny", correct: "Offspring", incorrect: ["Ancestor", "Forebear", "Predecessor"], definition: "a descendant or the descendants of a person, animal, or plant; offspring" },
    { word: "Proliferate", correct: "Multiply", incorrect: ["Decrease", "Diminish", "Reduce"], definition: "increase rapidly in numbers; multiply" },
    { word: "Propensity", correct: "Tendency", incorrect: ["Aversion", "Disinclination", "Antipathy"], definition: "an inclination or natural tendency to behave in a particular way" },
    { word: "Propitiate", correct: "Appease", incorrect: ["Provoke", "Enrage", "Agitate"], definition: "win or regain the favor of (a god, spirit, or person) by doing something that pleases them" },
    { word: "Prosaic", correct: "Ordinary", incorrect: ["Imaginative", "Interesting", "Poetic"], definition: "having the style or diction of prose; lacking poetic beauty" },
    { word: "Protean", correct: "Versatile", incorrect: ["Inflexible", "Rigid", "Fixed"], definition: "tending or able to change frequently or easily" },
    { word: "Prudent", correct: "Wise", incorrect: ["Reckless", "Foolish", "Careless"], definition: "acting with or showing care and thought for the future" },
    { word: "Puerile", correct: "Childish", incorrect: ["Mature", "Adult", "Grown-up"], definition: "childishly silly and trivial" },
    { word: "Pugnacious", correct: "Aggressive", incorrect: ["Peaceful", "Friendly", "Amiable"], definition: "eager or quick to argue, quarrel, or fight" },
    { word: "Querulous", correct: "Petulant", incorrect: ["Cheerful", "Happy", "Content"], definition: "complaining in a petulant or whining manner" },
    { word: "Quixotic", correct: "Idealistic", incorrect: ["Pragmatic", "Realistic", "Practical"], definition: "exceedingly idealistic; unrealistic and impractical" },
    { word: "Rancor", correct: "Bitterness", incorrect: ["Kindness", "Friendliness", "Goodwill"], definition: "bitterness or resentfulness, especially when long-standing" },
    { word: "Recalcitrant", correct: "Uncooperative", incorrect: ["Cooperative", "Compliant", "Obedient"], definition: "having an obstinately uncooperative attitude toward authority or discipline" },
    { word: "Recant", correct: "Renounce", incorrect: ["Confirm", "Acknowledge", "Accept"], definition: "say that one no longer holds an opinion or belief, especially one considered heretical" },
    { word: "Reclusive", correct: "Isolated", incorrect: ["Social", "Outgoing", "Gregarious"], definition: "avoiding the company of other people" },
    { word: "Recondite", correct: "Obscure", incorrect: ["Obvious", "Clear", "Apparent"], definition: "(of a subject or knowledge) little known; abstruse" },
    { word: "Recrimination", correct: "Accusation", incorrect: ["Praise", "Compliment", "Commendation"], definition: "an accusation in response to one from someone else" },
    { word: "Redolent", correct: "Fragrant", incorrect: ["Odorless", "Scentless", "Stinky"], definition: "strongly reminiscent or suggestive of (something)" },
    { word: "Refulgent", correct: "Radiant", incorrect: ["Dull", "Dim", "Dark"], definition: "shining brightly" },
    { word: "Regale", correct: "Entertain", incorrect: ["Bore", "Tire", "Annoy"], definition: "entertain or amuse (someone) with talk" },
    { word: "Relegate", correct: "Demote", incorrect: ["Promote", "Elevate", "Advance"], definition: "consign or dismiss to an inferior rank or position" },
    { word: "Remiss", correct: "Negligent", incorrect: ["Diligent", "Careful", "Attentive"], definition: "lacking care or attention to duty; negligent" },
    { word: "Renege", correct: "Revoke", incorrect: ["Keep", "Honor", "Fulfill"], definition: "go back on a promise, undertaking, or contract" },
    { word: "Replete", correct: "Full", incorrect: ["Empty", "Depleted", "Vacant"], definition: "filled or well-supplied with something" },
    { word: "Reprehensible", correct: "Blameworthy", incorrect: ["Praiseworthy", "Commendable", "Admirable"], definition: "deserving censure or condemnation" },
    { word: "Repudiate", correct: "Reject", incorrect: ["Accept", "Embrace", "Acknowledge"], definition: "refuse to accept or be associated with" },
    { word: "Rescind", correct: "Revoke", incorrect: ["Enforce", "Uphold", "Establish"], definition: "revoke, cancel, or repeal (a law, order, or agreement)" },
    { word: "Restive", correct: "Restless", incorrect: ["Calm", "Tranquil", "Placid"], definition: "(of a person) unable to remain still, silent, or submissive, especially because of boredom or dissatisfaction" },
    { word: "Reticent", correct: "Reserved", incorrect: ["Talkative", "Communicative", "Outgoing"], definition: "not revealing one's thoughts or feelings readily" },
    { word: "Reverence", correct: "Admiration", incorrect: ["Disrespect", "Scorn", "Hatred"], definition: "deep respect for someone or something" },
    { word: "Sagacity", correct: "Wisdom", incorrect: ["Foolishness", "Ignorance", "Stupidity"], definition: "the quality of being sagacious" },
    { word: "Salubrious", correct: "Healthy", incorrect: ["Unhealthy", "Harmful", "Noxious"], definition: "health-giving; healthy" },
    { word: "Sanguine", correct: "Optimistic", incorrect: ["Pessimistic", "Gloomy", "Doubtful"], definition: "optimistic or positive, especially in an apparently bad or difficult situation" },
    { word: "Scintillating", correct: "Sparkling", incorrect: ["Dull", "Boring", "Lifeless"], definition: "sparkling or shining brightly" },
    { word: "Scrupulous", correct: "Meticulous", incorrect: ["Careless", "Negligent", "Reckless"], definition: "(of a person or process) diligent, thorough, and extremely attentive to details" },
    { word: "Scurrilous", correct: "Defamatory", incorrect: ["Complimentary", "Flattering", "Praising"], definition: "making or spreading scandalous claims about someone with the intention of damaging their reputation" },
    { word: "Sedulous", correct: "Diligent", incorrect: ["Lazy", "Negligent", "Careless"], definition: "(of a person or action) showing dedication and diligence" },
    { word: "Soporific", correct: "Sleep-inducing", incorrect: ["Stimulating", "Exciting", "Energizing"], definition: "tending to induce drowsiness or sleep" },
    { word: "Specious", correct: "Misleading", incorrect: ["Genuine", "Real", "Authentic"], definition: "superficially plausible, but actually wrong" },
    { word: "Staid", correct: "Serious", incorrect: ["Frivolous", "Fun-loving", "Playful"], definition: "sedate, respectable, and unadventurous" },
    { word: "Stalwart", correct: "Loyal", incorrect: ["Unreliable", "Disloyal", "Unfaithful"], definition: "loyal, reliable, and hardworking" },
    { word: "Stentorian", correct: "Loud", incorrect: ["Quiet", "Soft", "Muted"], definition: "(of a person's voice) loud and powerful" },
    { word: "Stolid", correct: "Impassive", incorrect: ["Emotional", "Expressive", "Sensitive"], definition: "calm, dependable, and showing little emotion or animation" },
    { word: "Strident", correct: "Harsh", incorrect: ["Soft", "Mellow", "Muted"], definition: "loud and harsh; grating" },
    { word: "Stymie", correct: "Hinder", incorrect: ["Assist", "Facilitate", "Support"], definition: "prevent or hinder the progress of" },
    { word: "Sublime", correct: "Exalted", incorrect: ["Lowly", "Inferior", "Common"], definition: "of such excellence, grandeur, or beauty as to inspire great admiration or awe" },
    { word: "Subterfuge", correct: "Deception", incorrect: ["Honesty", "Truthfulness", "Candor"], definition: "deceit used in order to achieve one's goal" },
    { word: "Succinct", correct: "Concise", incorrect: ["Verbose", "Lengthy", "Wordy"], definition: "(especially of something written or spoken) briefly and clearly expressed" },
    { word: "Sycophant", correct: "Flatterer", incorrect: ["Critic", "Opposer", "Adversary"], definition: "a person who acts obsequiously toward someone important in order to gain advantage" },
    { word: "Tacit", correct: "Implied", incorrect: ["Explicit", "Expressed", "Stated"], definition: "understood or implied without being stated" },
    { word: "Taciturn", correct: "Reticent", incorrect: ["Talkative", "Communicative", "Garrulous"], definition: "(of a person) reserved or uncommunicative in speech; saying little" },
    { word: "Tenuous", correct: "Weak", incorrect: ["Strong", "Firm", "Sturdy"], definition: "very weak or slight" },
    { word: "Timorous", correct: "Fearful", incorrect: ["Brave", "Bold", "Confident"], definition: "showing or suffering from nervousness, fear, or a lack of confidence" },
    { word: "Tirade", correct: "Diatribe", incorrect: ["Praise", "Compliment", "Approval"], definition: "a long, angry speech of criticism or accusation" },
    { word: "Torpid", correct: "Lethargic", incorrect: ["Energetic", "Active", "Vivacious"], definition: "mentally or physically inactive; lethargic" },
    { word: "Trepidation", correct: "Apprehension", incorrect: ["Calmness", "Composure", "Confidence"], definition: "a feeling of fear or agitation about something that may happen" },
    { word: "Trite", correct: "Banal", incorrect: ["Original", "Fresh", "Unique"], definition: "(of a remark, opinion, or idea) overused and consequently of little import; lacking originality or freshness" },
    { word: "Ubiquitous", correct: "Omnipresent", incorrect: ["Rare", "Uncommon", "Scarce"], definition: "present, appearing, or found everywhere" },
    { word: "Umbrage", correct: "Offense", incorrect: ["Satisfaction", "Contentment", "Pleasure"], definition: "offense or annoyance" },
    { word: "Unctuous", correct: "Ingratiating", incorrect: ["Sincere", "Genuine", "Honest"], definition: "(of a person) excessively or ingratiatingly flattering" },
    { word: "Urbane", correct: "Suave", incorrect: ["Uncouth", "Rude", "Unpolished"], definition: "(of a person, especially a man) courteous and refined in manner" },
    { word: "Vacillate", correct: "Waver", incorrect: ["Decide", "Determine", "Resolve"], definition: "alternate or waver between different opinions or actions; be indecisive" },
    { word: "Vapid", correct: "Dull", incorrect: ["Lively", "Exciting", "Interesting"], definition: "offering nothing that is stimulating or challenging" },
    { word: "Vehement", correct: "Passionate", incorrect: ["Apathetic", "Indifferent", "Calm"], definition: "showing strong feeling; forceful, passionate, or intense" },
    { word: "Veracity", correct: "Truthfulness", incorrect: ["Deceit", "Falsehood", "Dishonesty"], definition: "conformity to facts; accuracy" },
    { word: "Verbose", correct: "Wordy", incorrect: ["Succinct", "Concise", "Brief"], definition: "using or expressed in more words than are needed" },
    { word: "Vertigo", correct: "Dizziness", incorrect: ["Stability", "Balance", "Calm"], definition: "a sensation of whirling and loss of balance" },
    { word: "Vex", correct: "Irritate", incorrect: ["Please", "Soothe", "Delight"], definition: "make (someone) feel annoyed, frustrated, or worried" },
    { word: "Vicarious", correct: "Indirect", incorrect: ["Direct", "Primary", "Firsthand"], definition: "experienced in the imagination through the feelings or actions of another person" },
    { word: "Vilify", correct: "Defame", incorrect: ["Praise", "Compliment", "Adulate"], definition: "speak or write about in an abusively disparaging manner" },
    { word: "Vindicate", correct: "Exonerate", incorrect: ["Accuse", "Blame", "Incriminate"], definition: "clear (someone) of blame or suspicion" },
    { word: "Virulent", correct: "Toxic", incorrect: ["Harmless", "Beneficial", "Safe"], definition: "(of a disease or poison) extremely severe or harmful in its effects" },
    { word: "Vitiate", correct: "Spoil", incorrect: ["Enhance", "Improve", "Strengthen"], definition: "spoil or impair the quality or efficiency of" },
    { word: "Vociferous", correct: "Clamorous", incorrect: ["Quiet", "Silent", "Soft"], definition: "(especially of a person or speech) vehement or clamorous" },
    { word: "Voracious", correct: "Insatiable", incorrect: ["Satiated", "Content", "Full"], definition: "wanting or devouring great quantities of food" },
    { word: "Winsome", correct: "Charming", incorrect: ["Unattractive", "Repulsive", "Unappealing"], definition: "attractive or appealing in appearance or character" },
    { word: "Wistful", correct: "Nostalgic", incorrect: ["Uncaring", "Indifferent", "Apathetic"], definition: "having or showing a feeling of vague or regretful longing" },
    { word: "Zealous", correct: "Enthusiastic", incorrect: ["Indifferent", "Apathetic", "Uninterested"], definition: "having or showing zeal" },
    { word: "Zenith", correct: "Peak", incorrect: ["Nadir", "Bottom", "Base"], definition: "the time at which something is most powerful or successful" }
  ];

  let usedIndexes = [];

  document.addEventListener('DOMContentLoaded', () => {
      loadQuestion();
  });
  
  function loadQuestion() {
      let currentQuestionIndex;
  
      if (usedIndexes.length === vocabList.length) {
          usedIndexes = [];
      }
  
      do {
          currentQuestionIndex = Math.floor(Math.random() * vocabList.length);
      } while (usedIndexes.includes(currentQuestionIndex));
  
      usedIndexes.push(currentQuestionIndex);
  
      const question = vocabList[currentQuestionIndex];
      document.getElementById('vocab-word').textContent = question.word;
      
      const choices = shuffle([question.correct, ...question.incorrect]);
      const buttons = document.querySelectorAll('.choice');
      buttons.forEach((button, index) => {
          button.textContent = choices[index];
          button.className = 'choice'; // Reset class
      });
  }
  
  function shuffle(array) {
      for (let i = array.length - 1; i > 0; i--) {
          const j = Math.floor(Math.random() * (i + 1));
          [array[i], array[j]] = [array[j], array[i]];
      }
      return array;
  }
  
  function checkAnswer(button) {
      const question = vocabList[usedIndexes[usedIndexes.length - 1]];
      if (button.textContent === question.correct) {
          button.classList.add('correct');
      } else {
          button.classList.add('incorrect');
      }
      
      setTimeout(() => {
          showExplanation(question);
      }, 1500);
  }
  
  function showExplanation(question) {
      const explanationPage = `
          <header>
              <nav>
                  <ul>
                      <li><a href="index.html">Home</a></li>
                      <li class="dropdown">
                          <a href="games.html" class="dropbtn">Games</a>
                          <div class="dropdown-content">
                              <a href="sat-vocab-definition-mcq.html">SAT Vocab Definition MCQ</a>
                              <a href="sat-vocab-context-mcq.html">SAT Vocab Context MCQ</a>
                          </div>
                      </li>
                  </ul>
              </nav>
              <h1>Vocabulary Explanation</h1>
          </header>
          <main id="games-content">
              <section id="sat-vocab-definition-mcq">
                  <div id="explanation">
                      <h2>${question.word}</h2>
                      <p>Definition: ${question.definition}</p>
                      <p>Correct Answer: ${question.correct}</p>
                      <button onclick="nextQuestion()">Next</button>
                  </div>
              </section>
          </main>
          <footer>
              <p>&copy; 2024 Created by Shufan Dong</p>
          </footer>
      `;
  
      document.body.innerHTML = explanationPage;
  }
  
  function nextQuestion() {
      document.location.reload();
  }