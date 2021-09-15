import { useEffect, useState } from 'react';
import './Client_Details_List.css'
import CLIENT_DETAILS from './Client_Details'

const ClientDetailsList = () => {

    const [status, setStatus] = useState();
    const details = CLIENT_DETAILS;

    useEffect(() => {
        console.log(details.status);
        if (details.status === 'Completed') {
            setStatus('green');
        }
        else if (details.status === 'Active') {
            setStatus('blue');
        }
        else if (details.status === 'Cancelled') {
            setStatus('gray')
        }
        else {
            setStatus('red')
        }
    }, [details]);

    return (
        <div className="client-details-list">
            <table class="table">
                    <tr>
                        <th className = "table-head" >Escrow No</th>
                        <th className = "table-head" >Name</th>
                        <th className = "table-head" >Amount</th>
                        <th className = "table-head" >Methode</th>
                        <th className = "table-head" >Type</th>
                        <th className = "table-head" >To/From</th>
                        <th className = "table-head" >Created On</th>
                        <th className = "table-head" >Completed On</th>
                        <th className = "table-head" >Status</th>
                        <th className = "table-head" >Action</th>
                    </tr>
                    {
                        details.map(( detail ) => 
                            <tr key={detail.id} className = "table-even" >
                                <td className = "table-body" 
                                    data-label = "Escrow No"> 
                                    { detail.escrow_no } 
                                </td>
                                <td className = "table-body" 
                                    data-label = "Name"> 
                                    { detail.name } 
                                </td>
                                <td className = "table-body" 
                                    data-label = "Amount"> 
                                    { detail.amount } 
                                </td>
                                <td className = "table-body" 
                                    data-label = "Methode"> 
                                    { detail.methode } 
                                </td>
                                <td className = "table-body"
                                    className = { detail.type }
                                    data-label = "Type"> 
                                    { detail.type } 
                                </td>
                                <td className = "table-body" 
                                    data-label = "From"> 
                                    { detail.from } 
                                </td>
                                <td className = "table-body" 
                                    data-label = "Created On"> 
                                    { detail.createdon } 
                                </td>
                                <td className = "table-body" 
                                    data-label = "Completed On"> 
                                    { detail.completedon } 
                                </td>
                                <td className = "table-body"
                                    className = { detail.status }
                                    data-label = "Status"> 
                                    { detail.status } 
                                </td>
                                <td className = "table-body" 
                                    data-label = "Action">
                                    <i className={detail.action} aria-hidden="true"></i>
                                </td>
                            </tr>
                        )
                    }
            </table>
        </div>
     );
}
 
export default ClientDetailsList;