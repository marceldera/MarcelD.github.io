// Project data - all 82 tasks from the Gantt chart
const projectData = [
    { wbs: '1', task: 'PRECONSTRUCTION PLANNING', type: 'MILESTONE', start: 'Feb 15', end: 'Mar 12', days: 26, budget: 15000, isSection: true },
    { wbs: '1.1', task: 'Finalize Architectural & Engineering Plans', type: 'CRITICAL', start: 'Feb 15', end: 'Mar 1', days: 15, budget: 8000 },
    { wbs: '1.2', task: 'Conduct Property Survey', type: 'CRITICAL', start: 'Mar 1', end: 'Mar 5', days: 5, budget: 2500 },
    { wbs: '1.3', task: 'Prepare Permit Application Package', type: 'CRITICAL', start: 'Mar 5', end: 'Mar 10', days: 6, budget: 1500 },
    { wbs: '1.4', task: 'Submit All Permit Applications', type: 'CRITICAL', start: 'Mar 12', end: 'Mar 14', days: 3, budget: 3000 },
    
    { wbs: '2', task: 'PERMITS & APPROVALS', type: 'CRITICAL', start: 'Mar 14', end: 'Mar 31', days: 18, budget: 5500, isSection: true },
    { wbs: '2.1', task: 'Building Permit Plan Review', type: 'CRITICAL', start: 'Mar 14', end: 'Mar 26', days: 13, budget: 2000 },
    { wbs: '2.2', task: '✅ Receive Building Permit Approval', type: 'MILESTONE', start: 'Mar 27', end: 'Mar 27', days: 1, budget: 0 },
    { wbs: '2.3', task: 'Record Notice of Commencement', type: 'CRITICAL', start: 'Mar 29', end: 'Mar 31', days: 3, budget: 3500 },
    
    { wbs: '3', task: 'DEMOLITION & SITE WORK', type: 'STANDARD', start: 'Apr 1', end: 'Apr 15', days: 15, budget: 31800, isSection: true },
    { wbs: '3.1', task: 'Demolition of Existing Structure', type: 'STANDARD', start: 'Apr 1', end: 'Apr 12', days: 12, budget: 17000 },
    { wbs: '3.2', task: 'Site Preparation & Grading', type: 'STANDARD', start: 'Apr 1', end: 'Apr 12', days: 12, budget: 6800 },
    { wbs: '3.3', task: 'Controlled Fill (95% Compaction)', type: 'STANDARD', start: 'Apr 1', end: 'Apr 12', days: 12, budget: 8000 },
    { wbs: '3.4', task: 'Final Demolition Inspection', type: 'CRITICAL', start: 'Apr 15', end: 'Apr 15', days: 1, budget: 0 },
    
    { wbs: '4', task: 'GRADING & FILL WORK', type: 'STANDARD', start: 'Apr 19', end: 'May 14', days: 26, budget: 8000, isSection: true },
    { wbs: '4.1', task: 'Site Stakeout & Preparation', type: 'STANDARD', start: 'Apr 19', end: 'Apr 20', days: 2, budget: 0 },
    { wbs: '4.2', task: 'Initial Grading Inspection', type: 'CRITICAL', start: 'Apr 19', end: 'Apr 19', days: 1, budget: 0 },
    { wbs: '4.3', task: 'Fill & Compact to 4 Ft Elevation', type: 'STANDARD', start: 'Apr 20', end: 'May 14', days: 25, budget: 8000 },
    { wbs: '4.4', task: 'Final Grading Inspection', type: 'CRITICAL', start: 'May 14', end: 'May 14', days: 1, budget: 0 },
    
    { wbs: '5', task: 'FOUNDATION', type: 'STANDARD', start: 'May 15', end: 'Jun 13', days: 30, budget: 44150, isSection: true },
    { wbs: '5.1', task: 'Foundation Layout & Under-Slab Utilities', type: 'STANDARD', start: 'May 15', end: 'May 31', days: 17, budget: 15000 },
    { wbs: '5.2', task: 'Foundation Inspection (BEFORE POUR)', type: 'CRITICAL', start: 'Jun 4', end: 'Jun 4', days: 1, budget: 0 },
    { wbs: '5.3', task: 'Pour Foundation Slab', type: 'STANDARD', start: 'Jun 5', end: 'Jun 5', days: 1, budget: 25000 },
    { wbs: '5.4', task: 'Concrete Curing & Form Removal', type: 'STANDARD', start: 'Jun 6', end: 'Jun 12', days: 7, budget: 0 },
    { wbs: '5.5', task: 'Foundation Spot Survey (DEADLINE)', type: 'CRITICAL', start: 'Jun 13', end: 'Jun 13', days: 1, budget: 4150 },
    
    { wbs: '6', task: 'STRUCTURE (CMU WALLS & COLUMNS)', type: 'STANDARD', start: 'Jun 16', end: 'Jul 11', days: 26, budget: 85585, isSection: true },
    { wbs: '6.1', task: 'First Floor CMU Walls', type: 'STANDARD', start: 'Jun 16', end: 'Jun 30', days: 15, budget: 59205 },
    { wbs: '6.2', task: 'Concrete Columns & Beams', type: 'STANDARD', start: 'Jun 23', end: 'Jul 11', days: 19, budget: 26380 },
    
    { wbs: '7', task: 'FRAMING (FLOORS, WALLS, ROOF)', type: 'STANDARD', start: 'Jun 16', end: 'Aug 1', days: 47, budget: 117090, isSection: true },
    { wbs: '7.1', task: 'First Floor Wall Framing', type: 'STANDARD', start: 'Jun 16', end: 'Jul 11', days: 26, budget: 45000 },
    { wbs: '7.2', task: 'Second Floor & Roof Framing', type: 'STANDARD', start: 'Jul 12', end: 'Jul 25', days: 14, budget: 52090 },
    { wbs: '7.3', task: 'House Wrap & Dry-In (Weather-Tight)', type: 'STANDARD', start: 'Jul 26', end: 'Aug 1', days: 7, budget: 20000 },
    
    { wbs: '8', task: 'MEP ROUGH-INS (Electrical, Plumbing, HVAC)', type: 'STANDARD', start: 'Jul 28', end: 'Aug 14', days: 18, budget: 116800, isSection: true },
    { wbs: '8.1', task: 'Electrical Rough-In', type: 'STANDARD', start: 'Jul 28', end: 'Aug 8', days: 12, budget: 35600 },
    { wbs: '8.2', task: 'Plumbing Rough-In', type: 'STANDARD', start: 'Jul 28', end: 'Aug 8', days: 12, budget: 41100 },
    { wbs: '8.3', task: 'HVAC Rough-In', type: 'STANDARD', start: 'Jul 28', end: 'Aug 8', days: 12, budget: 40100 },
    { wbs: '8.4', task: 'All Rough-In Inspections', type: 'CRITICAL', start: 'Aug 11', end: 'Aug 11', days: 1, budget: 0 },
    { wbs: '8.5', task: '✅ Framing Inspection - MAJOR MILESTONE', type: 'MILESTONE', start: 'Aug 14', end: 'Aug 14', days: 1, budget: 0 },
    
    { wbs: '9', task: 'POOL & OUTDOOR FEATURES', type: 'STANDARD', start: 'Jun 23', end: 'Aug 28', days: 67, budget: 42500, isSection: true },
    { wbs: '9.1', task: 'Pool Permit Submission & Approval', type: 'CRITICAL', start: 'Jun 10', end: 'Jun 20', days: 11, budget: 0 },
    { wbs: '9.2', task: 'Pool Excavation & Underground Plumbing', type: 'STANDARD', start: 'Jun 23', end: 'Jun 30', days: 8, budget: 8500 },
    { wbs: '9.3', task: 'Pool Underground Plumbing Inspection', type: 'CRITICAL', start: 'Jul 1', end: 'Jul 1', days: 1, budget: 0 },
    { wbs: '9.4', task: 'Pool Steel & Shotcrete', type: 'STANDARD', start: 'Jul 2', end: 'Jul 11', days: 10, budget: 18000 },
    { wbs: '9.5', task: 'Pool Steel Inspection', type: 'CRITICAL', start: 'Jul 8', end: 'Jul 8', days: 1, budget: 0 },
    { wbs: '9.6', task: 'Pool Tile & Deck Construction', type: 'STANDARD', start: 'Jul 14', end: 'Aug 1', days: 19, budget: 12000 },
    { wbs: '9.7', task: 'Pool Deck Inspection', type: 'CRITICAL', start: 'Jul 31', end: 'Jul 31', days: 1, budget: 0 },
    { wbs: '9.8', task: 'Pool Equipment & Electrical', type: 'STANDARD', start: 'Aug 5', end: 'Aug 16', days: 12, budget: 4000 },
    { wbs: '9.9', task: 'Pool Electrical & Bonding Inspection', type: 'CRITICAL', start: 'Aug 16', end: 'Aug 16', days: 1, budget: 0 },
    { wbs: '9.10', task: 'Final Pool Inspection', type: 'CRITICAL', start: 'Aug 28', end: 'Aug 28', days: 1, budget: 0 },
    
    { wbs: '10', task: 'INSULATION & DRYWALL', type: 'STANDARD', start: 'Aug 15', end: 'Sep 19', days: 36, budget: 45500, isSection: true },
    { wbs: '10.1', task: 'Install Insulation', type: 'STANDARD', start: 'Aug 15', end: 'Aug 25', days: 11, budget: 12500 },
    { wbs: '10.2', task: 'Insulation Inspection', type: 'CRITICAL', start: 'Aug 26', end: 'Aug 26', days: 1, budget: 0 },
    { wbs: '10.3', task: 'Drywall Installation & Finishing', type: 'STANDARD', start: 'Aug 27', end: 'Sep 19', days: 24, budget: 33000 },
    
    { wbs: '11', task: 'EXTERIOR FINISHES', type: 'STANDARD', start: 'Sep 1', end: 'Oct 15', days: 45, budget: 86060, isSection: true },
    { wbs: '11.1', task: 'Exterior Stucco/Paint', type: 'STANDARD', start: 'Sep 1', end: 'Sep 25', days: 25, budget: 45060 },
    { wbs: '11.2', task: 'Windows, Doors & Garage Door', type: 'STANDARD', start: 'Sep 15', end: 'Oct 5', days: 21, budget: 41000 },
    
    { wbs: '12', task: 'INTERIOR FINISHES', type: 'STANDARD', start: 'Sep 11', end: 'Nov 10', days: 61, budget: 154050, isSection: true },
    { wbs: '12.1', task: 'Interior Paint', type: 'STANDARD', start: 'Sep 11', end: 'Oct 11', days: 31, budget: 22000 },
    { wbs: '12.2', task: 'Interior Trim & Doors', type: 'STANDARD', start: 'Sep 22', end: 'Oct 10', days: 19, budget: 28500 },
    { wbs: '12.3', task: 'Flooring Installation', type: 'STANDARD', start: 'Sep 25', end: 'Oct 11', days: 17, budget: 51461 },
    { wbs: '12.4', task: 'Kitchen Cabinets & Countertops', type: 'STANDARD', start: 'Oct 13', end: 'Oct 24', days: 12, budget: 42300 },
    { wbs: '12.5', task: 'Bathroom Finishes', type: 'STANDARD', start: 'Oct 15', end: 'Oct 28', days: 14, budget: 34975 },
    
    { wbs: '13', task: 'MEP FINAL TRIM & FIXTURES', type: 'STANDARD', start: 'Oct 27', end: 'Nov 10', days: 15, budget: 20550, isSection: true },
    { wbs: '13.1', task: 'Plumbing Fixtures Installation', type: 'STANDARD', start: 'Oct 27', end: 'Nov 5', days: 10, budget: 8500 },
    { wbs: '13.2', task: 'Electrical Fixtures & Appliances', type: 'STANDARD', start: 'Oct 27', end: 'Nov 10', days: 15, budget: 12050 },
    { wbs: '13.3', task: 'HVAC Final Trim', type: 'STANDARD', start: 'Nov 3', end: 'Nov 10', days: 8, budget: 0 },
    
    { wbs: '14', task: 'FINAL INSPECTIONS & COMPLETION', type: 'CRITICAL', start: 'Nov 11', end: 'Dec 18', days: 38, budget: 13100, isSection: true },
    { wbs: '14.1', task: 'Final Touches & Punch List', type: 'STANDARD', start: 'Nov 11', end: 'Nov 21', days: 11, budget: 5000 },
    { wbs: '14.2', task: 'Landscaping & Exterior Completion', type: 'STANDARD', start: 'Nov 11', end: 'Nov 21', days: 11, budget: 8100 },
    { wbs: '14.3', task: 'Schedule All Final Inspections', type: 'CRITICAL', start: 'Nov 30', end: 'Nov 30', days: 1, budget: 0 },
    { wbs: '14.4', task: 'Final Electrical Inspection', type: 'CRITICAL', start: 'Dec 2', end: 'Dec 2', days: 1, budget: 0 },
    { wbs: '14.5', task: 'Final Plumbing Inspection', type: 'CRITICAL', start: 'Dec 2', end: 'Dec 2', days: 1, budget: 0 },
    { wbs: '14.6', task: 'Final Mechanical/HVAC Inspection', type: 'CRITICAL', start: 'Dec 3', end: 'Dec 3', days: 1, budget: 0 },
    { wbs: '14.7', task: 'Final Building Inspection', type: 'CRITICAL', start: 'Dec 3', end: 'Dec 3', days: 1, budget: 0 },
    { wbs: '14.8', task: 'Address Final Inspection Items', type: 'STANDARD', start: 'Dec 4', end: 'Dec 11', days: 8, budget: 0 },
    { wbs: '14.9', task: 'Request Certificate of Occupancy', type: 'CRITICAL', start: 'Dec 15', end: 'Dec 15', days: 1, budget: 0 },
    { wbs: '14.10', task: '✅ CERTIFICATE OF OCCUPANCY ISSUED', type: 'MILESTONE', start: 'Dec 18', end: 'Dec 18', days: 1, budget: 0 }
];

