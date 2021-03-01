import React from 'react';

const Total = (props) => {
    const total = props.total

    const totalSalary = total.reduce( (sum, salary) => sum + salary,0)

    return (
        <div>
            <h2>Player in Club : {total.length}</h2> <i class="fas fa-money-check-alt"></i> 
            <h2> Total Budget : {totalSalary}</h2>

        </div>
    );
};

export default Total;