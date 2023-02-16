function Table({ data, toggleForm }){
   


    return(
        <div className="middle">
       
        <table>
        <thead>
        <tr >
          <th>Description</th>
          <th>Password</th>
          <th>Actions</th>
        </tr>
        </thead>
     
        <tbody>
        {
            data.map((element, index) => 
            <tr key={index}>
                <td>{element.desc}</td>
                <td>{ element.pass }</td>
            <td >
            <button className="view-btn"   onClick={() =>   toggleForm(true, element)} >View </button>
            
            <button  className="delete-btn"  onClick={() => toggleForm(true,element)} >Delete </button>
            
            </td>
            
            </tr>
            )
        }
        </tbody>
        
        
             </table>
        </div>
    )
}


export default Table;