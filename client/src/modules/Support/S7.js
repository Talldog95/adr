import React from 'react';

function S7List (listArray) {
    var {listArray} = listArray
    var array = [];
    var s7Positions = ['105','106','107','108','109','110','111','112','113','114','115','116','117','118','119','120','121','122','123','124','125','126','127','128','129','130','131','132','531','532','533','534','535','536','537','539','544','545','546','547','548','549','550','551'];

    for (var milpacIdCombat in listArray[0].combat.profiles) {

        var name = listArray[0].combat.profiles[milpacIdCombat].realName;
        var rank = listArray[0].combat.profiles[milpacIdCombat].rank.rankFull 
        var primary = listArray[0].combat.profiles[milpacIdCombat].primary;
        var fullName = rank + ' ' + name;
        var primarySortKey = listArray[0].combat.profiles[milpacIdCombat].primary.positionId;

        if (s7Positions.includes(primary.positionId)) {

            array.push({
                "fullName": fullName,
                "position": primary,
                "isPrimary": 'true',
                "sortKey": primarySortKey,
                "itemKey": name
                
            })
        }

        for (var index in listArray[0].combat.profiles[milpacIdCombat].secondaries) {
            var secondary = listArray[0].combat.profiles[milpacIdCombat].secondaries[index]
            var secondarySortKey = listArray[0].combat.profiles[milpacIdCombat].secondaries[index].positionId;

            if (!s7Positions.includes(secondary.positionId)) {
                continue;
            }

            array.push({
                "fullName": fullName,
                "position": secondary,
                "isPrimary": 'false',
                "sortKey": secondarySortKey,
                "itemKey": name
            })
        }
    }; 

    for (var milpacIdReserve in listArray[0].reserve.profiles) {

        var rName = listArray[0].reserve.profiles[milpacIdReserve].realName;
        var rRank = listArray[0].reserve.profiles[milpacIdReserve].rank.rankFull 
        var rPrimary = listArray[0].reserve.profiles[milpacIdReserve].primary;
        var rFullName = rRank + ' ' + rName;
        var rPrimarySortKey = listArray[0].reserve.profiles[milpacIdReserve].primary.positionId;

        if (s7Positions.includes(rPrimary.positionId)) {

            array.push({
                "fullName": rFullName,
                "position": rPrimary,
                "isPrimary": 'true',
                "sortKey": rPrimarySortKey,
                "itemKey": rName
            })
        }

        for (var rIndex in listArray[0].reserve.profiles[milpacIdReserve].secondaries) {
            var rSecondary = listArray[0].reserve.profiles[milpacIdReserve].secondaries[rIndex]
            var rSecondarySortKey = listArray[0].reserve.profiles[milpacIdReserve].secondaries[rIndex].positionId;

            if (!s7Positions.includes(rSecondary.positionId)) {
                continue;
            }

            array.push({
                "fullName": rFullName,
                "position": rSecondary,
                "isPrimary": 'false',
                "sortKey": rSecondarySortKey,
                "itemKey": rName
            })
        }
    }; 

    array.sort((a,b) => a.sortKey - b.sortKey)
    
    return(
        <div className='WAGList'>
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Billet</th>
                        <th>sortKey</th>
                    </tr>
                </thead>
                <tbody>
                    {array.map( obj => {
                        return(
                            <tr key={index}>
                                <td>{obj.fullName}</td>
                                <td>{obj.position.positionTitle}</td>
                                <td>{obj.sortKey}</td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </div>
    )
}

export default S7List;