let currentUser = null;

// Authentication functions
async function hashPassword(password) {
    const encoder = new TextEncoder();
    const data = encoder.encode(password);
    const hash = await crypto.subtle.digest('SHA-256', data);
    return Array.from(new Uint8Array(hash))
        .map(b => b.toString(16).padStart(2, '0'))
        .join('');
}

function getUsers() {
    const users = localStorage.getItem('deraUsers');
    return users ? JSON.parse(users) : {};
}

function saveUsers(users) {
    localStorage.setItem('deraUsers', JSON.stringify(users));
}

function getUserData(username) {
    const key = `deraUserData_${username}`;
    const data = localStorage.getItem(key);
    return data ? JSON.parse(data) : null;
}

function saveUserData(username, data) {
    const key = `deraUserData_${username}`;
    localStorage.setItem(key, JSON.stringify(data));
}

// Show/hide screens
function showScreen(screenId) {
    document.getElementById('loginScreen').classList.add('hidden');
    document.getElementById('registerScreen').classList.add('hidden');
    document.getElementById('mainApp').classList.add('hidden');
    document.getElementById(screenId).classList.remove('hidden');
}

// Login form handler
document.getElementById('loginForm').addEventListener('submit', async (e) => {
    e.preventDefault();
    const username = document.getElementById('loginUsername').value.trim();
    const password = document.getElementById('loginPassword').value;
    const errorDiv = document.getElementById('loginError');

    if (!username || !password) {
        errorDiv.textContent = 'Please enter both username and password';
        errorDiv.classList.remove('hidden');
        return;
    }

    const users = getUsers();
    const hashedPassword = await hashPassword(password);

    if (users[username] && users[username] === hashedPassword) {
        currentUser = username;
        sessionStorage.setItem('currentUser', username);
        errorDiv.classList.add('hidden');
        showMainApp();
    } else {
        errorDiv.textContent = 'Invalid username or password';
        errorDiv.classList.remove('hidden');
    }
});

