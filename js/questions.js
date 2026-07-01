/**
 * ============================================================
 * AIT EXAM 2026 - Question Bank (100 MCQs)
 * Topics: Basic Programming, Accounting, History, General Knowledge
 * Hard Questions: 30 | Easy-Medium: 70
 * Exam Time: 55 Minutes
 * File: js/questions.js
 * ============================================================
 * _c encoding: 'a'=1st option, 'b'=2nd, 'c'=3rd, 'd'=4th
 */

'use strict';

const QUESTION_BANK = [

  // ============================================================
  // BASIC PROGRAMMING (25 Questions)
  // ============================================================
  {
    id: 1, subject: '💻 Programming',
    text: 'What does HTML stand for?',
    options: ['Hyper Text Markup Language', 'High Tech Modern Language', 'Hyper Transfer Markup Logic', 'Home Tool Markup Language'],
    _c: 'a'
  },
  {
    id: 2, subject: '💻 Programming',
    text: 'Which symbol is used for single-line comments in Python?',
    options: ['//', '/* */', '#', '--'],
    _c: 'c'
  },
  {
    id: 3, subject: '💻 Programming',
    text: 'What is the output of: print(10 % 3) in Python?',
    options: ['3', '1', '0', '2'],
    _c: 'b'
  },
  {
    id: 4, subject: '💻 Programming',
    text: 'Which data structure follows FIFO (First In First Out) principle?',
    options: ['Stack', 'Queue', 'Tree', 'Graph'],
    _c: 'b'
  },
  {
    id: 5, subject: '💻 Programming',
    text: 'What does CSS stand for?',
    options: ['Computer Style Sheets', 'Creative Style System', 'Cascading Style Sheets', 'Colorful Style Sheets'],
    _c: 'c'
  },
  {
    id: 6, subject: '💻 Programming',
    text: 'In programming, what is a "loop"?',
    options: ['A type of variable', 'A code that repeats until a condition is met', 'A function that returns a value', 'A way to store data'],
    _c: 'b'
  },
  {
    id: 7, subject: '💻 Programming',
    text: 'Which keyword is used to define a function in Python?',
    options: ['func', 'function', 'define', 'def'],
    _c: 'd'
  },
  {
    id: 8, subject: '💻 Programming',
    text: 'What is the correct way to declare a variable in JavaScript?',
    options: ['variable x = 5', 'var x = 5', 'int x = 5', 'declare x = 5'],
    _c: 'b'
  },
  {
    id: 9, subject: '💻 Programming',
    text: 'What does SQL stand for?',
    options: ['Simple Query Language', 'Structured Query Language', 'Standard Query Logic', 'Sequential Query Language'],
    _c: 'b'
  },
  {
    id: 10, subject: '💻 Programming',
    text: 'Which of the following is NOT a programming language?',
    options: ['Python', 'Java', 'Microsoft Word', 'C++'],
    _c: 'c'
  },
  {
    id: 11, subject: '💻 Programming',
    text: 'What is a "variable" in programming?',
    options: ['A fixed constant value', 'A named memory location to store data', 'A type of loop', 'A database table'],
    _c: 'b'
  },
  {
    id: 12, subject: '💻 Programming',
    text: 'Which HTML tag creates a hyperlink?',
    options: ['&lt;link&gt;', '&lt;href&gt;', '&lt;a&gt;', '&lt;url&gt;'],
    _c: 'c'
  },
  {
    id: 13, subject: '💻 Programming',
    text: 'What is the binary representation of the decimal number 10?',
    options: ['1010', '1100', '1001', '0110'],
    _c: 'a'
  },
  {
    id: 14, subject: '💻 Programming',
    text: 'Which of the following is an example of an OOP concept?',
    options: ['Variable declaration', 'Inheritance', 'Loop execution', 'File reading'],
    _c: 'b'
  },
  {
    id: 15, subject: '💻 Programming',
    text: 'What does "RAM" stand for in computers?',
    options: ['Read Access Memory', 'Random Access Memory', 'Rapid Access Module', 'Runtime Access Memory'],
    _c: 'b'
  },
  // HARD Programming Questions
  {
    id: 16, subject: '💻 Programming ⭐Hard',
    text: 'What is the time complexity of Binary Search algorithm?',
    options: ['O(n)', 'O(n²)', 'O(log n)', 'O(n log n)'],
    _c: 'c'
  },
  {
    id: 17, subject: '💻 Programming ⭐Hard',
    text: 'In Python, what is the output of: list(map(lambda x: x**2, [1,2,3]))?',
    options: ['[1, 4, 9]', '[2, 4, 6]', '[1, 2, 3]', '[3, 6, 9]'],
    _c: 'a'
  },
  {
    id: 18, subject: '💻 Programming ⭐Hard',
    text: 'What is a "deadlock" in operating systems?',
    options: ['When a program runs too fast', 'When two or more processes wait forever for each other to release resources', 'When memory is full', 'When CPU overheats'],
    _c: 'b'
  },
  {
    id: 19, subject: '💻 Programming ⭐Hard',
    text: 'Which sorting algorithm has the best average-case time complexity?',
    options: ['Bubble Sort - O(n²)', 'Selection Sort - O(n²)', 'Quick Sort - O(n log n)', 'Insertion Sort - O(n²)'],
    _c: 'c'
  },
  {
    id: 20, subject: '💻 Programming ⭐Hard',
    text: 'What does the "git rebase" command do?',
    options: ['Deletes the repository', 'Moves or combines commits to a new base commit', 'Creates a new branch', 'Merges two repositories'],
    _c: 'b'
  },
  {
    id: 21, subject: '💻 Programming ⭐Hard',
    text: 'In object-oriented programming, what is "polymorphism"?',
    options: ['Hiding class data from outside', 'Using one interface for different data types', 'Copying one class to another', 'Breaking code into modules'],
    _c: 'b'
  },
  {
    id: 22, subject: '💻 Programming ⭐Hard',
    text: 'What is the difference between "==" and "===" in JavaScript?',
    options: [
      'No difference',
      '== checks value only; === checks value AND type',
      '=== checks value only; == checks type',
      '== is for numbers; === is for strings'
    ],
    _c: 'b'
  },
  {
    id: 23, subject: '💻 Programming ⭐Hard',
    text: 'What is a "REST API"?',
    options: [
      'A sleeping computer program',
      'An architectural style for designing networked applications using HTTP',
      'A type of database',
      'A programming language'
    ],
    _c: 'b'
  },
  {
    id: 24, subject: '💻 Programming ⭐Hard',
    text: 'What does "normalization" mean in databases?',
    options: [
      'Making all values equal',
      'Organizing data to reduce redundancy and improve integrity',
      'Deleting duplicate rows',
      'Converting text to numbers'
    ],
    _c: 'b'
  },
  {
    id: 25, subject: '💻 Programming ⭐Hard',
    text: 'What is "Big O notation" used for?',
    options: [
      'Writing large numbers',
      'Describing the performance/complexity of an algorithm',
      'Measuring internet speed',
      'Defining variable size'
    ],
    _c: 'b'
  },

  // ============================================================
  // ACCOUNTING (25 Questions)
  // ============================================================
  {
    id: 26, subject: '📊 Accounting',
    text: 'What is the basic accounting equation?',
    options: ['Assets = Liabilities + Equity', 'Assets = Revenue - Expenses', 'Profit = Assets - Liabilities', 'Capital = Assets + Liabilities'],
    _c: 'a'
  },
  {
    id: 27, subject: '📊 Accounting',
    text: 'What does "debit" mean in accounting?',
    options: ['Money going out of bank', 'Left side of an account entry', 'A type of loan', 'Interest earned'],
    _c: 'b'
  },
  {
    id: 28, subject: '📊 Accounting',
    text: 'What is a "Balance Sheet"?',
    options: [
      'A sheet that balances income and expenses',
      'A financial statement showing assets, liabilities, and equity at a point in time',
      'A list of all transactions',
      'A report of monthly sales'
    ],
    _c: 'b'
  },
  {
    id: 29, subject: '📊 Accounting',
    text: 'GST stands for?',
    options: ['General Sales Tax', 'Goods and Services Tax', 'Government Service Tax', 'General Service Transfer'],
    _c: 'b'
  },
  {
    id: 30, subject: '📊 Accounting',
    text: 'What is "depreciation" in accounting?',
    options: [
      'An increase in asset value',
      'The reduction in value of an asset over time',
      'A type of tax',
      'Monthly salary expense'
    ],
    _c: 'b'
  },
  {
    id: 31, subject: '📊 Accounting',
    text: 'What is a "Profit and Loss Statement"?',
    options: [
      'A report of assets and liabilities',
      'A financial report showing revenues and expenses over a period',
      'A bank statement',
      'A tax return document'
    ],
    _c: 'b'
  },
  {
    id: 32, subject: '📊 Accounting',
    text: 'Which software is most commonly used for accounting in India?',
    options: ['MS Excel only', 'Tally ERP', 'Photoshop', 'AutoCAD'],
    _c: 'b'
  },
  {
    id: 33, subject: '📊 Accounting',
    text: 'What is "working capital"?',
    options: [
      'Total capital of the company',
      'Current Assets minus Current Liabilities',
      'Annual revenue of business',
      'Fixed assets of company'
    ],
    _c: 'b'
  },
  {
    id: 34, subject: '📊 Accounting',
    text: 'What does "TDS" stand for in Indian taxation?',
    options: ['Tax Deducted at Source', 'Total Deduction System', 'Tax During Sale', 'Transfer Deduction Service'],
    _c: 'a'
  },
  {
    id: 35, subject: '📊 Accounting',
    text: 'In double-entry bookkeeping, every transaction affects at least:',
    options: ['One account', 'Two accounts', 'Three accounts', 'Four accounts'],
    _c: 'b'
  },
  {
    id: 36, subject: '📊 Accounting',
    text: 'What is "accounts payable"?',
    options: ['Money customers owe the company', 'Money the company owes to suppliers', 'Employee salaries', 'Bank loans'],
    _c: 'b'
  },
  {
    id: 37, subject: '📊 Accounting',
    text: 'What is the current GST rate for most goods in India?',
    options: ['5%', '12%', '18%', '28%'],
    _c: 'c'
  },
  {
    id: 38, subject: '📊 Accounting',
    text: 'What is "cash flow"?',
    options: [
      'Total profit of company',
      'Movement of money into and out of a business',
      'Bank account balance',
      'Annual revenue'
    ],
    _c: 'b'
  },
  {
    id: 39, subject: '📊 Accounting',
    text: 'What does "audit" mean?',
    options: [
      'Selling company assets',
      'An official examination and verification of financial accounts',
      'Paying company taxes',
      'Creating a budget'
    ],
    _c: 'b'
  },
  {
    id: 40, subject: '📊 Accounting',
    text: 'Which of the following is a current asset?',
    options: ['Land', 'Building', 'Cash and Bank Balance', 'Machinery'],
    _c: 'c'
  },
  // HARD Accounting Questions
  {
    id: 41, subject: '📊 Accounting ⭐Hard',
    text: 'A company buys machinery for ₹5,00,000 with 20% depreciation per year (Straight Line Method). What is the depreciation amount per year?',
    options: ['₹50,000', '₹1,00,000', '₹80,000', '₹1,50,000'],
    _c: 'b'
  },
  {
    id: 42, subject: '📊 Accounting ⭐Hard',
    text: 'If Revenue = ₹10,00,000 and Total Expenses = ₹7,50,000, what is the Net Profit?',
    options: ['₹17,50,000', '₹2,00,000', '₹2,50,000', '₹3,00,000'],
    _c: 'c'
  },
  {
    id: 43, subject: '📊 Accounting ⭐Hard',
    text: 'What is the "acid test ratio" (Quick Ratio)?',
    options: [
      'Total Assets / Total Liabilities',
      '(Current Assets - Inventory) / Current Liabilities',
      'Net Profit / Revenue × 100',
      'Total Revenue / Total Expenses'
    ],
    _c: 'b'
  },
  {
    id: 44, subject: '📊 Accounting ⭐Hard',
    text: 'Under FIFO method, if 100 units bought at ₹10 and 200 units at ₹12, and 150 units are sold — what is the cost of goods sold?',
    options: ['₹1,600', '₹1,700', '₹1,500', '₹1,800'],
    _c: 'b'
  },
  {
    id: 45, subject: '📊 Accounting ⭐Hard',
    text: 'What is "deferred tax liability"?',
    options: [
      'Tax paid in advance',
      'Future tax obligation arising from temporary differences between accounting and tax rules',
      'Tax that is written off',
      'GST refund pending'
    ],
    _c: 'b'
  },

  // ============================================================
  // HISTORY (25 Questions)
  // ============================================================
  {
    id: 46, subject: '🏛️ History',
    text: 'Who was the first Prime Minister of India?',
    options: ['Mahatma Gandhi', 'Sardar Patel', 'Jawaharlal Nehru', 'Dr. B.R. Ambedkar'],
    _c: 'c'
  },
  {
    id: 47, subject: '🏛️ History',
    text: 'In which year did India gain independence?',
    options: ['1945', '1947', '1950', '1942'],
    _c: 'b'
  },
  {
    id: 48, subject: '🏛️ History',
    text: 'Who wrote the Indian National Anthem "Jana Gana Mana"?',
    options: ['Bankim Chandra Chatterjee', 'Rabindranath Tagore', 'Sarojini Naidu', 'Subramanya Bharati'],
    _c: 'b'
  },
  {
    id: 49, subject: '🏛️ History',
    text: 'The Battle of Plassey was fought in which year?',
    options: ['1757', '1857', '1747', '1857'],
    _c: 'a'
  },
  {
    id: 50, subject: '🏛️ History',
    text: 'Which movement did Mahatma Gandhi launch in 1942?',
    options: ['Non-Cooperation Movement', 'Civil Disobedience Movement', 'Quit India Movement', 'Swadeshi Movement'],
    _c: 'c'
  },
  {
    id: 51, subject: '🏛️ History',
    text: 'Who is known as the "Iron Man of India"?',
    options: ['Jawaharlal Nehru', 'Bhagat Singh', 'Sardar Vallabhbhai Patel', 'Subhas Chandra Bose'],
    _c: 'c'
  },
  {
    id: 52, subject: '🏛️ History',
    text: 'The Indian Constitution came into effect on which date?',
    options: ['15 August 1947', '26 January 1950', '26 November 1949', '2 October 1950'],
    _c: 'b'
  },
  {
    id: 53, subject: '🏛️ History',
    text: 'Who founded the Mughal Empire in India?',
    options: ['Akbar', 'Babur', 'Humayun', 'Aurangzeb'],
    _c: 'b'
  },
  {
    id: 54, subject: '🏛️ History',
    text: 'The Dandi March (Salt Satyagraha) was conducted in which year?',
    options: ['1920', '1925', '1930', '1935'],
    _c: 'c'
  },
  {
    id: 55, subject: '🏛️ History',
    text: 'Which ancient civilization built the Indus Valley cities of Mohenjo-daro and Harappa?',
    options: ['Vedic civilization', 'Dravidian civilization', 'Indus Valley civilization', 'Aryan civilization'],
    _c: 'c'
  },
  {
    id: 56, subject: '🏛️ History',
    text: 'Who was the last Viceroy of British India?',
    options: ['Lord Mountbatten', 'Lord Curzon', 'Lord Dalhousie', 'Lord Wavell'],
    _c: 'a'
  },
  {
    id: 57, subject: '🏛️ History',
    text: 'The Jallianwala Bagh massacre took place in which year?',
    options: ['1915', '1917', '1919', '1921'],
    _c: 'c'
  },
  {
    id: 58, subject: '🏛️ History',
    text: 'Who is called the "Father of the Indian Constitution"?',
    options: ['Jawaharlal Nehru', 'Mahatma Gandhi', 'Dr. B.R. Ambedkar', 'Rajendra Prasad'],
    _c: 'c'
  },
  {
    id: 59, subject: '🏛️ History',
    text: 'Which Indian king is famous for his policy of "Dhamma" (righteousness)?',
    options: ['Chandragupta Maurya', 'Ashoka', 'Akbar', 'Krishnadevaraya'],
    _c: 'b'
  },
  {
    id: 60, subject: '🏛️ History',
    text: 'The first war of Indian Independence was fought in which year?',
    options: ['1847', '1857', '1867', '1877'],
    _c: 'b'
  },
  // HARD History Questions
  {
    id: 61, subject: '🏛️ History ⭐Hard',
    text: 'The Treaty of Versailles (1919) ended which war and imposed heavy penalties on which country?',
    options: ['World War I; Germany', 'World War II; Japan', 'World War I; Austria', 'World War II; Germany'],
    _c: 'a'
  },
  {
    id: 62, subject: '🏛️ History ⭐Hard',
    text: 'What was the "Doctrine of Lapse" introduced by Lord Dalhousie?',
    options: [
      'A tax policy on Indian merchants',
      'A policy to annex Indian states if rulers had no natural heir',
      'A law against child marriage',
      'A policy for railway construction'
    ],
    _c: 'b'
  },
  {
    id: 63, subject: '🏛️ History ⭐Hard',
    text: 'The Simon Commission (1927) was boycotted because:',
    options: [
      'It was expensive',
      'It had no Indian members',
      'It came without permission',
      'Gandhi opposed all commissions'
    ],
    _c: 'b'
  },
  {
    id: 64, subject: '🏛️ History ⭐Hard',
    text: 'Who wrote "Discovery of India"?',
    options: ['Mahatma Gandhi', 'Jawaharlal Nehru', 'Rabindranath Tagore', 'B.R. Ambedkar'],
    _c: 'b'
  },
  {
    id: 65, subject: '🏛️ History ⭐Hard',
    text: 'The Poona Pact (1932) was an agreement between Dr. B.R. Ambedkar and Mahatma Gandhi regarding:',
    options: [
      'Land reforms for farmers',
      'Separate electorates for depressed classes',
      'Independence from British rule',
      'Hindu-Muslim unity'
    ],
    _c: 'b'
  },

  // ============================================================
  // GENERAL KNOWLEDGE (25 Questions)
  // ============================================================
  {
    id: 66, subject: '🌍 General Knowledge',
    text: 'What is the capital of India?',
    options: ['Mumbai', 'Kolkata', 'New Delhi', 'Chennai'],
    _c: 'c'
  },
  {
    id: 67, subject: '🌍 General Knowledge',
    text: 'Which planet is known as the "Red Planet"?',
    options: ['Venus', 'Jupiter', 'Mars', 'Saturn'],
    _c: 'c'
  },
  {
    id: 68, subject: '🌍 General Knowledge',
    text: 'How many states are there in India (as of 2024)?',
    options: ['28', '29', '30', '27'],
    _c: 'a'
  },
  {
    id: 69, subject: '🌍 General Knowledge',
    text: 'What is the national animal of India?',
    options: ['Lion', 'Elephant', 'Tiger', 'Peacock'],
    _c: 'c'
  },
  {
    id: 70, subject: '🌍 General Knowledge',
    text: 'Which is the longest river in India?',
    options: ['Yamuna', 'Ganga', 'Brahmaputra', 'Godavari'],
    _c: 'b'
  },
  {
    id: 71, subject: '🌍 General Knowledge',
    text: 'Who invented the telephone?',
    options: ['Thomas Edison', 'Alexander Graham Bell', 'Nikola Tesla', 'James Watt'],
    _c: 'b'
  },
  {
    id: 72, subject: '🌍 General Knowledge',
    text: 'What is the full form of "UPI" in digital payments?',
    options: ['United Payment Interface', 'Unified Payment Interface', 'Universal Payment Integration', 'Unique Payment Index'],
    _c: 'b'
  },
  {
    id: 73, subject: '🌍 General Knowledge',
    text: 'Which country is the largest producer of rice in the world?',
    options: ['India', 'USA', 'China', 'Thailand'],
    _c: 'c'
  },
  {
    id: 74, subject: '🌍 General Knowledge',
    text: 'What does "GDP" stand for?',
    options: ['General Development Product', 'Gross Domestic Product', 'Government Debt Payment', 'Global Development Plan'],
    _c: 'b'
  },
  {
    id: 75, subject: '🌍 General Knowledge',
    text: 'Which is the smallest continent in the world?',
    options: ['Europe', 'Antarctica', 'Australia', 'South America'],
    _c: 'c'
  },
  {
    id: 76, subject: '🌍 General Knowledge',
    text: 'The headquarters of the United Nations is located in:',
    options: ['Geneva', 'London', 'New York', 'Paris'],
    _c: 'c'
  },
  {
    id: 77, subject: '🌍 General Knowledge',
    text: 'Which sport is Sachin Tendulkar associated with?',
    options: ['Football', 'Hockey', 'Cricket', 'Badminton'],
    _c: 'c'
  },
  {
    id: 78, subject: '🌍 General Knowledge',
    text: 'What is the chemical formula of water?',
    options: ['CO2', 'H2O', 'O2', 'NaCl'],
    _c: 'b'
  },
  {
    id: 79, subject: '🌍 General Knowledge',
    text: 'Which Indian state is known as the "Silicon Valley of India"?',
    options: ['Tamil Nadu', 'Maharashtra', 'Karnataka', 'Telangana'],
    _c: 'c'
  },
  {
    id: 80, subject: '🌍 General Knowledge',
    text: 'What is the currency of Japan?',
    options: ['Yuan', 'Won', 'Yen', 'Ringgit'],
    _c: 'c'
  },
  {
    id: 81, subject: '🌍 General Knowledge',
    text: 'Which vitamin is produced by human body when exposed to sunlight?',
    options: ['Vitamin A', 'Vitamin B12', 'Vitamin C', 'Vitamin D'],
    _c: 'd'
  },
  {
    id: 82, subject: '🌍 General Knowledge',
    text: 'ISRO stands for?',
    options: [
      'Indian Space Research Organisation',
      'International Space Research Office',
      'Indian Satellite Research Operations',
      'Indian Science Research Organisation'
    ],
    _c: 'a'
  },
  {
    id: 83, subject: '🌍 General Knowledge',
    text: 'Which is the tallest mountain in the world?',
    options: ['K2', 'Kangchenjunga', 'Mount Everest', 'Lhotse'],
    _c: 'c'
  },
  {
    id: 84, subject: '🌍 General Knowledge',
    text: 'What does "AI" stand for in technology?',
    options: ['Automated Interface', 'Artificial Intelligence', 'Advanced Integration', 'Automated Intelligence'],
    _c: 'b'
  },
  {
    id: 85, subject: '🌍 General Knowledge',
    text: 'Which Tamil Nadu city is known as the "Detroit of India" for its automobile industry?',
    options: ['Chennai', 'Coimbatore', 'Madurai', 'Salem'],
    _c: 'a'
  },
  // HARD General Knowledge Questions
  {
    id: 86, subject: '🌍 General Knowledge ⭐Hard',
    text: 'The "Chandrayaan-3" mission successfully landed on the Moon\'s south pole in which year?',
    options: ['2021', '2022', '2023', '2024'],
    _c: 'c'
  },
  {
    id: 87, subject: '🌍 General Knowledge ⭐Hard',
    text: 'Which article of the Indian Constitution abolishes untouchability?',
    options: ['Article 14', 'Article 17', '  Article 21', 'Article 32'],
    _c: 'b'
  },
  {
    id: 88, subject: '🌍 General Knowledge ⭐Hard',
    text: 'The "Pradhan Mantri Jan Dhan Yojana" was launched for what purpose?',
    options: [
      'Free education for all',
      'Universal financial inclusion and banking access',
      'Free healthcare for farmers',
      'Building rural roads'
    ],
    _c: 'b'
  },
  {
    id: 89, subject: '🌍 General Knowledge ⭐Hard',
    text: 'What is "Quantum Computing"?',
    options: [
      'Very fast traditional computing',
      'Computing using quantum mechanical phenomena like superposition and entanglement',
      'Cloud-based computing',
      'Computing using light (photons)'
    ],
    _c: 'b'
  },
  {
    id: 90, subject: '🌍 General Knowledge ⭐Hard',
    text: 'The "Digital India" initiative focuses on which of the following?',
    options: [
      'Only e-governance',
      'Transforming India into a digitally empowered society and knowledge economy',
      'Only internet access in cities',
      'Teaching coding in schools only'
    ],
    _c: 'b'
  },
  {
    id: 91, subject: '🌍 General Knowledge ⭐Hard',
    text: 'What is "blockchain" technology primarily known for?',
    options: [
      'A type of social media',
      'A decentralized, distributed digital ledger recording transactions securely',
      'A cloud storage system',
      'A programming language'
    ],
    _c: 'b'
  },
  {
    id: 92, subject: '🌍 General Knowledge ⭐Hard',
    text: 'India\'s "Unified Payments Interface" (UPI) is regulated by which body?',
    options: ['Ministry of Finance', 'SEBI', 'National Payments Corporation of India (NPCI)', 'Reserve Bank of India only'],
    _c: 'c'
  },
  {
    id: 93, subject: '🌍 General Knowledge ⭐Hard',
    text: 'The "Preamble" of the Indian Constitution begins with the words:',
    options: [
      '"We the Citizens of India"',
      '"We the People of India"',
      '"We the Citizens and People of India"',
      '"In the Name of God and People"'
    ],
    _c: 'b'
  },
  {
    id: 94, subject: '🌍 General Knowledge ⭐Hard',
    text: 'What is "Carbon Neutrality" goal targeted by India by which year?',
    options: ['2030', '2040', '2050', '2070'],
    _c: 'd'
  },
  {
    id: 95, subject: '🌍 General Knowledge ⭐Hard',
    text: 'Which Indian city hosted the G20 Summit in 2023?',
    options: ['Mumbai', 'Chennai', 'New Delhi', 'Bengaluru'],
    _c: 'c'
  },
  {
    id: 96, subject: '🌍 General Knowledge ⭐Hard',
    text: 'What is the name of India\'s first indigenous aircraft carrier?',
    options: ['INS Vikramaditya', 'INS Vikrant', 'INS Arihant', 'INS Chennai'],
    _c: 'b'
  },
  {
    id: 97, subject: '💻 Programming ⭐Hard',
    text: 'In cybersecurity, what is a "phishing" attack?',
    options: [
      'Hacking a server directly',
      'Fraudulently obtaining sensitive info by disguising as a trustworthy entity',
      'Overloading a website with traffic',
      'Installing malware via USB'
    ],
    _c: 'b'
  },
  {
    id: 98, subject: '📊 Accounting ⭐Hard',
    text: 'What is "EBITDA"?',
    options: [
      'Earnings Before Income Tax and Depreciation Allowance',
      'Earnings Before Interest, Taxes, Depreciation, and Amortization',
      'Estimated Business Income Tax and Deferred Assets',
      'Effective Business Income Tax Deduction Amount'
    ],
    _c: 'b'
  },
  {
    id: 99, subject: '🏛️ History ⭐Hard',
    text: 'The Non-Aligned Movement (NAM) was co-founded by India\'s Jawaharlal Nehru along with:',
    options: [
      'Mao Zedong and Ho Chi Minh',
      'Josip Tito, Gamal Nasser, and Sukarno',
      'Winston Churchill and Franklin Roosevelt',
      'Joseph Stalin and Charles de Gaulle'
    ],
    _c: 'b'
  },
  {
    id: 100, subject: '🌍 General Knowledge ⭐Hard',
    text: 'What is the "Right to Education" (RTE) Act in India and for which age group does it apply?',
    options: [
      'Free education for 5-15 years',
      'Free and compulsory education for children aged 6-14 years',
      'Free college education for 18-22 years',
      'Free vocational training for 15-25 years'
    ],
    _c: 'b'
  },
];

