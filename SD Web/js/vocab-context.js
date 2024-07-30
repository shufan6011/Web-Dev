const vocabContextList = [
    { context: "The ____ of the painting was evident, with every brushstroke executed to create a masterpiece.", correct: "mastery", incorrect: ["flaw", "hastily", "mundane"], explanation: "The word 'mastery' fits as it describes exceptional skill and execution in the painting." },
    { context: "The author's ____ imagination brought to life a world filled with characters and adventures.", correct: "vivid", incorrect: ["dull", "monotonous", "bland"], explanation: "The word 'vivid' fits as it describes a bright, clear, and detailed imagination." },
    { context: "The team worked tirelessly to ____ the project, ensuring it was completed with precision.", correct: "complete", incorrect: ["abandon", "sloppy", "delay"], explanation: "The word 'complete' fits as it describes the act of finishing the project." },
    { context: "The journey took them through ____ landscapes, testing their endurance.", correct: "arduous", incorrect: ["easy", "boring", "flat"], explanation: "The word 'arduous' fits as it describes a challenging and difficult journey." },
    { context: "The design of the building was both ____ and functional, blending aesthetics.", correct: "innovative", incorrect: ["antiquated", "useless", "chaotic"], explanation: "The word 'innovative' fits as it describes a new, creative, and functional design." },
    { context: "Her ____ personality made her thrive in social settings, where she could engage with ease.", correct: "charismatic", incorrect: ["shy", "awkward", "struggle"], explanation: "The word 'charismatic' fits as it describes a person who is charming and engaging." },
    { context: "The decision led to a ____ improvement in the company's performance.", correct: "strategic", incorrect: ["reckless", "decline", "conflict"], explanation: "The word 'strategic' fits as it describes a well-planned and beneficial decision." },
    { context: "The performance of the actor left the audience in ____ awe.", correct: "stellar", incorrect: ["mediocre", "indifferent", "poor"], explanation: "The word 'stellar' fits as it describes an outstanding and impressive performance." },
    { context: "The scientist approached the experiment with ____ methods.", correct: "meticulous", incorrect: ["careless", "random", "vague"], explanation: "The word 'meticulous' fits as it describes someone who is very careful and precise." },
    { context: "The garden was a sight to behold, with its ____ flowers.", correct: "lush", incorrect: ["dry", "dull", "chaotic"], explanation: "The word 'lush' fits as it describes a garden that is rich with healthy plants." },
    { context: "The manager was known for his ____ leadership.", correct: "effective", incorrect: ["inept", "weak", "poor"], explanation: "The word 'effective' fits as it describes someone who produces the desired result." },
    { context: "The speech inspired the crowd, leaving them with a sense of ____.", correct: "motivational", incorrect: ["boring", "doubt", "fear"], explanation: "The word 'motivational' fits as it describes a speech that inspires enthusiasm." },
    { context: "The student consistently produced ____ work.", correct: "diligent", incorrect: ["lazy", "mediocre", "criticism"], explanation: "The word 'diligent' fits as it describes a student who is hardworking and attentive." },
    { context: "The view from the mountaintop was ____.", correct: "panoramic", incorrect: ["limited", "dim", "partial"], explanation: "The word 'panoramic' fits as it describes an unbroken view of the whole region." },
    { context: "The artist's work was ____ by critics.", correct: "celebrated", incorrect: ["ignored", "derided", "unknown"], explanation: "The word 'celebrated' fits as it describes someone who is widely admired and recognized." },
    { context: "The chef prepared a meal that was ____ in flavor.", correct: "acclaimed", incorrect: ["amateur", "bland", "random"], explanation: "The word 'acclaimed' fits as it describes a chef who is highly praised and respected." },
    { context: "The historian provided a ____ account of the events.", correct: "esteemed", incorrect: ["disreputable", "skewed", "ignored"], explanation: "The word 'esteemed' fits as it describes a historian who is highly regarded and trusted." },
    { context: "The performance at the concert left the audience feeling ____.", correct: "moving", incorrect: ["dull", "disconnected", "indifference"], explanation: "The word 'moving' fits as it describes a performance that deeply affects the audience emotionally." },
    { context: "The leader was able to ____ the country through difficult times with his vision.", correct: "guide", incorrect: ["divide", "ignore", "confuse"], explanation: "The word 'guide' fits as it describes the act of leading a country effectively." },
    { context: "The debate between the two candidates was ____.", correct: "heated", incorrect: ["calm", "weak", "irrelevant"], explanation: "The word 'heated' fits as it describes a debate that is intense and passionate." },
    { context: "The scholar's lecture was ____.", correct: "illuminating", incorrect: ["confusing", "misleading", "boring"], explanation: "The word 'illuminating' fits as it describes a lecture that is enlightening and informative." },
    { context: "The landscape was ____ with diverse wildlife.", correct: "teeming", incorrect: ["barren", "sparse", "empty"], explanation: "The word 'teeming' fits as it describes a place full of life and activity." },
    { context: "The musician's talent was ____ during the performance.", correct: "evident", incorrect: ["hidden", "doubtful", "mediocre"], explanation: "The word 'evident' fits as it describes something clearly seen or understood." },
    { context: "The novelist's ____ was evident in the intricate plot.", correct: "ingenuity", incorrect: ["plagiarism", "clumsiness", "banality"], explanation: "The word 'ingenuity' fits as it describes creative and clever inventiveness." },
    { context: "The team's ____ led to their victory.", correct: "perseverance", incorrect: ["laziness", "indifference", "carelessness"], explanation: "The word 'perseverance' fits as it describes steady persistence in a course of action." },
    { context: "The scientist's ____ approach ensured accurate results.", correct: "methodical", incorrect: ["haphazard", "random", "erratic"], explanation: "The word 'methodical' fits as it describes an organized and systematic approach." },
    { context: "The film received ____ reviews from critics.", correct: "glowing", incorrect: ["scathing", "lukewarm", "negative"], explanation: "The word 'glowing' fits as it describes very positive and enthusiastic praise." },
    { context: "The ____ of the monument drew tourists from around the world.", correct: "grandeur", incorrect: ["simplicity", "mundanity", "mediocrity"], explanation: "The word 'grandeur' fits as it describes impressive beauty or magnificence." },
    { context: "The athlete's ____ was admired by fans.", correct: "dedication", incorrect: ["apathy", "laziness", "indifference"], explanation: "The word 'dedication' fits as it describes committed and devoted behavior." },
    { context: "The software update included several ____ features.", correct: "enhanced", incorrect: ["outdated", "useless", "buggy"], explanation: "The word 'enhanced' fits as it describes improved and upgraded features." },
    { context: "The novel's ____ plot kept readers engaged.", correct: "intricate", incorrect: ["simple", "predictable", "dull"], explanation: "The word 'intricate' fits as it describes something very detailed and complex." },
    { context: "The speech was ____ and left a lasting impact.", correct: "profound", incorrect: ["superficial", "unremarkable", "shallow"], explanation: "The word 'profound' fits as it describes something very deep and meaningful." },
    { context: "The artist's ____ work captured the essence of the subject.", correct: "masterful", incorrect: ["amateur", "mediocre", "clumsy"], explanation: "The word 'masterful' fits as it describes something done with great skill." },
    { context: "The scientist made a ____ discovery that changed the field.", correct: "groundbreaking", incorrect: ["trivial", "insignificant", "unremarkable"], explanation: "The word 'groundbreaking' fits as it describes an innovative and important discovery." },
    { context: "The author's ____ style made the book a delight to read.", correct: "engaging", incorrect: ["boring", "confusing", "tedious"], explanation: "The word 'engaging' fits as it describes something very interesting and enjoyable." },
    { context: "The ____ of the new law was widely debated.", correct: "implementation", incorrect: ["repeal", "ignoring", "abandonment"], explanation: "The word 'implementation' fits as it describes the act of putting something into effect." },
    { context: "The ____ landscape inspired many artists.", correct: "picturesque", incorrect: ["bleak", "dull", "unattractive"], explanation: "The word 'picturesque' fits as it describes something very beautiful and charming." },
    { context: "The ____ performance earned the singer a standing ovation.", correct: "breathtaking", incorrect: ["mediocre", "forgettable", "subpar"], explanation: "The word 'breathtaking' fits as it describes something very impressive and awe-inspiring." },
    { context: "The ____ scientist was awarded for his research.", correct: "eminent", incorrect: ["unknown", "mediocre", "inexperienced"], explanation: "The word 'eminent' fits as it describes someone very respected and distinguished." },
    { context: "The ____ plan was praised for its efficiency.", correct: "innovative", incorrect: ["outdated", "ineffective", "cumbersome"], explanation: "The word 'innovative' fits as it describes something very new and creative." },
    { context: "The team worked with ____ to complete the project.", correct: "precision", incorrect: ["carelessness", "disorder", "inaccuracy"], explanation: "The word 'precision' fits as it describes the quality of being very accurate and exact." },
    { context: "The author's ____ narrative captured the readers' imaginations.", correct: "vivid", incorrect: ["dull", "bland", "confusing"], explanation: "The word 'vivid' fits as it describes something very clear and detailed." },
    { context: "The scientist's ____ approach led to groundbreaking results.", correct: "methodical", incorrect: ["chaotic", "random", "disorganized"], explanation: "The word 'methodical' fits as it describes a systematic and organized approach." },
    { context: "The ____ chef created a dish that was a feast for the senses.", correct: "talented", incorrect: ["inexperienced", "inept", "mediocre"], explanation: "The word 'talented' fits as it describes someone with exceptional skill." },
    { context: "The ____ manager led the company to great success.", correct: "competent", incorrect: ["inept", "inexperienced", "unqualified"], explanation: "The word 'competent' fits as it describes someone very capable and skilled." },
    { context: "The ____ event was enjoyed by all attendees.", correct: "memorable", incorrect: ["forgettable", "dull", "unremarkable"], explanation: "The word 'memorable' fits as it describes something very noteworthy and worth remembering." },
    { context: "The artist's ____ captured the beauty of the scene.", correct: "painting", incorrect: ["scribble", "doodle", "sketch"], explanation: "The word 'painting' fits as it describes an artwork created with paint, often depicting beauty." },
    { context: "The ____ detective solved the mystery with ease.", correct: "astute", incorrect: ["clumsy", "inept", "foolish"], explanation: "The word 'astute' fits as it describes someone very sharp and perceptive." },
    { context: "The ____ athlete broke several records at the competition.", correct: "accomplished", incorrect: ["amateur", "untrained", "novice"], explanation: "The word 'accomplished' fits as it describes someone very skilled and successful." },
    { context: "The ____ solution effectively addressed the problem.", correct: "innovative", incorrect: ["ineffective", "traditional", "basic"], explanation: "The word 'innovative' fits as it describes a new and creative solution." },
    { context: "The ____ student consistently achieved high grades.", correct: "diligent", incorrect: ["lazy", "unmotivated", "careless"], explanation: "The word 'diligent' fits as it describes someone very hardworking and attentive." },
    { context: "The ____ actor received critical acclaim for his performance.", correct: "talented", incorrect: ["mediocre", "inexperienced", "inept"], explanation: "The word 'talented' fits as it describes someone with exceptional skill." },
    { context: "The ____ engineer developed a groundbreaking technology.", correct: "brilliant", incorrect: ["average", "mediocre", "ordinary"], explanation: "The word 'brilliant' fits as it describes someone very intelligent and innovative." },
    { context: "The ____ leader guided the team to victory.", correct: "capable", incorrect: ["ineffective", "incompetent", "unskilled"], explanation: "The word 'capable' fits as it describes someone very able and efficient." },
    { context: "The ____ painting was a highlight of the exhibition.", correct: "stunning", incorrect: ["dull", "unremarkable", "ordinary"], explanation: "The word 'stunning' fits as it describes something very impressive and beautiful." },
    { context: "The ____ researcher made significant contributions to the field.", correct: "renowned", incorrect: ["unknown", "amateur", "novice"], explanation: "The word 'renowned' fits as it describes someone very well-known and respected." },
    { context: "The ____ recipe became a favorite among the family.", correct: "delicious", incorrect: ["bland", "unappetizing", "mediocre"], explanation: "The word 'delicious' fits as it describes something very tasty and enjoyable." },
    { context: "The ____ dancer captivated the audience with her performance.", correct: "graceful", incorrect: ["awkward", "clumsy", "stiff"], explanation: "The word 'graceful' fits as it describes someone very elegant and smooth in movement." },
    { context: "The ____ writer received numerous awards for his work.", correct: "acclaimed", incorrect: ["unknown", "mediocre", "inept"], explanation: "The word 'acclaimed' fits as it describes someone very praised and admired." },
    { context: "The ____ scientist was a pioneer in his field.", correct: "innovative", incorrect: ["conventional", "unoriginal", "routine"], explanation: "The word 'innovative' fits as it describes someone very creative and forward-thinking." },
    { context: "The ____ movie kept the audience on the edge of their seats.", correct: "thrilling", incorrect: ["boring", "dull", "predictable"], explanation: "The word 'thrilling' fits as it describes something very exciting and suspenseful." },
    { context: "The ____ musician played the piece flawlessly.", correct: "virtuoso", incorrect: ["novice", "amateur", "mediocre"], explanation: "The word 'virtuoso' fits as it describes someone very skilled in music." },
    { context: "The ____ teacher inspired her students to excel.", correct: "dedicated", incorrect: ["indifferent", "unmotivated", "careless"], explanation: "The word 'dedicated' fits as it describes someone very committed and hardworking." },
    { context: "The ____ innovation revolutionized the industry.", correct: "groundbreaking", incorrect: ["ordinary", "insignificant", "trivial"], explanation: "The word 'groundbreaking' fits as it describes something very new and important." },
    { context: "The ____ performance received a standing ovation.", correct: "breathtaking", incorrect: ["mediocre", "forgettable", "subpar"], explanation: "The word 'breathtaking' fits as it describes something very impressive and awe-inspiring." },
    { context: "The ____ solution solved the complex problem.", correct: "elegant", incorrect: ["clumsy", "inefficient", "basic"], explanation: "The word 'elegant' fits as it describes something very effective and graceful." },
    { context: "The ____ invention made everyday tasks easier.", correct: "innovative", incorrect: ["obsolete", "useless", "inefficient"], explanation: "The word 'innovative' fits as it describes something very new and creative." },
    { context: "The ____ artist's work was displayed in galleries worldwide.", correct: "renowned", incorrect: ["unknown", "amateur", "novice"], explanation: "The word 'renowned' fits as it describes someone very well-known and respected." },
    { context: "The ____ plan improved the company's efficiency.", correct: "strategic", incorrect: ["reckless", "ineffective", "disorganized"], explanation: "The word 'strategic' fits as it describes something very well-planned and beneficial." },
    { context: "The ____ doctor was known for his expertise.", correct: "eminent", incorrect: ["unknown", "mediocre", "inexperienced"], explanation: "The word 'eminent' fits as it describes someone very respected and distinguished." },
    { context: "The ____ athlete set a new world record.", correct: "exceptional", incorrect: ["average", "mediocre", "ordinary"], explanation: "The word 'exceptional' fits as it describes someone very outstanding and remarkable." },
    { context: "The ____ project required a lot of teamwork.", correct: "collaborative", incorrect: ["solitary", "individual", "isolated"], explanation: "The word 'collaborative' fits as it describes something requiring cooperation and teamwork." },
    { context: "The ____ garden was full of vibrant flowers.", correct: "blooming", incorrect: ["wilted", "barren", "lifeless"], explanation: "The word 'blooming' fits as it describes something very flourishing and growing." },
    { context: "The ____ sculpture was admired by art enthusiasts.", correct: "intricate", incorrect: ["simple", "rough", "basic"], explanation: "The word 'intricate' fits as it describes something very detailed and complex." },
    { context: "The ____ scientist developed a revolutionary theory.", correct: "brilliant", incorrect: ["average", "mediocre", "ordinary"], explanation: "The word 'brilliant' fits as it describes someone very intelligent and innovative." },
    { context: "The ____ leader was respected by all.", correct: "charismatic", incorrect: ["uncharismatic", "disliked", "ordinary"], explanation: "The word 'charismatic' fits as it describes someone very charming and influential." },
    { context: "The ____ novel captivated readers worldwide.", correct: "gripping", incorrect: ["boring", "dull", "uninteresting"], explanation: "The word 'gripping' fits as it describes something very exciting and engaging." },
    { context: "The ____ discovery changed the course of history.", correct: "monumental", incorrect: ["insignificant", "trivial", "ordinary"], explanation: "The word 'monumental' fits as it describes something very important and significant." },
    { context: "The ____ actor delivered a memorable performance.", correct: "talented", incorrect: ["mediocre", "inexperienced", "inept"], explanation: "The word 'talented' fits as it describes someone with exceptional skill." },
    { context: "The ____ event was the talk of the town.", correct: "spectacular", incorrect: ["ordinary", "dull", "boring"], explanation: "The word 'spectacular' fits as it describes something very impressive and exciting." },
    { context: "The ____ scientist won the Nobel Prize for his work.", correct: "renowned", incorrect: ["unknown", "amateur", "novice"], explanation: "The word 'renowned' fits as it describes someone very well-known and respected." },
    { context: "The ____ artist's exhibition attracted large crowds.", correct: "celebrated", incorrect: ["ignored", "derided", "unknown"], explanation: "The word 'celebrated' fits as it describes someone very admired and recognized." },
    { context: "The ____ solution addressed all the issues effectively.", correct: "comprehensive", incorrect: ["partial", "incomplete", "limited"], explanation: "The word 'comprehensive' fits as it describes something very thorough and all-encompassing." },
    { context: "The ____ dancer impressed everyone with her moves.", correct: "graceful", incorrect: ["clumsy", "awkward", "stiff"], explanation: "The word 'graceful' fits as it describes someone very elegant and smooth in movement." },
    { context: "The ____ chef prepared a feast for the guests.", correct: "talented", incorrect: ["amateur", "inept", "unskilled"], explanation: "The word 'talented' fits as it describes someone with exceptional skill." },
    { context: "The ____ writer produced a best-selling novel.", correct: "prolific", incorrect: ["unproductive", "idle", "lazy"], explanation: "The word 'prolific' fits as it describes someone very productive and creative." },
    { context: "The ____ scientist made a groundbreaking discovery.", correct: "brilliant", incorrect: ["average", "mediocre", "ordinary"], explanation: "The word 'brilliant' fits as it describes someone very intelligent and innovative." },
    { context: "The ____ performance earned a standing ovation.", correct: "stunning", incorrect: ["mediocre", "forgettable", "subpar"], explanation: "The word 'stunning' fits as it describes something very impressive and beautiful." },
    { context: "The ____ innovation transformed the industry.", correct: "revolutionary", incorrect: ["ordinary", "insignificant", "trivial"], explanation: "The word 'revolutionary' fits as it describes something very new and important." },
    { context: "The ____ engineer developed a new technology.", correct: "innovative", incorrect: ["conventional", "unoriginal", "routine"], explanation: "The word 'innovative' fits as it describes someone very creative and forward-thinking." },
    { context: "The ____ of the novel kept readers engaged until the very end.", correct: "suspense", incorrect: ["boredom", "confusion", "predictability"], explanation: "The word 'suspense' fits as it describes a state of excitement or anxious uncertainty." },
    { context: "The ____ of the ancient ruins attracted historians from around the world.", correct: "mystery", incorrect: ["clarity", "simplicity", "ordinariness"], explanation: "The word 'mystery' fits as it describes something that is difficult or impossible to understand or explain." },
    { context: "The ____ of the presentation was appreciated by all attendees.", correct: "clarity", incorrect: ["vagueness", "confusion", "ambiguity"], explanation: "The word 'clarity' fits as it describes the quality of being coherent and intelligible." },
    { context: "The ____ dancer captivated the audience with her elegant movements.", correct: "graceful", incorrect: ["clumsy", "awkward", "rigid"], explanation: "The word 'graceful' fits as it describes someone who moves in a smooth, relaxed, and attractive way." },
    { context: "The ____ discovery provided new insights into the field of genetics.", correct: "groundbreaking", incorrect: ["ordinary", "unremarkable", "trivial"], explanation: "The word 'groundbreaking' fits as it describes something very new and a big change from other things of its type." },
    { context: "The ____ landscape inspired numerous artists to capture its beauty.", correct: "picturesque", incorrect: ["ugly", "dull", "unremarkable"], explanation: "The word 'picturesque' fits as it describes something very attractive, especially in a traditional or charming way." },
    { context: "The ____ musician played the piece flawlessly, impressing the audience.", correct: "virtuoso", incorrect: ["novice", "amateur", "mediocre"], explanation: "The word 'virtuoso' fits as it describes a person highly skilled in music or another artistic pursuit." },
    { context: "The ____ actor delivered a performance that was praised by critics.", correct: "acclaimed", incorrect: ["unknown", "mediocre", "criticized"], explanation: "The word 'acclaimed' fits as it describes someone who is praised publicly for their achievements." },
    { context: "The ____ plan improved the overall efficiency of the process.", correct: "strategic", incorrect: ["reckless", "ineffective", "disorganized"], explanation: "The word 'strategic' fits as it describes something that is planned or designed to achieve a particular goal." },
    { context: "The ____ scientist was recognized for his contributions to physics.", correct: "eminent", incorrect: ["unknown", "mediocre", "inexperienced"], explanation: "The word 'eminent' fits as it describes someone who is famous and respected within a particular sphere." },
    { context: "The ____ of the team's efforts led to their success.", correct: "dedication", incorrect: ["apathy", "indifference", "negligence"], explanation: "The word 'dedication' fits as it describes the quality of being committed to a task or purpose." },
    { context: "The ____ of the artwork was evident in every detail.", correct: "craftsmanship", incorrect: ["carelessness", "sloppiness", "amateurism"], explanation: "The word 'craftsmanship' fits as it describes the quality of design and work shown in something made by hand." },
    { context: "The ____ festival attracted visitors from all over the world.", correct: "renowned", incorrect: ["obscure", "unknown", "unremarkable"], explanation: "The word 'renowned' fits as it describes something that is famous and celebrated." },
    { context: "The ____ engineer developed an innovative solution to the problem.", correct: "talented", incorrect: ["incompetent", "unskilled", "inept"], explanation: "The word 'talented' fits as it describes someone who has a natural aptitude or skill." },
    { context: "The ____ performance earned a standing ovation from the audience.", correct: "stunning", incorrect: ["mediocre", "forgettable", "lackluster"], explanation: "The word 'stunning' fits as it describes something that is extremely impressive or attractive." },
    { context: "The ____ writer captured the essence of the human experience in his novels.", correct: "prolific", incorrect: ["unproductive", "uninspired", "inactive"], explanation: "The word 'prolific' fits as it describes someone who produces a lot of works or results." },
    { context: "The ____ decision helped the company avoid bankruptcy.", correct: "prudent", incorrect: ["reckless", "foolish", "careless"], explanation: "The word 'prudent' fits as it describes someone who is wise and careful in their decisions." },
    { context: "The ____ of the building's design won several architectural awards.", correct: "innovation", incorrect: ["tradition", "conservatism", "conformity"], explanation: "The word 'innovation' fits as it describes the introduction of something new or different." },
    { context: "The ____ discovery led to a major breakthrough in medicine.", correct: "groundbreaking", incorrect: ["minor", "insignificant", "routine"], explanation: "The word 'groundbreaking' fits as it describes something that is new and likely to have an effect on future events." },
    { context: "The ____ artist's exhibition attracted large crowds.", correct: "celebrated", incorrect: ["unknown", "ignored", "unnoticed"], explanation: "The word 'celebrated' fits as it describes someone who is widely known and praised." },
    { context: "The ____ of the author's writing style made the novel a joy to read.", correct: "eloquence", incorrect: ["awkwardness", "dullness", "clumsiness"], explanation: "The word 'eloquence' fits as it describes fluent or persuasive speaking or writing." },
    { context: "The ____ landscape provided a perfect backdrop for the film.", correct: "picturesque", incorrect: ["drab", "unattractive", "bleak"], explanation: "The word 'picturesque' fits as it describes a place that is visually attractive, especially in a quaint or charming way." },
    { context: "The ____ effort of the volunteers made the event a success.", correct: "dedicated", incorrect: ["half-hearted", "negligent", "apathetic"], explanation: "The word 'dedicated' fits as it describes someone who is devoted to a task or purpose." },
    { context: "The ____ of the new software improved user experience.", correct: "functionality", incorrect: ["deficiency", "failure", "inefficiency"], explanation: "The word 'functionality' fits as it describes the quality of being suited to serve a purpose well." },
    { context: "The ____ was celebrated for his achievements in literature.", correct: "novelist", incorrect: ["amateur", "layman", "beginner"], explanation: "The word 'novelist' fits as it describes someone who writes novels." },
    { context: "The ____ dancer performed with grace and poise.", correct: "ballet", incorrect: ["awkward", "clumsy", "uncoordinated"], explanation: "The word 'ballet' fits as it describes a highly skilled form of dance." },
    { context: "The ____ scientist made a significant discovery in chemistry.", correct: "brilliant", incorrect: ["average", "mediocre", "ordinary"], explanation: "The word 'brilliant' fits as it describes someone who is exceptionally talented or intelligent." },
    { context: "The ____ musician played the instrument with expertise.", correct: "virtuoso", incorrect: ["novice", "amateur", "beginner"], explanation: "The word 'virtuoso' fits as it describes someone who is highly skilled in music." },
    { context: "The ____ author wrote numerous best-selling novels.", correct: "prolific", incorrect: ["unproductive", "lazy", "inactive"], explanation: "The word 'prolific' fits as it describes someone who produces a lot of works or results." },
    { context: "The ____ leader inspired confidence in his team.", correct: "charismatic", incorrect: ["unremarkable", "uninspiring", "forgettable"], explanation: "The word 'charismatic' fits as it describes someone who has a compelling charm that inspires others." },
    { context: "The ____ solution addressed all aspects of the problem.", correct: "comprehensive", incorrect: ["partial", "incomplete", "narrow"], explanation: "The word 'comprehensive' fits as it describes something that includes all or nearly all elements or aspects." },
    { context: "The ____ of the plan was appreciated by the stakeholders.", correct: "thoroughness", incorrect: ["sloppiness", "carelessness", "negligence"], explanation: "The word 'thoroughness' fits as it describes the quality of being very attentive to detail." },
    { context: "The ____ event was attended by dignitaries from various countries.", correct: "prestigious", incorrect: ["insignificant", "unimportant", "ordinary"], explanation: "The word 'prestigious' fits as it describes something that is highly respected and admired." },
    { context: "The ____ landscape was a favorite subject for painters.", correct: "serene", incorrect: ["chaotic", "turbulent", "noisy"], explanation: "The word 'serene' fits as it describes something calm, peaceful, and untroubled." },
    { context: "The ____ artist was known for her unique style.", correct: "renowned", incorrect: ["unknown", "unremarkable", "mediocre"], explanation: "The word 'renowned' fits as it describes someone who is famous and respected for their talent." },
    { context: "The ____ of the mountain range was breathtaking.", correct: "majesty", incorrect: ["plainness", "modesty", "insignificance"], explanation: "The word 'majesty' fits as it describes something that is impressive in scale or appearance." },
    { context: "The ____ engineer developed a new method for energy efficiency.", correct: "innovative", incorrect: ["traditional", "conventional", "routine"], explanation: "The word 'innovative' fits as it describes something that introduces new ideas or methods." },
    { context: "The ____ of the athlete's performance was undeniable.", correct: "excellence", incorrect: ["mediocrity", "inferiority", "adequacy"], explanation: "The word 'excellence' fits as it describes something that is extremely good or outstanding." },
    { context: "The ____ scientist was awarded for his groundbreaking research.", correct: "eminent", incorrect: ["unknown", "mediocre", "obscure"], explanation: "The word 'eminent' fits as it describes someone who is famous and respected within a particular sphere." },
    { context: "The ____ singer captivated the audience with her powerful voice.", correct: "talented", incorrect: ["mediocre", "tone-deaf", "inexperienced"], explanation: "The word 'talented' fits as it describes someone who has a natural aptitude or skill." },
    { context: "The ____ discovery opened new avenues for research.", correct: "groundbreaking", incorrect: ["ordinary", "trivial", "insignificant"], explanation: "The word 'groundbreaking' fits as it describes something that is new and a big change from other things of its type." },
    { context: "The ____ view from the mountaintop was breathtaking.", correct: "panoramic", incorrect: ["restricted", "dull", "narrow"], explanation: "The word 'panoramic' fits as it describes a view that is wide and expansive." },
    { context: "The ____ athlete broke several world records.", correct: "exceptional", incorrect: ["average", "mediocre", "ordinary"], explanation: "The word 'exceptional' fits as it describes someone who is outstanding and remarkable." },
    { context: "The ____ artist's work was displayed in galleries worldwide.", correct: "renowned", incorrect: ["unknown", "unrecognized", "amateur"], explanation: "The word 'renowned' fits as it describes someone who is famous and respected for their talent." },
    { context: "The ____ chef prepared a meal that delighted all the guests.", correct: "acclaimed", incorrect: ["unskilled", "mediocre", "unknown"], explanation: "The word 'acclaimed' fits as it describes someone who is praised publicly for their achievements." },
    { context: "The ____ scientist received a Nobel Prize for his work.", correct: "eminent", incorrect: ["unknown", "mediocre", "inexperienced"], explanation: "The word 'eminent' fits as it describes someone who is famous and respected within a particular sphere." },
    { context: "The ____ design of the building won several architectural awards.", correct: "innovative", incorrect: ["traditional", "conventional", "uninspired"], explanation: "The word 'innovative' fits as it describes something that introduces new ideas or methods." },
    { context: "The ____ actor gave a performance that left the audience in awe.", correct: "talented", incorrect: ["unskilled", "mediocre", "inexperienced"], explanation: "The word 'talented' fits as it describes someone who has a natural aptitude or skill." },
    { context: "The ____ performance of the team led them to victory.", correct: "stellar", incorrect: ["mediocre", "subpar", "average"], explanation: "The word 'stellar' fits as it describes something that is exceptionally good." },
    { context: "The ____ discovery changed the way scientists think about genetics.", correct: "groundbreaking", incorrect: ["insignificant", "trivial", "ordinary"], explanation: "The word 'groundbreaking' fits as it describes something that is new and likely to have an effect on future events." },
    { context: "The ____ landscape was the subject of many paintings.", correct: "picturesque", incorrect: ["drab", "ugly", "unattractive"], explanation: "The word 'picturesque' fits as it describes something that is visually attractive, especially in a quaint or charming way." },
    { context: "The ____ performance earned the musician a standing ovation.", correct: "virtuoso", incorrect: ["novice", "amateur", "mediocre"], explanation: "The word 'virtuoso' fits as it describes a person highly skilled in music or another artistic pursuit." },
    { context: "The ____ author was known for her eloquent prose.", correct: "celebrated", incorrect: ["unknown", "unremarkable", "mediocre"], explanation: "The word 'celebrated' fits as it describes someone who is widely known and praised." },
    { context: "The ____ scientist's research led to a major breakthrough.", correct: "brilliant", incorrect: ["average", "mediocre", "ordinary"], explanation: "The word 'brilliant' fits as it describes someone who is exceptionally talented or intelligent." },
    { context: "The ____ writer's novels have been translated into multiple languages.", correct: "prolific", incorrect: ["unproductive", "inactive", "uninspired"], explanation: "The word 'prolific' fits as it describes someone who produces a lot of works or results." },
    { context: "The ____ view from the hilltop was breathtaking.", correct: "panoramic", incorrect: ["limited", "narrow", "restricted"], explanation: "The word 'panoramic' fits as it describes a view that is wide and expansive." },
    { context: "The ____ of the product made it a best-seller.", correct: "quality", incorrect: ["inferiority", "deficiency", "flaw"], explanation: "The word 'quality' fits as it describes the standard of something as measured against other things of a similar kind." },
    { context: "The ____ actor received critical acclaim for his performance.", correct: "talented", incorrect: ["unskilled", "mediocre", "inexperienced"], explanation: "The word 'talented' fits as it describes someone who has a natural aptitude or skill." },
    { context: "The ____ team worked tirelessly to meet the deadline.", correct: "dedicated", incorrect: ["apathetic", "negligent", "indifferent"], explanation: "The word 'dedicated' fits as it describes someone who is devoted to a task or purpose." },
    { context: "The ____ artist's exhibition attracted a large audience.", correct: "renowned", incorrect: ["unknown", "unrecognized", "mediocre"], explanation: "The word 'renowned' fits as it describes someone who is famous and respected for their talent." },
    { context: "The ____ engineer developed a solution to the complex problem.", correct: "innovative", incorrect: ["traditional", "conventional", "routine"], explanation: "The word 'innovative' fits as it describes something that introduces new ideas or methods." },
    { context: "The ____ author's latest book topped the bestseller lists.", correct: "prolific", incorrect: ["unproductive", "inactive", "uninspired"], explanation: "The word 'prolific' fits as it describes someone who produces a lot of works or results." },
    { context: "The ____ view from the balcony was stunning.", correct: "panoramic", incorrect: ["restricted", "dull", "narrow"], explanation: "The word 'panoramic' fits as it describes a view that is wide and expansive." },
    { context: "The ____ discovery led to a Nobel Prize in physics.", correct: "groundbreaking", incorrect: ["ordinary", "trivial", "insignificant"], explanation: "The word 'groundbreaking' fits as it describes something that is new and a big change from other things of its type." },
    { context: "The ____ chef created a dish that was both delicious and beautiful.", correct: "talented", incorrect: ["unskilled", "mediocre", "inexperienced"], explanation: "The word 'talented' fits as it describes someone who has a natural aptitude or skill." },
    { context: "The ____ performance earned rave reviews from critics.", correct: "stellar", incorrect: ["mediocre", "subpar", "average"], explanation: "The word 'stellar' fits as it describes something that is exceptionally good." },
    { context: "The ____ author's novels have won several literary awards.", correct: "celebrated", incorrect: ["unknown", "unremarkable", "mediocre"], explanation: "The word 'celebrated' fits as it describes someone who is widely known and praised." },
    { context: "The ____ scientist's theory revolutionized the field of biology.", correct: "brilliant", incorrect: ["average", "mediocre", "ordinary"], explanation: "The word 'brilliant' fits as it describes someone who is exceptionally talented or intelligent." },
    { context: "The ____ landscape inspired many artists.", correct: "picturesque", incorrect: ["drab", "ugly", "unattractive"], explanation: "The word 'picturesque' fits as it describes something that is visually attractive, especially in a quaint or charming way." },
    { context: "The ____ musician impressed the audience with his skill.", correct: "virtuoso", incorrect: ["novice", "amateur", "mediocre"], explanation: "The word 'virtuoso' fits as it describes a person highly skilled in music or another artistic pursuit." },
    { context: "The ____ team's hard work paid off with a successful product launch.", correct: "dedicated", incorrect: ["apathetic", "negligent", "indifferent"], explanation: "The word 'dedicated' fits as it describes someone who is devoted to a task or purpose." },
    { context: "The ____ singer left the audience in awe with her performance.", correct: "talented", incorrect: ["unskilled", "mediocre", "inexperienced"], explanation: "The word 'talented' fits as it describes someone who has a natural aptitude or skill." },
    { context: "The ____ discovery revolutionized the field of physics.", correct: "groundbreaking", incorrect: ["insignificant", "ordinary", "trivial"], explanation: "The word 'groundbreaking' fits as it describes something that is new and a big change from other things of its type." },
    { context: "The ____ view from the skyscraper was breathtaking.", correct: "panoramic", incorrect: ["narrow", "dull", "restricted"], explanation: "The word 'panoramic' fits as it describes a view that is wide and expansive." },
    { context: "The ____ artist's work is displayed in museums around the world.", correct: "renowned", incorrect: ["unknown", "mediocre", "amateur"], explanation: "The word 'renowned' fits as it describes someone who is famous and respected for their talent." },
    { context: "The ____ chef created a meal that impressed all the guests.", correct: "acclaimed", incorrect: ["unskilled", "mediocre", "unknown"], explanation: "The word 'acclaimed' fits as it describes someone who is praised publicly for their achievements." },
    { context: "The ____ scientist won numerous awards for his research.", correct: "eminent", incorrect: ["unknown", "mediocre", "inexperienced"], explanation: "The word 'eminent' fits as it describes someone who is famous and respected within a particular sphere." },
    { context: "The ____ design of the building has won several awards.", correct: "innovative", incorrect: ["traditional", "conventional", "uninspired"], explanation: "The word 'innovative' fits as it describes something that introduces new ideas or methods." },
    { context: "The ____ actor gave a performance that received critical acclaim.", correct: "talented", incorrect: ["unskilled", "mediocre", "inexperienced"], explanation: "The word 'talented' fits as it describes someone who has a natural aptitude or skill." },
    { context: "The ____ performance of the team earned them a championship title.", correct: "stellar", incorrect: ["mediocre", "subpar", "average"], explanation: "The word 'stellar' fits as it describes something that is exceptionally good." },
    { context: "The ____ landscape was the subject of many famous paintings.", correct: "picturesque", incorrect: ["drab", "ugly", "unattractive"], explanation: "The word 'picturesque' fits as it describes something that is visually attractive, especially in a quaint or charming way." },
    { context: "The ____ musician played the concerto flawlessly.", correct: "virtuoso", incorrect: ["novice", "amateur", "mediocre"], explanation: "The word 'virtuoso' fits as it describes a person highly skilled in music or another artistic pursuit." },
    { context: "The ____ author was known for her prolific writing.", correct: "celebrated", incorrect: ["unknown", "unremarkable", "mediocre"], explanation: "The word 'celebrated' fits as it describes someone who is widely known and praised." },
    { context: "The ____ scientist's research led to a significant breakthrough.", correct: "brilliant", incorrect: ["average", "mediocre", "ordinary"], explanation: "The word 'brilliant' fits as it describes someone who is exceptionally talented or intelligent." },
    { context: "The ____ writer published several bestsellers over the years.", correct: "prolific", incorrect: ["unproductive", "inactive", "uninspired"], explanation: "The word 'prolific' fits as it describes someone who produces a lot of works or results." },
    { context: "The ____ view from the top of the hill was stunning.", correct: "panoramic", incorrect: ["limited", "narrow", "restricted"], explanation: "The word 'panoramic' fits as it describes a view that is wide and expansive." },
    { context: "The ____ of the product ensured its success in the market.", correct: "quality", incorrect: ["inferiority", "deficiency", "flaw"], explanation: "The word 'quality' fits as it describes the standard of something as measured against other things of a similar kind." },
    { context: "The ____ actor received numerous awards for his performances.", correct: "talented", incorrect: ["unskilled", "mediocre", "inexperienced"], explanation: "The word 'talented' fits as it describes someone who has a natural aptitude or skill." },
    { context: "The ____ team worked diligently to complete the project.", correct: "dedicated", incorrect: ["apathetic", "negligent", "indifferent"], explanation: "The word 'dedicated' fits as it describes someone who is devoted to a task or purpose." },
    { context: "The ____ artist's work has been exhibited internationally.", correct: "renowned", incorrect: ["unknown", "unrecognized", "mediocre"], explanation: "The word 'renowned' fits as it describes someone who is famous and respected for their talent." },
    { context: "The ____ engineer developed a new technology for renewable energy.", correct: "innovative", incorrect: ["traditional", "conventional", "routine"], explanation: "The word 'innovative' fits as it describes something that introduces new ideas or methods." },
    { context: "The ____ author's books are popular around the world.", correct: "prolific", incorrect: ["unproductive", "inactive", "uninspired"], explanation: "The word 'prolific' fits as it describes someone who produces a lot of works or results." },
    { context: "The ____ view from the balcony was mesmerizing.", correct: "panoramic", incorrect: ["restricted", "dull", "narrow"], explanation: "The word 'panoramic' fits as it describes a view that is wide and expansive." },
    { context: "The ____ discovery earned the scientist a Nobel Prize.", correct: "groundbreaking", incorrect: ["ordinary", "trivial", "insignificant"], explanation: "The word 'groundbreaking' fits as it describes something that is new and a big change from other things of its type." },
    { context: "The ____ chef's culinary creations are highly sought after.", correct: "talented", incorrect: ["unskilled", "mediocre", "inexperienced"], explanation: "The word 'talented' fits as it describes someone who has a natural aptitude or skill." },
    { context: "The ____ performance received rave reviews from critics.", correct: "stellar", incorrect: ["mediocre", "subpar", "average"], explanation: "The word 'stellar' fits as it describes something that is exceptionally good." },
    { context: "The ____ author has won several prestigious literary awards.", correct: "celebrated", incorrect: ["unknown", "unremarkable", "mediocre"], explanation: "The word 'celebrated' fits as it describes someone who is widely known and praised." },
    { context: "The ____ scientist's contributions have advanced the field significantly.", correct: "brilliant", incorrect: ["average", "mediocre", "ordinary"], explanation: "The word 'brilliant' fits as it describes someone who is exceptionally talented or intelligent." },
    { context: "The ____ landscape inspired many poets and painters.", correct: "picturesque", incorrect: ["drab", "ugly", "unattractive"], explanation: "The word 'picturesque' fits as it describes something that is visually attractive, especially in a quaint or charming way." },
    { context: "The ____ musician received a standing ovation for his performance.", correct: "virtuoso", incorrect: ["novice", "amateur", "mediocre"], explanation: "The word 'virtuoso' fits as it describes a person highly skilled in music or another artistic pursuit." },
    { context: "The ____ team's dedication resulted in a successful product launch.", correct: "dedicated", incorrect: ["apathetic", "negligent", "indifferent"], explanation: "The word 'dedicated' fits as it describes someone who is devoted to a task or purpose." },
    { context: "The ____ artist's latest exhibition was a resounding success.", correct: "renowned", incorrect: ["unknown", "mediocre", "novice"], explanation: "The word 'renowned' fits as it describes someone who is famous and respected for their talent." },
    { context: "The ____ discovery by the scientist paved the way for new technologies.", correct: "groundbreaking", incorrect: ["ordinary", "insignificant", "trivial"], explanation: "The word 'groundbreaking' fits as it describes something that is new and likely to have an effect on future events." },
    { context: "The ____ musician captivated the audience with his performance.", correct: "virtuoso", incorrect: ["novice", "amateur", "mediocre"], explanation: "The word 'virtuoso' fits as it describes a person highly skilled in music or another artistic pursuit." },
    { context: "The ____ view from the mountaintop was breathtaking.", correct: "panoramic", incorrect: ["restricted", "dull", "narrow"], explanation: "The word 'panoramic' fits as it describes a view that is wide and expansive." },
    { context: "The ____ chef's dishes are highly sought after.", correct: "talented", incorrect: ["unskilled", "mediocre", "inexperienced"], explanation: "The word 'talented' fits as it describes someone who has a natural aptitude or skill." },
    { context: "The ____ actor received critical acclaim for his role.", correct: "acclaimed", incorrect: ["unknown", "unrecognized", "mediocre"], explanation: "The word 'acclaimed' fits as it describes someone who is praised publicly for their achievements." },
    { context: "The ____ scientist made a significant impact on her field.", correct: "eminent", incorrect: ["unknown", "mediocre", "inexperienced"], explanation: "The word 'eminent' fits as it describes someone who is famous and respected within a particular sphere." },
    { context: "The ____ architect designed a building that won several awards.", correct: "innovative", incorrect: ["traditional", "conventional", "uninspired"], explanation: "The word 'innovative' fits as it describes something that introduces new ideas or methods." },
    { context: "The ____ performance by the team secured their victory.", correct: "stellar", incorrect: ["mediocre", "subpar", "average"], explanation: "The word 'stellar' fits as it describes something that is exceptionally good." },
    { context: "The ____ writer has published numerous bestsellers.", correct: "prolific", incorrect: ["unproductive", "inactive", "uninspired"], explanation: "The word 'prolific' fits as it describes someone who produces a lot of works or results." },
    { context: "The ____ landscape inspired countless artists and writers.", correct: "picturesque", incorrect: ["drab", "ugly", "unattractive"], explanation: "The word 'picturesque' fits as it describes something that is visually attractive, especially in a quaint or charming way." },
    { context: "The ____ scientist's research led to a major breakthrough.", correct: "brilliant", incorrect: ["average", "mediocre", "ordinary"], explanation: "The word 'brilliant' fits as it describes someone who is exceptionally talented or intelligent." },
    { context: "The ____ author's work has been translated into several languages.", correct: "celebrated", incorrect: ["unknown", "unremarkable", "mediocre"], explanation: "The word 'celebrated' fits as it describes someone who is widely known and praised." },
    { context: "The ____ engineer developed a new method for reducing emissions.", correct: "innovative", incorrect: ["traditional", "conventional", "routine"], explanation: "The word 'innovative' fits as it describes something that introduces new ideas or methods." },
    { context: "The ____ athlete set a new world record in the marathon.", correct: "exceptional", incorrect: ["average", "mediocre", "ordinary"], explanation: "The word 'exceptional' fits as it describes someone who is outstanding and remarkable." },
    { context: "The ____ professor's lectures were always engaging and informative.", correct: "brilliant", incorrect: ["dull", "uninspired", "mediocre"], explanation: "The word 'brilliant' fits as it describes someone who is exceptionally talented or intelligent." },
    { context: "The ____ singer's performance left the audience spellbound.", correct: "talented", incorrect: ["unskilled", "mediocre", "inexperienced"], explanation: "The word 'talented' fits as it describes someone who has a natural aptitude or skill." },
    { context: "The ____ decision by the CEO saved the company from bankruptcy.", correct: "strategic", incorrect: ["reckless", "negligent", "careless"], explanation: "The word 'strategic' fits as it describes something that is planned or designed to achieve a particular goal." },
    { context: "The ____ artist's paintings are exhibited in galleries worldwide.", correct: "renowned", incorrect: ["unknown", "unrecognized", "amateur"], explanation: "The word 'renowned' fits as it describes someone who is famous and respected for their talent." },
    { context: "The ____ chef's restaurant received a Michelin star.", correct: "acclaimed", incorrect: ["unknown", "unrecognized", "mediocre"], explanation: "The word 'acclaimed' fits as it describes someone who is praised publicly for their achievements." },
    { context: "The ____ scientist's work has had a lasting impact on the field.", correct: "eminent", incorrect: ["unknown", "mediocre", "inexperienced"], explanation: "The word 'eminent' fits as it describes someone who is famous and respected within a particular sphere." },
    { context: "The ____ performance by the orchestra received a standing ovation.", correct: "stellar", incorrect: ["mediocre", "subpar", "average"], explanation: "The word 'stellar' fits as it describes something that is exceptionally good." },
    { context: "The ____ writer has a large following of dedicated readers.", correct: "prolific", incorrect: ["unproductive", "inactive", "uninspired"], explanation: "The word 'prolific' fits as it describes someone who produces a lot of works or results." },
    { context: "The ____ landscape was perfect for a postcard.", correct: "picturesque", incorrect: ["drab", "ugly", "unattractive"], explanation: "The word 'picturesque' fits as it describes something that is visually attractive, especially in a quaint or charming way." },
    { context: "The ____ scientist made several important discoveries during his career.", correct: "brilliant", incorrect: ["average", "mediocre", "ordinary"], explanation: "The word 'brilliant' fits as it describes someone who is exceptionally talented or intelligent." },
    { context: "The ____ author's books have been translated into many languages.", correct: "celebrated", incorrect: ["unknown", "unremarkable", "mediocre"], explanation: "The word 'celebrated' fits as it describes someone who is widely known and praised." },
    { context: "The ____ engineer's design improved the efficiency of the machine.", correct: "innovative", incorrect: ["traditional", "conventional", "routine"], explanation: "The word 'innovative' fits as it describes something that introduces new ideas or methods." },
    { context: "The ____ athlete's performance was the highlight of the event.", correct: "exceptional", incorrect: ["average", "mediocre", "ordinary"], explanation: "The word 'exceptional' fits as it describes someone who is outstanding and remarkable." },
    { context: "The ____ professor was respected by students and colleagues alike.", correct: "eminent", incorrect: ["unknown", "mediocre", "inexperienced"], explanation: "The word 'eminent' fits as it describes someone who is famous and respected within a particular sphere." },
    { context: "The ____ view from the hill was absolutely stunning.", correct: "panoramic", incorrect: ["restricted", "dull", "narrow"], explanation: "The word 'panoramic' fits as it describes a view that is wide and expansive." },
    { context: "The ____ chef created a dish that delighted all the guests.", correct: "talented", incorrect: ["unskilled", "mediocre", "inexperienced"], explanation: "The word 'talented' fits as it describes someone who has a natural aptitude or skill." }
            
];