// Register form handler
document.getElementById('registerForm').addEventListener('submit', async (e) => {
    e.preventDefault();
    const username = document.getElementById('registerUsername').value.trim();
    const password = document.getElementById('registerPassword').value;
    const confirmPassword = document.getElementById('registerPasswordConfirm').value;
    const errorDiv = document.getElementById('registerError');
    const successDiv = document.getElementById('registerSuccess');

    errorDiv.classList.add('hidden');
    successDiv.classList.add('hidden');

    if (username.length < 3) {
        errorDiv.textContent = 'Username must be at least 3 characters';
        errorDiv.classList.remove('hidden');
        return;
    }

    if (password.length < 6) {
        errorDiv.textContent = 'Password must be at least 6 characters';
        errorDiv.classList.remove('hidden');
        return;
    }

    if (password !== confirmPassword) {
        errorDiv.textContent = 'Passwords do not match';
        errorDiv.classList.remove('hidden');
        return;
    }

    const users = getUsers();
    if (users[username]) {
        errorDiv.textContent = 'Username already exists';
        errorDiv.classList.remove('hidden');
        return;
    }

    const hashedPassword = await hashPassword(password);
    users[username] = hashedPassword;
    saveUsers(users);

    successDiv.textContent = 'Account created successfully! You can now login.';
    successDiv.classList.remove('hidden');
    
    document.getElementById('registerForm').reset();
    
    setTimeout(() => {
        showScreen('loginScreen');
        document.getElementById('loginUsername').value = username;
    }, 2000);
});

