export const chatbotContext: Array<{ question: string; answer: string }> = [
    {
      question: "What is Sameer's main programming language?",
      answer: "Sameer's main programming language is Python, but he is also proficient in JavaScript, C++, and R."
    },
    {
      question: "Where does Sameer currently study?",
      answer: "Sameer is currently a BSc Data Science student at University College London (UCL), expected to graduate with a High First Class Honors in July 2027."
    },
    {
      question: "What academic achievements has Sameer accomplished?",
      answer: "Sameer achieved 5 A* grades in A-levels (top 0.0001% in country), is a UCL Global Undergraduate Scholar with a £112,500 scholarship, and maintains First Class Honors at UCL."
    },
    {
      question: "What is Sameer's role at UCL Data Science Society?",
      answer: "Sameer is the Vice President of UCL Data Science Society, where he designs and delivers machine learning tutorials, initiated the Data Digest series on Instagram, and supports event organization."
    },
    {
      question: "What skills does Sameer have?",
      answer: "Sameer is proficient in Python (Pandas, NumPy, Scikit-learn, TensorFlow, PyTorch, Hugging Face), SQL, R, web development (HTML, CSS, JavaScript, React), data visualization (Matplotlib, Seaborn, Tableau), and tools like Git, LangChain, and CrewAI."
    },
    {
      question: "What machine learning projects has Sameer worked on?",
      answer: "Sameer has built a facial recognition system (80%+ accuracy), credit card approval predictor (75%+ accuracy), brain tumor classification with CNN (96%+ accuracy), and an automated insight engine using CrewAI and LangChain."
    },
    {
      question: "What certifications does Sameer hold?",
      answer: "Sameer holds certifications including Stanford's Machine Learning course, DataCamp Data Analyst certification, Google Data Analytics Professional Certificate, and various programming certifications from Coursera and freeCodeCamp."
    },
    {
      question: "What work experience does Sameer have?",
      answer: "Sameer has worked as a Data Analyst at Headstart Global, Software Engineer Intern at WeMakeApp, and held various roles including teaching assistant, project manager, and sales marketing manager across different organizations."
    },
    {
      question: "What awards and scholarships has Sameer received?",
      answer: "Sameer received the UCL Global Undergraduate Scholar award (£112,500), 135% Undergraduate Scholarship from HKUST (~$1M HKD), Academic Distinction with Highest Honor, and ranked 7th nationally in International Kangaroo Math competition."
    },
    {
      question: "What programming languages and frameworks does Sameer use?",
      answer: "Sameer uses Python, JavaScript, TypeScript, R, SQL, C++, and frameworks like React, TensorFlow, PyTorch, Scikit-learn, LangChain, CrewAI, and Hugging Face Transformers."
    },
    {
      question: "What data science projects has Sameer completed?",
      answer: "Sameer has completed projects including customer analytics optimization (96.5% memory reduction), soccer match hypothesis testing, stock evaluation system with LangGraph, and semantic book recommender with LLMs."
    },
    {
      question: "What leadership roles has Sameer held?",
      answer: "Sameer has served as Vice President of UCL Data Science Society, Chief Human Resources Officer at Nixor Engineering Solutions, Project Manager at Nixor Financial Services, and Senior Further Mathematics Teaching Assistant."
    },
    {
      question: "What is Sameer's educational background?",
      answer: "Sameer is pursuing BSc Data Science at UCL (2024-2027), previously studied Computer Engineering at HKUST (2023-2024), completed A-levels at Nixor College with 5A* grades, and O-levels at Credo School with 9A* grades."
    },
    {
      question: "What volunteer and extracurricular activities is Sameer involved in?",
      answer: "Sameer is a UCL Welcome Ambassador, Graduation Brand Ambassador, Transition Mentor, and volunteers for causes including education, science and technology, human rights, and child welfare."
    },
    {
      question: "What specific machine learning techniques has Sameer used?",
      answer: "Sameer has experience with supervised learning, deep learning, CNN architectures, time-series forecasting (ARIMA, LSTM), clustering, computer vision, facial recognition, and natural language processing with LLMs."
    },
    {
      question: "What teaching experience does Sameer have?",
      answer: "Sameer taught and mentored over 250 students as Senior Further Mathematics Teaching Assistant at Nixor College, dedicating 100+ official hours and 500+ unofficial hours across five A-level subjects."
    },
    {
      question: "What business and entrepreneurial experience does Sameer have?",
      answer: "Sameer managed over 15 financial literacy projects, organized entrepreneurial competitions with 30 teams, worked in sales marketing, and conducted market research analyzing 40+ data providers."
    },
    {
      question: "What web development skills does Sameer possess?",
      answer: "Sameer is skilled in HTML, CSS, JavaScript, TypeScript, React.js, Tailwind CSS, responsive web design, and has experience collaborating with designers using Figma to optimize user experience."
    },
    {
      question: "What data visualization tools does Sameer use?",
      answer: "Sameer uses Matplotlib, Seaborn, Tableau, Plotly, Excel for data visualization, and has experience creating interactive dashboards and reports for stakeholders."
    },
    {
      question: "What is Sameer's approach to problem-solving?",
      answer: "Sameer combines strong analytical skills with practical application, focusing on leveraging data to solve real-world problems, continuous learning, and making tangible impact through data-driven solutions."
    },
    {
      question: "What industries has Sameer worked in?",
      answer: "Sameer has worked across education, technology, finance, healthcare (data analysis), and consulting sectors, with experience in both startups and established organizations."
    },
    {
      question: "What software development practices does Sameer follow?",
      answer: "Sameer follows best practices including code reviews, unit testing, maintaining clean Git commit history, and has experience reducing defects by 15% and improving UI responsiveness by 25%."
    },
    {
      question: "What research and analytical skills does Sameer have?",
      answer: "Sameer has strong research skills including market research, statistical analysis, hypothesis testing, data preprocessing, and has experience analyzing large datasets with advanced statistical methods."
    },
    {
      question: "What AI and machine learning frameworks does Sameer specialize in?",
      answer: "Sameer specializes in TensorFlow, PyTorch, Scikit-learn, Hugging Face Transformers, LangChain, CrewAI, and has experience building end-to-end ML pipelines and multi-agent systems."
    },
    {
      question: "What communication and presentation skills does Sameer have?",
      answer: "Sameer has strong communication skills demonstrated through teaching, presenting at competitions, creating educational content, and effectively communicating technical concepts to diverse audiences."
    }
];