let usedContextIndexes = [];

document.addEventListener('DOMContentLoaded', () => {
    loadContextQuestion();
});

function loadContextQuestion() {
    let currentContextQuestionIndex;

    if (usedContextIndexes.length === vocabContextList.length) {
        usedContextIndexes = [];
    }

    do {
        currentContextQuestionIndex = Math.floor(Math.random() * vocabContextList.length);
    } while (usedContextIndexes.includes(currentContextQuestionIndex));

    usedContextIndexes.push(currentContextQuestionIndex);

    const question = vocabContextList[currentContextQuestionIndex];
    document.getElementById('context-vocab-context').textContent = question.context;
    
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

function checkContextAnswer(button) {
    const question = vocabContextList[usedContextIndexes[usedContextIndexes.length - 1]];
    if (button.textContent === question.correct) {
        button.classList.add('correct');
    } else {
        button.classList.add('incorrect');
    }
    
    setTimeout(() => {
        showContextExplanation(question);
    }, 1500);
}

function showContextExplanation(question) {
    const explanationPage = `
        <header>
            <nav>
                <ul>
                    <li><a href="index.html">Home</a></li>
                    <li class="dropdown">
                        <a href="games.html" class="dropbtn">Games</a>
                        <div class="dropdown-content">
                            <a href="vocab-def.html">SAT Vocab MCQ</a>
                            <a href="vocab-context.html">SAT Vocab Context MCQ</a>
                            <a href="reading-easy.html">SAT Reading (Easy)</a>
                            <a href="reading-normal.html">SAT Reading (Normal)</a>
                        </div>
                    </li>
                </ul>
            </nav>
            <h1>Vocab Context Explanation</h1>
        </header>
        <main id="games-content">
            <section id="sat-vocab-context-mcq">
                <div id="explanation">
                    <h2>${question.context}</h2>
                    <p>Explanation: ${question.explanation}</p>
                    <p>Correct Answer: ${question.correct}</p>
                    <button onclick="nextContextQuestion()">Next</button>
                </div>
            </section>
        </main>
        <footer>
            <p>&copy; 2024 Created by Shufan Dong</p>
        </footer>
    `;

    document.body.innerHTML = explanationPage;
}

function nextContextQuestion() {
    document.location.reload();
}