// Switch between login and register
document.getElementById('showRegister').addEventListener('click', (e) => {
    e.preventDefault();
    showScreen('registerScreen');
});

document.getElementById('showLogin').addEventListener('click', (e) => {
    e.preventDefault();
    showScreen('loginScreen');
});

// Logout function
function logout() {
    currentUser = null;
    sessionStorage.removeItem('currentUser');
    showScreen('loginScreen');
    document.getElementById('loginForm').reset();
}

// Show main app
function showMainApp() {
    showScreen('mainApp');
    document.getElementById('currentUsername').textContent = currentUser;
    renderTable();
    loadFromUserAccount();
}

// Check if user is already logged in
function checkSession() {
    const sessionUser = sessionStorage.getItem('currentUser');
    if (sessionUser) {
        currentUser = sessionUser;
        showMainApp();
    } else {
        showScreen('loginScreen');
    }
}

// Format currency
function formatCurrency(amount) {
    return new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
        minimumFractionDigits: 0,
        maximumFractionDigits: 0
    }).format(amount);
}

// Calculate totals
function calculateTotals() {
    let totalBudget = 0;
    let totalQuoted = 0;

    projectData.forEach((item, index) => {
        totalBudget += item.budget;
        const quoteInput = document.getElementById(`quote-${index}`);
        if (quoteInput) {
            const quote = parseFloat(quoteInput.value) || 0;
            totalQuoted += quote;
        }
    });

    const variance = totalBudget - totalQuoted;
    
    document.getElementById('totalBudget').textContent = formatCurrency(totalBudget);
    document.getElementById('totalActual').textContent = formatCurrency(totalQuoted);
    document.getElementById('variance').textContent = formatCurrency(variance);
    
    document.getElementById('footerBudget').textContent = formatCurrency(totalBudget);
    document.getElementById('footerQuoted').textContent = formatCurrency(totalQuoted);
    document.getElementById('footerVariance').textContent = formatCurrency(variance);

    const varianceCard = document.getElementById('variance').parentElement;
    if (variance > 0) {
        varianceCard.classList.add('highlight-underbudget');
        varianceCard.classList.remove('highlight-overbudget');
    } else if (variance < 0) {
        varianceCard.classList.add('highlight-overbudget');
        varianceCard.classList.remove('highlight-underbudget');
    }

    let itemsWithQuotes = 0;
    projectData.forEach((item, index) => {
        if (!item.isSection) {
            const quoteInput = document.getElementById(`quote-${index}`);
            if (quoteInput && parseFloat(quoteInput.value) > 0) {
                itemsWithQuotes++;
            }
        }
    });
    const totalItems = projectData.filter(item => !item.isSection).length;
    const completionPercent = Math.round((itemsWithQuotes / totalItems) * 100);
    document.getElementById('completion').textContent = completionPercent + '%';
}