/* ============================================================
   UTILITIES
   ============================================================ */
function decodeCorrectIndex(encoded) {
  return encoded.charCodeAt(0) - 'a'.charCodeAt(0);
}

function shuffleArray(arr) {
  const result = [...arr];
  for (let i = result.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [result[i], result[j]] = [result[j], result[i]];
  }
  return result;
}

function prepareExamQuestions(count = 100) {
  const shuffled = shuffleArray(QUESTION_BANK).slice(0, count);
  const preparedQuestions = [];
  const optionMaps = [];

  shuffled.forEach((q) => {
    const originalCorrectIndex = decodeCorrectIndex(q._c);
    const indices = [0, 1, 2, 3];
    const shuffledIndices = shuffleArray(indices);
    const newOptions = shuffledIndices.map(i => q.options[i]);
    const newCorrectIndex = shuffledIndices.indexOf(originalCorrectIndex);

    preparedQuestions.push({
      id: q.id,
      subject: q.subject,
      text: q.text,
      options: newOptions,
      correctIndex: newCorrectIndex,
    });

    optionMaps.push(shuffledIndices);
  });

  return { questions: preparedQuestions, optionMaps };
}

function calculateExamScore(questions, answers) {
  let correct = 0, wrong = 0, skipped = 0;
  questions.forEach((q, idx) => {
    const answer = answers[idx];
    if (answer === undefined || answer === null) skipped++;
    else if (answer === q.correctIndex) correct++;
    else wrong++;
  });
  const attempted = correct + wrong;
  const percentage = questions.length > 0 ? Math.round((correct / questions.length) * 100) : 0;
  return { score: correct, correct, wrong, skipped, attempted, percentage };
}

function getScholarship(percentage) {
  if (percentage >= 90) return 'FREE Course + FREE Internship + FREE Certificate';
  if (percentage >= 75) return '50% Scholarship + FREE Internship';
  return '25% Scholarship + 50% Internship Offer';
}
