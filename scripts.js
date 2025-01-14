// scripts.js
document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    if (username && password) {
        alert('Login successful!');
    } else {
        alert('Please enter both username and password.');
    }
});



//home//
// scripts.js

// Function to handle form submission for Admin Login
document.getElementById('adminLoginForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const adminUsername = document.getElementById('adminUsername').value;
    const adminPassword = document.getElementById('adminPassword').value;

    if (adminUsername && adminPassword) {
        alert('Admin login successful!');
        // Redirect to Admin Dashboard or desired page
        window.location.href = 'admin-dashboard.html';
    } else {
        alert('Please enter both username and password.');
    }
});

// Function to handle form submission for User Login
document.getElementById('userLoginForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const userUsername = document.getElementById('userUsername').value;
    const userPassword = document.getElementById('userPassword').value;

    if (userUsername && userPassword) {
        alert('User login successful!');
        // Redirect to User Dashboard or desired page
        window.location.href = 'user-dashboard.html';
    } else {
        alert('Please enter both username and password.');
    }
});


//maintance//
// scripts.js

// Function to handle form submission for Adding a Book
document.getElementById('addBookForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const bookTitle = document.getElementById('bookTitle').value;
    const authorName = document.getElementById('authorName').value;
    const publicationYear = document.getElementById('publicationYear').value;
    const genre = document.getElementById('genre').value;
    const isbn = document.getElementById('isbn').value;

    if (bookTitle && authorName && publicationYear && genre && isbn) {
        alert('Book added successfully!');
        // Code to add book to the system can be placed here
    } else {
        alert('Please fill in all the fields.');
    }
});

// Function to handle form submission for Updating a Book
document.getElementById('updateBookForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const bookId = document.getElementById('bookId').value;
    const newBookTitle = document.getElementById('newBookTitle').value;
    const newAuthorName = document.getElementById('newAuthorName').value;
    const newPublicationYear = document.getElementById('newPublicationYear').value;
    const newGenre = document.getElementById('newGenre').value;
    const newIsbn = document.getElementById('newIsbn').value;

    if (bookId && (newBookTitle || newAuthorName || newPublicationYear || newGenre || newIsbn)) {
        alert('Book updated successfully!');
        // Code to update book in the system can be placed here
    } else {
        alert('Please enter the Book ID and at least one field to update.');
    }
});



//reports///
// scripts.js

// Sample data for demonstration
const availableBooks = [
    { title: "The Great Gatsby", author: "F. Scott Fitzgerald", genre: "Fiction" },
    { title: "To Kill a Mockingbird", author: "Harper Lee", genre: "Fiction" },
    { title: "1984", author: "George Orwell", genre: "Dystopian" }
];

const issuedBooks = [
    { title: "Brave New World", author: "Aldous Huxley", issuedDate: "05-Jan-2025", returnDate: "20-Jan-2025" },
    { title: "The Catcher in the Rye", author: "J.D. Salinger", issuedDate: "03-Jan-2025", returnDate: "18-Jan-2025" }
];

// Function to generate and display available books report
function displayAvailableBooks() {
    const tableBody = document.querySelector('#availableBooksTable tbody');
    availableBooks.forEach((book, index) => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${book.title}</td>
            <td>${book.author}</td>
            <td>${book.genre}</td>
            <td><input type="radio" name="bookSelection" value="${index}"></td>
        `;
        tableBody.appendChild(row);
    });
}

// Function to generate and display issued books report
function displayIssuedBooks() {
    const tableBody = document.querySelector('#issuedBooksTable tbody');
    issuedBooks.forEach(book => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${book.title}</td>
            <td>${book.author}</td>
            <td>${book.issuedDate}</td>
            <td>${book.returnDate}</td>
        `;
        tableBody.appendChild(row);
    });
}

// Call the functions to display the reports
document.addEventListener('DOMContentLoaded', () => {
    displayAvailableBooks();
    displayIssuedBooks();
});


//transaction//
// scripts.js

// Function to handle form submission for Book Issue
document.getElementById('bookIssueForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const issueBookTitle = document.getElementById('issueBookTitle').value;
    const issueAuthorName = document.getElementById('issueAuthorName').value;
    const issueDate = document.getElementById('issueDate').value;
    const returnDate = document.getElementById('returnDate').value;
    
    if (issueBookTitle && issueAuthorName && issueDate && returnDate) {
        alert('Book issued successfully!');
        // Code to process book issue can be placed here
    } else {
        alert('Please fill in all the required fields.');
    }
});

// Function to handle form submission for Book Return
document.getElementById('bookReturnForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const returnBookTitle = document.getElementById('returnBookTitle').value;
    const returnAuthorName = document.getElementById('returnAuthorName').value;
    const returnSerialNo = document.getElementById('returnSerialNo').value;
    const returnIssueDate = document.getElementById('returnIssueDate').value;
    const returnReturnDate = document.getElementById('returnReturnDate').value;
    
    if (returnBookTitle && returnAuthorName && returnSerialNo && returnIssueDate && returnReturnDate) {
        alert('Book returned successfully!');
        // Code to process book return can be placed here
    } else {
        alert('Please fill in all the required fields.');
    }
});

// Function to handle form submission for Paying Fine
document.getElementById('finePayForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const fineBookTitle = document.getElementById('fineBookTitle').value;
    const fineAuthorName = document.getElementById('fineAuthorName').value;
    const fineAmount = document.getElementById('fineAmount').value;
    const finePaid = document.getElementById('finePaid').checked;
    
    if (fineBookTitle && fineAuthorName && fineAmount && finePaid) {
        alert('Fine paid successfully!');
        // Code to process fine payment can be placed here
    } else {
        alert('Please ensure all fields are correctly filled and fine is marked as paid.');
    }
});


//membership//
// scripts.js

// Function to handle form submission for Adding Membership
document.getElementById('addMembershipForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const memberName = document.getElementById('memberName').value;
    const memberEmail = document.getElementById('memberEmail').value;
    const memberPhone = document.getElementById('memberPhone').value;
    const membershipType = document.getElementById('membershipType').value;

    if (memberName && memberEmail && memberPhone && membershipType) {
        alert('Membership added successfully!');
        // Code to add membership to the system can be placed here
    } else {
        alert('Please fill in all the required fields.');
    }
});

// Function to handle form submission for Updating Membership
document.getElementById('updateMembershipForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const membershipNumber = document.getElementById('membershipNumber').value;
    const updateMembershipType = document.getElementById('updateMembershipType').value;
    const membershipStatus = document.getElementById('membershipStatus').value;

    if (membershipNumber && updateMembershipType && membershipStatus) {
        alert('Membership updated successfully!');
        // Code to update membership in the system can be placed here
    } else {
        alert('Please fill in all the required fields.');
    }
});
