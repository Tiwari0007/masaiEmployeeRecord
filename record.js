document.addEventListener('DOMContentLoaded', function() {
    const form = document.querySelector('form');
    const tableBody = document.querySelector('tbody');
  
    form.addEventListener('submit', function(event) {
      event.preventDefault(); // Prevent form submission
  
      // Retrieve form inputs
      const name = document.getElementById('name').value;
      const employeeID = document.getElementById('employeeID').value;
      const department = document.getElementById('department').value;
      const experience = document.getElementById('exp').value;
      const email = document.getElementById('email').value;
      const mobile = document.getElementById('mbl').value;
  
      // Calculate role based on experience
      let role;
      if (experience > 5) {
        role = 'Senior';
      } else if (experience >= 2 && experience <= 5) {
        role = 'Junior';
      } else {
        role = 'Fresher';
      }
  
      // Create new table row
      const newRow = document.createElement('tr');
      newRow.innerHTML = `
        <td>${name}</td>
        <td>${employeeID}</td>
        <td>${department}</td>
        <td>${experience}</td>
        <td>${email}</td>
        <td>${mobile}</td>
        <td>${role}</td>
        <td><button onclick="deleteRow(this)">Delete</button></td>
      `;
  
      // Append new row to table body
      tableBody.appendChild(newRow);
  
      // Reset form
      form.reset();
    });
  });
  
  function deleteRow(button) {
    const row = button.parentNode.parentNode;
    row.parentNode.removeChild(row);
  }
  