// Enhanced keyword matching system
interface MatchResult {
    item: typeof chatbotContext[0];
    score: number;
    matchedKeywords: string[];
    matchType: 'exact' | 'fuzzy' | 'synonym';
}

// Synonym mapping for better matching
const synonymMap: Record<string, string[]> = {
    'programming': ['coding', 'development', 'software', 'tech'],
    'languages': ['code', 'programming', 'coding'],
    'education': ['school', 'study', 'academic', 'university', 'college'],
    'experience': ['work', 'job', 'career', 'employment'],
    'skills': ['abilities', 'expertise', 'proficiency', 'knowledge'],
    'projects': ['work', 'portfolio', 'development', 'builds'],
    'machine learning': ['ml', 'ai', 'artificial intelligence', 'deep learning'],
    'data science': ['analytics', 'data analysis', 'statistics'],
    'certifications': ['certificates', 'credentials', 'qualifications'],
    'achievements': ['accomplishments', 'awards', 'recognition'],
    'frameworks': ['libraries', 'tools', 'technologies'],
    'leadership': ['management', 'lead', 'managing', 'head'],
    'teaching': ['mentoring', 'tutoring', 'education', 'instruction'],
    'web development': ['frontend', 'backend', 'web dev', 'website'],
    'visualization': ['charts', 'graphs', 'plotting', 'visual'],
    'business': ['entrepreneurial', 'startup', 'commercial', 'enterprise']
};

