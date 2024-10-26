function calculateAge() {
    const day = parseInt(document.getElementById('day').value);
    const month = parseInt(document.getElementById('month').value) - 1; // Month is 0-indexed in JS Date
    const year = parseInt(document.getElementById('year').value);
    
    if (isNaN(day) || isNaN(month) || isNaN(year)) {
        document.getElementById('result').textContent = "Please enter a valid date.";
        return;
    }
    
    const today = new Date();
    const birthDate = new Date(year, month, day);
    let age = today.getFullYear() - birthDate.getFullYear();
    const monthDifference = today.getMonth() - birthDate.getMonth();
    const dayDifference = today.getDate() - birthDate.getDate();

    if (monthDifference < 0 || (monthDifference === 0 && dayDifference < 0)) {
        age--;
    }
    
    document.getElementById('result').textContent = `You are ${age} years old.`;
}