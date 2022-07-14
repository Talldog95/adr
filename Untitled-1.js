<div className='position-group--container'>
    <div className='position-group--title'>
        {title}
    </div>
    <div className='position-group--list'>
        <table>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Billet</th>
                </tr>
            </thead>
            <tbody>
                {array.map( obj => {
                    return(
                        <tr>
                            <td>{obj.fullName}</td>
                            <td>{obj.position.positionTitle}</td>
                        </tr>
                    )
                })}
            </tbody>
        </table>
    </div>
</div>


<PositionGroup listArray = {listArray} title= 'Regi Command'/>