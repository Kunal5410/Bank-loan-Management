import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

function LoanTable({ data }) {
  const getStatusClass = (status) => {
    switch (status) {
      case "PENDING":
        return "badge text-bg-warning text-white text-center";
      case "APPROVED":
        return "badge text-bg-success text-white text-center";
      case "REJECTED":
        return "badge text-bg-danger text-white text-center";
      default:
        return "";
    }
  };

  return (
    <table className="table table-bordered table-hover shadow mt-3">
      <thead className="table-light">
        <tr>
          <th>APPLICATION</th>
          <th>CUSTOMER</th>
          <th>LOAN DETAILS</th>
          <th>STATUS</th>
        </tr>
      </thead>
      <tbody>
        {data.length > 0 ? (
          data.map((app) => (
            <tr key={app.applicationId}>
              <td>
                {app.applicationId}<br />
                <small>{app.date}</small>
              </td>
              <td>{app.customerName}</td>
              <td>
                {app.loanType}<br />
                <small>{app.amount} / {app.duration}</small>
              </td>
              <td className={getStatusClass(app.status)}>
                {app.status}
              </td>
            </tr>
          ))
        ) : (
          <tr>
            <td colSpan="4" className="text-center">No records found</td>
          </tr>
        )}
      </tbody>
    </table>
  );
}

export default LoanTable;





// import React from "react";
// import 'bootstrap/dist/css/bootstrap.min.css';

// const loanApplications = [
//   {
//     applicationId: "APP001",
//     date: "2024-01-15",
//     customerName: "John Anderson",
//     loanType: "Personal Loan",
//     amount: "$25,000",
//     duration: "36m",
//     status: "PENDING",
//   },
//   {
//     applicationId: "APP002",
//     date: "2024-02-10",
//     customerName: "Sarah Williams",
//     loanType: "Home Loan",
//     amount: "$150,000",
//     duration: "240m",
//     status: "APPROVED",
//   },
//   {
//     applicationId: "APP003",
//     date: "2024-03-05",
//     customerName: "Michael Lee",
//     loanType: "Auto Loan",
//     amount: "$30,000",
//     duration: "60m",
//     status: "REJECTED",
//   },
//   {
//     applicationId: "APP004",
//     date: "2024-04-20",
//     customerName: "Emily Clark",
//     loanType: "Education Loan",
//     amount: "$40,000",
//     duration: "48m",
//     status: "PENDING",
//   },
// ];

// function LoanTable() {
//   const getStatusClass = (status) => {
//     switch (status) {
//       case "PENDING":
//         return "badge text-bg-warning text-white text-center";
//       case "APPROVED":
//         return "badge text-bg-success text-white text-center";
//       case "REJECTED":
//         return "badge text-bg-danger text-white text-center";
//       default:
//         return "";
//     }
//   };

//   return (
//     <div className="container mt-4">
//       <h4>Loan Applications</h4>
//       <table className="table table-bordered table-hover shadow">
//         <thead className="table-light">
//           <tr>
//             <th>APPLICATION</th>
//             <th>CUSTOMER</th>
//             <th>LOAN DETAILS</th>
//             <th>STATUS</th>
//           </tr>
//         </thead>
//         <tbody>
//           {loanApplications.map((app) => (
//             <tr key={app.applicationId}>
//               <td>
//                 {app.applicationId}<br />
//                 <small>{app.date}</small>
//               </td>
//               <td>
//                 {app.customerName}
//               </td>
//               <td>
//                 {app.loanType}<br />
//                 <small>{app.amount} / {app.duration}</small>
//               </td>
//               <td className={getStatusClass(app.status)}>
//                 {app.status}
//               </td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// }

// export default LoanTable;