// Calculate Levenshtein distance for fuzzy matching
function levenshteinDistance(str1: string, str2: string): number {
    const matrix = Array(str2.length + 1).fill(null).map(() => Array(str1.length + 1).fill(null));
    
    for (let i = 0; i <= str1.length; i++) matrix[0][i] = i;
    for (let j = 0; j <= str2.length; j++) matrix[j][0] = j;
    
    for (let j = 1; j <= str2.length; j++) {
        for (let i = 1; i <= str1.length; i++) {
            const indicator = str1[i - 1] === str2[j - 1] ? 0 : 1;
            matrix[j][i] = Math.min(
                matrix[j][i - 1] + 1,
                matrix[j - 1][i] + 1,
                matrix[j - 1][i - 1] + indicator
            );
        }
    }
    
    return matrix[str2.length][str1.length];
}

// Check if two words are similar using fuzzy matching
function isFuzzyMatch(word1: string, word2: string, threshold: number = 0.8): boolean {
    const maxLength = Math.max(word1.length, word2.length);
    const distance = levenshteinDistance(word1.toLowerCase(), word2.toLowerCase());
    const similarity = (maxLength - distance) / maxLength;
    return similarity >= threshold;
}

// Get synonyms for a word
function getSynonyms(word: string): string[] {
    const lowerWord = word.toLowerCase();
    for (const [key, synonyms] of Object.entries(synonymMap)) {
        if (key === lowerWord || synonyms.includes(lowerWord)) {
            return [key, ...synonyms];
        }
    }
    return [word];
}

// Extract keywords from text
function extractKeywords(text: string): string[] {
    const stopWords = new Set(['the', 'is', 'at', 'which', 'on', 'a', 'an', 'and', 'or', 'but', 'in', 'with', 'to', 'for', 'of', 'as', 'by', 'that', 'this', 'it', 'from', 'they', 'we', 'say', 'her', 'she', 'he', 'has', 'had', 'what', 'where', 'when', 'how', 'why', 'who', 'does', 'do', 'did', 'will', 'would', 'could', 'should', 'may', 'might', 'must', 'can', 'his', 'hers', 'yours', 'theirs', 'ours', 'mine']);
    
    return text
        .toLowerCase()
        .replace(/[^\w\s]/g, ' ')
        .split(/\s+/)
        .filter(word => word.length > 2 && !stopWords.has(word))
        .filter(word => word.trim() !== '');
}

// Calculate match score between query and context item
function calculateMatchScore(queryKeywords: string[], contextText: string): MatchResult {
    const contextKeywords = extractKeywords(contextText);
    const contextWords = contextText.toLowerCase().split(/\s+/);
    
    let score = 0;
    const matchedKeywords: string[] = [];
    let matchType: 'exact' | 'fuzzy' | 'synonym' = 'exact';
    
    for (const queryWord of queryKeywords) {
        let wordMatched = false;
        
        // 1. Exact match (highest priority)
        if (contextWords.some(word => word.includes(queryWord.toLowerCase()))) {
            score += 10;
            matchedKeywords.push(queryWord);
            wordMatched = true;
        }
        
        // 2. Fuzzy match
        if (!wordMatched) {
            for (const contextWord of contextKeywords) {
                if (isFuzzyMatch(queryWord, contextWord, 0.8)) {
                    score += 7;
                    matchedKeywords.push(queryWord);
                    matchType = 'fuzzy';
                    wordMatched = true;
                    break;
                }
            }
        }
        
        // 3. Synonym match
        if (!wordMatched) {
            const synonyms = getSynonyms(queryWord);
            for (const synonym of synonyms) {
                if (contextWords.some(word => word.includes(synonym.toLowerCase()))) {
                    score += 5;
                    matchedKeywords.push(queryWord);
                    matchType = 'synonym';
                    wordMatched = true;
                    break;
                }
            }
        }
        
        // 4. Partial match (substring)
        if (!wordMatched) {
            for (const contextWord of contextWords) {
                if (contextWord.length > 4 && (
                    contextWord.includes(queryWord.toLowerCase()) || 
                    queryWord.toLowerCase().includes(contextWord)
                )) {
                    score += 3;
                    matchedKeywords.push(queryWord);
                    wordMatched = true;
                    break;
                }
            }
        }
    }
    
    // Bonus for multiple matches
    if (matchedKeywords.length > 1) {
        score += matchedKeywords.length * 2;
    }
    
    // Bonus for exact phrase matches
    const queryText = queryKeywords.join(' ').toLowerCase();
    if (contextText.toLowerCase().includes(queryText)) {
        score += 15;
    }
    
    return {
        item: null as any, // Will be set by caller
        score,
        matchedKeywords,
        matchType
    };
}

