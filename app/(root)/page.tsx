import HeaderBox from '@/components/HeaderBox';
import RightSidebar from '@/components/RightSideBar';
import TotalBalanceBox from '@/components/TotalBalanceBox';
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

                    <TotalBalanceBox 
                      accounts={[]}
                      totalBanks={1}
                      totalCurrentBalance={1250.75}
                      
                      />
                </header>

                RECENT TRANSACTIONS
            </div>
            <RightSidebar user={{
                $id: '',
                email: '',
                userId: '',
                dwollaCustomerUrl: '',
                dwollaCustomerId: '',
                firstName: '',
                lastName: '',
                address1: '',
                city: '',
                state: '',
                postalCode: '',
                dateOfBirth: '',
                ssn: ''
            }} transactions={[]} banks={[]}>
            

            </RightSidebar>

        </section>
    )
}

export default Dashboard