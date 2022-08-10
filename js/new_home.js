/* UC4: Display Employee Details in Tabular Format using Template Literals */

window.addEventListener('DOMContentLoaded', () => {
    createInnerHTML();
    createInnerHTMLUC5();
});

// Template literal ES6 feature
const createInnerHTML = () => {
    const headerHtml = "<th></th><th>Name</th><th>Gender</th><th>Department</th>" +
                        "<th>Salary</th><th>Start Date</th><th>Actions</th>";
    const innerHtml = `${headerHtml}
        <tr>
            <td><img class="profile" alt="" src="../assets/profile-images/Ellipse -2.png"></td>
            <td>Narayan Mahadevan</td>
            <td>Male</td>
            <td><div class="dept-label">HR</div><div class="dept-label">Finance</div></td>
            <td>300000</td>
            <td>1 Nov 2020</td>
            <td>
                <img id="1" onclick="remove(this)" alt="delete" src="../assets/icons/delete-black-18dp.svg">
                <img id="1" onclick="update(this)" alt="edit" src="../assets/icons/create-black-18dp.svg">
            </td>
        </tr>
        `;
    document.querySelector('#table-display').innerHTML = innerHtml;
}

// /* UC5:- Ability to view Employee Payroll details in a Tabular Format from JSON Object. */
// const createInnerHTMLUC5 = () => {
//     const headerHtml="<th></th><th>Name</th><th>Gender</th><th>Department</th><th>Salary</th><th>Start Date</th><th>Actions</th>"
//     let innerHtml = `${headerHtml}`;
//     let empPayrollList = createEmployeePayrollJSON();
//     for (const empPayrollData of empPayrollList) {
//       innerHtml = `${innerHtml}
//       <tr>
//         <td><img class="profile" alt="" 
//                   src="${empPayrollData._profilePic}">
//         </td>
//         <td>${empPayrollData._name}</td>
//         <td>${empPayrollData._gender}</td>
//         <td>${getDeptHtml(empPayrollData._department)}</td>
//         <td>${empPayrollData._salary}</td>
//         <td>${empPayrollData._startDate}</td>
//         <td>
//           <img name="${empPayrollData._id}" onclick="remove(this)" 
//                src="../assets/icons/delete-black-18dp.svg" alt="delete">
//           <img name="${empPayrollData._id}" onclick="update(this)" 
//                src="../assets/icons/create-black-18dp.svg" alt="edit">
//         </td>
//       </tr>
//       `;
//     }
//     document.querySelector("#table-display").innerHTML = innerHtml;
// }

// const createEmployeePayrollJSON = () => {
//     let empPayrollListLocal = [
//         {
//             _name: 'Vaibhav Manapure',
//             _gender: 'male',
//             _department: [
//                 'Engineering',
//                 'Finance'
//             ],
//             _salary: '500000',
//             _startDate: '29 Oct 2020',
//             _note: '',
//             _id: new Date().getTime(),
//             _profilePic: '../assets/profile-images/Ellipse -3.png'
//         },
//         {
//             _name: 'Pranjali Seth',
//             _gender: 'female',
//             _department: [
//                 'Sales',
//             ],
//             _salary: '400000',
//             _startDate: '29 March 2019',
//             _note: '',
//             _id: new Date().getTime() + 1,
//             _profilePic: '../assets/profile-images/Ellipse -1.png'
//         }
//     ];
//     return empPayrollListLocal;
// }

const getDeptHtml = (deptList) => {
    let deptHtml = '';
    for (const dept of deptList) {
        deptHtml = `${deptHtml} <div class='dept-label'>${dept}</div>`
    }
    return deptHtml;
}


const getEmployeePayrollDataFromStorage = () => {
    return localStorage.getItem('EmployeePayrollList') ? 
            JSON.parse(localStorage.getItem('EmployeePayrollList')) : [];  
}

const createInnerHTML = () => {
    const headerHtml = "<th></th><th>Name</th><th>Gender</th><th>Department</th>"+
                     "<th>Salary</th><th>Start Date</th><th>Actions</th>";
    if (empPayrollList.length == 0) return;
    let innerHtml = `${headerHtml}`;
    for (const empPayrollData of empPayrollList) {
      innerHtml = `${innerHtml}
      <tr>
        <td><img class="profile" alt="" 
                  src="${empPayrollData._profilePic}">
        </td>
        <td>${empPayrollData._name}</td>
        <td>${empPayrollData._gender}</td>
        <td>${getDeptHtml(empPayrollData._department)}</td>
        <td>${empPayrollData._salary}</td>
        <td>${stringifyDate(empPayrollData._startDate)}</td>
        <td>
          <img id="${empPayrollData._id}" onclick="remove(this)" 
             src="../assets/icons/delete-black-18dp.svg" alt="delete">
          <img id="${empPayrollData._id}" onclick="update(this)" 
             src="../assets/icons/create-black-18dp.svg" alt="edit">
        </td>
      </tr>
      `;
    }
    document.querySelector("#table-display").innerHTML = innerHtml;
}

const getDeptHtml = (deptList) => {
    let deptHtml = '';
    for (const dept of deptList) {
        deptHtml = `${deptHtml} <div class='dept-label'>${dept}</div>`
    }
    return deptHtml;
  }

   //Day48-UC2
let empPayrollList;
window.addEventListener('DOMContentLoaded', (event) => {
    empPayrollList = getEmployeePayrollDataFromStorage();
    document.querySelector(".emp-count").textContent = empPayrollList.length;
    createInnerHTML();
    localStorage.removeItem('editEmp');
});
  