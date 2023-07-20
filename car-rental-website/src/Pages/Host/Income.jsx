import React from "react"

export default function Income() {
    const transactionsData = [
        { amount: "72,000", date: "Jan 3, '23", id: "1" },
        { amount: "56,000", date: "Dec 12, '22", id: "2" },
        { amount: "98,000", date: "Dec 3, '22", id: "3" },
    ]
    return (
        <section className="host-income">
            <h1>Income</h1>
            <p>
                Last <span>30 days</span>
            </p>
            <h2>$2,260</h2>
            <img
                className="graph"
                src="/assets/images/income-graph.png"
                alt="Income graph"
            />
            <div className="info-header">
                <h3>Your transactions (3)</h3>
                <p>
                    Last <span>30 days</span>
                </p>
            </div>
            <div className="transaction-container">
                {transactionsData.map((item) => (
                    <div key={item.id} className="transaction">
                        <div className="amount-income">#{item.amount} <span>Withdrawal</span></div>
                        <p>{item.date}</p>
                    </div>
                ))}
            </div>
        </section>
    )
}
