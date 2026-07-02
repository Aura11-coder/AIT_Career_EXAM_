/**
 * ============================================================
 * AIT EXAM 2026 - Professional Question Bank (100 MCQs)
 * Set by: Senior Examination Board
 * Difficulty: 80% Hard, 20% Medium
 * Topics: Programming, Accounting, GST, Maths, Science, 
 *         Social Science, History
 * ============================================================
 */

'use strict';

const QUESTION_BANK = [

  // ============================================================
  // PROGRAMMING - PYTHON + LOGIC (30 Questions)
  // ============================================================
  {
    id: 1, subject: '💻 Programming',
    text: 'What is the output of the following Python code?\n\nx = [1, 2, 3, 4, 5]\nprint(x[::−2])',
    options: ['[5, 3, 1]', '[1, 3, 5]', '[5, 4, 3, 2, 1]', 'Error'],
    _c: 'a'
  },
  {
    id: 2, subject: '💻 Programming',
    text: 'A function in Python returns without a return statement. What does it return?',
    options: ['0', 'False', 'None', 'Empty string ""'],
    _c: 'c'
  },
  {
    id: 3, subject: '💻 Programming',
    text: 'What is the output?\n\nd = {"a": 1, "b": 2, "c": 3}\nprint([v for k, v in d.items() if k != "b"])',
    options: ['[1, 3]', '[1, 2]', '{"a":1, "c":3}', '[2]'],
    _c: 'a'
  },
  {
    id: 4, subject: '💻 Programming',
    text: 'Which code correctly swaps two variables a and b WITHOUT using a temporary variable in Python?',
    options: ['a = b; b = a', 'a, b = b, a', 'a ^= b ^= a ^= b', 'Both B and C'],
    _c: 'b'
  },
  {
    id: 5, subject: '💻 Programming',
    text: 'What does this code print?\n\ndef f(x, lst=[]):\n    lst.append(x)\n    return lst\nprint(f(1))\nprint(f(2))',
    options: ['[1] then [2]', '[1] then [1, 2]', '[1, 2] then [1, 2]', 'Error'],
    _c: 'b'
  },
  {
    id: 6, subject: '💻 Programming',
    text: 'A binary search on a sorted list of 1024 elements requires at most how many comparisons?',
    options: ['512', '10', '32', '100'],
    _c: 'b'
  },
  {
    id: 7, subject: '💻 Programming',
    text: 'What is the output?\n\nprint(type(1/2))\nprint(type(1//2))',
    options: ["<class 'int'> then <class 'int'>", "<class 'float'> then <class 'int'>", "<class 'float'> then <class 'float'>", "<class 'int'> then <class 'float'>"],
    _c: 'b'
  },
  {
    id: 8, subject: '💻 Programming',
    text: 'Which data structure would be MOST efficient for checking if a word exists in a dictionary of 1 million words?',
    options: ['Sorted List with Binary Search', 'Hash Set (Python set)', 'Linked List', 'Binary Search Tree'],
    _c: 'b'
  },
  {
    id: 9, subject: '💻 Programming',
    text: 'What is the output of this Python code?\n\nx = "hello"\nprint(x.replace("l", "r", 1))',
    options: ['herro', 'herlo', 'hello', 'Error'],
    _c: 'b'
  },
  {
    id: 10, subject: '💻 Programming',
    text: 'In Python, what is the difference between "is" and "=="?',
    options: [
      '"is" checks value equality; "==" checks identity',
      '"is" checks identity (same object); "==" checks value equality',
      'Both are identical in all cases',
      '"is" works only for strings'
    ],
    _c: 'b'
  },
  {
    id: 11, subject: '💻 Programming',
    text: 'What will be the output?\n\ntry:\n    x = 1/0\nexcept ZeroDivisionError:\n    print("A")\nfinally:\n    print("B")',
    options: ['A', 'B', 'A then B', 'Error only'],
    _c: 'c'
  },
  {
    id: 12, subject: '💻 Programming',
    text: 'A recursive function to compute factorial(5) is called. How many total function calls are made (including the initial call)?',
    options: ['4', '5', '6', '10'],
    _c: 'c'
  },
  {
    id: 13, subject: '💻 Programming',
    text: 'What is the output?\n\nprint(bool(""), bool(" "), bool(0), bool([]))',
    options: [
      'False False False False',
      'False True False False',
      'True True False True',
      'False True True False'
    ],
    _c: 'b'
  },
  {
    id: 14, subject: '💻 Programming',
    text: 'Which of these Python snippets correctly removes duplicate values from a list while preserving order?',
    options: [
      'list(set(lst))',
      'dict.fromkeys(lst)',
      'list(dict.fromkeys(lst))',
      'sorted(set(lst))'
    ],
    _c: 'c'
  },
  {
    id: 15, subject: '💻 Programming',
    text: 'What is the time complexity of inserting an element at the beginning of a Python list of n elements?',
    options: ['O(1)', 'O(log n)', 'O(n)', 'O(n²)'],
    _c: 'c'
  },
  {
    id: 16, subject: '💻 Programming',
    text: 'What does this lambda return?\n\nf = lambda x: x if x % 2 == 0 else x * 3\nprint(f(5))',
    options: ['5', '10', '15', '3'],
    _c: 'c'
  },
  {
    id: 17, subject: '💻 Programming',
    text: 'A stack is used to evaluate the expression: 5 3 2 * + (postfix/RPN). What is the result?',
    options: ['25', '11', '16', '30'],
    _c: 'b'
  },
  {
    id: 18, subject: '💻 Programming',
    text: 'What is the output?\n\na = [1, 2, 3]\nb = a\nb.append(4)\nprint(a)',
    options: ['[1, 2, 3]', '[1, 2, 3, 4]', 'Error', '[4]'],
    _c: 'b'
  },
  {
    id: 19, subject: '💻 Programming',
    text: 'Which SQL query correctly finds the second highest salary from a table "emp" with column "salary"?',
    options: [
      'SELECT MAX(salary) FROM emp WHERE salary < (SELECT MAX(salary) FROM emp)',
      'SELECT salary FROM emp ORDER BY salary DESC LIMIT 1 OFFSET 1',
      'SELECT DISTINCT salary FROM emp ORDER BY salary DESC LIMIT 1,1',
      'All of the above approaches are valid'
    ],
    _c: 'a'
  },
  {
    id: 20, subject: '💻 Programming',
    text: 'What is the output of this code?\n\nx = 10\ndef foo():\n    x = 20\n    def bar():\n        nonlocal x\n        x = 30\n    bar()\n    print(x)\nfoo()',
    options: ['10', '20', '30', 'Error'],
    _c: 'c'
  },
  {
    id: 21, subject: '💻 Programming',
    text: 'In a linked list, what is the time complexity of accessing the kth element?',
    options: ['O(1)', 'O(log n)', 'O(k)', 'O(n)'],
    _c: 'c'
  },
  {
    id: 22, subject: '💻 Programming',
    text: 'What will this generator expression produce?\n\ng = (x**2 for x in range(5) if x % 2 != 0)\nprint(list(g))',
    options: ['[1, 9]', '[1, 4, 9]', '[1, 9, 25]', '[0, 1, 4, 9, 16]'],
    _c: 'c'
  },
  {
    id: 23, subject: '💻 Programming',
    text: 'Which concept does Python use for memory management that automatically frees unused objects?',
    options: ['Manual deallocation', 'Garbage Collection with Reference Counting', 'Stack-only allocation', 'Virtual memory paging'],
    _c: 'b'
  },
  {
    id: 24, subject: '💻 Programming',
    text: 'What is the output?\n\nprint(2 ** 3 ** 2)',
    options: ['64', '512', '72', '36'],
    _c: 'b'
  },
  {
    id: 25, subject: '💻 Programming',
    text: 'A program has O(n²) time complexity. If it takes 4 seconds for n=1000, approximately how long for n=2000?',
    options: ['8 seconds', '16 seconds', '32 seconds', '4 seconds'],
    _c: 'b'
  },
  {
    id: 26, subject: '💻 Programming',
    text: 'What is wrong with this code?\n\ndef divide(a, b):\n    return a / b\nresult = divide(10, 0)\nprint(result)',
    options: [
      'Syntax error in function definition',
      'ZeroDivisionError at runtime — unhandled exception',
      'Returns infinity without error',
      'Returns None'
    ],
    _c: 'b'
  },
  {
    id: 27, subject: '💻 Programming',
    text: 'In Python, what is the result of: len(set([1,1,2,2,3,3,4]))?',
    options: ['7', '4', '3', '6'],
    _c: 'b'
  },
  {
    id: 28, subject: '💻 Programming',
    text: 'Which sorting algorithm is STABLE and has O(n log n) worst-case complexity?',
    options: ['Quick Sort', 'Heap Sort', 'Merge Sort', 'Shell Sort'],
    _c: 'c'
  },
  {
    id: 29, subject: '💻 Programming',
    text: 'What does "mutable default argument" bug in Python cause?',
    options: [
      'Syntax error on every call',
      'The default argument is shared across all calls, causing unexpected behavior',
      'Memory leak in all instances',
      'TypeError on second function call'
    ],
    _c: 'b'
  },
  {
    id: 30, subject: '💻 Programming',
    text: 'What is the output?\n\nclass A:\n    x = 5\na1 = A()\na2 = A()\na1.x = 10\nprint(a2.x)',
    options: ['10', '5', 'None', 'Error'],
    _c: 'b'
  },

  // ============================================================
  // ACCOUNTING (15 Questions)
  // ============================================================
  {
    id: 31, subject: '📊 Accounting',
    text: 'A trader bought goods for ₹80,000. He sold 3/4 of the goods at 20% profit and the remaining at 10% loss. What is the overall profit or loss percentage?',
    options: ['12.5% Profit', '11.5% Profit', '10% Profit', '12% Profit'],
    _c: 'a'
  },
  {
    id: 32, subject: '📊 Accounting',
    text: 'Under the Written Down Value (WDV) method, a machine worth ₹1,00,000 depreciates at 20% p.a. What is its book value at the END of 3rd year?',
    options: ['₹40,000', '₹51,200', '₹48,000', '₹60,000'],
    _c: 'b'
  },
  {
    id: 33, subject: '📊 Accounting',
    text: 'Which of the following transactions violates the "Dual Aspect Concept" of accounting?',
    options: [
      'Owner withdrew cash — Debit Drawings, Credit Cash',
      'Purchased goods on credit — Debit Purchases, Credit Creditors',
      'Received loan — Debit Cash, Credit Loan (but NOT recording liability)',
      'Sold goods for cash — Debit Cash, Credit Sales'
    ],
    _c: 'c'
  },
  {
    id: 34, subject: '📊 Accounting',
    text: 'A company has Current Assets of ₹5,00,000 and Current Liabilities of ₹2,00,000. Inventory is ₹1,50,000. What is the Quick Ratio?',
    options: ['2.5', '1.75', '1.25', '3.0'],
    _c: 'b'
  },
  {
    id: 35, subject: '📊 Accounting',
    text: 'In a Trial Balance, if the total of debit side exceeds credit side, this could indicate:',
    options: [
      'Excess income recorded',
      'An expense or asset account has been over-debited or a liability has been under-credited',
      'The business is profitable',
      'Capital has increased'
    ],
    _c: 'b'
  },
  {
    id: 36, subject: '📊 Accounting',
    text: 'Outstanding salary ₹10,000 was NOT recorded. What effect does this omission have on the Final Accounts?',
    options: [
      'Net Profit overstated; Current Liabilities understated',
      'Net Profit understated; Current Assets overstated',
      'Net Profit overstated; Current Assets overstated',
      'No effect on Profit & Loss Account'
    ],
    _c: 'a'
  },
  {
    id: 37, subject: '📊 Accounting',
    text: 'Goods worth ₹5,000 were taken by the owner for personal use. The correct journal entry is:',
    options: [
      'Debit Sales A/c; Credit Drawings A/c',
      'Debit Drawings A/c; Credit Purchases A/c',
      'Debit Capital A/c; Credit Stock A/c',
      'Debit Drawings A/c; Credit Sales A/c'
    ],
    _c: 'b'
  },
  {
    id: 38, subject: '📊 Accounting',
    text: 'Which of these is NOT recorded in a Cash Book?',
    options: [
      'Cash sales',
      'Depreciation on machinery',
      'Cash received from debtors',
      'Bank charges debited by bank'
    ],
    _c: 'b'
  },
  {
    id: 39, subject: '📊 Accounting',
    text: 'A debtor owed ₹20,000. He paid ₹18,000 in full settlement. The ₹2,000 discount allowed is debited to:',
    options: ['Sales Return A/c', 'Discount Allowed A/c', 'Debtor A/c', 'Bad Debts A/c'],
    _c: 'b'
  },
  {
    id: 40, subject: '📊 Accounting',
    text: 'A firm earned Net Profit of ₹3,00,000. Capital Employed is ₹15,00,000. What is the Return on Capital Employed (ROCE)?',
    options: ['5%', '15%', '20%', '25%'],
    _c: 'c'
  },
  {
    id: 41, subject: '📊 Accounting',
    text: 'Closing stock appears in which of the following financial statements?',
    options: [
      'Only Trading Account',
      'Only Balance Sheet',
      'Both Trading Account (credit side) and Balance Sheet (asset side)',
      'Only Profit & Loss Account'
    ],
    _c: 'c'
  },
  {
    id: 42, subject: '📊 Accounting',
    text: 'A company\'s Gross Profit Ratio is 25% and Net Profit Ratio is 10%. If Sales are ₹8,00,000, what are the Operating Expenses?',
    options: ['₹80,000', '₹1,20,000', '₹2,00,000', '₹1,00,000'],
    _c: 'b'
  },
  {
    id: 43, subject: '📊 Accounting',
    text: 'Prepaid Insurance ₹3,000 was NOT adjusted in final accounts. What is the impact?',
    options: [
      'Expenses understated; Profit overstated',
      'Expenses overstated; Profit understated',
      'Assets understated; Profit overstated',
      'No impact on profit'
    ],
    _c: 'b'
  },
  {
    id: 44, subject: '📊 Accounting',
    text: 'Which accounting concept states that a business should record revenue only when it is EARNED, not when cash is received?',
    options: ['Cash Concept', 'Revenue Recognition / Accrual Concept', 'Matching Concept', 'Conservatism Concept'],
    _c: 'b'
  },
  {
    id: 45, subject: '📊 Accounting',
    text: 'In a Bank Reconciliation Statement, if a cheque issued but NOT yet presented to bank — the Bank Balance as per Pass Book will be:',
    options: [
      'Less than Cash Book balance',
      'More than Cash Book balance',
      'Equal to Cash Book balance',
      'Cannot be determined'
    ],
    _c: 'b'
  },

  // ============================================================
  // GST - INDIA (10 Questions)
  // ============================================================
  {
    id: 46, subject: '🧾 GST',
    text: 'A supplier in Tamil Nadu sells goods worth ₹1,00,000 to a buyer in Karnataka. Which tax applies?',
    options: ['CGST + SGST @ 9% each', 'IGST @ 18%', 'CGST @ 18%', 'SGST @ 18%'],
    _c: 'b'
  },
  {
    id: 47, subject: '🧾 GST',
    text: 'Under GST, Input Tax Credit (ITC) CANNOT be claimed on which of the following?',
    options: [
      'Raw materials purchased for manufacturing',
      'Motor vehicles used for personal transport of employees',
      'Capital goods used in business',
      'Services used for business operations'
    ],
    _c: 'b'
  },
  {
    id: 48, subject: '🧾 GST',
    text: 'A trader buys goods paying GST of ₹18,000 (Input Tax). He sells goods and collects GST of ₹25,000 (Output Tax). What is his NET GST liability to government?',
    options: ['₹25,000', '₹18,000', '₹7,000', '₹43,000'],
    _c: 'c'
  },
  {
    id: 49, subject: '🧾 GST',
    text: 'Under Reverse Charge Mechanism (RCM) in GST, who is liable to pay the tax?',
    options: ['Supplier', 'Recipient of goods/services', 'Government directly', 'Both supplier and recipient equally'],
    _c: 'b'
  },
  {
    id: 50, subject: '🧾 GST',
    text: 'The GST Council is chaired by whom?',
    options: ['President of India', 'RBI Governor', 'Union Finance Minister', 'Chief Justice of India'],
    _c: 'c'
  },
  {
    id: 51, subject: '🧾 GST',
    text: 'A business has annual turnover of ₹38 lakhs. Is GST registration mandatory? (Threshold for normal states is ₹40 lakhs)',
    options: [
      'Yes, mandatory above ₹20 lakhs',
      'No, registration not required below ₹40 lakhs threshold',
      'Yes, mandatory for all businesses',
      'Only if dealing in interstate supply'
    ],
    _c: 'b'
  },
  {
    id: 52, subject: '🧾 GST',
    text: 'Under GST Composition Scheme, which statement is CORRECT?',
    options: [
      'Composition dealers can collect GST from customers',
      'Composition dealers cannot claim ITC and cannot issue tax invoice',
      'Composition scheme is available for all businesses regardless of turnover',
      'Composition dealers must file monthly returns'
    ],
    _c: 'b'
  },
  {
    id: 53, subject: '🧾 GST',
    text: 'Which of the following is EXEMPT from GST in India?',
    options: ['Branded packaged food', 'Fresh unprocessed vegetables', 'Packaged drinking water (>20L)', 'Restaurant services'],
    _c: 'b'
  },
  {
    id: 54, subject: '🧾 GST',
    text: 'GSTR-3B is filed:',
    options: ['Annually', 'Quarterly only', 'Monthly (or quarterly for QRMP scheme)', 'Weekly'],
    _c: 'c'
  },
  {
    id: 55, subject: '🧾 GST',
    text: 'A service provider in Chennai provides IT services to a client in USA. What GST applies?',
    options: ['IGST @ 18%', 'CGST + SGST @ 9% each', 'Zero-rated supply — 0% GST (exports)', 'SGST @ 18%'],
    _c: 'c'
  },

  // ============================================================
  // MATHEMATICS - Aptitude + Logical (15 Questions)
  // ============================================================
  {
    id: 56, subject: '📐 Mathematics',
    text: 'A train 150m long passes a pole in 15 seconds and passes a platform in 30 seconds. What is the length of the platform?',
    options: ['100m', '150m', '200m', '250m'],
    _c: 'b'
  },
  {
    id: 57, subject: '📐 Mathematics',
    text: 'A can complete work in 12 days, B in 18 days. They work together for 4 days, then A leaves. How many more days does B need to finish?',
    options: ['8 days', '10 days', '6 days', '9 days'],
    _c: 'b'
  },
  {
    id: 58, subject: '📐 Mathematics',
    text: 'A sum of money doubles itself at simple interest in 8 years. In how many years will it become 5 times itself?',
    options: ['24 years', '32 years', '40 years', '20 years'],
    _c: 'b'
  },
  {
    id: 59, subject: '📐 Mathematics',
    text: 'Find the next term: 1, 4, 9, 16, 25, 36, ?',
    options: ['42', '48', '49', '50'],
    _c: 'c'
  },
  {
    id: 60, subject: '📐 Mathematics',
    text: 'Two pipes A and B can fill a tank in 20 and 30 minutes respectively. Pipe C can empty it in 15 minutes. All three open simultaneously. How long to fill the tank?',
    options: ['60 minutes', 'Tank never fills', '120 minutes', '90 minutes'],
    _c: 'c'
  },
  {
    id: 61, subject: '📐 Mathematics',
    text: 'A shopkeeper marks goods 40% above cost price and gives 20% discount. What is the profit percentage?',
    options: ['10%', '12%', '8%', '20%'],
    _c: 'b'
  },
  {
    id: 62, subject: '📐 Mathematics',
    text: 'What is the probability of getting a sum of 9 when two dice are rolled simultaneously?',
    options: ['1/9', '1/12', '4/36', '5/36'],
    _c: 'c'
  },
  {
    id: 63, subject: '📐 Mathematics',
    text: 'If 6 men and 8 women complete a work in 10 days, and 26 men and 48 women complete it in 2 days, how many days will 15 men and 20 women take?',
    options: ['4 days', '5 days', '6 days', '8 days'],
    _c: 'a'
  },
  {
    id: 64, subject: '📐 Mathematics',
    text: 'A cube has its surface area increased by 44%. By what percentage does its volume increase?',
    options: ['44%', '72.8%', '100%', '66%'],
    _c: 'b'
  },
  {
    id: 65, subject: '📐 Mathematics',
    text: 'In how many ways can the letters of the word "EXAMINATION" be arranged?',
    options: ['11! / (2! × 2! × 2!)', '11!', '11! / 2!', '10! / (2! × 2!)'],
    _c: 'a'
  },
  {
    id: 66, subject: '📐 Mathematics',
    text: 'A man sells two items each at ₹1,200. He earns 20% profit on one and 20% loss on another. What is the overall result?',
    options: ['No profit no loss', '4% loss', '4% profit', '2% loss'],
    _c: 'b'
  },
  {
    id: 67, subject: '📐 Mathematics',
    text: 'Find the missing number in the series: 3, 7, 13, 21, 31, ?',
    options: ['41', '43', '45', '47'],
    _c: 'b'
  },
  {
    id: 68, subject: '📐 Mathematics',
    text: 'Compound Interest on ₹10,000 at 10% p.a. for 2 years, compounded annually is:',
    options: ['₹2,000', '₹2,100', '₹1,900', '₹2,500'],
    _c: 'b'
  },
  {
    id: 69, subject: '📐 Mathematics',
    text: 'A clock shows 3:15. What is the angle between the hour and minute hands?',
    options: ['0°', '7.5°', '15°', '22.5°'],
    _c: 'b'
  },
  {
    id: 70, subject: '📐 Mathematics',
    text: 'If the average of 5 consecutive even numbers is 18, what is the largest number?',
    options: ['20', '22', '24', '26'],
    _c: 'b'
  },

  // ============================================================
  // SCIENCE (10 Questions)
  // ============================================================
  {
    id: 71, subject: '🔬 Science',
    text: 'A ball is thrown vertically upward. At the highest point, which of the following is TRUE?',
    options: [
      'Both velocity and acceleration are zero',
      'Velocity is zero; acceleration due to gravity is 9.8 m/s² downward',
      'Both velocity and acceleration are maximum',
      'Velocity is maximum; acceleration is zero'
    ],
    _c: 'b'
  },
  {
    id: 72, subject: '🔬 Science',
    text: 'Why does an iron nail rust faster when submerged in salt water compared to fresh water?',
    options: [
      'Salt water has higher temperature',
      'Salt water increases electrical conductivity, accelerating the electrochemical corrosion process',
      'Salt chemically reacts with iron directly',
      'Salt water has less dissolved oxygen'
    ],
    _c: 'b'
  },
  {
    id: 73, subject: '🔬 Science',
    text: 'A concave mirror has focal length 20 cm. An object is placed 15 cm in front of it. Where does the image form?',
    options: [
      'Behind the mirror (virtual, erect)',
      '60 cm in front of mirror (real, inverted)',
      'At focus (20 cm)',
      'At infinity'
    ],
    _c: 'a'
  },
  {
    id: 74, subject: '🔬 Science',
    text: 'Which change occurs when baking soda (NaHCO₃) is added to vinegar (CH₃COOH)?',
    options: [
      'Physical change — no new substance formed',
      'Chemical change — CO₂ gas released, new salts formed',
      'Nuclear change — energy released',
      'Physical change — only dissolving occurs'
    ],
    _c: 'b'
  },
  {
    id: 75, subject: '🔬 Science',
    text: 'DNA replication occurs in which phase of the cell cycle?',
    options: ['G1 phase', 'S phase (Synthesis phase)', 'G2 phase', 'M phase (Mitosis)'],
    _c: 'b'
  },
  {
    id: 76, subject: '🔬 Science',
    text: 'A circuit has two resistors: 4Ω and 6Ω connected in PARALLEL across 12V. What is the total current drawn from the battery?',
    options: ['1A', '2A', '5A', '3A'],
    _c: 'c'
  },
  {
    id: 77, subject: '🔬 Science',
    text: 'The pH of human blood is maintained between 7.35–7.45. If blood pH drops below 7.35, what condition results?',
    options: ['Alkalosis', 'Acidosis', 'Neutral state', 'Hypoxia'],
    _c: 'b'
  },
  {
    id: 78, subject: '🔬 Science',
    text: 'Why does a swimmer appear shorter than actual when seen from above the water surface?',
    options: [
      'Water absorbs light',
      'Refraction — light bends away from normal when moving from water to air, shifting apparent position',
      'Reflection at the water surface',
      'Diffraction of light in water'
    ],
    _c: 'b'
  },
  {
    id: 79, subject: '🔬 Science',
    text: 'Which gas is responsible for the "Greenhouse Effect" and is produced most by human activities?',
    options: ['Oxygen (O₂)', 'Nitrogen (N₂)', 'Carbon Dioxide (CO₂)', 'Ozone (O₃)'],
    _c: 'c'
  },
  {
    id: 80, subject: '🔬 Science',
    text: 'Insulin is secreted by which cells in the pancreas?',
    options: ['Alpha cells', 'Delta cells', 'Beta cells', 'Gamma cells'],
    _c: 'c'
  },

  // ============================================================
  // SOCIAL SCIENCE (10 Questions)
  // ============================================================
  {
    id: 81, subject: '🌍 Social Science',
    text: 'India follows a "federal" system of government. However, in which situation can the Centre override State powers?',
    options: [
      'Only during natural disasters',
      'During National Emergency (Art 352), State Emergency (Art 356), or Financial Emergency (Art 360)',
      'Whenever Parliament passes a law',
      'Only during war with another country'
    ],
    _c: 'b'
  },
  {
    id: 82, subject: '🌍 Social Science',
    text: 'Which river system drains into the Arabian Sea rather than the Bay of Bengal?',
    options: ['Godavari', 'Mahanadi', 'Narmada and Tapi', 'Krishna'],
    _c: 'c'
  },
  {
    id: 83, subject: '🌍 Social Science',
    text: 'The "Demographic Dividend" refers to:',
    options: [
      'High population growth increasing poverty',
      'Economic growth potential when a large working-age population exists relative to dependents',
      'Government dividend paid to citizens based on population',
      'Tax benefit for families with more children'
    ],
    _c: 'b'
  },
  {
    id: 84, subject: '🌍 Social Science',
    text: 'Which Article of the Indian Constitution provides for the Right to Constitutional Remedies (called the "Heart and Soul" by Ambedkar)?',
    options: ['Article 14', 'Article 21', 'Article 32', 'Article 19'],
    _c: 'c'
  },
  {
    id: 85, subject: '🌍 Social Science',
    text: 'India\'s economic policy shifted from a "Mixed Economy" model toward liberalization in which year, and what triggered it?',
    options: [
      '1984 — Assassination of Indira Gandhi',
      '1991 — Balance of Payments crisis and IMF conditionality',
      '2000 — Y2K technology boom',
      '1975 — Emergency period reforms'
    ],
    _c: 'b'
  },
  {
    id: 86, subject: '🌍 Social Science',
    text: 'The "Western Ghats" act as a barrier causing heavy rainfall on the western side. What is this phenomenon called?',
    options: ['Convectional rainfall', 'Frontal rainfall', 'Orographic rainfall (Relief rainfall)', 'Cyclonic rainfall'],
    _c: 'c'
  },
  {
    id: 87, subject: '🌍 Social Science',
    text: 'Which Directive Principle of State Policy (DPSP) directs the State to minimize inequality in income and status?',
    options: ['Article 39', 'Article 38', 'Article 44', 'Article 45'],
    _c: 'b'
  },
  {
    id: 88, subject: '🌍 Social Science',
    text: 'India\'s largest trading partner (by total trade volume) as of recent years is:',
    options: ['USA', 'China', 'UAE', 'Saudi Arabia'],
    _c: 'b'
  },
  {
    id: 89, subject: '🌍 Social Science',
    text: 'The "Human Development Index" (HDI) is calculated based on which THREE dimensions?',
    options: [
      'GDP, Military strength, Life expectancy',
      'Health (life expectancy), Education (schooling), Standard of living (GNI per capita)',
      'Income, Employment, Gender equality',
      'Poverty rate, Literacy, Infrastructure'
    ],
    _c: 'b'
  },
  {
    id: 90, subject: '🌍 Social Science',
    text: 'Which type of unemployment is described as workers moving between jobs voluntarily?',
    options: ['Structural unemployment', 'Cyclical unemployment', 'Frictional unemployment', 'Seasonal unemployment'],
    _c: 'c'
  },

  // ============================================================
  // HISTORY (10 Questions)
  // ============================================================
  {
    id: 91, subject: '🏛️ History',
    text: 'The "Permanent Settlement" of 1793 by Lord Cornwallis had what long-term consequence for Bengal?',
    options: [
      'Farmers gained ownership of land and prospered',
      'Zamindars became permanent landowners; peasants became tenants with no rights, leading to exploitation',
      'British directly managed all agricultural land',
      'It reduced tax collection for the East India Company'
    ],
    _c: 'b'
  },
  {
    id: 92, subject: '🏛️ History',
    text: 'The MAIN reason the 1857 Revolt ultimately failed was:',
    options: [
      'Lack of weapons among Indian soldiers',
      'Absence of unified leadership, coordination, and a common nationalist ideology',
      'British army was technologically far superior',
      'The revolt was limited only to Bengal'
    ],
    _c: 'b'
  },
  {
    id: 93, subject: '🏛️ History',
    text: 'Mahatma Gandhi suspended the Non-Cooperation Movement in 1922 due to which specific incident?',
    options: [
      'Arrest of Bal Gangadhar Tilak',
      'Chauri Chaura incident — a mob burned a police station killing 22 policemen',
      'Jallianwala Bagh massacre',
      'Signing of Gandhi-Irwin Pact'
    ],
    _c: 'b'
  },
  {
    id: 94, subject: '🏛️ History',
    text: 'The "Cabinet Mission Plan" of 1946 proposed:',
    options: [
      'Immediate independence with partition of India',
      'A united India with a three-tier federal structure and grouping of provinces',
      'Transfer of power to Muslim League only',
      'A dominion status for India under British Crown'
    ],
    _c: 'b'
  },
  {
    id: 95, subject: '🏛️ History',
    text: 'Which economic policy of the British MOST systematically destroyed Indian traditional industries in the 19th century?',
    options: [
      'Drain of Wealth theory alone',
      'Free Trade policy — allowing British manufactured goods to enter India duty-free while taxing Indian exports',
      'Permanent Settlement policy',
      'Railway construction diverting labor'
    ],
    _c: 'b'
  },
  {
    id: 96, subject: '🏛️ History',
    text: 'The French Revolution of 1789 was triggered by a combination of factors. Which was the MOST immediate cause?',
    options: [
      'American Revolution inspiring the French people',
      'France\'s bankruptcy and the King calling the Estates-General for the first time in 175 years',
      'Enlightenment philosophy alone',
      'Military defeat of France by Britain'
    ],
    _c: 'b'
  },
  {
    id: 97, subject: '🏛️ History',
    text: 'The Partition of Bengal in 1905 by Lord Curzon was opposed primarily because:',
    options: [
      'It created two equal states economically',
      'Indians saw it as a deliberate "Divide and Rule" strategy to weaken the nationalist movement and create Hindu-Muslim divide',
      'The partition was done without any consultation with local authorities',
      'It reduced the administrative efficiency of Bengal'
    ],
    _c: 'b'
  },
  {
    id: 98, subject: '🏛️ History',
    text: 'What was the historical significance of the "Dandi March" (1930) beyond just protesting the Salt Tax?',
    options: [
      'It led directly to Indian independence',
      'It demonstrated that Indians could non-violently challenge British law, gaining international attention and mass civil disobedience',
      'It united the Muslim League with the Congress',
      'It resulted in the British abolishing the Salt Tax immediately'
    ],
    _c: 'b'
  },
  {
    id: 99, subject: '🏛️ History',
    text: 'The "Two-Nation Theory" promoted by Muhammad Ali Jinnah argued that:',
    options: [
      'India should have two capitals — Delhi and Lahore',
      'Hindus and Muslims are two distinct nations requiring separate homelands due to irreconcilable religious and cultural differences',
      'India should be divided into North and South nations',
      'Muslims should have a separate electorate but within a united India'
    ],
    _c: 'b'
  },
  {
    id: 100, subject: '🏛️ History',
    text: 'The Green Revolution in India (1960s–70s) solved food scarcity but created which long-term problem?',
    options: [
      'It reduced farmer income due to overproduction',
      'It led to regional inequality (only Punjab/Haryana benefited), soil degradation, water depletion, and chemical dependency',
      'It caused massive urban migration from all states equally',
      'It made India dependent on foreign seeds permanently'
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