// Main search function with enhanced keyword matching
export function searchChatbotContext(query: string, maxResults: number = 3): MatchResult[] {
    const queryKeywords = extractKeywords(query);
    
    if (queryKeywords.length === 0) {
        return [];
    }
    
    const results: MatchResult[] = [];
    
    for (const item of chatbotContext) {
        const questionMatch = calculateMatchScore(queryKeywords, item.question);
        const answerMatch = calculateMatchScore(queryKeywords, item.answer);
        
        // Use the better score between question and answer
        const bestMatch = questionMatch.score >= answerMatch.score ? questionMatch : answerMatch;
        bestMatch.item = item;
        
        // Only include results with a meaningful score
        if (bestMatch.score > 0) {
            results.push(bestMatch);
        }
    }
    
    // Sort by score (descending) and return top results
    return results
        .sort((a, b) => b.score - a.score)
        .slice(0, maxResults);
}

// Utility function to get the best answer for a query
export function getBestAnswer(query: string): string {
    const results = searchChatbotContext(query, 1);
    
    if (results.length === 0) {
        return "I'm sorry, I couldn't find relevant information about that topic. Could you please rephrase your question or ask about Sameer's education, skills, experience, or projects?";
    }
    
    const bestMatch = results[0];
    const confidence = Math.min(bestMatch.score / 20, 1); // Normalize confidence
    
    if (confidence < 0.3) {
        return `I found some potentially relevant information, but I'm not very confident about the match. Here's what I found: ${bestMatch.item.answer}`;
    }
    
    return bestMatch.item.answer;
}

// Advanced search with context and follow-up suggestions
export function searchWithContext(query: string): {
    answer: string;
    confidence: number;
    matchedKeywords: string[];
    suggestions: string[];
} {
    const results = searchChatbotContext(query, 3);
    
    if (results.length === 0) {
        return {
            answer: "I couldn't find specific information about that. Could you ask about Sameer's education, programming skills, projects, or work experience?",
            confidence: 0,
            matchedKeywords: [],
            suggestions: [
                "What programming languages does Sameer know?",
                "Where does Sameer study?",
                "What projects has Sameer worked on?",
                "What is Sameer's work experience?"
            ]
        };
    }
    
    const bestMatch = results[0];
    const confidence = Math.min(bestMatch.score / 20, 1);
    
    // Generate suggestions based on related topics
    const suggestions: string[] = [];
    const relatedTopics = results.slice(1, 3).map(r => r.item.question);
    suggestions.push(...relatedTopics);
    
    return {
        answer: bestMatch.item.answer,
        confidence,
        matchedKeywords: bestMatch.matchedKeywords,
        suggestions: suggestions.slice(0, 3)
    };
}

// Example usage:
console.log("=== Testing Enhanced Keyword Matching ===");

// Test various queries
const testQueries = [
    "What coding languages does Sameer know?",
    "Where does he study?",
    "Machine learning projects",
    "AI frameworks",
    "Leadership experience",
    "Scholarships and awards",
    "Web dev skills",
    "Data viz tools"
];

testQueries.forEach(query => {
    console.log(`\nQuery: "${query}"`);
    const result = searchWithContext(query);
    console.log(`Confidence: ${(result.confidence * 100).toFixed(1)}%`);
    console.log(`Matched Keywords: ${result.matchedKeywords.join(', ')}`);
    console.log(`Answer: ${result.answer.substring(0, 100)}...`);
});