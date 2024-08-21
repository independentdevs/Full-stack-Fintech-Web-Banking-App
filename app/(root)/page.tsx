import React from 'react'

const Dashboard = () => {
    const loggedIn = { firstName: 'Kenneth'};
    
    return (
        <section className="home">
            <div className="home-content">
                <header className="home-header">
                    <HeaderBox 
                      type="greeting"
                      title="Welcome"
                      user= {loggedIn?.firstName || 'Guest'}
                      subtext="Access and manage your account and transactions efficiently."
                    />
                </header>
            </div>
        </section>
    )
}

export default Dashboard