// Update row variance
function updateRowVariance(index) {
    const quoteInput = document.getElementById(`quote-${index}`);
    const varianceCell = document.getElementById(`variance-${index}`);
    
    if (quoteInput && varianceCell) {
        const budget = projectData[index].budget;
        const quote = parseFloat(quoteInput.value) || 0;
        const variance = budget - quote;
        
        varianceCell.textContent = formatCurrency(variance);
        
        if (variance > 0) {
            varianceCell.style.color = '#27ae60';
        } else if (variance < 0) {
            varianceCell.style.color = '#e74c3c';
        } else {
            varianceCell.style.color = '#7f8c8d';
        }
    }
    
    calculateTotals();
    saveToUserAccount();
}

// Render table
function renderTable() {
    const tbody = document.getElementById('projectBody');
    tbody.innerHTML = '';

    projectData.forEach((item, index) => {
        const row = document.createElement('tr');
        
        if (item.isSection) {
            row.classList.add('section-header');
        } else if (item.type === 'MILESTONE') {
            row.classList.add('milestone');
        } else if (item.type === 'CRITICAL') {
            row.classList.add('critical');
        }

        const typeBadgeClass = item.type === 'MILESTONE' ? 'type-milestone' : 
                             item.type === 'CRITICAL' ? 'type-critical' : 'type-standard';

        row.innerHTML = `
            <td class="wbs-cell">${item.wbs}</td>
            <td>${item.task}</td>
            <td><span class="type-badge ${typeBadgeClass}">${item.type}</span></td>
            <td>${item.start}</td>
            <td>${item.end}</td>
            <td style="text-align: center;">${item.days}</td>
            <td class="amount">${formatCurrency(item.budget)}</td>
            <td>
                ${item.isSection ? '' : `<input type="text" id="contractor-${index}" placeholder="Enter contractor name" onchange="saveToUserAccount()">`}
            </td>
            <td>
                ${item.isSection ? '' : `<input type="number" id="quote-${index}" placeholder="$0" min="0" step="100" oninput="updateRowVariance(${index})">`}
            </td>
            <td class="amount" id="variance-${index}">${formatCurrency(0)}</td>
        `;

        tbody.appendChild(row);
    });

    loadFromUserAccount();
}

