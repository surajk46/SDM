import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const ShowAllTransaction = () => {
  const [transactions, setTransactions] = useState([]);

  // useEffect(() => {
  //   fetch('http://51.20.34.217:8080/getalltransaction')
  //   fetch('https://localhost:7236/api/Payments')
  //     .then(response => response.json())
  //     .then(data => setTransactions(data))
  //     .catch(error => console.error('Error fetching data:', error));
  // }, []);
  useEffect(() => {
    const firstURL = 'https://localhost:7236/api/Payments';
    const secondURL = 'http://51.20.34.217:8080/getalltransaction';

    fetch(firstURL)
      .then(response => {
        if (!response.ok) {
          throw new Error('First URL request failed');
        }
        return response.json();
      })
      .then(data => {
        setTransactions(data);
      })
      .catch(firstURLError => {
        console.error('Error fetching from the first URL:', firstURLError);

        // If there was an error with the first URL, try fetching from the second URL
        fetch(secondURL)
          .then(response => {
            if (!response.ok) {
              throw new Error('Second URL request failed');
            }
            return response.json();
          })
          .then(data => {
            setTransactions(data);
          })
          .catch(secondURLError => {
            console.error('Error fetching from the second URL:', secondURLError);
          });
      });
  }, []);
  
  const [isNavbarOpen, setIsNavbarOpen] = useState(false);
      const toggleNavbar = () => {
          setIsNavbarOpen(!isNavbarOpen);
      };
  return (
    <div className="container">
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <Link  className="navbar-brand">Home Rental System</Link>
            <button
                className={`navbar-toggler ${isNavbarOpen ? 'collapsed' : ''}`}
                type="button"
                data-toggle="collapse"
                data-target="#navbarNav"
                aria-controls="navbarNav"
                aria-expanded={isNavbarOpen}
                aria-label="Toggle navigation"
                onClick={toggleNavbar}
            >
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className={`collapse navbar-collapse ${isNavbarOpen ? 'show' : ''}`} id="navbarNav">
                <ul className="navbar-nav ml-auto">
                    <li className="nav-item">
                        <Link to="/getalltenants" className="nav-link">Show All Tenants</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/getallowners" className="nav-link">Show All Owners</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/getallproperties" className="nav-link">Show All Properties</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/getalltransactions" className="nav-link">Show All Transactions</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/logout" className="nav-link">Log Out</Link>
                    </li>
                </ul>
            </div>
        </nav>
  <h1 class="text-center">Transaction History</h1>
  <div class="table-responsive">
    <table class="table table-striped table-bordered table-hover">
        <thead class="bg-dark text-white">
            <tr>
                <th>ID</th>
                <th>Email</th>
                <th>Date</th>
                <th>Amount</th>
            </tr>
        </thead>
        <tbody>
            {transactions.map(transaction => (
                <tr key={transaction.id}>
                    <td>{transaction.id}</td>
                    <td>{transaction.login?.email || transaction.login_id?.email}</td>
                    <td>{transaction.date}</td>
                    <td>${transaction.amount.toFixed(2)}</td>
                </tr>
            ))}
        </tbody>
    </table>
</div>

</div>
  );
};

export default ShowAllTransaction;