// Save to user account
function saveToUserAccount() {
    if (!currentUser) return;

    const data = {};
    projectData.forEach((item, index) => {
        const contractorInput = document.getElementById(`contractor-${index}`);
        const quoteInput = document.getElementById(`quote-${index}`);
        
        if (contractorInput) {
            data[`contractor-${index}`] = contractorInput.value;
        }
        if (quoteInput) {
            data[`quote-${index}`] = quoteInput.value;
        }
    });
    
    saveUserData(currentUser, data);
    
    const saveBtn = document.querySelector('.btn-secondary');
    const originalText = saveBtn.innerHTML;
    saveBtn.innerHTML = '✅ Saved!';
    saveBtn.style.background = 'linear-gradient(135deg, #27ae60 0%, #229954 100%)';
    setTimeout(() => {
        saveBtn.innerHTML = originalText;
        saveBtn.style.background = '';
    }, 2000);
}

// Load from user account
function loadFromUserAccount() {
    if (!currentUser) return;

    const savedData = getUserData(currentUser);
    if (savedData) {
        Object.keys(savedData).forEach(key => {
            const element = document.getElementById(key);
            if (element) {
                element.value = savedData[key];
                
                if (key.startsWith('quote-')) {
                    const index = parseInt(key.split('-')[1]);
                    updateRowVariance(index);
                }
            }
        });
    }
}

// Export to CSV
function exportToCSV() {
    let csv = 'WBS,Task Name,Type,Start Date,End Date,Days,Budget,Contractor Name,Contractor Quote,Variance\n';
    
    projectData.forEach((item, index) => {
        const contractorInput = document.getElementById(`contractor-${index}`);
        const quoteInput = document.getElementById(`quote-${index}`);
        
        const contractor = contractorInput ? contractorInput.value : '';
        const quote = quoteInput ? (parseFloat(quoteInput.value) || 0) : 0;
        const variance = item.budget - quote;
        
        csv += `"${item.wbs}","${item.task}","${item.type}","${item.start}","${item.end}",${item.days},${item.budget},"${contractor}",${quote},${variance}\n`;
    });

    const blob = new Blob([csv], { type: 'text/csv' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `DERA_Residence_${currentUser}_${new Date().toISOString().split('T')[0]}.csv`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    window.URL.revokeObjectURL(url);
}

// Initialize on page load
document.addEventListener('DOMContentLoaded', function() {
    checkSession();
});
